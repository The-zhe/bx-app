// 2020/4/2 created by xtt
<template>
<div class="uploadCertificate">
  <div class="form_item rankNum">
    <div class="label">请输入执业证书编号</div>
    <div class="input">
      <input type="text" v-model.trim="rankNum" placeholder="请输入您的执业医师证书编号"/>
    </div>
    <div class="error_tip" v-if="rankNumError"><img src="../../../../assets/imgs/icon_gybm_tips.png"/>信息未填写</div>
  </div>
  <div class="title">执业证书上传</div>
  <div class="desc">请拍摄并上传医师执业证第二页</div>
  <div class="photo_container">
    <input ref="fileUpload" accept="image/*" @change="fileChange" type="file" class="hidden" multiple="multiple"/>
    <img class="book" :src="hasUpload?certImgUrl:bookIcon"/>
    <div class="photo_tip">证件仅用于本次认证，倍熙私医将严格保密</div>
    <div class="bottom">
      <img class="camera" :src="cameraIcon"/>
      <div class="text">拍摄医师执业证第二页</div>
    </div>
  </div>
  <div class="fixbtn">
    <div class="btn back" @click="toback">返回</div>
    <div class="btn next" @click="tonext">下一步</div>
  </div>
</div>
</template>

<script>
    import {getuploader} from "../../../../api";

    export default {
        name: "uploadCertificate",
        data(){
          return{
            pageIcon: require('@/assets/imgs/xfill1.png'),
            barIcon: require('@/assets/imgs/xfill3_2.png'),
            bookIcon: require('@/assets/imgs/img_yszc_id.png'),
            cameraIcon: require('@/assets/imgs/icon_yszc_photo.png'),
            hasUpload: false,
            certImgUrl: "",
            rankNumError: false,
            rankNum: '',
          }
        },
      mounted(){
        if (localStorage.getItem('certImgUrl')) {
          let imgUrl = JSON.parse(localStorage.getItem('certImgUrl'))
          this.rankNum = imgUrl.certNo
          if (imgUrl.certImgUrl != '') {
            this.certImgUrl = imgUrl.certImgUrl
            this.hasUpload = true
          }
        }
      },
      methods:{
        fileChange(e) {
          let file = e.target.files[0]
          let formData = new FormData()
          formData.append('file', file)
          getuploader(formData).then((res) => {
            this.certImgUrl = res.data.data
            this.hasUpload= true
          })
        },
        toback(){
          this.$router.go(-1);
          localStorage.setItem('certImgUrl', JSON.stringify({certImgUrl: this.certImgUrl, certNo: this.rankNum}))
        },
        tonext(){
          this.rankNumError = this.rankNum === ''
          this.$nextTick(() => {
            if (!this.rankNumError) {
              localStorage.setItem('certImgUrl', JSON.stringify({certImgUrl: this.certImgUrl, certNo: this.rankNum}))
              this.$router_({name: 'uploadCardFront'})
            }
          })
        }
      }
    }
</script>

<style scoped lang="less">
.uploadCertificate{
  .form_item {
    margin: 0 auto;
    width: 6.9rem;
    height: 3.3rem;
    box-sizing: border-box;
    padding: 0.9rem 0.22rem 0;
    border-bottom: 0.02rem solid #FBF8FB;

    .label {
      font-size: 0.3rem;
      color: #767777;
      font-weight: bold;
      margin-right: 0.3rem;
    }

    .error_tip {
      margin-top: 0.1rem;
      font-size: 0.26rem;
      color: #F15A24;
      display: flex;
      justify-content: flex-start;
      /*position: absolute;
      bottom: -0.35rem;*/

      img {
        padding-top: 0.05rem;
        width: 0.29rem;
        height: 0.28rem;
        margin-right: 0.12rem;
      }
    }

    .input {
      margin-top: 0.25rem;
      flex: 1;
      font-size: 0.3rem;
      position: relative;
      border: 1px solid #D4D2D3;
      height: 0.56rem;
      color: #777777;
      display: flex;
      align-items: center;
      padding-left: 0.18rem;
      border-radius: 0.08rem;

      input {
        font-size: 0.3rem;
        flex: 0.98
      }
    }
  }

  .title {
    color: #767777;
    font-size: 0.3rem;
    font-weight: bold;
    margin: 0.5rem 0 0.22rem 0.5rem;
  }

  .desc {
    font-size: 0.3rem;
    color: #999999;
    margin-left: 0.5rem;
  }

  .photo_container {
    margin: 0.33rem auto 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 6.5rem;
    height: 4.12rem;
    padding-top: 0.56rem;
    position: relative;
    box-shadow: 0 0 0.5rem rgb(236, 230, 230);

    .hidden {
      opacity: 0;
      top: 0;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .book {
      width: 2.51rem;
      height: 1.55rem;
    }

    .photo_tip {
      width: 100%;
      text-align: center;
      margin-top: 0.43rem;
      padding-bottom: 0.26rem;
      border-bottom: 0.01rem solid #F6F4F5;
      color: #F4793B;
      font-size: 0.26rem;
    }

    .bottom {
      height: 1.04rem;
      display: flex;
      align-items: center;

      .camera {
        width: 0.51rem;
        height: 0.45rem;
      }

      .text {
        margin-left: 0.3rem;
        color: #56B2AD;
        font-size: 0.3rem;
      }
    }
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
