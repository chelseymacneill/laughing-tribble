// Purpose : Holds JQuery logic for controlling buttons and views

// Make sure the entire DOM loads before we attempt to manipulate it
$(function () {

    // Create a new burger 
    $(".create-form").on("submit", function (event) {
        // Prevent the default behavior of the submit button
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: $("input:checked").val().trim()
        };

        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new burger");
                //Force a reload of the page to the updated list
                location.reload();
            });
    });

    // Change a burger to devoured
    $(".change-burger").on("click", function (event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");

        let newDevourState = {
            devoured: newDevour
        };

        // Send the PUT request 
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("Changed devoured to ", newDevour);
                //Reload the page to force the updated list
                location.reload();
            });

    });

}); // Document onload closing
