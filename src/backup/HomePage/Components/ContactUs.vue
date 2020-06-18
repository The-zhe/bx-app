<template>
  <div class="contact_us_container">
    <van-collapse v-model="activeNames">
      <van-collapse-item title="联系我们" name="1">
        <div class="contact_info">
          <div class="map_container">
            <img src="../../../assets/imgs/map.png" />
          </div>
          <div class="place_container">
            <div class="icon place_icon">
              <img src="../../../assets/imgs/place_icon.png" />
            </div>
            <div class="info place_info">中国 . 宁波市海曙区中山西路2号恒隆中心11A</div>
          </div>
          <div class="phone_container">
            <div class="icon phone_icon">
              <img src="../../../assets/imgs/phone_icon.png" />
            </div>
            <div class="info phone_info">400-800-1080</div>
          </div>
          <div class="email_container">
            <div class="icon email_icon">
              <img src="../../../assets/imgs/email_icon.png" />
            </div>
            <div class="info email_info">baihujia@shunsson.com</div>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      activeNames: []
    };
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
@import "../../../../static/lessfunc.less";
.contact_us_container {
  .contact_info {
      .pdb(48px);
    .map_container {
      img {
        .w(750px);
        .h(440px);
      }
    }
    .icon {
        .mgr(38px);
      img {
        .h(60px);
        .w(60px);
      }
    }
    .info{
        .fs(30px);
        .fc(#777777);
    }
    .place_container {
        .mgl(104px);
        .mgt(60px);
        .flex_y_center();
        .place_info{
            .w(445px);
        }
    }
    .phone_container {
        .mgl(104px);
        .mgt(55px);
        .flex_y_center();
    }
    .email_container {
        .mgl(104px);
        .mgt(36px);
        .flex_y_center();
    }
  }
}

</style>
<style lang="less">
.contact_us_container{
.van-cell{
    padding: 50px 280px;
}
.van-cell__right-icon{
    color: #40b2a0;
}
.van-cell__title {
  height: 40px;
  span {
    position: relative;
    font-size: 32px;
    color: #258e7b;
    font-weight: 600;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 49px;
      height: 6px;

      background-image: linear-gradient(to right, #008294, #00bfa7);
      width: 130px;
    }
  }
}
.van-collapse-item__content {
  padding: 0px;
}
}

</style>