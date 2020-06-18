// 2020/3/12 created by xtt
<template>
<div class="jumpback">
  <div class="j_top" @click="tofilltable">跳过&emsp;{{num}}</div>
</div>
</template>

<script>
    export default {
        name: "filljump",
      data(){
        return{
          mytime:'',
          secondInterval:'',
          num:3,
        }
      },
      methods:{
        tofilltable(){
          this.$router.push({path:'/fillbasic'});
        }
      },
      mounted() {
        this.mytime=setTimeout(()=>{
         this.tofilltable();
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
    }
</script>

<style scoped lang="less">
.jumpback{
  width: 100%;
  height: 100%;
  background:url("../../../assets/imgs/img_Jump_one.png");
  background-size: 100% 100%;
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
