<template>
  <div class="doorsMedicine_container">
    <van-popup v-model="showPicker" position="bottom">
  <van-picker
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
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
    <div class="receiver_container" @click="jumpToAddress">
      <div class="icon">
        <img :src="locationIcon" />
      </div>
      <div class="text">
        <div class="top">
          <div class="sendTo">送至</div>
          <div class="place">{{addressInfo.address}}</div>
        </div>
        <div class="bottom">
          <div class="name">{{addressInfo.name}}</div>
          <div class="phone">{{addressInfo.phone}}</div>
        </div>
      </div>
      <div class="arrow">
        <img :src="arrowIcon" />
      </div>
    </div>
    <div class="medicine_container">
      <div class="mainTitle">代购药品</div>
      <div class="medicine_list">
        <div class="medicine_item" v-for="(item,index) in medicineList">
          <div class="title">*药品名称</div>
          <div class="name">
            <input type="text" placeholder="请输入药品名称" v-model="item.medicalName" />
          </div>
          <div class="info">
            <div class="img">
              <img :src="item.imgUrl==''?addImgIcon:item.imgUrl" />
              <input accept="image/*" @change="fileChange($event,index)" type="file" class="hidden"/>
            </div>
            <div class="text">
              <div class="top">
                <div class="specs">
                  <div class="label">规格</div>
                  <div class="val">
                    <input type="text" placeholder="规格" v-model="item.specs" />
                  </div>
                </div>
                <div class="unit" @click="selectUnit(index)">
                  <div class="label">单位</div>
                  <div class="val">{{item.company}}
                    <img :src="downArrowIcon"/>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <div class="quantity">
                  <div class="label">*数量</div>
                  <div class="val">
                    <div class="quantity_reduce" @click="reduce(index)">
                      <img :src="reduceNumberIcon" />
                    </div>
                    <div class="quantity_val">{{item.number}}</div>
                    <div class="quantity_add" @click="add(index)">
                      <img :src="addNumberIcon" />
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="label">单价</div>
                  <div class="val">
                    <input type="text" v-model="item.price"/>元
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="add_midicine" @click="addMedicine">
          <div class="icon">
            <img src="@/assets/imgs/btn_yjyy_add.png" />
          </div>
          <div class="text">添加药品</div>
        </div>
        <div class="all_price">
          <div class="title">药品总价</div>
          <div class="val">￥{{allPrice}}</div>
        </div>
      </div>
    </div>
    <div class="need_attention">
      <div class="title">注意事项</div>
      <div class="item hasPrescription">
        <div class="text">有无处方</div>
        <div class="select">
        <div class="yes" @click="hasPrescription=true">
          <div class="icon">
            <img :src="hasPrescription?hasIcon:hasNotIcon" />
          </div>
          <div class="text">有</div>
        </div>
        <div class="no" @click="hasPrescription=false">
          <div class="icon">
            <img :src="!hasPrescription?hasIcon:hasNotIcon" />
          </div>
          <div class="text">无</div>
        </div>
        </div>
      </div>
      <div class="PrescriptionImg_container" v-if="hasPrescription">
        <img :src="item" :key="item" v-for="item in PrescriptionImg"/>
        <div class="add_img">
          <img :src="addImgIcon" />
          <input accept="image/*" v-if="PrescriptionImg.length<3" @change="addPreImg" type="file" class="hidden"/>
        </div>
      </div>
      <div class="item isLactation">
        <div class="text">哺乳期</div>
         <div class="select">
          <div class="yes" @click="isLactation=true">
          <div class="icon">
            <img :src="isLactation?hasIcon:hasNotIcon" />
          </div>
          <div class="text">是</div>
        </div>
        <div class="no" @click="isLactation=false">
          <div class="icon">
            <img :src="!isLactation?hasIcon:hasNotIcon" />
          </div>
          <div class="text">否</div>
        </div>
        </div>
      </div>
      <div class="item isGestation">
        <div class="text">孕期</div>
        <div class="select">
                  <div class="yes" @click="isGestation=true">
          <div class="icon">
            <img :src="isGestation?hasIcon:hasNotIcon" />
          </div>
          <div class="text">是</div>
        </div>
        <div class="no" @click="isGestation=false">
          <div class="icon">
            <img :src="!isGestation?hasIcon:hasNotIcon" />
          </div>
          <div class="text">否</div>
        </div>
        </div>
      </div>
      <div class="item isIncompetence">
        <div class="text">严重肝肾功能不全</div>
        <div class="select">
        <div class="yes" @click="isIncompetence=true">
          <div class="icon">
            <img :src="isIncompetence?hasIcon:hasNotIcon" />
          </div>
          <div class="text">是</div>
        </div>
        <div class="no" @click="isIncompetence=false">
          <div class="icon">
            <img :src="!isIncompetence?hasIcon:hasNotIcon" />
          </div>
          <div class="text">否</div>
        </div>
        </div>
      </div>
      <div class="item_ allergies">
        <div class="label">过敏史（选填）</div>
        <div class="input">
          <input type="text" placeholder="请输入过敏史" v-model="allergies" />
        </div>
      </div>
      <div class="item_ remark">
        <div class="label">备注</div>
        <div class="input">
          <input type="text" placeholder="请输入您需要的备注" v-model="remarks" />
        </div>
      </div>
    </div>
    <div class="agree_container">
      <div class="icon" @click="hasAgree=!hasAgree">
        <img :src="hasAgree?agreeIcon:notAgreeIcon" />
      </div>
      <div class="text">
        我以知晓并同意《下单须知》的全部内容，对服务条款和费用无异议
      </div>
    </div>
      <div class="button_container">
          <div class="customer_service">
              <img src="@/assets/imgs/icon_bjjy_service.png"/>
              客服
          </div>
          <div class="order_immediately" @click="order" >去支付</div>
      </div>
  </div>
</template>

<script>
import {getuploader} from '../../../api/index'
import {getDefaultAddress,PostappointData} from '../../../api/apiz'
import {Toast} from 'vant'
export default {
  name: "doorsMedicine",
  data() {
    return {
      addNumberIcon:require('@/assets/imgs/btn_yjyy_add_.png'),
      reduceNumberIcon:require('@/assets/imgs/btn_yjyy_decrease.png'),
      addImgIcon:require('@/assets/imgs/img_yjyy_photo.png'),
      hasIcon:require('@/assets/imgs/icon_yjyy_yes.png'),
      hasNotIcon:require('@/assets/imgs/icon_yjyy_no.png'),
      agreeIcon:require('@/assets/imgs/btn_bjjy_choice_pre.png'),
      notAgreeIcon:require('@/assets/imgs/btn_bjjy_choice_nor.png'),
      showPicker:false,
      unitIndex:0,
      PrescriptionImg:[],
      columns:['盒','个','件','箱'],
      locationIcon: require("@/assets/imgs/icon_yjyy_address.png"),
      arrowIcon: require("@/assets/imgs/btn_da_next.png"),
      downArrowIcon:require("@/assets/imgs/btn_yjyy_dropdown.png"),

      addressInfo: {
        id:'',
        address:'',
        name:'',
        phone:''
      },
      medicineList: [
        {
          medicalName: "",
          specs: "",
          company: "盒",
          number: 1,
          price: "",
          imgUrl:""
        }
      ],
      hasPrescription: false,
      isLactation: false,
      isGestation: false,
      isIncompetence: false,
      allergies: "",
      remarks: "",
      hasAgree:false
    };
  },
  computed:{
    allPrice(){
      if(this.medicineList.length){
        let sum=0
        this.medicineList.forEach(item=>{
          let price
          if(item.price==""){
            price=0
          }else{
            price=Number(item.price)
          }
          sum+=price*item.number
        })
        return sum
      }else{
        return 0
      }
    }
  },
  methods: {
    addPreImg(e){
      let file = e.target.files[0]
        let formData = new FormData()
        formData.append('file',file)
        getuploader(formData).then((res)=>{
            this.PrescriptionImg.push(res.data.data)
        })
    },
    fileChange(e,index){
        let file = e.target.files[0]
        let formData = new FormData()
        formData.append('file',file)
        getuploader(formData).then((res)=>{
            this.medicineList[index].imgUrl=res.data.data
        })
    },
    addMedicine(){
      this.medicineList.push({
          medicalName: "",
          specs: "",
          company: "盒",
          number: 1,
          price: "",
          imgUrl:""
      })
    },
    add(index){
      this.medicineList[index].number++
    },
    reduce(index){
      if(this.medicineList[index].number>1)
      this.medicineList[index].number--
    },
    selectUnit(index){
      this.showPicker=true
      this.unitIndex=index
    },
    onConfirm(val){
        this.medicineList[this.unitIndex].company=val
        this.showPicker=false
    },
    getDefaultAddressFun(){
      getDefaultAddress().then(res=>{
        console.log(res)
      })
    },
    PostappointDataFun(data){
      PostappointData(data).then(res=>{
        console.log(res)
      })
    },
    jumpToAddress(){
        sessionStorage.setItem('addressReturnName','doorsMedicine')
        this.$router.push({name:'addressManage'})
    },
    order(){
      if(this.hasAgree){
        let data = {
          hjjkApntRegisterVo:{
            isPres:Number(this.hasPrescription),
            isLactation:Number(this.isLactation),
            isPregnancy:Number(this.isGestation),
            isLiverFunction:Number(this.isIncompetence),
            allergy:this.allergies,
            remarks:this.remarks,
            allPrice:this.allPrice,
            presImgUrl:this.hasPrescription?PrescriptionImg.join(';'):"",
            addressId:this.addressInfo.id,
            addressNm:this.addressInfo.address,
            serviceId:4667450476631052,
            userId:localStorage.getItem('userId'),
          },
          apntMediVoList:this.medicineList
        }
        this.PostappointDataFun(data)
      }else{
        Toast('请先同意《下单须知》相关协议')
      }

    }
  },
  mounted(){
    if(sessionStorage.getItem('addressInfo')){
      this.addressInfo=JSON.parse(sessionStorage.getItem('addressInfo'))
    }else{
      this.getDefaultAddressFun()
    }
  }
};
</script>

<style scoped lang="less">
.doorsMedicine_container {
  background-color: #f4f4f4;
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
  .receiver_container {
    margin: 0.28rem auto 0.22rem;
    border-radius: 0.16rem;
    box-shadow: 0 0 0.06rem #a9a9a9;
    background-color: #ffffff;
    width: 7rem;
    height: 1.37rem;
    box-sizing: border-box;
    padding: 0.29rem 0.26rem 0.32rem 0.32rem;
    display: flex;
    align-items: center;
    .icon {
      img {
        width: 0.35rem;
        height: 0.47rem;
      }
    }
    .text {
      margin-left: 0.35rem;
      .top {
        display: flex;
        font-size: 0.28rem;
        .sendTo {
          color: #40b2a0;
        }
        .place {
          margin-left: 0.22rem;
          color: #777777;
        }
      }
      .bottom {
        font-size: 0.26rem;
        color: #999999;
        display: flex;
        .name {
        }
        .phone {
          margin-left: 0.22rem;
        }
      }
    }
    .arrow {
      margin-left: auto;
      img {
        width: 0.15rem;
        height: 0.27rem;
      }
    }
  }
  .medicine_container {
    border-radius: 0.16rem;
    box-shadow: 0 0 0.06rem #a9a9a9;
    margin: 0 auto;
    width: 7.02rem;
    box-sizing: border-box;
    background-color: #ffffff;
    padding: 0.3rem 0.3rem;
    .mainTitle {
      font-weight: bold;
      font-size: 0.3rem;
      color: #40b2a0;
    }
    .medicine_list {
      .medicine_item {
        padding: 0.3rem 0 0.06rem;
        .title {
          color: #777777;
          font-weight: bold;
          font-size: 0.28rem;
        }
        .name {
          margin-top: 0.15rem;
          margin-bottom: 0.08rem;
          font-size: 0.26rem;
          color: #999999;
          padding-bottom: 0.13rem;
          border-bottom: 0.01rem dashed #efefef;
        }
        .info {
          display: flex;
          align-items: center;
          .img {

            width: 1.76rem;
            height: 1.77rem;
            position: relative;
            img{
              width: 1.76rem;
              height: 1.77rem;
            }
            .hidden{
              opacity: 0;
              top: 0;
              position: absolute;
              width: 1.76rem;
              height: 1.77rem;
              overflow: hidden;
            }
          }
          .text {
            width: 4rem;
            margin: 0 0.5rem;
            .label {
              font-size: 0.28rem;
              color: #777777;
              font-weight: bold;
              margin-bottom: 0.08rem;
            }
            .val {
              font-size: 0.26rem;
              color: #999999;
            }
            .top {
              display: flex;
              justify-content: space-around;
              .specs {
                border-bottom: 0.01rem dashed #f1f1f1;
                padding-bottom: 0.07rem;
                width: 1.37rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                input {
                  width: 1rem;
                }
              }
              .unit {
                padding-bottom: 0.07rem;
                width: 1.37rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                .val{
                  box-sizing: border-box;
                  padding-left: 0.2rem;
                  width: 0.96rem;
                  height: 0.39rem;
                  border: 0.02rem solid #f0f0f0;
                  border-radius: 0.08rem;
                  display: flex;
                  align-items: center;
                  img{
                    margin-left: auto;
                    margin-right: 0.12rem;
                      width: 0.13rem;
                      height: 0.12rem;
                  }
                }
              }
            }
            .bottom {
              justify-content: space-around;
              display: flex;
              .price {
                padding-bottom: 0.07rem;
                border-bottom: 0.01rem dashed #f1f1f1;
                width: 1.37rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                .val {
                  input {
                    width: 0.5rem;
                  }
                }
              }
              .quantity {
                padding-bottom: 0.07rem;
                width: 1.37rem;
                margin-top: 0.19rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                .val {
                  margin-bottom: 0.14rem;
                  display: flex;
                  .quantity_reduce {
                    img {
                      width: 0.28rem;
                      height: 0.28rem;
                    }
                  }
                  .quantity_val {
                    margin: 0 0.33rem;
                  }
                  .quantity_add {
                    img {
                      width: 0.28rem;
                      height: 0.28rem;
                    }
                  }
                }
              }
            }
          }
        }
        &:not(:last-child) {
          border-bottom: 0.01rem solid #f7f7f7;
        }
      }
    }
    .bottom {
      align-items: center;
      display: flex;
      .add_midicine {
        align-items: center;
        display: flex;
        .icon {
          img {
            width: 0.29rem;
            height: 0.29rem;
          }
        }
        .text {
          margin-left: 0.09rem;
          font-size: 0.3rem;
          color: #777777;
        }
      }
      .all_price {
        margin-left: auto;
        display: flex;
        font-size: 0.34rem;
        .title {
          color: #777777;
          font-weight: bold;
          margin-right: 0.29rem;
        }
        .val {
          color: #e95513;
        }
      }
    }
  }
  .need_attention {
    border-radius: 0.16rem;
    box-shadow: 0 0 0.06rem #a9a9a9;
    background-color: #ffffff;
    width: 7rem;
    margin: 0.24rem auto 0rem;
    box-sizing: border-box;
    padding: 0.28rem;

    .title{
      font-weight: bold;
      color: #40B2A0;
      font-size: 0.3rem;
    }
    .item{
      margin-top: 0.12rem;
      display: flex;

      .text{
        color: #777778;
        font-size: 0.28rem;
        font-weight: bold;
      }
    .select{
      margin-left: auto;
      display: flex;
              .yes{
          margin-right: 0.8rem;
          display: flex;
          align-items: center;
          .icon{
            margin-right: 0.15rem;
            img{
              width: 0.23rem;
              height: 0.23rem;;
            }
          }
          .text{
            color: #777777;
          }
        }
        .no{
          margin-left: auto;
          display: flex;
          align-items: center;
          .icon{
             margin-right: 0.15rem;
            img{
              width: 0.23rem;
              height: 0.23rem;;
            }
          }
          .text{

          }
        }
    }
    }
    .PrescriptionImg_container{
      margin-top: 0.2rem;
      display: flex;
      .add_img{
        margin-right: 0.38rem;
        width: 1.55rem;
        height: 1.55rem;
        position: relative;
        .hidden{
          overflow: hidden;
              opacity: 0;
              top: 0;
              position: absolute;
              width: 1.76rem;
              height: 1.77rem;
              overflow: hidden;
        }
      }
      img{
        margin-right: 0.38rem;
        width: 1.55rem;
        height: 1.55rem;
      }
    }
    .item_{
      margin-top: 0.12rem;
          .label{
              color: #777778;
        font-size: 0.28rem;
        font-weight: bold;
    }
    .input{
      margin-top: 0.12rem;
      font-size: 0.26rem;
      padding-bottom: 0.1rem;
      border-bottom: 0.01rem dashed #EFECF0;
    }
    }
  }
  .agree_container{
    margin-top: 0.81rem;
    display: flex;
    justify-content: center;
    .icon{
      img{
        width:0.33rem;
        height:0.33rem;
      }
    }
    .text{
      margin-left: 0.14rem;
      width: 3.9rem;
      color: #A3A2A2;
      font-size: 0.26rem;
    }
  }
    .button_container{
      margin-top: 0.82rem;
        font-size: 0.36rem;
        display: flex;
        height: 0.98rem;
        .customer_service{
            align-items: center;
            width: 2rem;
            display: flex;
            color: #289F9C;
            justify-content: center;
            background-color: #C5E7DD;
            img{
                margin-right: 0.18rem;
                width: 0.4rem;
                height: 0.4rem;;
            }
        }
        .order_immediately{
            justify-content: center;
            display: flex;
            align-items: center;
            width: 5.5rem;
            background-color: #3EB4A1;
            color: #ffffff;
        }
    }
}
</style>
<style>
@import url("../../../assets/less/vantstyle/picker.css");
</style>
