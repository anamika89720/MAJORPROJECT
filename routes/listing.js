const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer = require('multer');
const { storage } = require("../cloudconfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing)
    );
//for metoined file we router.route function to show same path
// //Index route
// router.get("/", wrapAsync(listingController.index));
// //create route
// router.post(
//     "/", validateListing,
//     wrapAsync(listingController.createListing)
// );

//new route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
      .get(isLoggedIn, wrapAsync(listingController.showListing))
      .put(isLoggedIn,
           isOwner, 
           upload.single("listing[image]"),
           validateListing,
           wrapAsync(listingController.updateListing))
       .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));
//show route
// router.get("/:id", isLoggedIn, wrapAsync(listingController.showListing));
//Update route
// router.put("/:id",
//     isLoggedIn,
//     isOwner, 
//     validateListing,
//     wrapAsync(listingController.updateListing));
//Delete route
// router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

     

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));



module.exports = router;

