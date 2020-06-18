<template>
  <div class="searchPopup_container">
    <van-popup position="top" v-model="show">
      <div class="container">
        <div class="mainTitle">请选择筛选条件</div>
        <div class="time_region">
          <div class="title">时间区间</div>
          <div class="time_select">
            <div class="time startTime">
              {{startTime===''?'开始时间':startTime}}
              <calendar
                title
                style="opacity:0;position:absolute; left:2px; top:-2px; width:140px;height:40px"
                v-model="startTime"
              ></calendar>
            </div>
            <div class="crossBar"></div>
            <div class="time endTime">
              {{endTime===''?'结束时间':endTime}}
              <calendar
                title
                style="opacity:0;position:absolute; left:2px; top:-2px; width:140px;height:40px"
                v-model="endTime"
              ></calendar>
            </div>
          </div>
        </div>
        <div class="select_type">
          <div class="title">{{typeTitle}}</div>
          <div class="type_list">
            <div
              class="type_item"
              :class="{'active_item':selectTypeIndex==index}"
              @click="selectItem(item,index)"
              v-for="(item,index) in typeList"
            >
              {{item}}
              <img
                v-show="selectTypeIndex==index"
                @click.stop="cancelSelect"
                :src="selectedTagIcon"
              />
            </div>
          </div>
        </div>
        <div class="button_container">
          <div class="reset" @click="reset"></div>
          <div class="confirm" @click="confirm"></div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Group, Calendar } from "vux";
export default {
  components: { Group, Calendar },
  name: "searchPopup",
  props: ["typeList", "typeTitle"],
  data() {
    return {
      selectTypeIndex: null,
      selectTypeValue: "",
      show: false,
      selectedTagIcon: require("../assets/imgs/advicehistory3.png"),
      startTime: "",
      endTime: ""
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    showPop() {
      this.show = true;
    },
    selectItem(item, index) {
      this.selectTypeIndex = index;
      this.selectTypeValue = item;
    },
    cancelSelect() {
      (this.selectTypeIndex = null), (this.selectTypeValue = null);
    },
    reset(){
        this.startTime=""
        this.endTime="",
        this.selectTypeIndex=null,
        this.selectTypeValue=null
    },
    confirm(){
        this.show=false
        this.$emit('confirm',{startTime:this.startTime,endTime:this.endTime,val:this.selectTypeIndex})
    }
  }
};
</script>

<style lang="less" scope>
.searchPopup_container {
  .container {
    font-weight: 400;
    padding: 42px 25px 0px;
    font-size: 30px;
    .mainTitle {
      color: #5b5b5b;
      padding-bottom: 33px;
      border-bottom: 21px solid #f4f4f4;
      font-weight: bold;
    }
    .time_region {
      padding: 35px 0 36px;
      border-bottom: 1px solid #f4f4f4;
      .title {
        color: #777777;
      }
      .time_select {
        margin-top: 24px;
        display: flex;
        align-items: center;

        .time {
          position: relative;
          border-radius: 25px;
          width: 320px;
          height: 61px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          background-color: #f4f4f4;
          color: #969696;
        }
        .crossBar {
          margin: 0 auto;
          width: 41px;
          height: 3px;
          background-color: #b0b1b1;
        }
      }
    }
    .select_type {
      padding: 37px 0 33px;
      border-bottom: 1px solid #f4f4f4;
      .title {
        font-size: 30px;
        color: #777777;
      }
      .type_list {
        margin-top: 23px;
        display: flex;
        .type_item {
          position: relative;
          width: 220px;
          height: 81px;
          background-color: #f4f4f4;
          color: #969696;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
          img {
            bottom: 0;
            right: 0;
            position: absolute;
            width: 59px;
            height: 60px;
          }
        }
        .active_item {
          background-color: #c3f3ea;
          color: #40b2a0;
        }
      }
    }
    .button_container {
      padding-top: 32px;
      padding-bottom: 33px;
      display: flex;
      justify-content: flex-end;
      .reset {
        width: 151px;
        height: 71px;
        background: url("../assets/imgs/advicehistory2.png") no-repeat;
        background-size: 100% 100%;
      }
      .confirm {
        width: 151px;
        height: 71px;
        background: url("../assets/imgs/advicehistory1.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
<style>
    .vux-popup-dialog{
        z-index: 2100 !important;
    }
    .van-overlay{
        z-index: 299 !important;
    }
    .van-popup{
        z-index: 300 !important;
    }
    .weui-cell{
      padding: 30px 30px !important;
    }
</style>
