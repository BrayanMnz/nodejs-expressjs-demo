// This file contain a more maintainable server

const http = require("http");

http
  .createServer((req, res) => {
    let headers = req.headers;
    let method = req.method;
    let url = req.url;
    let body = [];

    req.on("error", (err) => {
      console.error(err);
    });

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      body = Buffer.concat(body).toString();

      res.on("error", (err) => {
        console.error(err);
      });

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");

      const responseBody = {
        headers: headers,
        method: method,
        url: url,
        body: body,
      };

      res.write(JSON.stringify(responseBody));
      res.end();
    });
  })
  .listen(3001);
