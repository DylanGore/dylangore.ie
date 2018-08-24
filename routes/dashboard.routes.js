var express = require('express');
var router = express.Router();

const authCheck = (req, res, next) => {
    if (!req.user) {
        // User not logged in
        res.redirect('/auth/login')
    } else {
        // User logged in
        next()
    }
};

router.get('/', authCheck, (req, res) => {
    const viewData = {
      title: 'Dashboard',
      user: req.user,
      css: ['style.css', 'dashboard.css']
    };
    res.render('dashboard', viewData);
});

module.exports = router;