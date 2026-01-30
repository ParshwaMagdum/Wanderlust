const express = require("express");
const router= express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validatelisting} = require("../middleware.js");
const lisitingController = require("../controllers/listings.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage  });

//Index Route  &  Create Route 
router.route("/")
.get(wrapAsync(lisitingController.index))
.post(isLoggedIn,upload.single("listing[image]"),validatelisting,wrapAsync(lisitingController.createListing)
);


//New Route 
router.get("/new", isLoggedIn,lisitingController.renderNewForm);

//Show Route & Update Route & Delete Route
router.route("/:id")
.get(wrapAsync( lisitingController.showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validatelisting, wrapAsync(lisitingController.updateListing))
.delete(isLoggedIn,isOwner,  wrapAsync(lisitingController.deleteListing));


//Edit Route
router.get("/:id/edit", isLoggedIn,isOwner,wrapAsync(lisitingController.renderEditForm));

module.exports = router;