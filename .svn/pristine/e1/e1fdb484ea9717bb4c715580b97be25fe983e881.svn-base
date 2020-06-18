// 2020/3/30 created by xtt
<template>
   <div class="doctorPersonal">
     <div class="top">
       <div class="headimg" @click="topersonalinfo"><img :src="doctorinfo.hjjkHealthTeamVo.imgUrl!==''?doctorinfo.hjjkHealthTeamVo.imgUrl:unlogindocimg"/></div>
       <div class="headtitle">{{doctorinfo.hjjkHealthTeamVo.name}} <span style="font-size: 0.26rem">{{doctorinfo.hjjkHealthTeamVo.titleNm}}</span></div>
       <div class="headbottom">
         <div class="bottomdiv">{{doctorinfo.hjjkHealthTeamVo.balance}}元
         <div class="price"><img src="../../../assets/imgs/icon_grzx_balance.png" style="width: 0.3rem;height: 0.26rem;"/><div class="p_txt">余额</div></div>
         </div>
         <div class="bottomline"></div>
         <div class="bottomdiv">{{doctorinfo.hjjkHealthTeamVo.profit}}元
           <div class="price total"><img src="../../../assets/imgs/icon_grzx_profit.png"/><div class="p_txt">累计收益</div></div>
         </div>
         <div class="bottomline"></div>
         <div class="bottomdiv">{{doctorinfo.peaceNum}}张
           <div class="price"><img src="../../../assets/imgs/icon_grzx_coupon.png"/><div class="p_txt">优惠券</div></div>
         </div>
       </div>
     </div>
     <div class="second">
       <div class="tab" v-for="item in tablist" @click="totab(item)">
        <img :src="item.img"/>
         <div style="margin-top: 0.2rem">{{item.title}}</div>
       </div>
     </div>
     <div class="container">
       <div class="c_tab" v-for="item in infolist" @click="topage(item)">
         <img :src="item.img"/>
         <div style="margin-top: 0.32rem;margin-left: 0.16rem">{{item.name}}</div>
       </div>
     </div>
     <div class="bottom">退出当前账户</div>
   </div>
</template>

<script>
    import {getdoctorwebinfo} from "../../../api";

    export default {
        name: "doctorPersonal",
        data(){
          return{
            tablist:[
              {
                img:require('../../../assets/imgs/icon_grzx_zyrz.png'),
                title:'执业认证',
                url:'/doctorinfolicensed',
              },
              {
                img:require('../../../assets/imgs/icon_grzx_pbgl.png'),
                title:'排班管理'
              },
              {
                img:require('../../../assets/imgs/icon_grzx_wdsm.png'),
                title:'我的扫码'
              },
              {
                img:require('../../../assets/imgs/icon_grrzx_wozy.png'),
                title:'我的主页'
              }
            ],
            infolist:[
              {
                 img:require('../../../assets/imgs/icon_grzx_wdzh.png'),
                 name:'我的账户',
                 url:'/'
             },
              {
                img:require('../../../assets/imgs/icon_grzx_wdyhj.png'),
                name:'我的优惠券',
                url:'/'
              },
              {
                img:require('../../../assets/imgs/icon_grzx_wdpj.png'),
                name:'我的评价',
                url:'/'
              },
              {
                img:require('../../../assets/imgs/icon_grzx_lxkf.png'),
                name:'联系客服',
                url:'/'
              },
              {
                img:require('../../../assets/imgs/icon_grzx_gybx.png'),
                name:'关于倍熙',
                url:'/aboutinfo'
              },
              {
                img:require('../../../assets/imgs/icon_grzx_sz.png'),
                name:'设置',
                url:'/'
              },
            ],
            doctorinfo:[],
            unlogindocimg: require('../../../assets/imgs/d_home_unlogin.png'),
          }
        },
      methods:{
          getinfo(){
            getdoctorwebinfo(4825966664717312).then((res)=>{
              this.doctorinfo=res.data.data;
              console.log('doctorinfo',res.data.data);
            })
          },
        topersonalinfo(){
          this.$router.push({path:'/doctorPersonalInfo'})
        },
        totab(item){
          this.$router.push({path:item.url});
        },
        topage(item){
            this.$router.push({path:item.url});
        }
      },
      mounted() {
          this.getinfo();
      }
    }
</script>

<style scoped lang="less">
.doctorPersonal{
  font-size: 0.3rem;
  background: #F3F3F5;
  height: 100%;
  .top{
    color: white;
    padding-top: 0.3rem;
    height: 3.7rem;
    background: url('../../../assets/imgs/doctorpersonal_back.png');
    background-size: 100% 4rem;
    .headimg{
      margin: 0 auto;
      width: 1.22rem;
      height: 1.22rem;
      border-radius: 0.61rem;
      img{
        width: 1.22rem;
        height: 1.22rem;
        border-radius: 0.61rem;
      }
    }
    .headtitle{
      margin-top: 0.2rem;
      margin-left: 2.58rem;
    }
    .headbottom{
      opacity:0.8;
      margin: 0.3rem auto 0;
      width: 6.9rem;
      height: 0.7rem;
      display: flex;
      justify-content: flex-start;
      .bottomdiv{
        text-align: center;
        width: 2.3rem;
        height: 0.7rem;
        .price{
          margin-left: 0.5rem;
          font-size: 0.26rem;
          display: flex;
          justify-content: flex-start;
          img{
            margin-top: 0.05rem;
            width: 0.26rem;
            height:0.26rem;
          }
          .p_txt{
            margin-left: 0.1rem;
          }
        }
        .total{
          margin-left: 0.4rem;
        }
      }
      .bottomline{
        width: 0.02rem;
        height: 0.6rem;
        background: #40C8CC;
      }
    }
  }
  .second{
    color: #5D5D5D;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    margin: -0.7rem auto 0;
    width: 6.3rem;
    height:2rem;
    border-radius: 0.08rem;
    box-shadow: 0 0 0.15rem rgba(96, 96, 96, 0.32);
    background:white;
    display: flex;
    justify-content: space-between;
    .tab{
      margin-top: 0.3rem;
      display: flex;
      align-items: center;
      flex-direction:column;
      width: 1.2rem;
      height: 1.3rem;
      img{
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }
  .container{
    color: #5D5D5D;
    margin: 0.3rem auto 0;
    width: 6.9rem;
    height: 6rem;
    border-radius: 0.08rem;
    background: white;
    .c_tab{
      margin: 0 auto;
      width: 6.5rem;
      height: 1rem;
      background: url("../../../assets/imgs/docinfonext.png") no-repeat 6.3rem;
      background-size: 0.18rem 0.3rem;
      border-bottom: 0.02rem solid #F3F3F5;
      display: flex;
      justify-content: flex-start;
      img{
        margin-left: 0.16rem;
        margin-top: 0.34rem;
        width: 0.34rem;
        height: 0.34rem;
      }
    }
  }
  .bottom{
    line-height: 1rem;
    text-align: center;
    margin: 0.3rem auto 0;
    color: #56B2AD;
    width: 6.9rem;
    height: 1rem;
    border-radius: 0.08rem;
    background: white;
  }
}
</style>
