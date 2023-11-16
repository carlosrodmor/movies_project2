const express = require('express');
const router = express.Router();

const { isLoggedIn } = require("../middleware/route-guard");
const User = require('../models/User.model');
const Community = require("../models/Community.model")






router.get("/myprofile", isLoggedIn, (req, res, next) => {
    res.render("profile/details", { user: req.session.currentUser })
})
router.get("/editprofile", isLoggedIn, (req, res, next) => {
    res.render("profile/edit", { user: req.session.currentUser })
})

router.post("/editprofile", isLoggedIn, (req, res, next) => {
    const { username, email, password, avatar } = req.body
    const { _id } = req.session.currentUser
    User
        .findByIdAndUpdate(_id, { username, email, password })
        .then(() => res.redirect("/myprofile"))
        .catch(err => next(err))

})

router.get("/myprofile/communities", isLoggedIn, (req, res, next) => {
    const { username } = req.body
    const { _id } = req.session.currentUser
    Community
        .find({ members: { $in: [_id] } })
        .then(communities => res.render("profile/communities", { user: req.session.currentUser, communities: communities }))
        .catch(err => next(err))
})


module.exports = router