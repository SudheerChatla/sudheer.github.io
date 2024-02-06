function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
  
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }



function toggleTheme() {
const body = document.body;
const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';

// Toggle the body class
body.classList.remove(currentTheme);
body.classList.add(newTheme);

// Save the current theme to local storage (optional)
localStorage.setItem('theme', newTheme);
}

// Check for a stored theme preference
document.addEventListener('DOMContentLoaded', () => {
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
}
});



