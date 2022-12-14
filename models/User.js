const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: { type: String, require: true, trim:true },
    lname: { type: String, require: true },
    roleid: { type: String, required: true, unique: true },
    role: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
    signature:{type: String, trim:true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
