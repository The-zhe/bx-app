// 2020/1/15 created by xtt
<template>
    <div class="reportInspectInfo">
      <div class="headerPart_container"></div>
      <div class="report_container">
        <div class="report_container_">
          <div class="report_header">
            <div class="hospital">{{inspectionInfo.hospName}}</div>
            <div class="date">{{inspectionInfo.date}}</div>
          </div>
          <div class="hasPadding">
            <div class="report_middle">
              <div class="top">
                <div class="info department">
                  <div class="title">科&emsp;室：</div>
                  <div class="text">{{inspectionInfo.deptNm}}</div>
                </div>
                <div class="info doctor">
                  <div class="title">医&emsp;生：</div>
                  <div class="text">{{inspectionInfo.doctor}}</div>
                </div>
              </div>
              <div class="info outPatient_num">
                <div class="title">门诊号：</div>
                <div class="text">{{inspectionInfo.opcNo}}</div>
              </div>
            </div>
            <div class="report_bottom">
              <div class="info reportNum">
                <div class="title">报告单号：</div>
                <div class="text">{{inspectionInfo.reportNo}}</div>
              </div>
              <div class="info gatherTime">
                <div class="title">采集时间：</div>
                <div class="text">{{inspectionInfo.opcDate}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="inspectionList_container">
          <div class="list_header">
            <div class="header_item">项目名称</div>
            <div class="header_result">结果</div>
            <div class="header_reference">参考值</div>
          </div>
          <div class="list_content">
            <div class="item" v-for="item in checkSheet">
              <div class="item_name">{{item.name}}</div>
              <div class="item_result">
                <div class="text">{{item.result}}</div>
                <div class="arrow" v-if="item.statCd!=='80070.104'">
                  <img
                    :src="item.statCd=='80070.100'?pddwUrl:item.statCd=='80070.101'?pdgwUrl:item.statCd=='80070.102'?pgdwUrl:pggwUrl"
                    :class="{'pddw':item.statCd=='80070.100','pdgw':item.statCd=='80070.101','pgdw':item.statCd=='80070.102','pggw':item.statCd=='80070.103'}"
                  />
                </div>
              </div>
              <div class="item_reference">{{`${item.range} ${item.unit}`}}</div>
            </div>
          </div>
          <div class="list_tip">
            <div>(提示说明：</div>
            <div>
              <img class="pgdw" :src="pgdwUrl" />偏高低危
            </div>
            <div>
              <img class="pggw" :src="pggwUrl" />偏高高危
            </div>
            <div>
              <img class="pddw" :src="pddwUrl" />偏低低危
            </div>
            <div>
              <img class="pdgw" :src="pdgwUrl" />偏低高危)
            </div>
          </div>
          <div class="check_tip">(提示说明：点击项目名称可查看历史数据动态)</div>
        </div>
      </div>
      <div class="r_img" v-show="inspectionInfo.catCd==='1'">
        <div class="r_img_top">报告照片：</div>
        <div class="r_img_content">
          <div class="r_img_content_top">
            <div>会员上传</div>
            <div class="r_img_content_top_small">上传时间： {{inspectionInfo.crtTm}}</div>
          </div>
          <div class="r_img_content_b">
            <img :src="inspectionInfo.imgUrl"/>
          </div>
        </div>
      </div>
      <div class="r_bottom">
        <div class="r_info">
          <div class="r_info_t">
            <div class="r_info_t_photo"><img :src="inspectionInfo.doctorImgUrl?inspectionInfo.doctorImgUrl:doctorImg"></div>
            <div class="r_info_t_name">
              李英
              <div class="r_info_t_name_small">副主任医师</div>
            </div>
            <div class="r_info_t_btn" @click="getDoctorId"></div>
          </div>
          <div class="r_info_b">
            {{inspectionInfo.msg}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {getReportInspect,getInspectionDetailList} from '../../../api/index'
  import {getInspectInfo} from '../../../api/apiz'
    export default {
        name: "reportInspectInfo",
      data(){
          return{
            inspectid:this.$route.query.id,
            currentReportId: 0,
            pgdwUrl: require("../../../assets/imgs/icon_da_arrow_upper.png"),
            pggwUrl: require("../../../assets/imgs/icoon_da_triangle_lower.png"),
            pddwUrl: require("../../../assets/imgs/icon_da_arrow_lower.png"),
            pdgwUrl: require("../../../assets/imgs/icoon_da_triangle_upper.png"),
            doctorImg:require("../../../assets/imgs/img_yhtd_doctor.png"),
            nurseImg:require("../../../assets/imgs/img_yhtd_nurse.png"),
            stewardImg:require("../../../assets/imgs/img_yhtd_steware.png"),
            checkSheet: [],
            inspectionInfo: {},
            // doctorId:''
          }
      },
      methods:{
          getInfo(){
            getReportInspect(this.inspectid).then(res=>{
              this.inspectionInfo=res.data.data;
              let name=this.inspectionInfo.name;
              this.$store.commit("setHeaderTitle", name);
              console.log('inspectionInfo',res.data.data);
            });
            getInspectionDetailList(this.inspectid).then(res => {
              this.checkSheet = res.data.list;
            });
          },
          getDoctorId(){
            console.log(1)
            getInspectInfo(this.inspectid).then( res => {
              let doctorId = res.data.data.id
              this.doctorName = 
              this.$bridge.callHandler('getDoctorId',doctorId, () => {
            })
              console.log('res',res.data.data)
            })
            
          }
      },
      mounted() {
          this.getInfo();
      }
    }
</script>

<style scoped lang="less">
.reportInspectInfo{
   width: 100%;
  height: 100%;
  background: #F4F4F4;
  padding-bottom: 0.5rem;
  .headerPart_container {
    box-sizing: border-box;
    padding-top: 0.23rem;
    height: 2rem;
    background-color: #008b84;
  }
  .report_container {
    font-size: 0.3rem;
    color: #777777;
    border-radius: 0.14rem;
    box-shadow: 0 0 0.08rem #bebcbc;
    box-sizing: border-box;
    width: 7.01rem;
    margin: -2rem auto 0;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 0.28rem;
    color: #777777;
    justify-content: space-between;
    .report_container_ {

      .report_header {
        border-radius: 0.14rem 0.14rem 0 0;
        font-size: 0.3rem;
        position: relative;
        font-weight: bold;
        background-color: #f4f4f4;
        box-sizing: border-box;
        padding: 0.24rem 0 0.21rem;
        text-align: center;
        .title {
          margin-top: 0.08rem;
          font-weight: bold;
        }
        .date {
        }
        &:after{
          content: "";
          width: 6.61rem;
          position: absolute;
          left: 0.2rem;
          bottom: -0.04rem;
          height: 0.04rem;
          background-color: #cdcdcd;
        }
      }
      .hasPadding{
        padding: 0 0.2rem;
        margin-top: 0.1rem;
        .report_middle {
          border-top: 0.01rem solid #cdcdcd;
          padding: 0.29rem 0 0.39rem 0.14rem;
          border-bottom: 0.2rem solid #f4f4f4;
          .top {
            display: flex;
            .doctor {
              margin-left: auto;
              margin-right: 0.9rem;
            }
          }
        }
        .report_bottom {
          box-sizing: border-box;
          padding: 0.33rem 0.13rem 0.39rem;
        }
      }


      .info {
        display: flex;
        .title {
          font-weight: bold;
        }
        &:not(:last-child) {
          margin-bottom: 0.28rem;
        }
      }
    }

    .inspectionList_container {
      border-radius: 0.14rem;
      width: 100%;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 0 0.37rem;
      .list_header {
        font-size: 0.28rem;
        color: #777777;
        align-items: center;
        background-color: #f4f4f4;
        height: 0.89rem;
        display: flex;
        .header_item {
          width: 2.5rem;
          text-align: center;
        }
        .header_result {
          margin-left: 0.9rem;
          width: 1rem;
          text-align: center;
        }
        .header_reference {
          width: 3.1rem;
          text-align: center;
        }
      }
      .list_content {
        font-size: 0.28rem;
        color: #777777;
        .item {
          align-items: center;
          height: 0.68rem;
          display: flex;
          border-bottom: 0.02rem solid#DCDCDC;
          .item_name {
            box-sizing: border-box;
            padding-left: 0.2rem;
            width: 2.5rem;
            text-align: center;
          }
          .item_result {
            margin-left: 0.9rem;
            width: 1rem;
            text-align: center;
            display: flex;
            align-items: center;
            .text {
            }
            .arrow {
              margin-left: 0.1rem;
            }
            .pgdw {
              width: 0.11rem;
              height: 0.28rem;
            }
            .pggw {
              width: 0.14rem;
              height: 0.11rem;
            }
            .pddw {
              width: 0.12rem;
              height: 0.27rem;
            }
            .pdgw {
              width: 0.14rem;
              height: 0.11rem;
            }
          }
          .item_reference {
            width: 3.1rem;
            text-align: center;
          }
        }
      }
      .list_tip {
        margin-top: 0.25rem;
        font-size: 0.26rem;
        color: #969696;
        display: flex;
        align-items: center;
        padding-left: 0.3rem;
        div {
          white-space: nowrap;
          img {
            margin-left: 0.04rem;
            margin-right: 0.02rem;
          }
          display: flex;
          align-items: center;
          .pgdw {
            width: 0.11rem;
            height: 0.28rem;
          }
          .pggw {
            width: 0.14rem;
            height: 0.11rem;
          }
          .pddw {
            width: 0.12rem;
            height: 0.27rem;
          }
          .pdgw {
            width: 0.14rem;
            height: 0.11rem;
          }
        }
      }
      .check_tip{
        padding-left: 0.3rem;
        margin-top: 0.13rem;
        font-size: 0.26rem;
        color: #969696;
      }
    }
  }
  .r_img{
    width: 7rem;
    height: 5.5rem;
    background: white;
    border-radius: 0.14rem;
    box-shadow: 0 0 0.08rem #bebcbc;
    margin: 0.25rem auto 0 auto;
    .r_img_top{
      padding-top: 0.2rem;
      padding-left: 0.3rem;
      color: #777777;
      font-size: 0.3rem;
      font-weight: bold;
      width: 6.7rem;
      height: 0.7rem;
      border-bottom: 0.01rem solid #DFDFDF;
    }
    .r_img_content{
      width: 6.5rem;
      height: 0.8rem;
      margin: 0 auto;
      .r_img_content_top{
        margin-top: 0.2rem;
        font-size: 0.3rem;
        color: #777777;
        width: 6.5rem;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        .r_img_content_top_small{
          font-size: 0.28rem;
        }
      }
      .r_img_content_b{
        width: 6.5rem;
        height: 3.6rem;
        background: #EEEEEE;
        display: flex;
        align-items:center;
        justify-content:center;
        img{
          width: 0.7rem;
          height: 0.6rem;
        }
      }
    }
  }
  .r_bottom{
    border-radius: 0.14rem;
    box-shadow: 0 0 0.08rem #bebcbc;
    width: 7rem;
    height: 3.1rem;
    margin: 0.25rem auto;
    background: #3EB4A1;
    padding-top: 0.7rem;
    overflow: hidden;
    .r_info{
      width: 7rem;
      height: 3.1rem;
      background: white;
      .r_info_t{
        width: 7rem;
        height: 1.8rem;
        display: flex;
        justify-content: space-between;
        .r_info_t_photo{
          margin-top: 0.3rem;
          margin-left: 0.3rem;
          width: 1.3rem;
          height: 1.3rem;
          img{
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 0.6rem;
          }
        }
        .r_info_t_name{
          margin-left: 0.2rem;
          margin-top: 0.5rem;
          color:#5B5B5B;
          font-size: 0.3rem;
          font-weight: bold;
          width: 3.5rem;
          height: 0.9rem;
          .r_info_t_name_small{
            color: #777777;
            font-weight: normal;
          }
        }
        .r_info_t_btn{
          margin-top: 0.6rem;
          margin-right: 0.4rem;
          width: 1.4rem;
          height: 0.6rem;
          background: url("../../../assets/imgs/reportbtn.png");
          background-size: 1.4rem 0.6rem;
        }
      }
      .r_info_b{
        line-height: 0.5rem;
        margin: 0 auto;
        width: 6.5rem;
        height: 0.9rem;
        font-size: 0.28rem;
        color: #777777;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
