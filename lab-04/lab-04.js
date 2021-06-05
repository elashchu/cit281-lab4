// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Hello from Lab 4!</h1>");
});

//Route for /name
fastify.get("/name", (request, reply) => {
    // (A) Getting info form the requester
    const {first, last} = request.query;
    

    //const name //if first and last are defined, then name = "Emily Lashchuk" else "Guest"
    //<var> = <conditional statement> > value if cs is true : alt value if cs is false
    
    //(B) transforming the request into useful information
    const name = first && last ? `${first} ${last}` : `Guest`;

    // (C) using the transformed data to inform our response to the client
    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(`<h1>Hello, ${name}</h1>`);
  });

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
