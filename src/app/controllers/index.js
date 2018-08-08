const index = {
    index(req, res) {
        const viewData = {
            user: req.user,
            css: ['cover.css']
        };
        res.render('index', viewData);
    },
};

module.exports = index;