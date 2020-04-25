const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const pattern = /^([a-zA-Z]|\d){6,}$/;

form.addEventListener('submit', e => {
  e.preventDefault();
  const username = form.username.value;

  if (pattern.test(username)) {
    feedback.style.display = 'none';
  } else {
    feedback.textContent =
      "username must contains only letters and numbers and be longer then 6 characters";
  }

});

form.username.addEventListener('keyup', e => {
  if (pattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success');
  } else {
    form.username.setAttribute('class', 'error');
  }
});