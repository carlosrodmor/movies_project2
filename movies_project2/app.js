require("dotenv").config()
require("./db")

const express = require("express")
const app = express()

app.locals.appTitle = `MovieDB`

require("./config")(app)
require("./config/session.config")(app)

const { loggedUser } = require("./middleware/loggedUser.middleware")
app.use(loggedUser)


require("./routes")(app)





require("./error-handling")(app)

module.exports = app
