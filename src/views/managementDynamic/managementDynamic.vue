// 2020/1/7 created by xtt
<template>
    <div class="managementDynamic">
      <div class="managementTop">
        <div>
        <div class="m_time">{{time}}</div>
        <div class="m_time_s">{{managementservice}}第{{days}}天</div>
        <div class="m_time_d">（服务到期：{{dueTime}}）</div>
        </div>
        <div class="m_btn"><img src="../../assets/imgs/managementbtn.png"></div>
      </div>
      <div class="managementContent">
        <div class="m_content" @click="toDynamicBar('ma')">
          <img src="../../assets/imgs/management1.png"/>
          <div class="m_title">
            管理建议
          <div class="m_title_c">科学的提供建议</div>
          </div>
        </div>
        <div class="m_content1" @click="toDynamicBar('mr')">
          <img src="../../assets/imgs/management2.png"/>
          <div class="m_title">
            新报告
            <div class="m_title_c">管理您的报告</div>
          </div>
        </div>
        <div class="m_content" @click="toDynamicBar('mh')">
          <img src="../../assets/imgs/management3.png"/>
          <div class="m_title">
          健康指标
            <div class="m_title_c">科学的提供建议</div>
        </div>
        </div>
        <div class="m_content1" @click="toDynamicBar('ms')">
          <img src="../../assets/imgs/management4.png"/>
          <div class="m_title">
          症状感受
            <div class="m_title_c">科学的提供建议</div>
          </div>
        </div>
        <div class="m_content" @click="toDynamicBar('mu')">
          <img src="../../assets/imgs/management5.png"/>
          <div class="m_title">
          用药动态
            <div class="m_title_c">科学的提供建议</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import moment from "moment";
  import {getManagementDynamic} from '../../api/index';
    export default {
        name: "managementDynamic",
        data(){
          return{
             time:moment().format('YYYY-MM-DD'),
             managementservice:'',
             dueTime:'',
            effectTime:'',
            days:''
          }
      },
      methods:{
        toDynamicBar(type){
          console.log(type);
          this.$router_({path:'/dynamicBar',query:{type:type}});
        },
        getInfo(){
          let memberId=4535481258038273;//''
          getManagementDynamic(memberId).then(res=>{
             console.log('md',res.data.list[0]);
            this.managementservice=res.data.list[0].name;
            this.dueTime=res.data.list[0].dueTime.substring(0, 10);
            this.effectTime=res.data.list[0].effectTime.substring(0, 10);
            console.log(this.time,this.effectTime);

             let startDate = Date.parse(this.effectTime);
             let  endDate = Date.parse(this.time);
             this.days=(endDate - startDate)/(1*24*60*60*1000);

          });
        }
      },
      mounted() {
          this.getInfo();
      }
    }
</script>

<style scoped lang="less">
  .managementDynamic{
    width: 100%;
    background-image: url("../../assets/imgs/management_img.png");
    background-size: 100% 1.2rem;
    background-repeat:no-repeat;
    .managementTop{
      width: 7rem;
      height: 1.6rem;
      margin: 0 auto;
      background: url("../../assets/imgs/management6.png") no-repeat;
      background-size: 7rem 1.6rem;
      display: flex;
      justify-content: space-between;
      .m_time{
        padding-top: 0.25rem;
        margin-left: 0.35rem;
        font-size: 0.26rem;
        color: #A46823;
      }
      .m_time_s{
        margin-top: 0.1rem;
        margin-left: 0.35rem;
        font-weight: bold;
        color: #B6631F;
        font-size: 0.32rem;
      }
      .m_time_d{
        margin-top: 0.05rem;
        margin-left: 0.35rem;
        color: #A46823;
        font-size: 0.22rem;
      }
      .m_btn{
        margin-top: 0.5rem;
        margin-right: 0.15rem;
        width: 1.7rem;
        height: 0.7rem;
        img{
          width: 1.7rem;
          height: 0.7rem;
        }
      }
    }
    .managementContent{
      width: 7rem;
      height: 5rem;
      margin: 0 auto;
      .m_content{
        border: 0.01rem #E2E1E1 solid;
        margin-top: 0.2rem;
        float: left;
        width: 3.4rem;
        height: 1.4rem;
        background: white;
        display: flex;
        img{
          width: 0.9rem;
          height: 0.9rem;
          margin-top: 0.25rem;
          margin-left: 0.25rem;
        }
      }
      .m_title{
        margin-left: 0.2rem;
        margin-top: 0.3rem;
        font-weight: bold;
        color: #5A5B5B;
        font-size: 0.3rem;
        .m_title_c{
          margin-top: 0.1rem;
          font-size: 0.26rem;
          font-weight: normal;
          color: #979696;
        }
      }
      .m_content1{
        border: 0.01rem #E2E1E1 solid;
        margin-top: 0.2rem;
        margin-left: 0.16rem;
        float: left;
        width: 3.4rem;
        height: 1.4rem;
        background: white;
        display: flex;
        img{
          width: 0.9rem;
          height: 0.9rem;
          margin-top: 0.25rem;
          margin-left: 0.25rem;
        }
      }
    }
  }

</style>
