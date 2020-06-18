<template>
  <div class="diseaseHistory_container">
    <div class="search_container">
      <div class="time start_time">
        {{startTime==''?'开始时间':startTime}}
        <calendar
          title
          style="opacity:0;position:absolute; left:2px; top:-2px; width:114px;height:15px"
          v-model="startTime"
        ></calendar>
        <img src="../../assets/imgs/btn_da_time.png" />
      </div>
      <div class="crossbar"></div>
      <div class="time end_time">
        {{endTime==''?'结束时间':endTime}}
        <calendar
          title
          style="opacity:0; position:absolute; left:4px; top:-2px; width:114px;height:15px"
          v-model="endTime"
        ></calendar>
        <img src="../../assets/imgs/btn_da_time.png" />
      </div>
      <div class="search_button" @click="searchList">搜索</div>
    </div>
    <div class="history_list">
      <div class="item" :key="item.date" v-for="item in historyList">
        <div class="item_top">
          <div class="item_header">
            <div class="item_label">病情描述：</div>
            <div class="item_date">{{item.date}}</div>
            <div class="arrow">
              <img src="../../assets/imgs/btn_da_next.png" />
            </div>
          </div>
          <div class="item_desc">{{item.desc}}</div>
        </div>
        <div class="item_bottom">
          <div class="doctor_advice" v-if="item.hasAdvice">
            <div class="label">医生建议：</div>
            <div class="doctorInfo">
              <div class="img">
                <img :src="item.doctorImg" />
                <div class="tag">{{item.labelName}}</div>
              </div>
              <div class="text">
                <div class="name">{{item.doctorName}}</div>
                <div class="rank">{{item.doctorRank}}</div>
              </div>
            </div>
            <div class="advice">{{item.advice}}</div>
          </div>
          <div class="contact_private_doctor" v-else>
            <img src="../../assets/imgs/btn_wdda_contact.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Calendar } from "vux";
export default {
  components: { Group, Calendar },
  name: "",
  data() {
    return {
      startTime: "",
      endTime: "",
      historyList: [
        {
          date: "2019-11-10 8:00",
          desc:
            "冠心病，风湿性心脏病，先天性心脏病，高血压性心脏病，贫血性心脏病，扩张性心肌病等，心脏疾病图胸片，心脏电生理检查，心脏彩超检。",
          hasAdvice: false,
          doctorName: "",
          doctorImg: "",
          doctorRank: "",
          advice: "",
          labelName: ""
        },
        {
          date: "2019-11-09 11:34",
          desc:
            "冠心病，风湿性心脏病，先天性心脏病，高血压性心脏病，贫血性心脏病，扩张性心肌病等",
          hasAdvice: true,
          doctorName: "李英",
          doctorImg: require("../../assets/imgs/img_wdda_head.png"),
          doctorRank: "副主任医师",
          advice:
            "冠心病，风湿性心脏病，先天性心脏病，高血压性心脏病，贫血性心脏病，扩张性心...",
          labelName: "私人医生"
        }
      ]
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    stateTimeChange(val) {
      this.startTime = val;
    },
    endTimeChange(val) {
      this.endTime = val;
    },
    searchList() {
      let startTime = this.startTime + " 00:00:00";
      let endTime = this.endTime + " 23:59:59";
      this.getOutpatientListFunc(1, startTime, endTime);
    }
  }
};
</script>

<style lang="less" scope>
.diseaseHistory_container {
  .search_container {
    display: flex;
    padding: 32px 25px;
    box-sizing: border-box;
    align-items: center;
    .time {
      position: relative;
      height: 61px;
      width: 251px;
      line-height: 61px;
      background-color: #ffffff;
      color: #40b2a0;
      font-size: 30px;
      border-radius: 25px;
      padding-left: 20px;
      box-sizing: border-box;
      img {
        position: absolute;
        width: 33px;
        top: 14px;
        right: 20px;
      }
    }
    .start_time {
    }
    .crossbar {
      margin-left: 9px;
      margin-right: 8px;
      height: 2px;
      width: 25px;
      background-color: #3eb4a1;
    }
    .end_time {
    }
    .search_button {
      margin-left: 16px;
      font-size: 30px;
      color: #ffffff;
      background-color: #3eb4a1;
      line-height: 61px;
      text-align: center;
      border-radius: 25px;
      width: 141px;
      height: 61px;
    }
  }
  .history_list {
    padding: 0 25px;
    .item {
      margin-bottom: 42px;
      border-radius: 10px;
      box-shadow: 0 0 8px #a9a9a9;
      padding: 0 20px;
      box-sizing: border-box;
      width: 700px;
      background-color: #fff;
      font-size: 28px;
      font-weight: 400;
      .item_top {
        .item_header {
          color: #777777;
          height: 79px;
          align-items: center;
          display: flex;
          .item_label {
            font-weight: 600;
          }
          .item_date {
            margin-left: 248px;
          }
          .arrow {
            margin-left: auto;
            img {
              height: 27px;
              width: 15px;
            }
          }
        }
        .item_desc {
          padding-bottom: 20px;
          font-size: 28px;
          color: #999999;
          border-bottom: 1px solid #f0f1f2;
        }
      }
      .item_bottom {
        .contact_private_doctor {
          padding: 31px 0 35px;
          display: flex;
          justify-content: center;
          img {
            width: 304px;
            height: 51px;
          }
        }
        .doctor_advice {
          padding: 19px 0 40px;
          .label {
            color: #777777;
            font-size: 28px;
            font-weight: 600;
          }
          .doctorInfo {
            margin-top: 18px;
            align-items: center;
            display: flex;
            .img {
              position: relative;
              img {
                width: 122px;
                height: 122px;
              }
              .tag {
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                position: absolute;
                bottom: -10px;
                width: 131px;
                height: 44px;
                background: url("../../assets/imgs/advice2.png") no-repeat;
                background-size: 100% 100%;
              }
            }
            .text {
              margin-left: 30px;
              font-size: 30px;
              .name {
                color: #5b5b5b;
                font-weight: 600;
              }
              .rank {
                color: #777777;
                font-weight: 400;
              }
            }
          }
          .advice {
            font-size: 28px;
            font-weight: 400;
            color: #999999;
            margin-top: 22px;
          }
        }
      }
      &:not(:last-child) {
        margin-bottom: 25px;
      }
    }
  }
}
</style>
