var express = require("express");
var app = express();

app.use(express.static("public"));


app.get("*", function (req, res) {
	res.sendFile(__dirname+'/public/404.html');
}
);




app.listen(3000, function () {
	console.log("server running at port no 3000");
}
);

