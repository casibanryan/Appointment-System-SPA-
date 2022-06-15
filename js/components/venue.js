const venue = {
  getLocation: (venue_id) => {
    let url = `http://localhost:3000/venue/${venue_id}`;

    fetch(url, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.message == "unauthenticated") {
          window.localhost = "account.html";
        }
        const venueData = document.querySelector(`#venueName${venue_id}`);
        const location = data[0].location;
        venueData.innerHTML = location;
      });
  },

  display: () => {
    let url = "http://localhost:3000/venue";
    fetch(url, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.message == "unauthenticated") {
          window.localhost = "account.html";
        }
        let option = `<option selected disabled value="">select a venue </option>`;
        data.forEach((val) => {
          option += `<option value="${val.venue_id}"> ${val.location} </option>`;
        });

        document.querySelector("#venue").innerHTML = option;
      });
  },
};

export default venue;
