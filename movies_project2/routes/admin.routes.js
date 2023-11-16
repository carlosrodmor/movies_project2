const express = require('express');
const router = express.Router();
const User = require("../models/User.model");


router.get("/usersadmin", (req, res, next) => {
    User
        .find()
        .then(data => res.render("users/admin", { user: data }))
        .catch(err => next(err))
})


router.post("/deleteuser/:_id", (req, res, next) => {

    const { _id } = req.params
    User
        .findByIdAndDelete(_id)
        .then(() => res.redirect("/usersadmin"))
        .catch(err => next(err))

})

module.exports = router