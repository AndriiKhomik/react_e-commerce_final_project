const Color = require("../models/Color");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addColor = (req, res, next) => {
  Color.findOne({ name: req.body.name }).then(color => {
    if (color) {
      return res
        .status(400)
        .json({ message: `Color with name "${color.name}" already exists` });
    } else {
      const initialQuery = _.cloneDeep(req.body);
      const newColor = new Color(queryCreator(initialQuery));

      newColor
        .save()
        .then(color => res.json(color))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updateColor = (req, res, next) => {
  Color.findOne({ _id: req.params.id })
    .then(color => {
      if (!color) {
        return res
          .status(400)
          .json({ message: `Color with _id "${req.params.id}" is not found.` });
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedColor = queryCreator(initialQuery);

        Color.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedColor },
          { new: true }
        )
          .then(color => res.json(color))
          .catch(err =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `
            })
          );
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.deleteColor = (req, res, next) => {
  Color.findOne({ _id: req.params.id }).then(async color => {
    if (!color) {
      return res
        .status(400)
        .json({ message: `Color with _id "${req.params.id}" is not found.` });
    } else {
      const colorToDelete = await Color.findOne({ _id: req.params.id });

      Color.deleteOne({ _id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Color witn name "${colorToDelete.name}" is successfully deletes from DB `
          })
        )
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.getColors = (req, res, next) => {
  Color.find()
    .then(colors => res.json(colors))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
