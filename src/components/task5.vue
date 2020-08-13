<template>
  <div class="hello">
      <div class="bg-pc">
          <img src="../assets/bg.png" alt="">
      </div>
      <div class="bg-moblie"></div>
    <div class="imgWrap">
        <img src="../assets/img-1.jpg" alt="">
        <img src="../assets/img-1.jpg" alt="">
        <img src="../assets/img-1.jpg" alt="">
        <img src="../assets/img-1.jpg" alt="">
        <img src="../assets/img-1.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'task5',
  data () {
    return {
      showTip:false,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100%;
}
.bg-pc img{
    width:100%;
    vertical-align: bottom;
}
.bg-moblie{
    width:100%;
    height: 40px;
    background: black;
}
  .imgWrap{
  background: #444;
     font-size: 0;  
  } 
.imgWrap img{
    width:300px;
    vertical-align: bottom;
}
@media only screen and (max-width: 767px) {
  .imgWrap img{
      width:300px;
      margin: 10px;
   }
   .bg-moblie{
       display: block;
    }
   .bg-pc{
       display: none;
    }
}
@media  only screen and (min-width: 768px) and (max-width: 979px)  {
  .imgWrap img{
      width:330px;
      margin: 20px;
   }
   .bg-moblie{
       display: block;
    }
   .bg-pc{
       display: none;
    }
}
@media only screen and (min-width: 980px) {
  .imgWrap img{
      width:410px;
      margin: 30px;
   }
   .bg-moblie{
       display: none;
    }
   .bg-pc{
       display: block;
    }
}
</style>
