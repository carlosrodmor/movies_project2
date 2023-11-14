const express = require('express');
const router = express.Router();

const { isLoggedIn } = require("../middleware/route-guard")




router.get("/myprofile", (req, res, next) => {
    res.render("profile/details", { user: req.session.currentUser })
})
router.get("/editprofile", (req, res, next) => {
    res.render("profile/edit", { user: req.session.currentUser })
})




module.exports = router