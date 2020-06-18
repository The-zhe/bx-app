/*
 * @Author: zzh 
 * @Date: 2019-12-26 14:32:57 
 * @Last Modified by: zzh
 * @Last Modified time: 2020-01-20 17:02:22
 */
<template>
  <div class="outpatientRegistrate_container">
    <van-popup v-model="showRegisterTypePicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="RegisterTypeColumns"
        @cancel="showRegisterTypePicker = false"
        @confirm="onRegisterTypeConfirm"
      />
    </van-popup>
    <van-popup v-model="showTimeQuantumPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="TimeQuantumColumns"
        @cancel="showTimeQuantumPicker = false"
        @confirm="onTimeQuantumConfirm"
      />
    </van-popup>
    <van-popup v-model="showSexPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="SexColumns"
        @cancel="showSexPicker = false"
        @confirm="onSexConfirm"
      />
    </van-popup>
    <van-popup v-model="showCertificatesTypePicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="CertificatesTypeColumns"
        @cancel="showCertificatesTypePicker = false"
        @confirm="onCertificatesTypeConfirm"
      />
    </van-popup>
    <van-popup v-model="showAppointTimePicker" position="bottom">
      <van-datetime-picker
        v-model="formData.currentDate"
        type="date"
        :min-date="minDate"
        @confirm="onAppointTimeConfirm"
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
        <div class="text">1.该服务为普通门诊挂号，不含名医加号服务。如需挂名医门 诊，请前往“名医直通”中的“名医门诊”预约...</div>
      </div>
    </div>
    <div class="appointmentList_container">
      <div class="mainTitle">预约单填写</div>
      <div class="form_container">
        <div class="form_item name">
          <div class="item_label">*姓名：</div>
          <div class="item_input" :class="{'error':memberNameError}">
            <input type="text" v-model.trim="formData.uploadData.memberName" placeholder="请输入姓名" />
          </div>
        </div>
        <div class="form_item sex" @click="showSexPicker = true">
          <div class="item_label">*性别：</div>
          <div class="item_input" :class="{'error':sexError}">
            <van-field readonly clickable label :value="formData.sex" placeholder="请选择性别" />
          </div>
          <div class="item_downArrow">
            <img :src="downArrowUrl" />
          </div>
        </div>
        <div class="form_item age">
          <div class="item_label">*年龄：</div>
          <div class="item_input" :class="{'error':ageError}">
            <input type="text" v-model.trim="formData.uploadData.age" placeholder="请输入年龄" />
          </div>
        </div>
        <div class="border"></div>
        <div class="form_item certificatesType" @click="showCertificatesTypePicker = true">
          <div class="item_label">*证件类型：</div>
          <div class="item_input" :class="{'error':certificatesTypeError}">
            <van-field
              readonly
              clickable
              label
              :value="formData.certificatesType"
              placeholder="请选择证件类型"
            />
          </div>
          <div class="item_downArrow">
            <img :src="downArrowUrl" />
          </div>
        </div>
        <div class="form_item medicalNum">
          <div class="item_label">*证件号码：</div>
          <div class="item_input" :class="{'error':medicalNumError}">
            <input type="text" v-model.trim="formData.uploadData.medicalNum" placeholder="请输入医保卡号" />
          </div>
        </div>
        <div class="border"></div>
        <div class="form_item hospital" @click="selectHospital">
          <div class="item_label">*医院：</div>
          <div class="item_input" :class="{'error':hospitalIdError}">
            <van-field readonly clickable label :value="formData.hospital" placeholder="请选择医院" />
          </div>
          <div class="item_rightArrow">
            <img :src="rightArrowUrl" />
          </div>
        </div>
        <div class="form_item department" @click="selectDepartment">
          <div class="item_label">*科室：</div>
          <div class="item_input" :class="{'error':departmentIdError}">
            <van-field readonly clickable label :value="formData.department" placeholder="请选择科室" />
          </div>
          <div class="item_rightArrow">
            <img :src="rightArrowUrl" />
          </div>
        </div>
        <div class="form_item registerType" @click="showRegisterTypePicker = true">
          <div class="item_label">*挂号类型：</div>
          <div class="item_input" :class="{'error':registerTypeError}">
            <van-field
              readonly
              clickable
              label
              :value="formData.registerType"
              placeholder="请选择挂号类型"
            />
          </div>
          <div class="item_downArrow">
            <img :src="downArrowUrl" />
          </div>
        </div>
        <div class="form_item doctor">
          <div class="item_label">&ensp;医生姓名：</div>
          <div class="item_input">
            <input type="text" v-model.trim="formData.uploadData.doctor" placeholder="请输入医生姓名" />
          </div>
        </div>
        <div class="form_item appointTime" @click="showAppointTimePicker=true">
          <div class="item_label">*预约时间：</div>
          <div class="item_input" :class="{'error':apntDateError}">
            <input
              type="text"
              v-model.trim="formData.uploadData.apntDate"
              placeholder="请选择预约时间"
              readonly
            />
          </div>
          <div class="item_downArrow">
            <img :src="downArrowUrl" />
          </div>
        </div>
        <div class="form_item timeQuantum">
          <div class="item_label">*时间段：</div>
          <div class="item_input" :class="{'error':apntDayError}">
            <van-field
              readonly
              clickable
              label
              :value="formData.timeQuantum"
              placeholder="请选择时间段"
              @click="showTimeQuantumPicker = true"
            />
          </div>
          <div class="item_downArrow">
            <img :src="downArrowUrl" />
          </div>
        </div>
        <div class="form_item contactNum">
          <div class="item_label">*联系电话：</div>
          <div class="item_input" :class="{'error':phoneError}">
            <input type="text" v-model.trim="formData.uploadData.phone" placeholder="请输入联系电话" />
          </div>
        </div>
        <div class="border"></div>
        <div class="form_item hasMedicalCard">
          <div class="item_label">*是否有医保卡：</div>
          <div class="item_input" style="margin-top:0.05rem">
            <van-switch
              v-model="formData.hasMedicalCard"
              size="0.18rem"
              active-color="#3EB4A1"
              inactive-color="#D7D7D7"
            />
          </div>
          <div class="val">{{formData.hasMedicalCard?'有':'无'}}</div>
        </div>
        <div class="form_item hasHospitalCard" v-if="!formData.hasMedicalCard">
          <div class="item_label">*该医院就诊卡：</div>
          <div class="item_input" style="margin-top:0.05rem">
            <van-switch
              v-model="formData.hasHospitalCard"
              size="0.18rem"
              active-color="#3EB4A1"
              inactive-color="#D7D7D7"
            />
          </div>
          <div class="val">{{formData.hasHospitalCard?'有':'无'}}</div>
        </div>
        <div class="form_item cardNum" v-if="formData.hasMedicalCard||formData.hasHospitalCard">
          <div
            class="item_label"
          >*{{formData.hasMedicalCard?'医保卡号':formData.hasHospitalCard?'就诊卡号':''}}：</div>
          <div class="item_input" :class="{'error':cardNumError}">
            <input
              type="text"
              v-model.trim="formData.uploadData.cardNum"
              :placeholder="`请输入${formData.hasMedicalCard?'医保卡号':formData.hasHospitalCard?'就诊卡号':''}`"
            />
          </div>
        </div>
        <div class="form_item sendWay" @click="setSendWay">
          <div class="item_label">*选择证件卡递送方式</div>
          <div class="item_val">{{hasSetSendWay?sendWay.name:'去设置'}}</div>
          <div class="item_rightArrow">
            <img :src="rightArrowUrl" />
          </div>
        </div>
        <div class="form_item way sendWay_address" v-if="hasSetSendWay">
          <div class="item_label">{{sendWayAddressLabel}}</div>
          <div class="item_val">{{sendWay.index==2?sendWay.pickAddress:sendWay.address}}</div>
        </div>
        <div class="form_item way sendWay_receiver" v-if="hasSetSendWay">
          <div class="item_label">{{sendWayReceiverLabel}}</div>
          <div class="item_val">{{sendWay.index==2?sendWay.pickName:sendWay.receiver}}</div>
        </div>
        <div class="form_item returnWay" @click="setReturnWay">
          <div class="item_label">*选择证件卡递回方式</div>
          <div class="item_val">{{hasSetReturnWay?returnWay.name:'去设置'}}</div>
          <div class="item_rightArrow">
            <img :src="rightArrowUrl" />
          </div>
        </div>
        <div class="form_item way returnWay_address" v-if="hasSetReturnWay">
          <div class="item_label">{{returnWayAddressLabel}}</div>
          <div class="item_val">{{returnWay.address}}</div>
        </div>
        <div class="form_item way returnWay_receiver" v-if="hasSetReturnWay">
          <div class="item_label">{{returnWayKeeperLabel}}</div>
          <div class="item_val">{{returnWay.keeper}}</div>
        </div>
        <div class="border"></div>
        <div class="disease_desc">
          <div class="label">病情描述：</div>
          <div class="input">
            <textarea rows="3" maxlength="78" v-model="formData.uploadData.diseaseDesc"></textarea>
          </div>
        </div>
        <div class="tip">1.我们会根据您预约的时间安排医生，根据紧急情 况费用会有所不同！也会应为时间的关系预约不到 适当的医生。如果您确实时间紧急，请谨慎下单！</div>
        <div class="customer_service">客服电话：400-800-1808</div>
      </div>
      <div class="submit_button">确认提交</div>
    </div>
  </div>
</template>

<script>
import {
  getAppointList,
  PostappointData,
} from "@/api/apiz";
export default {
  components: {},
  name: "outpatientRegistrate",
  props: [],
  data() {
    return {
      downArrowUrl: require("../../assets/imgs/Drop_down_button.png"),
      rightArrowUrl: require("@/assets/imgs/btn_da_next.png"),
      formData: {
        uploadData: {
          memberId: 4727089507456000,
          serviceId: 1,
          memberName: "",
          medicalNum: "",
          hospitalId: "",
          departmentId: "",
          registerType: "",
          doctor: "",
          apntDate: "",
          apntDay: "",
          phone: "",
          age: "",
          sex: "",
          certificatesType: "",
          cardNum: "",
          diseaseDesc: ""
        },
        hasMedicalCard: true,
        hasHospitalCard: true,
        currentDate: "",
        hospital: "",
        department: "",
        registerType: "",
        timeQuantum: "",
        sex: "",
        certificatesType: ""
      },

      showRegisterTypePicker: false,
      showTimeQuantumPicker: false,
      showAppointTimePicker: false,
      showSexPicker: false,
      showCertificatesTypePicker: false,



      RegisterTypeColumns: ["普通", "专家"],
      TimeQuantumColumns: ["上午", "下午", "全天"],
      SexColumns: ["女", "男"],
      CertificatesTypeColumns: ["身份证", "护照"],
      minDate: new Date(),

      memberNameError: false,
      medicalNumError: false,
      hospitalIdError: false,
      departmentIdError: false,
      registerTypeError: false,
      apntDateError: false,
      apntDayError: false,
      phoneError: false,
      ageError: false,
      sexError: false,
      certificatesTypeError: false,
      cardNumError: false,

      sendWay:{},
      returnWay:{},

      leavePageFlag:true
    };
  },
  created() {},
  computed: {
    hasSetSendWay(){
      return Object.keys(this.sendWay).length>0
    },
    hasSetReturnWay(){
      return Object.keys(this.returnWay).length>0
    },
    sendWayAddressLabel(){
      if(Object.keys(this.sendWay).length>0){
        if(this.sendWay.index==0){
          return '寄送地址'
        }else if(this.sendWay.index==1){
          return '交送地址'
        }else if(this.sendWay.index==2){
          return '取件地址'
        }
      }else{
        return ''
      }
    },
    sendWayReceiverLabel(){
      if(Object.keys(this.sendWay).length>0){
        if(this.sendWay.index==0||this.sendWay.index==1){
          return '收件人'
        }else if(this.sendWay.index==2){
          return '联系姓名'
        }
      }else{
        return ''
      }
    },
    returnWayAddressLabel(){
      if(Object.keys(this.returnWay).length>0){
        if(this.returnWay.index==0){
          return '取件地址'
        }else if(this.returnWay.index==1){
          return '代管地址'
        }else if(this.returnWay.index==2){
          return '地址'
        }
      }else{
        return ''
      }
    },
    returnWayKeeperLabel(){
      if(Object.keys(this.returnWay).length>0){
        if(this.returnWay.index==0||this.returnWay.index==1){
          return '保管人'
        }else if(this.returnWay.index==2){
          return '联系姓名'
        }
      }else{
        return ''
      }
    },
  },
  watch: {},
  mounted() {

    if(sessionStorage.getItem('formData')){
      this.formData =JSON.parse(sessionStorage.getItem('formData'))
    }
    if(sessionStorage.getItem('sendWay')){
      this.sendWay=JSON.parse(sessionStorage.getItem('sendWay'))
    }
    if(sessionStorage.getItem('returnWay')){
      this.returnWay=JSON.parse(sessionStorage.getItem('returnWay'))
    }
    if(sessionStorage.getItem('hospital')){
      this.formData.hospital = sessionStorage.getItem('hospital')
    }
    if(sessionStorage.getItem('departmentInfo')){
      this.formData.department = JSON.parse(sessionStorage.getItem('departmentInfo')).SelectDepartment
    }
  },
  methods: {
    onRegisterTypeConfirm(value, index) {
      this.formData.registerType = value;
      this.formData.uploadData.registerType = index;
      this.showRegisterTypePicker = false;
    },
    onTimeQuantumConfirm(value, index) {
      this.formData.timeQuantum = value;
      this.formData.uploadData.apntDay = index;
      this.showTimeQuantumPicker = false;
    },
    onSexConfirm(value, index) {
      this.formData.sex = value;
      this.formData.uploadData.sex = index;
      this.showSexPicker = false;
    },
    onCertificatesTypeConfirm(value, index) {
      this.formData.certificatesType = value;
      this.formData.uploadData.certificatesType = index;
      this.showCertificatesTypePicker = false;
    },
    onAppointTimeConfirm(value) {
      let year = value.getFullYear();
      let month = value.getMonth() + 1;
      let day = value.getDate();
      this.formData.uploadData.apntDate = `${year}-${
        month > 10 ? month : `0${month}`
      }-${day}`;
      this.showAppointTimePicker = false;
    },
    selectHospital(){
      this.leavePageFlag=false
      this.$nextTick(()=>{
        sessionStorage.setItem('formData',JSON.stringify(this.formData))
        this.$router_({name:'selectHospital'})
      })
    },
    selectDepartment(){
      if(this.formData.hospital)
      this.leavePageFlag=false
      this.$nextTick(()=>{
        sessionStorage.setItem('formData',JSON.stringify(this.formData))      
        this.$router_({name:'selectDepartment'})
      })
    },
    setSendWay(){
      this.leavePageFlag=false
      this.$nextTick(()=>{
        sessionStorage.setItem('formData',JSON.stringify(this.formData))
        this.$router_({name:'sendWay'})
      })

    },
    setReturnWay(){
      this.$nextTick(()=>{
        sessionStorage.setItem('formData',JSON.stringify(this.formData))
        this.$router_({name:'returnWay'})
      })
    },
    submitForm() {
      PostappointData(this.formData.uploadData).then(res => {
        console.log(res);
      });
    },
    validateForm() {
      this.memberNameError = Boolean(!this.formData.uploadData.memberName);
      this.sexError = Boolean(!(this.formData.uploadData.sex == ""));
      this.ageError = Boolean(!this.formData.uploadData.age);
      this.medicalNumError = Boolean(!this.formData.uploadData.medicalNum);
      this.hospitalIdError = Boolean(!this.formData.uploadData.hospitalId);
      this.departmentIdError = Boolean(!this.formData.uploadData.departmentId);
      this.registerTypeError = Boolean(
        !(this.formData.uploadData.registerType == "")
      );
      this.apntDateError = Boolean(!this.formData.uploadData.apntDate);
      this.apntDayError = Boolean(!(this.formData.uploadData.apntDay == ""));
      this.phoneError = Boolean(!this.formData.uploadData.phone);
      this.$nextTick(() => {
        if (
          !this.memberNameError &&
          !this.medicalNumError &&
          !this.sexError &&
          !this.ageError &&
          !this.hospitalIdError &&
          !this.departmentIdError &&
          !this.registerTypeError &&
          !this.apntDateError &&
          !this.apntDayError &&
          !this.phoneError
        ) {
          this.submitForm();
        }
      });
    }
  },
  beforeDestroy(){
    if(this.leavePageFlag){
      sessionStorage.removeItem('formData')
      sessionStorage.removeItem('hospital')
      sessionStorage.removeItem('departmentInfo')
      sessionStorage.removeItem('sendWay')
      sessionStorage.removeItem('returnWay')
    }
  }
};
</script>

<style lang="less" scope>
.outpatientRegistrate_container {
  .rule_container {
    background-color: #ca9267;
    box-sizing: border-box;
    padding: 0.3rem 0.28rem 0.3rem 0.19rem;
    font-size: 0.26rem;
    color: #ffffff;
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
      margin-top: 0.16rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .appointmentList_container {
    .mainTitle {
      height: 0.92rem;
      color: #777777;
      font-size: 0.3rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      background-color: #fff;
      padding-left: 0.52rem;
    }
    .form_container {
      box-sizing: border-box;
      padding-bottom: 0.31rem;
      background-color: #fff;
      margin-top: 0.21rem;
      .form_item {
        padding-left: 0.52rem;
        padding-right: 0.43rem;
        height: 0.9rem;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 0.02rem solid #f4f4f4;
        .item_label {
          width: 2.9rem;
          font-size: 0.3rem;
          color: #767777;
          font-weight: bold;
        }
        .item_input {
          margin-left: 0.15rem;
          input {
            font-size: 0.28rem;
            color: #777777;
          }
          ::-webkit-input-placeholder {
            /* WebKit browsers */
            color: #bcbcbc;
          }

          ::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #bcbcbc;
          }

          :-ms-input-placeholder {
            /* Internet Explorer 10+ */
            color: #bcbcbc;
          }
        }
        .error {
          ::-webkit-input-placeholder {
            /* WebKit browsers */
            color: red;
          }

          ::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: red;
          }

          :-ms-input-placeholder {
            /* Internet Explorer 10+ */
            color: red;
          }
        }
        .item_val {
          margin-left: auto;
          color: #777777;
          font-size: 0.3rem;
          margin-right: 0.12rem;
        }
        .item_downArrow {
          margin-left: auto;
          img {
            height: 0.19rem;
          }
        }
        .item_rightArrow {
          img {
            height: 0.27rem;
            width: 0.18rem;
          }
        }
        .val {
          color: #777777;
          font-size: 0.3rem;
          margin-left: 0.18rem;
        }
      }
      .way{
        .item_label{
          margin-left: 0.2rem;
          font-weight: 400;
          width: 2.6rem;
        }
        .item_val{

          margin-left: 0rem;
        }
      }
      .border {
        height: 0.21rem;
        width: 100%;
        background-color: #f4f4f4;
      }
      .disease_desc {
        display: flex;
        border: 0.02rem solid #ececec;
        margin: 0.25rem;
        width: 7rem;
        height: 1.58rem;
        box-sizing: border-box;
        padding: 0.2rem 0.26rem;
        border-radius: 0.08rem;
        .label {
          color: #777777;
          font-size: 0.3rem;
          font-weight: bold;
        }
        .input {
          flex: 1;
          textarea {
            width: 100%;
            color: #777777;
          }
        }
      }
      .tip {
        box-sizing: border-box;
        padding: 0.3rem 0.24rem 0.64rem;
        width: 7rem;
        border: 0.02rem solid #ececec;
        margin: 0.25rem;
        border-radius: 0.08rem;
        font-size: 0.26rem;
        color: #939393;
      }
      .customer_service {
        color: #bcbcbc;
        font-size: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .submit_button {
      height: 0.98rem;
      width: 100%;
      font-weight: 0.36rem;
      color: #ffffff;
      justify-content: center;
      align-items: center;
      display: flex;
      background-color: #3eb4a1;
    }
  }
}
</style>
<style>
@import url("../../assets/less/vantstyle/cell.css");
@import url("../../assets/less/vantstyle/picker.css");
.van-field__label {
  display: none;
}
.van-cell {
  padding-left: 0rem;
}
</style>