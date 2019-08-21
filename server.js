let express = require('express');
let app = express();

    app.get('/math/add/:no1/:no2',function(req,res){
        var url = req.url; 

        let n1 = parseInt(req.params.no1);
        let n2 = parseInt(req.params.no2);

        let result = n1 + n2;
        res.send("The output = "+result);
    });

    app.get('/math/sub/:no1/:no2',function(req,res){
        let n1 = parseInt(req.query.no1);
        let n2 = parseInt(req.query.no2);

        let result = n1 - n2;
        res.send("The output = "+result);
    });

        res.send("Unknown Operation");
    
    app.listen(8080);