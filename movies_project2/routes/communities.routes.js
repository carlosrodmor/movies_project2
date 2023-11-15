const express = require("express")
const router = express.Router()

const Community = require("../models/Community.model")
const Comment = require("../models/Comment.model")
const { isLoggedIn, checkRole } = require("../middleware/route-guard")


router.get('/communitiesadmin', isLoggedIn, checkRole("ADMIN"), (req, res) => {

    res.render("communities/admin")
})


router.post('/communitiesadmin', isLoggedIn, checkRole("ADMIN"), (req, res) => {

    const { name, description } = req.body

    Community
        .create({ name: name, description: description })
        .then(() => res.redirect("/"))
        .catch(err => console.log(err))
})

router.get('/communities/list', isLoggedIn, (req, res) => {

    Community
        .find()
        .then(response => res.render("communities/list", { datos: response }))
        // .then(communities => res.render("communities/list", communities))
        .catch(err => console.log(err))
})
router.get('/community/:_id', isLoggedIn, (req, res) => {

    const { _id } = req.params

    Community
        .findById(_id)
        .then(community => res.render("communities/details", community))
        .catch(err => console.log(err))
})


router.post('/addcommunity/:_id', isLoggedIn, (req, res) => {

    const { _id } = req.params
    const userId = req.session.currentUser._id

    Community
        .findByIdAndUpdate(_id, { $addToSet: { members: req.session.currentUser._id } })
        .then(() => res.redirect("/communities/forum/"))
        .catch(err => console.log(err))
})


router.get('/communities/forum', isLoggedIn, (req, res) => {
    res.render("communities/forum")
})
// router.get('/community/forum/:_id', (req, res) => {

//     const { _id } = req.params

//     Community
//         .findById(_id)
//         // .then(() => res.send("Hola"))
//         .then(() => res.render("communities/forum"))
//         .catch(err => console.log(err))
// })
// router.post('/addcommunity/forum/:_id', (req, res) => {

//     const { _id } = req.params
//     const userId = req.session.currentUser._id
//     const { text } = req.body

//     Comment
//         .create({ text: text, community: _id, user: userId })
//         .then(() => res.redirect("/communitieslist"))
//         .catch(err => console.log(err))
// })






module.exports = router