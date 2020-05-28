const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const passport = require('passport')

const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const users = require('./routes/api/users')

const dbUrl = require("./config/keys").MongoURL;
const constants = require("./config/constants");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(function (req, res, next) {

  // Website to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Include cookies in the requests sent
  // to the API
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

require('./config/passport')(passport)

//Use Routes
app.use("/api/posts", posts)
app.use("/api/profile", profile)
app.use("/api/users", users)

const port = process.env.PORT || 5000;

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.log("Mongo Connected")
  )
  .catch(err => {
      console.log(err)
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})