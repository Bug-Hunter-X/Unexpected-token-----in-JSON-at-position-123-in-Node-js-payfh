const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error - Unexpected token '}' in JSON at position 123

//This can be caused by an unexpected closing curly brace in the JSON response body.

//Consider if you are sending the JSON response without proper formatting.  Verify that all opening curly braces '{' have corresponding closing curly braces '}'. Missing or extra braces lead to parse errors. 