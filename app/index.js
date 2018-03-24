axios.all([
  axios.get('/pages/home.html'),
  axios.get('/pages/page1.html'),
  axios.get('/pages/page2.html'),
  axios.get('/pages/page3.html')
]).then(function (response) {

  let home = new View({
    component: response[0].data,
    model: {

    },
    action: {

    }
  });

  let page1 = new View({
    component: response[1].data,
    model: {},
    action: {

    }
  });

  let page2 = new View({
    component: response[2].data,
    model: {

    },
    action: {

    }
  });

  let page3 = new View({
    component: response[3].data,
    model: {

    },
    action: {

    }
  });

  var page = new View({
    component: 'pages',
    model: {
      page1, page2, page3
    },
    action: {

    }
  });

  var app = new View({
    view: "body",
    model: {
      router: "",
      year: new Date().getFullYear()
    }
  });

  let router = new Router(app, {
    "/": {
      component: home,
      router: "router",
      action(param) { },
      after() {

      }
    },
    "page": {
      component: page,
      router: "router",
      action(param) {

      },
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
    }
  })
})

