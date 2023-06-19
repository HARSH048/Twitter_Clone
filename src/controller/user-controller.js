const UserService = require("../service/user-service");
const Userservice = new UserService();

const signup = async (req, res) => {
  try {
    const user = await Userservice.signup(req.body);
    return res.status(201).json({
      success: true,
      message: "successfully signup the user",
      err: {},
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      err: error,
      data: {},
    });
  }
};

const signin = async (req, res) => {
  try {
    const user = await Userservice.signin(req.body);
    return res.status(201).json({
      success: true,
      message: "successfully signin the user",
      err: {},
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      err: error,
      data: {},
    });
  }
};

module.exports = { signup, signin };
