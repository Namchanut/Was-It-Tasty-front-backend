const { Content } = require("../models");

exports.getAllContent = (req, res, next) => {
  Content.findAll({})
    .then((rs) => {
      res.status(200).json(rs);
    })
    .catch(next);
};

exports.getContentById = (req, res, next) => {
  const { id } = req.params;
  Content.findOne({
    attributes: ["title", "subTitle", "image", "ingredients", "directions"],
    where: { id: id },
  })
    .then((rs) => {
      res.status(200).json(rs);
    })
    .catch(next);
};

exports.createContent = (req, res, next) => {
  const {
    title,
    subTitle,
    image,
    ingredients,
    directions,
    cardId,
    typefoodId,
  } = req.body;
  Content.create({
    title: title,
    subTitle: subTitle,
    image: image,
    ingredients: ingredients,
    directions: directions,
    userId: req.user.id,
    cardId: cardId,
    typefoodId: typefoodId,
  })
    .then((rs) => {
      res.status(200).json(rs);
    })
    .catch(next);
};

exports.deleteContent = (req, res, next) => {
  const { id } = req.params;
  Content.destroy({
    where: { id: id },
  })
    .then((rs) => {
      if (rs === 0) {
        throw new Error("Cannot Delete!!");
      }
      res.status(200).json(rs);
    })
    .catch(next);
};

exports.updateContent = (req, res, next) => {
  const { id } = req.params;
  const {
    title,
    supTitle,
    image,
    ingredients,
    directions,
    cardId,
    userId,
    typefoodId,
  } = req.body;
  Content.update(
    { ...req.body, userId: req.user.id },
    {
      where: { id: id },
    }
  )
    .then((rs) => {
      res.status(200).json(rs);
    })
    .catch(next);
};
