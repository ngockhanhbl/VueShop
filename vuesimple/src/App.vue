<template>
  <div>
    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'



export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
  },
  
}
</script>

<style>
body{
  font-family: Plain, sans-serif !important;
}
.hr-top {
  border-top: 1px solid #ddd;
}

.hr-bot {
  border-bottom: 1px solid #ddd;
}
.diachi {
  font-weight: bold;
  margin-top: 12px;
  margin-bottom:12px;
}
.diachi > a {
  color: black;
}
.paddingLR-5{
  padding: 5px;
}
</style>
