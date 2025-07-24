// script.js

// --- NAVIGATION BAR AND FOOTER ---
document.addEventListener('DOMContentLoaded', function() {
    fetch("/html/nav.html") // Adjusted path if nav.html is in an 'html' folder
        .then(response => response.text())
        .then(data => {
            const navContainer = document.getElementById("nav-container");
            if (navContainer) {
                navContainer.innerHTML = data;
                // After injecting the nav HTML, initialize the hamburger menu
                initializeHamburgerMenu();
            }
        })
        .catch(error => console.error('Error fetching navigation:', error));

    fetch("/html/footer.html") // Adjusted path if footer.html is in an 'html' folder
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.getElementById("footer-container");
            if (footerContainer) footerContainer.innerHTML = data;
        })
        .catch(error => console.error('Error fetching footer:', error));
});
// --- END NAVIGATION BAR AND FOOTER ---


// --- HAMBURGER MENU (Function to be called after nav is loaded) ---

function initializeHamburgerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    // Select the new wrapper div instead of individual nav links
    const navLinksWrapper = document.querySelector('.nav-links-wrapper');

    if (hamburgerMenu && navLinksWrapper) { // Check for the new wrapper
        hamburgerMenu.addEventListener('click', () => {
            navLinksWrapper.classList.toggle('active'); // Toggle active on the wrapper
            hamburgerMenu.classList.toggle('active');
        });
    }
} 
// --- END HAMBURGER MENU ---


// --- LOGIN AND SIGNUP FORM ---
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupBtn = document.getElementById('show-signup');
    const showLoginBtn = document.getElementById('show-login');

    if (loginForm && signupForm && showSignupBtn && showLoginBtn) {
        showSignupBtn.addEventListener('click', function () {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        });

        showLoginBtn.addEventListener('click', function () {
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }
});
// --- END LOGIN AND SIGNUP FORM ---


// --- FAQ SECTION ---
document.addEventListener('DOMContentLoaded', function () {
    const questionAnswers = document.querySelectorAll('.question-answer');

    questionAnswers.forEach(questionAnswer => {
        const question = questionAnswer.querySelector('.show-question');
        const answer = questionAnswer.querySelector('.show_answer');

        if (question && answer) {
            function toggleAnswer() {
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                } else {
                    answer.style.display = 'block';
                }
            }
            question.addEventListener('click', toggleAnswer);
            answer.addEventListener('click', toggleAnswer);
        }
    });
});
// --- END FAQ SECTION ---


// --- CONTACT FORM SUBMISSION ---
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Contact Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Thank you for your message, ' + name + '! We will get back to you soon.');

            contactForm.reset();
        });
    }
});
// --- END CONTACT FORM SUBMISSION ---