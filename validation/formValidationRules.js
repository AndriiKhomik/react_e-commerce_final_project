const FormValidator = require("./FormValidator");
const moment = require("moment");

// Rules for all form fields for validation
const formValidationRules = [
  {
    field: "firstName",
    method: FormValidator.isEmpty,
    validWhen: false,
    message: "First Name is required."
  },
  {
    field: "firstName",
    method: "matches",
    validWhen: true,
    args: [/^[a-zA-Zа-яА-Я]+$/],
    message: "Allowed characters for First Name is a-z, A-Z, а-я, А-Я."
  },
  {
    field: "firstName",
    method: "isLength",
    validWhen: true,
    args: [{ min: 2, max: 25 }],
    message: "First Name must be between 2 and 25 characters"
  },
  {
    field: "lastName",
    method: FormValidator.isEmpty,
    validWhen: false,
    message: "Last Name is required."
  },
  {
    field: "lastName",
    method: "matches",
    validWhen: true,
    args: [/^[a-zA-Zа-яА-Я]+$/],
    message: "Allowed characters for Last Name is a-z, A-Z, а-я, А-Я."
  },
  {
    field: "lastName",
    method: "isLength",
    validWhen: true,
    args: [{ min: 2, max: 25 }],
    message: "Last Name must be between 2 and 25 characters"
  },
  {
    field: "email",
    method: FormValidator.isEmpty,
    validWhen: false,
    message: "Email is required."
  },
  {
    field: "email",
    method: "isEmail",
    validWhen: true,
    message: "That is not a valid email."
  },
  {
    field: "login",
    method: FormValidator.isEmpty,
    validWhen: false,
    message: "Login is required."
  },
  {
    field: "login",
    method: "matches",
    validWhen: true,
    args: [/^[a-zA-Z0-9]+$/],
    message: "Allowed characters for login is a-z, A-Z, 0-9."
  },
  {
    field: "login",
    method: "isLength",
    validWhen: true,
    args: [{ min: 3, max: 10 }],
    message: "Login must be between 3 and 10 characters"
  },
  {
    field: "loginOrEmail",
    method: FormValidator.isEmpty,
    validWhen: false,
    message: "Login or Email is required."
  },
  {
    field: "password",
    method: FormValidator.isEmpty,
    validWhen: false,
    message: "Password is required."
  },
  {
    field: "password",
    method: "matches",
    validWhen: true,
    args: [/^[a-zA-Z0-9]+$/],
    message: "Allowed characters for password is a-z, A-Z, 0-9."
  },
  {
    field: "password",
    method: "isLength",
    validWhen: true,
    args: [{ min: 7, max: 30 }],
    message: "Password must be between 7 and 30 characters"
  },
  {
    field: "newPassword",
    method: FormValidator.isEmpty,
    validWhen: false,
    message: "New Password is required."
  },
  {
    field: "newPassword",
    method: "matches",
    validWhen: true,
    args: [/^[a-zA-Z0-9]+$/],
    message: "Allowed characters for password is a-z, A-Z, 0-9."
  },
  {
    field: "newPassword",
    method: "isLength",
    validWhen: true,
    args: [{ min: 7, max: 30 }],
    message: "Password must be between 7 and 30 characters"
  },
  {
    field: "telephone",
    method: "matches",
    args: [/^\+380\d{3}\d{2}\d{2}\d{2}$/],
    validWhen: true,
    message: "That is not a valid phone number."
  },
  {
    field: "isAdmin",
    method: "isBoolean",
    validWhen: true,
    message: "isAdmin field must be true or false"
  },
  {
    field: "enabled",
    method: "isBoolean",
    validWhen: true,
    message: "isAdmin field must be true or false"
  },
  {
    field: "letterSubject",
    method: FormValidator.isEmpty,
    validWhen: false,
    message:
      "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter."
  },
  {
    field: "letterHtml",
    method: FormValidator.isEmpty,
    validWhen: false,
    message:
      "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter."
  }
];

module.exports = formValidationRules;
