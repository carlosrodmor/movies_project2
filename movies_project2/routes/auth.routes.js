const express = require('express')
const router = express.Router()

const bcrypt = require('bcryptjs')
const User = require('../models/User.model')
const saltRounds = 10


const uploaderMiddleware = require('../middleware/uploader.middleware')

const { isLoggedOut, isLoggedIn } = require('../middleware/route-guard')

router.get("/signup", (req, res) => {
    res.render("auth/signup")
})

router.post("/signup", uploaderMiddleware.single('avatar'), isLoggedOut, (req, res, next) => {

    const { username, email, password } = req.body
    const { path: avatar } = req.file

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(passwordHash => User.create({ username, email, password: passwordHash, avatar }))
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})




router.get("/login", isLoggedOut, (req, res) => {
    res.render("auth/login")
})

router.post("/login", isLoggedOut, (req, res, next) => {

    const { email, password } = req.body

    if (email.length === 0 || password.length === 0) {
        res.render('auth/login', { errorMessage: 'Fill in all the required fields' })
        return
    }

    User
        .findOne({ email })
        .then(foundUser => {

            if (!foundUser) {
                res.render('auth/login', { errorMessage: 'Email not registered' })
                return
            }

            if (bcrypt.compareSync(password, foundUser.password) === false) {
                res.render('auth/login', { errorMessage: 'Wrong password' })
                return
            }

            req.session.currentUser = foundUser     // inicio de sesión
            console.log('SESIÓN INICIADA ->', req.session)
            res.redirect('/')
        })
        .catch(err => next(err))
})


router.get('/logout', isLoggedIn, (req, res) => {
    req.session.destroy(() => res.redirect('/'))
})


module.exports = router