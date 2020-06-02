const Login = {

  render: async () => {
    const view =  /* html */`
          <!--Section: Login Form-->
        <section class="mb-5 login-form">

        <form class="needs-validation" novalidate autocomplete="off">

          <div class="md-form md-outline">
            <input type="email" name="login-email" id="login-email" class="form-control">
            <label data-error="wrong" data-success="right" for="login-email">Your email</label>
          </div>
          <div class="md-form md-outline">
            <input type="password" name="login-password" id="login-password" class="form-control">
            <label data-error="wrong" data-success="right" for="login-password">Your password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center mb-2">

          </div>

          <div class="text-center pb-2">

            <button type="submit" class="btn btn-primary mb-4">Sign in</button>

            <p>Not a member? <a href="https://mdbootstrap.com/docs/jquery/admin/auth/register/">Register</a></p>

          </div>

        </form>

        </section>
        <!--Section: Login Form-->
      `
    return view
  }
  , after_render: async () => {

    // $(document).ready(function() {

    //   $('.login-form form').on('submit', function(event) {
    //     event.preventDefault();
    
    //     if (document.querySelector('.login-form form').checkValidity()) {
    //       const loginData = $(this).serializeArray();
    //       if (loginData[0].value === localStorage.mdbAdminUserEmail && loginData[1].value === localStorage.mdbAdminUserPass) {
    //         localStorage.setItem("mdbAdminUserLogged", true);
    //         location.reload();
    //       } else {
    //         $('#error-modal .modal-body').html('Your email or password is incorrect.');
    //         $('#error-modal').modal('toggle');
    //       }
    //     } else {
    //       $('#error-modal .modal-body').html('Please provide correct login data.');
    //       $('#error-modal').modal('toggle');
    //     }
    
    //   })
    
    //   $('.logout').on('click', () => {
    //     localStorage.setItem("mdbAdminUserLogged", false);
    //     location.reload();
    //   })
    
    //   if (localStorage.mdbAdminUserLogged === "true") {
    //     $('.login-form').hide();
    //     $('.logout-form').show();
    //     $('.logged-user-message').html(`You are logged in as <strong>${localStorage.mdbAdminUserFirstName} ${localStorage.mdbAdminUserLastName}</strong>!`);
    //   }
    
    // })
  }
}
export default Login;