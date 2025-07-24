// NAVIGATION BAR AND FOOTER

fetch("nav.html")
    .then(Response => Response.text())
    .then(data => document.getElementById("nav-container").innerHTML = data);

fetch("footer.html")
    .then(Response => Response.text())
    .then(data => document.getElementById("footer-container").innerHTML = data);

// NAVIGATION BAR AND FOOTER





// LOGIN AND SIGNUP FORM
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

// LOGIN AND SIGNUP FORM


// FAQ SECTION
document.addEventListener('DOMContentLoaded', function () {
    const questionAnswers = document.querySelectorAll('.question-answer');
   
    // Ensure questionAnswers is not empty before proceeding
    if (questionAnswers.length > 0) {
        questionAnswers.forEach(questionAnswer => {
            const question = questionAnswer.querySelector('.show-question');
            const answer = questionAnswer.querySelector('.show_answer');

            if (question && answer) { // Double check within the loop
                question.addEventListener('click', toggleAnswer);
                answer.addEventListener('click', toggleAnswer);

                function toggleAnswer() {
                    if (answer.style.display === 'block') {
                        answer.style.display = 'none';
                    } else {
                        answer.style.display = 'block';
                    }
                }
            }
        });
    }
});

// FAQ SECTION




// CONTACT FORM SUBMISSION
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) { // Check if the contact form exists
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

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

// CONTACT FORM SUBMISSION