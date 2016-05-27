// 版本4
// function start() {
//   console.log("Request handler 'start' was called.");
//   return "Hello Start";
// }

//版本5
// function start() {
//   console.log("Request handler 'start' was called.");
//   return "Hello Start";
// }
// function upload() {
//   console.log("Request handler 'upload' was called.");
//   return "Hello Upload";
// }

// 版本版本5.1 （由于start的执行，会阻塞upload的执行）
// function start() {
//   console.log("Request handler 'start' was called.");

//   //让start休眠10s
//   function sleep(milliSeconds) {
//     var startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + milliSeconds);
//   }

//   sleep(10000);
//   return "Hello Start";
// }

// function upload() {
//   console.log("Request handler 'upload' was called.");
//   return "Hello Upload";
// }

var exec = require("child_process").exec;

// 版本5.2
// function start() {
//   console.log("Request handler 'start' was called.");
//   var content = "empty";

//   exec("ls -lah", function (error, stdout, stderr) {
//     content = stdout;
//   });

//   return content;
// }

// function upload() {
//   console.log("Request handler 'upload' was called.");
//   return "Hello Upload";
// }


// 版本6（exec快速执行版）
// function start(response) {
//   console.log("Request handler 'start' was called.");

//   exec("ls -lah", function (error, stdout, stderr) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write(stdout);
//     response.end();
//   });
// }

// function upload(response) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello Upload");
//   response.end();
// }

// 版本6.1（exec快速执行版）
// function start(response) {
//   console.log("Request handler 'start' was called.");

//   exec("find /",
//     { timeout: 10000, maxBuffer: 20000*1024 },
//     function (error, stdout, stderr) {
//       response.writeHead(200, {"Content-Type": "text/plain"});
//       response.write(stdout);
//       response.end();
//     });
// }

// function upload(response) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello Upload");
//   response.end();
// }

// 版本6 版本7（实际用途）过渡版本，服务和路由仍使用版本6 
// function start(response) {
//   console.log("Request handler 'start' was called.");

//   var body = '<html>'+
//     '<head>'+
//     '<meta http-equiv="Content-Type" content="text/html; '+
//     'charset=UTF-8" />'+
//     '</head>'+
//     '<body>'+
//     '<form action="/upload" method="post">'+
//     '<textarea name="text" rows="20" cols="60"></textarea>'+
//     '<input type="submit" value="Submit text" />'+
//     '</form>'+
//     '</body>'+
//     '</html>';

//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(body);
//     response.end();
// }

// function upload(response) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello Upload");
//   response.end();
// }



// 版本7（数据上传）
// function start(response, postData) {
//   console.log("Request handler 'start' was called.");

//   var body = '<html>'+
//     '<head>'+
//     '<meta http-equiv="Content-Type" content="text/html; '+
//     'charset=UTF-8" />'+
//     '</head>'+
//     '<body>'+
//     '<form action="/upload" method="post">'+
//     '<textarea name="text" rows="20" cols="60"></textarea>'+
//     '<input type="submit" value="Submit text" />'+
//     '</form>'+
//     '</body>'+
//     '</html>';

//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(body);
//     response.end();
// }

// function upload(response, postData) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("You've sent: " + postData);
//   response.end();
// }

var querystring = require("querystring");

// banben7.1 （上传数据处理）
// function start(response, postData) {
//   console.log("Request handler 'start' was called.");

//   var body = '<html>'+
//     '<head>'+
//     '<meta http-equiv="Content-Type" content="text/html; '+
//     'charset=UTF-8" />'+
//     '</head>'+
//     '<body>'+
//     '<form action="/upload" method="post">'+
//     '<textarea name="text" rows="20" cols="60"></textarea>'+
//     '<input type="submit" value="Submit text" />'+
//     '</form>'+
//     '</body>'+
//     '</html>';

//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(body);
//     response.end();
// }

// function upload(response, postData) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});  //之前版本一直没有对放回内容进行页面编码
//   response.write("You've sent the text: "+querystring.parse(postData).text);
//   response.end();
// }


// banben 8 （文件上传——文件显示）
var fs = require("fs");
// function start(response, postData) {
//   console.log("Request handler 'start' was called.");

//   var body = '<html>'+
//     '<head>'+
//     '<meta http-equiv="Content-Type" '+
//     'content="text/html; charset=UTF-8" />'+
//     '</head>'+
//     '<body>'+
//     '<form action="/upload" method="post">'+
//     '<textarea name="text" rows="20" cols="60"></textarea>'+
//     '<input type="submit" value="Submit text" />'+
//     '</form>'+
//     '</body>'+
//     '</html>';

//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(body);
//     response.end();
// }

// function upload(response, postData) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("You've sent the text: "+
//   querystring.parse(postData).text);
//   response.end();
// }

// function show(response, postData) {
//   console.log("Request handler 'show' was called.");
//   fs.readFile("tmp/test.jpg", "binary", function(error, file) {
//     if(error) {
//       response.writeHead(500, {"Content-Type": "text/plain"});
//       response.write(error + "\n");
//       response.end();
//     } else {
//       response.writeHead(200, {"Content-Type": "image/jpeg"});
//       response.write(file, "binary");
//       response.end();
//     }
//   });
// }

// banben 8.1 （文件上传——文件上传）
var formidable = require("formidable");

function start(response) {
  console.log("Request handler 'start' was called.");
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();

  // 解决方案2（创建一个临时相对路径）
  form.uploadDir='tmp';


  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    fs.renameSync(files.upload.path, "tmp/test.jpg");//重命名文件会出错（跨磁盘分区移动 或操作文件会有权限问题）


    // 解决方案1
    // var is = fs.createReadStream(files.upload.path);
    // var os = fs.createWriteStream("tmp/test.jpg");
    // is.pipe(os);
    // is.on('end',function(){
    //     fs.unlinkSync(files.upload.path);
    // });

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}

function show(response) {
  console.log("Request handler 'show' was called.");
  fs.readFile("tmp/test.jpg", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/jpeg"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
