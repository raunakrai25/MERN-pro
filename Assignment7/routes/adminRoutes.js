const express = require("express");
const router = express();
const adminController = require("../controller/adminController");

//route for Admin signup API.
router.post("/signup",adminController.signup);

//route for Admin login API.
router.post("/login",adminController.login);


module.exports = router;