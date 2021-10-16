const express = require("express"); // Requsting module
const app = express(); // Creating an app

app.use(express.static("public")); // Making items (stylesheets, scripts) can be accessed in main.

app.get("/", (request, response) => { // If person is requesting the main page (yourdomain.com/)
  response.sendFile(__dirname + "/views/index.html"); // Send page
}); // Close syntax

app.get("*", (request, response) => { // If other send
  response.sendFile(__dirname + "/views/404.html"); // this 404 page
}); // Syntax again
