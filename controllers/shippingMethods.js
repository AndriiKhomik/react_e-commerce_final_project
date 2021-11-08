const ShippingMethod = require("../models/ShippingMethod");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addShippingMethod = (req, res, next) => {
  ShippingMethod.findOne({ customId: req.body.customId }).then(
    shippingMethod => {
      if (shippingMethod) {
        return res.status(400).json({
          message: `Shipping Method with customId "${shippingMethod.customId}" already exists`
        });
      } else {
        const data = _.cloneDeep(req.body);
        const newShippingMethod = new ShippingMethod(queryCreator(data));

        newShippingMethod
          .save()
          .then(shippingMethod => res.status(200).json(shippingMethod))
          .catch(err =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `
            })
          );
      }
    }
  );
};

exports.updateShippingMethod = (req, res, next) => {
  ShippingMethod.findOne({ customId: req.params.customId })
    .then(shippingMethod => {
      if (!shippingMethod) {
        return res.status(400).json({
          message: `Shipping Method with customId "${req.params.customId}" is not found.`
        });
      } else {
        const data = _.cloneDeep(req.body);
        const updatedShippingMethod = queryCreator(data);

        ShippingMethod.findOneAndUpdate(
          { customId: req.params.customId },
          { $set: updatedShippingMethod },
          { new: true }
        )
          .then(shippingMethod => res.json(shippingMethod))
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

exports.deleteShippingMethod = (req, res, next) => {
  ShippingMethod.findOne({ customId: req.params.customId }).then(
    async shippingMethod => {
      if (!shippingMethod) {
        return res.status(400).json({
          message: `Shipping Method with customId "${req.params.customId}" is not found.`
        });
      } else {
        const shippingMethodToDelete = await ShippingMethod.findOne({
          customId: req.params.customId
        });

        ShippingMethod.deleteOne({ customId: req.params.customId })
          .then(deletedCount =>
            res.status(200).json({
              message: `Shipping method witn name "${shippingMethodToDelete.customId}" is successfully deleted from DB `,
              deletedDocument: shippingMethodToDelete
            })
          )
          .catch(err =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `
            })
          );
      }
    }
  );
};

exports.getShippingMethods = (req, res, next) => {
  ShippingMethod.find()
    .then(shippingMethods => res.status(200).json(shippingMethods))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getShippingMethodById = (req, res, next) => {
  ShippingMethod.findOne({ customId: req.params.customId })
    .then(shippingMethod => res.status(200).json(shippingMethod))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
