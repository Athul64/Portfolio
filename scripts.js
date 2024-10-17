// Function to handle section changes based on navigation clicks
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
      section.style.display = 'none';
    });

    // Show the targeted section
    document.getElementById(targetId).style.display = 'block';
  });
});

// Fade in the content after the heading fades out
window.onload = function() {
  document.body.classList.add('h1-active');  // Hide scrollbar
  setTimeout(() => {
    document.getElementById('logo').style.animation = 'fadeOutMoveDown 2s ease-in-out forwards';
    setTimeout(() => {
      document.body.classList.remove('h1-active');  // Show scrollbar again
      document.getElementById('content').style.display = 'block';
    }, 1000);  // Show content after heading animation ends
  }, 1000);
};


window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) { // Apply the shadow after scrolling 50px
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});