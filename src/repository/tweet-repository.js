const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async get(tweetId) {
    try {
      const tweet = await Tweet.findById(tweetId);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getwithcomment(tweetId) {
    try {
      const tweet = await Tweet.findById(tweetId).populate({
        path: "comments",
      });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async destroy(tweetId) {
    try {
      const tweet = await Tweet.findByIdAndRemove(tweetId);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;