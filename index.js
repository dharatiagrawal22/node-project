
const http = require('http');

const server = http.createServer((request , response)=>{
    // if we dont give ant url after port number then whatever we write is always give same response
    // to overcome from this problem we need to write response inside the switch case
    console.log(request.url);
    switch(request.url){
        case "/":
            response.end("This server made by dhvani");
            break;
        case "/about":
            response.end("This about page made by dhvani");
            break;
        case "/more" :
            response.writeHead(201);
            response.end("There is more option available");
            break;
        default:
            response.writeHead(404);
            response.end("This server is not found ");
    }
})

server.listen(3000 , ()=>{
    console.log('server is listing at port 3000');
})