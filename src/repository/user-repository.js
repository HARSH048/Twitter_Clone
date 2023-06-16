const crudRepository = require("./crud-repository");
const User = require("../models/user");

class UserRepository extends crudRepository {
  constructor() {
    super(User);
  }
}

module.exports = UserRepository;
