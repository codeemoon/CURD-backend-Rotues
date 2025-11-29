let mongoose = require("mongoose");

require('dotenv').config()

async function dbConnect() {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("Database conected");
  } catch (error) {
    console.log("Error while connecting database");
  }
}

module.exports = dbConnect;
