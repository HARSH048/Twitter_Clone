const CommentService = require("../service/comment-service");

const Commentservice = new CommentService();

const createComment = async (req, res) => {
  try {
    const comment = await Commentservice.createComment(
      req.query.modelId,
      req.query.modelType,
      req.user.id,
      req.body.content
    );
    return res.status(201).json({
      success: true,
      message: "successfully create the comment",
      err: {},
      data: comment,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      err: error,
      data: {},
    });
  }
};

module.exports = { createComment };
