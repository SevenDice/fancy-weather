const Header = {
  render: async () => {

    const view =  /* html */`
      <nav class="navbar navbar-expand-md navbar-light">

      <a class="navbar-brand" href="#!">
        <img src="../../assets/img/logo.png" height="30" alt="mdb logo">
      </a>
    
      <!-- Collapse button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
        aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="basicExampleNav1">
    
        <!-- Right -->
        <ul class="navbar-nav ml-auto">
        
          <li class="nav-item">
            <a href="#!" class="nav-link waves-effect">
              Shop
            </a>
          </li>
          <li class="nav-item">
            <a href="#!" class="nav-link waves-effect">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a href="#!" class="nav-link waves-effect">
              Sign in
            </a>
          </li>
          <li class="nav-item pl-2 mb-2 mb-md-0">
            <a href="#!" type="button"
              class="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</a>
          </li>
        </ul>
    
      </div>
      <!-- Links -->  
      `
    return view
  },
  after_render: async () => {

  },
};

export default Header;
