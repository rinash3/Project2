var dotenv = require("dotenv");
dotenv.load();

var fs = require("fs");
var cloudinary = require("cloudinary").v2;

var uploads = {};
cloudinary.config({
  cloud_name: "hp4hhwhlf",
  api_key: "615861227158362",
  api_secret: "gKraiT6MtAKmLKZHnF8tJAnkfDY"
});
console.log("** ** ** ** ** ** ** ** ** Uploads ** ** ** ** ** ** ** ** ** **");
