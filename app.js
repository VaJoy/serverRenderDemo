require('node-jsx').install({
    extension: '.js'
});

var fs = require('fs'),
    koa = require('koa'),
    compress = require('koa-compress'),
    render = require('koa-ejs'),
    mime = require('mime-types'),
    r_home = require('./routes/home'),
    limit = require('koa-better-ratelimit'),
    getData = require('./modules/getData');

var app = koa();

app.use(limit({ duration: 1000*10 , // maximum 500 requests in 10secs for one user
    max: 500, accessLimited : "您的请求太过频繁，请稍后重试"})
);
app.use(compress({
    threshold: 50, //minimum size to compress
    flush: require('zlib').Z_SYNC_FLUSH
}));



render(app, {
    root: './dist/views',
    layout: false ,
    viewExt: 'ejs',
    cache: false,
    debug: true
});

getData(app);

//路由
r_home(app);

//资源
app.use(function*(next){
    var p = this.path;
    this.type = mime.lookup(p);
    this.body = fs.createReadStream('.'+p);
});

app.listen(3300);