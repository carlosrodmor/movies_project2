require("dotenv").config();

require("./db");


const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);
require("./config/session.config")(app)
require("./routes")(app)

const capitalize = require("./utils/capitalize");
const projectName = "movies_project2";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

app.use((req, res, next) => {
    if (req.session.user) {

    }
})


// app.use((req, res, next) => {
//     if (req.session.usuario) { // Suponiendo que guardas un objeto 'usuario' en la sesión cuando se autentica
//         res.locals.estaAutenticado = true;
//         res.locals.usuario = req.session.usuario; // Podrías querer pasar más información del usuario
//     } else {
//         res.locals.estaAutenticado = false;
//     }
//     next();
// });

require("./error-handling")(app);

module.exports = app;
