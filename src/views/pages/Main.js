const Main = {
  render: async () => {
    const view = /* html */ `
        <div class="row">
          <div class="col-12 col-md-8 ">.col-12 .col-md-8</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
        <div class="row">
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
        <div class="row">
          <div class="col-6">.col-6</div>
          <div class="col-6">.col-6</div>
        </div>
      `;
    return view;
  },
  after_render: async () => {
   
  },
};

export default Main;
