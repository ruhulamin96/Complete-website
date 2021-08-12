const express = require("express");
//mongodb fetching
require("./db/connect");

const app = express();
const port = process.env.PORT || 8080;

//---------------------------------------------------
//setting the path of public folder
const path = require("path");

const staticpath = path.join(__dirname, "../public");
//middleware
app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);
app.use(
  "/jq",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(staticpath));
app.set("view engine","hbs")
//------------------------------------------------------
//routing
app.get("/", (req, res) => {
  res.render("index")
});
app.get("/contact", (req, res) => {
  res.render("contact")
});

//create server
app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
