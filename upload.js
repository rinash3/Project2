var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "hp4hhwhlf",
  api_key: "615861227158362",
  api_secret: "gKraiT6MtAKmLKZHnF8tJAnkfDY"
});

$(document).ready(function() {
  $('.cloudinary-fileupload').cloudinary_fileupload({
    disableImageResize: false,
    imageMaxWidth: 800,                           // 800 is an example value
    imageMaxHeight: 600,                          // 600 is an example value
    maxFileSize: 2000000,                        // 20MB is an example value
    loadImageMaxFileSize: 100000,               // default is 10MB
    acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i
  });
  
  $('.cloudinary-fileupload').bind('cloudinarydone', function(e, data) {  
    console.log(data);
    $('.preview').html(
       $.cloudinary.imageTag(data.result.public_id, 
           { format: data.result.format, version: data.result.version, 
             crop: 'scale', width: 200 }));    
    $('.image_public_id').val(data.result.public_id);    
    return true;});
});

