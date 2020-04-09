const express = require("express");
const router = express.Router();
const passport = require("passport");
const Profile = require("../../models/Profile");

//Validation
const validateProfileInput = require("../../validation/profile");
const validateExperienceInput = require('../../validation/experience');
const validateEducationInput = require('../../validation/education');

// @route  GET api/profile/test
// @desc   Test profile endpoint
// access  Public

router.get("/test", (req, res) => res.json({ msg: "Profile work" }));

// @route  GET api/profile/all
// @desc   Get all user profiles
// access  Public
router.get("/all", (req, res) => {
  const errors = {}

  Profile.find()
    .populate("user", ["name", "avatar"])
    .then(profiles => {
      if(!profiles) {
        errors.noprofile = "No profiles currently available"
        return res.status(404).json(errors)
      }

      return res.json(profiles)
    }).catch(err => res.status(404).json(err))
})

// @route  GET api/profile/handle/:handle
// @desc   Get user profile by handle
// access  Public
router.get("/handle/:handle", (req, res) => {
  const errors = {}

  Profile.findOne({ handle: req.params.handle })
  .populate("user", ["name", "avatar"])
  .then(profile => {
    if(!profile) {
      errors.nohandle = "Selected user doesnot have a profile"
      return res.status(404).json(errors)
    }

    return res.json(profile)
  }).catch(err => res.status(404).json(err))

})


// @route  GET api/profile/user/:user_id
// @desc   Get user profile by user_id
// access  Public
router.get("/user/:user_id", (req, res) => {
  const errors = {}

  Profile.findOne({ user: req.params.user_id })
  .populate("user", ["name", "avatar"])
  .then(profile => {
    if(!profile) {
      errors.nohandle = "Selected user doesnot have a profile"
      return res.status(404).json(errors)
    }

    return res.json(profile)
  }).catch(err => res.status(404).json(err))

})


// @route  GET api/profile/
// @desc   Get current user profile
// access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          res.status(400).json(errors);
        }
        return res.json(profile);
      })
      .catch(err => {
        return res.status(400).json(err);
      });
  }
);

// @route  POST api/profile/
// @desc   Post current user profile
// access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateProfileInput(req.body);
    // Check data validity
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const profileData = {};

    profileData.user = req.user.id;

    if (req.body.handle) profileData.handle = req.body.handle;
    if (req.body.company) profileData.company = req.body.company;
    if (req.body.website) profileData.website = req.body.website;
    if (req.body.location) profileData.location = req.body.location;
    if (req.body.bio) profileData.bio = req.body.bio;
    if (req.body.status) profileData.status = req.body.status;
    if (req.body.githubusername)
      profileData.githubusername = req.body.githubusername;

    // Skills
    if (typeof req.body.skills !== undefined) {
      profileData.skills = req.body.skills.split(",");
    }

    // Social
    profileData.social = {};
    if (req.body.youtube) profileData.social.youtube = req.body.youtube;
    if (req.body.twitter) profileData.social.twitter = req.body.twitter;
    if (req.body.facebook) profileData.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileData.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileData.social.instagram = req.body.instagram;

    // let errors = {};

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileData },
          { new: true }
        ).then(profile => {
          return res.json(profile);
        });
      } else {
        Profile.findOne({ handle: profileData.handle }).then(profile => {
          if (profile) {
            errors.handle = "This handle is being used by another user";
            res.status(400).json(errors);
          }
        });
        new Profile(profileData).save().then(profile => res.json(profile));
      }
    });
  }
);

// @route   POST api/profile/experience
// @desc    Add experience to profile
// @access  Private
router.post(
  '/experience',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add to exp array
      profile.experience.unshift(newExp);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/education
// @desc    Add education to profile
// @access  Private
router.post(
  '/education',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        fieldofstudy: req.body.fieldofstudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add to exp array
      profile.education.unshift(newEdu);

      profile.save().then(profile => res.json(profile));
    });
  }
);

module.exports = router;
