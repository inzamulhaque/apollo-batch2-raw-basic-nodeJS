const http = require("http");
const fs = require("fs");

// creating server using raw nodeJS
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET") {
    // const readableStream = fs.createReadStream(__dirname + "/text/stream.txt");

    // __dirname and process.cwd() same kaj kore
    const readableStream = fs.createReadStream(
      process.cwd() + "/text/stream.txt"
    );

    readableStream.on("data", (buffer) => {
      res.statusCode = 200;
      res.write(buffer);
    });

    readableStream.on("end", () => {
      res.statusCode = 200;
      res.end("END");
    });

    readableStream.on("error", (err) => {
      console.log(err);
      res.statusCode = 500;
      res.end("ERROR");
    });
  }
});

server.listen(7000, () => console.log(`http://localhost:7000`));
