const http = require ('http');
const fs = require ('fs');
const _ = require ('lodash');

const server = http.createServer((req , res)=>{
    let num = _.random (0 , 30);
    console.log (num);

    let path = './views/';
        switch (req.url){
            case '/' :
                path += 'index.html' ;
                res.statusCode = 200;
                break;
            case '/about' :
                path += 'about.html';
                res.statusCode = 200;
                break;
            case '/about-me' :
                res.statusCode = 301;
                res.setHeader ('Location' , '/about');
                res.end();
                break;
            default :
                path += '404.html';
                res.statusCode = 404;
                break;
        }

    res.setHeader('content-type' , 'text/html');
    fs.readFile ( path , (err , data) => {
        if (err){
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    } );
});

server.listen (3000 , 'localhost' , () => {
    console.log ('server is running on port 3000');
})
