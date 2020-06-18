// 2020/4/1 created by xtt
<template>
 <div class="doctorInfoaddress">
   <van-popup
     v-model="addressshow"
     position="bottom"
   >
     <van-area :area-list="areaList"
               title="标题"
               @confirm="confirmaddress"
               @cancel="addressshow=false"
               value="110101"
     />
   </van-popup>
   <div class="form">
   <div class="formitem" @click="selectarea">
     <div class="title">
       所在地区
     </div>
     <div class="address">
       {{address===''?'请选择':address}}
     </div>
     <img :src="nextIcon"/>
   </div>
   <div class="formitem">
     <div class="title">
       详细地址
     </div>
     <div class="address">
       <input placeholder="详细街道、楼栋号、房间号等" v-model="detailaddress"/>
     </div>
   </div>
   <div class="formitem">
     <div class="title">
       邮政编码
     </div>
     <div class="address">
       <input placeholder="如不清楚可不填写" v-model="postcode"/>
     </div>
   </div>
   </div>
   <div class="fixbtn">
     <div class="save" @click="tosave">
       修改地址
     </div>
   </div>
 </div>
</template>

<script>
    import Toast from "vant/es/toast";
    import {editDoctorInfo} from "../../../../api/apiz";

    export default {
        name: "doctorInfoaddress",
        data(){
          return{
            nextIcon: require('@/assets/imgs/btn_grzx_jbzl_next.png'),
            areaList:require('@/utils/area.js').default,
            addressshow:false,
            address:'',
            detailaddress:'',
            postcode:'',
            provinceCd:'',
            cityCd:'',
            districtCd:'',
            doctorId:'',
          }
        },
        methods:{
          getNatuveuserId(){
            this.$bridge.callHandler("getUserId", "", (res) => {
              this.doctorId = res;
            });
          },
          getNativeData(){
            this.$bridge.callHandler("getData", "", (res) => {
              let datalist = JSON.parse(res);
              if(datalist.provinceNm){
               this.address=datalist.provinceNm+datalist.cityNm+datalist.districtNm;
              }
              this.detailaddress=datalist.address;
              this.postcode=datalist.zipCode;
            });
          },
          getBack(){
            this.$bridge.callHandler("back", "", (res) => {
            });
          },
        selectarea(){
         this.addressshow=true;
        },
        confirmaddress(val){
          console.log('address',val);
          this.addressshow=false;
          this.provinceCd=val[0].code;
          this.cityCd=val[1].code;
          this.districtCd=val[2].code;
          this.address=val[0].name+val[1].name+val[2].name;
        },
        tosave(){
          if(!this.address){
            Toast('请选择地区');
          }else if(!this.detailaddress){
            Toast('请填写详细地址');
          }else {
            let data={
              userId:Number(this.doctorId),
              provinceCd:this.provinceCd,
              cityCd:this.cityCd,
              districtCd:this.districtCd,
              localAddress:this.detailaddress,
              zipCode:this.postcode
            }
            editDoctorInfo(data).then((res)=>{
              console.log('adrrrr',res);
              if(res.data.code===0){
                this.getBack();
              }
            })
          }
        }
      },
      mounted() {
          this.getNatuveuserId();
          this.getNativeData();
      }
    }
</script>

<style scoped lang="less">
.doctorInfoaddress{
   height: 100%;
   background: #F6F3F7;
   font-size: 0.32rem;
   color: #717071;
  .form{
    width: 100%;
    height: 3rem;
    background: white;
  }
  .formitem{
    width: 6.9rem;
    height: 1rem;
    margin: 0 auto;
    border-bottom: 0.02rem solid #F1F3F4;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
      width: 0.16rem;
      height: 0.3rem;
    }
    .title{
      font-weight: bold;
      margin-left: 0.15rem;
    }
    .address{
      font-size: 0.3rem;
      color: #8E8E8E;
      margin-left: 0.4rem;
      width: 4.5rem;
      input{
        width: 4rem;
      }
    }
  }
  .fixbtn{
    font-size: 0.32rem;
    color: white;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 1.2rem;
    background: white;
    .save{
      line-height: 0.7rem;
      text-align: center;
      margin: 0.24rem auto;
      width: 3rem;
      height: 0.7rem;
      background: url("../../../../assets/imgs/bg_grzx_brn_pre.png");
      background-size: 3rem 0.7rem;
    }
  }
}
</style>
