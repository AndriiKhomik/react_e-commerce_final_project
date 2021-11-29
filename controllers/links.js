const Link = require("../models/Link");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addLinks = (req, res, next) => {
  const linksData = _.cloneDeep(req.body);
  const newLinks = new Link(queryCreator(linksData));

  newLinks
    .save()
    .then(links => res.json(links))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.updateLinks = (req, res, next) => {
  Link.findOne({ _id: req.params.id })
    .then(links => {
      if (!links) {
        return res
          .status(400)
          .json({ message: `Links with _id "${req.params.id}" is not found.` });
      } else {
        const linksData = _.cloneDeep(req.body);
        const updatedLinks = queryCreator(linksData);

        Link.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedLinks },
          { new: true }
        )
          .then(links => res.json(links))
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
exports.deleteLinks = (req, res, next) => {
  Link.findOne({ _id: req.params.id }).then(async links => {
    if (!links) {
      return res
        .status(400)
        .json({ message: `List with _id "${req.params.id}" is not found.` });
    } else {
      const linksToDelete = await Link.findOne({ _id: req.params.id });

      Link.deleteOne({ _id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Links witn title "${linksToDelete.title}" is successfully deletes from DB. `
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

exports.getLinks = (req, res, next) => {
  Link.find()
    .then(links => res.json(links))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getLink = (req, res, next) => {
  Link.findOne({ _id: req.params.id })
    .then(links => res.json(links))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
