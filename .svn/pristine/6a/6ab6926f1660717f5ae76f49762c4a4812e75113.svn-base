/*
 * @Author: zzh 
 * @Date: 2019-12-26 14:32:44 
 * @Last Modified by: zzh
 * @Last Modified time: 2020-01-17 11:35:49
 */

<template>
  <div class="outpatientDetails_container">
    <div class="headerPart_container"></div>
    <div class="detail_container">
      <div class="hospital">{{detailInfo.hospName}}</div>
      <div class="border"></div>
      <div class="bottom_content">
        <div class="top">
          <div class="item department">
            <div class="item_title">科&emsp;室：</div>
            <div class="item_text">{{detailInfo.deptNm}}</div>
          </div>
          <div class="item doctor">
            <div class="item_title">医&emsp;生：</div>
            <div class="item_text">{{detailInfo.doctor}}</div>
          </div>
        </div>
        <div class="item date">
          <div class="item_title">时&emsp;间：</div>
          <div class="item_text">{{detailInfo.date}}</div>
        </div>
        <div class="item number">
          <div class="item_title">门诊号：</div>
          <div class="item_text">{{detailInfo.opcNo}}</div>
        </div>
        <div class="item result">
          <div class="item_title">诊&emsp;断：</div>
          <div class="item_text">{{detailInfo.imp}}</div>
        </div>
      </div>
    </div>
    <div class="tabBar_container">
      <div class="tab_container">
        <div
          class="tab_item"
          @click="changeTabComponent(item,index)"
          v-for="(item,index) in tabLists"
          :key="item.title"
        >
          <div class="item_icon">
            <img :src="currentTabIndex==index?item.activeIconUrl:item.iconUrl" />
          </div>
          <div
            class="item_title"
            :class="{'active_item_title':currentTabIndex==index}"
          >{{item.title}}</div>
        </div>
      </div>
      <div class="component_container">
        <keep-alive>
          <component :opcId="detailInfo.id" :is="currentTabComponent"></component>
        </keep-alive>
      </div>
    </div>

    <div class="outpatientCharges_container">
      <div class="title">门诊收费</div>
      <div class="content">
        <div class="table_header">
          <div class="header_index">序号</div>
          <div class="header_invoiceNum">发票号</div>
        </div>
        <div class="table_list">
          <div class="list_item" v-for="(listItem,listIndex) in chargeLists">
            <div class="item_header">
              <div class="item_index">{{listIndex}}</div>
              <div class="item_invoiceNum">
                <div class="num">{{listItem.invoiceNo}}</div>
                <div class="arrow" @click="ChangeChargeItemShow(listIndex)">
                  <img :src="listItem.show?downArrwoIconUrl:upArrowIconUrl" />
                </div>
              </div>
            </div>
            <div class="item_list" v-show="listItem.show">
              <div class="item" v-for="(invoiceItem,invoiceIndex) in listItem.feelist">
                <div class="item_text">
                  <div class="item_title">{{invoiceItem.name}}</div>
                  <div class="item_type">{{invoiceItem.type}}</div>
                </div>
                <div class="item_num">{{`${invoiceItem.fee}*${invoiceItem.quantity}`}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrescriptionList from "./components/prescriptionList";
import CheckList from "./components/checkList";
import InspectionList from "./components/inspectionList";
import { getChargeList } from '@/api/apiz';
export default {
  components: { PrescriptionList, CheckList, InspectionList },
  name: "outpatientDetails",
  data() {
    return {
      upArrowIconUrl: require("@/assets/imgs/btn_da_upper.png"),
      downArrwoIconUrl: require("@/assets/imgs/btn_da_lower.png"),
      currentTabIndex: 0,
      currentTabComponent: "PrescriptionList",
      detailInfo: {
        date: "2019-08-11 10:20",
        hospital: "宁波市医疗中心李惠利医院（兴宁院区）",
        outpatientNumber: "G007190949",
        doctorName: "刘忻",
        department: "呼吸内科专业",
        result: "急性上呼吸道感染+感染性发热"
      },
      tabLists: [
        {
          title: "处方",
          componentName: "PrescriptionList",
          iconUrl: require("@/assets/imgs/icon_da_cfxx_nor.png"),
          activeIconUrl: require("@/assets/imgs/icon_da_cfxx_pre.png")
        },
        {
          title: "检查单",
          componentName: "CheckList",
          iconUrl: require("@/assets/imgs/icon_da_jcd_nor.png"),
          activeIconUrl: require("@/assets/imgs/icon_da_jcd_pre.png")
        },
        {
          title: "检验单",
          componentName: "InspectionList",
          iconUrl: require("@/assets/imgs/icon_da_jyd_nor.png"),
          activeIconUrl: require("@/assets/imgs/icon_da_jyd_pre.png")
        }
      ],
      chargeLists: []
    };
  },
  mounted() {
    this.detailInfo = JSON.parse(sessionStorage.getItem("detailInfo"));
    this.$nextTick(() => {
      this.getChargeListFun();
    });
    console.log(this.$route)
  },
  methods: {
    changeTabComponent(item, index) {
      this.currentTabIndex = index;
      this.currentTabComponent = item.componentName;
    },
    ChangeChargeItemShow(index) {
      this.chargeLists[index].show = !this.chargeLists[index].show;
    },
    getChargeListFun() {
      getChargeList(this.detailInfo.id).then(res => {
        this.chargeLists = res.data.list.map(item => {
          return Object.assign(item, { show: true });
        });
      });
    }
  }
};
</script>

<style lang="less" scope>
.outpatientDetails_container {
  background-color: #f4f4f4;
  box-sizing: border-box;
  padding-bottom: 0.29rem;
  .headerPart_container {
    height: 3rem;
    background-color: #008b84;
  }
  .detail_container {
    width: 7.01rem;
    height: 3.92rem;
    margin: -2.75rem auto 0;
    background-color: #fff;
    border-radius: 0.1rem;
    box-sizing: border-box;
    font-size: 0.28rem;
    color: #777777;
    box-shadow: 0 0 0.08rem #d8d6d6;
    .hospital {
      border-radius: 0.1rem 0.1rem 0 0;
      background: #f4f4f4;
      padding: 0.33rem 0 0.26rem 0;
      text-align: center;
    }
    .border{
      height: 0.06rem;
      border-top: 0.04rem solid #cdcdcd;
      width: 6.6rem;
      margin: 0 auto;
      border-bottom: 0.02rem solid #cdcdcd;
    }
    .bottom_content {
      padding: 0 0.2rem 0 0.34rem;
      .top{
        display: flex;
        .doctor{
          margin-left: auto;
          margin-right: 0.9rem;
        }
      }
      .item {
        display: flex;
        margin-top: 0.24rem;
        .item_title {
          font-weight: bold;
        }
      }
    }
  }
  .tabBar_container {
    box-sizing: border-box;
    padding-bottom: 0.29rem;
    width: 7.01rem;
    margin: 0.25rem auto 0;
    background-color: #fff;
    .tab_container {
      box-sizing: border-box;
      padding: 0.29rem 0;
      border-radius: 0.1rem;
      height: 1.51rem;
      box-shadow: 0 0 0.08rem #d8d6d6;
      display: flex;
      .tab_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 2.33rem;
        .item_icon {
          img {
            height: 0.5rem;
          }
        }
        .item_title {
          margin-top: 0.17rem;
          color: #999999;
          font-size: 0.26rem;
        }
        .active_item_title {
          font-weight: bold;
          color: #f6a540;
        }
        &:not(:first-child) {
          border-left: 0.02rem solid #d5d5d5;
        }
      }
    }
    .component_container {
      height: 100%;
    }
  }
  .outpatientCharges_container {
    box-shadow: 0 0 0.08rem #d8d6d6;
    margin: 0.26rem auto 0;
    background-color: #fff;
    width: 7.01rem;
    border-radius: 0.12rem;
    box-sizing: border-box;
    padding: 0.33rem 0.19rem 0.27rem;
    .title {
      color: #048a83;
      font-size: 0.3rem;
      font-weight: bold;
      position: relative;
      padding-bottom: 0.26rem;
      padding-left: 0.06rem;
      border-bottom: 0.02rem solid #64C2B4;
      &::before {
        content: "";
        position: absolute;
        left: -0.19rem;
        top: 0.04rem;
        width: 0.09rem;
        height: 0.36rem;
        background-color: #f6a63e;
      }
    }
    .content {
      margin-top: 0.28rem;
      border: 0.02rem solid #d2d2d2;
      .table_header {
        display: flex;
        background-color: #f4f4f4;
        height: 0.51rem;
        color: #777777;
        font-weight: 400;
        .header_index {
          width: 1.2rem;
          text-align: center;
        }
        .header_invoiceNum {
          border-left: 0.02rem solid #d2d2d2;
          width: 5.42rem;
          text-align: center;
        }
      }
      .table_list {
        .list_item {
          .item_header {
            border-top: 0.02rem solid #d2d2d2;
            border-bottom: 0.02rem solid #d2d2d2;
            font-size: 0.28rem;
            color: #777777;
            font-weight: bold;
            display: flex;

            .item_index {
              width: 1.2rem;
              text-align: center;
            }
            .item_invoiceNum {
              display: flex;
              border-left: 0.02rem solid #d2d2d2;
              width: 5.42rem;
              align-items: center;
              .num {
                margin-left: 0.3rem;
              }
              .arrow {
                margin-right: 0.15rem;
                margin-left: auto;
              }
              img {
                height: 0.14rem;
              }
            }
          }
          .item_list {
            .item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 0.28rem;
              color: #777777;
              height: 0.94rem;
              box-sizing: border-box;
              padding: 0 0.17rem;
              .item_text {
                .item_title {
                }
                .tiem_type {
                }
              }
              .item_num {
              }
              &:not(:first-child) {
                border-top: 0.02rem dashed #e7e7e7;
              }
            }
          }
        }
      }
    }
  }
}
</style>
