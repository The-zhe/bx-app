// 2020/1/9 created by xtt
<template>
    <div class="pharmacyHistory">
      <div class="p_history" v-for="item in hlist">
        <div class="p_history_top">
          <div class="p_history_top_time">{{item.crtTm | moment}}-{{item.updTm | moment}}</div>
          <div class="a_gt"><img src="../../../assets/imgs/pharmacy3.png"></div>
        </div>
        <div class="p_content">
          <div class="p_content_div">药品名称：{{item.medName}}</div>
          <div class="p_content_div">药品规格： {{item.medSpec}}</div>
          <div class="p_content_div1">用&emsp;&emsp;法：  {{item.medUse}}，{{item.phrUnit}}，{{item.medMode}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {getMedicalHistory} from '../../../api/index'
  /* import moment from "moment" */

  Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY/MM/DD';
    return moment(value).format(formatString);
  });
    export default {
        name: "pharmacyHistory" ,
      data(){
        return {
          timeshow:false,
          exitshow:false,
          adviceindex:0,
          show: false,
          rtime: moment().format('YYYY-MM-DD HH:mm'),
          hlist:[]
        }
      },
      methods:{
        getinfo(){
          let userid='4754953811874816';
          getMedicalHistory(userid).then(res=>{
            this.hlist=res.data.list;
          })
        },
        changeshow(){
          this.show=true;
        },
        toselect(){
          console.log("aaa")
          this.adviceindex=1;
          this.exitshow=true;
        },
        toexit(){
          this.adviceindex=0;
          this.exitshow=false;
          console.log(this.adviceindex,this.exitshow);
        },
      },
      mounted() {
          this.getinfo()
      }
    }
</script>
<style lang="less">
  .pharmacyHistory {
    .van-popup--top {
      top: 1.2rem !important;
      height: 6.5rem !important;
    }
  }
</style>
<style scoped lang="less">
  .pharmacyHistory{
    width: 100%;
    .p_history{
      width: 7rem;
      height: 3.3rem;
      margin: 0.2rem auto;
      background: white;
      border-radius: 0.2rem;
      box-shadow: 0 0 0.08rem #bebcbc;
      .p_history_top{
        margin: 0 auto;
        width: 6.5rem;
        height: 0.9rem;
        border-bottom: 0.01rem solid #CDCDCD;
        display: flex;
        justify-content: space-between;
        .p_history_top_time{
          margin-top: 0.3rem;
          margin-left: 0.1rem;
          color: #898989;
          font-size: 0.28rem;
          font-weight: bold;
        }
        .a_gt{
          margin-right: -0.25rem;
          margin-top: 0.35rem;
          width: 0.99rem;
          height: 0.37rem;
          img{
            width: 0.99rem;
            height: 0.37rem;
          }
        }
      }
      .p_content{
        margin:0 auto;
        width: 6.5rem;
        height: 2rem;
        color: #777777;
        font-size: 0.28rem;
        .p_content_div{
          margin-left: 0.1rem;
          margin-top: 0.2rem;
          width: 6.4rem;
          height: 0.6rem;
          border-bottom: 0.01rem dashed #CDCDCD;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .p_content_div1{
          margin-left: 0.1rem;
          margin-top: 0.2rem;
          width: 6.4rem;
          height: 0.5rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }

    }
    .s_title{
      width: 7rem;
      margin: 0.3rem auto;
      font-size: 0.3rem;
      color: #5B5B5B;
      font-weight: bold;
    }
    .s_solid{
      margin: 0.3rem auto;
      width: 7rem;
      height: 0.2rem;
      background: #f4f4f4;
    }
    .s_smallsolid{
      margin: 0.3rem auto;
      width: 7rem;
      height: 0.02rem;
      background: #f4f4f4;
    }
    .s_timetitle{
      width: 7rem;
      margin: 0.3rem auto;
      font-size: 0.3rem;
      color: #5B5B5B;
      font-weight: bold;
    }
    .s_timeselect{
      width: 7rem;
      margin: 0.3rem auto;
      height: 0.65rem;
      display: flex;
      justify-content: space-between;
      .s_input{
        text-align: center;
        width: 3.2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        background: #F4F4F4;
        border-radius: 0.3rem;
      }
    }
    .s_adviceselect{
      width: 7rem;
      height: 0.85rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .s_div{
        width: 3.2rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        background: #f4f4f4;
      }
      .s_selectdiv{
        width: 3.2rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        background: #c4f3eb;
        .exitshow{
          width: 0.6rem;
          height: 0.6rem;
          margin-left: 2.6rem;
          margin-top:-0.6rem;
          img{
            width: 0.6rem;
            height: 0.6rem;
          }
        }
      }

    }
    .s-btn1{
      position: absolute;
      right: 1.7rem;
      img{
        width: 1.5rem;
        height: 0.7rem;
      }
    }
    .s-btn2{
      position: absolute;
      right: 0.2rem;
      img{
        width: 1.5rem;
        height: 0.7rem;
      }
    }
  }
</style>
