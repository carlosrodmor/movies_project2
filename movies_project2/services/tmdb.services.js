const axios = require("axios")

class TMDBService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://api.themoviedb.org/3',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`
            }
        })
    }

    getOneMovie(id) {
        return this.axiosApp.get(`/movie/${id}`)
    }

    getTopRated() {
        return this.axiosApp.get('/movie/top_rated')
    }

    getPopularMovies() {
        return this.axiosApp.get('/movie/popular')
    }

    getGenres() {
        return this.axiosApp.get('/genre/movie/list')
    }
    getReleaseDate() {
        return this.axiosApp.get("/discover/movie")
    }

    getMovies(title) {
        return this.axiosApp.get('/search/movie', {
            params: {
                query: title,
                include_adult: 'false',
                language: 'en-US',
                page: '1'
            }
        });
    }
}


const tmdbService = new TMDBService()

module.exports = tmdbService