// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("revealButton");
    const hiddenMessage = document.getElementById("hiddenMessage");
    const hiddenMessage1 = document.getElementById("hiddenMessage1");

  
    button.addEventListener("click", () => {
      hiddenMessage.classList.toggle("hidden");
      button.textContent = hiddenMessage.classList.contains("hidden");

      hiddenMessage1.classList.toggle("hidden1");
      button.textContent = hiddenMessage1.classList.contains("hidden1")
        ? "Click Me" 
        : "Hide Message";
    });
  });


  
