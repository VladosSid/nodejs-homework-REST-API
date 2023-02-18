const Contact = require("./schemas/contact");

const getAllContacts = async () => {
  return Contact.find();
};

const getContactById = (id) => {
  return Contact.findOne({ _id: id });
};

const createContact = (name, email, phone) => {
  return Contact.create({ name, email, phone });
};

const removeContacts = (id) => {
  return Contact.findByIdAndRemove({ _id: id });
};

const updateContact = (id, data) => {
  return Contact.findByIdAndUpdate({ _id: id }, data, { new: true });
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  removeContacts,
  updateContact,
};
