<template>
  <div class="hello">
    <div v-if='showTip' class="block">
      <img class="scapeImg" src="../assets/scape.png" alt="">
    </div>
    <div v-else>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      showTip:false,
    }
  },
  mounted(){
    let sWidth = window.screen.width
    let sHeight = window.screen.height
    window.addEventListener('orientationchange',this.changeScreen,false)
    console.log(window.screen.width)
    console.log(window.screen.height)
  },
  methods:{
    changeScreen(){
      if(window.orientation == 0 || window.orientation == 180){
        this.showTip = true;
      }else{
        this.showTip = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100%;
}
.block{
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center
}
.scapeImg{
  width: 60%;
  animation: rotate1 1s linear infinite;
}
@keyframes rotate1{
  0%{-webkit-transform:rotate(0deg);}
  50%{-webkit-transform:rotate(90deg);}
  100%{-webkit-transform:rotate(0deg);}
}
</style>
