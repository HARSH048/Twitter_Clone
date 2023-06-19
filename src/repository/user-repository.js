const crudRepository = require("./crud-repository");
const User = require("../models/user");

class UserRepository extends crudRepository {
  constructor() {
    super(User);
  }
  async findBy(data) {
    try {
      const user = await User.findOne({ email: data });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
