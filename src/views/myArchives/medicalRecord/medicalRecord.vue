/*
 * @Author: zzh 
 * @Date: 2019-12-26 14:33:15 
 * @Last Modified by: zzh
 * @Last Modified time: 2020-01-19 10:38:17
 */

<template>
  <div class="medicalRecord_container">
    <div class="headerPart_container"></div>
    <div class="tab_container">
      <div
        class="tab_item"
        :class="{'active_item':currentTabIndex==index}"
        :key="item.title"
        @click="changeTab(index)"
        v-for="(item,index) in tabLists"
      >
        <div class="tab_icon">
          <img :src="currentTabIndex==index?item.activeIconUrl:item.iconUrl" />
        </div>
        <div class="tab_title">{{item.title}}</div>
      </div>
    </div>
    <div class="search_container">
      <div class="time start_time">
        {{startTime==''?'开始时间':startTime}}
        <calendar
          title
          style="opacity:0;position:absolute; left:0.02rem; top:-0.02rem; width:1.14rem;height:0.15rem"
          v-model="startTime"
        ></calendar>
        <img src="@/assets/imgs/btn_da_time.png" />
      </div>
      <div class="crossbar"></div>
      <div class="time end_time">
        {{endTime==''?'结束时间':endTime}}
        <calendar
          title
          style="opacity:0; position:absolute; left:0.04rem; top:-0.02rem; width:1.14rem;height:0.15rem"
          v-model="endTime"
        ></calendar>
        <img src="@/assets/imgs/btn_da_time.png" />
      </div>
      <div class="search_button" @click="searchList">搜索</div>
    </div>
    <div class="list_container" :style="{position:infoLists.length>4?'static':'absolute'}">
      <div class="list_item" v-for="item in infoLists" @click="JumpToDetail(item)" :key="item.date">
        <div class="info">
          <div class="item date" v-if="currentTabIndex==0">
            <div class="title">就诊日期：</div>
            <div class="text">{{item.date}}</div>
          </div>
          <div class="item hospital" v-if="currentTabIndex==0">
            <div class="title">就诊医院：</div>
            <div class="text">{{item.hospName}}</div>
          </div>
          <div class="item result" v-if="currentTabIndex==0">
            <div class="title">诊断信息：</div>
            <div class="text">{{item.imp}}</div>
          </div>
          <div class="item reportName" v-if="currentTabIndex==2||currentTabIndex==3">
            <div class="title">报告名称：</div>
            <div class="text">{{currentTabIndex==2?`${item.name}检查报告`:`${item.name}检验报告`}}</div>
          </div>
          <div class="item checkDate" v-if="currentTabIndex==2||currentTabIndex==3">
            <div class="title">检查日期：</div>
            <div class="text">{{item.date}}</div>
          </div>
          <div class="item checkItem" v-if="currentTabIndex==2">
            <div class="title">检查项目：</div>
            <div class="text">{{item.name}}</div>
          </div>
          <div class="item inspecteDate" v-if="currentTabIndex==3">
            <div class="title">检验项目：</div>
            <div class="text">{{item.name}}</div>
          </div>
          <div class="item institution" v-if="currentTabIndex==2||currentTabIndex==3">
            <div class="title">医疗机构：</div>
            <div class="text">{{item.hospName}}</div>
          </div>
        </div>
        <div class="arrow">
          <img src="@/assets/imgs/btn_da_next.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Calendar } from "vux";
import { getOutpatientList,getOutpatientCheckList,getOutpatientInspectionList } from '@/api/apiz';
export default {
  components: { Group, Calendar },
  name: "medicalRecord",
  data() {
    return {
      startTime: "",
      endTime: "",
      currentTabIndex: 0,
      tabLists: [
        {
          title: "门诊",
          iconUrl: require("@/assets/imgs/icon_da_mz_nor.png"),
          activeIconUrl: require("@/assets/imgs/icon_da_mz_pre.png")
        },
        {
          title: "住院",
          iconUrl: require("../../../assets/imgs/icon_da_zy_nor.png"),
          activeIconUrl: require("@/assets/imgs/icon_da_zy_pre.png")
        },
        {
          title: "检查",
          iconUrl: require("@/assets/imgs/icon_da_jc_nor.png"),
          activeIconUrl: require("@/assets/imgs/icon_da_jc_pre.png")
        },
        {
          title: "检验",
          iconUrl: require("@/assets/imgs/icon_da_jy_nor.png"),
          activeIconUrl: require("@/assets/imgs/icon_da_jy_pre.png")
        }
      ],
      infoLists: []
    };
  },
  created() {},
  computed: {
    fixedStartTime(){
      return this.startTime+" 00:00:00"
      
    },
    fixedEndTime(){
      return this.endTime+" 23:59:59"
    }
  },
  watch: {},
  mounted() {
    this.getList();
  },
  methods: {
    stateTimeChange(val) {
      this.startTime = val;
    },
    endTimeChange(val) {
      this.endTime = val;
    },
    getOutpatientListFun() {
      getOutpatientList(this.fixedStartTime,this.fixedEndTime).then(res => {
        if(res.code==0){
          this.infoLists = res.data.list;
        }else if(res.code==300){
          this.infoLists=[]
        }
      });
    },
    getOutpatientCheckListFun(){
      getOutpatientCheckList(this.fixedStartTime,this.fixedEndTime).then(res=>{
        if(res.code==0){
          console.log("aaa")
          this.infoLists = res.data.list;
        }else if(res.code==300){
          this.infoLists=[]
        }
      })
    },
    getOutpatientInspectionList(){
      getOutpatientInspectionList(this.fixedStartTime,this.fixedEndTime).then(res=>{
        if(res.code==0){
          console.log("aaa")
          this.infoLists = res.data.list;
        }else if(res.code==300){
          this.infoLists=[]
        }
      })
    },
    JumpToDetail(item) {
      sessionStorage.setItem("detailInfo", JSON.stringify(item));
      this.$router_({ name: "outpatientDetails" });
    },
    searchList() {
      this.getList();
    },
    changeTab(index){
      this.currentTabIndex=index
      this.startTime=""
      this.endTime=""
      this.$nextTick(()=>{
        this.getList()
      })
    },
    getList(){
      switch(this.currentTabIndex){
        case 0:
          this.getOutpatientListFun()
          break;
        case 1:
          this.infoLists=[]
          break;
        case 2:
          this.getOutpatientCheckListFun()
          break;
        case 3:
          this.getOutpatientInspectionList()
      }
    }
  }
};
</script>

<style lang="less" scope>
.medicalRecord_container {
  background-color: #f4f4f4;
  .headerPart_container {
    height: 1rem;
    background-color: #008b84;
  }
  .tab_container {
    background-color: #ffffff;
    width: 7.01rem;
    margin: -0.7rem auto 0rem;
    display: flex;
    padding: 0.24rem 0 0.27rem 0;
    border-radius: 0.14rem 0.14rem 0 0;
    box-shadow: 0 0 0.1rem #999999;
    .tab_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 1.75rem;
      .tab_icon {
        img {
          height: 0.51rem;
        }
      }
      .tab_title {
        margin-top: 0.16rem;
        color: #999999;
        font-size: 0.26rem;
        font-weight: 400;
      }
      &:not(:first-child) {
        border-left: 0.02rem solid #d2d2d2;
      }
    }
    .active_item {
      .tab_title {
        color: #f6a540;
        font-weight: bold;
      }
    }
  }
  .search_container {
    display: flex;
    padding: 0.32rem 0.25rem;
    box-sizing: border-box;
    align-items: center;
    .time {
      height: 0.61rem;
      width: 2.51rem;
      line-height: 0.61rem;
      background-color: #ffffff;
      color: #40b2a0;
      font-size: 0.3rem;
      border-radius: 0.25rem;
      padding-left: 0.2rem;
      box-sizing: border-box;
      position: relative;
      img {
        position: absolute;
        width: 0.33rem;
        top: 0.14rem;
        right: 0.2rem;
      }
    }
    .start_time {
    }
    .crossbar {
      margin-left: 0.09rem;
      margin-right: 0.08rem;
      height: 0.02rem;
      width: 0.25rem;
      background-color: #3eb4a1;
    }
    .end_time {
    }
    .search_button {
      margin-left: 0.16rem;
      font-size: 0.3rem;
      color: #ffffff;
      background-color: #3eb4a1;
      line-height: 0.61rem;
      text-align: center;
      border-radius: 0.25rem;
      width: 1.41rem;
      height: 0.61rem;
    }
  }
  .list_container {
    top: 4.57rem;
    bottom: 0rem;
    width: 100%;
    padding-bottom: 0.36rem;
    box-shadow: 0 0 0.12rem #999999;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 0.36rem 0.36rem 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .list_item {
      display: flex;
      align-items: center;
      background-color: #fcfcfc;
      box-sizing: border-box;
      padding: 0.21rem 0.21rem 0.32rem 0.2rem;
      margin-top: 0.25rem;
      border-radius: 0.16rem;
      border: 0.02rem solid #e3e3e3;
      width: 7.01rem;
      .info {
        div {
          display: flex;
          align-items: center;
          color: #777777;
          font-size: 0.28rem;
          .title {
            white-space: nowrap;
            font-weight: bold;
          }
          .text {
          }
          img {
            margin-left: auto;
            width: 0.15rem;
            height: 0.27rem;
          }
        }
        .item {
          margin-top: 0.12rem;
        }
      }
      .arrow{
        margin-left: auto;
        img{
          width: 0.14rem;
          height: 0.27rem;
        }
      }
    }
  }
}
</style>
