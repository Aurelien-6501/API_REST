const mongoose = require("mongoose");
const User = require("./User");

const Schema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
  },
  { timestamps: true }
);
Schema.methods.toJSON = function () {
  return {
    _id: this._id,
    text: this.text,
    user_id: this.user_id,
  };
};

module.exports = mongoose.model("Post", Schema);
