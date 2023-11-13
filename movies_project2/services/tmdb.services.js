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
}






const tmdbService = new TMDBService()

module.exports = tmdbService



















// getAllCharacters() {
//     return this.axiosApp.get('/characters')
// }

// getOneCharacter(character_id) {
//     return this.axiosApp.get(`/characters/${character_id}`)
// }

// saveCharacter(character_data) {
//     return this.axiosApp.post(`/characters`, character_data)
// }

// editCharacter(character_id, character_data) {
//     return this.axiosApp.put(`/characters/${character_id}`, character_data)
// }







