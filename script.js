const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");

form.addEventListener('submit', e => {
  e.preventDefault();
  const username = form.username.value;
  const pattern = /^([a-zA-Z]|\d){6,}$/;

  if (pattern.test(username)) {
    feedback.style.display = 'none';
  } else {
    feedback.textContent =
      "username must contains only letters and numbers and be longer then 6 characters";
  }

});


//let result = pattern.test(username); // bool
//let result1 = username.search(pattern); //int -1 - no match  

//console.log(result);