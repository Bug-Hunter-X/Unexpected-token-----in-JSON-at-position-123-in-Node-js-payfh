// Solution:  Proper JSON Formatting

const http = require('http');

const server = http.createServer((req, res) => {
  const jsonData = {
    message: 'Hello World!',
    data: {
      name: 'John Doe',
      age: 30
    }
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(jsonData)); //Correctly stringify the JSON object
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This version includes proper JSON stringification ensuring the response is valid JSON. 
//It also includes the correct Content-Type header for JSON responses.