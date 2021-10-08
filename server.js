const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');


// sending simple response
  
const sendingResponse = (name) =>{
  res.setHeader('Content-Type', 'text/plain');
  res.write(name);
   res.end();
  }



// Routing
/*switch(req.url) {
    case '/':
      sendingResponse("Hello this is the first page");
      break;
    case '/about':
    sendingResponse("Hello this is the about page");
      break;
    case '/about-us':
          sendingResponse("Hello this is the about-us page");
      break;
  
  }*/




});
// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});


