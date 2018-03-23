var Koa = require('koa');
var Router = require('koa-router');
const serve = require('koa-static');

var app = new Koa();
var router = new Router();
app.use(serve(__dirname + '/resources'));
app.use(serve(__dirname + '/view'));
app.use(serve(__dirname + '/app'));
app.use(router.routes());

router.get('/hello', (ctx, next) => {
  ctx.body = 'Hello World!';
});

app.listen(8081);