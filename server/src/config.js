const mongoose = require("mongoose");
require("dotenv").config();

const connection_string = process.env.MONGODB_CONNECTION_STRING;


async function dbConnect(rew , res , next) {
    console.log("working ")
  try {
    await mongoose.connect(connection_string);
    console.log("mongodb connected");
    next()
  } catch (err) {
    console.log("couldn't connect to mongoDb");
    console.log(err.message);
    return;
  }
}

module.exports = dbConnect;
