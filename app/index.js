

axios.all([
  axios.get('/pages/home.html'),
  axios.get('/pages/page1.html'),
  axios.get('/pages/page2.html'),
  axios.get('/pages/page3.html')
]).then(function (response) {

  let home = new View({
    component: response[0].data,
    model: {},
    action: {
      dropDown() {
        router.redreact("/page2");
      }
    }
  });

  let page1 = new View({
    component: response[1].data,
    model: {},
    action: {}
  });

  let page2 = new View({
    component: response[2].data,
    model: {},
    action: {}
  });

  let page3 = new View({
    component: response[3].data,
    model: {},
    action: {}
  });

  var app = new View({
    view: "body",
    model: {
      router: "",
    }
  });

  let router = new Router(app, {
    "/": {
      component: home,
      action(param) { },
      after() {
        $('pre code').each(function (i, block) {
          hljs.highlightBlock(block);
        });
      }
    },
    "/page1": {
      component: page1,
      action(param) { },
      after() {
        $('pre code').each(function (i, block) {
          hljs.highlightBlock(block);
        });
      }
    },
    "/page2": {
      component: page2,
      action(param) { },
      after() {
        $('pre code').each(function (i, block) {
          hljs.highlightBlock(block);
        });
        new View({
          view: "div#input",
          model: {
            text: "输入点什么?"
          }
        });
      }
    },
    "/page3": {
      component: page3,
      action(param) { },
      after() {
        $('pre code').each(function (i, block) {
          hljs.highlightBlock(block);
        });
      }
    }
  })
})

