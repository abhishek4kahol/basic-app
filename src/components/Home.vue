<template>
  <section>
    <div>
      <nav class="navbar is-transparent is-warning is-fixed-top has-shadow">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
              <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
      <span></span>
      <span></span>
      <span></span>
    </div>
        </div>
        
        <div id="navbarExampleTransparentExample" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    <span class="icon user-icon is-medium">
                      <i class="far fa-user"></i>
                    </span>
                    <span></span>
                    <small>
                    Profile
                    </small>
                  </a>
                  <div class="navbar-dropdown ">
                    <a class="navbar-item " href="#">
                      Change Password
                    </a>
                    <a class="navbar-item " href="#">
                      Profile
                    </a>
                    <a class="navbar-item " href="#">
                      Setting
                    </a>
                    <hr class="navbar-divider">
                    <div class="navbar-item">
                      <div class="button is-fullwidth is-small is-outlined is-danger">
                        Sign Out
                      </div>
                    </div>
                  </div>
             </div>
           </div>
          </div>
       </div>
        </div>
     </nav>
    </div>   
    <div>
      <section class="hero bg-img is-medium is-primary">
        <!-- <div class="hero-head">
          <div class="container">
            <h1 class="title is-1">
              Welcome to Trip-Stamp
            </h1>
          </div>
         </div> -->
        <div class="hero-body">
         <div class="container">
            <h1 class="title is-1 set-margin">
              Welcome to Trip-Stamp
            </h1>
           <div class="field is-horizontal">
            <div class="field-label is-normal">
              <h1 class="title">
                Destination
              </h1>
            </div>
          <div class="field-body">
          <div class="field">
           <p class="control has-icons-left has-icons-right">
            <input class="input is-rounded is-centered is-medium is-transparent set-width" type="text" placeholder="search destination to vist">
              <span class="icon is-small is-left">
                <i class="fa fa-search"></i>
             </span>
           </p>
          </div>
         </div>
        </div>
        </div>
      </div>
    </section>
  </div>
  <div>
    <section class="hero is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Explore Different LandForms
        </h1>
        <div class="columns is-multiline is-mobile is-centered">
        <!-- <a class="button icon is-small is-left has-text-warning is-outlined" style="display:block; margin-right:auto; height:229px; width: 41px; background-color: #F1ECE7; border-radius: 25px;">
          <i class="fas fa-2x	fa-arrow-left has-text-warning has-shadow is-bold" style="padding-top: 92px;"></i>
        </a> -->
          <div class="column " style="min-width: 150px; max-width: 228px;">
            <div class="card set-thumbnail" style="min-width: 150px; max-width: 228px;" v-on:click="getPlaceInfo()">
              <div class="card-image">
                <figure class="image tooltip">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
                  <span class="tooltiptext">Tooltip text</span>
                </figure>
              </div>
            </div>
          </div>
          <div class="column" style="min-width: 150px; max-width: 228px;">
            <div class="card" style="min-width: 150px; max-width: 228px;">
              <div class="card-image">
                <figure class="image tooltip">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
                  <span class="tooltiptext">Tooltip text</span>
                </figure>
              </div>
            </div>
          </div>
          <div class="column" style="min-width: 150px; max-width: 228px;">
            <div class="card" style="min-width: 150px; max-width: 228px;">
              <div class="card-image">
                <figure class="image tooltip">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
                  <span class="tooltiptext">Tooltip text</span>
                </figure>
              </div>
            </div>
          </div>
          <div class="column" style="min-width: 150px; max-width: 228px;">
            <div class="card" style="min-width: 150px; max-width: 228px;">
              <div class="card-image">
                <figure class="image tooltip">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
                  <span class="tooltiptext">Tooltip text</span>
                </figure>
              </div>
            </div>
          </div>
          <div class="column" style="min-width: 150px; max-width: 228px;">
            <div class="card" style="min-width: 150px; max-width: 228px;background-color: #00D1B2;">
              <div class="card-image">
                <figure class="image tooltip is-centered" style="height: 206px;">
                  <!-- <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"> -->
                  <i class="fas fa-2x	fa-arrow-right" style="color:#ffdd57;margin-top: 85px;margin-left: 81px;"></i>
                  <span class="tooltiptext">Explore more</span>
                </figure>
              </div>
            </div>
          </div>
          <!-- <a class="button icon is-small is-left has-text-warning is-outlined tooltip" v-on:click="getInfo()" style="display:block; margin-left:auto;height:229px; width: 41px; background-color: #F1ECE7; border-radius: 25px;">
            <i class="fas fa-2x	fa-arrow-right" style="padding-top: 92px;"></i>
              <span class="tooltiptext">Explore more</span>
          </a> -->
        </div>
    </div>
  </div>
  </section>
  <section class="hero is-info">
    <div class="hero-head">
      <div class="container">
        <br>
        <h1 class="title">
        <span class="icon is-medium is-info">
          <i class="fas fa-map-marked"></i>
        </span>
          Create Your Stamp In
        </h1>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div>
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">HoT SPOT</p>
                <p class="title">1000+</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                 <p class="heading">Union</p>
                 <p class="title">7</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Other</p>
                <p class="title">29</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">new</p>
                <p class="title">29</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <hr>
  <section class="hero is-warning is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
         Explore Towns
        </h1>
        <h2 class="subtitle">
          Primary subtitle
        </h2>
      </div>
    </div>
  </section>
  <hr>
  <section class="hero is-danger is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
         Explore Places
        </h1>
        <h2 class="subtitle">
          Primary subtitle
        </h2>
      </div>
    </div>
  </section>
  <hr>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
         Gang-Up Trip
        </h1>
        <h2 class="subtitle">
          Primary subtitle
        </h2>
      </div>
    </div>
  </section>
  <hr>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
         Tourist Spots
        </h1>
        <h2 class="subtitle">
          Primary subtitle
        </h2>
      </div>
    </div>
  </section>
  <hr>
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
         Road Trip
        </h1>
        <h2 class="subtitle">
          Primary subtitle
        </h2>
      </div>
    </div>
  </section>
  </div>
  <hr>
  <div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Trip-Stamp</strong> by <a href="https://github.com/abhishek4kahol">Abhishek</a>.
        </p>
      </div>
  </footer>
  </div>
  </section>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      message: "Hello",
      showNav: false
    };
  },
  methods: {
    getInfo: function() {
      this.$router.push({
        name: "CategoryPage",
        query: {
          data: "this is the Category Page"
        }
      });
    },
    getPlaceInfo: function() {
      this.$router.push({
        name: "PlacePage"
      });       
    }
  }
};
</script>
<style>
.bg-img {
  background-image: url("https://static.tacdn.com/img2/branding/homepage/home-tab1-hero-1367x520-beach-prog.jpg");
  background-position: 50% bottom;
  background-repeat: no-repeat;
  background-color: #999;
}
.set-width {
  width: 70% !important;
}
.set-margin {
  font-family: "Gaegu", cursive;
}
.set-thumbnail {
  padding: 1px;
}
.set-thumbnail:hover {
  cursor: pointer;
  opacity: 0.9;
}
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted #00dcb5;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #00dcb5;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 102%;
  left: 50%;
  margin-left: -60px;
}
.tooltip .tooltiptext::after {
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #00dcb5 transparent transparent transparent;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
