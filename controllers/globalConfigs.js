const GlobalConfig = require("../models/GlobalConfig");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addConfig = (req, res, next) => {
  GlobalConfig.findOne({ customId: req.body.customId }).then(config => {
    if (config) {
      return res.status(400).json({
        message: `Config with customId "${config.customId}" already exists`
      });
    } else {
      const configData = _.cloneDeep(req.body);
      const newConfig = new GlobalConfig(queryCreator(configData));

      newConfig
        .save()
        .then(config => res.status(200).json(config))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updateConfig = (req, res, next) => {
  GlobalConfig.findOne({ customId: req.params.customId })
    .then(config => {
      if (!config) {
        return res.status(400).json({
          message: `Config with customId "${req.params.customId}" is not found.`
        });
      } else {
        const configData = _.cloneDeep(req.body);
        const updatedConfig = queryCreator(configData);

        GlobalConfig.findOneAndUpdate(
          { customId: req.params.customId },
          { $set: updatedConfig },
          { new: true }
        )
          .then(config => res.json(config))
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

exports.deleteConfig = (req, res, next) => {
  GlobalConfig.findOne({ customId: req.params.customId }).then(async config => {
    if (!config) {
      return res.status(400).json({
        message: `Config with customId "${req.params.customId}" is not found.`
      });
    } else {
      const configToDelete = await GlobalConfig.findOne({
        customId: req.params.customId
      });

      GlobalConfig.deleteOne({ customId: req.params.customId })
        .then(deletedCount =>
          res.status(200).json({
            message: `Config witn name "${configToDelete.customId}" is successfully deleted from DB `
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

exports.getConfigs = (req, res, next) => {
  GlobalConfig.find()
    .then(configs => res.status(200).json(configs))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getConfigById = (req, res, next) => {
  GlobalConfig.findOne({ customId: req.params.customId })
    .then(configs => res.status(200).json(configs))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
