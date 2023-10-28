const express = require("express")
const { register, signin, userAuthCheck } = require("../controller/authController");
const authenticate = require("../middleware/authenticate");
const profilePicUpload = require("../controller/profilePicUpload");
const router = express.Router()
const path = require('path');
const User = require("../models/UserSchema");
const {profilePictureUpload , posterPictureUpload} = require("../controller/ImageUploadController");
const posterPicUpload = require("../controller/posterPicUpload");

router.get("/api/showpeople", (req, res) => {
    const token = req.cookies.jwtoken;
    console.log(token)
    res.status(201).json({ messege: "Hei man" })
})

router.post("/api/register", register)
router.post("/api/signin", signin)
router.get("/api/userauthcheck", authenticate, userAuthCheck)

router.post('/api/uploadprofilepic', authenticate, profilePicUpload, profilePictureUpload);
router.post('/api/uploadposter', authenticate, posterPicUpload, posterPictureUpload);

module.exports = router