<template>
  <div class="fillphone">
    <div class="filltop">
      新冠肺炎免费咨询
    </div>
    <div class="filltopback"></div>
    <div class="filltoptip">1.医生回复信息将以短信方式发送至您的手机，请确保<br>&emsp;你的咨询信息完整准确， <br>2.详情查看请下载APP后至我的消息中查看。</div>
    <div class="fillradius">
      <div class="login_tip">填写回复消息接收手机号码</div>
      <div class="login_content">
        <div class="l_phone">
          <div class="p_img"><img src="../../../assets/imgs/x_fill_p1.png"/></div>
          <div class="p_input"><input placeholder="请输入手机号" type="number" pattern="\d*" v-model="phone"/></div>
        </div>
        <div class="l_phone">
          <div class="p_img2"><img src="../../../assets/imgs/x_fill_p2.png"/></div>
          <div class="p_input"><input placeholder="请输入验证码" type="number" pattern="\d*" v-model="code"/>
            <span style="color:#D6D8D9">|</span>
            <span @click="tocheck" v-show="iscode">获取验证码</span>
            <span v-show="!iscode">重新发送{{second}}s</span>
          </div>
        </div>
      </div>
      <div class="fill_line"></div>
    </div>
    <div class="p_app"><img src="../../../assets/imgs/x_dkapp.png"></div>
    <div class="p_tip">查看审核进度，提供在线咨询，私人医生服务 </div>
    <div class="fillbtnback">
    <div class="fillbtn" v-show="hideshow">
      <div class="fillzx" @click="toahead"></div>
      <div class="fillnext" @click="tonext"></div>
    </div>
    </div>
  </div>
</template>

<script>
  import {getSubForm, gettablecode} from '../../../api/index'
  import Toast from "vant/es/toast";
  import {getSig} from "../../../api";

  export default {
    name: "fillphone",
    data() {
      return {
        docmHeight: document.documentElement.clientHeight ||document.body.clientHeight,
        showHeight: document.documentElement.clientHeight ||document.body.clientHeight,
        hideshow:true,  //显示或者隐藏footer
        issubmit:false,
        iscode: true,
        phone: localStorage.getItem('tablephone'),
        code: '',
        second: '60',
        isapp: true,
        userId:'',
        userSig:'',
        isuserId:localStorage.getItem('userId'),
      }
    },
    methods: {
      getNativeapp() {
        this.$bridge.callHandler("isAndroid", "", (res) => {
          if (res === 1) {
            this.isapp = false;
          }
        });
      },
      tocheck() {
        if (!this.phone) {
          Toast('请输入手机号');
        } else if (this.phone && this.phone.length !== 11) {
          Toast('请输入正确的手机号');
        } else {
          this.iscode = false;
          gettablecode(this.phone).then((res) => {
            console.log('yqcode',res);
            if(res.data.code===0){
              this.second = '60';
              this.set_interval(this.second);
            }else if(res.data.code===400){
              this.$dialog.alert({
                title: '提示',
                message: '疫情期间为每位患者免费提供一次新冠肺炎咨询表提交机会，你的机会已用完，可下载APP与医生进行更多咨询交流',
                confirmButtonText: '确 定',
                confirmButtonColor: '#3FA998',
              }).then(() => {
                this.emptytable();
                this.$router_({path: '/'});
              }).catch(() => {
              });
            }
          });
        }
      },
      toahead() {
        this.$router_({path: '/fillsass'});
      },
      emptytable() {
          localStorage.removeItem('nickname');
          localStorage.removeItem('istableupd');
          localStorage.removeItem('yqlistsubmit');
          localStorage.removeItem('jqDistrictNm');
          localStorage.removeItem('districtNm');
          localStorage.removeItem('birthday');
          localStorage.removeItem('cityNm');
          localStorage.removeItem('code');
          localStorage.removeItem('fkxxOptionsA');
          localStorage.removeItem('fkxxOptionsB');
          localStorage.removeItem('fkxxOptionsBDesc');
          localStorage.removeItem('fkxxOptionsC');
          localStorage.removeItem('fkxxOptionsCDesc');
          localStorage.removeItem('fkxxOptionsD');
          localStorage.removeItem('fkxxOptionsDDesc');

          localStorage.removeItem('illnessDesc');
          localStorage.removeItem('jqCityNm');
          localStorage.removeItem('jqProviceNm');
          localStorage.removeItem('name');
          localStorage.removeItem('pastHistory');

          localStorage.removeItem('phone');
          localStorage.removeItem('proviceNm');
          localStorage.removeItem('reportImg');
          localStorage.removeItem('sex');
          localStorage.removeItem('statNm');

          localStorage.removeItem('symOptionsExot');
          localStorage.removeItem('symOptionsExotTime');
          localStorage.removeItem('symOptionsFlst');
          localStorage.removeItem('symOptionsFlstTime');
          localStorage.removeItem('symOptionsFr');

          localStorage.removeItem('symOptionsFrTime');
          localStorage.removeItem('symOptionsFx');
          localStorage.removeItem('symOptionsFxTime');
          localStorage.removeItem('symOptionsKs');
          localStorage.removeItem('symOptionsKsTime');

          localStorage.removeItem('symOptionsXmqj');
          localStorage.removeItem('symOptionsXmqjTime');
          localStorage.removeItem('temp');
          localStorage.removeItem('tripCityNm');
          localStorage.removeItem('tripDesc');

          localStorage.removeItem('tripEndTime');
          localStorage.removeItem('tripProviceNm');
          localStorage.removeItem('tripStartTime');
          localStorage.removeItem('visitingProcess');

      },
      tosubmit(){
        if(!this.code){
          Toast('请输入验证码');
        }else {
          let hjjkYqConsultRo = {
            nickname:localStorage.getItem('nickname'),
            hjjkYqTripVos: JSON.parse(localStorage.getItem('yqlistsubmit')),
            jqDistrictNm: localStorage.getItem('jqDistrictNm'),
            districtNm: localStorage.getItem('districtNm'),
            birthday: localStorage.getItem('birthday'),
            catCd: "",
            catNm: "",
            cityCd: "",
            cityNm: localStorage.getItem('cityNm'),
            code: this.code,
            fkxxOptionsA: localStorage.getItem('fkxxOptionsA'),
            fkxxOptionsB: localStorage.getItem('fkxxOptionsB'),
            fkxxOptionsBDesc: localStorage.getItem('fkxxOptionsBDesc'),
            fkxxOptionsC: localStorage.getItem('fkxxOptionsC'),
            fkxxOptionsCDesc: localStorage.getItem('fkxxOptionsCDesc'),
            fkxxOptionsD: localStorage.getItem('fkxxOptionsD'),
            fkxxOptionsDDesc: localStorage.getItem('fkxxOptionsDDesc'),
            id: 0,
            pastHistory: localStorage.getItem('pastHistory'),
            phone: this.phone,
            proviceCd: "",
            proviceNm: localStorage.getItem('proviceNm'),
            reportImg: localStorage.getItem('reportImg'),
            sex: localStorage.getItem('sex'),
            statCd: "",
            statNm: "",
            symOptionsEx: localStorage.getItem('symOptionsEx'),
            symOptionsExTime: localStorage.getItem('symOptionsExTime'),
            symOptionsFr: localStorage.getItem('symOptionsFr'),
            symOptionsFrTime: localStorage.getItem('symOptionsFrTime'),
            symOptionsFx: localStorage.getItem('symOptionsFx'),
            symOptionsFxTime: localStorage.getItem('symOptionsFxTime'),
            symOptionsKs: localStorage.getItem('symOptionsKs'),
            symOptionsKsTime: localStorage.getItem('symOptionsKsTime'),
            symOptionsOt: localStorage.getItem('symOptionsOt'),
            symOptionsOtTime: localStorage.getItem('symOptionsOtTime'),
            symOptionsXmqj: localStorage.getItem('symOptionsXmqj'),
            symOptionsXmqjTime: localStorage.getItem('symOptionsXmqjTime'),
            temp: localStorage.getItem('temp'),
            /*tripCityCd: "",
          tripCityNm: localStorage.getItem('tripCityNm'),
          tripDesc: localStorage.getItem('tripDesc'),
          tripEndTime: localStorage.getItem('tripEndTime'),
          tripProviceCd: "",
          tripProviceNm: localStorage.getItem('tripProviceNm'),
          tripStartTime: localStorage.getItem('tripStartTime'),*/
            userId: Number(localStorage.getItem('userId')),
            visitingProcess: localStorage.getItem('visitingProcess'),
            illnessDesc: localStorage.getItem('illnessDesc'),
            jqProviceNm: localStorage.getItem('jqProviceNm'),
            jqCityNm: localStorage.getItem('jqCityNm'),
            serviceId:4667450476631078,//服务id
            serviceSpecId:0  // 服务规格id

          };
          getSubForm(hjjkYqConsultRo).then((res) => {
            this.issubmit=true;
            this.userId = res.data.data;
            console.log('ppp', res);
            if (res.data.code === 0) {
              this.getUserSig();
              let inApp = Boolean(localStorage.getItem('inApp'));
              if (inApp) {
                this.$dialog.alert({
                  title: '提交成功',
                  message: '医生将会尽快回复您的咨询 请注意消息查收！',
                  confirmButtonText: '确 定',
                  confirmButtonColor: '#3FA998',
                }).then(() => {
                  this.emptytable();
                  this.$router_({path: '/'});
                }).catch(() => {

                });
              } else {
                this.$dialog.confirm({
                  title: '提交成功',
                  message: '医生将会尽快回复您的咨询 请注意消息查收！' + '<br>' + '也可下载APP，与医生一对一即时交流',
                  confirmButtonText: '确 定',
                  cancelButtonText: '打开APP',
                  confirmButtonColor: '#56B2AD',
                  cancelButtonColor: '#56B2AD'
                }).then(() => {
                  this.emptytable();
                  this.$router_({path: '/'});
                }).catch(() => {
                  this.emptytable();
                });
              }
            }else if(res.data===''){
              Toast('验证码输入错误');
            }
            else {
              let msg = res.data.msg;
              Toast(msg);
            }
          });
        }
      },
      tonext() {
        if(this.issubmit){
          Toast('请勿多次点击');
        }else {
          //let isupd=localStorage.getItem('istableupd');
          if (this.isuserId) {   //已经登录了
            this.tosubmit();
          } else if (!this.code) {
            Toast('请输入验证码');
          }
          else {
            this.tosubmit();
          }
        }
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
      //登录腾讯im获取秘钥
      getUserSig() {
        let userid=this.userId+'';
        getSig(userid).then(res => {
          this.userSig = res.data.data;
          this.getIMBegin();
        });
      },
      //登录im
      getIMBegin() {
        let userid=this.userId+'';
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
    },
    watch: {
      //监听显示高度
      showHeight:function() {
        if(this.docmHeight > this.showHeight){
          //隐藏
          this.hideshow=false
        }else{
          //显示
          this.hideshow=true
        }
      }
    },
    mounted() {
      if(Boolean(localStorage.getItem('inApp'))){
        this.isapp=false;
      }
      //监听事件
      window.onresize = ()=>{
        return(()=>{
          this.showHeight = document.documentElement.clientHeight || document.body.clientHeight;
        })()
      }
    }
  }
</script>
<style>
  @import url('../../../assets/less/vantstyle/toast.css');
  @import url('../../../assets/less/vantstyle/dialog.css');
  @import url('../../../assets/less/vantstyle/button.css');
</style>
<style scoped lang="less">
  .fillphone {
    padding-bottom: 1rem;
    font-size: 0.3rem;
    .fill_line{
      margin: 0 auto;
      width: 6.6rem;
      height: 0.02rem;
      background: #F1EFF2;
    }
    .filltop{
      height: 0.9rem;
      font-size: 0.36rem;
      color: white;
      line-height: 0.9rem;
      text-align: center;
      background: #56B2AE;
    }
    .filltopback{
      height: 0.5rem;
      background:#56B2AE;
    }
    .filltoptip{
      line-height: 0.4rem;
      padding-top: 0.35rem;
      padding-left: 0.5rem;
      margin-top: -0.5rem;
      height: 1.95rem;
      background: #F2F2F4;
      border-radius: 0.3rem 0.3rem 0 0;
      font-size: 0.26rem;
      color: #949494;
    }
    .fillradius{
      padding-top: 1.17rem;
      margin-top: -0.3rem;
      height: auto;
      background: #FFFFFF;
      border-radius: 0.3rem;

    }

    .filltitle {
      margin-top: 0.54rem;
      margin-left: 0.5rem;
      width: 3rem;
      height: 0.3rem;
      font-weight: bold;
      color: #767777;
    }
    .login_tip{
      margin: 0 auto;
      font-size: 0.36rem;
      color: #767777;
      font-weight: bold;
      width: 5rem;
      height: 0.45rem;
      text-align: center;
    }
    .login_content {
      margin: 1rem 0 1.1rem 0.7rem;
      width: 6.2rem;
      height: 2.3rem;
      .l_phone {
        margin-bottom: 0.5rem;
        width: 6.11rem;
        height: 0.8rem;
        font-size: 0.32rem;
        border-radius: 0.4rem;
        background: #F6F5F8;
        display: flex;
        justify-content: flex-start;

        .p_img {
          margin:0.2rem 0 0 0.36rem;
          width: 0.24rem;
          height: 0.37rem;

          img {
            width: 0.24rem;
            height: 0.37rem;
          }
        }
        .p_img2{
          margin: 0.2rem 0 0 0.32rem;
          width: 0.32rem;
          height: 0.37rem;

          img {
            width: 0.32rem;
            height: 0.37rem;
          }
        }

        .p_input {
          padding-left: 0.25rem;
          padding-top: 0.05rem;
          width: 4.8rem;
          height: 0.6rem;
          background:#F6F5F8;
          input {
            color: #a7a7aa;
            width: 2.6rem;
            height: 0.7rem;
            background:#F6F5F8;
          }

          input::-webkit-input-placeholder {
            /* placeholder颜色  */
            color: #C8C8CC;
          }

          span {
            margin-left: 0.15rem;
            white-space: nowrap;
            color: #56B2AD;
          }
        }

      }
    }
    .p_app{
      margin:1.2rem auto 0;
      width: 5rem;
      height: 0.7rem;
      img{
        width: 5rem;
        height: 0.7rem;
      }
    }
    .p_tip{
      width: 6rem;
      height: 0.4rem;
      text-align: center;
      margin: 0.5rem auto;
      color: #F4793B;
      font-size: 0.28rem;
    }

    .fillbtnback{
      width: 100%;
      position: fixed;
      height: 1.4rem;
      bottom: 0;
      background: white;
    }
    .fillbtn{
      width: 5.9rem;
      height: 0.7rem;
      display: flex;
      justify-content: space-between;
      margin: 0.34rem auto;
      .fillzx {
        width: 2.72rem;
        height: 0.72rem;
        background: url("../../../assets/imgs/x_syb2.png") no-repeat;
        background-size: 2.72rem 0.72rem;
      }

      .fillnext {
        width: 2.72rem;
        height: 0.72rem;
        background: url("../../../assets/imgs/x_tj2.png") no-repeat;
        background-size: 2.72rem 0.72rem;
      }
    }
  }
</style>
