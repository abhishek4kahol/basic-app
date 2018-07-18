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
    <div>
      <section class="hero is-primary is-medium">
        <div class="hero-game-bg" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))">
          <div class="hero-body">
            <div class="container is-clearfix">
              <span class="is-pulled-left">
                <h1 class="title">Gallery</h1> 
                  <h2 class="subtitle">
                    name of the state: 
                    <em>
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
              <a href="/games/4/">Photos</a>
                </li> 
                  <li class="">
                    <a href="/games/4/reviews">Reviews</a>
                  </li>
                  <li class="">
                    <a href="/games/4/recommendations">Rating</a>
                  </li> 
                  <li class="">
                    <a href="/games/4/releases">Location</a>
                  </li>
                  <li class="">
                    <a href="/games/4/stats">Blog</a>
                  </li>
                </ul>
              </div>
          </div>
      </section>
    </div>
    <section class="section">
      <div class="container is-clearfix">
        <div class="cover-sidebar is-pulled-right is-hidden-touch">
          <div class="content">
            <h4 class="heading">Recommendations</h4> 
              <div>
                <h4>Popular</h4> 
                <div class="field has-addons is-marginless">
                  <p class="control">
                    <figure class="image is-48x48" style="    margin-top: -9px; margin-left: 0px;">
                      <img src="https://bulma.io/images/placeholders/128x128.png" style="border-radius:12px; margin-top:0px;">
                    </figure>
                  </p>
                  <p class="control">
                    <a class="heading" style="margin-left: -33px;width: 191px;border: 2px solid #dbdbdb;margin-top: -4px;border-radius: 5px;border-left: 0px;">
                      <h4 style="padding-left: 10px;">Name of the place</h4>
                      <h5 style="padding-left: 10px; line-height:0.1;font-size: 10px;">Location of the place.</h5>
                    </a>
                  </p>
                </div> 
                <div class="field has-addons is-marginless">
                <p class="control">
                  <figure class="image is-48x48" style="    margin-top: -9px; margin-left: 0px;">
                    <img src="https://bulma.io/images/placeholders/128x128.png" style="border-radius:12px; margin-top:0px;">
                  </figure>
                </p>
                <p class="control">
                  <a class="heading" style="margin-left: -33px;width: 191px;border: 2px solid #dbdbdb;margin-top: -4px;border-radius: 5px;border-left: 0px;">
                    <h4 style="padding-left: 10px;">Name of the place</h4>
                    <h5 style="padding-left: 10px; line-height:0.1;font-size: 10px;">Location of the place.</h5>
                  </a>
                </p>
                </div> 
                <div class="field has-addons is-marginless">
                  <p class="control">
                    <figure class="image is-48x48" style="    margin-top: -9px; margin-left: 0px;">
                      <img src="https://bulma.io/images/placeholders/128x128.png" style="border-radius:12px; margin-top:0px;">
                    </figure>
                  </p>
                  <p class="control">
                    <a class="heading" style="margin-left: -33px;width: 191px;border: 2px solid #dbdbdb;margin-top: -4px;border-radius: 5px;border-left: 0px;">
                      <h4 style="padding-left: 10px;">Name of the place</h4>
                      <h5 style="padding-left: 10px; line-height:0.1;font-size: 10px;">Location of the place.</h5>
                    </a>
                  </p>
                </div> 
                <div class="field has-addons is-marginless">
                  <p class="control">
                    <figure class="image is-48x48" style="    margin-top: -9px; margin-left: 0px;">
                      <img src="https://bulma.io/images/placeholders/128x128.png" style="border-radius:12px; margin-top:0px;">
                    </figure>
                  </p>
                  <p class="control">
                    <a class="heading" style="margin-left: -33px;width: 191px;border: 2px solid #dbdbdb;margin-top: -4px;border-radius: 5px;border-left: 0px;">
                      <h4 style="padding-left: 10px;">Name of the place</h4>
                      <h5 style="padding-left: 10px; line-height:0.1;font-size: 10px;">Location of the place.</h5>
                    </a>
                  </p>
                </div>
                <div class="field has-addons is-marginless">
                <p class="control">
                  <figure class="image is-48x48" style="    margin-top: -9px; margin-left: 0px;">
                    <img src="https://bulma.io/images/placeholders/128x128.png" style="border-radius:12px; margin-top:0px;">
                  </figure>
                </p>
                <p class="control">
                  <a class="heading" style="margin-left: -33px;width: 191px;border: 2px solid #dbdbdb;margin-top: -4px;border-radius: 5px;border-left: 0px;">
                    <h4 style="padding-left: 10px;">Name of the place</h4>
                    <h5 style="padding-left: 10px; line-height:0.1;font-size: 10px;">Location of the place.</h5>
                  </a>
                </p>
              </div> 
              <div class="field has-addons is-marginless">
                <p class="control">
                  <figure class="image is-48x48" style="    margin-top: -9px; margin-left: 0px;">
                    <img src="https://bulma.io/images/placeholders/128x128.png" style="border-radius:12px; margin-top:0px;">
                  </figure>
                </p>
                <p class="control">
                  <a class="heading" style="margin-left: -33px;width: 191px;border: 2px solid #dbdbdb;margin-top: -4px;border-radius: 5px;border-left: 0px;">
                    <h4 style="padding-left: 10px;">Name of the place</h4>
                    <h5 style="padding-left: 10px; line-height:0.1;font-size: 10px;">Location of the place.</h5>
                  </a>
                </p>
              </div> 
            <div class="field has-addons is-marginless">
            <p class="control">
              <figure class="image is-48x48" style="    margin-top: -9px; margin-left: 0px;">
                <img src="https://bulma.io/images/placeholders/128x128.png" style="border-radius:12px; margin-top:0px;">
              </figure>
            </p>
            <p class="control">
              <a class="heading" style="margin-left: -33px;width: 191px;border: 2px solid #dbdbdb;margin-top: -4px;border-radius: 5px;border-left: 0px;">
                <h4 style="padding-left: 10px;">Name of the place</h4>
                <h5 style="padding-left: 10px; line-height:0.1;font-size: 10px;">Location of the place.</h5>
              </a>
            </p>
          </div>  
        </div> 
      </div>
    </div>
    <div class="cover-content">
      <div>
        <section class="hero is-primary is-medium" style="margin-left:-10px">
          <div class="hero-game-bg" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))">
            <div class="hero-body">
              <div class="container is-clearfix">
                <span class="is-pulled-left">
                  <h1 class="title">A Place landing page</h1> 
                  <h2 class="subtitle">
                    name of the state: 
                    <em>
                      <a href="/games?developer=3" class="dotted-border">Name</a>
                    </em>
                  </h2>
                </span> 
              </div>
            </div>
          </div>
        </section>
        <div class="content">
          <h2>Description</h2> 
          <p>With the help of his allies including pirate captain Tetra and a talking boat named the King of Red Lions, Link attempts to save his sister from the sorcerer Ganon.</p>
        </div> 
        <div class="content">
          <h2>Recent Reviews</h2>
        </div> 
        <div>
          <article class="message is-warning">
            <div class="message-body">
              No reviews found. Be the first to write one! 
              <a href="/reviews/create?game=19" class="">Write a Review</a>
            </div>
          </article>
        </div> 
        <br> 
        <div class="content">
          <h2>Recommendations</h2>
        </div> 
        <article class="message is-warning">
          <div class="message-body">
            No recommendations found. Be the first to write one!
            <a href="/recommendations/create" class="">Write a Recommendation</a>
          </div>
        </article>
      </div>
    </div>
  </div>
  </section>
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
  name: "PlacePage"
  // data() {
  //   return {
  //     CategoryName: ""
  //   };
  // },
  // mounted: function() {
  //   this.showPage(this.$route.query.data);
  // },
  // methods: {
  //   showPage: function(data) {
  //     this.CategoryName = data;
  //   }
  // }
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
.cover-sidebar {
  position: relative;
  width: 239px;
}
</style>
