$(document).ready(function () {

  $(".card").on("click", function () {

    var idValue = $(this).attr("value");
    var myID = window.location.href.split('/')[window.location.href.split('/').length - 1];
    // console.log(myID)
    window.location.href = "/profile/" + idValue + "/" + myID;

  })

  $(".goBack").on("click", function () {
    window.history.back();
  })
  $("#goToMyProfile").on("click", function () {
    var myID = window.location.href.split('/')[window.location.href.split('/').length - 1];
    window.location.href = "/myprofile/" + myID;
  })

  $("#contactInfo").on("click", function (event) {
    event.preventDefault();
    $("#contactForm").css("display", "initial");
    $("#contactForm").attr("status", "open");
    $(".LeftHalf").css("opacity", ".2");
    $(".rightHalf").css("opacity", ".2");
  });


  $(".close").on("click", function (event) {
    event.preventDefault();
    $("#contactForm").css("display", "none");
    $(".LeftHalf").css("opacity", "1");
    $(".rightHalf").css("opacity", "1");
  });

  $("#sendInfo").on("click", function (event) {
    if ($(".width-80").val() !== "") {
      event.preventDefault();
      $("#contactForm").css("display", "none");
      $(".LeftHalf").css("opacity", "1");
      $(".rightHalf").css("opacity", "1");
      alert("The message is sent");
    } else {
      alert("Please enter valid info");
    }

  });

});
