// NAVIGATION BAR AND FOOTER - Ensure this runs first or has its own DOMContentLoaded or uses defer

// Using a single DOMContentLoaded listener for all page-specific functionality
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and inject navigation bar
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            const navContainer = document.getElementById("nav-container");
            if (navContainer) {
                navContainer.innerHTML = data;
                // If your nav.html contains elements that also need JS,
                // you might need to call functions here after it's loaded.
                // For example, if login/signup buttons are inside nav.html:
                initializeLoginSignup();
            }
        })
        .catch(error => console.error('Error fetching navigation:', error));

        document.addEventListener('DOMContentLoaded', function () {
    // ... (Your existing code for fetching nav/footer and other functionalities) ...

    // Hamburger menu toggle for phone mode
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navBar = document.querySelector('.navigation-bar');
    
    if (hamburgerMenu && navBar) {
        hamburgerMenu.addEventListener('click', function () {
            // Check if the mobile menu already exists
            let mobileNavLinks = document.querySelector('.mobile-nav-links');

            if (!mobileNavLinks) {
                // Create the mobile menu container if it doesn't exist
                mobileNavLinks = document.createElement('div');
                mobileNavLinks.classList.add('mobile-nav-links');
                
                // Clone the left and right nav links from the desktop menu
                const navLeftClone = document.querySelector('.navigation-bar-left').cloneNode(true);
                const navRightClone = document.querySelector('.navigation-bar-right').cloneNode(true);
                
                // Append the cloned lists to the new mobile menu container
                mobileNavLinks.appendChild(navLeftClone);
                mobileNavLinks.appendChild(navRightClone);
                
                // Add the new menu container to the nav bar
                navBar.appendChild(mobileNavLinks);
            }
            
            // Toggle the 'show' class to display/hide the menu
            mobileNavLinks.classList.toggle('show');
        });
    }
});

    // Fetch and inject footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.getElementById("footer-container");
            if (footerContainer) {
                footerContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error fetching footer:', error));


        
    // LOGIN AND SIGNUP FORM (ensure elements exist before trying to access them)
    // Encapsulate this in a function to be called after nav is loaded if buttons are in nav.html
    function initializeLoginSignup() {
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
    }
    // Call it initially if buttons are in index.html, or call after nav fetch if in nav.html
    // If your login/signup buttons are always present on the page (not loaded via fetch), call it here:
    initializeLoginSignup();


    // FAQ SECTION (only run if on a page with FAQ elements)
    const questionAnswers = document.querySelectorAll('.question-answer');
    if (questionAnswers.length > 0) {
        questionAnswers.forEach(questionAnswer => {
            const question = questionAnswer.querySelector('.show-question');
            const answer = questionAnswer.querySelector('.show_answer');

            if (question && answer) {
                question.addEventListener('click', toggleAnswer);
                answer.addEventListener('click', toggleAnswer); // If clicking answer also toggles

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

    // CONTACT FORM SUBMISSION (only run if on a page with contact form)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
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

    // Board of Trustees Toggle (for about.html)
    const viewBoardBtn = document.getElementById('view-board-btn');
    const boardMembersContainer = document.getElementById('board-members-container');

    if (viewBoardBtn && boardMembersContainer) {
        viewBoardBtn.addEventListener('click', function () {
            boardMembersContainer.classList.toggle('show-members');
            if (boardMembersContainer.classList.contains('show-members')) {
                viewBoardBtn.textContent = 'Hide Board Members';
            } else {
                viewBoardBtn.textContent = 'View Board Members';
            }
        });
    }
});