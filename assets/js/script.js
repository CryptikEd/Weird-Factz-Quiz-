document.addEventListener("DOMContentLoaded", function() {
            // Event listener for the "Let's begin" button
    document.getElementById("beginBtn").addEventListener("click", function() {
            // Hide the welcome page
        document.getElementById("welcome").style.display = "none";
            // Show the quiz introduction page
        document.getElementById("beforewestart").style.display = "block";
    }); 
    
        // Event listener for the "readyBtn" button
    document.getElementById("readyBtn").addEventListener("click", function() {
        var playerName = document.getElementById("nameInput").value;
        if (playerName.trim() === "") {
            alert("Please enter your name!");
        } else if (!/^[a-zA-Z]+$/.test(playerName)) {
            alert("Please enter a valid name using only letters!");
        } else {
            alert("Welcome, " + playerName + "! Let's start the quiz!");
            // Hide the quiz introduction page
            document.getElementById("beforewestart").style.display = "none";
            // Show the first question page
            document.getElementById("game1").style.display = "block";
            // Display the player's name
            document.getElementById("playerNameDisplay").textContent = playerName;
        }
    });
        // Event listener for the "Back" button
    document.getElementById("backBtn").addEventListener("click", function() {
        // Show the welcome page
        document.getElementById("welcome").style.display = "block";
      
        // Hide the quiz introduction page
        document.getElementById("beforewestart").style.display = "none";
      });
      
      
       
      // Define variables to keep track of the score and current question number
        var score = 0;
        var currentQuestion = 1;


        function calculateScore(answer) {
            // Increment current question number
            currentQuestion++;
          
            // Get the container of the current question
            var currentQuestionContainer = document.getElementById("game" + (currentQuestion - 1));
          
            // Reset the color of all option buttons in the current question
            currentQuestionContainer.querySelectorAll('.option-btn').forEach(function(button) {
                button.style.backgroundColor = '';
            });

            // Change color of selected answer button based on correctness
            var selectedButton = currentQuestionContainer.querySelector('button[value="' + answer + '"]');
            if (answer === "correct") {
            selectedButton.style.backgroundColor = "green";
            } else {
            selectedButton.style.backgroundColor = "red";
            }
});