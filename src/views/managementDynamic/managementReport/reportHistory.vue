// 2020/1/9 created by xtt
<template>
    <div class="reportHistory">
      <search-popup ref="pop" @confirm="searchList" :typeList="typeList" :typeTitle="typeTitle"></search-popup>
        <div class="a_report" v-for="item in reportList">
          <div class="r_top">
            <div class="r_title">{{item.name}}</div>
            <div class="a_gt" @click="toReportInfo(item.type,item.id)"><img src="../../../assets/imgs/btn_da_next.png"></div>
          </div>
          <div class="r_content">
            <div class="r_div">检查日期：{{item.time}}</div>
            <div class="r_div">医疗机构：{{item.hospName}}</div>
            <div class="r_div1">医生建议：{{item.msg}}</div>
          </div>
        </div>
    </div>
</template>

<script>
  import searchPopup from "../../../components/searchPopup";
  import {getReportList} from '../../../api/index'
  import moment from "moment"
    export default {
        name: "reportHistory",
      components:{searchPopup},
       data(){
          return {
            typeList: ["检查报告", "检验报告"],
            typeTitle: "报告类型",
            timeshow:false,
            exitshow:false,
            adviceindex:0,
            show: false,
            rtime: moment().format('YYYY-MM-DD HH:mm'),
            reportList:[],
          }
       },
      methods:{
        getInfo(){
          getReportList(4535481258038273,1,'4').then(res=>{
            this.reportList=res.data.list;
          })
        },
        //新报告详情
        toReportInfo(type,id){
          if(type==='0'){
            this.$router_({path:'/reportCheckInfo',query:{id:id}});
          }
          if(type==='1'){
            this.$router_({path:'/reportInspectInfo',query:{id:id}});
          }
        },
        showSearchPopup() {
          this.$refs["pop"].showPop();
        },
        searchList(val){
          console.log('sss',val);
          let memberId='4535481258038273';
          let type=val.val+'';
          getReportList(memberId,1,'4',val.startTime,val.endTime,type).then(res=>{
            this.reportList=res.data.list;
          })
        },
      },
      mounted() {
          this.getInfo();
      }
    }
</script>
<style lang="less">
  .reportHistory {
    .van-popup--top {
      top: 1.5rem !important;
      //height: 6.5rem !important;
    }
  }
</style>
<style scoped lang="less">
.reportHistory{
  width: 100%;
  height: 100%;
  background: #F4F4F4;
  padding-bottom: 0.7rem;
  .a_empty{
    width: 1rem;
    height: 0.2rem;
    background: #f6a540;
  }
    .a_report{
      width: 7rem;
      height: 3.3rem;
      margin: 0.2rem auto 0 auto;
      background: white;
      border-radius: 0.2rem;
      box-shadow: 0 0 0.08rem #bebcbc;
      .r_top{
        margin: 0 auto;
        width: 6.5rem;
        height: 0.9rem;
        border-bottom: 0.01rem solid #CDCDCD;
        display: flex;
        justify-content: space-between;
        .r_title{
          margin-top: 0.3rem;
          margin-left: 0.1rem;
          color: #40B2A0;
          font-size: 0.28rem;
          font-weight: bold;
        }
        .a_gt{
          margin-top: 0.35rem;
          margin-right: 0.1rem;
          width: 0.15rem;
          height: 0.27rem;
          img{
            width: 0.15rem;
            height: 0.27rem;
          }
        }
      }
      .r_content{
        margin:0 auto;
        width: 6.5rem;
        height: 2rem;
        color: #777777;
        font-size: 0.28rem;
        /*margin: 0.2rem auto;*/
        /*width: 6.4rem;*/
        /*height: 0.7rem;*/
        /*color: #969696;*/
        /*font-size: 0.28rem;*/
        /*display: -webkit-box;*/
        /*-webkit-box-orient: vertical;*/
        /*-webkit-line-clamp: 2;*/
        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
        .r_div{
          margin-left: 0.1rem;
          margin-top: 0.2rem;
          width: 6.4rem;
          height: 0.6rem;
          border-bottom: 0.01rem dashed #CDCDCD;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .r_div1{
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
}
</style>
