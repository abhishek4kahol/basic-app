<<template>
  <section>
      <nav class="navbar is-transparent is-warning">
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
                    Profile Name
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
                      <div class="button is-fullwidth is-small is-outlined is-danger" v-on:click="logout">
                        Sign Out
                      </div>
                    </div>
                  </div>
                </div>  
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <figure class="image" style="background-position: 50% bottom">
        <img src="https://static.tacdn.com/img2/branding/homepage/home-tab1-hero-1367x520-beach-prog.jpg">
      </figure>
    </div>
  </section>
</template>
