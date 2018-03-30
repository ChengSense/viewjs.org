var home = new View({
  component: get("view/pages/home.html"),
  model: {},
  action: {

  }
});

var page1 = new View({
  component: get("view/pages/page1.html"),
  model: {},
  action: {

  }
});

var page2 = new View({
  component: get("view/pages/page2.html"),
  model: {},
  action: {

  }
});

var page3 = new View({
  component: get("view/pages/page3.html"),
  model: {},
  action: {

  }
});

var page = new View({
  component: 'pages',
  model: {
    page1: page1,
    page2: page2,
    page2: page3
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


function get(url) {
  var data;
  $.ajax({
    async: false,
    url: url,
    success: function (i) {
      data = i;
    }
  });
  return data;
}