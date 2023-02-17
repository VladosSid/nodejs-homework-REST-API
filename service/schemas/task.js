const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const task = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Task = mongoose.model("contacts", task);
mongoose.set("strictQuery", true);

module.exports = Task;