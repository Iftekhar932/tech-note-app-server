const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
  },
  {
    password: { type: String, required: true },
  },
  {
    roles: [{ type: String, default: "Employee" }],
  },
  {
    active: [{ type: boolean, default: true }],
  }
);

module.exports = mongoose.model("User", userSchema);

//🍎🍎🍎1:12:50 I'm supposed to learn mongoose a little bit for this file otherwise I can't understand a thing
