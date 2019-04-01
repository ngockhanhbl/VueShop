<template>
  <b-container>
     <b-row md="12">
       <b-breadcrumb :items="items"></b-breadcrumb>
    </b-row> 
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "Home.vue"
        },
        {
          text: "Cart",
          href: "Cart.vue"
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
