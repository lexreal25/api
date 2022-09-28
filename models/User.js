const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    roleId: { type: String, required: true, unique: true },
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    role: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
