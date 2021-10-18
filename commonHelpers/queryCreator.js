const FormValidator = require("../validation/FormValidator");
const isJSON = require("./isJSON");

const excludedParams = ["letterSubject", "letterHtml"];

module.exports = function queryCreator(data) {
  return Object.keys(data).reduce((queryObject, param) => {
    if (isJSON(data[param])) {
      queryObject[param] = JSON.parse(data[param]);
    } else if (
      !FormValidator.isEmpty(data[param]) &&
      !excludedParams.includes(param)
    ) {
      queryObject[param] = data[param];
    }

    return queryObject;
  }, {});
};
