const crudRepository = require("./crud-repository");
const Like = require("../models/like");

class LikeRepository extends crudRepository {
  constructor() {
    super(Like);
  }

  async findByUserAndLikeable(data) {
    try {
      const response = await Like.findOne(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = LikeRepository;
