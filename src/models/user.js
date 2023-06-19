const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(8);
  const encyptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encyptedPassword;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
