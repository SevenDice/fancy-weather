const Footer = {
  render: async () => {

    const view =  /* html */`
      <!-- Footer Links -->
        <div class="container">

        <div class="row d-flex justify-content-center">

          <!--Grid column-->
          <div class="col d-flex justify-content-center my-3 pt-1">

            <a href="https://github.com/sevendice" class="fb-ic">
              <i class="fab fa-github fa-lg white-text mx-3 mx-md-4 fa-2x"></i>
            </a>
            <a class="tw-ic">
              <i class="fab fa-discord fa-lg white-text mx-3 mx-md-4 fa-2x"> </i>
            </a>
            <a class="gplus-ic">
              <i class="fab fa-youtube fa-lg white-text mx-3 mx-md-4 fa-2x"> </i>
            </a>
          </div>
          <!--Grid column-->

        </div>
        <!--Grid row-->

      </div>
      <!-- Footer Links -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://github.com/sevendice">English Puzzle</a>
      </div>
      <!-- Copyright -->
      `
    return view
  },
  after_render: async () => {

  },
};

export default Footer;
