require("dotenv").config();

require("./db");


const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);
require("./config/session.config")(app)

const capitalize = require("./utils/capitalize");
const projectName = "movies_project2";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const moviesRoutes = require("./routes/movies.routes");
app.use("/movies", moviesRoutes);

const profileRoutes = require("./routes/profile.routes");
app.use("/", profileRoutes);

const communitiesRoutes = require("./routes/communities.routes");
app.use("/", communitiesRoutes);

require("./error-handling")(app);

module.exports = app;
