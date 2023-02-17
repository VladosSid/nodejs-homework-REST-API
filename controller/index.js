const service = require("../service");
const { listContacts } = require("../models/contacts");

const get = async (req, res, next) => {
  // const data = await listContacts();
  try {
    const data = await service.getAllContacts(123);
    // console.log(data);

    res.status(200).json({
      contacts: data,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  get,
};
