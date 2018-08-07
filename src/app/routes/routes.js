var express = require('express');
var router = express.Router();

const index = require('../controllers/index');
const projects = require('../controllers/projects');
const project = require('../controllers/project');

router.get('/', index.index);
router.get('/projects', projects.directory);
router.get('/projects/project', project.single);

module.exports = router;
