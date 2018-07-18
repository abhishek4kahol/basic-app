<template>
  <section>
    <div>
      <nav class="navbar is-transparent is-warning is-fixed-top has-shadow">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link " href="#blog/">
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
     </nav>
    </div>   
    <!-- <div>
      <section class="hero bg-img1 is-medium is-primary">
        <div class="hero-body">
         <div class="container">
            <h1 class="title is-1 set-margin">
                {{CategoryName}}
            </h1>
              <h1 class="title">
                Get out and Explore the fields and details about the page
              </h1>
        </div>
      </div>
    </section>
  </div> -->
  <div>
      <section class="hero is-primary is-medium">
          <div class="hero-game-bg" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))">
              <!-- , url(&quot;https://mythril.nyc3.cdn.digitaloceanspaces.com/games/banners/4.jpeg&quot;); -->
          <div class="hero-body">
              <div class="container cover-title is-clearfix">
                    <span class="is-pulled-left">
                        <h1 class="title">
                            A Place landing page
                        </h1> 
                        <h2 class="subtitle">
                            name of the state: <em>
                            <a href="/games?developer=3" class="dotted-border">Name</a></em>
                        </h2>
                    </span> 
                </div>
            </div>
        </div>
    </section>
    <section class="tab-container">
        <div class="container cover-nav">
            <div class="tabs is-toggle">
                <ul>
                    <li class="router-link-exact-active is-active">
                        <a href="/games/4/">Summary</a>
                    </li> 
                    <li class="">
                        <a href="/games/4/reviews">Reviews</a>
                    </li>
                    <li class="">
                        <a href="/games/4/recommendations">Recommendations</a>
                    </li> 
                    <li class="">
                        <a href="/games/4/releases">Releases</a>
                    </li>
                    <li class="">
                        <a href="/games/4/stats">Stats</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  </div>
  <div>
    <section class="section">
    <div class="container">
      <h1 class="title">Section</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Etiam egestas wisi a erat. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Aenean placerat. Suspendisse nisl. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Aenean id metus id velit ullamcorper pulvinar. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.</p>

<p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Aliquam id dolor. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Curabitur sagittis hendrerit ante. Fusce wisi. Integer tempor. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Vivamus luctus egestas leo. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Aenean fermentum risus id tortor. Nullam at arcu a est sollicitudin euismod. Nullam sit amet magna in magna gravida vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Etiam egestas wisi a erat. Integer tempor. Nunc auctor. Maecenas aliquet accumsan leo. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Nullam rhoncus aliquam metus.</p>
    </div>
  </section>
  </div>
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
  name: "PlacePage",
  data() {
    return {
      CategoryName: ""
    };
  },
  mounted: function() {
    this.showPage(this.$route.query.data);
  },
  methods: {
    showPage: function(data) {
      this.CategoryName = data;
    }
  }
};
</script>
<style>
.bg-img1 {
  background-image: url("../assets/images/ivy.jpg");
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
.tab-container {
    box-shadow: inset 0px 0px 0px 1px #dbdbdb;
}
</style>
