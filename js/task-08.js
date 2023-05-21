const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const objUserInfo = {};
  objUserInfo[email.name] = email.value;
  objUserInfo[password.name] = password.value;

  if (!email.value || !password.value) {
    alert('Усі поля повинні бути заповнені!');
  } else {
    console.dir(objUserInfo);
  }
  loginFormEl.reset();
});
