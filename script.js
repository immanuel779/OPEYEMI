document.addEventListener('DOMContentLoaded', () => {
  // Select all nav links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.getAttribute('href');

      // Simple smooth scroll or page navigation simulation
      if (target && target !== '#') {
        window.location.href = target;
      }
    });
  });
  
  document.getElementById("portfolio-link").addEventListener("click", function(e) 

{

    e.preventDefault()
    window.location.href = "portfolio.html"
});

document.getElementById("about-link").addEventListener("click", function(e) 

{

    e.preventDefault()
    window.location.href = "about.html"
});
  
  
  document.getElementById("service-link").addEventListener("click", function(e) 

{

    e.preventDefault()
    window.location.href = "service.html"
});

document.getElementById("index-link").addEventListener("click", function(e) 

{

    e.preventDefault()
    window.location.href = "index.html"
});

document.getElementById("contact-link").addEventListener("click", function(e) 

{

    e.preventDefault()
    window.location.href = "contact.html"
});

  // Example for the "Download CV" button if needed
  const downloadBtn = document.querySelector('.btn-secondary ');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      // Trigger CV download or redirect
      // Create a link element
  const link = document.createElement('a');
  link.href = 'assets/resume.pdf';
  link.download = 'assets/resume.pdf';
  link.click();
});
  }
});

