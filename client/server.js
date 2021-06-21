/* eslint-disable @typescript-eslint/no-var-requires */
const http = require('http');
const fs = require('fs');
const path = require('path');

// https://github.com/krvikash35/nodejs-pure-http-server/blob/master/server.js

const PORT = 8080;

const httpServer = http.createServer(requestResponseHandler);

httpServer.listen(PORT, () => {
  console.log(`Client static file server is listening on port ${PORT}`);
});

function requestResponseHandler(req, res) {
  if (req.url === '/') {
    sendResponse('index.html', 'text/html', res);
  } else {
    sendResponse(req.url, getContentType(req.url), res);
  }
}

function sendResponse(url, contentType, res) {
  const file = path.join(__dirname, url);

  fs.readFile(file, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write(`File '${file}' not found!`);
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.write(content);
      res.end();
    }
  });
}

function getContentType(url) {
  switch (path.extname(url)) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    default:
      return 'application/octate-stream';
  }
}
