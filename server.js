// creating a server in nodejs
// servers are created manually in nodejs onlike in PHP where the server is already created..

const http = require('http');
const fs = require('fs');
const lodash = require('lodash');

// creating the srver server manually we need the req('request') and res('response') as an argument and also the call back function.
const server = http.createServer((req, res ) => {

// lodash module
// using the number method in lodash to get random numbers
const num = lodash.random(0, 20);
console.log(num)

// using lodash to output a string once to the console
const greet = lodash.once(() => {
  console.log('node and lodash')
});
greet();


   // console.log('request made');
   console.log(req.url, req.method);

   // getting to know the url the user wants to responsed
   let path = './views/';

   // using the switch statement to know the page the user wants to request
   switch(req.url) {
       case '/':
         path += 'index.html';
         res.statusCode = 200;
         break;
       case '/about':
         path += 'about.html';  
         res.statusCode = 200;
         break;
       default:
         path += '404.html';
         res.statusCode = 404;
         break;    
   }


   // set header, content-type,
   //res.setHeader('contwnt-type', 'text/html');
   // writing response to the browser in a long method
  // res.write('<head><link rel="stylesheet" href="#"></head> ');
   //res.write('<p>hello node!</p>');
   //res.write('<p>hello Hilary!</p>');
   //res.end();



   // sending html file 
   res.setHeader('content-type', 'text/html');
   fs.readFile(path, (err, data) => {
       if(err) {
           console.error(err);
           res.end();
       }else {
          // res.write(data); // this works as well
           res.end(data); // insted add the data to the end method
       }
   });
});

// listening for request in the port 3000 or localhost.
server.listen(3000, 'localhost', () => {
    console.log('listening  foor request on port 3000');
}); 