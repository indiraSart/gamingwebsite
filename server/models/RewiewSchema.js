const moongose = require("mongoose");

const{Schema, model } = mongoose;

const reviewSchema = new Schema ({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "User",
    required: true},
    comment: String,
    recommended: Boolean,
    stars: {
        type: Number,
        min: [1, "Please give a positive integer between 1 and 6"],
        max: [6, "Please enter a positive integer between 1 and 6"]

    }

})

const Review = model("Review", userSchema);

module.exports = Tag;
