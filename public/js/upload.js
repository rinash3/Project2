var imagePreview = document.getElementById("img-preview");
var fileUpload = document.getElementById("file-upload");
var URL_CLOUDINARY = "https://api.cloudinary.com/v1_1/hyidentz4/upload"
var URL_CLOUDINARY_UPLOAD_PRESET = "zhqucmfe"


fileUpload.addEventListener("change", function (event) {
  var file = event.target.files[0];
  var formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', URL_CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: URL_CLOUDINARY,
    method: "POST",
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function (result) {
    imagePreview.src=result.data.secure_url;
  }).catch(function (err) {
    console.log(err);
  })

})