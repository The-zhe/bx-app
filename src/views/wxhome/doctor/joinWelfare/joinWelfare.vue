<template>
    <div class="joinWelfare_container">
      <div class="j_top" @click="JumpToBaseData">跳过&emsp;{{num}}</div>
        <!--<img src="@/assets/imgs/btn_wgy_join.png" @click="JumpToBaseData" />-->
    </div>
</template>

<script>
export default {
name:"joinWelfare",
data(){
    return{
      mytime:'',
      secondInterval:'',
      num:3,
    }
},
methods:{
    JumpToBaseData(){
      this.$router_({name:'doctorphone'})
        //this.$router_({name:'baseData'})
    }
},
mounted(){
  this.mytime=setTimeout(()=>{
    this.JumpToBaseData();
  },3000);
  this.secondInterval = setInterval(() => {
    if (this.num === 0) {
      clearInterval(secondInterval);
      this.num = 0;
    } else {
      this.num--;
    }
  }, 1000)
},
  destroyed() {
    clearTimeout(this.mytime);
    clearInterval(this.secondInterval);
  },

};
</script>

<style scoped lang="less">
.joinWelfare_container{
    width: 100%;
    //background: url('../../../../assets/imgs/img_wgy_bg.png');
    background: url("../../../../assets/imgs/img_gybm_Jump.png");
    background-size: 100% 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    img{
        left: 50%;
        margin-left: -2.84rem;
        bottom: 2rem;
        position: absolute;
        height: 0.85rem;
        width: 5.68rem;
    }
  .j_top{
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.26rem;
    color: rgba(255,255,255,0.8);
    position: absolute;
    right: 0.3rem;
    top: 0.9rem;
    width: 1.5rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    background:rgba(0,0,0,0.3);
  }
}
</style>
