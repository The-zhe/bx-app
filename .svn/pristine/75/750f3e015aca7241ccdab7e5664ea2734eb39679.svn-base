<template>
  <div class="slowtype">
    <div class="filltop">
      <div class="fillback"></div>
      慢病咨询
    </div>
    <div class="slow_top"><img src="../../../assets/imgs/wxmb6.png"/></div>
    <div class="slowback">
    <div class="slow_div" v-for="item in slowtypelist" @click="todoctorlist(item)">
      <img :src="item.hjjkIllnessTypeVo.imgUrl">
    </div>
    </div>
   <!-- <van-popup v-model="show" round >
      <div class="warp">
        <div class="w_x" @click="tocancel"><img src="../../../assets/imgs/xconsult_x.png"/></div>
        <div class="w_title">下载APP</div>
        <div class="w_content">享受更多专家一对一咨询，请前往 APP内操作。 </div>
        <div class="w_m"><img src="../../../assets/imgs/xconsult_m.png"></div>
        <div class="w_s">识别二维码，即刻下载APP</div>
      </div>
    </van-popup>-->
  </div>
</template>

<script>
  import {getmblist} from '../../../api/index'
  import {getismbtable} from "../../../api";

  export default {
    name: "slowtype",
    beforeRouteEnter(to,from,next){
      let hasLogin = Boolean(localStorage['userId']||localStorage['doctorId']);
      let inapp=sessionStorage.getItem('inApp');
      if(hasLogin&&inapp==='1'){
        next();
      }else if(!hasLogin&&inapp=='1'){
        next('/userlogin');
      }
      else{
        next();
      }
    },
    data() {
      return {
        backToImg:require('@/assets/imgs/return_white.png'),
        slowtypelist: [],
        show:false,
      }
    },
    methods: {
      tocancel(){
        this.show=false;
      },
      getinfo() {
        getmblist().then((res) => {
          this.slowtypelist = res.data.data;
          console.log('mbb', res.data.data);
        })
      },
      todoctorlist(item) {
        sessionStorage.setItem('mbnameid', item.hjjkIllnessTypeVo.id);
        sessionStorage.setItem('mbname', item.hjjkIllnessTypeVo.name);
        sessionStorage.setItem('secondDepNm',item.hjjkIllnessTypeVo.depName);
        sessionStorage.setItem('secondDepId',item.hjjkIllnessTypeVo.depId);
        let id=item.hjjkIllnessTypeVo.id;
        sessionStorage.setItem('istype','slow');
          //let type=sessionStorage.getItem('phoneType');
          let inapp=sessionStorage.getItem('inApp');
          if(inapp==='1') {
            this.$router_({path: '/wxdoctorlist'});
           // this.$router_({path: '/wxdoctorlist',query:{id:id}});
          }else {
            let userId = Number(localStorage.getItem('userId'));
            getismbtable(userId).then((res) => {
              if(res.data.data==='1'){
                this.$dialog.confirm({
                  title: '提示',
                  message: '你已提交过表单' + '<br>' + '下载APP，与医生一对一即时交流',
                  confirmButtonText: '确 定',
                  cancelButtonText: '打开APP',
                  confirmButtonColor: '#56B2AD',
                  cancelButtonColor: '#56B2AD'
                }).then(() => {
                  this.$router_({path: '/'});
                }).catch(() => {
                });
              }else {
                this.$router_({path: '/slowbasic'});
              }
            });
          }     //android

      }
    },
    mounted() {
      this.getinfo();
    }
  }
</script>
<style>
  @import url('../../../assets/less/vantstyle/dialog.css');
  @import url('../../../assets/less/vantstyle/button.css');
</style>
<style scoped lang="less">
  .slowtype {
    height: 100%;
    .filltop {
      height: 0.9rem;
      background: url("../../../assets/imgs/x_filltop.png");
      background-size: 100% 0.9rem;
      font-size: 0.32rem;
      font-weight: bold;
      color: white;
      line-height: 0.9rem;
      text-align: center;
      .fillback{

      }
    }
    .warp{
       width: 5.13rem;
       height: 4.5rem;
       background: white;
       color: #777777;
       .w_x{
         position: absolute;
         right: 0.3rem;
         top:0.2rem;
         width: 0.24rem;
         height: 0.24rem;
         img{
           width: 0.24rem;
           height: 0.24rem;
         }
       }
       .w_s{
         margin: 0.2rem auto 0;
         width: 3.34rem;
         height: 0.27rem;
         font-size: 0.28rem;
       }
       .w_m{
         margin: 0.3rem auto;
         width: 1.59rem;
         height: 1.59rem;
         img{
           width: 1.59rem;
           height: 1.59rem;
         }
       }
       .w_title{
         margin: 0.4rem auto 0.3rem;
         width: 1.4rem;
         height: 0.34rem;
         font-size: 0.34rem;
         color: #3FA998;
       }
       .w_content{
         margin: 0 auto;
         width: 4.5rem;
         height: 0.7rem;
         font-size: 0.3rem;
       }
     }
    .slow_top {
      height: 2.8rem;

      img {
        width: 100%;
        height: 2.8rem;
      }
    }
    .slowback{
      margin-top: -1.2rem;
      width: 100%;
      height: auto;
      padding-bottom: 0.3rem;
      .slow_div {
        border-radius: 0.16rem;
        overflow: hidden;
        box-shadow: 0 0 0.1rem 0.02rem #ececec;
        margin: 0.25rem auto 0;
        width: 6.9rem;
        height: 1.8rem;
        img {
          width: 6.9rem;
          height: 1.8rem;
        }
      }
    }

  }
</style>
