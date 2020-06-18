<template>
  <div class="checkReport_container">
    <div class="item" v-for="item in checkList">
      <div class="item_header">
        <div class="item_name">{{item.name}}</div>
        <div class="arrow">
          <img src="@/assets/imgs/btn_da_next.png" />
        </div>
      </div>
      <div class="item_date">
        <div class="label">检查日期：</div>
        <div class="val">{{item.date}}</div>
      </div>
      <div class="item_place">
        <div class="label">医疗机构：</div>
        <div class="val">{{item.place}}</div>
      </div>
      <div class="item_advice">
        <div class="label">医生建议：</div>
        <div class="val">{{item.advice}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "checkReport",
  data() {
    return {
      checkList: [
        {
          name: "胃部B超",
          date: "2019-08-11 10:20",
          place: "宁波市医疗中心李惠利医院（兴宁院区）",
          advice: "近期饮食需要以清单为主，不要吃油11111111111"
        }
      ]
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scope>
.checkReport_container {
  .item {
    border-radius: 0.15rem;
    box-shadow: 0 0 0.06rem #999999;
    font-size: 0.28rem;
    background-color: #fff;
    padding: 0 0.2rem;
    color: #777777;
    .item_header {
      height: 0.94rem;
      display: flex;
      align-items: center;
      border-bottom: 0.01rem solid #dcdcdc;
      .item_name {
        margin-left: 0.18rem;
        color: #40b2a0;
        font-weight: bold;
      }
      .arrow {
        margin-left: auto;
        margin-right: 0.28rem;
        img {
          height: 0.27rem;
          width: 0.15rem;
        }
      }
    }
    .item_date {
      padding: 0 0.34rem 0 0.18rem;
      display: flex;
      border-bottom: 0.02rem dashed #dadada;
      height: 0.71rem;
      align-items: center;
    }
    .item_place {
      padding: 0 0.34rem 0 0.18rem;
      align-items: center;
      display: flex;
      height: 0.79rem;
      border-bottom: 0.02rem dashed #dadada;
    }
    .item_advice {
      padding: 0 0.34rem 0 0.18rem;
      align-items: center;
      height: 0.82rem;
      display: flex;
    }
    .label {
      white-space: nowrap;
    }
    .val {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
