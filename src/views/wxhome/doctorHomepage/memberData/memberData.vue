// 2020/4/13 created by xtt
<template>
 <div class="memberData">
    <div class="top">
     <div class="toptitle">
       <img src="../../../../assets/imgs/return_white.png">
       会员资料</div>
    </div>
    <div class="topdata">
      <img :src="memberinfo.imgUrl"/>
      <div class="topdatainfo">
        <div class="nameinfo">
          <div class="nameellipsis">{{memberinfo.name}}</div>
          <div class="nametype">{{memberinfo.memberTypeNm}}</div>
          <div :class="memberinfo.label?'namelabel':''">{{memberinfo.label}}</div>
        </div>
        <div>{{memberinfo.sex}}  {{memberinfo.age|age}}   {{memberinfo.proviceNm}} {{memberinfo.cityNm}}</div>
      </div>
      <div class="focus">
        <img :src="focus?focusImg:unfocusImg" @click="focus=!focus"/>
        重点关注
      </div>
    </div>
    <div class="tip">
      <p>已服务次数：{{memberinfo.serviceNum}}次</p>
      <p>剩余：{{memberinfo.residualTimes}}次</p>
      <p>到期：{{memberinfo.expireDate}}</p></div>
    <div class="type">
      <div class="tab" v-for="item in tablist" @click="toPage(item)">
        <img :src="item.img"/>
        <div style="width: 5.3rem">{{item.name}}</div>
        <img style="width: 0.18rem;height: 0.3rem" src="../../../../assets/imgs/btn_hyzl_next.png"/>
      </div>
    </div>
 </div>
</template>

<script>
  import {getdoctormemberarchiveList, getdoctormemberHome} from "../../../../api";

    export default {
        name: "memberData",
      filters:{
          age:function (val) {
            let returnAge='';
            let numberAge=0;
            let birthYear = new Date(val).getFullYear();
            let birthMonth = new Date(val).getMonth()+1;
            let birthDay = new Date(val).getDate();
            //获取当前时间
            let d = new Date();
            let nowYear = d.getFullYear();
            let nowMonth = d.getMonth() + 1;
            let nowDay = d.getDate();
            let ageDiff = nowYear - birthYear; //年之差
            //计算周岁年龄差
            if (nowYear === birthYear) {
              returnAge = 0; //同年 则为0岁
            }
            else {
                if (nowMonth === birthMonth) {
                  let dayDiff = nowDay - birthDay; //日之差
                  if (dayDiff < 0) {
                    numberAge=ageDiff - 1;
                    returnAge = (ageDiff - 1)+'岁';
                  } else {
                    numberAge=ageDiff;
                    returnAge = ageDiff+'岁';
                  }
                } else {
                  let monthDiff = nowMonth - birthMonth; //月之差
                  if (monthDiff < 0) {
                    numberAge=ageDiff - 1;
                    returnAge = (ageDiff - 1)+'岁';
                  } else {
                    numberAge=ageDiff;
                    returnAge = ageDiff+'岁';
                  }
                }
            }
            if(numberAge<2){
              returnAge=Math.floor((new Date().getTime()-new Date(val).getTime())/(1000 * 60 * 60 * 24))+'天';
            }else if(numberAge<6){
              returnAge=[(numberAge-2)*12+(12-birthMonth)+nowMonth]+'月';
            }
            return returnAge
          }
      },
      data(){
          return{
            unfocusImg:require('../../../../assets/imgs/btn_ydyzx_follow_nor.png'),
            focusImg:require('../../../../assets/imgs/btn_ydyzx_follow_pre.png'),
            focus:false,
            tablist:[
              {
                name:'个人信息',
                img:require('../../../../assets/imgs/icon_hyzl_grxx.png'),
                url:'/memberInfo',
              },
              {
                name:'会员特权',
                img:require('../../../../assets/imgs/icon_hyzl_hytq.png'),
                url:'',
              },
              {
                name:'健康档案',
                img:require('../../../../assets/imgs/icon_hyzl_jkda.png'),
                url:'',
              },
              {
                name:'医疗记录',
                img:require('../../../../assets/imgs/icon_hyzl_yljl.png'),
                url:'',
              },
              {
                name:'专项管理',
                img:require('../../../../assets/imgs/icon_hyzl_zxgl.png'),
                url:'/memberSpecialManagement',
              },
              {
                name:'体检记录',
                img:require('../../../../assets/imgs/icon_hyzl_tjjl.png'),
                url:'',
              }
            ],
            memberinfo:null,
          }
      },
      methods:{
        toPage(item){
          this.$router.push({path:item.url});
        },
        getinfo(){
          getdoctormemberHome(4841561225810944).then((res)=>{
            this.memberinfo=res.data.data;
            this.focus=this.memberinfo.focusOn;
            console.log('memberinfo',res.data.data);
          })
        }
      },
      mounted() {
          this.getinfo();
        getdoctormemberarchiveList(4841561225810944).then((res)=>{
          if(res.data.list.length===1){
            this.tablist[4].url='/memberSpecialManagementInfo';
            sessionStorage.setItem('memberSpecialManagement',JSON.stringify(res.data.list[0]));
          }
        });
      }
    }
</script>

<style scoped lang="less">
.memberData{
  color: #5D5D5D;
  font-size: 0.3rem;
  background: #F0EDF1;
  height: 100%;
  .top{
    height: 3.5rem;
    background: url("../../../../assets/imgs/img_hyzl_bbg.png");
    background-size: 100% 3.5rem;
    .toptitle{
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
  .topdata{
    border-radius: 0.12rem;
    margin: -1.7rem auto 0.3rem;
    width: 6.9rem;
    height: 1.8rem;
    background: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 0.15rem rgba(43, 43, 43, 0.32);
    img{
      margin: 0 0.3rem;
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 0.55rem;
    }
    .topdatainfo{
      width: 3.8rem;
      height: 0.9rem;
      .nameinfo{
        display: flex;
        justify-content: flex-start;
        .nameellipsis{
          font-weight: bold;
          color: #5C5D5D;
          width: 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .nametype{
          margin-left: 0.15rem;
          font-size: 0.28rem;
          color: #848484;
        }
        .namelabel{
          margin-left: 0.15rem;
          padding: 0 0.1rem;
          color: #F15A24;
          font-size: 0.2rem;
          border-radius: 0.3rem;
          border: 0.02rem solid #F15A24;
        }
      }
      .addressinfo{

      }
    }
    .focus{
      img{
        width: 0.6rem;
        height: 0.3rem;
      }
    }
  }
  .tip{
    display: flex;
    justify-content: space-between;
    font-size: 0.26rem;
    color: #848484;
    margin: 0 auto;
    width: 6.6rem;
    height: 0.3rem;
  }
  .type{
    width: 6.9rem;
    height: 7.2rem;
    background: white;
    border-radius: 0.08rem;
    margin: 0.3rem auto 0;
    .tab{
      padding-left: 0.2rem;
      margin: 0 auto;
      width: 6.3rem;
      height: 1.18rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 0.02rem solid #F6F6F6;
      img{
        width: 0.32rem;
        height: 0.32rem;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>
