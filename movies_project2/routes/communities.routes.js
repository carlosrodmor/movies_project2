const express = require("express")
const router = express.Router()

const Community = require("../models/Community.model")
const Comment = require("../models/Comment.model")

const uploaderMiddleware = require('../middleware/uploader.middleware')


//ruta para crear communities

router.get('/communitiesadmin', (req, res) => {

    res.render("communities/admin")
})


router.post('/communitiesadmin', uploaderMiddleware.single('cover'), (req, res) => {

    const { name, description } = req.body
    const { path: cover } = req.file

    Community
        .create({ name: name, description: description, cover: cover })
        .then(() => res.redirect("/"))
        .catch(err => console.log(err))
})


//lista de comunidades
router.get('/communities/list', (req, res) => {

    Community
        .find()
        .then(response => res.render("communities/list", { datos: response }))
        // .then(communities => res.render("communities/list", communities))
        .catch(err => console.log(err))
})

//detalles de cada comunidad

router.get('/community/:_id', (req, res) => {

    const { _id } = req.params

    Community
        .findById(_id)
        .populate("members")
        .then(community => { res.render("communities/details", community) })
        .catch(err => console.log(err))
})

router.post('/addcommunity/:_id', (req, res) => {

    if (!req.session.currentUser) {
        return res.status(401).send("Usuario no autenticado");
    } else {
        const { _id: idCommunity } = req.params
        const userId = req.session.currentUser._id

        Community
            .findByIdAndUpdate(idCommunity, { $push: { members: userId } })
            // .findByIdAndUpdate(_id, { $addToSet: { members: req.session.currentUser._id } })
            .then(() => res.redirect(`/community/${idCommunity}`))
            .catch(err => console.log(err))
    }


})


router.get('/community/:_id/forum', (req, res) => {

    const { _id: communityId } = req.params

    Comment
        .find({ community: communityId })
        .populate("user", "username")
        .then((comments) => res.render("communities/comments", { comments, communityId }))
        .catch(err => console.log(err))

})
router.post('/community/:_id/forum', (req, res, next) => {

    const { _id: communityId } = req.params
    const { _id: userId } = req.session.currentUser

    const { text } = req.body

    Comment
        .create({ community: communityId, user: userId, text })
        .then(() => res.redirect(`/community/${communityId}/forum`))
        .catch(err => next(err))
})














// router.get('/community/:_id/forumdeverdad/addcomment', (req, res) => {

//     const { _id: communityId } = req.params

//     Community
//         .findById(communityId)
//         .then(() => res.render("communities/forum"))
//         // .then((xx) => res.json({xx}))
//         .catch(err => console.log(err))
// })















// router.get('/community/:_id/forum', (req, res) => {

//     const { _id } = req.params

//     Community
//         .findById(_id)
//         .then(xx => res.render("communities/forum", xx))
//         .catch(err => console.log(err))
// })

// router.post('/community/:_id/forum', (req, res) => {

//     const { _id } = req.params
//     const userId = req.session.currentUser._id
//     const { text } = req.body

//     Comment
//         .create({ text: text, user: userId, community: _id })
//         .then(() => res.redirect("/communities/list"))
//         .catch(err => console.log(err))
// })






//suscribirse a la comunidad

// router.post('/addcommunity/:_id', (req, res) => {

//     const { _id } = req.params
//     const userId = req.session.currentUser._id

//     Community
//         .findByIdAndUpdate(_id, { $addToSet: { members: req.session.currentUser._id } })
//         .then(() => res.redirect("/communities/forum"))
//         .catch(err => console.log(err))
// })

// router.get('/addcommunity/:_id/forum', (req, res) => {
//     res.render("communities/forum")
// })

// router.post('/addcommunity/:_id/forum', (req, res) => {

//     const { _id } = req.params
//     const userId = req.session.currentUser._id
//     const { text } = req.body

//     Comment
//         .create({ text: text, user: userId, community: _id })
//         .then(() => res.redirect("/communities/list"))
//         .catch(err => console.log(err))
// })


// router.get('/communities/forum', (req, res) => {
//     res.render("communities/forum")
// })

// router.post('/communities/forum', (req, res) => {

//     // const { _id } = req.params
//     // const userId = req.session.currentUser._id
//     const { text } = req.body

//     Comment
//         .create({ text: text })
//         .then(() => res.redirect("/communities/list"))
//         .catch(err => console.log(err))
// })





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