var express = require('express');
var router = express.Router();

const index = require('../controllers/index');
const projects = require('../controllers/projects');
const project = require('../controllers/project');

const authCheck = (req, res, next) => {
    if (!req.user) {
        // User not logged in
        res.redirect('/auth/login')
    } else {
        // User logged in
        next()
    }
};

router.get('/', index.index);
router.get('/projects', projects.directory);
router.get('/projects/project', project.single);

module.exports = router;
