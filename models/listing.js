const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://via.placeholder.com/300", // Default placeholder image
        set: (v) => 
            v === ""
       ? "https://via.placeholder.com/300":v,
    },
    price: {
    type: Number,
     //   required: true
    },
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;