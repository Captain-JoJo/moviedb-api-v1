const mongoose = require("mongoose")
const db = require('../config')
mongoose.connect(db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

//MongoDB schema
const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Need a name"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const Item = mongoose.model("Item", inventorySchema)
const pear = new Item({
    name: "Pear",
    rating: 7, 
    review: "Awesome fruit!"
})
pear.save()

module.exports = inventorySchema