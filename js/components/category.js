const category = {
  get_categoryName: async (category_id) => {
    let url = `http://localhost:3000/category/${category_id}`;

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

        const categoryData = document.querySelector(
          `#categoryName${category_id}`
        );
        const categoryName = data[0].category_name;
        categoryData.innerHTML = categoryName;
      });
  },
  display: () => {
    let url = "http://localhost:3000/category";
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
        let option = `<option selected disabled value="">select a category </option>`;
        data.forEach((val) => {
          option += `<option value="${val.category_id}"> ${val.category_name} </option>`;
        });

        document.querySelector("#category").innerHTML = option;
      });
  },
};

export default category;
