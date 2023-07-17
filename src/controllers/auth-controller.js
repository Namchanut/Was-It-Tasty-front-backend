const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body;

  if (!email || !password) throw new Error("must have username & password");

  if (password.length < 4 || password.length > 10)
    throw new Error("Password must be 4-10 characters");

  bcrypt
    .hash(password, 10)
    .then((hashed) => {
      return User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashed,
        role: role,
      });
    })
    .then((rs) => {
      res.status(201).json({ msg: `user: '${rs.firstName}' created` });
    })
    .catch(next);
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({
    where: { email: email },
  })
    .then((user) => {
      if (!user) throw new Error("Cannot Login 1");
      return Promise.all([
        bcrypt.compare(password, user.password),
        Promise.resolve(user),
      ]);
    })
    .then(([pwOk, user]) => {
      if (!pwOk) throw new Error("Cannot Login 2");
      const payload = {
        id: user.id,
        email: user.email,
      };
      const token = jwt.sign(payload, `${process.env.JWT_SECRET_KEY}`, {
        expiresIn: "15d",
      });
      res.json({ token: token });
    })
    .catch(next);
};

exports.getMe = (req, res, next) => {
  const { id, email, role } = req.user;
  res.json({ id, email, role });
};
