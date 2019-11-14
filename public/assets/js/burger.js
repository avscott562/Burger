// Make sure we wait to attach our handler until the DOM is fully loaded.
$(function() {
    $(document).on("click", ".devour", function() {
        let id = $(this).attr("data-id");
        console.log(id);

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function() {
            console.log("that burger stood no chance!");
            // Reload the page to get the updated list
            location.reload();
            }
        );
        
    });
});

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bn").val().trim(),
      devoured: false
    };

    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("That burger sounds yummy!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });