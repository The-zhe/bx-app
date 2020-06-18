<template>
  <div class="slowtype">
    <div class="slow_top"><img src="../../../assets/imgs/wxmb6.png"/></div>
    <div class="slow_title">请选择您想咨询的病种</div>
    <div class="slow_div" v-for="item in slowtypelist" @click="toconsult(item)">

      <img :src="item.img">
    </div>
  </div>
</template>

<script>
  import {getwxdoctorinfomb} from '../../../api/index'
    export default {
        name: "doctorinfoslowtype",
       data(){
         return {
           slowtypelist: [],
           doctorId:this.$route.query.id,
         }
       },
      methods:{
        toconsult(item){
          console.log('mabinfo',item.illName);
          sessionStorage.setItem('mbname',item.illName);
          sessionStorage.setItem('consultdoctorId',this.doctorId);
           this.$router.push({path:'/wxconsultuser'});
        },
        getinfo() {
          getwxdoctorinfomb(this.doctorId).then((res) => {
            this.slowtypelist = res.data.data;
            console.log('mbb', res.data.data);
          })
        },
        todoctorlist(item) {
          console.log(item);
        }
      },
      mounted() {
          this.getinfo();
      }
    }
</script>

<style scoped lang="less">
  .slowtype {
    .warp{
      width: 5.13rem;
      height: 4.5rem;
      background: white;
      color: #777777;
      .w_x{
        position: absolute;
        right: 0.3rem;
        top:0.2rem;
        width: 0.24rem;
        height: 0.24rem;
        img{
          width: 0.24rem;
          height: 0.24rem;
        }
      }
      .w_s{
        margin: 0.2rem auto 0;
        width: 3.34rem;
        height: 0.27rem;
        font-size: 0.28rem;
      }
      .w_m{
        margin: 0.3rem auto;
        width: 1.59rem;
        height: 1.59rem;
        img{
          width: 1.59rem;
          height: 1.59rem;
        }
      }
      .w_title{
        margin: 0.4rem auto 0.3rem;
        width: 1.4rem;
        height: 0.34rem;
        font-size: 0.34rem;
        color: #3FA998;
      }
      .w_content{
        margin: 0 auto;
        width: 4.5rem;
        height: 0.7rem;
        font-size: 0.3rem;
      }
    }
    .slow_top {
      height: 3.39rem;
      background: #007aff;

      img {
        width: 100%;
        height: 3.39rem;
      }
    }

    .slow_title {
      margin: 0.5rem auto;
      width: 3rem;
      height: 0.3rem;
      font-size: 0.3rem;
      color: #56B2AD;
      font-weight: bold;
    }

    .slow_div {
      margin: 0.25rem auto;
      width: 3.78rem;
      height: 1.13rem;

      img {
        width: 3.78rem;
        height: 1.13rem;
      }
    }
  }
</style>
