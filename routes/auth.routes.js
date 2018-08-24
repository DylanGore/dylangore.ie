var express = require('express');
var router = express.Router();

var passport = require('passport');

router.get('/', (req, res) => {
    res.redirect('/auth/login');
});

// Authentication & Login
router.get('/login', (req, res) => {
    let msg = req.query.msg;
    let message_text = "";
    
    if(msg == 401){
        message_text = 'You have not been authorized to log in with that account, please try again.';
    }

    const viewData = {
        title: 'Login',
        message: message_text,
        css: ['style.css']
    };
    res.render('login', viewData);
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google', {
    failureRedirect: '/auth/login?msg=401'
}), (req, res) => {
    res.redirect('/dashboard');
});

module.exports = router;