const directory = {
    directory(req, res) {
        const viewData = {
            title: 'Projects',
            user: req.user,
            css: ['style.css']
        };
        res.render('projects', viewData);
    },
};

module.exports = directory;