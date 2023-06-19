const { UserRepository } = require("../repository/index");

class UserService {
  constructor() {
    this.Userrepository = new UserRepository();
  }

  async signup(data) {
    try {
      const user = this.Userrepository.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signin(data) {
    try {
      const user = await this.Userrepository.findBy(data.email);
      if (!user) {
        throw { message: "no user found" };
      }
      if (!user.comparePassword(data.password)) {
        throw { message: "incorrect password" };
      }
      const token = user.genJWT();
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
