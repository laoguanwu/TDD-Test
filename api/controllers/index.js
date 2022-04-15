var index = async (ctx, next) => {
    ctx.response.body = `index page1`;
};

module.exports = {
    'GET /': index
};