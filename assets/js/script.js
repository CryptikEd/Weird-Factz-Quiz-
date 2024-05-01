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
    
});