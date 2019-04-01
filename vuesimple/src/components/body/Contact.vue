<template>
  <div>
    <div>
      <div class="hr"></div>
      <div class="address container">
        <h4 class="diachi">
          <router-link to="/">TRANG CHỦ</router-link>&ensp;>&ensp;
          <router-link to="/contact">CONTACT</router-link>
        </h4>
      </div>
      <div class="hr"></div>
    </div>

    <div style="width:100%;height:30px;"></div>
    <div class="container">
      <h5 class="title">CONTACT US</h5>
      <div style="width:100%;height:10px;"></div>
      <div class="row">
        <div class="col-md-4">
          <form action="/action_page.php">
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd">
            </div>
            <div class="form-group">
              <label for="sub">Subject:</label>
              <input type="text" class="form-control" id="sub">
            </div>
            <div class="form-group">
              <label for="area">Your Messenger</label>
              <textarea class="form-control" id="area" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-md-3"></div>

        <div class="col-md-5 rightinfo">
          <div>
            <img src="@/assets/maps.svg" height="15px" width="15px">&ensp; 
            <span class="title">ADDRESS&ensp; </span>69 NGUYEN TRAI, WARD 3, DISTRICT 5
          </div>

          <div>
            <img src="@/assets/phone.svg" height="15px" width="15px">&ensp; 
            <span class="title">PHONE&ensp; </span>0965106971-0123654852
          </div>

          <div>
            <img src="@/assets/mail.svg" height="15px" width="18px">&ensp; 
            <span class="title">EMAIL&ensp; </span>contact@escstore.gmail.com
          </div>
          <hr>
          <div>
            <img src="@/assets/clock.svg" height="15px" width="18px">&ensp; 
            <span class="title">MONDAY - SUNDAY &ensp; </span>10:00 AM - 10:00 PM   
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hr {
  width: 100%;
  height: 1px;
  background: #ddd;
}
.address {
  margin: 5px;
}

.diachi {
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 0px;
}
.diachi > a {
  color: black;
}
.rightinfo{
  line-height: 30px;
  font-size: 14px;
}
.title{
  font-size: 12px;
  color:#696969;
}



</style>
