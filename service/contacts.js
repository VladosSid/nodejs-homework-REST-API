const Contact = require("./schemas/contact");
const { pagination } = require("../helpers/paginationContacts");

const getAllContacts = async (userId, page, limit) => {
  const contacts = await Contact.find({ owner: userId });

  if (page) {
    const paginationContacts = await pagination(contacts, page, limit);

    if (paginationContacts.message) {
      return paginationContacts;
    }

    return paginationContacts;
  }

  return contacts;
};

const getContactById = (userId, id) => {
  return Contact.findOne({ _id: id, owner: userId });
};

const createContact = (userId, name, email, phone, favorite) => {
  return Contact.create({ name, email, phone, favorite, owner: userId });
};

const removeContacts = (userId, id) => {
  return Contact.findByIdAndRemove({ owner: userId, _id: id });
};

const updateContact = (userId, id, data) => {
  return Contact.findByIdAndUpdate({ owner: userId, _id: id }, data, {
    new: true,
  });
};

const getFavorite = (userId, favorite) => {
  return Contact.find({ owner: userId, favorite: favorite });
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  removeContacts,
  updateContact,
  getFavorite,
};
