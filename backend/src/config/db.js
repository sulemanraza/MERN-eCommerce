const mongoose = require("mongoose");
const { URL } = require("./envConfig");

const connect = async () => {
  try {
    await mongoose.connect(URL);
    console.log("database connected!");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = connect;
