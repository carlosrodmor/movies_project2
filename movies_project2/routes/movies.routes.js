const express = require('express');
const router = express.Router();

const tmdbService = require("../services/tmdb.services")


router.get("/best", (req, res, next) => {
    tmdbService
        .getTopRated()
        .then(response => {
            res.render("movies/top50", { popular: response.data.results })
        })
        .catch(err => next(err))
})

router.get("/popular")


module.exports = router