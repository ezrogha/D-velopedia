const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
// const url = `mongodb+srv://rogha_user:TMojP5SpXuVJqIQA@cluster0-1rscx.mongodb.net/test?retryWrites=true&w=majority`;

// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// module.exports = client
const mongoConnect = callback => {
  MongoClient.connect(
    `mongodb+srv://rogha_user:TMojP5SpXuVJqIQA@cluster0-1rscx.mongodb.net/test?retryWrites=true&w=majority`,
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
