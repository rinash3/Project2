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
  var buddyName = $("#name");
  var buddyEmail = $("#email");
  var buddyPassword = $("#password");
  var welcomeSignupForm = $("#welcomeSignup");

  // Adding an event listener for when the form is submitted
  $(welcomeSignupForm).on("submit", function(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!buddyName.val().trim() || !buddyEmail.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newBuddy = {
      name: buddyName.val().trim(),
      email: buddyEmail.val().trim(),
      password: buddyPassword.val()
    };

    console.log(newBuddy);
    window.location.href = "/signup";

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newBuddy.id = buddyId;
      updateBuddy(newBuddy);
    } else {
      submitBuddy(newBuddy);
    }
  });

  // Submits a new post and brings user to blog page upon completion

  // ==========================================================================
  // *********** NOTE FROM MOON/FOR MOON: TEST THIS HREF OUT LATER*************
  // ==========================================================================
  function submitBuddy(Buddy) {
    $.post("/api/buddies/", Buddy, function() {
      window.location.href = "/html/signup.html";
    });
  }

  // Gets post data for a post if we're editing
  function getBuddyData(id) {
    $.get("/api/buddies/" + id, function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        buddyName.val(data.name);
        buddyEmail.val(data.email);
        buddyPassword.val(data.password);
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given buddy, bring buddy to the signup page when done
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
