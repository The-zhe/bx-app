<template>
  <div class="doorscareDetail_container">
    <div class="headerPart_container"></div>
    <div class="card_container">
      <div class="patient_info">
        <div class="icon">
          <img :src="locationIcon" />
        </div>
        <div class="text">
          <div class="top">
            <div class="name">李思英</div>
            <div class="phone">18466889988</div>
          </div>
          <div class="place">宁波市海曙区汶水路大宁科技中心18F</div>
        </div>
      </div>
      <div class="date">
        <div class="icon">
          <img :src="clockIcon" />
        </div>
        <div class="val">2019-11-08 14:30</div>
      </div>
      <div class="card">
        <div class="icon">
          <img :src="hasFinishIcon" />
        </div>
        <div class="status">已完成</div>
        <div class="thank">感谢您的信任</div>
      </div>
    </div>
    <div class="orderInfo_container">
      <div class="title">订单信息</div>
      <div class="item service_item">
        <div class="label">服务项目：</div>
        <div class="val">上门注射</div>
      </div>
      <div class="item order_date">
        <div class="label">下单日期：</div>
        <div class="val">2019-11-08 12:20</div>
      </div>
      <div class="item order_num">
        <div class="label">订单编号：</div>
        <div class="val">JZ20191227000141</div>
      </div>
      <div class="item patient">
        <div class="label">就&ensp;诊&ensp;人：</div>
        <div class="val">李思英 男 36岁 13732182995</div>
      </div>
      <div class="item service_fee">
        <div class="label">服务费用：</div>
        <div class="val">58.00元</div>
      </div>
    </div>
    <div class="treatPeople_container">
      <div class="title">医护人员</div>
      <div class="doctor">
        <div class="avatar">
          <img src="@/assets/imgs/avatar.png" />
        </div>
        <div class="text">
          <div class="top">
            <div class="name">李英</div>
            <div class="rank">副主任医师</div>
            <div class="arrow">
              <img :src="arrowIcon" />
            </div>
          </div>
          <div class="introduce">擅长：通过微创的腔镜手术治疗重度肥胖症与糖...</div>
        </div>
      </div>
    </div>
    <div class="service_container">
        <div class="service_explain">
            <div class="title">服务说明</div>   
            <div class="val">为李思英会员进行胰岛素注射。</div>   
        </div>
        <div class="service_detail">
            <div class="title">服务详情</div>
            <div class="detail_list">
                <div class="item">
                    <div class="round"></div>
                    <div class="time">2019-08-14 10:40</div>
                    <div class="val">接单</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      locationIcon: require("@/assets/imgs/icon_syda_add.png"),
      clockIcon: require("@/assets/imgs/icon_syda_time.png"),
      hasFinishIcon: require("@/assets/imgs/icon_syda_ok.png"),
      notFinishIcon: require("@/assets/imgs/icon_syda_wait.png"),
      arrowIcon: require("@/assets/imgs/btn_da_next.png")
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.doorscareDetail_container {
    background-color: #f4f4f4;
    padding-bottom: 0.3rem;
  .headerPart_container {
    height: 0.92rem;
    background-color: #048a81;
  }
  .card_container {
    width: 7.01rem;
    height: 2.41rem;
    background-color: #ffffff;
    margin: -0.92rem auto 0.64rem;
    border-radius: 0.16rem;
    box-sizing: border-box;
    box-shadow: 0 0 0.06rem #a9a9a9;
    padding: 0.32rem 0.2rem;
    .patient_info {
      display: flex;
      align-items: center;
      padding-bottom: 0.13rem;
      border-bottom: 0.01rem dashed #e6e3e6;
      .icon {
        margin-left: 0.11rem;
        img {
          width: 0.33rem;
          height: 0.33rem;
        }
      }
      .text {
        margin-left: 0.17rem;
        color: #777777;
        .top {
          display: flex;
          font-size: 0.28rem;
          .phone {
            margin-left: 0.24rem;
          }
        }
        .place {
          margin-top: 0.06rem;
          margin-left: 0.04rem;
          font-size: 0.24rem;
        }
      }
    }
    .date {
      padding: 0.21rem 0;
      display: flex;
      font-size: 0.28rem;
      color: #777777;
      .icon {
        img {
          width: 0.33rem;
          height: 0.33rem;
        }
      }
      .val {
        margin-left: 0.24rem;
      }
    }
    .card {
      display: flex;
      align-items: center;
      color: #ffffff;
      background: url("../../assets/imgs/bg_grzx_notice.png") no-repeat;
      background-size: 100% 100%;
      width: 6.61rem;
      height: 0.81rem;
      .icon {
        margin-left: 0.43rem;
        img {
          width: 0.33rem;
          height: 0.34rem;
        }
      }
      .status {
        font-size: 0.3rem;
        margin-left: 0.16rem;
      }
      .thank {
        font-size: 0.22rem;
        margin-left: auto;
        margin-right: 0.47rem;
      }
    }
  }
  .orderInfo_container {
    width: 7.01rem;
    height: 3.82rem;
    border-radius: 0.16rem;
    background-color: #ffffff;
    margin: 0 auto;
    border-radius: 0.16rem;
    box-sizing: border-box;
    padding: 0.26rem 0.2rem 0.35rem;
    color: #777777;
    border: 0.02rem solid #e0dde0;
    font-size: 0.3rem;
    .title {
      font-weight: bold;
      padding-bottom: 0.25rem;
      border-bottom: 0.01rem solid #eae7eb;
    }
    .item {
      margin-top: 0.12rem;
      display: flex;
      .label {
        color: #a0a0a0;
      }
      .val {
      }
    }
  }
  .treatPeople_container {
    width: 7.01rem;
    box-shadow: 0 0 0.06rem #a9a9a9;
    border-radius: 0.16rem;
    background-color: #ffffff;
    margin: 0.23rem auto 0.27rem;
    border-radius: 0.16rem;
    box-sizing: border-box;
    border: 0.02rem solid #e0dde0;
    padding: 0.26rem 0.2rem 0;
    .title {
      font-size: 0.3rem;
      font-weight: bold;
      color: rgba(119, 119, 119, 1);
      padding-bottom: 0.13rem;
      border-bottom: 0.01rem solid #f2f1f2;
    }
    .doctor {
      height: 1.5rem;
      display: flex;
      box-sizing: border-box;
      padding: 0.21rem 0.15rem 0.25rem 0;
      .avatar {
        img {
          width: 1.01rem;
          height: 1.01rem;
        }
      }
      .text {
        margin-left: 0.21rem;
        .top {margin-top: 0.15rem;
          display: flex;
          font-size: 0.3rem;
          align-items: center;
          .name {
            color: #5b5b5b;
            font-weight: bold;
          }
          .rank {
            margin-left: 0.18rem;
          }
          .arrow {
            margin-left: auto;
            img {
              width: 0.15rem;
              height: 0.26rem;
            }
          }
        }
        .introduce {
          font-size: 0.24rem;
          color: #777777;
          width: 5.2rem;
            margin-top: 0.07rem;
          white-space: nowrap;

          overflow: hidden;

          text-overflow: ellipsis;
        }
      }
    }
  }
  .service_container{
    width: 7.01rem;
    box-shadow: 0 0 0.06rem #a9a9a9;
    border-radius: 0.16rem;
    background-color: #ffffff;
    margin: 0.23rem auto 0;
    border-radius: 0.16rem;
    box-sizing: border-box;
    border: 0.02rem solid #e0dde0;
    padding: 0.26rem 0.2rem 0;
          color:rgba(119,119,119,1);
      .title{
          
font-weight:600;
      }
      .service_explain{
          padding-bottom: 0.26rem;
          border-bottom: 0.21rem solid #F6F3F7;
          font-size:0.3rem;
          .val{
              margin-top: 0.09rem;

          }
      }
      .service_detail{
          margin-top: 0.16rem;
          .title{
              padding-bottom: 0.14rem;
              border-bottom: 0.01rem solid #E1DEE2;
          }
          .detail_list{
              margin-top: 0.3rem;
              .item{
                  padding-left: 0.31rem;
                  position: relative;
                  border-left: 0.04rem solid #3EB3A0;
                  padding-bottom: 0.24rem;
                  .round{
                      position: absolute;
                      left: -0.12rem;
                      top: -0.1rem;
                      background-color: #3EB3A0;
                      height: 0.21rem;
                      width: 0.21rem;
                      border-radius: 50%;
                  }
                  .time{
                      color: #999999;
                      font-size: 0.24rem;
                  }
                  .val{
                      margin-top: 0.08rem;
                      color: #777777;
                      font-size: 0.28rem;
                  }
              }
          }
      }
  }
}
</style>
