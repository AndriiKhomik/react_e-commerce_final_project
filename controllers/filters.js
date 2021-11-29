const Filter = require("../models/Filter");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addFilter = (req, res, next) => {
  Filter.findOne({ name: req.body.name, type: req.body.type }).then(filter => {
    if (filter) {
      return res.status(400).json({
        message: `Filter with type "${filter.type}" and name "${filter.name}" already exists`
      });
    } else {
      const initialQuery = _.cloneDeep(req.body);
      const newFilter = new Filter(queryCreator(initialQuery));

      newFilter
        .save()
        .then(filter => res.json(filter))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updateFilter = (req, res, next) => {
  Filter.findOne({ _id: req.params.id })
    .then(filter => {
      if (!filter) {
        return res
          .status(400)
          .json({
            message: `Filter with _id "${req.params.id}" is not found.`
          });
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedFilter = queryCreator(initialQuery);

        Filter.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedFilter },
          { new: true }
        )
          .then(filter => res.json(filter))
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

exports.deleteFilter = (req, res, next) => {
  Filter.findOne({ _id: req.params.id }).then(async filter => {
    if (!filter) {
      return res
        .status(400)
        .json({ message: `Filter with _id "${req.params.id}" is not found.` });
    } else {
      const filterToDelete = await Filter.findOne({ _id: req.params.id });

      Filter.deleteOne({ _id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Filter witn type "${filterToDelete.type}" and name "${filterToDelete.name}" is successfully deletes from DB `
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

exports.getFilters = (req, res, next) => {
  Filter.find()
    .then(filters => res.json(filters))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getFiltersByType = (req, res, next) => {
  Filter.find({ type: req.params.type })
    .then(filters => res.json(filters))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
