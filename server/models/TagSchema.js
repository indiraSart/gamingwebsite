const moongose = require("mongoose");
const{Schema, model } = mongoose;

const TagSchema = new Schema ({
    name: String
})


const Tag = model("Tag", tagSchema);

module.exports = Tag;