const PaymentMethod = require("../models/PaymentMethod");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addPaymentMethod = (req, res, next) => {
  PaymentMethod.findOne({ customId: req.body.customId }).then(paymentMethod => {
    if (paymentMethod) {
      return res.status(400).json({
        message: `Payment Method with customId "${paymentMethod.customId}" already exists`
      });
    } else {
      const data = _.cloneDeep(req.body);
      const newPaymentMethod = new PaymentMethod(queryCreator(data));

      newPaymentMethod
        .save()
        .then(paymentMethod => res.status(200).json(paymentMethod))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updatePaymentMethod = (req, res, next) => {
  PaymentMethod.findOne({ customId: req.params.customId })
    .then(paymentMethod => {
      if (!paymentMethod) {
        return res.status(400).json({
          message: `Payment Method with customId "${req.params.customId}" is not found.`
        });
      } else {
        const data = _.cloneDeep(req.body);
        const updatedPaymentMethod = queryCreator(data);

        PaymentMethod.findOneAndUpdate(
          { customId: req.params.customId },
          { $set: updatedPaymentMethod },
          { new: true }
        )
          .then(paymentMethod => res.json(paymentMethod))
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

exports.deletePaymentMethod = (req, res, next) => {
  PaymentMethod.findOne({ customId: req.params.customId }).then(
    async paymentMethod => {
      if (!paymentMethod) {
        return res.status(400).json({
          message: `Payment Method with customId "${req.params.customId}" is not found.`
        });
      } else {
        const paymentMethodToDelete = await PaymentMethod.findOne({
          customId: req.params.customId
        });

        PaymentMethod.deleteOne({ customId: req.params.customId })
          .then(deletedCount =>
            res.status(200).json({
              message: `Payment Method witn name "${paymentMethodToDelete.customId}" is successfully deleted from DB `,
              deletedDocument: paymentMethodToDelete
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

exports.getPaymentMethods = (req, res, next) => {
  PaymentMethod.find()
    .then(paymentMethods => res.status(200).json(paymentMethods))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getPaymentMethodById = (req, res, next) => {
  PaymentMethod.findOne({ customId: req.params.customId })
    .then(paymentMethod => res.status(200).json(paymentMethod))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
