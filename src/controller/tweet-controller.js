const TweetService = require("../service/tweet-service");
const Tweetservice = new TweetService();

const createTweet = async (req, res) => {
  try {
    const tweet = await Tweetservice.create(req.body);
    return res.status(201).json({
      success: true,
      message: "successfully create the tweet",
      err: {},
      data: tweet,
    });
  } catch (error) {
    return res.status(201).json({
      success: false,
      message: "something went wrong",
      err: error,
      data: {},
    });
  }
};

const getTweet = async (req, res) => {
  try {
    const tweet = await Tweetservice.get(req.params.id);
    return res.status(201).json({
      success: true,
      message: "successfully get the tweet",
      err: {},
      data: tweet,
    });
  } catch (error) {
    return res.status(201).json({
      success: false,
      message: "something went wrong",
      err: error,
      data: {},
    });
  }
};

module.exports = {
  createTweet,
  getTweet,
};
