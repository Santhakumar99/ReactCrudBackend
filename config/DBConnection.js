const mongoose = require("mongoose");
const config = require("config");


// Dev DB
// Cluster is -> acs-v1
// const urlStr = `mongodb+srv://RoseM_Bilal:Pass@1234@acs-v1.z5ajy.mongodb.net/acs-db?retryWrites=true&w=majority`;

// const urlStr = `mongodb://alfieadmin:acs1%40Alfie@127.0.0.1:27017/acs-db?retryWrites=true&w=majority`;
const urlStr ="mongodb://0.0.0.0:27017/Delbi";
// const urlStr = "mongodb://localhost:27017/Delbi";
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Delbi";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });




// // Production DB
// // mongodb+srv://<username>@<cluster_name>-xbjm8.mongodb.net/<Db_name>

const connectDB = async () => {
  try {
    await mongoose.connect(urlStr, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    // Exit process with db connection failure
    // process.exit(1);
  }
};

module.exports = connectDB;
