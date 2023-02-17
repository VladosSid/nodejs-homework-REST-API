const Task = require("./schemas/task");

const getAllContacts = async (a) => {
  console.log(a);
  const data = await Task.find();
  console.log(data);

  return data;
};

const getContactById = (id) => {
  return Task.findOne({ _id: id });
};

const createContact = (name, email, phone) => {
  return Task.create({ name, email, phone });
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
};
