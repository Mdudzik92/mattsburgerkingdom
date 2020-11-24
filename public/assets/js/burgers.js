$(function(){
  $(".change-burger").on("click", function(event){
    var burgerId = $(this).data("burgerId");
    var newDevoured = $(this).data("newDevoured");

    var newDevouredState = {
      devoured: newDevoured
    };
  
    // Send the PUT request.
  $.ajax("/api/burgers/" + burgerId, {
    type: "PUT",
    data: newDevouredState
  }).then(
    function() {
      console.log("changed devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    }
    );
  });
  
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
  
    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val()
    };
  
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});