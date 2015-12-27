/**
 * Created by vajoy on 2015/12/26.
 */
var path = require('path');
var fs= require('fs');

module.exports = function (app) {
    this.getDataSync = function(filename){
        var file = path.resolve(__dirname, filename),
            errInfo = null;

        var data = fs.readFileSync( file, 'utf-8', function(err){
            if(err) errInfo = err;
        });

        errInfo && app.context.throw(errInfo, 404);

        return data.toString();
    };
};