import date from "./formatDate.js";
import developer from "./developer.js";
import client from "./client.js";
import category from "./category.js";
import venue from "./venue.js";

const appointment = {
  display: async function () {
    let url = "http://localhost:3000/appointment";
    await fetch(url, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.message == "unauthenticated") {
          window.location.href = "http://localhost/AppointmentDev/account.html";
        } else {
          let buffer = `<header class="border-bottom" style='padding-bottom: 3.4rem'>
                    <p class="fw-bold float-end text-muted text-capitalize p-3">Welcome, Master
                    </p>
                </header>
          <div class="container-fluid" id="scheduleTab">
                    <div class="d-flex justify-content-between my-3">
                        <h3 class="fw-bold me-5">
                            Schedule Clients
                        </h3>
                        <button id="new_appointmentBtn" class="btn btn-primary ms-5" data-bs-toggle="modal" data-bs-target="#new_appointment"><i
                                class="bi bi-plus-lg me-2"></i>New Appointment</button>
                    </div>
                    <div class="event-schedule-area-two bg-color pad100">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="tab-content my-5">
                                        <div class="tab-pane fade active show" role="tabpanel">
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th class="text-center" scope="col">Date</th>
                                                            <th scope="col">Developer</th>
                                                            <th scope="col">Client</th>
                                                            <th scope="col">Venue</th>
                                                            <th class="text-center" scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                  `;
          data.forEach((val, index) => {
            developer.get_developerImage(val.developer_id, index);
            client.get_clientName(val.client_id);
            category.get_categoryName(val.category);
            venue.getLocation(val.venue);

            buffer += "<tr>";
            buffer += '<th scope="row">';
            buffer += '<div class="event-date">';
            buffer += `<span>${date.getDay(val.date)}</span>`;
            buffer += `<p>${date.getMonth(val.date)}</p>`;
            buffer += "</div></th><td>";
            buffer += `<div class="event-img"><img  alt="developer" id="profileOfDeveloper${
              val.developer_id + index
            }"/></div>`;
            buffer += "</td>";
            buffer += "<td>";
            buffer += '<div class="event-wrap">';
            buffer += `<h3><a class="text-capitalize" type="button" onclick="appointmentDetails(${val.appointment_id})" data-bs-toggle="modal" data-bs-target="#more_detailsModal"  id="clientName${val.client_id}"></a></h3>`;
            buffer += '<div class="meta">';
            buffer += '<div class="organizers">';
            buffer +=
              '<a href="#" class="text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="top"';
            buffer += `title="Organization">${val.organization}</a>`;
            buffer += "</div>";
            buffer += '<div class="categories">';
            buffer +=
              '<a href="#" class="text-decoration-none" data-bs-toggle="tooltip data-bs-placement="top"';
            buffer += `title="Category" id="categoryName${val.category}"> </a>`;
            buffer += "</div>";
            buffer += '<div class="time">';
            buffer += `<span>${date.time(val.time)}</span>`;
            buffer += "</div></div></div></td>";
            buffer += "<td>";
            buffer += `<div class="r-no" id="venueName${val.venue}"></div>`;
            buffer += "</td>";
            buffer += "<td>";
            buffer += '<div class="primary-btn">';
            buffer += `<a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#more_detailsModal"  type="button" onclick="appointmentDetails(${val.appointment_id})">`;
            buffer += "More Details";
            buffer += "</a>";
            buffer += "</div></tr></td>";
          });

          buffer += `           </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>`;

          let myTabContent = document.querySelector("#myTabContent");
          myTabContent.innerHTML = buffer;
        }
      });
  },
  newAppointment: async function (event) {
    var self = this;
    const client_id = event.client_id.value;
    const developer_id = event.developer_id.value;
    const venue = event.venue.value;
    const category = event.category.value;
    const organization = event.organization.value;
    const reason = event.reason.value;
    const comments = event.comments.value;
    const date = event.date.value;
    const time = event.time.value;
    const reminder = event.reminder.value;

    const formData = {
      client_id: client_id,
      developer_id: developer_id,
      venue: venue,
      category: category,
      organization: organization,
      reason: reason,
      comments: comments,
      date: date,
      time: time,
      reminder: reminder,
    };

    let url = "http://localhost:3000/appointment";

    await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message == "unauthenticated") {
          window.location.href = "http://localhost/AppointmentDev/account.html";
        } else if (data.message) {
          const form = document.querySelector("#newAppointment");
          form.reset();
          const appointmentModal = document.getElementById("new_appointment");
          const modal = bootstrap.Modal.getInstance(appointmentModal);
          modal.hide();
          self.display();
        } else {
          console.log("Error in adding new appointment => ", data.error);
        }
      });
  },
};

export default appointment;
