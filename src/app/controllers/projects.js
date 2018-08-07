const directory = {
    directory(request, response) {
        const viewData = {
            title: 'Projects',
            css: ['style.css']
        };
        response.render('projects', viewData);
    },
};

module.exports = directory;