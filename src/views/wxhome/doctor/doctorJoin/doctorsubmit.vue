// 2020/3/31 created by xtt
<template>
  <div class="submitSuccess">
    <div class="top">
      提交成功
    </div>
    <div class="r_img"></div>
    <div class="title one">您的资料已成功提交</div>
    <div class="title two">审核结果将以短信方式发送至您的手机</div>
    <div class="fixbtn">
      <div class="btn back" @click="tohome">返回首页</div>
      <div class="btn next" @click="tonext">下载APP</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "doctorsubmit",
      data(){
        return{

        }
      },
      methods:{
        tonext(){

        },
        tohome(){
          this.$router.push({path:'/doctorHomepage'})
        }
      }
    }
</script>

<style scoped lang="less">
  .submitSuccess{
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
    .r_img{
      margin: 2.8rem auto 0;
      width: 2rem;
      height: 2rem;
      background: url("../../../../assets/imgs/img_gybm_yes.png");
      background-size: 2rem 2rem;
    }
    .title{
      text-align: center;
      width: 7rem;
      height: 0.35rem;
      font-size: 0.36rem;
      color: #4C4C4C;
      font-weight: bold;
      margin: 0.8rem auto 0.4rem;
    }
    .two{
      font-size: 0.3rem;
      color: #999999;
      margin: 0 auto;
      font-weight: normal;
    }
    .three{
      font-size: 0.3rem;
      color: #FBB03B;
      font-weight: normal;
    }
    .t_line{
      margin: 1.6rem auto 0;
      width: 6.9rem;
      height: 0.02rem;
      background: #F3F0F3;
    }
    .t_btn{
      margin: 1.7rem auto 0;
      width: 5rem;
      height: 0.7rem;
      background: url("../../../../assets/imgs/btn_gybm_app.png") no-repeat;
      background-size: 5rem 0.7rem;
    }
    .fixbtn{
      width: 6.5rem;
      position: fixed;
      bottom: 0;
      padding-left: 0.5rem;
      height: 1.2rem;
      display: flex;
      justify-content: space-between;
      .btn{
        font-size: 0.32rem;
        width: 3.1rem;
        height: 0.7rem;
        line-height: 0.7rem;
        text-align: center;
      }
      .back{
        color: #00A99D;
        background: url("../../../../assets/imgs/bg_grzx_brn_nor.png");
        background-size: 3.1rem 0.7rem;
      }
      .next{
        color: white;
        background: url("../../../../assets/imgs/bg_grzx_brn_pre.png");
        background-size: 3.1rem 0.7rem;
      }
    }
  }
</style>
