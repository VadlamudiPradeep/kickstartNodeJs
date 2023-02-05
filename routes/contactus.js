
const express = require("express");

const contactUsController = require("../controllers/contactus");

const router = express.Router();

router.get("/contactus", contactUsController.getAddContactus);

router.post("/success", contactUsController.postAddContactus)

module.exports = router;