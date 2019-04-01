<template>
  <div class="container-fluid clear">
    <div class="col-md-12 row ">
        <div class="col-md-8 d-flex justify-content-start mb-3 " style="font-size: 11px;" >
          <div class="p-3">&copy; ESC STORE</div>    
        </div>

        <div class="col-md-4 d-flex justify-content-center mb-3 footright">
           <div class="p-2"><a href="https://www.facebook.com/escstore.Official"><b-img :src="require('../assets/facebook.svg')" height="20px" width="20px" /></a></div>
           <div class="p-2"><a href="https://www.instagram.com/escstore.Official"><b-img :src="require('../assets/instagram.svg')" height="20px" width="20px" /></a></div> 
           <div class="p-2">
             <div class="input-group">
              <input type="text" class="form-control" placeholder="Email Address">
               <div class="input-group-append">
                <button class="btn btn-dark" type="submit">SUBSCRIBER</button> 
               </div>
             </div>
           </div>

        </div>
      </div>
  </div>

</template>

  <script>

  export default {
  }
  </script>

  <style scoped>
    .clear{
      margin: 0;
      padding: 0;
    }
    form{
      height:10px;
      width:10px;
     
    }
    input{
      height: 30px;
      width:50px;
      font-size: 11px;
    }
    button{
      height: 30px;
      font-size: 11px;
    }

  </style>
  