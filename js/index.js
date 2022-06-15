/* Importing the modules from the components folder. */
import appointment from "./components/appointment.js";
import developer from "./components/developer.js";
import client from "./components/client.js";
import venue from "./components/venue.js";
import category from "./components/category.js";
import user from "./components/user.js";

function home() {
  developer.select();
  client.select();
  venue.display();
  category.display();
}

/* Adding an event listener to the document. When the DOMContentLoaded event is fired, the home
function will be executed. */

document.addEventListener("DOMContentLoaded", function () {
  home();
  manageSidebar();
});

/* Adding an event listener to the newAppointment element. When the submit event is fired, the function
will be executed. Then the function will prevent the default action of the event. The function will
call the newAppointment method of the appointment object and pass the this keyword as an argument. */
document
  .querySelector("#newAppointment")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    appointment.newAppointment(this);
  });

/* Adding an event listener to the scheduleTab element. When the scheduleTab element is clicked, the
function will be executed. Then the function will set the background color of the new_developerSidebar
and manage_clientSidebar elements to an empty string, also The function will set the background color of
the scheduleTab element to #074E79. The function will add an event listener to the document. When
the DOMContentLoaded event is fired, the home function will be executed. */
var scheduleTab = document.querySelector("#scheduleTab");
scheduleTab.addEventListener("click", function () {
  new_developerSidebar.style.background = "";
  manage_clientSidebar.style.background = "";
  manage_developerSidebar.style.background = "";
  scheduleTab.style.background = "#074E79";
  appointment.display();
  developer.select();
  client.select();
  venue.display();
  category.display();
});

var new_developerSidebar = document.querySelector("#new_developerSidebar");
new_developerSidebar.addEventListener("click", function () {
  manage_clientSidebar.style.background = "";
  scheduleTab.style.background = "";
  manage_developerSidebar.style.background = "";
  new_developerSidebar.style.background = "#074E79";
  developer.display();

  // when the user want to add new developer
  document
    .querySelector("#add_developerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      developer.addDeveloper(this);
    });
});

var manage_clientSidebar = document.querySelector("#manage_clientSidebar");
manage_clientSidebar.addEventListener("click", function () {
  new_developerSidebar.style.background = "";
  scheduleTab.style.background = "";
  manage_developerSidebar.style.background = "";
  manage_clientSidebar.style.background = "#074E79";
  client.display();
});

var manage_developerSidebar = document.querySelector(
  "#manage_developerSidebar"
);
manage_developerSidebar.addEventListener("click", function () {
  new_developerSidebar.style.background = "";
  scheduleTab.style.background = "";
  manage_clientSidebar.style.background = "";
  manage_developerSidebar.style.background = "#074E79";
  developer.manageDeveloper();
});

var logoutSidebar = document.querySelector("#logoutTab");
logoutSidebar.addEventListener("click", function () {
  user.logout();
});

async function manageSidebar() {
  await appointment.display();
  var new_appointmentBtn = document.querySelector("#new_appointmentBtn");
  let url = "http://localhost:3000";
  fetch(url, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data !== "admin") {
        // making the anchor tag disable
        scheduleTab.style = "pointer-events: none";
        scheduleTab.style.background = "#074E79";
        manage_developerSidebar.classList.add("d-none");
        manage_clientSidebar.classList.add("d-none");
        new_developerSidebar.classList.add("d-none");
        new_appointmentBtn.classList.add("d-none");
      }
    });
}
