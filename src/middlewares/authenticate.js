const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log(req.headers);
  if (!authorization || !authorization.startsWith("Bearer"))
    return res.status(401).json({ msg: "Unauthorized 1" });
  const token = authorization.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Unauthorized 2" });
  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

  User.findOne({
    where: { id: payload.id },
  }).then((user) => {
    if (!user) return res.status(401).json({ msg: "Unauthorized" });
    req.user = user;
    next();
  });
};
