
fetch("nav.html")
    .then(Response => Response.text())
    .then(data => document.getElementById("nav-container").innerHTML = data);

fetch("footer.html")
    .then(Response => Response.text())
    .then(data => document.getElementById("footer-container").innerHTML = data);

    

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const showSignupBtn = document.getElementById('show-signup');
  const showLoginBtn = document.getElementById('show-login');

  showSignupBtn.addEventListener('click', function() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  });

  showLoginBtn.addEventListener('click', function() {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  });
});