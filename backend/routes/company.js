const express = require("express");
const router = express.Router();
// Routes
const {company, search, searchInfo, fetchFavs} = require("../controllers/company")

// router.post("/", company);
router.post("/search", search);
router.post("/searchInfo", searchInfo);
router.post("/fetchFavs", fetchFavs);

module.exports = router;