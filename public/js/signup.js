$(document).ready(function() {
// Gets an optional query string from our url (i.e. ?buddies_id=23)
var url = window.location.search;
var buddyId;
// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;
  
// If we have this section in our url, we pull out the post id from the url
// In localhost:8080/cms?post_id=1, postId is 1
    if (url.indexOf("?buddies_id=") !== -1) {
      buddyId = url.split("=")[1];
      getBuddyData(buddyId);
    }
  
    // Getting jQuery references to the post body, title, form, and category select
    var buddyAge = $("#number");
    var buddyLocation = $("#location");
    var buddyLanguages = $("#langs");
    var buddyGender = $("#buddyGender");
    var buddyDiet = $("#buddyDiet");
    var buddyAbout = $("#aboutMe");
    var buddyTravelExp = $("#travelExp");
    var buddyLikesAttractions = $("#attractions");
    var buddyLikesMuseums = $("#museums");
    var buddyLikesCulture = $("#culture");
    var buddyLikesNature = $("#nature");
    var buddyLikesFood = $("#food");
    var buddyLikesOther = $("#other");
    var buddyIsSpontaneous = $("#spontaneous");
    var buddyIsPlanned = $("#planned");
    var buddyDest1 = $("#dest1");
    var buddyDest2 = $("#dest2");
    var buddyDest3 = $("#dest3");
    var buddyLookingFor = $("#lookingFor");
    var buddyMustSee = $("#mustSee");
    var buddySignupForm = $("#buddySignup");
  
    // Adding an event listener for when the form is submitted
    $(buddySignupForm).on("submit", function(event) {
      event.preventDefault();
      // Wont submit the post if we are missing a body or a title
    //   if (!buddyName.val().trim() || !buddyEmail.val().trim()) {
    //     return;
    //   }
      // Constructing a newPost object to hand to the database
      var newBuddySignup = {
        age: buddyAge.val().trim(),
        country: buddyLocation.val().trim(),
        language: buddyLanguages.val().trim(),
        gender: buddyGender.val().trim(),
        diet: buddyDiet.val().trim(),
        description: buddyAbout.val().trim(),
        past_Travel: buddyTravelExp.val().trim(),
        intrests: "'"+ buddyLikesAttractions.val().trim() + buddyLikesMuseums.val().trim(),
        intrests: buddyLikesCulture.val().trim(),
        intrests: buddyLikesNature.val().trim(),
        intrests: buddyLikesFood.val().trim(),
        intrests: buddyLikesOther.val().trim(),
        preferred_trip: buddyIsSpontaneous.val().trim(),
        preferred_trip: buddyIsPlanned.val().trim(),
        dest1: buddyDest1.val().trim(),
        dest2: buddyDest2.val().trim(),
        dest3: buddyDest3.val().trim(),
        person: buddyLookingFor.val().trim(),
        must_see: buddyMustSee.val().trim(),
      };
  
      console.log(newBuddySignup);
      window.location = "/display";
  
      // If we're updating a post run updatePost to update a post
      // Otherwise run submitPost to create a whole new post
      if (updating) {
        newBuddySignup.id = buddyId;
        updateBuddySignup(newBuddySignup);
      } else {
        submitBuddySignup(newBuddySignup);
      }
    });
  
    // Submits a new post and brings user to blog page upon completion
  
    // ==========================================================================
    // *********** NOTE FROM MOON/FOR MOON: TEST THIS HREF OUT LATER*************
    // ==========================================================================
    function submitBuddySignup(Buddy) {
      $.post("/api/buddies/", Buddy, function() {
      });
    }
  
    // Gets post data for a post if we're editing
    function getBuddyData(id) {
      $.get("/api/buddies/" + id, function(data) {
        if (data) {
          // If this post exists, prefill our cms forms with its data
          buddyAge.val(data.age);
          buddyLocation.val();
          buddyPassword.val(data.password);
          // If we have a post with this id, set a flag for us to know to update the post
          // when we hit submit
          updating = true;
        }
      });
    }
  
    // Update a given post, bring user to the blog page when done
    function updateBuddy(Buddy) {
      $.ajax({
        method: "PUT",
        url: "/api/buddies",
        data: Buddy
      }).then(function() {
        window.location.href = "/html/signup.html";
      });
    }
  });