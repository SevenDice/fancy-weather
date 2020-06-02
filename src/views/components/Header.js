const Header = {
  render: async () => {

    const view =  /* html */`
      <nav class="navbar navbar-expand-md navbar-light">

      <a class="navbar-brand" href="#!">
        <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="30" alt="mdb logo">
      </a>
    
      <!-- Collapse button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
        aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <!-- Breadcrumbs -->
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a class="waves-effect" href="#!">Home</a></li>
        <li class="breadcrumb-item"><a class="waves-effect" href="#!">Templates</a></li>
        <li class="breadcrumb-item active"><a class="waves-effect" href="#!">E-commerce</a></li>
      </ol>
      <!-- Breadcrumbs -->
    
      <!-- Links -->
      <div class="collapse navbar-collapse" id="basicExampleNav1">
    
        <!-- Right -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#!" class="nav-link navbar-link-2 waves-effect">
              <span class="badge badge-pill red">1</span>
              <i class="fas fa-shopping-cart pl-0"></i>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="true">
              <i class="united kingdom flag m-0"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#!">Action</a>
              <a class="dropdown-item" href="#!">Another action</a>
              <a class="dropdown-item" href="#!">Something else here</a>
            </div>
          </li>
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
