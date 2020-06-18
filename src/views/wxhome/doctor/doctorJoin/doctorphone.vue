// 2020/3/31 created by xtt
<template>
  <div class="phoneCertification_container">
    <div class="top">
      输入手机号码
    </div>
    <div class="form_item phone">
      <img src="@/assets/imgs/icon_signin_mob.png"/>
      <div class="input">
        <input type="number" pattern="\d*" placeholder="输入手机号码" v-model="phone" />
      </div>
    </div>
    <div class="form_item code">
      <img src="@/assets/imgs/x_loginc.png"/>
      <div class="input" style="margin-left: 0.26rem">
        <div style="width:2.85rem">
        <input type="number" max="4" pattern="\d*" placeholder="验证码" v-model="code" />
        </div>
        <div class="getCode" @click="getCertifiCodeFun">{{getCodeText}}</div>
      </div>
    </div>
    <div class="button_container">
      <div class="nextIcon" @click="tojoin">下一步</div>
    </div>
    <div class="gxtip">
      <div class="gxline"></div>
      感谢您的热心奉献
      <div class="gxline"></div>
    </div>
  </div>
</template>

<script>
  import {doctorAddWithPhone,getCertifiCode,doctorLogin} from '../../../../api/apiz'
  import {Dialog,Toast} from 'vant'
    export default {
        name: "doctorphone",
      data() {
        return {
          buttonIcon: require("@/assets/imgs/btn_gybm_join.png"),
          getCodeText: "获取验证码",
          phone:'',
          code:'',
          timer:null,
          count:60,
        };
      },
      methods: {
        tojoin(){
          if(!this.phone){
            Toast('请输入手机号');
          }else if(this.phone.length!==11){
            Toast('手机号格式不正确');
          }
          else if(!this.code){
            Toast('请输入验证码');
          }else {
            doctorLogin(this.phone,this.code).then((res)=>{
              if(1){

              }
              localStorage.setItem('doctorId', res.data.data.userInfo.userId)
            })
            this.$router_({name: 'doctorperinfo'})
          }
        },
        getCertifiCodeFun(){
          if(this.phone.length==11){
            if(!this.timer){
              getCertifiCode(this.phone).then((res)=>{
                console.log('55',res);
                if(res.data.code===400){
                  Toast('系统内部异常')
                }else if(res.data.data===''){
                  this.count=60;
                  this.timer = setInterval(()=>{
                    if(this.count>0&&this.count<=60){
                      this.count--
                      this.getCodeText=`重新发送${this.count}s`
                    }else{
                      this.getCodeText='重新发送'
                      clearInterval(this.timer)
                      this.timer=null
                    }
                  },1000)
                }
                else if(res.data.data.hasAuth!=='0'){
                  localStorage.setItem('hasAuth',res.data.data.hasAuth)
                  localStorage.setItem('doctorId', res.data.data.userId);
                  localStorage.removeItem('userId');
                  localStorage.setItem('isDoctor', '1');
                  this.$dialog.alert({
                    message: '您已认证',
                    confirmButtonText: '返回首页',
                    confirmButtonColor: '#56B2AD'
                  }).then(() => {
                    this.$router.push({path:'/doctorHomepage'})
                  });
                } else {
                  this.count=60;
                  this.timer = setInterval(()=>{
                    if(this.count>0&&this.count<=60){
                      this.count--
                      this.getCodeText=`重新发送${this.count}s`
                    }else{
                      this.getCodeText='重新发送'
                      clearInterval(this.timer)
                      this.timer=null
                    }
                  },1000)
                }
              })
            }
          }else{
            if(this.phone.length==0){
              Toast('请输入手机号')
            }else{
              Toast('手机号格式不正确')
            }
          }

        },
        /*     prevClick(){
                this.$router.go(-1)
            }, */
        doctorAddWithPhoneFun(data){
          doctorAddWithPhone(data).then(res=>{
            if(res.data.code==0){
              let inApp = Boolean(Number(sessionStorage.getItem('inApp')))
              if(inApp){
                Dialog.alert({
                  title: '提交成功',
                  message: '欢迎加入倍熙微公益，我们会尽快为您审核，感谢您的支持！',
                  confirmButtonColor:'#3FA998',
                  confirmButtonText:'返回首页',
                }).then(() => {
                  this.deleteSessionStorage()
                  this.$router.replace({name:'wxhome'})
                });
              }else{
                Dialog.alert({
                  title: '提交成功',
                  message: '欢迎加入倍熙微公益，我们会尽快为您审核，感谢您的支持！',
                  confirmButtonColor:'#3FA998',
                  cancelButtonColor:'#3FA998',
                  cancelButtonText:'返回首页',
                  confirmButtonText:'打开APP',
                  showCancelButton:true
                }).then(() => {
                  //打开APP
                }).catch(()=>{
                  this.deleteSessionStorage()
                  this.$router.replace({name:'wxhome'})
                });
              }

            }else if(res.data.code==400){
              Toast(res.data.msg)
            }
          })
        },
        deleteSessionStorage(){
          sessionStorage.removeItem('baseData')
          sessionStorage.removeItem('certImgUrl')
          sessionStorage.removeItem('experience')
          sessionStorage.removeItem('idCardRlImgUrl')
          sessionStorage.removeItem('departmentInfo')
        },
      }
    }
</script>

<style scoped lang="less">
  .phoneCertification_container {
    .top{
      height: 0.88rem;
      background: url('../../../../assets/imgs/x_filltop.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.36rem;
      color: #ffffff;
    }
    .tip {
      padding: 0.25rem 0.34rem 0.27rem 0.31rem;
      box-sizing: border-box;
      height: 1.2rem;
      background-color: #f0edf1;
      color: #949494;
      font-size: 0.26rem;
    }
    .title {
      color: #767777;
      font-size: 0.3rem;
      font-weight: bold;
      margin: 0.59rem 0 0.7rem 0.39rem;
    }
    .form_item {
      margin-top: 2.8rem;
      padding-left: 0.85rem;
      display: flex;
      font-size: 0.32rem;

      img{
        margin-top: 0.05rem;
        width: 0.25rem;
        height: 0.37rem;
      }
      .input{
        padding-bottom: 0.1rem;
        margin-left: 0.33rem;
        display: flex;
        width: 5.17rem;
        border-bottom: 1px solid  #D8D5D8;
        align-items: center;
        input {
          padding-left: 0.19rem;
          box-sizing: border-box;
          height: 0.56rem;
        }
        .getCode {
          height: 0.33rem;
          padding-left:  0.3rem;
          border-left: 1px solid #D8D5D8;
          white-space: nowrap;
          width: 1.65rem;
          color: #54AAA4;
          font-size: 0.32rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.3rem;
        }
      }

    }
    .code {
      margin-top: 0.9rem;
      img{
        margin-top: 0.05rem;
        width: 0.33rem;
        height: 0.37rem;
      }
    }
    .button_container{
      position: absolute;
      bottom: 30%;
      left: 50%;
      width: 6rem;
      margin-left: -3rem;
      display: flex;
      justify-content: space-around;
      img{
        width: 6rem;
        height:0.7rem;
      }
      .nextIcon{
        font-size: 0.32rem;
        color: white;
        line-height: 0.7rem;
        text-align: center;
        background: url("../../../../assets/imgs/longbtnback.png") no-repeat;
        width: 6rem;
        height: 0.7rem;
        background-size: 6rem 0.7rem;
      }
    }
    .gxtip{
      position: absolute;
      bottom: 14%;
      left: 50%;
      margin-left: -2.5rem;
      width: 5rem;
      color: #9BD1CF;
      font-size: 0.28rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .gxline{
        width: 1rem;
        height: 0.02rem;
        background:#9BD1CF;
      }
    }
  }
</style>
