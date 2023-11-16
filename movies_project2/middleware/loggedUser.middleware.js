const loggedUser = (req, res, next) => {

    if (req.session.currentUser && req.session.currentUser.role) {
        res.locals.isAdmin = req.session.currentUser.role === 'ADMIN'
    }
    next()
}


module.exports = {
    loggedUser
}
