<template>
  <div class="doorsCatheter_container">
    <van-popup v-model="showDatePicker"  position="bottom">
      <van-datetime-picker
        v-model="date"
        type="date"
        :min-date="minDate"
        @cancel="showDatePicker=false"
        @confirm="onDateConfirm"
      />
    </van-popup>
    <van-popup v-model="showPicker"  position="bottom">
        <van-datetime-picker
        v-model="currentTime"
        type="time"
        @confirm="pickConfirm"
         @cancel="showPicker=false"
        :filter="filter"
        />
    </van-popup>
    <div class="rule_container">
      <div class="top">
        <div class="tip_title">费用说明：</div>
        <div class="order_should_know">
          <img src="@/assets/imgs/msg_bjjy_notice.png" />
          下单须知
        </div>
      </div>
      <div class="tip_content">
        <div class="text">1.我们会在接受预约后的2小时内为您办理，如您需要时间紧迫，请勿下单</div>
      </div>
    </div>
    <div class="form_container">
      <div class="form_item patient Underline" @click="selectPatient">
        <div class="label">*就诊人：</div>
        <div class="val">{{familyName}}</div>
        <div class="rightArrow">
          <img :src="rightArrowIcon" />
        </div>
      </div>
      <div class="form_item doctor boldUnderline" @click="selectDoctor">
        <div class="label">*医生：</div>
        <div class="val">{{doctorName}}</div>
        <div class="rightArrow">
          <img :src="rightArrowIcon" />
        </div>
      </div>
      <div class="form_item date underline"  @click="showDatePicker=true">
        <div class="label">*预约日期：</div>
        <div class="val">{{orderDate}}</div>
        <div class="downArrow">
          <img :src="downArrowIcon" />
        </div>
      </div>
      <div class="form_item timeQuantum underline" @click="showPicker=true">
        <div class="label">*时间段：</div>
        <div class="val">{{timeQuantum}}</div>
        <div class="downArrow">
          <img :src="downArrowIcon" />
        </div>
      </div>
      <div class="form_item place boldUnderline">
        <div class="label">*上门地址：</div>
        <div class="val">{{addressName}}</div>
        <div class="rightArrow">
          <img :src="rightArrowIcon" />
        </div>
      </div> 
      <div class="textarea_item diseaseDesc">
        <div class="label">病情描述：</div>
        <div class="input">
          <textarea rows="3" v-model="description" placeholder="请填写病情描述" />
        </div>
      </div>
      <div class="textarea_item remark">
        <div class="label">备&emsp;&emsp;注：</div>
        <div class="input">
          <textarea rows="3" v-model="remarks" placeholder="请填写备注" />
        </div>
      </div>
    </div>
    <div class="button_container">
      <div class="customer_service">
        <img src="@/assets/imgs/icon_bjjy_service.png" />
        客服
      </div>
      <div class="order_immediately" @click="submitForm">立即下单</div>
    </div>
  </div>
</template>

<script>
import {getDefaultAddress,postPrivateService,} from '../../../api/apiz'
export default {
  name: "doorsCatheter",
  data() {
    return {
      showDatePicker:false,
      showPicker:false,
      rightArrowIcon: require("@/assets/imgs/btn_da_next.png"),
      downArrowIcon: require("@/assets/imgs/Drop_down_button.png"),
      currentTime: '08:08',
      timeQuantum:"请选择时间段",
      checkItem:"请选择检查项目",
      doctorName:'请选择医生',
      doctorId:0,
      doctorType:0,
      addressName:"",
      minDate:new Date(),
      date:new Date(),
      orderDate:"请选择预约日期",
      description:"",
      remarks:"",
      serviceId:4667444958860288,
      serviceName:"上门插导尿管",
      familyId:4745078308721778,
      familyName:"测试一付清"
    };
  },
  mounted(){
    this.getDefaultAddressFun()
    if(sessionStorage.getItem('doctorInfo')){
      this.doctorName=JSON.parse(sessionStorage.getItem('doctorInfo')).doctorName
      this.doctorId=JSON.parse(sessionStorage.getItem('doctorInfo')).doctorId
    }
    if(sessionStorage.getItem('patientInfo')){
      this.familyName=JSON.parse(sessionStorage.getItem('patientInfo')).name
      this.familyId=JSON.parse(sessionStorage.getItem('patientInfo')).id
    }
  },
  methods: {
    filter(type, options) {
      if (type === 'minute') {
        return options.filter(option => option <24);
      }
      return options;
    },
    pickConfirm(val){
        let start = val.slice(0,2)
        let end =val.slice(3,5)
        this.timeQuantum=`${start}:00-${end}:00`
        this.showPicker=false   
    },
    selectDoctor(){
      this.$router_({name:'doctorList'})
    },
    selectPatient(){
      this.$router_({name:'familyMember'})
    },
    onDateConfirm(val){
      let year = val.getFullYear()
      let month = val.getMonth()>9?val.getMonth()+1:'0'+(val.getMonth()+1)
      let day = val.getDate()>9?val.getDate():'0'+val.getDate()
      this.orderDate=`${year}-${month}-${day}`
      this.showDatePicker=false
    },
    getDefaultAddressFun(){
      getDefaultAddress().then((res)=>{
        this.addressName=res.data
      })
    },
    submitForm(){
      postPrivateService({
        serviceId:this.serviceId,
        serviceName:this.serviceName,
        familyId:this.familyId,
        familyName:this.familyName,
        orderDate:this.orderDate,
        startTime:this.timeQuantum.slice(0,2),
        endTime:this.timeQuantum.slice(6,8),
        doctorType:0,
        doctorName:this.therapist,
        doctorId:this.therapistId,
        remarks:this.remarks,
        addressName:this.addressName,
        description:this.description
      }).then((res)=>{
        console.log(res)
      })
    }
  }
};
</script>

<style scoped lang="less">
.doorsCatheter_container {
  .rule_container {
    background-color: #ca9267;
    box-sizing: border-box;
    padding: 0.3rem 0.28rem 0.5rem 0.19rem;
    font-size: 0.26rem;
    color: #ffffff;
    height: 2rem;
    .top {
      display: flex;
      font-weight: bold;
      align-items: center;
      .tip_title {
      }
      .order_should_know {
        align-items: center;
        margin-left: auto;
        display: flex;
        img {
          width: 0.33rem;
          height: 0.32rem;
          margin-right: 0.09rem;
        }
      }
    }
    .tip_content {
      margin-top: 0.29rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .form_container {
    background-color: #ffffff;
    .form_item {
      padding: 0 0.49rem 0 0.42rem;
      height: 0.9rem;
      display: flex;
      align-items: center;
      .label {
        font-weight: bold;
        color: #777777;
        font-size: 0.3rem;
        width: 2.74rem;
      }
      .val {
        font-size: 0.28rem;
        color: #717071;
      }
      .rightArrow {
        margin-left: auto;
        img {
          width: 0.18rem;
          height: 0.27rem;
        }
      }
      .downArrow {
        margin-left: auto;
        img {
          width: 0.21rem;
          height: 0.19rem;
        }
      }
    }
    .underline {
      border-bottom: 0.01rem solid #f5f3f1;
    }
    .boldUnderline {
      border-bottom: 0.21rem solid #f5f3f1;
    }
    .textarea_item {
      height: 1.52rem;
      width: 7.02rem;
      border: 0.01rem solid #f1eeef;
      margin: 0.22rem auto 0rem;
      font-size: 0.3rem;
      color: #777777;
      box-sizing: border-box;
      display: flex;
      padding: 0.22rem 0 0 0.27rem;
      .label {
        font-weight: bold;
      }
      .input {
        flex: 1;
        textarea {
          width: 100%;
        }
      }
    }
  }
  .button_container {
    position: fixed;
    bottom: 0;
    margin-top: 0.2rem;
    font-size: 0.36rem;
    display: flex;
    height: 0.98rem;
    .customer_service {
      align-items: center;
      width: 2rem;
      display: flex;
      color: #289f9c;
      justify-content: center;
      background-color: #c5e7dd;
      img {
        margin-right: 0.18rem;
        width: 0.4rem;
        height: 0.4rem;
      }
    }
    .order_immediately {
      justify-content: center;
      display: flex;
      align-items: center;
      width: 5.5rem;
      background-color: #3eb4a1;
      color: #ffffff;
    }
  }
}
</style>
<style>
@import url("../../../assets/less/vantstyle/picker.css");
</style>