<template>
  <div class="userlogin">
   <!-- <div class="u_line"></div>-->
    <div class="login_top">
      <div class="login_logo">
        <img src="../../../../assets/imgs/logo_bg.png"/>
      </div>
    </div>
    <!--<div class="login_select">
      <div class="tab_item"
           :class="{'active_item':index===activeTabIndex}"
           @click="changeTab(item,index)" :key="item.title" v-for="(item,index) in tabList">
        {{item.title}}
        <div class="line"></div>
      </div>
    </div>-->
    <!--<div class="login_userdoc">
      <div class="l_phone">
        <div class="p_img"><img src="../../../../assets/imgs/x_loginp.png"/></div>
        <div class="l_type" @click="toselect">{{usertype}}</div>
      </div>
      <van-popup
        v-model="selectshow"
        position="bottom"
      ><van-picker
        show-toolbar
        title="标题"
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
      </van-popup>
    </div>-->
    <div class="login_content">
      <div class="l_phone">
        <div class="shouji_img"><img src="../../../../assets/imgs/icon_signin_mob.png"/></div>
        <div class="p_input"><input placeholder="请输入手机号" type="number" pattern="\d*" v-model="phone"/></div>
      </div>
      <div class="l_phone">
        <div class="yzm_img"><img src="../../../../assets/imgs/icon_signin_pin.png"/></div>
        <div class="p_input"><input placeholder="请输入验证码" type="number" pattern="\d*" v-model="code"/>
          <span style="color:#D6D8D9">|</span>
          <span @click="tocheck" v-show="iscode">获取验证码</span>
          <span v-show="!iscode">重新发送{{second}}s</span>
        </div>
      </div>
    </div>
    <!--<div class="login_content" v-show="activeTabIndex===1">
      <div class="l_phone">
        <div class="a_img"><img src="../../../../assets/imgs/icon_signin_adm.png"/></div>
        <div class="p_input"><input placeholder="请输入账号" type="number" v-model="account"/></div>
      </div>
      <div class="l_phone">
        <div class="a_img"><img src="../../../../assets/imgs/icon_signin_pw.png"/></div>
        <div class="p_input"><input placeholder="请输入密码" v-model="mima"/>
          <span style="color:#D6D8D9">|</span>
          <span @click="toforgetlogin">忘记密码</span>
        </div>
      </div>
    </div>-->
    <div class="agree"><img :src="islogin?agreeimg:unagreeimg" @click="toagree"/>
      我已阅读并同意<span @click="touseragreement">"用户协议"</span>和<span @click="toprivacypolicy">"隐私政策"</span>
    </div>
    <div class="loginbtn" @click="tologin" v-show="activeTabIndex===0"></div>
    <div class="loginbtn1" @click="tologin1" v-show="activeTabIndex===1"></div>
  </div>
</template>

<script>
  import {getlogincode, getwxLogin, getJGpush, getaccountlogin, getTest} from '../../../../api'
  import Toast from "vant/es/toast";
  import {getSig} from "../../../../api";
  import {doctoraccountLogin, doctorLogin} from '../../../../api/apiz'

  export default {
    name: "userlogin",
    data() {
      return {
        columns:['患者','医生'],
        selectshow:false,
        usertype:'患者',
        usertypeid:0,
        account: '',  // 账号
        mima: '',   //密码
        tabList: [
          {
            title: '手机登录',
          },
          {
            title: '账号登录',
          }
        ],
        activeTabIndex: 0,
        iscode: true,
        second: '60',
        phone: '',
        code: '',
        islogin: false,
        unagreeimg: require('../../../../assets/imgs/xlogin2.png'),
        agreeimg: require('../../../../assets/imgs/xlogin3.png'),
        deviceSerial: '',//设备序列号
        registrationId: '',//极光注册id
        userId: '',
        userSig: '',
        hasAuth:''
      }
    },
    methods: {
      toselect() {
      this.selectshow=true;
        },
      onConfirm(value,index){
        this.usertypeid=index;
        this.usertype=value;
        this.selectshow=false;
      },
      onCancel(){
        this.selectshow=false;
      },
      getuserhome() {
        console.log('login原生调js');
        this.$bridge.registerHandler("touserhome", (data, responseCallback) => {
          let userinfo = JSON.parse(data);
          console.log('data',userinfo);
          this.userId=userinfo.userId;
          this.hasAuth=userinfo.hasAuth;
          localStorage.setItem('userId', userinfo.userId);
          localStorage.setItem('tablephone', userinfo.phone);
          localStorage.setItem('persex', userinfo.sex);
          localStorage.setItem('perbirthday',userinfo.birthday);
          localStorage.setItem('pername',userinfo.nickname);
          this.$nextTick(()=>{
            this.getNativeRoleType();
          });
        });
      },
      //医生 1  用户 0
      getNativeRoleType(){
        this.$bridge.callHandler("getRoleType", "", (res) => {
          if(res==='1'){
            localStorage.setItem('doctorId', this.userId);
            localStorage.removeItem('userId');
            localStorage.setItem('isDoctor', '1');
            localStorage.setItem('hasAuth', this.hasAuth);  //0 未认证 1 认证中  2已认证  3认证失败
            this.$router.push({name: 'doctorHomepage'})
          }else {
            localStorage.setItem('isDoctor', '0');
            this.$router.push({path:'/'});
          }
        });
      },
      getNativelogin(){
        this.$bridge.callHandler("toLogin", "", (res) => {
        });
      },
      //极光推送
      /*getNativeinfo() {
        this.$bridge.callHandler("getDeviceId", "", (res) => {
          this.deviceSerial = res;
        });
        this.$bridge.callHandler("getJGId", "", (res) => {
          this.registrationId = res;
        })
      },*/
      touseragreement() {
        this.$router_({path: '/useragreement'});
      },
      toprivacypolicy() {
        this.$router_({path: '/privacypolicy'});
      },
      changeTab(item, index) {
        this.islogin = false;
        this.activeTabIndex = index
        if (index == 0) {

        } else {

        }
      },
      //医生登录注册
      doctorlogin() {
        this.$router_({path: '/doctorLogin'});
      },
      toagree() {
        this.islogin = !this.islogin;
      },
      tocheck() {
        if (!this.phone) {
          Toast('请输入手机号');
        } else if (this.phone && this.phone.length !== 11) {
          Toast('请输入正确的手机号');
        } else {
          this.iscode = false;
          getlogincode(this.phone).then((res) => {
            this.second = '60';
            this.set_interval(this.second);
          });
        }
      },
      tologin() {
        let phone = this.phone + '';
        let code = this.code + '';
        if (!this.islogin) {
          Toast('请先勾选同意协议');
        } else if (!this.code) {
          Toast('请输入验证码');
        } else {
            if(this.usertypeid===1){
              doctorLogin(phone,code).then((res) => {
                if (res.data.code == 0) {
                  localStorage.setItem('isDoctor', '1')
                  localStorage.setItem('hasAuth', res.data.data.userInfo.hasAuth)
                  localStorage.setItem('doctorId', res.data.data.userInfo.userId)
                  this.$router.push({name: 'doctorHomepage'})
                }else{
                  Toast(res.data.msg)
                }
              });
            }else {
              getwxLogin(phone, code).then((res) => {
                if (res.data.code != 0) {
                  Toast('登录失败');
                } else {
                  localStorage.setItem('isDoctor', '0');
                  this.userId = res.data.data.userInfo.userId;
                  localStorage.setItem('userId', this.userId);
                  localStorage.setItem('tablephone', res.data.data.userInfo.phone);
                  localStorage.setItem('persex', res.data.data.userInfo.sex);
                  localStorage.setItem('perbirthday', res.data.data.userInfo.birthday);
                  console.log(res);
                  this.getUserSig();
                  let catCd = '1';
                  this.$nextTick(() => {
                    getJGpush(this.userId, this.registrationId, this.deviceSerial, catCd).then((res) => {

                    });
                  })
                  this.$router_({path: '/'});
                }
              });
            }
        }
      },
      tologin1() {
        let username = this.account + '';
        let mima = this.mima;
        if (!this.islogin) {
          Toast('请先勾选同意协议');
        } else if (!this.account) {
          Toast('请输入账号');
        } else if (!this.mima) {
          Toast('请输入密码');
        } else {
          if(this.usertypeid===1){
            doctoraccountLogin(this.account, this.mima).then((res) => {
              if (res.data.code == 0) {
                localStorage.setItem('isDoctor', '1')
                localStorage.setItem('hasAuth', res.data.data.userInfo.hasAuth)
                localStorage.setItem('doctorId', res.data.data.userInfo.userId)
                this.$router.push({name: 'doctorHomepage'})
              }else{
                Toast(res.data.msg)
              }
            });
          }else {
            getaccountlogin(username, mima).then((res) => {
              if (res.data.code != 0) {
                Toast('登录失败');
              } else {
                sessionStorage.setItem('token',res.data.data.token);
                localStorage.setItem('isDoctor', '');
                this.userId = res.data.data.userInfo.userId;
                localStorage.setItem('userId', this.userId);
                localStorage.setItem('tablephone', res.data.data.userInfo.phone);
                //sessionStorage.setItem('perusername', res.data.data.userInfo.username);
                localStorage.setItem('persex', res.data.data.userInfo.sex);
                localStorage.setItem('perbirthday', res.data.data.userInfo.birthday);
                this.getUserSig();
                this.$nextTick(() => {
                  getJGpush(this.userId, this.registrationId, this.deviceSerial, catCd).then((res) => {

                  });
                });
                getTest().then((res)=>{
                  console.log('test',res);
                })
                this.$router_({path: '/'});
                console.log('zhanghaomialogin', res);
              }
            })
          }
        }

      },
      //忘记密码
      toforgetlogin() {
        this.$router_({path: '/userforget'});
      },
      //登录腾讯im获取秘钥
      getUserSig() {
        let userid = this.userId + '';
        getSig(userid).then(res => {
          this.userSig = res.data.data;
          sessionStorage.setItem('userSig', this.userSig);
          this.getIMBegin();
        });
      },
      //登录im
      getIMBegin() {
        let userid = this.userId + '';
        let promise = this.tim.login({
          userID: userid, //登录的会员id
          userSig: this.userSig
        });
        promise.then(imResponse => {
          console.log("IM登录成功", imResponse);
        })
          .catch(function (imError) {
            console.warn("login error:", imError); // 登录失败的相关信息
          });
      },
      set_interval(second) {
        let time = second;
        let secondInterval = setInterval(() => {
          if (time === 0) {
            clearInterval(secondInterval);
            this.second = '0';
            this.iscode = true;
          } else {
            time--;
            this.second = time
          }
        }, 1000)
      },
    },
    mounted() {
      if(Boolean(Number(sessionStorage.getItem('inApp')))){
        this.getNativelogin();
      }else {
        /*this.getNativeinfo();*/
      }
      this.getuserhome();
    }
  }
</script>
<!--<style>
  @import url('../../../assets/less/vantstyle/toast.css');
</style>-->
<style scoped lang="less">
  .userlogin {
    font-size: 0.32rem;
    .u_line {
      position: absolute;
      left: 50%;
      margin-left: -0.01rem;
      top: 7.5rem;
      background: #BDBFC1;
      height: 0.28rem;
      width: 0.02rem;
    }

    .login_top {
      height: 4.5rem;
      background: url("../../../../assets/imgs/img_signin_bg.png") no-repeat;
      background-size: 100% 4.5rem;
      .login_logo{
        padding-top: 1.1rem;
        margin: 0 auto;
        width: 1.9rem;
        height: 1.7rem;
         img{
           width: 1.9rem;
           height: 1.7rem;
         }
      }
    }

    .login_select {
      margin: 0 auto;
      width: 5rem;
      height: 0.66rem;
      display: flex;
      justify-content: space-between;

      .tab_item {
        text-align: center;
        letter-spacing: 0.04rem;
        width: 3.5rem;
        height: 0.63rem;
        color: #C8C8CC;
      }

      .active_item {
        text-align: center;
        color: #58B1AE;

        .line {
          margin: 0.15rem 0 0 0.5rem;
          width: 1.45rem;
          height: 0.05rem;
          background: #58B1AE;
        }
      }
    }
    .login_userdoc{
      margin: 1rem auto;
      width: 6rem;
      height: 0.6rem;
      .l_type{
        font-size: 0.3rem;
        color: #767777;
        padding-left: 0.25rem;
        padding-top: 0.2rem;
        width: 4.9rem;
        height: 0.5rem;
        border-bottom: 1px solid #D6D8D9;
        background: url("../../../../assets/imgs/btn_signin_select.png") no-repeat 4.5rem 0.3rem;
        background-size: 0.21rem 0.19rem;
      }
    }
    .shouji_img{
      margin: 0.2rem;
      width: 0.24rem;
      height: 0.37rem;
      img{
        width: 0.24rem;
        height: 0.37rem;
      }
    }
    .yzm_img{
      margin: 0.2rem;
      width: 0.3rem;
      height: 0.37rem;
      img{
        width: 0.3rem;
        height: 0.37rem;
      }
    }
    .a_img{
      margin: 0.2rem;
      width: 0.32rem;
      height: 0.37rem;
      img{
        width: 0.32rem;
        height: 0.37rem;
      }
    }
    .p_img {
      margin: 0.2rem;
      width: 0.31rem;
      height: 0.37rem;

      img {
        width: 0.31rem;
        height: 0.37rem;
      }
    }

    .p_input {
      padding-left: 0.25rem;
      padding-top: 0.05rem;
      width: 5rem;
      height: 0.7rem;
      border-bottom: 1px solid #D6D8D9;

      input {
        color: #a7a7aa;
        width: 2.6rem;
        height: 0.7rem;
      }

      input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #C8C8CC;
      }

      span {
        margin-left: 0.1rem;
        white-space: nowrap;
        color: #56B2AD;
      }
    }
    .l_phone {
      margin-bottom: 0.8rem;
      width: 6rem;
      height: 0.8rem;
      font-size: 0.32rem;
      display: flex;
      justify-content: flex-start;
    }
    .login_content {
      margin: 0.8rem auto 0;
      width: 6rem;
      height: 2.3rem;
    }

    .agree1 {
      white-space: nowrap;
      margin: 2.4rem auto 0.5rem;
      width: 4.5rem;
      height: 0.32rem;
      display: flex;
      justify-content: space-between;
      color: #B3B3B3;
      font-size: 0.24rem;

      span {
        white-space: nowrap;
        color: #58B1AE;
      }
    }

    .agree {
      white-space: nowrap;
      margin: 2.4rem auto 0.5rem;
      width: 5.3rem;
      height: 0.32rem;
      display: flex;
      justify-content: space-between;
      color: #B3B3B3;
      font-size: 0.24rem;

      img {
        width: 0.32rem;
        height: 0.32rem;
      }

      span {
        white-space: nowrap;
        color: #58B1AE;
      }
    }

    .loginbtn {
      margin: 0 auto;
      width: 6rem;
      height: 0.7rem;
      background: url("../../../../assets/imgs/x_zcdl.png");
      background-size: 6rem 0.7rem;
    }

    .loginbtn1 {
      margin: 0 auto;
      width: 6rem;
      height: 0.7rem;
      background: url("../../../../assets/imgs/x_du_login.png");
      background-size: 6rem 0.7rem;
    }
  }
</style>
