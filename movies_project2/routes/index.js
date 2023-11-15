module.exports = app => {

    const indexRoutes = require("./index.routes")
    app.use("/", indexRoutes)

    const authRoutes = require("./auth.routes")
    app.use("/", authRoutes)

    const moviesRoutes = require("./movies.routes")
    app.use("/movies", moviesRoutes)

    const profileRoutes = require("./profile.routes")
    app.use("/", profileRoutes)

    const communitiesRoutes = require("./communities.routes")
    app.use("/", communitiesRoutes)
}




