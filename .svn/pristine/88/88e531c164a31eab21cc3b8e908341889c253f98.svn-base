<template>
  <!-- 非会员首页热门服务 -->
  <div class="HotServices_container">
    <!-- 标题 -->
    <div class="title_container">
      <module-title>
        <template v-slot:title>热门服务</template>
        <template v-slot:subtitle>HOT SERVICES</template>
      </module-title>
    </div>
    <!-- 服务列表 -->
    <div class="service_list_container">
      <div class="service_item" :key="index" v-for="(item,index) in mealList1">
        <div class="service_img">
          <img :src="item.serviceImgUrl" />
        </div>
        <div class="appoint_num">{{item.appointNum}}人已预约</div>
        <div class="service_info">
          <div class="service_basic_info">
            <div class="service_name">{{item.serviceName}}</div>
            <div class="service_side_info">
              <div class="service_label">{{item.label}}</div>
              <div class="service_score">
                <rate-star :score="item.score"></rate-star>
              </div>
            </div>
          </div>
          <div class="service_dec">{{item.dec}}</div>
          <div class="service_price">
            <div class="price">{{item.price}}</div>
            <div class="old_price">{{item.oldprice}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 查看更多 -->
    <div class="check_more_container">
      <div class="check_more_text">查看更多服务</div>
      <div class="check_more_icon">
        <img src="../../../assets/imgs/right_green.png" />
      </div>
    </div>
    <!-- 讲座 -->
    <div class="medical_lecture_container">
      <img :src="lectureImgUrl" />
    </div>
  </div>
</template>

<script>
import ModuleTitle from "../../../components/ModuleTitle";
import RateStar from "../../../components/RateStar";
export default {
  name: "HotServices",
  props: ["mealList"],
  components: { ModuleTitle, RateStar },
  data() {
    return {
      lectureImgUrl: require("../../../assets/imgs/r.png"),
      mealList1: [
        {
          serviceImgUrl: require("../../../assets/imgs/w.png"),
          serviceName: "青春期颌面正青春期颌面正",
          appointNum: 128,
          label: "暑期特惠",
          dec: "上海九院专家亲自助理/12次透明牙套整形/2次盐洁",
          price: "￥6800元/期",
          oldprice: "￥1280元/期",
          score: 3.5
        },
        {
          serviceImgUrl: require("../../../assets/imgs/e.png"),
          serviceName: "优孕健康管理卡",
          appointNum: 128,
          label: "超值",
          dec: "上海九院专家亲自助理/12次透明牙套整形/2次盐洁",
          price: "￥6800元/期",
          oldprice: "￥1200元/期",
          score: 4
        },
        {
          serviceImgUrl: require("../../../assets/imgs/w.png"),
          serviceName: "温馨养护套餐",
          appointNum: 128,
          label: "暑期特惠",
          dec: "上海九院专家亲自助理/12次透明牙套整形/2次盐洁",
          price: "￥6800元/期",
          oldprice: "￥1280元/期",
          score: 2
        },
        {
          serviceImgUrl: require("../../../assets/imgs/e.png"),
          serviceName: "术后康复套餐",
          appointNum: 128,
          label: "超值",
          dec: "上海九院专家亲自助理/12次透明牙套整形/2次盐洁",
          price: "￥6800元/期",
          oldprice: "￥1800元/期",
          score: 5
        }
      ]
    };
  },
  methods: {},
  mounted(){
  }
};
</script>

<style scoped lang="less">
@import "../../../../static/lessfunc.less";
.HotServices_container {
  .mgt(40px);
  .service_list_container {
    .pdlr(25px);
    .mgt(48px);
    display: flex;
    flex-wrap: wrap;
    .service_item {
      box-shadow: 0px 0px 6px #888888;
      .pdb(29px);
      /*       .h(470px); */
      .w(340px);
      .br(16px);
      .service_img {
        img {
          .h(180px);
        }
      }
      .appoint_num {
        .h(40px);
        .fs(22px);
        .lh(40px);
        text-align: right;
        .bb();
        .pdr(17px);
        .fc(#ffffff);
        background-image: linear-gradient(to right, #00bfa7, #008294);
      }
      .service_info {
        .mgt(18px);
        .pdt(18px);
        .pdb(29px);
        .bb();
        .pdlr(4px);
        .service_basic_info {
          .h(70px);
          display: flex;
          .service_name {
            .w(1000px);
            .fc(#5d5d5d);
            .fs(28px);
          }
          .service_side_info {
            .mgr(10px);
            .mgt(5px);
            .flex_x_center();
            .service_label {
              .bgc(#d86d4c);
              text-align: center;
              .fc(#ffffff);
              .fs(20px);
              .w(100px);
              .br(16px);
            @media (max-width: 320px) {
              .w(120px) !important;
            }
            }
            .service_score {
              .mgt(2px);
            }
          }
        }
        .service_dec {
          .bb();
          .pdlr(5px);
          .mgt(12px);
          .fs(22px);
          .fc(#939393);
        }
        .service_price {
          .flex_y_center();
          justify-content: space-between;
          .mgt(12px);
          .price {
            .w(180px);
            .fc(#d86d4c);
            .fs(26px);
          }
          .old_price {
            .mgl(auto);
            .ptr();
            .fw(600);
            .fc(#5d5d5d);
            .fs(20px);
            .mgr(10px);
            &::after {
              .pta();
              content: "";
              top: 50%;
              height: 1px;
              background-color: #999999;
              left: 0;
              width: 100%;
            }
            @media (max-width: 320px) {
              .w(180px) !important;
            }
          }
        }
      }
      &:nth-child(even) {
        .mgl(20px);
      }
      &:nth-child(3) {
        .mgt(20px);
      }
      &:nth-child(4) {
        .mgt(20px);
      }
    }
  }
  .check_more_container {
    .h(110px);
    .fc(#40b2a0);
    .fs(28px);
    .flex_y_center();
    .bb();
    .pdl(272px);
    .check_more_icon {
      .mgl(14px);
      img {
        .w(25px);
        .h(25px);
      }
    }
  }
  .medical_lecture_container {
    img {
      .h(350px);
      .w(100%);
    }
  }
}
</style>
<style lang="less">
.van-rate__icon {
  font-size: 7px;
}
.van-rate__item:not(:last-child) {
  padding-right: 0px;
}
</style>