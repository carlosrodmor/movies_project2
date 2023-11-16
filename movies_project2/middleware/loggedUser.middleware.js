const loggedUser = (req, res, next) => {

    res.locals.loggedUserInfo = {
        isLogged: req.session.currentUser,
        userName: req.session.currentUser?.username,
        userRole: req.session.currentUser?.role,
        isAdmin: req.session.currentUser?.role === 'ADMIN',
        userAvatar: req.session.currentUser?.avatar
    }
    next()
}


module.exports = {
    loggedUser
}
