const express = require("express");
const ctrlContacts = require("../../controller");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("./../../models/contacts.js");

const {
  validatePost,
  validatePut,
} = require("./../../helpers/validateBody.js");

const router = express.Router();

router.get("/", ctrlContacts.get);

router.get("/:contactId", ctrlContacts.getById);

router.post("/", ctrlContacts.postContact);

router.delete("/:contactId", ctrlContacts.remove);

router.put("/:contactId", ctrlContacts.put);

router.patch("/:contactId/favorite", ctrlContacts.patchFavorite);

module.exports = router;
