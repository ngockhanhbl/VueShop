<template>
  <b-container>
    <b-col md="12" class="hr-top"></b-col>
     <b-breadcrumb :items="items"></b-breadcrumb> 
    <b-col md="12" class="hr-top"></b-col>
    <b-container fluid class="check-out">
      <b-row cols="12">
        <b-col md="2" class="borderCusTitle">Image</b-col>
        <b-col md="4" class="borderCusTitle">Tên Sản Phẩm</b-col>
        <b-col md="2" class="borderCusTitle">Số Lượng</b-col>
        <b-col md="2" class="borderCusTitle">Giá Tiền</b-col>
        <b-col md="2" class="borderCusTitle"></b-col>
      </b-row>
    </b-container>

    <b-container class="check-out">
      <b-row v-for="(cartItem,index) in Cart()" :key="cartItem.invId">
        <b-col md="2" class="borderCusItem">
          <img :src="cartItem.image" height="96px" width="96px">
        </b-col>

        <b-col md="4" class="borderCusItem">{{ cartItem.name | to-uppercase}}</b-col>

        <b-col md="2" class="borderCusItem">
          <input id="number" type="number" value="1" min="1" max="10" required>
        </b-col>
        <b-col md="2" class="borderCusItem">{{ cartItem.price}}</b-col>
        <b-col md="2" class="borderCusItem" @click="removeFromCart(index)">
          <img src="@/assets/delete.svg" height="20px" width="20px">
        </b-col>
      </b-row>
    </b-container>

    <!-- <b-container class="check-out">
      <b-row v-for="(cartItem) in Cart()" :key="cartItem.invId" >
        <b-col md="2"></b-col>
        <b-col md="4"></b-col>
        <b-col md="2"></b-col>
        <b-col md="2" >TỔNG: </b-col>
        <b-col md="2">{{cartItem.price +=cartItem.price }}</b-col>
      </b-row>
    </b-container>-->
  </b-container>
</template>

<script>
export default {
  data() {
      return {
        items: [
          {
            text: 'Home',
            href: 'Home.vue'
          },
          {
            text: 'Cart',
            href: 'Cart.vue'
          },
        ]
      }
    },
  methods: {
    Cart() {
      return this.$store.getters.inCart.map(cartItem => {
        return this.$store.getters.forSale.find(forSaleItem => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index);
    }
  },
};
</script>


<style scoped>
* {
  font-size: 11px;
}
.borderCusTitle {
  border: 1px solid #ddd;
  text-align: center;
}
.borderCusItem {
  border: 1px solid #ddd;
  text-align: center;
  padding: 5px;
}
</style>
