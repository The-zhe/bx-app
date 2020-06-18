<template>
  <div class="wxdoctorreply">
    <div class="c_top">
      <div class="top_content">
        <img src="../../../assets/imgs/doctor_x.png">
        <div class="top_div"><span class="top_name">{{replyinfo.name}}</span> <span>{{replyinfo.workDoctor}}</span>
          <div>{{replyinfo.hospitalName}} {{replyinfo.secondDeNm}}</div>
        </div>
        <div class="d_top_head_zx" @click="togx"><img :src="state?ganx:unganx"></div>
      </div>
      <div class="top_zx" @click="toZxinfo"><img src="../../../assets/imgs/xconsultinfo.png"/></div>
    </div>
    <div class="c_time">{{replyinfo.date}}</div>
    <div class="c_content">
      <img src="../../../assets/imgs/doctor_x.png"/>
      <div class="c_dialog">{{replyinfo.msg}}</div>
    </div>
    <div class="c_bottom" @click="toshow"><img src="../../../assets/imgs/xconsultzx.png"></div>
    <van-popup v-model="show" round >
      <div class="warp">
        <div class="w_x" @click="tocancel"><img src="../../../assets/imgs/xconsult_x.png"/></div>
        <div class="w_title">下载APP</div>
        <div class="w_content">享受更多专家一对一咨询，请前往 APP内操作。 </div>
        <div class="w_m"><img src="../../../assets/imgs/xconsult_m.png"></div>
        <div class="w_s">识别二维码，即刻下载APP</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {getdoctormessagereply,getmodifydz} from '../../../api/index'
  import Toast from "vant/es/toast";
  export default {
    name: "wxdoctorreply",
    data() {
      return {
        show:false,
        ganx: require('../../../assets/imgs/xdocinfo9.png'),
        unganx: require('../../../assets/imgs/xdocinfo8.png'),
        doctorId: this.$route.query.doctorId,
        serviceId:this.$route.query.serviceId,
        doctorinfo: {},
        state: 0,
        replyinfo:{}
      }
    },
    methods: {
      getinfo() {
        let doctorId=Number(this.doctorId);
        let userId = Number(localStorage.getItem('userId'));
        let serviceId=Number(this.serviceId);
        getdoctormessagereply(userId,doctorId,serviceId).then((res)=>{
          this.replyinfo=res.data[0];
          console.log('reply',res.data);
        })
      },
      toZxinfo(){
       console.log('zx');
      },
      tocancel(){
        this.show=false;
      },
      togx() {
        let userId = Number(localStorage.getItem('userId'));
        let teamId = Number(this.doctorId);
        getmodifydz(userId, teamId).then((res) => {
           if(res.data.code===0){
             this.state=1
           }
           else {
             let msg=res.data.msg;
             Toast(msg);
           }
        })
      },
      toshow(){
        this.show=true;
      }
    },
    mounted() {
      this.getinfo();
    }
  }
</script>
<style>
  @import url("../../../assets/less/vantstyle/popup.css");
</style>
<style scoped lang="less">
  .wxdoctorreply {
    font-size: 0.28rem;
    color: #595757;
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
    .c_top {
      padding-top: 0.3rem;
      height: 1.88rem;
      box-shadow: 0rem 0.2rem 0.2rem -0.2rem rgba(96, 96, 96, 0.24);

      .top_content {
        margin: 0 auto 0.3rem;
        width: 7rem;
        height: 0.9rem;
        display: flex;
        justify-content: space-between;

        img {
          width: 0.9rem;
          height: 0.9rem;
        }

        .top_div {
          width: 3.5rem;
          height: 0.78rem;
          border-right: 0.02rem solid #F6F3F7;
        }

        .top_name {
          font-size: 0.3rem;
          font-weight: bold;
        }

        .d_top_head_zx {
          margin-top: 0.1rem;
          width: 1.5rem;
          height: 0.8rem;
          // background: #007aff;
          img {
            width: 0.93rem;
            height: 0.74rem;
          }
        }
      }

      .top_zx {
        width: 1.91rem;
        height: 0.34rem;

        img {
          margin-left: 0.28rem;
          width: 1.91rem;
          height: 0.34rem;
        }
      }
    }

    .c_time {
      margin: 0.5rem auto 0.3rem;
      width: 2.3rem;
      height: 0.3rem;
      color: #999999;
      font-size: 0.26rem;
    }

    .c_content {
      width: 6.3rem;
      display: flex;
      justify-content: flex-start;

      img {
        margin: 0 0.35rem;
        border-radius: 0.5rem;
        width: 1rem;
        height: 1rem;
      }

      .c_dialog {
        margin-top: 0.1rem;
        padding: 0.2rem;
        width: auto;
        height: auto;
        background: #91C1BE;
        border-radius:0 0.2rem 0.2rem 0.2rem;
        font-size: 0.28rem;
        color: white;
      }
    }

    .c_bottom {
      position: absolute;
      bottom: 3.4rem;
      left: 50%;
      margin-left: -1.93rem;
      width: 3.86rem;
      height: 0.72rem;

      img {
        width: 3.86rem;
        height: 0.72rem;
      }
    }
  }
</style>
