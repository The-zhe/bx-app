<template>
  <div class="doctorLogin_container">
    <div class="headerBack"></div>
    <div class="headerIcon">
      <img :src="headerIcon"/>
    </div>
    <div class="title">
      倍熙私医在线医生版
    </div>
    <div class="login_select">
      <div class="tab_item"
           :class="{'active_item':index===activeTabIndex}"
           @click="changeTab(item,index)" :key="item.title" v-for="(item,index) in tabList">
        {{item.title}}
        <div class="line"></div>
      </div>
    </div>
    <div v-show="activeTabIndex===0">
      <div class="input phone_input">
        <input placeholder="输入手机号码" v-model.trim="phone" pattern="\d*" type="number"/>
      </div>
      <div class="input code_input">
        <input placeholder="验证码" v-model="code" pattern="\d*" type="number"/>
        <div class="getCode" @click="getCodeFun">{{getCodeText}}</div>
      </div>
      <img class="submitButton" @click="submitForm" role="button" :src="submitButton"/>
      <div class="agree">
        注册代表您同意<span @click="jumpToAgree">"用户协议"</span>及<span @click="jumpToPrivacy">"隐私政策"</span>
      </div>
    </div>
    <div v-show="activeTabIndex===1">
      <div class="input phone_input">
        <input placeholder="请输入账号" v-model="account" type="text"/>
      </div>
      <div class="input code_input">
        <input placeholder="请输入密码" v-model="mima" type="password"/>
      </div>
      <div class="agree">
        登录代表您同意<span @click="jumpToAgree">"用户协议"</span>及<span @click="jumpToPrivacy">"隐私政策"</span>
      </div>
      <img class="submitButton" @click="submitForm2" role="button" :src="submitButton2"/>
      <div class="loginforget" @click="toforgetlogin">忘记密码</div>
    </div>
    <div class="backToUserLogin" @click="backToUserLogin">
      如果您是患者，请返回患者登录页面
    </div>
  </div>
</template>

<script>
  import {getCode, doctorLogin, doctoraccountLogin} from '../../../../api/apiz'
  import Toast from "vant/es/toast";

  export default {
    name: "doctorLogin",
    data() {
      return {
        headerIcon: require('@/assets/imgs/img_yszc_logo.png'),
        submitButton: require('@/assets/imgs/btn_yszc_login.png'),
        submitButton2: require('@/assets/imgs/xlogin4.png'),
        phone: '',
        getCodeText: '获取验证码',
        code: '',
        timer: null,
        count: 60,
        tabList: [
          {
            title: '手机快捷登录',
          },
          {
            title: '账号密码登录',
          }
        ],
        activeTabIndex: 0,
        mima:'',
        account:'',
      }
    },
    methods: {
      getNativelogin(){
        this.$bridge.callHandler("toLogin", "", (res) => {
        });
      },
      toforgetlogin(){
        this.$router_({ path:'/userforget',query:{type:'doctor'}});
      },
      changeTab(item, index) {
        this.activeTabIndex = index
        if (index == 0) {

        } else {


        }
      },
      getCodeFun() {
        if (this.phone.length == 11) {
          getCode(this.phone).then((res) => {
            this.getCodeText = '已发送'
          })
          /*            if(!this.timer){
                         this.getCodeFun(this.phone)
                         this.count=60;
                         this.timer = setInterval(()=>{
                             if(this.count>0&&this.count<=60){
                                 this.count--
                                 this.getCodeText=`${this.count}秒后重新获取`
                             }else{
                                 this.getCodeText='重新获取'
                                 clearInterval(this.timer)
                                 this.timer=null
                             }
                         },1000)
                     } */
        } else if (!this.phone){
            Toast('请输入手机号');
        }else{
          Toast('请输入正确的手机号');
        }

      },
      submitForm2(){
        let username=this.account+'';
        let password=this.password;
        if(!this.account){
          Toast('请输入账号');
        }else if(!this.mima){
          Toast('请输入密码');
        }else {
          doctoraccountLogin(this.account, this.mima).then((res) => {
            if (res.data.code == 0) {
              localStorage.setItem('isDoctor', '1')
              localStorage.setItem('hasAuth', res.data.data.userInfo.hasAuth)  //0 未认证 1 认证中  2已认证  3认证失败
              localStorage.setItem('doctorId', res.data.data.userInfo.userId)
              this.$router.push({name: 'doctorHomepage'})
            }else{
              Toast(res.data.msg)
            }
          });
        }
      },
      submitForm() {
        doctorLogin(this.phone, this.code).then((res) => {
          if (res.data.code == 0) {
            localStorage.setItem('isDoctor', '1')
            localStorage.setItem('hasAuth', res.data.data.userInfo.hasAuth)
            localStorage.setItem('doctorId', res.data.data.userInfo.userId)
            this.$router.push({name: 'doctorHomepage'})
          }else{
            Toast(res.data.msg)
          }
        })
      },
      backToUserLogin() {
        this.$router_({name: 'userlogin'})
      },
      jumpToAgree() {
        this.$router_({name: 'userAgreement'})
      },
      jumpToPrivacy() {
        this.$router_({name: 'privacyPolicy'})
      }
    },
    mounted() {
      if(Boolean(Number(sessionStorage.getItem('inApp')))){
        this.getNativelogin();
      }else {
      }
    }


  };
</script>

<style scoped lang="less">
  .doctorLogin_container {
    .login_select {
      margin: 0 auto;
      width: 5rem;
      height: 0.66rem;
      display: flex;
      justify-content: space-between;

      .tab_item {
        width: 3.5rem;
        height: 0.63rem;
        color: #C8C8CC;
        font-size: 0.34rem;
      }

      .active_item {
        color: #3A3A3A;

        .line {
          margin-top: 0.2rem;
          width: 0.72rem;
          height: 0.07rem;
          background: #58B1AE;
        }
      }
    }
    .loginforget{
      white-space: nowrap;
      margin-top: 0.3rem;
      margin-left: 4.7rem;
      width: 1.3rem;
      height: 0.32rem;
      color: #56B2AD;
      font-size: 0.32rem;
    }
    .headerBack {
      height: 4.07rem;
      background: url('../../../../assets/imgs/img_yszc_bg.png') no-repeat;
      background-size: 100% 100%;
    }

    .headerIcon {
      width: 1.65rem;
      height: 1.64rem;
      margin: -0.96rem auto 0;
      border-radius: 10px;
      box-shadow: 0rem 0rem 0.1rem rgba(96, 96, 96, 0.32);

      img {
        width: 1.65rem;
        height: 1.64rem;
      }
    }

    .title {
      font-size: 0.36rem;
      color: #56B2AD;
      margin: 0.2rem 0 0.2rem;
      display: flex;
      justify-content: center;
    }

    .input {
      width: 6.11rem;
      height: 0.97rem;
      background-color: #F7F4F8;
      margin: 0.5rem auto 0;
      font-size: 0.32rem;
      display: flex;
      align-items: center;
      border-radius: 0.5rem;

      input {
        width: 3.5rem;
        color: #C8C8CC;
        padding-left: 0.33rem;
        background-color: #F7F4F8;
        font-size: 0.32rem;
      }

      .getCode {
        white-space: nowrap;
        margin-right: 0.33rem;
        padding-left: 0.3rem;
        border-left: 0.01rem solid #D9D6D9;
        margin-left: auto;
        color: #56B2AD;
      }
    }

    .submitButton {
      width: 6.11rem;
      height: 0.97rem;
      margin: 0.75rem auto 0;
    }

    .agree {
      text-align: center;
      width: 6.5rem;
      //width: 5.98rem;
      margin: 0.5rem auto 0;
     /* display: flex;
      align-items: center;*/
      font-size: 0.24rem;
      color: #B3B3B3;

      span {
        color: #56B2AD;
      }
    }

    .backToUserLogin {
      margin-top: 0.8rem;
      text-align: center;
      color: #56B2AD;
      font-size: 0.3rem;
    }
  }
</style>
