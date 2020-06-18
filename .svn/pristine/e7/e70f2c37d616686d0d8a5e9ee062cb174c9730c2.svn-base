/*
 * @Author: zzh 
 * @Date: 2019-12-26 14:32:15 
 * @Last Modified by: zzh
 * @Last Modified time: 2020-01-17 11:35:03
 */
<template>
  <div class="checklistDetail_container" v-if="Object.keys(reportInfo).length>0">
    <div class="headerPart_container"></div>
    <div class="report_container">
      <div class="report_header">
        <div class="hospital">{{reportInfo.hospName}}</div>
        <div class="date">{{reportInfo.opcDate.slice(0,10)}}</div>
      </div>
      <div class="report_content">
        <div class="report_info">
          <div class="top">
            <div class="info department">
              <div class="title">科&emsp;室：</div>
              <div class="text">{{reportInfo.deptNm}}</div>
            </div>
            <div class="info doctor">
              <div class="title">医&emsp;生：</div>
              <div class="text">{{reportInfo.doctor}}</div>
            </div>
          </div>
          <div class="info outPatient_num">
            <div class="title">门诊号：</div>
            <div class="text">{{reportInfo.opcNo}}</div>
          </div>
        </div>
        <div class="part medicalHistory_container">
          <div class="title">简要病史</div>
          <div class="text">{{reportInfo.briefHistory}}</div>
        </div>
        <div class="part diagnosticPerformance_container">
          <div class="title">诊查表现</div>
          <div class="text">{{reportInfo.imgFind}}</div>
        </div>
        <div class="part diagnosticResult_container">
          <div class="title">诊断结论</div>
          <div class="text">{{reportInfo.imgImp}}</div>
        </div>
        <div class="part reportDoctor_container">
          <div class="title">报告医生：</div>
          <div class="text_">{{reportInfo.reportDoctor}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCheckListDetail } from '@/api/apiz';
export default {
  components: {},
  name: "checklistDetail",
  data() {
    return {
      reportInfo: {},
      currentReportId: 0,
      checkList: []
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {
    this.currentReportId = this.$route.params.id;
    this.$nextTick(() => {
      this.getCheckListDetailFunc(this.currentReportId);
    });
  },
  methods: {
    getCheckListDetailFunc(id) {
      getCheckListDetail(id).then(res => {
        this.reportInfo = res.data.data;
        this.$store.commit("setHeaderTitle", res.data.data.name);
      });
    }
  }
};
</script>

<style lang="less" scope>
.checklistDetail_container {
  width: 100%;
  background-color: #f4f4f4;
  padding-bottom: 0.28rem;
  .headerPart_container {
    height: 2rem;
    background-color: #008b84;
  }
  .report_container {
    border-radius: 0.14rem;
    box-shadow: 0 0 0.08rem #bebcbc;
    box-sizing: border-box;
    width: 7.01rem;
    margin: -2rem auto 0;
    background-color: #fff;
    .report_header {
      border-radius: 0.14rem 0.14rem 0 0;
      position: relative;
      padding: 0.25rem 0.2rem 0rem;

      background-color: #f4f4f4;
      font-weight: bold;
      font-size: 0.3rem;
      color: #777777;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      margin-bottom: 0.16rem;
      .date {
        margin-top: 0.12rem;
        margin-bottom: 0.19rem;
      }
      &:after{
        position: absolute;
        content: "";
        bottom: -0.08rem;
        height: 0.08rem;
        background-color: #cdcdcd;
        width: 6.6rem;
      }
    }
    .report_content {
      padding: 0 0.2rem;
      .report_info {
        border-top: 0.02rem solid #cdcdcd;
        border-bottom: 0.21rem solid #f4f4f4;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0.29rem 0.14rem 0.38rem;
        font-size: 0.28rem;
        color: #777777;
        .top {
          display: flex;
          .doctor {
            margin-left: auto;
            margin-right: 0.9rem;
          }
        }
        .info {
          display: flex;
          .title {
            font-weight: bold;
          }
          .text {
          }
          &:not(:last-child) {
            margin-bottom: 0.29rem;
          }
        }
      }
      .part {
        padding: 0.29rem 0.14rem 0.29rem 0.14rem;
        font-size: 0.28rem;
        .title {
          color: #606060;
          font-weight: bold;
        }
        .text {
          margin-top: 0.27rem;
          color: #777777;
        }
        &:not(:first-child) {
          border-top: 0.02rem solid #ededed;
        }
      }
      .reportDoctor_container {
        display: flex;
        .text_ {
          color: #777777;
        }
      }
    }
  }
}
</style>
