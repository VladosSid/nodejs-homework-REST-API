const express = require("express");
const ctrlUsers = require("../../controller/users");
const { validationUserToken } = require("../../middlewares/userAuthorazed");

const router = express.Router();

router.post("/singup", ctrlUsers.singup);

router.post("/login", ctrlUsers.login);

router.get("/logout", validationUserToken, ctrlUsers.logout);

router.get("/current", validationUserToken, ctrlUsers.current);

router.patch(
  "/subscription",
  validationUserToken,
  ctrlUsers.updateSubscription
);

module.exports = router;
