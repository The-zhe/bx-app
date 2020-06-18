<template>
  <div class="consultRecord_container">
    <div class="search_container">
      <div class="time start_time">
        {{startTime==''?'开始时间':startTime}}
        <calendar
          title
          style="opacity:0;position:absolute; left:0.02rem; top:-0.02rem; width:1.14rem;height:0.15rem"
          v-model="startTime"
        ></calendar>
        <img src="@/assets/imgs/btn_da_time.png" />
      </div>
      <div class="crossbar"></div>
      <div class="time end_time">
        {{endTime==''?'结束时间':endTime}}
        <calendar
          title
          style="opacity:0; position:absolute; left:0.04rem; top:-0.02rem; width:1.14rem;height:0.15rem"
          v-model="endTime"
        ></calendar>
        <img src="@/assets/imgs/btn_da_time.png" />
      </div>
      <div class="search_button" @click="searchList">确定</div>
    </div>
    <div class="record_container">
      <div class="item" v-for="item in consultList">
        <div class="item_header">
          <div class="img">
            <img :src="item.imgUrl" />
            <div class="tag">{{item.tagName}}</div>
          </div>
          <div class="text">
            <div class="name">{{item.name}}</div>
            <div class="rank">{{item.workDoctor}}</div>
          </div>
          <div class="right">
            <div class="top">
              <div class="consult_date">{{item.firstSendTime}}</div>
              <div class="arrow" v-if="item.catCd=='0'">
                <img src="@/assets/imgs/btn_da_next.png" />
              </div>
            </div>
            <div class="bottom">
            <div class="chat_time" v-if="item.catCd!='0'">
              {{item.talkTime}}”
            </div>
            <div class="type">
              <img :src="item.catCd=='0'?textTypeIcon:item.catCd=='1'?phoneTypeIcon:videoTypeIcon" />
            </div>
            </div>
          </div>
        </div>
        <div class="consult_info" v-if="item.catCd=='0'">
          <div class="label">资讯内容：</div>
          <div class="consult_text">{{item.firstMsg}}</div>
        </div>
        <div class="newest_response" v-if="item.catCd=='0'">
          <div class="header">
            <div class="label">最新回复：</div>
            <div class="response_time">{{item.lastSendTime}}</div>
          </div>
          <div class="response_text">{{item.lastMsg}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Calendar } from "vux";
import { getConsultList } from '@/api/apiz';
export default {
  components: { Group, Calendar },
  name: "consultRecord",
  data() {
    return {
      phoneTypeIcon: require("@/assets/imgs/icon_syda_call.png"),
      videoTypeIcon: require("@/assets/imgs/icon_syda_video.png"),
      textTypeIcon: require("@/assets/imgs/icon_syda_graphic.png"),
      startTime: "",
      endTime: "",
      consultList: []
    };
  },
  created() {},
  computed: {
    fixedStartTime() {
      return this.startTime + " 00:00:00";
    },
    fixedEndTime() {
      return this.endTime + " 23:59:59";
    }
  },
  watch: {},
  mounted() {
    this.getConsultListFun();
  },
  methods: {
    searchList() {
      this.getConsultListFun()
    },
    getConsultListFun() {
      getConsultList(this.fixedStartTime, this.fixedEndTime).then(res => {
        this.consultList=res.data.records
      });
    }
  }
};
</script>

<style lang="less" scope>
.consultRecord_container {
  font-weight: 400;
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
      border-radius: 0.25rem;
      width: 1.41rem;
      height: 0.61rem;
    }
  }
  .record_container {
    padding-bottom: 0.25rem;
    .item {
      border-radius: 0.14rem;
      box-shadow: 0 0 0.05rem #a9a9a9;
      margin: 0 auto;
      width: 7rem;
      box-sizing: border-box;
      background-color: #fff;
      padding:  0 0.2rem;
      .item_header {
        height: 1.68rem;
        display: flex;
        align-items: center;
        .img {
          position: relative;
          img {
            width: 1.22rem;
            height: 1.22rem;
          }
          .tag {
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.2rem;
            position: absolute;
            bottom: -0.1rem;
            width: 1.31rem;
            height: 0.44rem;
            background: url("../../../../assets/imgs/advice2.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        .text {
          margin-left: 0.3rem;
          font-size: 0.3rem;
          .name {
            color: #5b5b5b;
            font-weight: bold;
          }
          .rank {
            color: #777777;
            font-weight: 400;
          }
        }
        .right {
          margin-left: auto;
          display: flex;
          flex-direction: column;

          .top {
            align-items: center;
            display: flex;
            .consult_date {
              color: #777777;
              font-size: 0.3rem;
            }
            .arrow {
              margin-left: 0.18rem;
              img {
                width: 0.15rem;
                height: 0.27rem;
              }
            }
          }
          .bottom{
            margin-top: 0.18rem;
            display: flex;
            align-items: center;
              margin-left: auto;
            .chat_time{

              margin-right: 0.3rem;
              font-size: 0.3rem;
              color: #777777;
            }
                      .type {
            align-self: flex-end;
            img {
              width: 0.52rem;
            }
          }
          }
        }
      }
      .consult_info {
        border-top: 0.02rem solid #EAEBEC;
        border-bottom: 0.02rem solid #EAEBEC;
        padding: 0.23rem 0.08rem 0.3rem;
        font-size: 0.28rem;
          font-weight: 400;
        .label{
          color: #777777;
          font-weight: bold;
        }
        .consult_text{
          color: #999999;
        }
      }
      .newest_response {
        padding: 0.24rem 0.08rem 0.43rem;
        .header {
          color: #777777;
          display: flex;
          align-items: center;
          .label {
            font-weight: bold;
            font-size: 0.28rem;
          }
          .response_time {
            margin-left: auto;
            font-size: 0.3rem;
          }
        }
        .response_text {
          color: #999999;
          font-size: 0.26rem;
        }
      }
      &:not(:last-child){
        margin-bottom: 0.25rem;
      }
    }
  }
}
</style>
