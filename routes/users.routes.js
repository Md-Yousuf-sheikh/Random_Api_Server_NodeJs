const express = require("express");
const userController = require("../controllers/user.controllers");

const router = express.Router();

router.route("/all").get(userController.getAllUsers);
router.route("/random").get(userController.randomUser);
router.route("/save").post(userController.saveATools);
router.route("/update/:id").patch(userController.updateUser);
router.route("/delete/:id").delete(userController.deleteUser);

module.exports = router;
