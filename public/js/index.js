// Get references to page elements
var $buddyText = $("#name");
var $buddyEmail = $("#email");
var $buddyPassword = $("#password");
var $submitButton = $(".mybtn");

// The API object contains methods for each kind of request we'll make
var API = {
  saveBuddy: function(buddy) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/buddies",
      data: JSON.stringify(buddy)
    });
  },
  getBuddies: function() {
    return $.ajax({
      url: "api/buddies",
      type: "GET"
    });
  },
  deleteBuddy: function(id) {
    return $.ajax({
      url: "api/buddies/" + id,
      type: "DELETE"
    });
  }
};

// // refreshExamples gets new examples from the db and repopulates the list
var refreshBuddies = function() {
  API.getBuddies().then(function(data) {
    var $buddies = data.map(function(buddy) {
      var $a = $("<a>")
        .text(buddy.text)
        .attr("href", "/buddy/" + buddy.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": buddy.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $buddyList.empty();
    $buddyList.append($buddies);
  });
};

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();
//   event.window.location.href = "/html/signup";
  // var buddies = {
  //   text: $buddyText.val().trim(),
  //   email: $buddyEmail.val().trim()
  // };

  // if (!(buddies.text || buddies.email || buddies.$buddyPassword)) {
  //   alert("You must enter a name and email!");
  //   return;
  // }

  

  // API.saveBuddy(buddies).then(function() {
  //   refreshBuddies();
  // });

  // $buddyText.val("");
  // $buddyEmail.val("");
};

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list

// // Add event listeners to the submit and delete buttons
// $submitButton.on("click", handleFormSubmit);

