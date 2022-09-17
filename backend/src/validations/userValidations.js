const { body } = require("express-validator");

module.exports.registerValidations = [
  body("name").not().isEmpty().escape().trim().withMessage("name is required"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .trim()
    .escape()
    .withMessage("email is required"),
  body("password")
    .isLength({ min: 5 })
    .trim()
    .withMessage("password should be 6 characters long"),
];
