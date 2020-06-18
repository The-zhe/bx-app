// 2020/3/20 created by xtt
<template>
  <div class="doctorPrivate">
    <div class="work_head">
      私医服务
    </div>
    <div class="work_search">
      <div class="select">今日待办</div>
      <div class="w_line"></div>
      <div class="select">全部会员</div>
    </div>
    <div class="workDiv">
      <div style="color: #5D5D5D;font-size: 0.3rem;font-weight: bold">9:30</div>
      <div class="work_c">
        <div class="line"></div>
        <div class="container">
          <div class="title">
            <div style="margin-left: 0.25rem">新冠咨询</div>
            <div class="t_state">新任务超时</div>
            <img :src="remindImg"/>
          </div>
          <div class="content">
            <div class="info">
              <img :src="userImg"/>
              <div class="name">
                <div style="font-weight: bold">陈亚明</div>
                <div style="margin-top: 0.16rem">男 26岁 浙江 温州</div>
              </div>
            </div>
            <div class="symptom text_ellipsis">主诉：感觉发热、...头痛三天，恶心想吐1天，现在不头痛三天，恶心想吐1天，现在不</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "doctorPrivate",
        data(){
          return{
            remindImg:require('../../../../../assets/imgs/icon_wdgz_clock_pre.png'),
            unremindImg:require('../../../../../assets/imgs/icon_wdgz_clock_nor.png'),
          }
       }
    }
</script>

<style scoped lang="less">
  .doctorPrivate{
    font-size: 0.28rem;
    color: #8E8E8E;
    .work_head{
      height: 1.32rem;
      background: #58B2AC;
      text-align: center;
      font-size: 0.36rem;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .work_search{
      color: #51A89D;
      padding-top: 0.5rem;
      margin-top: -0.3rem;
      padding-left: 0.25rem;
      height: 1.2rem;
      background: white;
      border-radius: 0.3rem 0.3rem 0 0;
      display: flex;
      justify-content:flex-start;
      .w_line {
        margin: 0 0.22rem;
        width: 0.02rem;
        height:0.5rem;
        background:#D6D3D6;
      }
      .select{
        text-align: center;
        line-height:0.56rem;
        width: 3.22rem;
        height: 0.56rem;
        border-radius: 0.3rem;
        border: 0.02rem solid #D6D3D6;
      }
    }
    .workDiv{
      width: 6.95rem;
      height: 3.5rem;
      margin: 0 auto;
      .work_c{
        margin-top: 0.12rem;
        width: 6.95rem;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        .line{
          width: 0.03rem;
          height: 3rem;
          background: #D2CFD2;
        }
        .container{
          width: 6.6rem;
          height: 3rem;
          border-radius: 0.16rem;
          box-shadow: 0 0 0.15rem rgba(96, 96, 96, 0.32);
          background: #F6F3F7;
          .title{
            padding-top: 0.2rem;
            font-weight: bold;
            color: #5D5D5D;
            font-size: 0.3rem;
            display: flex;
            justify-content: flex-start;
            height: 0.5rem;
            .t_state{
              font-size: 0.22rem;
              font-weight: normal;
              margin-left: 0.18rem;
              width: 2.8rem;
              height: 0.4rem;
            }
            img{
              width: 0.31rem;
              height: 0.35rem;
            }
          }
          .content{
            padding-top: 0.22rem;
            border-radius: 0.16rem;
            box-shadow: 0 0 0.15rem rgba(121, 121, 121, 0.32);
            height: 2.1rem;
            background: white;
            .info{
              margin-left: 0.25rem;
              height: 1rem;
              display: flex;
              justify-content: flex-start;
              img{
                width: 1rem;
                height: 1rem;
                border-radius: 0.5rem;
              }
              .name{
                font-size: 0.3rem;
                color: #5D5D5D;
                margin-left: 0.24rem;
                height: 1rem;
              }
            }
            .symptom{
              margin-top: 0.15rem;
              margin-left: 0.25rem;
              height: 0.5rem;
            }
          }
        }
      }
    }
  }
</style>
