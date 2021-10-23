const commonValidationRules = require("./formValidationRules");
const FormValidator = require("./FormValidator");

module.exports = function validationHelper(data) {
  const fields = Object.keys(data);

  const currentValidationRules = FormValidator.checkValidity(
    commonValidationRules,
    fields
  );

  const customValidator = new FormValidator(currentValidationRules);
  const validation = customValidator.validate(data);

  const errors = validation;

  return validation;
};
