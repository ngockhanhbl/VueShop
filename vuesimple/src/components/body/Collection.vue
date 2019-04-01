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
        </b-row>
        <b-col md="12" class="hr-bot"></b-col>
      </b-col>
    </b-container>

    <b-row>
      <b-col md="3" v-for="pro in product" :key="pro.invId" class="paddingLR-5">
        <b-col>
          
        </b-col>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  data() {
    return {
      imagesSocial: [
        "https://drive.google.com/drive/folders/1_yUJwea7_YP_yaBVMKCY6X9vMT3X9HHv"
      ]
    };
  }
};
</script>

<style scoped>
* {
  font-size: 11px;
}
</style>
