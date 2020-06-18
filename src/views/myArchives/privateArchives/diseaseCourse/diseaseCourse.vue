<template>
  <div class="diseaseCourse_container">
    <div class="headerPart_container"></div>
    <div class="tab_container">
      <div
        class="tab_item"
        :class="{'active_item':currentTabIndex===index}"
        :key="item.title"
        @click="changeComponent(item,index)"
        v-for="(item,index) in tabList"
      >
        <div class="item_icon">
          <img :src="currentTabIndex===index?item.activeIconUrl:item.iconUrl" />
        </div>
        <div class="item_title">{{item.title}}</div>
      </div>
    </div>
    <div class="search_container">
      <div class="time start_time">
        {{startTime==''?'开始时间':startTime}}
        <calendar title=""  style="opacity:0;position:absolute; left:0.02rem; top:-0.02rem; width:1.14rem;height:0.15rem" v-model="startTime"></calendar>
        <img src="../../../../assets/imgs/btn_da_time.png" />
      </div>
      <div class="crossbar"></div>
      <div class="time end_time">
        {{endTime==''?'结束时间':endTime}}
         <calendar title="" style="opacity:0; position:absolute; left:0.04rem; top:-0.02rem; width:1.14rem;height:0.15rem" v-model="endTime"></calendar>
        <img src="../../../../assets/imgs/btn_da_time.png" />
      </div>
      <div class="search_button" @click="searchList">确定</div>
    </div>
    <div class="record_container">
      <component @uploadSuccess="uploadSuccessEvent" :listData="listData" :is="currentComponentName"></component>
    </div>
  </div>
</template>

<script>
import {getDiseaseList} from '@/api/apiz'
import {Group,Calendar} from 'vux';
import pathoGraphy from "./components/pathoGraphy";
import checkReport from "./components/checkReport";
import medicalOrder from "./components/medicalOrder";
export default {
  components: { pathoGraphy, checkReport, medicalOrder,Group,Calendar },
  name: "diseaseCourse",
  data() {
    return {
      currentComponentName:'pathoGraphy',
      currentTabIndex: 0,
      startTime:"",
      endTime:"",
      tabList: [
        {
          title: "病情记录",
          iconUrl: require("../../../../assets/imgs/icon_wdda_recordd.png"),
          activeIconUrl: require("../../../../assets/imgs/icon_wdda_record.png"),
          componentName: "pathoGraphy",
        },
        {
          title: "检查报告",
          iconUrl: require("../../../../assets/imgs/icon_wdda_repor.png"),
          activeIconUrl: require("../../../../assets/imgs/icon_wdda_report.png"),
          componentName: "checkReport",
        },
        {
          title: "医嘱",
          iconUrl: require("../../../../assets/imgs/icon_wdda_advice.png"),
          activeIconUrl: require("../../../../assets/imgs/icon_wdda_record.png"),
          componentName: "medicalOrder",
        }
      ],
      listData:[]
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {
    this.getDiseaseListFun(this.startTime,this.endTime)
    this.$store.commit('setHeaderTitle','私医档案')
  },
  methods: {
    changeComponent(item, index) {
      this.currentTabIndex = index;
      this.currentComponentName = item.componentName;
    },
    searchList(){
      let startTime = this.startTime+' 00:00:00'
      let endTime = this.endTime + ' 23:59:59'
      this.getDiseaseListFun(startTime,endTime)
    },
    getDiseaseListFun(){
      getDiseaseList(this.startTime,this.endTime).then((res)=>
      {this.listData=res.data})
    },
    uploadSuccessEvent(){
      this.startTime=""
      this.endTime=""
      this.$nextTick(()=>
        this.getDiseaseListFun()
      )
    }
  }
};
</script>

<style lang="less" scope>
.diseaseCourse_container {
  background-color: #f4f4f4;
  padding-bottom: 0.2rem;
  .headerPart_container {
    background-color: #008b84;
    height: 0.91rem;
  }
  .tab_container {
    border-radius: 0.15rem;
    box-shadow: 0 0 0.08rem #999999;
    padding: 0.22rem 0 0.26rem;
    box-sizing: border-box;
    width: 7rem;
    height: 1.41rem;
    display: flex;
    margin: -0.7rem auto 0;
    justify-content: space-between;
    background-color: #fff;
    .tab_item {
      width: 2.32rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.3rem;
      color: #999999;
      font-weight: 400;
      display: flex;
      .item_icon {
        img {
          height: 0.51rem;
        }
      }
      .item_title {
        margin-top: 0.08rem;
      }
      &:not(:first-child) {
        border-left: 0.01rem solid #dbdbdb;
      }
    }
    .active_item {
      color: #e39a4b;
      font-weight: bold;
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
      border-radius: 0.35rem;
      width: 1.41rem;
      height: 0.61rem;
    }
  }
  .record_container {
    padding: 0 0.25rem;
  }
}
</style>
<style>
@import url('../../../../assets/less/vantstyle/picker.css');
</style>
