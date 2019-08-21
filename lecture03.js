let express = require('express');

let app = express();

app.get("/", function(req,res){
    res.send("Hello to my first Express App!!!");
});


app.get("/wiki/:keyword/fit2095/:id", function(req,res){
    console.log(req.url);
    console.log(req.params);

});

app.get("/report", function(req,res){
    console.log(req.url);
    console.log(req.query);

    console.log("the name is == " + req.query.name);
    console.log("the age is ==" + req.query.age)    
});


app.get("/about", function(req,res){
    res.send("this is about page!!!");
});


app.get("/contactUs", function(req,res){
    res.send("this is contaact us page!!!");
});



app.listen(8080);







// let http = require (http);

// if (req.url==="GET"){

//     if(req.url==="/")

// }