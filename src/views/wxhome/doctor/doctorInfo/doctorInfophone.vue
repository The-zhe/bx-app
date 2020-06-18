// 2020/4/1 created by xtt
<template>
   <div class="doctorInfophone">
     <div class="form">
     <div class="formitem">
       <div class="title">
         手机号
       </div>
       <div class="phone">
         <input type="number" pattern="\d*" placeholder="输入手机号码" v-model="phone" />
       </div>
     </div>
     <div class="formitem">
      <div class="title">
        验证码
      </div>
       <div class="phone">
         <input type="number" pattern="\d*" placeholder="验证码" v-model="code" />
       </div>
       <img @click="getCode" src="../../../../assets/imgs/btn_grzx_pin.png"/>
     </div>
     </div>
     <div class="fixbtn">
       <div class="save" @click="tosave">
         保存
       </div>
     </div>
   </div>
</template>

<script>
    import {getdoctorwebinfophoneCode} from "../../../../api";
    import Toast from "vant/es/toast";

    export default {
        name: "doctorInfophone",
        data(){
          return{
            phone:'',
            code:''
          }
       },
      methods:{
        getCode(){
          if(this.phone.length===11) {
            getdoctorwebinfophoneCode(this.phone).then((res) => {
              console.log('666666666',res);
              if(res.data.data===400){
                Toast(res.data.msg);
              }else {

              }
            })
          }else {
            if(this.phone.length===0){
              Toast('请输入手机号')
            }else{
              Toast('手机号格式不正确')
            }
          }
          },
        tosave(){

        }
      }
    }
</script>

<style scoped lang="less">
.doctorInfophone{
   height: 100%;
   background: #F6F3F7;
   font-size: 0.3rem;
   color: #717071;
  .form{
    width: 100%;
    height: 2rem;
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
      width: 1.9rem;
      height: 0.6rem;
    }
    .title{
      margin-left: 0.15rem;
    }
    .phone{
      margin-left: 0.4rem;
      width: 3.5rem;
      input{
        width: 2.4rem;
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
