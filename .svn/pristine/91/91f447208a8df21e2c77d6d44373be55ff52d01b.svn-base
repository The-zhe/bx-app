<template>
  <div class="orderHistory_container">
    <div class="pop_container">
      <search-popup ref="pop" @confirm="searchList" :typeList="typeList" :typeTitle="typeTitle"></search-popup>
    </div>
    <div class="list_container">
      <div class="order_item" :key="orderItem.date" v-for="orderItem in orderList">
        <div class="orderInfo">
          <div class="avatar">
            <img :src="orderItem.doctorImg" />
            <div class="tag">{{orderItem.tagName}}</div>
          </div>
          <div class="doctor">
            <div class="name">{{orderItem.doctorName}}</div>
            <div class="rank">{{orderItem.doctorRank}}</div>
          </div>
          <div class="text">
            <div class="date">{{orderItem.date}}</div>
            <div class="orderType">
              <img :src="orderItem.orderType?shortTimeImg:longTimeImg" />
            </div>
          </div>
        </div>
        <div class="orderDesc">
          <div class="label">医嘱内容：</div>
          <div class="text">{{orderItem.order}}</div>
        </div>
        <div class="medicinePlan">
          <div class="header">
            <div class="label">用药计划：</div>
            <div
              class="planDate"
            >{{orderItem.startTime}}{{orderItem.endTime==''?'':`至${orderItem.endTime}`}}</div>
          </div>
          <div class="PlanList">
            <div class="medicineItem" v-for="medicineItem in orderItem.medicinePlan">
              <div class="name">{{medicineItem.name}}</div>
              <div class="unit">{{medicineItem.unit}}</div>
              <div class="specs">{{medicineItem.specs}}</div>
              <div class="yongfa">{{medicineItem.yongfa}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchPopup from "../../components/searchPopup";
export default {
  components: { searchPopup },
  name: "orderHistory",
  data() {
    return {
      typeList: ["长期", "临时"],
      typeTitle: "医嘱类型",
shortTimeImg:require('../../assets/imgs/icon_wdda_short.png'),
          longTimeImg:require('../../assets/imgs/icon_wdda_long.png'),
          orderList:[
            {
              doctorName:'李英',
              doctorRank:'副主任医师',
              date:'2019-10-12 12:20',
              doctorImg: require("../../assets/imgs/img_wdda_head.png"),
              tagName: "私人医生",
              orderType:0,
              order:'这段时间请按照用药计划，按时服药，我们会密切观 察您的健康状况。',
              startTime:'2019-12-20',
              endTime:'2020-01-20',
              medicinePlan:[
                {
                  name:'快客复方氨酚烷胺胶囊',
                  unit:'0.5g',
                  specs:'2粒',
                  yongfa:'口服一日三次',
                },
                {
                  name:'头孢地尼胶囊',
                  unit:'0.5g',
                  specs:'2粒',
                  yongfa:'口服一日三次',                  
                }
              ]
            },
            {
              doctorName:'李英',
              doctorRank:'副主任医师',
              date:'2019-11-19 15:30',
              doctorImg: require("../../assets/imgs/img_wdda_head.png"),
              tagName: "私人医生",
              orderType:1,
              order:'这段时间请按照用药计划，按时服药，我们会密切观 察您的健康状况。',
              startTime:'2019-11-20',
              endTime:'',
              medicinePlan:[
                {
                  name:'布洛芬缓释胶囊',
                  unit:'0.5g',
                  specs:'1粒',
                  yongfa:'口服一日两次',
                },
              ]
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
    },
    searchList(val){
      console.log(val)
    }
  }
};
</script>

<style lang="less" scope>
.orderHistory_container {
  padding:  25px 25px 0;
  font-weight: 400;
  .order_item{

    border-radius: 14px;
    box-shadow: 0 0 8px #a9a9a9;
    box-sizing: border-box;
    width: 700px;
    padding: 0 20px ;
    background: #fff;
    margin-bottom: 25px;
    .orderInfo{
      border-bottom: 1px solid #F5F5F6;
      display: flex;
      font-size: 30px;
      padding:  21px 0 23px;
      align-items: center;
      .avatar{
        position: relative;
        img{
          width: 122px;
          height: 122px;
        }
        .tag{
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 20px;
          bottom: -10px;
          position: absolute;
          width: 131px;
          height: 44px;
          background: url('../../assets/imgs/advice2.png') no-repeat;
          background-size: 100% 100%;
        }
      }
      .doctor{
        margin-left: 29px;
        .name{
          color:#5B5B5B;
          font-weight: 600;
          margin-top: 11px;
        }
        .rank{
          color: #777777;
          
          margin-top: 11px;
        }
      }
      .text{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 9px;
        margin-left: auto;
        .date{
          color: #777777;
          margin-top: 11px;
        }
        .orderType{
          margin-top: 11px;
          img{
            width: 92px;
            height: 46px;
          }
        }
      }
    }
    .orderDesc{
      border-bottom: 1px solid #F5F5F6;
      padding: 23px 9px 28px;
      font-size: 28px;
      .label{
        font-weight: 600;
        color: #777777;
      }
      .text{
        margin-top: 9px;
        color: #999999;
      }
    }
    .medicinePlan{
      padding: 25px 9px 42px;
      .header{
        display: flex;
        justify-content: space-between;
        font-size: 28px;
        color: #777777;
        .label{
          font-weight: 600;
        }
        .planDate{

        }
      }
      .PlanList{
        font-size: 26px;
        color: #999999;
        .medicineItem{
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          .name{
            width: 260px;
          }
          .unit{
            width: 50px;
          }
          .specs{
            width: 40px;
            white-space: nowrap;
          }
          .yongfa{
            width: 154px;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
