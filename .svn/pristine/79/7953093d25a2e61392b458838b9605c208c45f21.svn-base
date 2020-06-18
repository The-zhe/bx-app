<!--  created by hjl -->
<template>
  <div class="coupon_card" :class="[cardata.statNm == '已使用'?coupon_used:cardata.statNm=='已过期'?coupon_outuse:coupon_nouse]">
    <div class="coupon_title">
      <!-- 标题部分 -->
      <img :src="cardata.img == ''?cardata.img:   require('../../../assets/imgs/test.png')" alt srcset />
      <div class="title">
        <span class="title_h">{{cardata.name}}</span>
        <span class="title_size">{{cardata.spec}}</span>
      </div>
    </div>
    <div class="coupon_time">
      <span>有效：{{cardata.effectTime | fromDate}}至{{cardata.dueTime | fromDate}}</span>
      <span class="status">状态：{{cardata.statNm}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CouponCard",
  props: {
      cardata: {}
  },
  data() {
    return {
        coupon_used: 'coupon_used',//已使用
        coupon_outuse: 'coupon_outuse',//已过期
        coupon_nouse: 'coupon_nouse',//未使用

    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  filters: {
    fromDate: function(val){  
      return val.split(' ')[0]
    }
  }
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.coupon_nouse{
    background-image: url(../../../assets/imgs/img_grzh_wsy.png);
    background-size: 100% 100%;
}
.coupon_used{
    background-image: url(../../../assets/imgs/img_grzh_ysy.png);
    background-size: 100% 100%;
}
.coupon_outuse{
    background-image: url(../../../assets/imgs/img_grzh_ygq.png);
    background-size: 100% 100%;
}
.coupon_card {
  //width: 100%;
  height: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  font-size: 0.3rem;
  box-sizing: border-box;
  background-color: #eee;
  margin: 0.2rem 0.15rem;
  padding: 0 0.3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  //background-image: url(../../../assets/imgs/img_grzh_wsy.png);
  //background-size: 100% 100%;
  .coupon_title {
    margin-top: 0.25rem;
    font-size: 0.3rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    .title {
      display: flex;
      flex-direction: column;
      position: relative;
      .title_size {
        margin-top: 0.1rem;
        font-size: 0.25rem;
        font-weight: 400;
        color: #ffffff;
        float: right;
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .title_h {
        font-weight: 600;
      }
    }
    img {
        display: inline-block;
      border-radius: 50%;
      width: .8rem;
      height: .8rem;
    }
  }
  .coupon_time {
    //margin-top: .3rem;
    position: absolute;
    bottom: .2rem;
    display: flex;
    flex-direction: column;
    font-size: .25rem;
    color: rgba(142, 142, 142, 1);
    span {
      float: left;
    }
    .status{
        margin-top: .1rem;
    }
  }
}
</style>