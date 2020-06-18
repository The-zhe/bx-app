<template>
  <div class="medicalOrder_container">
    <div class="order_item" :key="orderItem.date" v-for="orderItem in orderList">
      <div class="orderInfo">
        <div class="avatar">
          <img :src="orderItem.doctorImg"/>
          <div class="tag">{{orderItem.tagName}}</div>
        </div>
        <div class="doctor">
          <div class="name">{{orderItem.doctorName}}</div>
          <div class="rank">{{orderItem.doctorRank}}</div>
        </div>
        <div class="text">
          <div class="date">{{orderItem.date}}</div>
          <div class="orderType">
            <img :src="orderItem.orderType?shortTimeImg:longTimeImg"/>
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
          <div class="planDate">{{orderItem.startTime}}{{orderItem.endTime==''?'':`至${orderItem.endTime}`}}</div>
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
</template>

<script>
  export default {
    components: {},
    name: 'medicalOrder',
    data(){
        return{
          shortTimeImg:require('@/assets/imgs/icon_wdda_short.png'),
          longTimeImg:require('@/assets/imgs/icon_wdda_long.png'),
          orderList:[
            {
              doctorName:'李英',
              doctorRank:'副主任医师',
              date:'2019-10-12 12:20',
              doctorImg: require("@/assets/imgs/img_wdda_head.png"),
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
              doctorImg: require("@/assets/imgs/img_wdda_head.png"),
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
        }
    },
    created(){

    },
    computed:{
    },
    watch:{

    },
    mounted(){
    },
    methods:{

    }
}
</script>

<style lang="less" scope>
.medicalOrder_container{
  font-weight: 400;
  .order_item{
    border-radius: 0.14rem;
    box-shadow: 0 0 0.08rem #a9a9a9;
    box-sizing: border-box;
    width: 7rem;
    padding: 0 0.2rem ;
    background: #fff;
    margin-bottom: 0.25rem;
    .orderInfo{
      border-bottom: 0.01rem solid #F5F5F6;
      display: flex;
      font-size: 0.3rem;
      padding:  0.21rem 0 0.23rem;
      align-items: center;
      .avatar{
        position: relative;
        img{
          width: 1.22rem;
          height: 1.22rem;
        }
        .tag{
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 0.2rem;
          bottom: -0.1rem;
          position: absolute;
          width: 1.31rem;
          height: 0.44rem;
          background: url('../../../../../assets/imgs/advice2.png') no-repeat;
          background-size: 100% 100%;
        }
      }
      .doctor{
        margin-left: 0.29rem;
        .name{
          color:#5B5B5B;
          font-weight: bold;
          margin-top: 0.11rem;
        }
        .rank{
          color: #777777;
          
          margin-top: 0.11rem;
        }
      }
      .text{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 0.09rem;
        margin-left: auto;
        .date{
          color: #777777;
          margin-top: 0.11rem;
        }
        .orderType{
          margin-top: 0.11rem;
          img{
            width: 0.92rem;
            height: 0.46rem;
          }
        }
      }
    }
    .orderDesc{
      border-bottom: 0.01rem solid #F5F5F6;
      padding: 0.23rem 0.09rem 0.28rem;
      font-size: 0.28rem;
      .label{
        font-weight: bold;
        color: #777777;
      }
      .text{
        margin-top: 0.09rem;
        color: #999999;
      }
    }
    .medicinePlan{
      padding: 0.25rem 0.09rem 0.42rem;
      .header{
        display: flex;
        justify-content: space-between;
        font-size: 0.28rem;
        color: #777777;
        .label{
          font-weight: bold;
        }
        .planDate{

        }
      }
      .PlanList{
        font-size: 0.26rem;
        color: #999999;
        .medicineItem{
          margin-top: 0.2rem;
          display: flex;
          justify-content: space-between;
          .name{
            width: 2.6rem;
          }
          .unit{
            width: 0.5rem;
          }
          .specs{
            width: 0.4rem;
            white-space: nowrap;
          }
          .yongfa{
            width: 1.54rem;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
 </style>
