// 2020/4/2 created by xtt
<template>
<div class="professionalInfo">
  <div class="top">
    专业擅长
  </div>
  <div class="practice_text">
    <textarea placeholder="请输入您的专业擅长" v-model="skillInfo"></textarea>
  </div>
  <div class="fixbtn" @click="tosubmit">
    确定
  </div>
</div>
</template>

<script>
    import Toast from "vant/es/toast";

    export default {
        name: "professionalInfo",
        data(){
          return{
            skillInfo:''
          }
        },
       methods:{
         tosubmit(){
           if(this.skillInfo) {
             localStorage.setItem('professionalInfo', this.skillInfo);
             localStorage.setItem('professionalInfoChange',true);
             this.$router.go(-1);
           }else {
             Toast('请输入您的专业擅长');
           }
         }
       },
      mounted() {
          if(localStorage.getItem('professionalInfo')){
            this.skillInfo=localStorage.getItem('professionalInfo');
          }
      }
    }
</script>

<style scoped lang="less">
.professionalInfo{
  color: #717071;
  font-size: 0.3rem;
  .top{
    height: 0.88rem;
    background: url('../../../../assets/imgs/x_filltop.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.36rem;
    color: #ffffff;
  }
  .practice_text{
    padding: 0.3rem;
    margin: 0.3rem auto;
    width: 6.3rem;
    height: 4.6rem;
    border-radius: 0.08rem;
    border: 0.04rem solid #F7F4F8;
    textarea{
      width: 6.5rem;
      height: 4.5rem;
    }
  }
  .fixbtn{
    position: fixed;
    left: 50%;
    margin-left: -1.55rem;
    text-align: center;
    line-height: 0.7rem;
    bottom: 0.3rem;
    width: 3.1rem;
    height: 0.7rem;
    color: white;
    font-size: 0.32rem;
    background: url("../../../../assets/imgs/bg_grzx_brn_pre.png");
    background-size: 3.1rem 0.7rem;
  }
}
</style>
