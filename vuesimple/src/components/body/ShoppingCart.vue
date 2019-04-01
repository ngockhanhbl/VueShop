<template>
  <div>
    <p>Text from shopping cart</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'shoppingCart',
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
  },
  methods: {
    removeFromCart(index) { this.$store.dispatch('removeFromCart', index); },
  },
};
</script>