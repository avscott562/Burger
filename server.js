const express = require("express");
const path = require("path");


// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
let routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
// Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);
});

// app.get("/", function(req, res) {
//     res.json(path.join(__dirname, "public/index.html"));
//   });