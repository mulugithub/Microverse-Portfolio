// declaring variables to get form elements values
const form = document.getElementById('form');
const email = document.getElementById('email');
const spanError = document.querySelector('span.error');

function checkError(input, message) {
  spanError.innerText = message;
  email.classList.add('is-invalid');
  setTimeout(() => {
    spanError.style.display = 'none';
  }, 5000);
}
// defining function if there's no error
function checkValid() {
  email.classList.add('valid');
  form.submit();
}
// defining a function for form input validation checks
function checkEmail() {
  // defining function to check input type errors
  const emailValue = email.value;
  if ((emailValue !== emailValue.toLowerCase())) {
    checkError(email, 'The content of the email field should be in lower case letter!');
    spanError.classList.add('active');
  } else {
  // adding function if there's no error
    checkValid(email);
    email.classList.remove('is-invalid');
  }
}
