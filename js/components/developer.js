const developer = {
  get_developerImage: async (developer_id, index) => {
    let url = `http://localhost:3000/developer/${developer_id}`;

    await fetch(url, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const image = document.querySelector(
          `#profileOfDeveloper${developer_id + index}`
        );
        const path = `images/developer/${data[0].img_src}`;
        image.src = path;
      });
  },

  select: async () => {
    let url = "http://localhost:3000/developer";

    await fetch(url, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let option = `<option selected disabled value="">  select a developer </option>`;
        data.forEach((val) => {
          option += `<option value="${val.developer_id}">${val.name}</option>`;
        });

        document.querySelector("#developer").innerHTML = option;
      });
  },
  display: function () {
    let buffer = ``;
    buffer += `<div class="container-fluid" id="new_developerTab">
    <h3 class="mt-3 mb-3 fw-bold ">New Developer</h3>
    <div class="container bg-white">
        <form id="add_developerForm"  enctype="multipart/form-data" class="g-3 needs-validation ps-3 py-3"
            novalidate>
            <div class="row mb-4">
                <div class="col-md-4 ">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name="name" required>
                </div>
                <div class="col-md-4">
                    <label for="position" class="form-label">Position</label>
                    <input type="text" class="form-control" id="position" name="position" required>
                </div>
            </div>

            <div class="row mb-4">
                <div class="col-md-4">
                    <label for="profileImage" class="form-label">Profile Image</label>
                    <input type="file" class="form-control" id="profileImage" name="img_src" accept='image/*' required>
                </div>
                <div class="col-md-4">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
            </div>

            <div class="row mb-4">
                <div class="col-md-4">
                    <label for="home_phone" class="form-label">Home Phone</label>
                    <input type="number" class="form-control" id="home_phone" name="home_phone" required />
                </div>
                <div class="col-md-4">
                    <label for="mobile_phone" class="form-label">Mobile Phone</label>
                    <input type="number" class="form-control" id="mobile_phone" name="mobile_phone" required>
                </div>
            </div>

            <div class="col-12">
                <button class="btn btn-primary" type="submit" value="Upload">Add New Developer</button>
            </div>
        </form>
    </div>
</div>`;

    document.querySelector("#myTabContent").innerHTML = buffer;
  },

  addDeveloper: async function (event) {
    const name = event.name.value;
    const position = event.position.value;
    const img_src = document.querySelector("#profileImage").files[0];
    const email = event.email.value;
    const home_phone = event.home_phone.value;
    const mobile_phone = event.mobile_phone.value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("img_src", img_src);
    formData.append("email", email);
    formData.append("home_phone", home_phone);
    formData.append("mobile_phone", mobile_phone);

    let url = "http://localhost:3000/developer";
    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          const form = document.querySelector("#add_developerForm");
          alert(data.success);
          form.reset();
          document.getElementById("manage_developerSidebar").click();
        } else {
          alert("Something went wrong please try again!");
        }
      });
  },

  manageDeveloper: async function () {
    let url = "http://localhost:3000/developer";
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
        let buffer = `<div class="container-fluid">
                    <h3 class="my-3 fw-bold ">Manage Developer</h3>
                    <div class="div-table bg-white py-3 container-fluid">
                        <div class="div-table-row bg-sidebar-header text-white">
                                <div class="div-table-header ms-2 h5 pt-2">Name</div>
                                <div class="div-table-header ms-3 h5 pt-2">Position</div>
                                <div class="div-table-header ms-3 h5 pt-2">Email</div>
                                <div class="div-table-header ms-3 h5 pt-2">Home Number</div>
                                <div class="div-table-header ms-3 h5 pt-2">Mobile Number</div>
                                <div class="div-table-header"></div>
                        </div>`;

        data.forEach((val) => {
          buffer += `<div class="div-table-row">
                          <form onsubmit="event.preventDefault(); updateDeveloper(this, ${val.developer_id})">
                                <div class="div-table-col"><input type="text" class="form-control text-capitalize" name="name" value="${val.name}" required ></div>
                                <div class="div-table-col"><input type="text" class="form-control text-capitalize" name="position" value="${val.position}" required></div>
                                <div class="div-table-col"><input type="email" class="form-control" name="email" value="${val.email}" required></div>
                                <div class="div-table-col"><input type="number" class="form-control" name="home_phone" value="${val.home_phone}" required></div>
                                <div class="div-table-col"><input type="number" class="form-control" name="mobile_phone" value="${val.mobile_phone}" required /></div>
                                  <div class="div-table-col">
                                      <button type="submit" class="btn btn-outline-primary me-2"><i class="bi bi-pencil"></i></button>
                                      <button type="button" class="btn btn-outline-danger" onclick="deleteDeveloper(${val.developer_id})"><i class="bi bi-trash"></i></button>
                              </div>
                          </form>
                        </div>`;
        });
        buffer += "</div></div>";
        document.querySelector("#myTabContent").innerHTML = buffer;
      });
  },
};

export default developer;
