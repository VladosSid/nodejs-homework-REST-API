const User = require("./schemas/users");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const findUser = (email) => {
  return User.findOne({ email });
};

const singup = async (email, password) => {
  const checkoutUser = await findUser(email);
  if (checkoutUser) {
    return null;
  }

  try {
    const newUser = new User({ email, password });
    newUser.setPassword(password);

    return User.create(newUser);
  } catch (err) {
    return err.message;
  }
};

const login = async (email, password) => {
  const checkoutUser = await findUser(email);

  if (!checkoutUser || !checkoutUser.validPassword(password)) {
    return null;
  }

  const payload = {
    userId: checkoutUser.id,
  };

  const token = jwt.sign(payload, SECRET);

  const newTokenUser = await User.findByIdAndUpdate(checkoutUser._id, {
    token: token,
  });

  return { newTokenUser, token };
};

const logout = async (userId) => {
  const newTokenUser = await User.findByIdAndUpdate(userId, {
    token: null,
  });
};

const subscription = async (userId, subscription) => {
  const data = await User.findByIdAndUpdate(userId, { subscription });

  const user = await User.findById(userId);
  return user;
};

module.exports = {
  singup,
  login,
  logout,
  subscription,
};
