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
}

module.exports = UserService;
