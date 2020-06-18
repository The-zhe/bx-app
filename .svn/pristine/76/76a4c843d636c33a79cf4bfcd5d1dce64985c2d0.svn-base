<template>
  <div class="addressManage_container" :style="{position:addressList.length>4?'relative':'',top:addressList.length>4?'0px':''}">
   
    <div class="list_container">
      <div class="item" :key="item.address" @click="selectAddressFun(item)" v-for="(item,index) in addressList">
        <div class="memberInfo">
          <div class="name">{{item.name}}</div>
          <div class="phone">{{item.phone}}</div>
        </div>
        <div class="address">{{item.address}}</div>
        <div class="item_manage">
          <div class="isDefault">
            <div class="icon">
              <img :src="item.isDefault?isDefaultIconUrl:notDefaultIconUrl" />
            </div>
            <div class="text" :class="{'default':item.isDefault}">默认地址</div>
          </div>
          <div class="edit" @click.stop="updAddress(item.id)">
            <img src="@/assets/imgs/btn_grzx_edit.png" />
          </div>
          <div class="delete" @click.stop="delAddressFun(item.id,index)">
            <img src="@/assets/imgs/btn_grzx_del.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="addAddress_container" @click="addAddress">新增地址</div>
  </div>
</template>

<script>
import {getAddressList,delAddress} from '@/api/apiz'
export default {
  components: {},
  name: "",
  data() {
    return {
      isDefaultIconUrl: require("@/assets/imgs/icon_grzx_add_pre.png"),
      notDefaultIconUrl: require("@/assets/imgs/icon_grzx_add_nor.png"),
      addressList: [],
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {
    this.getMemberId()
    this.getAddressListFun()
  },
  methods: {
    getAddressListFun(){
      getAddressList().then((res)=>{
        this.addressList=res.data.list
      })
    },
    selectAddressFun(item){
      let returnName = sessionStorage.getItem('addressReturnName')
      if(returnName){
        sessionStorage.setItem('addressInfo',JSON.stringify(item))
        this.$router.replace({name:returnName})
      }else{

      }
    },
    addAddress(){
      this.$router_({name:'addressAdd',params:{hasAddress:this.addressList.length>0}})
    },
    updAddress(id){
      this.$router_({name:'addressEdit',params:{id}})
    },
    delAddressFun(id,index){
      delAddress(id).then((res)=>{
        this.addressList.splice(index,1)
      })
    },
        getMemberId(){
      this.$bridge.callHandler("getMemberIdTest", "", (res) => {
        let memberId = res
        sessionStorage.setItem('memberId',memberId)
      });
    }
  }
};
</script>

<style lang="less" scope>
.addressManage_container {
  padding-top: 0.24rem;
  box-sizing: border-box;
  background-color: #f4f4f4;
  bottom: 0;
  width: 100%;
  .list_container {
    width: 7.02rem;
    margin: 0 auto -1rem;
    box-sizing: border-box;
    padding-bottom: 1.24rem;
    .item {
      border-radius: 0.2rem;
      color: #777777;
      width: 7.02rem;
      background-color: #fff;
      font-size: 0.3rem;
      .memberInfo {
        align-items: center;
        padding: 0.33rem 0 0 0.29rem;
        display: flex;
        .name {
          font-weight: bold;
        }
        .phone {
          margin-left: 0.45rem;
          font-weight: 400;
          font-size: 0.32rem;
        }
      }
      .address {
        padding: 0.26rem 0.43rem 0.21rem 0.28rem;
        font-weight: 400;
      }
      .item_manage {
        border-top: 0.02rem solid #e6e6e6;
        align-items: center;
        height: 0.7rem;
        display: flex;
        .isDefault {
          margin-left: 0.26rem;
          align-items: center;
          display: flex;
          .icon {
            img {
              height: 0.25rem;
              width: 0.25rem;
            }
          }
          .text {
            margin-left: 0.16rem;
          }
          .default {
            color: #048a83;
          }
        }
        .edit {
          margin-left: 3.43rem;
          img {
            height: 0.41rem;
            width: 0.41rem;
          }
        }
        .delete {
          margin-right: 0.37rem;
          margin-left: auto;
          img {
            width: 0.39rem;
            height: 0.41rem;
          }
        }
      }
      &:not(:last-child) {
        margin-bottom: 0.24rem;
      }
    }
  }
  .addAddress_container {
    position: absolute;
    bottom: 0;
    height: 1.01rem;
    width: 100%;
    background-color: #3eb4a1;
    font-size: 0.36rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
