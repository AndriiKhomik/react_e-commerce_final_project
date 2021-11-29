const Partner = require("../models/Partner");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addPartner = (req, res, next) => {
  Partner.findOne({ customId: req.body.customId }).then(partner => {
    if (partner) {
      return res.status(400).json({
        message: `Partner with customId "${partner.customId}" already exists`
      });
    } else {
      const data = _.cloneDeep(req.body);
      const newPartner = new Partner(queryCreator(data));

      newPartner
        .save()
        .then(partner => res.status(200).json(partner))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updatePartner = (req, res, next) => {
  Partner.findOne({ customId: req.params.customId })
    .then(partner => {
      if (!partner) {
        return res.status(400).json({
          message: `Partner with customId "${req.params.customId}" is not found.`
        });
      } else {
        const data = _.cloneDeep(req.body);
        const updatedPartner = queryCreator(data);

        Partner.findOneAndUpdate(
          { customId: req.params.customId },
          { $set: updatedPartner },
          { new: true }
        )
          .then(partner => res.json(partner))
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

exports.deletePartner = (req, res, next) => {
  Partner.findOne({ customId: req.params.customId }).then(async partner => {
    if (!partner) {
      return res.status(400).json({
        message: `Partner with customId "${req.params.customId}" is not found.`
      });
    } else {
      const partnerToDelete = await Partner.findOne({
        customId: req.params.customId
      });

      Partner.deleteOne({ customId: req.params.customId })
        .then(deletedCount =>
          res.status(200).json({
            message: `Partner witn name "${partnerToDelete.customId}" is successfully deleted from DB `,
            deletedDocument: partnerToDelete
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

exports.getPartners = (req, res, next) => {
  Partner.find()
    .then(partners => res.status(200).json(partners))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
