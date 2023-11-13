const express = require('express');
const router = express.Router();

const tmdbService = require("../services/tmdb.services")


router.get("/marina", (req, res, next) => {
    tmdbService
        .getTopRated()
        .then(response => {
            const movies = response.data.results.map(elm => {
                return {
                    title: elm.title,
                    releaseDate: elm.release_date,
                    rating: elm.vote_average,

                };
            });
            res.json({ popular: movies });
            res.render("/hdhdhd", { popular })
        })
        .catch(err => next(err))
})
router.get("/marinavp", (req, res, next) => {
    tmdbService
        .getTopRated()
        .then(response => {
            const movies = response.data.results
            res.json({ popular: movies });
        })
        .catch(err => next(err))
})


module.exports = router