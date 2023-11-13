const express = require('express');
const router = express.Router();

const tmdbService = require("../services/tmdb.services")


router.get("/", (req, res, next) => {
    tmdbService
        .getTopRated()
        .then(response => {
            res.json({ popular: response.data })
        })
        .catch(err => next(err))
})


module.exports = router