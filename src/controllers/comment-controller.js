const { Comment } = require("../models");

exports.createComment = (req, res, next) => {
  const { message, userId, contentId } = req.body;
  Comment.create({
    message: message,
    userId: userId,
    contentId: contentId,
  })
    .then((rs) => {
      res.status(200).json(rs);
    })
    .catch(next);
};
