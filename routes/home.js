var router = require('koa-router'),
    getHost = require('../modules/getHost'),
    apiRouter = new router();

var React = require('react/lib/ReactElement'),
    ReactDOMServer = require('react-dom/server');
var List = React.createFactory(require('../dist/js/component/List'));


module.exports = function (app) {

    var data = this.getDataSync('../data/names.json'),
        json = JSON.parse(data);

    var lis = json.map(function(item, i){
       return (
           <li>{item.name}</li>
       )
    }),
        props = {color: 'red'};

    apiRouter.get('/', function *() {  //首页
        yield this.render('home/index', {
            title: "serverRender",
            syncData: {
                names: json,
                props: props
            },
            reactHtml:  ReactDOMServer.renderToString(List(props, lis)),
            dirpath: getHost(this)
        });
    });


    app.use(apiRouter.routes());

};

