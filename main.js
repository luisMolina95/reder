const {createServer} = require("http") ;

const server = createServer((req, res) => {
  const bodyChunk = [];
  req.on("data", (chunk) => {
    console.log("chunk:", chunk);
    bodyChunk.push(chunk);
  });
  req.on("error", (a) => {
    console.log("error:",a);
  });
  req.on("end", () => {
    const stringBody = Buffer.concat(bodyChunk).toString();

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        data: "Hello World!, Change",
        headers: req.headers,
        body: stringBody,
        url: req.url,
        method: req.method,
      })
    );
  });
});

server.listen(process.env.PORT);