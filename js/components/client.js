const client = {
  get_clientName: async (client_id) => {
    let url = `http://localhost:3000/client/${client_id}`;

    await fetch(url, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.message == "unauthenticated") {
          window.localhost = "account.html";
        }
        const clientData = document.querySelector(`#clientName${client_id}`);
        const clientName = data[0].name;
        clientData.innerHTML = clientName;
      });
  },

  select: async function () {
    let url = "http://localhost:3000/client";
    await fetch(url, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.message == "unauthenticated") {
          window.localhost = "account.html";
        }
        let option = `<option selected disabled value="">select a client </option>`;
        data.forEach((val) => {
          option += `<option value="${val.client_id}"> ${val.name} </option>`;
        });

        document.querySelector("#client").innerHTML = option;
      });
  },

  display: async function () {
    let url = "http://localhost:3000/client";
    await fetch(url, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.message == "unauthenticated") {
          window.localhost = "account.html";
        }
        let buffer = `<div class="container-fluid" id="manage_clientTab">
                <h3 class="my-3 fw-bold ">Manage Client</h3>
                <div class="container bg-white pt-3">
                    <div class="table-responsive">
                        <table class="table table-borderless table-hover">
                            <thead>
                                <tr class="bg-sidebar-header text-white">
                                    <th scope="col">Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>`;
        data.forEach((val) => {
          buffer += `<tr>
                        <form class="row g-3 needs-validation" novalidate>
                            <td>
                                <input type="hidden" class="form-control" name="client_id" value="">
                                <input type="text" class="form-control text-capitalize" name="name" value="${val.name}" required>
                            </td>
                            <td>
                                <input type="text" class="form-control text-capitalize" name="gender" value="${val.gender}" required>
                            </td>
                            <td>
                                <input type="email" class="form-control" name="email" value="${val.email}" required>
                            </td>
                            <td>
                                <input type="number" class="form-control" name="mobile_phone" value="${val.mobile_phone}" required>
                            </td>
                            <td>
                                <input type="text" class="form-control" name="address" value="${val.address}" required>
                            </td>
                            <td class="float-">
                                <button type="submit" class="btn btn-outline-primary"><i class="bi bi-pencil"></i></button>
                        </form>
                        </td>
                        <td>
                                <button type="button" onclick="deleteClient(${val.client_id})" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
                                
                        </td>
                    </tr>`;
        });
        buffer += `   </tbody>
              </table>
          </div>
      </div>
  </div>`;

        document.querySelector("#myTabContent").innerHTML = buffer;
      });
  },
};

export default client;
