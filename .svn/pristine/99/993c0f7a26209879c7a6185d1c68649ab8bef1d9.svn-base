<template>
  <div class="userforget">
    <div class="login_top"></div>
    <div class="top_text">找回密码</div>
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
      <div class="l_phone">
        <div class="a_img"><img src="../../../../assets/imgs/icon_signin_pw.png"/></div>
        <div class="p_input"><input placeholder="请输入新密码" v-model="mimanew"/></div>
      </div>
      <div class="l_phone">
        <div class="a_img"><img src="../../../../assets/imgs/icon_signin_pw.png"/></div>
        <div class="p_input"><input placeholder="请输入密码" v-model="mimaconfirm"/></div>
      </div>
    </div>
    <div class="loginbtn" @click="toconfirm"></div>
  </div>
</template>

<script>
  import {getlogincode, getresetpwd} from "../../../../api";
  import Toast from "vant/es/toast";
  export default {
    name: "userforget",
    data() {
      return {
        phone: '',
        code: '',
        mimanew: '',
        mimaconfirm: '',
        iscode:true,
        second:'',
        type:'',
      }
    },
    methods:{
      tocheck(){
        if(!this.phone){
          Toast('请输入手机号');
        }else if(this.phone&&this.phone.length!==11){
          Toast('请输入正确的手机号');
        }else {
          this.iscode=false;
          getlogincode(this.phone).then((res)=>{
            this.second='60';
            this.set_interval(this.second);
          });
        }
      },
      toconfirm(){
          let phone=this.phone;
          let code=this.code;
          let newPwd=this.mimanew;
          let roleType=this.type;
         if(this.mimanew!=this.mimaconfirm){
           Toast('两次密码不一样');
         }else if(!this.phone){
           Toast('请输入手机号');
         }else if(!this.code){
           Toast('请输入验证码');
         }else {
           let isD=Boolean(localStorage.getItem('isDoctor'));
           if(isD){
             getresetpwd(phone,code,newPwd,'1').then((res)=>{
               console.log('重置密码了',res);
             })
           }else {
             getresetpwd(phone,code,newPwd,'0').then((res)=>{
               console.log('重置密码了',res);
             })
           }

         }
      }
    },
    mounted() {
      if(this.$route.query.type==='doctor'){
        this.type='1';
      }else{
        this.type='0';
      }
    }
  }
</script>
<style scoped lang="less">
  .userforget {
    font-size: 0.32rem;
    .login_top {
      height: 3.8rem;
      background: url("../../../../assets/imgs/x_loginback.png") no-repeat;
      background-size: 100% 3.8rem;
    }
    .top_text{
      width: 1.5rem;
      height: 0.32rem;
      color: #56B2AD;
      margin: 0 auto;
      text-align: center;
    }
    .login_content{
      margin: 1.2rem auto;
      width: 6rem;
      height: 5rem;
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
        margin: 0.2rem 0.2rem 0.2rem 0.18rem;
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
          margin-left: 0.15rem;
          white-space: nowrap;
          color: #56B2AD;
        }
      }
      .l_phone {
        margin-bottom: 0.4rem;
        width: 6rem;
        height: 0.8rem;
        font-size: 0.32rem;
        display: flex;
        justify-content: flex-start;
      }
    }
    .loginbtn{
      margin: 0.5rem auto;
      width: 6rem;
      height: 0.7rem;
      background: url("../../../../assets/imgs/xlogin8.png");
      background-size: 6rem 0.7rem;
    }
  }
</style>
