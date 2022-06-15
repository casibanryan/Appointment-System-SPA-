import user from "./components/user.js";

document.addEventListener("DOMContentLoaded", function () {
  user.loginPage();

  // when use wants to click the register button
  document
    .querySelector("#registerTab1")
    .addEventListener("click", function () {
      user.registerPage();
    });

  // login

  document.querySelector("#loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    login(this);
  });
});

document.querySelector("#loginTab").addEventListener("click", function () {
  user.loginPage();
  document
    .querySelector("#registerTab1")
    .addEventListener("click", function () {
      user.registerPage();
    });
});

// register
document.querySelector("#registerTab").addEventListener("click", function () {
  user.registerPage();

  document
    .querySelector("#registerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      register(this);
    });
});

async function login(event) {
  const username = event.username.value;
  const password = event.password.value;

  const formData = {
    name: username,
    email: username,
    password: password,
  };

  const url = "http://localhost:3000";
  await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        window.location.href = "http://localhost/AppointmentDev";
      } else {
        alert("error");
      }
    });
}

async function register(event) {
  const formData = {
    name: event.name.value,
    birthdate: event.birthdate.value,
    gender: event.gender.value,
    address: event.address.value,
    password: event.password.value,
    province: event.province.value,
    city: event.city.value,
    zip_code: event.zip_code.value,
    email: event.email.value,
    home_phone: event.home_phone.value,
    mobile_phone: event.mobile_phone.value,
    occupation: event.occupation.value,
    current_employment: event.current_employment.value,
    referred_by: event.referred_by.value,
  };

  const url = "http://localhost:3000/client";
  await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.message) {
        alert("account successfully registered!");
        document.querySelector("#loginTab").click();
      } else {
        console.log(data.error);
      }
    });
}
