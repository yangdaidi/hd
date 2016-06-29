// var formidable = require("formidable");//文件上传 node-formidable模块(安装npm install fromidable) [--save]
var http = require("http");
var url = require("url");

// 版本1
// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type" : "textplain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);

// 版本2
// function onRequest(request, response) {
//   console.log("Request received.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }
// http.createServer(onRequest).listen(8888);
// console.log("Server has started.");

// 版本3 route
// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");

//     route(pathname);

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }
//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

// 版本4 route & handle
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");

//     route(handle, pathname);

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }


// 版本5(根据处理放回内容显示页面)   版本5.1(阻塞)  版本5.2(非阻塞)
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     var content = route(handle, pathname);
//     response.write(content);
//     response.end();
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }


// 版本6（非阻塞回调）
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//     route(handle, pathname, response);
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }


// 版本7
// function start(route, handle) {
//   function onRequest(request, response) {
//     var postData = "";
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");

//     request.setEncoding("utf8");

//     request.addListener("data", function(postDataChunk) {
//       postData += postDataChunk;
//       console.log("Received POST data chunk '"+
//       postDataChunk + "'.");
//     });

//     request.addListener("end", function() {
//       route(handle, pathname, response, postData);
//     });

//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

//版本8.1
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);//由于不需要处理form数据，直接将request通过路由模块传递到处理模块，让node-formidable模块来处理文件
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}




exports.start = start;
