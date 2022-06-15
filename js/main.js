function deleteClient(id) {
  let url = `http://localhost:3000/client/${id}`;
  fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.success) {
        alert(data.success);
        const manage_clientSidebar = document.querySelector(
          "#manage_clientSidebar"
        );

        // click automatically the nav so that it will update the table
        for (let i = 0; i < 2; i++) {
          manage_clientSidebar.click();
        }
      } else {
        alert(data.error);
      }
    });
}

function updateDeveloper(event, id) {
  let formData = {
    name: event.name.value,
    position: event.position.value,
    email: event.email.value,
    home_phone: event.home_phone.value,
    mobile_phone: event.mobile_phone.value,
  };

  let url = `http://localhost:3000/developer/${id}`;
  fetch(url, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    method: "PUT",
    body: JSON.stringify(formData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        alert(data.success);
      } else {
        console.log(data.error);
      }
    });
}
function deleteDeveloper(id) {
  let url = `http://localhost:3000/developer/${id}`;
  fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.success) {
        alert(data.success);
        const manage_developerSidebar = document.querySelector(
          "#manage_developerSidebar"
        );

        // click automatically the nav so that it will update the table
        for (let i = 0; i < 2; i++) {
          manage_developerSidebar.click();
        }
      }
    });
}

function appointmentDetails(id) {
  var developerName = "";
  var clientName = "";

  const url = `http://localhost:3000/appointment/${id}`;
  fetch(url, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // lets destructure the data
      const [
        {
          client_id,
          developer_id,
          venue,
          category,
          organization,
          reason,
          comments,
          date,
          time,
          reminder,
        },
      ] = JSON.parse(JSON.stringify(data));

      const month = format.getMonth(date);
      const day = format.getDay(date);
      const year = new Date().getFullYear();
      const formatDate = [month, day, year].join(" ");
      const formatTime = format.time(time);

      const objectTitle = [
        "Developer",
        "Client",
        "Date of Appointment",
        "Appointment Time",
        "Reason for Appointment",
        "Additional Comments",
      ];

      const object = [
        developer_id,
        client_id,
        formatDate,
        formatTime,
        reason,
        comments,
      ];
      var clientInfo = document.createElement("div");
      var appointmentHistory = document.createElement("div");
      const appointmentInfo = document.createElement("div");
      appointmentInfo.setAttribute("class", "bg-white p-4");
      appointmentInfo.setAttribute("id", "appointment-info");

      for (let i = 0; i < 6; i++) {
        var p = document.createElement("p");
        p.setAttribute("class", "fw-bold mb-0");
        p.innerHTML = objectTitle[i];
        var span = document.createElement("span");
        span.setAttribute("class", "mb-3 mt-1 d-block");

        span.innerHTML = `<input class="form-control ${
          i >= 4 ? "w-75" : "w-25"
        } type="text" value="${object[i]}" id="info${
          object[i]
        }" disabled readonly>`;

        appointmentInfo.appendChild(p);
        appointmentInfo.appendChild(span);
      }

      const developerUrl = `http://localhost:3000/developer/${developer_id}`;
      fetch(developerUrl, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          document
            .querySelector(`#info${developer_id}`)
            .setAttribute("value", `${data[0].name}`);
          developerName = data[0].name;
        });

      const clientUrl = `http://localhost:3000/client/${client_id}`;
      fetch(clientUrl, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          document
            .querySelector(`#info${client_id}`)
            .setAttribute("value", `${data[0].name}`);
          clientName = data[0].name;
          // client-info

          clientInfo.setAttribute("class", "bg-white p-4 d-none");
          clientInfo.setAttribute("id", "client-info");
          const h5 = document.createElement("h5");
          h5.setAttribute("class", "text-info mb-2");
          h5.innerText = "Personal Information";
          const row = document.createElement("div");

          let bufferClient = ``;

          data.forEach((val) => {
            bufferClient += ` <div class="row">
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_name" class="form-label">Name</label>
                      <input type="text" class="form-control w-75 text-capitalize" id="client_name"
                        value="${
                          val.name
                        }" aria-label="client_name" disabled readonly>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_birthDay" class="form-label">Birth Date</label>
                      <input type="text" class="form-control w-75" id="client_birthDay"
                        value="${
                          new Date(val.birthdate).toLocaleString().split(",")[0]
                        }"
                        aria-label="client_birthDay" disabled readonly>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_gender" class="form-label">Gender</label>
                      <input type="text" class="form-control w-75 text-capitalize" id="client_gender"
                        value="${
                          val.gender
                        }" aria-label="client_gender" disabled readonly>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-11">
                    <div class="mb-3">
                      <label for="client_address" class="form-label">Address</label>
                      <input type="text" class="form-control  text-capitalize" id="client_address"
                        value="${
                          val.address
                        }" aria-label="client_address" disabled readonly>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_province" class="form-label">Province</label>
                      <input type="text" class="form-control w-75 text-capitalize" id="client_province"
                        value="${
                          val.province
                        }" aria-label="client_province" disabled readonly>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_city" class="form-label">City</label>
                      <input type="text" class="form-control w-75"  value="${
                        val.city
                      }"
                      id="client_city"
                        aria-label="client_city" disabled readonly>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_zipCode" class="form-label">Zip Code</label>
                      <input type="text" class="form-control w-75 text-capitalize" id="client_zipCode"
                        value="${
                          client.zip_code
                        }" aria-label="client_zipCode" disabled readonly>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_email" class="form-label">Email</label>
                      <input type="email" class="form-control w-75 text-capitalize" id="client_email"
                        value="${
                          val.email
                        }" aria-label="client_email" disabled readonly>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_homePhone" class="form-label">Home Phone</label>
                      <input type="text" class="form-control w-75" id="client_homePhone"
                        value="${
                          val.home_phone
                        }" aria-label="client_homePhone" disabled readonly>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_mobilePhone" class="form-label">Mobile Phone</label>
                      <input type="text" class="form-control w-75 text-capitalize" id="client_mobilePhone"
                        value="${
                          val.mobile_phone
                        }" aria-label="client_mobilePhone" disabled readonly>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_occupation" class="form-label">Occupation</label>
                      <input type="text" class="form-control w-75 text-capitalize" id="client_occupation"
                        value="${
                          val.occupation
                        }" aria-label="client_occupation" disabled readonly>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_currentEmployment" class="form-label">Current Employment</label>
                      <input type="text" class="form-control w-75" id="client_currentEmployment"
                        value="${
                          val.current_employment
                        }" aria-label="client_currentEmployment" disabled
                        readonly>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-4">
                      <label for="client_referredBy" class="form-label">Referred By</label>
                      <input type="text" class="form-control w-75 text-capitalize" id="client_referredBy"
                        value="${
                          val.referred_by
                        }" aria-label="client_referredBy" disabled readonly>
                    </div>
                  </div>
                </div>`;
          });

          row.innerHTML = bufferClient;

          clientInfo.appendChild(h5);
          clientInfo.appendChild(row);
        });

      const historyUrl = `http://localhost:3000/appointment/history/${client_id}`;
      fetch(historyUrl, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          appointmentHistory.setAttribute(
            "class",
            "bg-white d-none p-4 table-responsive"
          );
          appointmentHistory.setAttribute("id", "appointment-history");

          const table = document.createElement("table");
          table.setAttribute("class", "table table-hover table-borderless");
          appointmentHistory.appendChild(table);
          const thead = document.createElement("thead");
          const tr = document.createElement("tr");
          tr.setAttribute("class", "bg-sidebar-header text-white");
          const theadData = [
            "Date of Appointment",
            "Appointment Time",
            "Developer",
            "Client",
            "Reason for Appointment",
            "Additional Comments",
          ];

          for (let i = 0; i < 6; i++) {
            const th = document.createElement("th");
            th.setAttribute("scope", "col");
            th.innerText = theadData[i];
            if (i == 5) {
              th.setAttribute("colspan", 5);
            }
            tr.appendChild(th);
          }
          thead.appendChild(tr);
          table.appendChild(thead);
          const tbody = document.createElement("tbody");
          let bufferHistory = ``;
          data.forEach((val) => {
            bufferHistory += `<tr>
              <td>${new Date(val.date).toLocaleString().split(",")[0]}</td>
              <td>${val.time}</td>
              <td>${developerName}</td>
              <td>${clientName}</td>
              <td>${val.reason}</td>
              <td>${val.comments}</td>
            </tr>`;
          });
          tbody.innerHTML = bufferHistory;
          table.appendChild(tbody);
        });

      const more_detailsData = document.querySelector("#more_detailsData");

      more_detailsData.innerHTML = "";

      more_detailsData.appendChild(appointmentInfo);
      more_detailsData.appendChild(clientInfo);
      more_detailsData.appendChild(appointmentHistory);
    });
}

const format = {
  getMonth: (date) => {
    const formatDate = new Date(date);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = formatDate.getMonth();
    const month = months[monthIndex];
    return month;
  },

  getDay: (date) => {
    const formatDate = new Date(date);
    const day = formatDate.getDate();
    return day;
  },

  today: () => {
    // todays date
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today;
  },

  time: (time) => {
    // format time
    const formatTime = time.slice(0, -3);
    var suffix = time >= 12 ? "PM" : "AM";
    var hours = formatTime + " " + suffix;
    return hours;
  },
};
