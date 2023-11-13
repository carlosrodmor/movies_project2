const express = require('express');
const router = express.Router();

const tmdbService = require("../services/tmdb.services")


router.get("/best", (req, res, next) => {
    tmdbService
        .getTopRated()
        .then(response => {
            res.render("movies/top50", { top: response.data.results })
        })
        .catch(err => next(err))
})

router.get("/popular", (req, res, next) => {
    tmdbService
        .getPopularMovies()
        .then(response => {
            // res.json({ popular: response.data })
            res.render("movies/popular", { popular: response.data.results })
        })
})

// DETALLEEEESS!!!!!!

// router.get("/details/:id", (req, res, next) => {
//     const { id } = req.params

// })


router.get("/search", (req, res, next) => {
    tmdbService
        .getGenres()
        .then(response => {
            res.render("movies/search", { genres: response.data.genres })
            // res.json({ genres: response.data.genres })
        })
        .catch(err => next(err))

})

// router.get("/dates", (req, res, next) => {
//     const startYear = req.params.startYear
//     const endYear = req.params.endYear

//     tmdbService
//         .getReleaseDate()
//         .then(response => {
//             res.json({ release: response.data })
//         })
// })




module.exports = router