const Size = require("../models/Size");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addSize = (req, res, next) => {
  Size.findOne({ name: req.body.name }).then(size => {
    if (size) {
      return res
        .status(400)
        .json({ message: `Size with name "${size.name}" already exists` });
    } else {
      const initialQuery = _.cloneDeep(req.body);
      const newSize = new Size(queryCreator(initialQuery));

      newSize
        .save()
        .then(size => res.json(size))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updateSize = (req, res, next) => {
  Size.findOne({ _id: req.params.id })
    .then(size => {
      if (!size) {
        return res
          .status(400)
          .json({ message: `Size with _id "${req.params.id}" is not found.` });
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedSize = queryCreator(initialQuery);

        Size.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedSize },
          { new: true }
        )
          .then(size => res.json(size))
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

exports.deleteSize = (req, res, next) => {
  Size.findOne({ _id: req.params.id }).then(async size => {
    if (!size) {
      return res
        .status(400)
        .json({ message: `Size with _id "${req.params.id}" is not found.` });
    } else {
      const sizeToDelete = await Size.findOne({ _id: req.params.id });

      Size.deleteOne({ _id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Size witn name "${sizeToDelete.name}" is successfully deletes from DB `
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

exports.getSizes = (req, res, next) => {
  Size.find()
    .then(sizes => res.json(sizes))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
