function unauthorized(request, response) {
    logger.warn(
        'Unhandled resource',
        {
            statusCode: 401,
            error: 'unauthorized',
            resource: request.originalUrl
        }
    );

    return response.status(401);
        return response.render('error401');
}