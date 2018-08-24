const single = {
    single(req, res) {
        const viewData = {
            title: 'Project',
            user: req.user,
            css: ['style.css','project.css']
        };
        res.render('project', viewData);
    },
};

module.exports = single;