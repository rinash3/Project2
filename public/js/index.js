$(document).ready(function () {

  // Wont submit the post if we are missing a body or a title

  $("#welcome").on("click", function (event) {
    if ($("#name").val() !== '' && $("#password").val() !== "" && $("#email").val() !== "") {
      event.preventDefault();
      $("#Welcomepage").css("display", "none");
      $("#sign-up-page").css("display", "inherit");
      $("body").css("background", "none");
      $("body").css("position", "absolute");
    } else {
      alert("please fill in your info");
    }
  })



  $("#theSignuppage").on("click", function (event) {
    event.preventDefault();

    var allInterests = "";
    $('.interests').each(function () {
      if ($(this).is(":checked")) {
        allInterests = allInterests.concat($(this).attr("id") + ",");
      }
    });


    var preferedTrip = "";
    $('.preferedTrip').each(function () {
      if ($(this).is(":checked")) {
        preferedTrip = $(this).attr("id");
      }
      console.log($(this).is(":checked"));
    });



    var newBuddySignup = {
      name: $("#name").val().trim(),
      photo: $("#img-preview").attr("src"),
      email: $("#email").val().trim(),
      password: $("#password").val(),
      age: parseInt($("#number").val().trim()),
      country: $("#location").val().trim(),
      language: $("#langs").val().trim(),
      gender: $("#buddyGender :selected").text(),
      diet: $("#buddyDiet :selected").text(),
      description: $("#aboutMe").val().trim(),
      past_Travel: $("#travelExp").val().trim(),
      intrests: allInterests,
      preferred_trip: preferedTrip,
      dest1: $("#dest1").val().trim(),
      dest2: $("#dest2").val().trim(),
      dest3: $("#dest3").val().trim(),
      person: $("#lookingFor").val().trim(),
      must_see: $("#mustSee").val().trim(),
    };

    submitBuddy(newBuddySignup);


  });
  // Constructing a newPost object to hand to the database

  function submitBuddy(Buddy) {
    $.post("/api/buddies", Buddy, function (result) {
      console.log(result);
      window.location.href = "/display/" + result.id
    });
  }

  $("#signin").on("click", function () {
    window.location.href = "/signin"
  });

  $("#theSignInPage").on("click", function (event) {
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "/api/buddies"
    }).then(function (result) {
      for (var i = 0; i < result.length; i++) {
        if ($("#email").val() == result[i].email && $("#password").val() == result[i].password) {
          console.log(result[i].id);
          window.location.href = "/display/" + result[i].id
        }
      }
      alert("please put in a valid email");
    });
  })

});

  // Submits a new post and brings user to blog page upon completion

  // ==========================================================================
  // *********** NOTE FROM MOON/FOR MOON: TEST THIS HREF OUT LATER*************
  // ==========================================================================
