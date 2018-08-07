const single = {
    single(request, response) {
        const viewData = {
            title: 'Project',
            css: ['style.css','project.css']
        };
        response.render('project', viewData);
    },
};

module.exports = single;