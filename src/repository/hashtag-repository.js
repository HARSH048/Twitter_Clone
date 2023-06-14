const Hashtag = require("../models/hashtag");

class HashtagRepository {
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkcreate(data) {
    try {
      const tag = await Hashtag.insertMany(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async get(tweetId) {
    try {
      const tag = await Hashtag.findById(tweetId);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(tweetId) {
    try {
      const response = await Hashtag.findByIdAndRemove(tweetId);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async findByName(titleList) {
    try {
      const tag = await Hashtag.find({
        title: titleList,
      });
      return tag;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HashtagRepository;
