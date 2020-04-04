const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const router = express.Router();

const keys = require("../../config/keys");
const User = require("../../models/User");

// @route  GET api/users/test
// @desc   Test users endpoint
// access  Public
router.get("/test", (req, res) => res.json({ msg: "Users work" }));

// @route  GET api/users/register
// @desc   Register User
// access  Public
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (user) {
      res.status(400).json({ email: "User with email already exists" });
    } else {
      const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });
      const newUser = new User({
        name,
        email,
        password,
        avatar
      });

      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) throw error;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.json(user);
            })
            .catch(error => console.log(error));
        });
      });
    }
  });
});

// @route  GET api/users/login
// @desc   Login User
// access  Public
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        return res.status(400).json({ msg: "Password is incorrect" });
      } else {
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar
        };

        // Jwt sign
        jwt.sign(
          payload,
          keys.SecretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            return res.json({ success: true, token: `Bearer ${token}` });
          }
        );
        
      }
    });
  });
});


// @route  GET api/users/current
// @desc   Return current User
// access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  })
})

module.exports = router;
