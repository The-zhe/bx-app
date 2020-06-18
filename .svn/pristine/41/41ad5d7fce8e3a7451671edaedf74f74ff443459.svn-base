// 2020/4/15 created by xtt
<template>
  <div class="memberSpecialManagement">
    <div class="top">
      <div class="toptitle">
        <img src="../../../../assets/imgs/return_white.png" @click="toback">
        专项管理</div>
    </div>
    <div class="topdata">
      <div class="topdataleft">
        {{memberinfo.name}}第36天
        <div style="color: #777777;font-size: 0.28rem">服务到期：{{memberinfo.dueTime|date}}</div>
      </div>
      <img src="../../../../assets/imgs/img_hyzl_vip_two.png"/>
    </div>
    <div class="datatab">
      <div class="tabinfo" v-for="(item,index) in tablist" :style="index===tablist.length-1?'border:0':''">
        <img :src="item.img"/>
        <div style="margin-left: 0.2rem;width: 5.2rem">{{item.name}}</div>
        <img style="width: 0.18rem;height: 0.3rem;" src="../../../../assets/imgs/btn_hyzl_next.png"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "memberSpecialManagementInfo",
      filters:{
        date:function (val) {
          return new Date(val).toLocaleDateString();
        }
      },
      data(){
          return{
            memberinfo:null,
            tablist:[
              {
                name:'病程记录',
                img:require('../../../../assets/imgs/icon_hygl_gldt.png'),
              },
              {
                name:'管理方案',
                img:require('../../../../assets/imgs/icon_hygl_glfa.png'),
              },
              {
                name:'管理计划',
                img:require('../../../../assets/imgs/icon_hygl_gljh.png'),
              },
              {
                name:'评估报告',
                img:require('../../../../assets/imgs/icon_hygl_pgbg.png'),
              },
              {
                name:'咨询记录',
                img:require('../../../../assets/imgs/icon_hyzl_tjjl.png'),
              },
              {
                name:'服务记录',
                img:require('../../../../assets/imgs/icon_hyzl_yljl.png'),
              }
            ],
          }
      },
      methods:{
        toback(){
         this.$router.go(-1);
        }
      },
      mounted() {
        this.memberinfo=JSON.parse(sessionStorage.getItem('memberSpecialManagement'));
      }
    }
</script>

<style scoped lang="less">
  .memberSpecialManagement{
    font-size: 0.3rem;
    color: #5C5D5D;
    background: #F0EDF1;
    height: 100%;
    .top{
      height: 3.5rem;
      background: url("../../../../assets/imgs/img_hyzl_bbg.png");
      background-size: 100% 3.5rem;
      .toptitle{
        padding-top: 1.1rem;
        font-size: 0.36rem;
        color: white;
        text-align: center;
        height: 0.67rem;
        background: url("../../../../assets/imgs/img_hyzl_bg.png");
        background-size: 100% 1.76rem;
        img{
          left: 0.22rem;
          position: absolute;
          width: 0.16rem;
          height: 0.3rem;
        }
      }
    }
    .topdata{
      border-radius: 0.12rem;
      margin: -1.7rem auto 0.3rem;
      width: 6.9rem;
      height: 1.8rem;
      background: white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-shadow: 0 0 0.15rem rgba(43, 43, 43, 0.32);
      .topdataleft{
        width: 4.5rem;
        margin-left: 0.4rem;
      }
      img{
        width: 1.1rem;
        height: 0.5rem;
      }
    }
    .datatab{
      border-radius: 0.08rem;
      margin: 0 auto;
      width: 6.9rem;
      // height: 4.8rem;
      background: white;
      .tabinfo{
        margin: 0 auto;
        width: 6.5rem;
        border-bottom: 0.02rem solid #F6F6F6;
        height: 1.2rem;
        display: flex;
        align-items: center;
        img{
          margin-left: 0.2rem;
          width: 0.33rem;
          height: 0.3rem;
        }
      }
    }
  }
</style>
