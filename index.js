var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var middle = q.pathname === "/" ? "/index" : q.pathname;

    var filename = "." + middle + ".html";

    if (!fs.existsSync(filename)) {
      filename = "./404.html";
    }

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("error");
        return res.end();
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
