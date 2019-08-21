var http = require('http');
var fs = require('fs');
let qs = require('querystring');


http.createServer(function (request, response) {

    console.log('request ', request.url);
    var url = request.url;
    var fileName = 'index.html';

    console.log('request ', url);
    
    switch (url) {
        case '/':
            fileName = 'index.html';
            break;

        case '/mainpage':
            if (request.method == 'POST'){
                let body = '';
                request.on('data',chunk => {
                    body += chunk.toString();
                });

                request.on('end',()=>{
                    let items = qs.parse(body);
                    console.log('username', items.username);
                    console.log('password', items.password);

                    if(items.username == "admin" && items.password == "pass" ){
                        filename = 'mainpage.html';
                    }else{
                        filename = 'accessdenieed.html';
                    }

                    // fs.readFile(fileName, function (error, cotent){
                    //     response.writeHead(200,{
                    //         'Content-Type' : 'text/html'
                    //     });
                    //     response.end(content, 'utf-8');
                    // });

                });

            }
           
            break;

        default:
            fileName = 'error.html';

           
            break;
    }
console.log(fileName,'filename')
    fs.readFile(fileName, function (error, content) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(content, 'utf-8');
    });

    console.log('text','end');
    // response.end();


}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');