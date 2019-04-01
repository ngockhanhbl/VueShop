<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="#FFF">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/shop" class="bnav-item">SHOP</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/collection" class="bnav-item">COLLECTION</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/social" class="bnav-item">SOCIAL</router-link>
          </b-nav-item>

          <b-nav-item>
            <form>
              <span>
                <b-img
                  :src="require('../assets/search.svg')"
                  height="13px"
                  width="13px"
                  v-on:click="activeSearchItem"
                />
              </span>
              <span>
                <input
                  type="text"
                  v-model="search"
                  placeholder="Search Item"
                  v-show="isShowSearch"
                  v-bind:class="{'searchInput':isSearchBorder}"
                >
              </span>
            </form>
            <!-- <p>intaview: {{ getterSearch}}</p> -->
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-navbar-brand>
            <router-link to="/">Brand</router-link>
          </b-navbar-brand>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/contact" class="bnav-item">CONTACT</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/aboutus" class="bnav-item">ABOUT US</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/jobs" class="bnav-item">JOBS</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/carts">
              <b-img :src="require('../assets/shopping-cart.svg')" height="13px" width="13px"/>
              <span class="carttext">({{ numInCart }})</span>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    search(text) {
      this.$store.dispatch("searchItem", text);
    },

  },
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    },
    numInCart() {
      return this.inCart.length;
    },
  }
};
</script>

<style scoped>
.bnav-item {
  color: #3d4246;
  text-decoration: none;
  font-size: 11px;
}
.carttext {
  font-size: 11px;
  color: black;
}

.searchInput{
  border: 1px solid black;
  padding: 2px;
  border-right: none;
  position: absolute;
} 


input{
  border: 1px solid black;
  border-radius:0px 15px 15px 0px;
  padding: 2px;
  height: 20px;
}
</style>
