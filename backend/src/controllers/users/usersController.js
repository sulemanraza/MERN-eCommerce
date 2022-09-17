const { validationResult } = require("express-validator");
const { UserModel } = require("../../models/User.model");
const { hashPassword } = require("../../services/authServices");

// @route Post /api/register === @access Public === @desc Create user and return a token
module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, password } = req.body;
    try {
      const emailExist = await UserModel.findOne({ email });
      if (!emailExist) {
        const hashed = await hashPassword(password);
        const user = await UserModel.create({
          name,
          email,
          password: hashed,
        });
        //   const token = createToken({ id: user._id, name: user.name });
        return res.status(201).json({ msg: "Your account has been created!" });
      } else {
        // email already taken
        return res.status(400).json({
          errors: [{ msg: `${email} is already taken`, param: "email" }],
        });
      }
    } catch (error) {
      return res.status(500).json("Server internal error!");
    }
  } else {
    // validations failed
    return res.status(400).json({ errors: errors.array() });
  }
};
