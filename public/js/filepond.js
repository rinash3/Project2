var fs = require("fs");
var cloudinary = require("cloudinary");

var uploads = {};
cloudinary.config({
  cloud_name: "hp4hhwhlf",
  api_key: "615861227158362",
  api_secret: "gKraiT6MtAKmLKZHnF8tJAnkfDY"
});

cloudinary.uploader().upload(new File("http://www.example.com/sample.jpg"),
  ObjectUtils.asMap("public_id", "sample_woman"));

