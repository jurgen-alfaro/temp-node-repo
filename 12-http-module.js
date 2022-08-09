const http = require("http");

// req = is the incoming request
// a client requests information from your server
// res = is what we (the server) sends back in response.
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome to our home page");

  if (req.url === "/about") res.end("Here is our short history");
  res.end(`
  <h1>Oops! </h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Home page</a>
 `);
});

server.listen(5000);
