const Page = require("../models/Page");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addPage = (req, res, next) => {
  Page.findOne({ customId: req.body.customId }).then(page => {
    if (page) {
      res.status(400).json({
        message: `Page with customId '${page.customId}' is already exists. cutomId must be unique.`
      });
    } else {
      const pageData = _.cloneDeep(req.body);
      const newPage = new Page(queryCreator(pageData));

      newPage
        .save()
        .then(page => res.json(page))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updatePage = (req, res, next) => {
  Page.findOne({ customId: req.params.customId })
    .then(page => {
      if (!page) {
        return res.status(400).json({
          message: `Page with customId "${req.params.customId}" is not found.`
        });
      } else {
        const pageData = _.cloneDeep(req.body);
        const updatedPage = queryCreator(pageData);

        Page.findOneAndUpdate(
          { customId: req.params.customId },
          { $set: updatedPage },
          { new: true }
        )
          .then(page => res.json(page))
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

exports.deletePage = (req, res, next) => {
  Page.findOne({ customId: req.params.customId }).then(async page => {
    if (!page) {
      return res.status(400).json({
        message: `Page with customId "${req.params.customId}" is not found.`
      });
    } else {
      const pageToDelete = await Page.findOne({
        customId: req.params.customId
      });

      Page.deleteOne({ customId: req.params.customId })
        .then(deletedCount =>
          res.status(200).json({
            message: `Page witn customId "${pageToDelete.customId}" is successfully deletes from DB.`,
            deletedPageInfo: pageToDelete
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

exports.getPage = (req, res, next) => {
  Page.findOne({ customId: req.params.customId })
    .then(page => {
      if (!page) {
        res.status(400).json({
          message: `Page with customId "${req.params.customId}" is not found.`
        });
      } else {
        res.status(200).json(page);
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
