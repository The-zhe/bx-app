<template>
    <div class="wxmodifypassword">
      <div class="w_div"></div>
      <div class="m_div">
        <div class="c_text">当前密码</div>
        <div class="c_inp"><input placeholder="请输入当前密码" v-model="presentpwd"/></div>
        <div class="c_img"><img :src="openimg"/></div>
      </div>
      <div class="m_div">
        <div class="c_text">新密码</div>
        <div class="c_inp"><input type="password" placeholder="请输入新密码" v-model="newpwd"/></div>
        <div class="c_img"><img :src="closeimg"/></div>
      </div>
      <div class="m_div">
        <div class="c_text">确认密码</div>
        <div class="c_inp"><input type="password" placeholder="请再次输入新密码" v-model="confirmpwd"/></div>
        <div class="c_img"><img :src="closeimg"/></div>
      </div>
    <div class="c_btn" @click="tomodify"></div>
    </div>
</template>

<script>
  import {getmodifypwd} from '../../../../api'
  import Toast from "vant/es/toast";
    export default {
        name: "wxmodifypassword",
        data(){
          return{
            openimg:require('../../../../assets/imgs/x_xgmm1.png'),
            closeimg:require('../../../../assets/imgs/x_xgmm2.png'),
            presentpwd:'',
            newpwd:'',
            confirmpwd:''
          }
      },
      methods:{
        tomodify(){
          if(!this.presentpwd){
            Toast('请输入当前密码');
          }else if(this.newpwd!=this.confirmpwd){
            Toast('两次密码输入不一样');
          }else {
            if(!Boolean(localStorage.getItem('isDoctor'))){
              let userId=localStorage.getItem('userId');
              getmodifypwd(this.presentpwd,this.newpwd,userId,'0').then((res)=>{
                Toast(res.data.msg);
                  console.log('userId',res.data.msg);
              })
            }else {
              let doctorId=localStorage.getItem('doctorId');
              getmodifypwd(this.presentpwd,this.newpwd,doctorId,'1').then((res)=>{
                Toast(res.data.msg);
                console.log('doc',res.data.msg);
              })
            }

          }
        }
      }
    }
</script>

<style scoped lang="less">
.wxmodifypassword{
  height: 100%;
  background: #F6F3F7;
  font-size: 0.32rem;
  .w_div{
    height: 0.3rem;
  }
  .m_div{
    color: #777777;
    font-weight: bold;
    font-size: 0.32rem;
    height: 0.9rem;
    background: white;
    margin-bottom: 0.04rem;
    display: flex;
    justify-content: space-between;
    .c_text{
      margin-top: 0.2rem;
      margin-left: 0.3rem;
      width: 1.6rem;
      height: 0.32rem;
    }
    .c_inp{
      margin-top: 0.2rem;
      width: 4rem;
      height: 0.5rem;
      font-weight: normal;
      input{
        font-size: 0.32rem;
      }
    }
    .c_img{
      margin-right: 0.4rem;
      margin-top: 0.3rem;
      width: 0.5rem;
      height: 0.3rem;
      img{
        width: 0.33rem;
        height: 0.23rem;
      }
    }
  }
  .c_btn{
    width: 3rem;
    height: 0.7rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    margin-left: -1.5rem;
    background: url("../../../../assets/imgs/x_xg.png");
    background-size: 3rem 0.7rem;
  }
}
</style>
