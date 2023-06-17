const { CommentRepository, TweetRepository } = require("../repository/index");

class CommentService {
  constructor() {
    this.Commentrepository = new CommentRepository();
    this.Tweetrepository = new TweetRepository();
  }

  async createComment(modelId, modeltype, userId, content) {
    if (modeltype == "Tweet") {
      var commentable = await this.Tweetrepository.get(modelId);
    } else if (modeltype == "Comment") {
      var commentable = await this.Commentrepository.get(modelId);
    } else {
      throw new Error("Unknown Model Type");
    }
    const comment = await this.Commentrepository.create({
      content: content,
      commentable: modelId,
      onModel: modeltype,
      userId: userId,
      comments: [],
    });
    commentable.comments.push(comment);
    await commentable.save();
    return comment;
  }
}

module.exports = CommentService;
