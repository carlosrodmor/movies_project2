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
            res.render("movies/popular", { popular: response.data.results })
        })
        .catch(err => next(err))
})

router.get("/movie-details/:id", (req, res, next) => {
    const { id } = req.params
    tmdbService
        .getOneMovie(id)
        .then(response => {
            res.render("movies/movie-details", response.data)
        })
        .catch(err => next(err))
})


router.get("/filter", (req, res, next) => {
    tmdbService
        .getGenres()
        .then(response => {
            res.render("movies/filter", { genres: response.data.genres })
            // res.json({ genres: response.data.genres })
        })
        .catch(err => next(err))

})

router.get("/search", (req, res, next) => {

    const { title } = req.query

    tmdbService
        .getMovies(title)
        .then(({ data }) => {
            res.render("movies/search", { movies: data.results })
        })
        .catch(err => next(err));
});


module.exports = router