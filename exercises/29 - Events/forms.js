const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  const shouldChangePage = confirm(
    'This page is malicious, do you wish to proceed?'
  );
  if (!shouldChangePage) {
    // window.location = event.currentTarget.href;
    event.preventDefault();
  }
  console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  // console.log(event.currentTarget.name.value);
  // console.log(event.currentTarget.email.value);
  // console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
