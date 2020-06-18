<template>
  <div class="addressAdd_container">
    <van-popup v-model="showPicker" position="bottom">
    <van-area
      :area-list="areaList"
      @cancel="showPicker=false"
      @confirm="confirmEvent"
      :columns-placeholder="['请选择', '请选择', '请选择']"
    />
    </van-popup>
    <div class="tip">为顺利使用服务，请确保信息真实、详细</div>
    <div class="form_container">
      <div class="form_item name">
        <div class="item_label">联&ensp;系&ensp;人</div>
        <div class="item_input" :class="{'error':nameError}">
          <input type="text" v-model="formData.name" placeholder="请输入收货人姓名" />
        </div>
      </div>
      <div class="form_item phone">
        <div class="item_label">联系电话</div>
        <div class="item_input" :class="{'error':phoneError}">
          <input type="text" v-model="formData.phone" placeholder="请输入联系电话" />
        </div>
      </div>
      <div class="form_item postCode">
        <div class="item_label">邮政编码</div>
        <div class="item_input">
          <input type="text" v-model="formData.zip" placeholder="如不清楚可不填写" />
        </div>
      </div>
      <div class="form_item place" @click="showPicker=true">
        <div class="item_label">所在地区</div>
        <div class="item_input" :class="{'error':provinceError}">
          <input type="text" placeholder="请选择" v-model="area" readonly />
        </div>
        <div class="arrow">
          <img src="@/assets/imgs/btn_grzx_next.png" />
        </div>
      </div>
      <div class="form_item placeDetail">
        <div class="item_label">详细地址</div>
        <div class="item_input" :class="{'error':addrError}">
          <input type="text" v-model="formData.addr" placeholder="详细街道、楼栋号、房间号等" />
        </div>
      </div>
    </div>
    <div class="isDefaultPlace_container">
      <div class="label">默认地址</div>
      <div class="choose">
        <van-switch v-model="isDefault" active-color="#3EB4A1" inactive-color="#9A9A9A" />
      </div>
    </div>
    <div class="save_button" @click="validateForm">新增地址</div>
  </div>
</template>

<script>
import {addAddress} from '@/api/apiz'
export default {
  components: {},
  name: "addressAdd",
  data() {
    return {
      showPicker: false,
      areaList:require('@/utils/area.js').default,
      formData:{
        name:'',
        phone:'',
        zip:'',
        provinceCd:'',
        provinceNm:'',
        cityCd:'',
        cityNm:'',
        districtCd:'',
        districtNm:'',
        addr:'',
      },
      area:'',
      isDefault:false,

      nameError:false,
      phoneError:false,
      provinceError:false,
      addrError:false,
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {
    this.isDefault=!this.$route.params.hasAddress
  },
  methods: {
    confirmEvent(val){
      this.formData.provinceCd=val[0].code
      this.formData.provinceNm=val[0].name
      this.formData.cityCd=val[1].code
      this.formData.cityNm=val[1].name
      this.formData.districtCd=val[2].code
      this.formData.districtNm=val[2].name
      this.area=val[0].name+'/'+val[1].name+'/'+val[2].name
      this.showPicker=false
    },
    validateForm() {
      this.nameError = Boolean(!this.formData.name);
      this.phoneError = Boolean(!this.formData.phone);
      this.provinceError = Boolean(!(this.formData.provinceCd!=''));
      this.addrError = Boolean(!this.formData.addr);
      this.$nextTick(() => {
        if (!this.nameError &&!this.phoneError &&!this.provinceError &&!this.addrError) {
             this.addAddressFun();  
        }
      });
    },
    addAddressFun(){
      addAddress(Object.assign({isDefault:Number(this.isDefault)},this.formData)).then((res)=>{
        this.$router.push({name:'addressManage'})
      })
    }
  }
};
</script>

<style lang="less" scope>
.addressAdd_container {
  box-sizing: border-box;
  .tip {
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #939393;
    font-size: 0.28rem;
    font-weight: 400;
  }
  .form_container {
    .form_item {
      border-top: 0.02rem solid #eae9e9;
      border-bottom: 0.02rem solid #eae9e9;
      box-sizing: border-box;
      padding-left: 0.31rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      height: 1rem;
      color: #777777;
      .item_label {
        font-size: 0.3rem;
        font-weight: bold;
      }
      .item_input {
        display: flex;
        align-items: center;
        height: 0.99rem;
        margin-top: -0.03rem;
        padding-left: 0.51rem;
        input {
          font-size: 0.28rem;
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
      .arrow {
        margin-right: 0.28rem;
        margin-left: auto;
        img {
          width: 0.18rem;
          height: 0.27rem;
        }
      }
    }
    .phone {
      border-top: none;
    }
    .postCode {
      margin-top: 0.25rem;
    }
    .place {
      border-top: none;
    }
    .placeDetail {
      border-top: none;
    }
  }
  .isDefaultPlace_container {
    height: 1rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 0.31rem;
    .label {
      font-size: 0.3rem;
      color: #777777;
      font-weight: bold;
    }
    .choose {
      margin-left: auto;
      margin-right: 0.27rem;
    }
  }
  .save_button {
    height: 1rem;
    color: #fff;
    background-color: #3eb4a1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    font-size: 0.36rem;
  }
}
</style>
<style>
@import url("../../../assets/less/vantstyle/picker.css");
</style>