const index = {
    index(request, response) {
        const viewData = {
            title: 'Home',
            css: ['cover.css']
        };
        response.render('index', viewData);
    },
};

module.exports = index;