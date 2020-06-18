<template>
  <div class="checkHistory_container">
    <div class="pop_container">
      <search-popup ref="pop" :typeList="typeList" :typeTitle="typeTitle" ></search-popup>
    </div>
    <div class="list_container">
      <div class="item" v-for="item in checkList">
        <div class="item_header">
          <div class="item_name">{{item.name}}</div>
          <div class="arrow">
            <img src="../../assets/imgs/btn_da_next.png" />
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
  </div>
</template>

<script>
import searchPopup from "../../components/searchPopup";
export default {
  components: { searchPopup },
  name: "",
  data() {
    return {
                typeList:['检查报告','检验报告'],
          typeTitle:'报告类型',
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
  methods: {
    showSearchPopup() {
      this.$refs["pop"].showPop();
    }
  }
};
</script>

<style lang="less" scope>
.checkHistory_container {
  padding: 0 25px;
  .item {
    margin-top: 30px;
    border-radius: 15px;
    box-shadow: 0 0 6px #999999;
    font-size: 28px;
    background-color: #fff;
    padding: 0 20px;
    color: #777777;
    .item_header {
      height: 94px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #dcdcdc;
      .item_name {
        margin-left: 18px;
        color: #40b2a0;
        font-weight: 600;
      }
      .arrow {
        margin-left: auto;
        margin-right: 28px;
        img {
          height: 27px;
          width: 15px;
        }
      }
    }
    .item_date {
      padding: 0 34px 0 18px;
      display: flex;
      border-bottom: 2px dashed #dadada;
      height: 71px;
      align-items: center;
    }
    .item_place {
      padding: 0 34px 0 18px;
      align-items: center;
      display: flex;
      height: 79px;
      border-bottom: 2px dashed #dadada;
    }
    .item_advice {
      padding: 0 34px 0 18px;
      align-items: center;
      height: 82px;
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
