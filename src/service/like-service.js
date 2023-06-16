const { TweetRepository, LikeRepository } = require("../repository/index");
const Like = require("../models/like");

class LikeService {
  constructor() {
    this.Likerepository = new LikeRepository();
    this.Tweetrepository = new TweetRepository();
  }

  async toggleLike(modelId, modeltype, userId) {
    if (modeltype == "Tweet") {
      var likeable = await this.Tweetrepository.getwithlikes(modelId);
    } else if (modeltype == "Comment") {
      //
    } else {
      throw new Error("unknown model type");
    }

    const likeExist = await this.Likerepository.findByUserAndLikeable({
      onModel: modeltype,
      likeable: modelId,
      user: userId,
    });

    if (likeExist) {
      likeable.likes.pull(likeExist.id);
      await likeable.save();
      await Like.findByIdAndDelete(likeExist.id);
      var isadded = true;
    } else {
      const newLike = await this.Likerepository.create({
        onModel: modeltype,
        likeable: modelId,
        user: userId,
      });

      likeable.likes.push(newLike);
      await likeable.save();
      var isadded = false;
    }
    return isadded;
  }
}

module.exports = LikeService;
