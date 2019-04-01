<template>
  <b-container fluid>
    <b-container fluid>
      <b-col>
        <b-col md="12" class="hr-top"></b-col>

        <b-row>
          <b-col md="10" class="diachi">
            <router-link to="/">TRANG CHỦ</router-link>&ensp;>&ensp;
            <router-link to="/contact">CONTACT</router-link>
          </b-col>

          <b-col md="2">
            <b-dropdown id="dropdown-1" size="sm" text=" Sort By " class=" m-md-1" >
              <b-dropdown-item active >Newest</b-dropdown-item>
              <b-dropdown-item >Best Selling</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item >Price high to low</b-dropdown-item>
              <b-dropdown-item >Price low to high</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>

        <b-col md="12" class="hr-bot"></b-col>
      </b-col>
    </b-container>

    <div style="width:100%;height:10px;"></div>

    <b-container>
      <b-row>
        <b-col md="3" v-for="pro in product" :key="pro.invId" class="paddingLR-5">
           <b-col class="card">           
            <img :src="pro.image" class="card-img-top">
            <b-col class="card-body">
              <b-col class="card-title">{{ pro.name | to-uppercase }}</b-col>
              <b-col class="card-text">{{ pro.price }}</b-col>
              <b-col class="row justify-content-end">
                <button class="btn btn-primary" @click="addToCart(pro.invId)">Add to cart</button>
              </b-col>
            </b-col>
          </b-col>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      forSale: []
    };
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch("addToCart", invId);
    },
  },
  computed: {
    product() {
      return this.$store.getters.forSale;
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
    // filterItems() {
    //   let forSale = this.$store.state.forSale;
    //   return this.forSale.filter(pro => {
    //     return pro.name.match(this.search);
    //   });
    // },
    search(text) {
      return this.$store.dispatch("searchItem", text);
    }
  }
};
</script >

<style scoped>
* {
  font-size:11px;
}
.dropdownCusElement{
  min-width: 8rem;
}
</style>
