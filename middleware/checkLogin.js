const checklogin = (req, res, next) => {
    if (req.session && req.session.user) return next();
    return res.redirect('/login.ejs');
};

export default checklogin;