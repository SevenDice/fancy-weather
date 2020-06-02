const Register = {

  render: async () => {
    const view =  /* html */`
          <!--Section: Register Form-->
          <section class="mt-4 mb-5 register-form">

          <form class="needs-validation" novalidate autocomplete="off">

            <div class="form-row">
              <div class="col">
                <div class="md-form md-outline mt-0">
                  <input type="text" name="register-first-name" id="register-first-name" class="form-control">
                  <label for="register-first-name">First name</label>
                  <div class="invalid-feedback">
                    First name should contain from 4 to 50 characters
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="md-form md-outline mt-0">
                  <input type="text" name="register-last-name" id="register-last-name" class="form-control">
                  <label for="register-last-name">Last name</label>
                  <div class="invalid-feedback">
                    Last name should contain from 4 to 50 characters
                  </div>
                </div>
              </div>
            </div>

            <div class="md-form md-outline mt-0">
              <input type="email" name="register-email" id="register-email" class="form-control">
              <label data-error="wrong" data-success="right" for="register-email">Your email</label>
            </div>
            <div class="md-form md-outline mt-0 mb-2">
              <input type="password" name="register-password" id="register-password" class="form-control">
              <label data-error="wrong" data-success="right" for="register-password">Your password</label>
              <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted">
                At least 6 characters
              </small>
            </div>
            <div class="md-form md-outline mt-0">
              <input type="password" name="register-password-confirm" id="register-password-confirm" class="form-control">
              <label data-error="wrong" data-success="right" for="register-password-confirm">Confirm password</label>
              <div class="invalid-feedback">
                Password confirmation is invalid
              </div>
            </div>

            <div class="text-center pb-2">

            </div>

            <div class="text-center mb-2">

              <button type="submit" class="btn btn-primary mb-4">Sign Up</button>

            </form>

          </div>

          </section>
          <!--Section: Register Form-->
      `
    return view
  }
  , after_render: async () => {
  }
}
export default Register;