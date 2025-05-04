$(document).ready(function() {
    $(".goal-card").click(function() {
        $(".goal-card").removeClass("selected"); // Remove previous selection
        $(this).addClass("selected"); // Highlight selected goal
        $(this).find("input").prop("checked", true); // Select the radio button
    });
});
