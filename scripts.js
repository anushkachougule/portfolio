
document.addEventListener("DOMContentLoaded", function () {
      // Typing Effect for the Tagline
      const text = "Aspiring Data Analyst, ML Engineer & AI Researcher";
      const speed = 50;
      let i = 0;
  
      function typeWriter() {
        if (i < text.length) {
          document.getElementById("typing-text").innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        } else {
          document.querySelector(".cursor").style.display = "none";
        }
      }
      typeWriter();
});
function copyEmail() {
  var emailText = 'anushka7@umd.edu';
  var tempInput = document.createElement('input');
  tempInput.value = emailText;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Show popup
  var popup = document.getElementById("copyPopup");
  popup.style.display = "block";

  // Hide after 2 seconds
  setTimeout(function () {
      popup.style.display = "none";
  }, 2000);
}

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
          behavior: "smooth",
          block: "start"
      });
  });
});

const timelineItems = document.querySelectorAll(".timeline-event");



