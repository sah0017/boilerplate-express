let express = require('express');
let app = express();
console.log("Hello World!");

app.get("/", (req, res) => {
    res.sendFile(absolutePath = __dirname + '/views/index.html');
  });
app.get("/json", (req, res) => {
    res.json({"message" : "Hello Json"});
});




































 module.exports = app;
