<template>

  <div class="returnWay_container">
    <van-popup v-model="showReturnWayPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="returnWayList"
        @cancel="showreturnWayPicker = false"
        @confirm="onReturnWayConfirm"
      />
    </van-popup>
    <div class="header_tip">
      <div class="icon">
        <img src="@/assets/imgs/msg_bjjy_tips.png" />
      </div>
      <div class="text">
        我们会在服务完成后发送消息及时告知预约结果。您可选 择我方将证件资料递还方式。
      </div>
    </div>
    <div class="main_content">
      <div class="return_way">
        <div class="choose_return_way" @click="showReturnWayPicker= true">
          <div class="label">选择证件交回方式</div>
          <div class="input">
            <div class="value">{{returnWay}}</div>
            <div class="arrow">
              <img src="@/assets/imgs/Drop_down_button.png" />
            </div>
          </div>
        </div>
        <div class="form_container">
          <div class="form_item" v-if="returnWayIndex==0||returnWayIndex==1">
            <div class="item_label">{{returnWayIndex==0?'取件':'代管'}}地址：</div>
            <div class="item_input">{{address}}</div>
          </div>
          <div class="form_item receiver" v-if="returnWayIndex==0||returnWayIndex==1">
            <div class="item_label">保&ensp;管&ensp;人：</div>
            <div class="item_input">{{keeper}}</div>
          </div>
          <div class="form_item" v-if="returnWayIndex==0||returnWayIndex==1">
            <div class="item_label">服务点电话：</div>
            <div class="item_input">{{servicePhone}}</div>
          </div>
          <div class="form_item" v-if="returnWayIndex==0||returnWayIndex==1">
            <div class="item_label">取件确认码：</div>
            <div class="item_input">{{sureNum}}</div>
          </div>
          <div class="form_item contact" @click="SelectAddress" v-if="returnWayIndex==2">
            <div class="item_label">姓名：</div>
            <div class="item_input">{{pickInfo.pickName}}</div>
            <div class="arrow">
              <img src="@/assets/imgs/btn_da_next.png"/>
            </div>
          </div>
          <div class="form_item contact" @click="SelectAddress" v-if="returnWayIndex==2">
            <div class="item_label">电话：</div>
            <div class="item_input">{{pickInfo.pickPhone}}</div>
          </div>
          <div class="form_item contact" @click="SelectAddress" v-if="returnWayIndex==2">
            <div class="item_label">地址：</div>
            <div class="item_input">{{pickInfo.pickAddress}}</div>
          </div>
        </div>
      </div>
      <div class="service_note">
        <div class="label">服务说明：</div>
        <div
          class="text"
        >1.请确保订单提交，审核通过后第一时间寄送给我们，并在 订单中心中录入物流信息；若在您的服务完成时间前无法收 到您的证件，则无法为您进行相关业务办理。请谅解。</div>
        <div class="text">2. 如在证件寄送后取消订单，您的证件可至服务点自取或由 我们快递给您，但快递费用需自付。</div>
      </div>
    </div>
    <div @click="confirmReturnWay" class="submit_button">确认</div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'returnWay',
    data(){
        return{
          showReturnWayPicker: false,
          returnWayList: ["服务点代管自取", "照片快传+代管", "快递寄送"],
          returnWay: "服务点代管自取",
          returnWayIndex: 0,
          address:"中山西2号恒隆中心11A",
          keeper:"健康管家 18011484679",
          servicePhone:"0574-87250468",
          sureNum:'20170918ad2d', 
          pickInfo:{
            pickName:'',
            pickPhone:'',
            pickAddress:'',
          }          
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
    onReturnWayConfirm(value, index) {
      (this.returnWay = value), (this.returnWayIndex = index);
      this.showReturnWayPicker = false;
    },
    SelectAddress(){
      this.$router_({name:'addressManage'})
    },
    confirmReturnWay(){
      let formData={address:this.address,keeper:this.keeper,name:this.returnWay,index:this.returnWayIndex}
      if(this.returnWayIndex==2){
        formData=Object.assign(formData,this.pickInfo)
      }
      sessionStorage.setItem('returnWay',JSON.stringify(formData))
      this.$router.go(-1)
    },
    },
}
</script>

<style lang="less" scope>
.returnWay_container{
  background-color: #f4f4f4;
  .header_tip {
    align-items: flex-start;
    height: 1.8rem;
    background-color: #ffffff;
    display: flex;
    box-sizing: border-box;
    padding: 0.33rem 0.23rem 0.4rem 0.23rem;
    .icon {
      img {
        margin-top: 0.04rem;
        width: 0.27rem;
        height: 0.28rem;
      }
    }
    .text {
      margin-left: 0.12rem;
      font-size: 0.26rem;
      color: #777777;
      .card {
        color: #e4993a;
        font-weight: bold;
      }
    }
  }
  .main_content {
    padding: 0.5rem 0.25rem 0.3rem;
    .return_way {
      height: 4.82rem;
      box-sizing: border-box;
      background-color: #ffffff;
      width: 6.4rem;
      margin: 0 auto 0.54rem;
      .choose_return_way {
        border-bottom: 0.07rem solid #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1rem;
        .label {
          font-size: 0.3rem;
          color: #777777;
        }
        .input {
          margin-left: 0.06rem;
          display: flex;
          align-items: center;
          width: 2.8rem;
          padding: 0 0.05rem 0.11rem 0.21rem;
          box-sizing: border-box;
          border-bottom: 0.01rem solid #d9d9d9;
          .value {
            color: #e4993a;
            font-size: 0.3rem;
          }
          .arrow {
            margin-left: auto;
            img {
              height: 0.19rem;
              width: 0.21rem;
            }
          }
        }
      }
      .form_container {
        padding: 0.2rem 0.25rem 0;
        .form_item {
          height: 0.8rem;
          display: flex;
          align-items: center;
          .item_label {
            color: #848484;
            font-size: 0.28rem;
          }
          .item_input {
            font-size: 0.26rem;
            color: #5C5D5D;
            input {
              font-size: 0.26rem;
              color: #5c5d5d;
            }
          }
          .arrow{
            margin-left: auto;
            img{
              width: 0.18rem;
              height: 0.27rem;
            }
          }
        }
        .receiver {
          border-bottom: 0.02rem dashed #e3e3e3;
        }
        .contact {
          border-bottom: 0.02rem dashed #e3e3e3;
        }
      }
    }
    .service_note {
      border-top: 0.01rem solid rgb(237, 237, 237);
      padding: 0.37rem 0.12rem 0;
      font-size: 0.26rem;
      .label {
        color: #e4993a;
        font-weight: bold;
      }
      .text {
        margin-top: 0.15rem;
        color: #9b9b9b;
      }
    }
  }
  .submit_button {
    height: 1rem;
    background-color: #3eb4a1;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
 </style>
<style>
@import url("../../assets/less/vantstyle/picker.css");
</style>