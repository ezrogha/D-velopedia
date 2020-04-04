const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const users = require('./routes/api/users')

const dbUrl = require("./config/keys").MongoURL;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => res.send("Hola"));

//Use Routes
app.use("/api/posts", posts)
app.use("/api/profile", profile)
app.use("/api/users", users)

const port = process.env.PORT || 3000;

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