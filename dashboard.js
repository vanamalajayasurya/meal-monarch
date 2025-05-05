$(document).ready(function() {
    $(".goal-card").click(function() {
        $(".goal-card").removeClass("selected"); // Remove previous selection
        $(this).addClass("selected"); // Highlight selected goal
        $(this).find("input").prop("checked", true); // Select the radio button
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.querySelector("audio");
    const muteBtn = document.getElementById("mutebtn");

    muteBtn.addEventListener("click", function () {
        if (bgMusic.muted) {
            bgMusic.muted = false; // Unmute
            muteBtn.src = "/mutebtn.png"; // Set back to mute button icon
        } else {
            bgMusic.muted = true; // Mute
            muteBtn.src = "/unmutebtn.png"; // Change button icon to unmute
        }
    });
});

// Wait for DOM to load before running JavaScript
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fetchMealPlan").addEventListener("click", async function() {
        const height = document.getElementById("heightInput").value;
        const weight = document.getElementById("weightInput").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const goal = document.querySelector('input[name="goal"]:checked')?.value;
        const dietType = document.getElementById("dietPreference").value;

        if (!height || !weight || !gender || !goal || !dietType) {
            alert("Please fill all fields before submitting!");
            return;
        }

        try {
            // ✅ Updated backend URL from localhost to Render
            const response = await fetch("https://meal-monarch-9.onrender.com/getMealPlan", {  
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ height, weight, gender, goal, dietType })
            });

            const data = await response.json();

            // Handle errors from backend
            if (!response.ok || !data.mealPlan) {
                throw new Error(data.error || "Failed to generate meal plan!");
            }

            // Store meal plan in localStorage & redirect
            localStorage.setItem("mealPlan", data.mealPlan);
            window.location.href = "recipe.html"; // Redirect to result page

        } catch (error) {
            console.error("Error fetching meal plan:", error);
            alert(`Error: ${error.message}`);
        }
    });
});