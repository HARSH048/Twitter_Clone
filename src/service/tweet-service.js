const { TweetRepository, HashtagRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.Hashtagrepository = new HashtagRepository();
    this.Tweetrepository = new TweetRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#[a-zA-Z0-9_]+/g)
      .map((tag) => tag.substring(1).toLowerCase());
    const tweet = await this.Tweetrepository.create(data);
    let alreadyPresentTags = await this.Hashtagrepository.findByName(tags); //gives array of object with title field
    let titleofPresentTags = alreadyPresentTags.map((tags) => tags.title);
    let newTags = tags.filter((tag) => !titleofPresentTags.includes(tag));
    newTags = newTags.map((tag) => {
      return { title: tag, tweets: [tweet.id] };
    });
    const response = await this.Hashtagrepository.bulkcreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  }

  async get(tweetId) {
    try {
      const tweet = this.Tweetrepository.getwithcomment(tweetId);
      return tweet;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TweetService;
