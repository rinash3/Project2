$(document).ready(function () {
  $(".card").on("click", function () {

    var idValue=$(this).attr("value");
    window.location.href = "/profile/"+idValue;

  })
});
