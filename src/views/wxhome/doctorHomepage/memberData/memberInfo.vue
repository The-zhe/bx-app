// 2020/4/13 created by xtt
<template>
 <div class="memberInfo">
   <div class="top">
     <div class="toptitle">
       <img src="../../../../assets/imgs/return_white.png" @click="toback">
       个人信息</div>
   </div>
   <div class="info">
     <div class="nameinfo">姓名<div class="datainfo">{{memberInfo.name}}</div></div>
     <div class="nameinfo">性别<div class="datainfo">{{memberInfo.sex}}</div></div>
     <div class="nameinfo">出生年月<div class="datainfo">{{memberInfo.birthday}}</div></div>
     <div class="nameinfo">手机号<div class="datainfo">{{memberInfo.phone}}</div></div>
     <div class="nameinfo">地址<div class="datainfo">{{memberInfo.address}}</div></div>
   </div>
   <div class="linkinfo" v-for="item in linkList">
     <div class="nameinfo">联系人1<div class="datainfo">{{item.name}}</div></div>
     <div class="nameinfo">联系人电话<div class="datainfolink">{{item.phone}}</div></div>
   </div>
 </div>
</template>

<script>
    import {getdoctormemberHomeInfo} from "../../../../api";

    export default {
        name: "memberInfo",
       data(){
          return{
            memberInfo:null,
            linkList:[],
          }
      },
      methods:{
          getInfo(){
            getdoctormemberHomeInfo(4841561225810944).then((res)=>{
                this.memberInfo=res.data.data;
                this.linkList=res.data.data.hjjkUserLinkmanVoList;
               console.log('detailinfo',res.data.data);
            })
          },
        toback(){
            this.$router.go(-1);
        }
      },
      mounted() {
        this.getInfo();
      }
    }
</script>

<style scoped lang="less">
.memberInfo{
   font-size: 0.3rem;
   color: #777777;
   font-weight: bold;
  .top{
    height: 2rem;
    background: url("../../../../assets/imgs/img_hyzl_bg.png");
    background-size: 100% 2rem;
    .toptitle{
      font-weight: normal;
      padding-top: 1.1rem;
      font-size: 0.36rem;
      color: white;
      text-align: center;
      height: 0.67rem;
      background: url("../../../../assets/imgs/img_hyzl_bg.png");
      background-size: 100% 1.76rem;
      img{
        left: 0.22rem;
        position: absolute;
        width: 0.16rem;
        height: 0.3rem;
      }
    }
  }
  .info{
    margin-top: -0.2rem;
    border-radius: 0.16rem 0.16rem 0 0;
    height: 5rem;
    border-bottom: 0.2rem solid #F5F5F5;
    background: white;
  }
  .nameinfo{
    padding: 0 0.2rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 6.5rem;
    height: 1rem;
    border-bottom: 0.02rem solid #F5F5F5;
    .datainfo{
      color: #707070;
      font-weight: normal;
    }
    .datainfolink{
      font-weight: normal;
      padding-left: 0.4rem;
      background: url("../../../../assets/imgs/btn_hyzl_apply.png") no-repeat;
      background-size: 0.37rem 0.37rem;
    }
  }
  .linkinfo{
    height: 2rem;
    border-bottom: 0.2rem solid #F5F5F5;
  }
}
</style>
