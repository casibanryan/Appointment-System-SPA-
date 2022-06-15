const handleUser = {
  loginPage: function () {
    let buffer = ` <div class="container-fluid">
                <div class="event-schedule-area-two bg-color pad100 mt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row justify-content-center">
                                    <div class="col-md-8">
                                        <div class="card-group mb-0">
                                            <div class="card p-4">
                                                <div class="card-body">
                                                    <form id="loginForm"  class="needs-validation"
                                                        novalidate>
                                                        <h1>Login</h1>
                                                        <p class="text-muted">Sign In to your account</p>
                                                                <div class="input-group mb-3">
                                                                    <span class="input-group-text" id="username"><i
                                                                            class="fa fa-user"></i></span>
                                                                    <input type="text" class="form-control"
                                                                        name="username"
                                                                        placeholder="Enter name or email"
                                                                        aria-label="Username"
                                                                        aria-describedby="username" required />
                                                                </div>
                                                                <div class="input-group mb-4">
                                                                    <span class="input-group-text" id="password"><i
                                                                            class="fa fa-lock"></i></span>
                                                                    <input type="password" class="form-control"
                                                                        name="password" placeholder="Password"
                                                                        aria-label="Password"
                                                                        aria-describedby="password" required>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-6">
                                                                        <button type="submit"
                                                                            class="btn btn-primary px-4">Login</button>
                                                                    </div>
                                                                </div>
                                                    </form>

                                                </div>
                                            </div>
                                            <div class="card text-white bg-primary py-5 d-md-down-none"
                                                style="width:44%">
                                                <div class="card-body text-center">
                                                    <div>
                                                        <h2>Sign up</h2>
                                                        <p>Sign-up for free to set an appointment to the best developer
                                                            in central visayas.</p>
                                                        <a type="button" class="btn btn-primary active mt-3" id="registerTab1">Register Now!</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

    const content = document.querySelector("#main-container");
    content.innerHTML = buffer;
  },

  registerPage: function () {
    let buffer = ` <div class="container-fluid">
                <h3 class="mt-3 mb-5 fw-bold ">Register</h3>
                <div class="container bg-white">
                    <form id="registerForm" class="row g-3 needs-validation pb-3" novalidate>
                        <div class="col-md-4 mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter your name!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="birthday" class="form-label">Birth Date</label>
                            <input type="date" class="form-control" id="birthday" name="birthdate" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter your birthdate!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="gender" class="form-label">Gender</label>
                            <select class="form-select" id="gender" name="gender" required>
                                <option selected disabled value="">Choose...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Other's</option>
                            </select>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please select a gender!
                            </div>
                        </div>
    
                        <div class="col-md-6 mb-3">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control" id="address" name="address" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter your address!
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" name="password" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter your password!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="province" class="form-label">Province</label>
                            <input type="text" class="form-control" id="province" name="province" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter your province!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="city" class="form-label">City</label>
                            <input type="text" class="form-control" id="city" name="city" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter your city!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="zip_code" class="form-label">Zip Code</label>
                            <input type="number" class="form-control" id="zip_code" name="zip_code" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter your zip code!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter a valid email!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="home_phone" class="form-label">Home Phone</label>
                            <input type="number" class="form-control" id="home_phone" name="home_phone" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter your home number!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="mobile_phone" class="form-label">Mobile Phone</label>
                            <input type="number" class="form-control" id="mobile_phone" name="mobile_phone" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter your mobile number!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="occupation" class="form-label">Occupation</label>
                            <input type="text" class="form-control" id="occupation" name="occupation">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="current_employment" class="form-label">Current Employment</label>
                            <select class="form-select" id="current_employment" name="current_employment" required>
                                <option selected disabled value="">Choose...</option>
                                <option value="Full-Time">Full Time</option>
                                <option value="Part-Time">Part Time</option>
                                <option value="Unemployed">Unemployed</option>
                                <option value="Retired">Retired</option>
                                <option value="Disabled">Disabled</option>
                            </select>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please select a gender!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="occupation" class="form-label">Referred By</label>
                            <input type="text" class="form-control" id="referred_by" name="referred_by">
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>`;
    const content = document.querySelector("#main-container");
    content.innerHTML = buffer;
  },

  logout: function () {
    const url = "http://localhost:3000/logout";
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        window.location = "account.html";
      });
  },
};

export default handleUser;
