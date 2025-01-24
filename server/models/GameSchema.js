const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const gameSchema = new Schema({
  title: { type: String },
  price: { type: Number },
  discount: { type: Number },
  publisher: { type: String },
  developer: { type: String },
  releaseDate: { type: Date },
  status: { type: String },
  description: { type: String },
  shortDesription: { type: String },
  img: [{ type: Array }],
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
      required: false,
    },
  ],

  reviews: { type: Array },
});

const game = model("game", gameSchema);

module.exports = game;
