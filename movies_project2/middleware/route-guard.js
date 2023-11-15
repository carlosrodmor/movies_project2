const isLoggedIn = (req, res, next) => {
    if (req.session.currentUser) {
        next()
    } else {
        res.redirect('/login')
    }
}


const isLoggedOut = (req, res, next) => {
    if (!req.session.currentUser) {
        next()
    } else {
        res.redirect('/')
    }
}


const checkRole = (...admittedRoles) => (req, res, next) => {

    const { role } = req.session.currentUser

    if (admittedRoles.includes(role)) {
        next()
    } else {
        res.redirect('/inicio-sesion')
    }
}


module.exports = {
    isLoggedIn,
    isLoggedOut,
    checkRole,
}
