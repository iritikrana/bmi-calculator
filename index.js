const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

var weight;
var height;
var bmi;
app.post("/", function(req, res) {
    weight = parseFloat(req.body.weight);
    height = parseFloat(req.body.height);  
    bmi = weight / (height * height);
    res.send("your bmi is " + bmi);
    
})




app.listen(3000, function() {
    console.log("server is running on port 3000");
})