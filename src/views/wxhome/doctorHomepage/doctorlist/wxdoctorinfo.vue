<template>
    <div class="wxdoctorinfo">
       <div class="d_top">
         <div class="d_top_head">
           <div class="d_top_head_photo">
             <img :src="doctorinfo.imgUrl"/>
             <div class="photo_z"><img src="../../../assets/imgs/wx9_3.png"/></div>
           </div>
           <div class="d_top_head_name">
             {{doctorinfo.name}}  <span>{{doctorinfo.workDoctor}}</span>
             <div class="hos">{{doctorinfo.hospitalName}} {{doctorinfo.departmentName}}</div>
           </div>
           <div class="d_top_head_zx" @click="togx"><img src="../../../assets/imgs/xdocinfo1_1.png"></div>
         </div>
         <div class="d_yz">义诊人数&ensp;<span>{{doctorinfo.servicePopulationNum}}</span>&emsp;&emsp;&emsp;&emsp;&emsp;<span>{{doctorinfo.praiseNum}}</span></div>
       </div>
      <div class="d_tip">
        疫情防控期间，为减缓医院接诊压力，方便患者就医，提 供3次免费咨询服务
      </div>
      <div class="d_type">
        <div class="d_type_item" v-for="(item,index) in typeitem">
         <div :class="style[index]">
          <img :src="item.img">
         </div>
        </div>
      </div>
       <div class="d_content">
         <div class="d_zy">专业擅长</div>
         <div class="zy_c">
           {{doctorinfo.skillsLable}}
         </div>
         <div class="d_zhiy">执业地点</div>
         <div class="zhiy_c">
           <div><span>第一执业点</span>：{{doctorinfo.address}}</div>
         </div>
         <div class="d_zyjl">执业经历</div>
         <div class="zyjl_c">{{doctorinfo.experienceLable}}</div>
       </div>
    </div>
</template>

<script>
  import {getwxdoctorinfo,getmodifydz} from '../../../api/index'
    export default {
        name: "wxdoctorinfo",
        data(){
          return{
            ganx:require('../../../assets/imgs/xdocinfo9.png'),
            unganx:require('../../../assets/imgs/xdocinfo8.png'),
            doctorid: this.$route.query.id,
            doctorinfo:{},
            state:0,
            typeitem:[{
              img:require('../../../assets/imgs/xdoctype1.png')
            },{
              img:require('../../../assets/imgs/xdoctype2.png')
            },{
              img:require('../../../assets/imgs/xdoctype3.png')
            },{
              img:require('../../../assets/imgs/xdoctype4.png')
            },{
              img:require('../../../assets/imgs/xdoctype5.png')
            },{
              img:require('../../../assets/imgs/xdoctype6.png')
            }],
            style:['simg','simg','bimg','simg','simg','simg']
          }
        },
      methods:{
          togx(){
            let userId='';
            let teamId='';
            getmodifydz(userId,teamId).then((res)=>{

            })
          },
          getinfo(){
            getwxdoctorinfo(this.doctorid).then((res)=>{
              this.state=res.data.data.isThumbs;
              this.doctorinfo=res.data.data.hjjkHealthTeamVo;
               console.log(res.data.data.hjjkHealthTeamVo);
            })
          }
      },
      mounted() {
          this.getinfo();
      }
    }
</script>

<style scoped lang="less">
.wxdoctorinfo{
  color: #777777;
  font-size: 0.3rem;
  .simg{
    width: 1.04rem;
    height: 0.9rem;
    img{
      width: 1.04rem;
      height: 0.9rem;
    }
  }
  .bimg{
    width: 1.3rem;
    height: 0.9rem;
    img{
      width: 1.3rem;
      height: 0.9rem;
    }
  }
  .d_top{
    padding-top: 0.44rem;
    margin: 0.3rem auto;
    width: 7rem;
    height: 2.14rem;
    box-shadow:0rem 0rem 0.1rem rgba(96, 96, 96, 0.25);
    .d_top_head{
      margin-left: 0.3rem;
      width: 6.3rem;
      height: 1.3rem;
      display: flex;
      justify-content: space-between;
      .d_top_head_photo{
        width: 1.24rem;
        height: 1.24rem;
        img{
          width: 1.24rem;
          height: 1.24rem;
          border-radius: 0.62rem;
        }
        .photo_z{
          margin-top: -0.62rem;
          margin-left: 0.7rem;
          width: 0.54rem;
          height: 0.62rem;
          img{
            width: 0.54rem;
            height: 0.62rem;
          }
        }
      }
      .d_top_head_name{
        margin-top: 0.12rem;
        width: 3.3rem;
        height: 1.42rem;
        border-right:0.02rem solid #F1EFF2;
        color: #5D5D5D;
        font-size: 0.3rem;
        font-weight: bold;
          span{
            font-size: 0.28rem;
            font-weight: normal;
          }
        .hos{
          margin-top: 0.24rem;
          font-size: 0.28rem;
          font-weight: normal;
        }
      }
      .d_top_head_zx{
        margin-top:0.4rem;
        width: 1.04rem;
        height:0.92rem;
        img{
          width: 1.04rem;
          height:0.92rem;
        }
      }
    }
    .d_yz{
      margin-top: 0.26rem;
      color: #999999;
      font-size: 0.26rem;
      margin-left: 0.3rem;
      width: 4rem;
      height: 0.38rem;
      background: url("../../../assets/imgs/xdocinfo2.png") no-repeat 2.4rem;
      background-size: 0.38rem 0.38rem;
      span{
        color: #F4793B;
      }
    }
  }
  .d_tip{
    padding: 0.1rem 0.4rem;
    height: 0.68rem;
    background: #F9E4D7;
    font-size: 0.26rem;
    color: #EB6100;
  }
  .d_type{
    height: 1.7rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0;
    overflow: auto;
    .d_type_itemb{
      margin: 0.2rem 0.2rem;
      width: 1.3rem;
      height: 0.9rem;
      img{
        width: 1.3rem;
        height: 0.9rem;
      }
    }
    .d_type_item{
      margin: 0.2rem 0.2rem;
      width: 1.3rem;
      height: 0.9rem;
    }
  }
  .d_content{
    padding-top: 0.3rem;
    margin: 0 auto;
    width: 7rem;
    height: 7rem;
    box-shadow:0rem 0rem 0.1rem rgba(96, 96, 96, 0.25);
    .d_zy{
      margin-left: 0.32rem;
      font-weight: bold;
      padding-left: 0.5rem;
      width: 1.8rem;
      height: 0.34rem;
      background: url("../../../assets/imgs/xdocinfo3.png") no-repeat;
      background-size: 0.34rem 0.34rem;
    }
    .zy_c{
      margin-top: 0.2rem;
      margin-left: 0.34rem;
    }
    .d_zhiy{
      margin-top: 0.3rem;
      margin-left: 0.32rem;
      font-weight: bold;
      padding-left: 0.5rem;
      width: 1.8rem;
      height: 0.33rem;
      background: url("../../../assets/imgs/xdocinfo4.png") no-repeat;
      background-size: 0.31rem 0.33rem;
    }
    .zhiy_c{
      margin-top: 0.2rem;
      margin-left: 0.34rem;
    }
    .d_zyjl{
      margin-top: 0.3rem;
      margin-left: 0.32rem;
      font-weight: bold;
      padding-left: 0.5rem;
      width: 1.8rem;
      height: 0.39rem;
      background: url("../../../assets/imgs/xdocinfo5.png")no-repeat;
      background-size: 0.31rem 0.39rem;
    }
    .zyjl_c{
      margin-top: 0.2rem;
      margin-left: 0.34rem;
      width: 6.3rem;
    }
  }
  .d_gx{
    .d_ungx{
      margin: 0.75rem auto;
      width: 2.21rem;
      height: 0.63rem;
      img{
        width: 2.21rem;
        height: 0.63rem;
      }
    }
    .d_ingx{
      margin: 0.75rem auto;
      width: 2.21rem;
      height: 0.63rem;
      img{
        width: 0.41rem;
        height: 0.35rem;
      }
    }
  }
}
</style>
