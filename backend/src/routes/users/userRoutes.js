const express = require("express");
const { register } = require("../../controllers/users/usersController");
const { registerValidations } = require("../../validations/userValidations");
const router = express.Router();

router.post("/register", registerValidations, register);

module.exports = router;
