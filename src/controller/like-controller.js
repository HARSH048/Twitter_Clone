const LikeService = require("../service/like-service");

const Likeservice = new LikeService();

const toggleLike = async (req, res) => {
  try {
    const response = Likeservice.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    return res.status(200).json({
      success: true,
      message: "successfull toggle the like",
      data: response,
      err: {},
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
  toggleLike,
};
