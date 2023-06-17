const crudRepository = require("./crud-repository");
const Comment = require("../models/comment");
class CommentRepository extends crudRepository {
  constructor() {
    super(Comment);
  }
}

module.exports = CommentRepository;
