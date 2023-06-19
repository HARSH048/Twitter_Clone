const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

userSchema.methods.comparePassword = function comparePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.genJWT = function generate() {
  return jwt.sign({ id: this.id, email: this.email }, "twitter", {
    expiresIn: "1d",
  });
};
const User = mongoose.model("User", userSchema);

module.exports = User;
