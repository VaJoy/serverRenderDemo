/**
 * 获取根路径
 * @param ctx
 * @returns {String|string}
 */
module.exports = function(ctx) {
    return ctx.header.host
};