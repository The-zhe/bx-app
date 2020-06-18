<template>
    <div class="wxdoctorlist">
      <div class="filltop">
        医生列表
      </div>
      <div class="d_top_back">
      <div class="d_top">
        <div class="d_top_select" @click="tokeshi" v-show="istype==='slow'">{{secondDepNm?secondDepNm:'科室'}}</div>
        <div class="d_top_select text_ellipsis" @click="toselect" v-show="istype==='yizhen'">{{state}}</div>
        <div class="d_top_line"></div>
        <div class="d_top_input">
         <!-- <div class="d_top_input_f" v-show="isinput" @click="toinput">输入医生姓名</div>-->
          <div class="d_top_input_c"><input v-model="docname" :placeholder="ptip" @focus="tofocus" @blur="toblur" @input="inputname"/></div>
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
      </div>
      </div>
      <div class="d_back">
      <div class="d_content" v-for="item in doctorlist" @click="todoctorinfo(item.hjjkHealthTeamVo.userId)">
         <div class="d_head">
           <div class="d_head_photo">
            <img :src="item.hjjkHealthTeamVo.imgUrl!=''?item.hjjkHealthTeamVo.imgUrl:doctorImg"/>
             <div class="photo_z"><img :src="item.hjjkHealthTeamVo.state==='1'?zimg:limg"/></div>
           </div>
           <div class="d_head_middle">
           <div class="d_head_name">
             <div class="d_head_name_o text_ellipsis">{{item.hjjkHealthTeamVo.name}}</div>
           <div class="d_head_name_t text_ellipsis">{{item.hjjkHealthTeamVo.secondDepNm}}</div>
           <div class="d_head_point"></div>
           <div class="d_head_name_th text_ellipsis">{{item.hjjkHealthTeamVo.titleNm}}</div>
           </div>
             <div class="d_head_hos text_ellipsis">{{item.hjjkHealthTeamVo.hospitalName}}</div>
           </div>
           <div class="d_head_right">
           <div class="d_head_yz" v-show="item.hjjkHealthTeamVo.isEpidemic==='1'||item.hjjkHealthTeamVo.isEpidemic==='12'||item.hjjkHealthTeamVo.isEpidemic==='2'"></div>
           </div>
             <!-- <div :class="item.hjjkHealthTeamVo.state===1?'d_head_state':'d_head_stateh'">{{item.hjjkHealthTeamVo.state===1?'在线':'离线'}}</div>
           <div class="d_head_simg"><img :src="item.hjjkHealthTeamVo.state===1?inimg:unimg"></div>
           <div class="d_head_next" @click="todoctorinfo(item.hjjkHealthTeamVo.id)"><div class="nextimg"></div></div>-->
         </div>
          <!--<div class="d_div_yz" v-show="item.hjjkHealthTeamVo.isEpidemic==='1'||item.hjjkHealthTeamVo.isEpidemic==='12'">义诊</div>-->
        <div class="d_yz">
          <div class="d_yz_img"></div>
          <div>服务人次</div>
          <div class="d_yznum">{{item.hjjkHealthTeamVo.servicePopulationNum}}</div>
          <div class="d_yz_right">
            <img src="../../../assets/imgs/x_doctor_rate1.png"/>
            <img src="../../../assets/imgs/x_doctor_rate1.png"/>
            <img src="../../../assets/imgs/x_doctor_rate1.png"/>
            <img src="../../../assets/imgs/x_doctor_rate1.png"/>
            <img src="../../../assets/imgs/x_doctor_rate2.png"/>
          </div>
          <!--<img src="../../../assets/imgs/xdoc3.png"/>
          <div class="d_yznum">{{item.hjjkHealthTeamVo.praiseNum}}</div>-->
        </div>
        <div class="d_line"></div>
        <div class="d_sc"><span>擅长：</span>{{item.hjjkHealthTeamVo.skills}}</div>
      </div>
      </div>
       <van-popup v-model="show" round >
      <div class="warp">
        <div class="w_x" @click="tocancel"><img src="../../../assets/imgs/xconsult_x.png"/></div>
        <div class="w_title">下载APP</div>
        <div class="w_content">享受更多专家一对一咨询，请前往 APP内操作。 </div>
        <div class="w_m"><img src="../../../assets/imgs/xconsult_m.png"></div>
        <div class="w_s">识别二维码，即刻下载APP</div>
      </div>
    </van-popup>
    </div>
</template>

<script>
  import {getwxdoctorlist} from '../../../api/index'
  import {getwxdoctorlistmb} from "../../../api";
    export default {
      name: "wxdoctorlist",
      beforeRouteEnter(to,from,next){
        let hasLogin = Boolean(localStorage['userId']||localStorage['doctorId'])
        if(hasLogin){
          next()
        }else{
          next('/userlogin')
        }
      },
      data(){
          return{
            ptip:'输入医生姓名',
            backToImg:require('@/assets/imgs/return_white.png'),
            doctorImg:require("../../../assets/imgs/x_docimg.png"),
            show:false,
            istype:sessionStorage.getItem('istype'),   //路由跳转过来
            docname:'',
            selectshow:false,
            columns: ['义诊', '全部'],
            state:'义诊',
            stateCd:'',
            inimg:require('../../../assets/imgs/xdoc2.png'),
            unimg:require('../../../assets/imgs/xdoc1.png'),
            isinput:true,
            doctorlist:[],
            secondDepNm:sessionStorage.getItem('secondDepNm'),  //科室名
            //illtypeid:this.$route.query.id,
            zimg:require('../../../assets/imgs/x_doctor_z.png'),
            limg:require('../../../assets/imgs/x_doctor_l.png'),
            newConsultPageNum:1,
            replyPageNum:1,
            newConsultTotal:0,
            replyTotal:0
          }
      },
      methods:{
        tofocus(){
          this.ptip='';
        },
        toblur(){
          this.ptip='输入医生姓名'
        },
        tocancel(){
          this.show=false;
        },
        toconsult(item) {
          let type=sessionStorage.getItem('phoneType');
          let inapp=sessionStorage.getItem('inApp');
            if(type==='ios'){
              console.log('username', item.hjjkHealthTeamVo.userId);
              sessionStorage.setItem('consultdoctorId', item.hjjkHealthTeamVo.userId);
             // let username = sessionStorage.getItem('perusername');
              let sex = localStorage.getItem('persex');
              let birthday = localStorage.getItem('perbirthday');
              if (sex && birthday) {
                this.$router_({path: '/wxconsultuser'});
              } else {
                this.$router_({path: '/userupdinfo'});
              }
              console.log('user', item);
            }else if(inapp==='1') {
              console.log('username', item.hjjkHealthTeamVo.userId);
              sessionStorage.setItem('consultdoctorId', item.hjjkHealthTeamVo.userId);
              //let username = sessionStorage.getItem('perusername');
              let sex = localStorage.getItem('persex');
              let birthday = localStorage.getItem('perbirthday');
              if (sex && birthday) {
                this.$router_({path: '/wxconsultuser'});
              } else {
                this.$router_({path: '/userupdinfo'});
              }
              sessionStorage.setItem('mbname', item.nowIllName);
              console.log('user', item);
            }else {
              this.show=true;
            }     //android
        },
        todoctorinfo(id){
          this.$router_({path: '/wxdoctorinfo',query:{id:id}});
        },
        inputname(){
          let name=this.docname;
          console.log('调用了inpuit',name);
          let secondDepId=sessionStorage.getItem('secondDepId');
         // let illtypeid=this.illtypeid;
       /*   if(illtypeid===undefined){
            getwxdoctorlistmb(0,this.docname,this.stateCd,secondDepId).then((res) => {
              this.doctorlist = res.data.list;
              console.log(res.data.list);
            })
          }else {*/
           // let illtypeid=this.illtypeid+'';
            getwxdoctorlistmb(name,this.stateCd,secondDepId).then((res) => {
              this.doctorlist = res.data.list;
              console.log(res.data.list);
            })
        //  }
        },
        toinput(){
          this.isinput=!this.isinput;
        },
        //跳转到科室
        tokeshi(){
          this.$router_({path: '/selectDepartment'});
        },
        toselect(){
          this.selectshow=true;
        },
        onConfirm(value,index){
          this.state=value;
          if(index===0){
            //this.stateCd='1';
            getwxdoctorlistmb(this.docname,'1').then((res)=>{
              this.doctorlist=res.data.list;
              this.selectshow=false;
            });
          }else {
           // this.stateCd='0';
            getwxdoctorlistmb(this.docname).then((res)=>{
              this.doctorlist=res.data.list;
              this.selectshow=false;
            });
          }


        },
        onCancel(){
          this.selectshow=false;
        },
        getinfo(){
          console.log('illtypeid',this.illtypeid);
          //let illtypeid=this.illtypeid;
       /*   if(illtypeid){
            let id=illtypeid+'';
            getwxdoctorlistmb(id).then((res) => {
              this.doctorlist = res.data.list;
              console.log('mbres',res);
            })
          }else {*/
            getwxdoctorlistmb(0,'1').then((res) => {
              this.doctorlist = res.data.list;
              console.log(res.data.list);
            })
         // }
        },
        getslowlist(){
          let secondDepId=sessionStorage.getItem('secondDepId');
          this.secondDepId=secondDepId;
          //let illtypeid=this.illtypeid+'';
          getwxdoctorlistmb(0,this.stateCd,secondDepId).then((res)=>{
            this.doctorlist=res.data.list;
            console.log(res.data.list);
          })
        }
      },
      mounted() {
       /* let userId=sessionStorage.getItem('userId');
        if(!userId){
          this.$router_({path:'/userlogin'})
        }*/
       if(this.istype==='slow'&&sessionStorage.getItem('secondDepId')!=null){
         console.log('slow',sessionStorage.getItem('secondDepId'));
         this.getslowlist();
       }else {
         this.getinfo();
       }
        window.addEventListener('scroll',()=>{
          var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
          //变量windowHeight是可视区的高度
          var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
          //变量scrollHeight是滚动条的总高度
          var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
          //console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
          //滚动条到底部的条件
          if(scrollTop+windowHeight+3>=scrollHeight){
            if(!this.activeTabIndex){
              //this.getFormConsultListFun(this.newConsultPageNum)
            }else{
              //this.getReplyFormConsultListFun(this.replyPageNum)
            }

          }
        })

      }
    }
</script>

<style scoped lang="less">
.wxdoctorlist{
  background: #F7F6FB;
  height: 100%;
  font-size: 0.3rem;
  color: #777777;
  padding-bottom: 0.3rem;
  .filltop {
    margin: 0 auto;
    height: 0.9rem;
    font-size: 0.36rem;
    color: #606060;
    line-height: 0.9rem;
    text-align: center;
    background: #FFFFFF;
    //border-bottom: 0.02rem solid #F6F6F6;
  }
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
  .d_top_back{
    padding-top: 0.3rem;
    height: 1rem;
    background: #FFFFFF;
  }
  .d_top{
    margin: 0 auto;
    width: 7rem;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    .d_top_input{
      width: 4.42rem;
      height: 0.56rem;
      border-radius: 0.3rem;
      border: 0.03rem solid #EAEAEA;
      background: url("../../../assets/imgs/btn_mbzx_search.png") no-repeat 3.9rem 0.12rem;
      background-size: 0.29rem 0.28rem;
      .d_top_input_f{
        margin: 0.06rem auto;
        color: #BBBBBB;
        padding-left: 0.4rem;
        width: 3rem;
        height: 0.38rem;
      }
      .d_top_input_c{
        margin: 0.06rem auto;
        color: #BBBBBB;
        padding-left: 0.2rem;
        width: 3rem;
        height: 0.38rem;
        input{
          width: 3rem;
          background:#FFFFFF;
        }
      }
    }
    .d_top_select{
      padding-top: 0.04rem;
      padding-left: 0.3rem;
      color: #56B2AD;
      width: 1.8rem;
      line-height: 0.53rem;
      height: 0.53rem;
      border-radius: 0.3rem;
      box-shadow:0rem 0rem 0.1rem rgba(96, 96, 96, 0.25);
      background: url("../../../assets/imgs/xdoc5.png") no-repeat 1.6rem;
      background-size: 0.21rem 0.19rem;
    }
    .d_top_line{
      width: 0.01rem;
      height: 0.5rem;
      background: #EFEFEF;
    }
  }
  .d_back{
    width: 100%;
    height: auto;
    background: #F7F6FB;
  }
  .d_content{
    border-radius: 0.16rem;
    background: #FFFFFF;
    padding-bottom: 0.3rem;
    margin: 0.3rem auto 0 auto;
    width: 6.9rem;
    height: auto;
    max-height: 3.4rem;
    box-shadow:0rem 0rem 0.1rem rgba(96, 96, 96, 0.25);
    .d_line{
      margin: 0 auto;
      width: 6.4rem;
      height: 0.02rem;
      background: #F3F0F3;
    }
    .d_head{
      margin-left: 0.3rem;
      padding-top: 0.28rem;
      width: 6.5rem;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      .d_head_photo{
         width: 1.1rem;
         height: 1.1rem;
         img{
           width: 1.1rem;
           height: 1.1rem;
           border-radius:0.55rem;
         }
        .photo_z{
          margin-top: -0.3rem;
          margin-left: 0.1rem;
          width: 0.9rem;
          height: 0.27rem;
          img{
            width: 0.9rem;
            height: 0.27rem;
          }
        }
      }
      .d_head_middle {
        width: 4rem;
        height: 0.9rem;
        .d_head_hos{
          margin-top: 0.1rem;
          color: #848484;
          font-size: 0.26rem;
          width: 4rem;
          height: 0.35rem;
          margin-left: 0.2rem;
        }
        .d_head_name {
          margin-top: 0.1rem;
          margin-left: 0.2rem;
          width: 4rem;
          height: 0.4rem;
          color: #848484;
          display: flex;
          justify-content: flex-start;
          .d_head_name_o{
            margin-top: -0.05rem;
            color: #5C5D5D;
            font-weight: bold;
            width: auto;
            max-width: 0.9rem;
            height: 0.4rem;
          }
          .d_head_name_t{
            margin-left: 0.3rem;
            font-size: 0.26rem;
          width: auto;
          max-width: 1.1rem;
          }
          .d_head_name_th{
            margin-left: 0.1rem;
            font-size: 0.26rem;
            width: auto;
            max-width: 1.3rem;
          }

          span {
            font-weight: normal;
            //font-size: 0.28rem;
          }
        }
      }
      .d_head_point{
        margin-left: 0.1rem;
        margin-top: 0.2rem;
        width: 0.05rem;
        height: 0.05rem;
        border-radius: 0.025rem;
        background: #848484;
      }
      .d_head_right {
        margin-right: -0.2rem;
        width: 1.25rem;
        height: 0.52rem;
        .d_head_yz {
          width: 1.25rem;
          height: 0.52rem;
          background: url("../../../assets/imgs/x_doctor_axyz.png");
          background-size: 1.25rem 0.52rem;
        }
      }
      .d_head_stateh{
        width: 0.6rem;
        height: 0.3rem;
        color: #999999;
        font-size: 0.28rem;
      }
      .d_head_state{
        width: 0.6rem;
        height: 0.3rem;
        color: #56B2AD;
        font-size: 0.28rem;
      }
      .d_head_simg{
        width: 0.3rem;
        height: 0.36rem;
        img{
          width: 0.3rem;
          height: 0.36rem;
        }
      }
      .d_head_next{
        width: 0.5rem;
        height: 0.4rem;
        .nextimg{
          margin-left: 0.3rem;
          width: 0.18rem;
          height: 0.31rem;
          background: url("../../../assets/imgs/xdoc6.png");
          background-size: 0.18rem 0.31rem;
        }
      }
    }
    .d_yz{
      margin: 0.2rem 0 0.2rem 1.69rem;
      color: #848484;
      font-size: 0.24rem;
      width: 3.8rem;
      height: 0.32rem;
      display: flex;
      justify-content: flex-start;
      img{
        width: 0.27rem;
        height: 0.28rem;
      }
      .d_yz_img{
        margin-right: 0.11rem;
        width: 0.21rem;
        height: 0.25rem;
        background: url("../../../assets/imgs/x_doctor_fw.png");
        background-size: 0.21rem 0.25rem;

      }
      .d_yznum{
        margin-left:0.12rem;
        width: 0.4rem;
        //color: #F4793B;
      }
      .d_yz_right {
       //margin-left: 0.3rem;
        width: 1.6rem;
        height: 0.38rem;
        display: flex;
        justify-content: flex-start;

        img {
          margin-left: 0.1rem;
          width: 0.27rem;
          height: 0.25rem;
        }
      }
    }
    .d_sc{
      line-height: 0.56rem;
      margin-top: 0.2rem;
      margin-left: 0.25rem;
      width: 6.6rem;
      height:1rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      span{
        font-weight: bold;
      }
    }
  }
}
</style>
