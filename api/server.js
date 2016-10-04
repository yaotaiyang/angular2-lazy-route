
var fs = require("fs");

var app = new (require('express'))();
var port = 3333

app.use("/api", function (req, res, next) { //数据接口
    var path_str = "./data/" + req.query.type + ".json";
    res.writeHead(200, {'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    if (fs.existsSync(path_str) && fs.statSync(path_str).isFile()) {
    } else {
        path_str = "./data/approved.json";
    }
    var pathObj = JSON.parse(fs.readFileSync(path_str, "utf-8"));
    var res_obj = {
        status: 1,
        result: pathObj
    };
    res.end(JSON.stringify(res_obj));
});
app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
