const express = require("express");
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs')

const router = express.Router();

const User = require("../../models/User");

// @route  GET api/users/test
// @desc   Test users endpoint
// access  Public

router.get("/test", (req, res) => res.json({ msg: "Users work" }));

// @route  GET api/users/register
// @desc   Register User
// access  Public

router.post("/register", (req, res) => {
  const { name, email, password } = req.body
  User.findOne({ email }).then(user => {
    if (user) {
      res.status(400).json({ email: "User with email already exists" });
    } else {
      const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' })
      const newUser = new User({
        name,
        email,
        password,
        avatar
      })

      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if(error) throw error
          newUser.password = hash
          newUser.save()
          .then(user => {
            res.json(user)
          })
          .catch(error => console.log(error))
        })
      })

    }
  });
});

module.exports = router;
