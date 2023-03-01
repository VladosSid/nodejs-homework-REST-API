const pagination = (data, page, limit = 5) => {
  const pagStart = (page - 1) * limit;
  const pagEnd = page * limit;

  const pagContacts = data.slice(pagStart, pagEnd);

  if (pagContacts.length === 0) {
    return {
      message: `Pagination Error!!! Contacts in user = ${data.length}. Default limited = 5`,
    };
  }

  return pagContacts;
};

module.exports = { pagination };
