const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { required } = require("joi");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
    //     type: String,
    //     default: "https://via.placeholder.com/300", // Default placeholder image
    //     set: (v) => 
    //         v === ""
    //    ? "https://via.placeholder.com/300":v,
    url: String,
    filename: String,
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
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
      type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
        type: [Number],
        required: true
      },
    },
    category: {
        type:String,
        enum: ["mountains","Arctic","Farming","Snow","Beach","Bed","Camping"]
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
       if(listing){
       await Review.deleteMany({_id : {$in: listing.reviews}});
       }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;