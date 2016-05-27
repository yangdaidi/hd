// 版本3
// function route(pathname) {
//   console.log("About to route a request for " + pathname);
// }

// 版本4
// function route(handle, pathname) {
//   console.log("About to route a request for " + pathname);
//   if (typeof handle[pathname] === 'function') {
//     handle[pathname]();
//   } else {
//     console.log("No request handler found for " + pathname);
//   }
// }

// 版本5  版本5.1 版本5.2
// function route(handle, pathname) {
//   console.log("About to route a request for " + pathname);
//   if (typeof handle[pathname] === 'function') {
//     return handle[pathname]();
//   } else {
//     console.log("No request handler found for " + pathname);
//     return "404 Not found";
//   }
// }


// 版本6
// function route(handle, pathname, response) {
//   console.log("About to route a request for " + pathname);
//   if (typeof handle[pathname] === 'function') {
//     handle[pathname](response); //继续传递response对象
//   } else {
//     console.log("No request handler found for " + pathname);
//     response.writeHead(404, {"Content-Type": "text/plain"});
//     response.write("404 Not found");
//     response.end();
//   }
// }



// 版本7
// function route(handle, pathname, response, postData) {
//   console.log("About to route a request for " + pathname);
//   if (typeof handle[pathname] === 'function') {
//     handle[pathname](response, postData);
//   } else {
//     console.log("No request handler found for " + pathname);
//     response.writeHead(404, {"Content-Type": "text/plain"});
//     response.write("404 Not found");
//     response.end();
//   }
// }


//版本8.1
function route(handle, pathname, response, request) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}


exports.route = route;