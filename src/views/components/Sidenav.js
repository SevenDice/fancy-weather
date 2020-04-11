let Sidenav = {
  render: async () => {
    let view = /*html*/ `
        <nav role="navigation">
          <div class="menuToggle">
            <input type="checkbox">
            <span></span>
            <span></span>
            <span></span>
            <!-- change to colored -->
            <ul class="menu green">
              <a href="/#/" class="header-item active">Main Page</a>
              <a href="/#/action_set-a" class="header-item">Action (set A)</a>
              <a href="/#/action_set-b" class="header-item">Action (set B)</a>
              <a href="/#/animal_set-a" class="header-item">Animal (set A)</a>
              <a href="/#/animal_set-b" class="header-item">Animal (set B)</a>
              <a href="/#/clothes" class="header-item">Clothes</a>
              <a href="/#/emotions" class="header-item">Emotions</a>
              <a href="/#/fruits" class="header-item">Fruits</a>
              <a href="/#/vegetables" class="header-item">Vegetables</a>
            </ul>
          </div>
        </nav>
        <div class="switch-container">
          <label for="" class="switch">
            <input type="checkbox" class="switch-input">
            <span class="switch-label" data-on="Train" data-off="Play"></span>
            <span class="switch-handle"></span>
          </label>
        </div>
        `
    return view
  },
  after_render: async () => { }

}

export default Sidenav;