
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

    showSignupBtn.addEventListener('click', function () {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    showLoginBtn.addEventListener('click', function () {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});

// LOGIN AND SIGNUP FORM






// FAQ SECTION
document.addEventListener('DOMContentLoaded', function () {
  const questionAnswers = document.querySelectorAll('.question-answer');

  questionAnswers.forEach(questionAnswer => {
    const question = questionAnswer.querySelector('.show-question');
    const answer = questionAnswer.querySelector('.show_answer');


    question.addEventListener('click', toggleAnswer);
    answer.addEventListener('click', toggleAnswer);

    function toggleAnswer() {
      if (answer.style.display === 'block') {
        answer.style.display = 'none';

      } else {
        answer.style.display = 'block';
       
      }
    }
  });
});

// FAQ SECTION

