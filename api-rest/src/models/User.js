const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER", "RESTAURANT"],
      required: true,
      default: "USER",
    },
  },
  { timestamps: true }
);
Schema.methods.toJSON = function () {
  return {
    _id: this._id,
    email: this.email,
    role: this.role,
  };
};

module.exports = mongoose.model("User", Schema);
