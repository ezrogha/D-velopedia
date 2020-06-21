const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')

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

  // // Request methods to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // // Request headers to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  // res.setHeader('Access-Control-Request-Headers', 'X-Requested-With,content-type');

  // // Include cookies in the requests sent
  // // to the API
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

require('./config/passport')(passport)

//Use Routes
app.get("/", (req, res) => {
  res.json({ "message": "Welcome" })
})
app.use("/api/posts", posts)
app.use("/api/profile", profile)
app.use("/api/users", users)

// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static("client/server/static/wV7s_Fsy4K0dtAcrDt5xs"))

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'out', 'index.html'))
//   })
// }

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