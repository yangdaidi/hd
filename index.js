var server = require("./server");  // 服务器
var router = require("./router");  // 路由器
var requestHandlers = require("./requestHandlers");  // 处理模块

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/filetest"] = requestHandlers.filetest;
handle["/child"] = requestHandlers.child;
handle["/childtest"] = requestHandlers.childtest;

server.start(router.route, handle);

// 1、在/start表单中添加一个文件上传元素
// 2、将node-formidable整合到我们的upload请求处理程序中，用于将上传的图片保存到/tmp/test.png
// 3、将上传的图片内嵌到/uploadURL输出的HTML中