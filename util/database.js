const mongodb = require("mongodb");
const config = require('../config/keys')

const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    config.MongoURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
    .then(client => {
      console.log("Connected");
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
