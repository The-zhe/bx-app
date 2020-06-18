<!--  created by hjl at 5/1 -->
<template>
  <div class="myCoupon">
    <div class="title">
      <span class="left" @click="goBack"></span>
      我的优惠券
    </div>
    <van-tabs
      v-model="active"
      color="#56B2ADFF"
      style="font-weight: 600;"
      title-active-color="#56B2ADFF"
      title-style="tabs"
    >
      <van-tab title="全部">
        <coupon-card v-for="(item,index) in dataAll" :cardata="item" :key="index"></coupon-card>
      </van-tab>
      <van-tab title="已使用">
        <coupon-card v-for="(item,index) in dataUsed" :cardata="item" :key="index"></coupon-card>
      </van-tab>
      <van-tab title="未使用">
        <coupon-card v-for="(item,index) in dataUnused" :cardata="item" :key="index"></coupon-card>
      </van-tab>
      <van-tab title="已过期">
        <coupon-card v-for="(item,index) in dataNoused" :cardata="item" :key="index"></coupon-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import CouponCard from "./couponCard/couponCard";
import { getMyCoupon } from "../../api/apiz.js";
export default {
  name: "myCoupon",
  components: { CouponCard },
  data() {
    return {
      active: 0,
      //全部数据
      dataAll: [],
      //已使用
      dataUsed: [],
      //未使用
      dataUnused: [],
      //已过期
      dataNoused: []
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    //this.dataAll = this.getCouponData()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.getCouponData("");
    this.getCouponData("0");
    this.getCouponData("1");
    this.getCouponData("2");
    //console.log(this.dataAll)
    //  this.dataUsed = this.getCouponData(1)
    //  this.dataUnused = this.getCouponData(0)
    //  this.dataNoused = this.getCouponData(2)
  },
  methods: {
    goBack() {
      console.log("上一页");
      // this.$router.go(-1);
    },
    //获取我的优惠券数据
    async getCouponData(index) {
      if (index == "") {
        const res = await getMyCoupon();
        this.dataAll = res.data.list;
      } else {
        const res = await getMyCoupon(index);
        //index = >0 1 20：  0:未使用 1：已使用 2：已过期
        if (index == 0) {
          this.dataUnused = res.data.list;
        } else if (index == 1) {
          this.dataUsed = res.data.list;
        } else {
          this.dataNoused = res.data.list;
        }
        //this.arr = res.data.list;
      }
    }
  }
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.myCoupon {
  .tabs {
    font-weight: 600;
    color: aqua;
  }
  .title {
    height: 0.88rem;
    padding: 0.1rem 0;
    font-size: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #606060ff;
    background-color: #ffffff;
    font-weight: 540;
    .left {
      width: 0.15rem;
      height: 0.15rem;
      border-bottom: 2px solid #867f7a;
      border-left: 2px solid #867f7a;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      margin-right: -50px;
      position: absolute;
      left: 0.3rem;
      //font-weight: 600;
    }
  }
}
</style>