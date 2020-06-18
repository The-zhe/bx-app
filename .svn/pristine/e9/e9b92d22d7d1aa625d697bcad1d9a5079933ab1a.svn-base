// 2020/4/2 created by xtt
<template>
 <div class="uploadCardFront">
   <van-loading v-show="updImgState" style="position:absolute;top:50%;left: 50%;margin-left: -0.15rem"/>
   <div class="title">身份证上传</div>
   <div class="desc">请拍摄并上传您的身份证正面照片</div>
   <div class="photo_container">
     <input ref="fileUpload" accept="image/*" @change="fileChange" type="file" class="hidden" multiple="multiple"/>
     <img class="book" :src="hasUpload?idCardRlImgUrl:cardIcon"/>
     <div class="photo_tip">证件仅用于本次认证，倍熙私医将严格保密</div>
     <div class="bottom">
       <img class="camera" :src="cameraIcon" />
       <div class="text">拍摄身份证正面</div>
     </div>
   </div>
   <div class="p_line"></div>
   <div class="p_title">身份证号<span>（根据上传照片识别，可修改）</span></div>
   <div class="form_item">
     <div class="input">
       <input type="text" v-model="idCardId" @input="checkIdcard"/>
     </div>
   </div>
   <div class="fixbtn">
     <div class="btn back" @click="toback">上一步</div>
     <div class="btn next" @click="tonext">下一步</div>
   </div>
 </div>
</template>

<script>
  import {getIdCarcheck, getuploader} from "../../../../api";
  import Toast from "vant/es/toast";

    export default {
        name: "uploadCardFront",
        data(){
          return{
            updImgState:false,
            barIcon:require('@/assets/imgs/xfill4_1.png'),
            pageIcon:require('@/assets/imgs/xfill1.png'),
            submitImg:require('@/assets/imgs/x_tj2.png'),
            prevIcon:require('@/assets/imgs/x_syb.png'),
            nextIcon:require('@/assets/imgs/x_xyb2.png'),
            cardIcon:require('@/assets/imgs/img_gybm_id_one.png'),
            cardIcon2:require('@/assets/imgs/img_gybm_id_two.png'),
            cameraIcon:require('@/assets/imgs/icon_yszc_photo.png'),
            idCardRlImgUrl:"",
            idotherCardRlImgUrl:"",
            hasUpload:false,
            hasUploadReverse:false,
            grant_type:'client_credentials',
            client_id:'G2GT8r1yPuvwpQR9OMhufVA4',
            client_secret:'PWlg7NsVCUpGGGUOHXRIYqWGrTbDrBgW',
            withoutPhone:false,
            idCardId:'',
            checkCard:false,
          }
        },
      mounted(){
        if(localStorage.getItem('idCardRlImgUrl')){
          let imgUrl = JSON.parse(localStorage.getItem('idCardRlImgUrl')).idCardRlImgUrl;
          this.idCardId=JSON.parse(localStorage.getItem('idCardRlImgUrl')).idCardId;
          if(imgUrl!=''){
            this.idCardRlImgUrl=imgUrl
            this.hasUpload=true
          }
        }
      },
       methods:{
         checkIdcard(){
           let id=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/;
           if (id.test(this.idCardId)===false){
             Toast('请输入正确的身份证号');
             this.checkCard=false;
           }else {
             this.checkCard=true;
           }
         },
         fileChange(e){
           this.updImgState=true;
           let file = e.target.files[0]
           let formData = new FormData()
           formData.append('file',file)
           getuploader(formData).then((res)=>{
             this.idCardRlImgUrl=res.data.data;
             this.hasUpload=true;
             getIdCarcheck(this.idCardRlImgUrl).then((res)=>{
               this.updImgState=false;
               this.idCardId=res.data.id;
             })

           })
         },
         toback(){
           this.$router.go(-1);
           localStorage.setItem('idCardRlImgUrl',JSON.stringify({idCardRlImgUrl:this.idCardRlImgUrl,idCardId:this.idCardId}));
         },
         tonext(){
           this.checkIdcard();
           if(!this.idCardId){
             Toast('请输入身份证号')
           }else if(!this.checkCard){
             Toast('请输入正确的身份证号');
           }
           else {
             localStorage.setItem('idCardRlImgUrl',JSON.stringify({idCardRlImgUrl:this.idCardRlImgUrl,idCardId:this.idCardId}));
             this.$router_({name: 'uploadCardBack'})
           }
         }
       }
    }
</script>

<style scoped lang="less">
.uploadCardFront{
  .p_line{
    width: 6.9rem;
    height: 0.02rem;
    background: #F1F1F3;
    margin: 1rem auto 0.75rem;
  }
  .title{
    color: #767777;
    font-size: 0.3rem;
    font-weight: bold;
    margin: 0.55rem 0 0.25rem 0.5rem;
  }
  .p_title{
    color: #767777;
    font-size: 0.3rem;
    font-weight: bold;
    margin: 0 0 0.25rem 0.5rem;
    span{
      color: #999999;
      font-weight: normal;
    }
  }
  .form_item{
    width: 6.5rem;
    height: 0.7rem;
    box-sizing: border-box;
    margin-left: 0.5rem;
    .input {
      font-size: 0.3rem;
      border: 1px solid #D4D2D3;
      height: 0.7rem;
      line-height: 0.7rem;
      color: #777777;
      padding-left: 0.2rem;
      border-radius: 0.08rem;
    }
  }
  .desc{
    font-size: 0.3rem;
    color: #999999;
    margin-left: 0.5rem;
  }
  .photo_container{
    border-radius: 0.08rem;
    position: relative;
    margin: 0.33rem auto 0 ;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 6.5rem;
    height: 3.6rem;
    padding-top: 0.6rem;
    box-shadow: 0 0 0.2rem rgb(236, 230, 230);
    .book{
      width: 2rem;
      height: 1.17rem;
    }
    .hidden{
      opacity: 0;
      top: 0;
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .photo_tip{
      width: 100%;
      text-align: center;
      margin-top: 0.3rem;
      padding-bottom: 0.3rem;
      border-bottom: 0.01rem solid #F6F4F5;
      color: #F4793B;
      font-size: 0.26rem;
    }
    .bottom{
      height: 1.04rem;
      display: flex;
      align-items: center;
      .camera{
        width:0.51rem;
        height:0.45rem;
      }
      .text{
        margin-left: 0.3rem;
        color: #56B2AD;
        font-size: 0.3rem;
      }
    }
  }
  .submitImg{
    width: 5.11rem;
    height: 0.85rem;
    margin: 0.56rem auto 0;
  }
  .fixbtn{
    width: 6.5rem;
    position: fixed;
    bottom: 0;
    padding-left: 0.5rem;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    .btn{
      font-size: 0.32rem;
      width: 3.1rem;
      height: 0.7rem;
      line-height: 0.7rem;
      text-align: center;
    }
    .back{
      color: #00A99D;
      background: url("../../../../assets/imgs/bg_grzx_brn_nor.png");
      background-size: 3.1rem 0.7rem;
    }
    .next{
      color: white;
      background: url("../../../../assets/imgs/bg_grzx_brn_pre.png");
      background-size: 3.1rem 0.7rem;
    }
  }
}
</style>
