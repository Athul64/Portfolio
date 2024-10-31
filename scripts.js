// List of external links
const externalLinks = ['pages/about.html', 'pages/works.html', 'pages/insight.html', 'pages/contact.html', '/index.html'];

// Add click event to each navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(event) {
    const targetHref = this.getAttribute('href');
    
    if (externalLinks.includes(targetHref)) {
      window.location.href = targetHref; // Navigate to external page
      return; // Stop further execution
    }
    
    // For internal navigation, prevent default and show targeted section
    event.preventDefault();
    const targetId = targetHref.substring(1);
    
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
  document.body.classList.add('h1-active'); // Hide scrollbar
  setTimeout(() => {
    document.getElementById('logo').style.animation = 'fadeOutMoveDown 2s ease-in-out forwards';
    setTimeout(() => {
      document.body.classList.remove('h1-active'); // Show scrollbar again
      document.getElementById('content').style.display = 'block';
    }, 1000); // Show content after heading animation ends
  }, 1000);
};

// Add shadow to navbar on scroll
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) { // Apply the shadow after scrolling 50px
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

// Toggle menu for hamburger icon
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const talkButton = document.querySelector('.talk-button');
  
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  talkButton.classList.toggle('active');
}

// Attach toggle function to hamburger menu click
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Navigation function for 'Let's Talk' button
function navigateToLetstalk() {
  window.location.href = 'pages/letstalk.html'; // Adjust with your Let's Talk page URL
}
