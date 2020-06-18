<template>
  <div class="doctorHomepage_container">
    <van-dialog v-model="dialogShow" @confirm="dialogConfirm" confirm-button-color="#56B2AD"
                cancel-button-color="#999999" cancel-button-text="返回" confirm-button-text="去验证" show-confirm-button
                show-cancel-button>
      <div class="dialog_text">
        您未进行身份验证，请尽快验证
      </div>
    </van-dialog>
   <!-- <div class="d_info">
      <div class="d_info_top">
        <div class="top_img"><img :src="doctorInfo.img?doctorInfo.img:unlogindocimg"/></div>
        <div class="top_middle">
          <div class="top_middle_dis">
            <div class="m_name">{{doctorInfo.name?doctorInfo.name:docname}}</div>
            <div class="m_duty">{{doctorInfo.titleName?doctorInfo.titleName:''}}</div>
          </div>
          <div class="top_middle_dis">
            <img style="margin-top:0.04rem" src="../../../assets/imgs/x_doctor_fw.png"/>
            <div class="m_service">服务人次 {{doctorInfo.serviceNum?doctorInfo.serviceNum:0}}</div>
            <div class="m_rate">
              <div class="m_rate unlogin">
                <img :src="item.is?rate:unrate" v-for="item in ratelist"/>
              </div>
            </div>
          </div>
        </div>
        <div class="top_right"><img :src="linkhelp"/></div>
      </div>
      <div class="d_info_bottom">
        <div class="b_container" v-show="true">
          <img style="width: 0.28rem;height: 0.31rem" src="../../../assets/imgs/icon_doctor_seal.png"/>
          <div class="b_line"></div>
          <div class="b_content" v-show="hasAuth!==2">
            <div style="width: 1.3rem">认证进度：</div>
            <div class="b_state" v-show="hasAuth===3">审核失败</div>
            <div class="b_state" v-show="hasAuth===1">审核中</div>
            <div class="b_state" v-show="hasAuth===0">未认证</div>
            <div class="b_edit" v-show="hasAuth!==1">修改资料</div>
            <div class="b_edit" v-show="hasAuth===1">查看资料</div>
          </div>
          <img style="width: 0.14rem;height: 0.21rem;margin-top: 0.05rem"
               src="../../../assets/imgs/icon_doctor_next.png">
        </div>
        <div class="b_container" v-show="hasAuth===2">
          <img style='width: 0.26rem;height: 0.31rem' src="../../../assets/imgs/icon_doctor_tips.png"/>
          <div class="b_line"></div>
          <div class="b_content">

          </div>
          <img style="width: 0.14rem;height: 0.21rem" src="../../../assets/imgs/icon_doctor_next.png">
        </div>
      </div>
    </div>-->
    <div class="d_bar">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in bannerimgs" :key="index">
          <img :src="image.indexCarouselImgs" />>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <img style="width: 1.06rem;height: 0.24rem;margin:0 0.25rem" :src="hasAuth===2?noticeImg:rzImg"/>
      <div class="n_line"></div>
      <div class="n_content" :class="hasAuth===2?'n_content':'other'">{{doctorInfo.msg}}</div>
      <div class="n_action">{{hasAuth===2?'免费领取':'修改资料'}}</div>
      <img style="width: 0.14rem;height: 0.2rem;margin-left: 0.15rem" :src="noticeNextImg"/>
    </div>
    <div class="d_work" :style="hasAuth===0?'height:3rem':''">
      <div class="d_work_top">
        <img style="width: 0.41rem;height: 0.36rem" src="../../../assets/imgs/icon_doctor_work.png"/>
        <div class="work_my">我的工作站</div>
        <div class="work_price">开通与调价</div>
        <img style="width: 0.12rem;height: 0.24rem;margin-top: 0.03rem"
             src="../../../assets/imgs/btn_doctor_next_one.png">
      </div>
      <div class="work_line"></div>
      <div v-show="hasAuth!==0">
      <div class="d_work_content">
       <div class="d_work_item" v-for="item in workSpace">
         <div style="text-align: center">{{item.value}}</div>
         <div>{{item.name}}</div>
       </div>
      </div>
      <div class="work_line"></div>
      <div class="d_work_btn" @click="toWork"></div>
      </div>
      <div v-show="hasAuth===0">
        <img class="notRz" src="../../../assets/imgs/btn_srys_aut.png"/>
        <div class="rztip">完成认证开通更多服务</div>
      </div>
    </div>
    <div class="d_type">
      <div class="type_img">
        <div v-for="item in typeimglist">
          <img style="width: 0.8rem;height: 0.8rem" :src="item.img"/>
        </div>
      </div>
      <div class="type_name">
        <div>我的会员</div>
        <div>我的排班</div>
        <div>患者扫码</div>
        <div>科普宣教</div>
      </div>
    </div>
    <div class="d_doc" @click="toinfo2(doctorInfo)"><img :src="jiangzuoUrl"/></div>
    <div class="wxyqinfotitle">
      <div class="g_title"></div>
      <div class="g_text">新</div>
      <div class="g_text">闻</div>
      <div class="g_text">资</div>
      <div class="g_text">讯</div>
    </div>
    <div class="wxyqinfo">
      <div class="wxyqimg" @click="toyqinfo(yqid)"><img :src="bigImgUrl"></div>
      <div class="wxyqdetail" @click="toyqinfo(yqid)">
        <div>
          <div class="wxyq_o">{{yqtitle}}</div>
          <div class="wxyqd_time">
            <div>{{yqcrtTm|fromNowTime}}</div>
            <div class="eye">{{yqbrowse}}</div>
          </div>
        </div>
      </div>
      <div class="wxyqdetailcontent" v-for="(item,index) in newhealthPreservationList" @click="toinfo2(item)">
        <div class="wxyqd_info">
          <div class="wxyq_t">{{item.title}}</div>
          <div class="wxyqd_time2">
             <div>{{item.crtTm|fromNowTime}}</div>
             <div class="eye">{{item.browse}}</div>
          </div>
        </div>
        <div class="wxqyd_img"><img :src="item.imgUrl"></div>
      </div>
      <div class="check_more">
        <img @click="tohealthinfo" src="@/assets/imgs/wxyq_4.png"/>
      </div>
    </div>
    <div class="copyRight">
      <div class="top">COPY RIGHT 宁波百护佳健康管理有限公司 版权所有</div>
      <div class="bottom">浙ICP备16032948号-1</div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import {getDoctorHomePageInfo, getNotReadNumber} from '../../../api/apiz'
  import {getdoctorHomeinfo, getSig, getTest, getuserfree} from "../../../api";

  export default {
    name: "doctorHomepage",
    /*beforeRouteEnter(to, from, next) {
      let hasLogin = Boolean(localStorage['doctorId'])
      if (hasLogin) {
        next()
      } else {
        next('/doctorLogin')
      }
    },*/
    data() {
      return {
        noticeImg:require('../../../assets/imgs/icon_srys_notice_one.png'),
        rzImg:require('../../../assets/imgs/icon_srys_notice_two.png'),
        noticeNextImg:require('../../../assets/imgs/btn_srys_notice_next.png'),
        ratelist:[],
        bigImgUrl:'',  //新闻大图
        yqid:'',   //新闻大图id
        yqtitle:'',//新闻标题
        yqbrowse:'',//新闻阅读量
        yqtype:'',//
        yqcrtTm:'',
        newhealthPreservationList:[],
        typeimglist: [
          {
            img: require('../../../assets/imgs/icon_doctor_wdhy.png'),
          }, {
            img: require('../../../assets/imgs/icon_doctor_wdpb.png'),
          }, {
            img: require('../../../assets/imgs/icon_doctor_hzsm.png'),
          }, {
            img: require('../../../assets/imgs/icon_doctor_kpxj.png'),
          }
        ],
        docname: '姓名',
        linkhelp: require('../../../assets/imgs/btn_doctor_contact.png'),
        unrate: require('../../../assets/imgs/x_doctor_rate2.png'),
        rate: require('../../../assets/imgs/x_doctor_rate1.png'),
        unloginratelist: [{}, {}, {}, {}, {}],
        unlogindocimg: require('../../../assets/imgs/d_home_unlogin.png'),
        isIos: false,
        dialogShow: false,
        identifier: '',   //用户id
        userSig: '',

        jiangzuoUrl:'',
        doctorInfo:'',
        hasAuth:0,  //认证状态  //0 未认证 1 认证中  2已认证  3认证失败
        workSpace:[], //工作站
        bannerimgs:[]
      }
    },
    filters: {
      fromNowTime: function (value) {
        let array = moment(value)
          .fromNow()
          .split(" ");
        array[0] = array[0] == "a" ? "1" : array[0] == "an" ? "1" : array[0] + "";
        let EN = [
          "minute",
          "minutes",
          "hour",
          "hours",
          "day",
          "days",
          "month",
          "months",
          "year",
          "years"
        ];
        let CN = ["分钟", "小时", "天", "个月", "年"];
        array[1] = CN[parseInt(EN.indexOf(array[1]) / 2)];
        return array.length == 4
          ? "几秒前"
          : new Array(array[0], array[1]).join("") + "前";
      }
    },
    mounted() {
      getTest().then((res)=>{
        console.log('test',res);
      })
      this.isIos = sessionStorage.getItem('phoneType') == 'ios';
      this.identifier = localStorage.getItem('doctorId');
      this.hasAuth=Number(localStorage.getItem('hasAuth'));
      /*this.$nextTick(() => {
        this.getUserSig()
        this.getNotReadNumberFun()
      })*/
      /* 如果没认证 弹框 */
      if (this.hasAuth== 0) {
        this.dialogShow = true
      }
      this.getinfo();
    },
    methods: {
      toWork(){
        this.$router_({name: 'doctorWork'})
      },
      dialogConfirm() {
        this.$router_({name: 'CertificationInstruction'})
      },
      getinfo(){
        // let id=Number(localStorage.getItem('doctorId'));
        let id = 4877037870535680;
        getdoctorHomeinfo(id).then((res)=>{
          console.log('res',res.data.data)
          this.bigImgUrl=res.data.data.hjjkHealthPreservationListDtos[0].bigImgUrl;
          // this.healthInfoList=res.data.data.hjjkHealthPreservationListDtos;
          // this.newhealthPreservationList = this.healthInfoList;
          // console.log(res.data.data.hjjkIndexImagesVos[0].indexCarouselImgs)
          // console.log(healthInfoList);
          // this.bigImgUrl=this.healthInfoList.hjjkHealthPreservationListDto.bigImgUrl;
          this.bannerimgs = res.data.data.hjjkIndexImagesVos;
          console.log(this.bannerimgs);
          console.log(res.data.data.hjjkIndexImagesVos)
          this.yqid=res.data.data.hjjkHealthPreservationListDtos[0].id;
          this.yqtitle=res.data.data.hjjkHealthPreservationListDtos[0].title;
          // this.yqbrowse=res.data.data.hjjkHealthPreservationListDtos[0].browse;
          this.yqtype=res.data.data.hjjkHealthPreservationListDtos[0].type;
          // console.log(bannerimgs)
          // this.yqcrtTm=res.data.data.hjjkHealthPreservationListDtos[0].crtTm;
          // this.doctorInfo=res.data.data;
          this.workSpace=res.data.data.workSpace;
          // this.healthInfoList = res.data.data.hjjkHealthPreservationListDtos;
          console.log(res.data.data.hjjkHealthPreservationListDtos)
          this.hasAuth=Number(res.data.data.msgType);
          console.log('hhhh',res.data.data);
          this.jiangzuoUrl=res.data.data.hjjkHealthPreservationListDto.imgUrl;
          for(let i=0;i<this.doctorInfo.favorableRate;i++){
            this.ratelist.push({is:1});
          }
          for(let i=0;i<5-this.doctorInfo.favorableRate;i++){
            this.ratelist.push({is:0});
          }
          // this.newhealthPreservationList=this.healthInfoList.concat();
          this.newhealthPreservationList = res.data.data.hjjkHealthPreservationListDtos.concat();
          this.newhealthPreservationList.shift();

        });
      },

      jumpToFormConsult() {
        if (this.hasAuth===0) {
          this.dialogShow = true
        } else if (this.hasAuth===2) {
          this.$router_({name: 'formConsult'})
        }
      },
      jumpToOneToOneConsult() {
        if (this.hasAuth===0) {
          this.dialogShow = true
        } else if (this.hasAuth===2) {
          this.$router_({name: 'myConsult'})
        }
      },
      getNotReadNumberFun() {
        getNotReadNumber().then(res => {
          sessionStorage.setItem('doctorunreadnum', res.data.data.msgNum);
          console.log('doctorHomepage', res.data.data.msgNum);
        })
      },
      tolbinfo(a) {
        this.$router_({path: '/lbinfodetail', query: {id: a.hjjkIndexImagesVo.id}});
      },
      toyqinfo(a) {
        if (a!= '') {
          if (this.yqtype== 1) {
            this.$router.push({path: '/iframePage', params: {type: 0}, query: {id: a}})
          } else {
            this.$router_({path: "/yqinfodetail", query: {healthInfoId: a}});
          }
        }
      },
      toinfo2(a) {
        if (a.hjjkHealthPreservationVo.id != '') {
          if (a.hjjkHealthPreservationVo.type== 1) {
            this.$router.push({path: '/iframePage', params: {type: 0}, query: {id: a.hjjkHealthPreservationVo.id}})
          } else {
            this.$router_({path: "/yqinfodetail", query: {healthInfoId: a.hjjkHealthPreservationVo.id}});
          }
        }
      },
      tohealthinfo() {
        this.$router_({path: '/yqinfolist'});
      },
      //登录腾讯im获取秘钥
      getUserSig() {
        getSig(this.identifier).then(res => {
          this.userSig = res.data.data;
          sessionStorage.setItem('doctorSig', this.userSig);
          this.getIMBegin();
        });
      },
      //登录im
      getIMBegin() {
        let promise = this.tim.login({
          userID: this.identifier, //登录的会员id
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
  };
</script>
<style scoped lang="less">
  .my-swipe .van-swipe-item {
    height: 3.09rem;

    img {
      width: 100%;
      height: 3.09rem;
    }
  }
</style>
<style scoped lang="less">
  .doctorHomepage_container {
    padding-top: 1rem; //0.88rem
    .d_bar{
      margin: 0 auto;
      width: 6.9rem;
      height: 2.6rem;
      // background: url("../../../assets/imgs/img_srys_banner.png");
      background-size: 6.9rem 2.6rem;
      border-radius: 0.08rem;
      box-shadow: 0 0 0.15rem rgba(96, 96, 96, 0.32);
      .van-swipe-item{
        width: 6.9rem;
        height: 2.6rem;
      }
    }
    .notice{
      margin: 0.3rem auto;
      width: 6.9rem;
      height: 0.7rem;
      background: #F6F3F7;
      align-items: center;
      border-radius: 0.08rem;
      display: flex;
      justify-content: flex-start;
      .n_line{
        width: 0.02rem;
        height: 0.32rem;
        background: #B6B3B6;
      }
      .n_content{
        margin-left: 0.22rem;
        font-size: 0.26rem;
        color: #848484;
        width: 3.6rem;
        height: 0.3rem;
      }
      .other{
        color: #F99273;
      }
      .n_action{
        font-size: 0.22rem;
        color: #1BC2BE;
      }
    }
    .d_info {
      padding-top: 0.3rem;
      margin: 0 auto;
      width: 6.9rem;
      height: 1.9rem;
      border-radius: 0.08rem;
      box-shadow: 0 0 0.15rem rgba(96, 96, 96, 0.32);

      .d_info_top {
        width: 6.6rem;
        height: 1.1rem;
        margin-left: 0.3rem;
        display: flex;
        justify-content: flex-start;

        .top_img {
          width: 1.1rem;
          height: 1.1rem;
          border-radius: 0.55rem;

          img {
            width: 1.1rem;
            height: 1.1rem;
          }
        }

        .top_middle {
          margin-left: 0.3rem;
          width: 3.84rem;
          height: 0.8rem;

          .top_middle_dis {
            margin-top: 0.13rem;
            width: 3.84rem;
            height: 0.4rem;
            display: flex;
            justify-content: flex-start;

            img {
              width: 0.22rem;
              height: 0.25rem;
            }

            .m_name {
              color: #5C5D5D;
              font-size: 0.3rem;
              font-weight: bold;
            }

            .m_duty {
              color: #848484;
              font-size: 0.26rem;
              margin-left: 0.24rem;
            }

            .m_service {
              margin-left: 0.1rem;
              color: #848484;
              font-size: 0.24rem;
            }

            .m_rate {
              margin-top: 0.02rem;
              margin-left: 0.45rem;
              width: 1.6rem;
              height: 0.4rem;

              img {
                width: 0.27rem;
                height: 0.24rem;
              }
            }

            .unlogin {
              display: flex;
              justify-content: flex-start;
            }
          }
        }

        .top_right {
          width: 1.21rem;
          height: 0.55rem;

          img {
            width: 1.21rem;
            height: 0.55rem;
          }
        }
      }

      .d_info_bottom {
        margin: 0.3rem auto 0;
        width: 6.6rem;
        height: 0.8rem;
        background: url("../../../assets/imgs/img_msg.png");
        background-size: 6.6rem 0.8rem;

        .b_container {
          display: flex;
          justify-content: space-between;
          margin-left: 0.36rem;
          padding-top: 0.25rem;
          width: 5.92rem;
          height: 0.36rem;

          .b_line {
            width: 0.02rem;
            height: 0.33rem;
            background: #2B9986;
          }

          .b_content {
            margin-top: -0.02rem;
            color: white;
            font-size: 0.26rem;
            display: flex;
            justify-content: flex-start;
            width: 4.92rem;
            height: 0.3rem;
            .b_state{
              width: 1.14rem;
              height: 0.38rem;
              color:#F48003;
            }
            .b_edit {
              margin-left: 1.4rem;
              font-size: 0.22rem;
            }
          }
        }
      }
    }

    .d_work {
      margin:0 auto;
      width: 6.9rem;
      height: 4.2rem;
      border-radius: 0.08rem;
      box-shadow: 0 0 0.15rem rgba(96, 96, 96, 0.32);
      .notRz{
        width: 2.62rem;
        height: 0.9rem;
        margin: 0.36rem auto 0.2rem;
      }
      .rztip{
        margin-left: 2.16rem;
        font-size: 0.26rem;
        color: #51A89D;
      }
      .d_work_top {
        padding-top: 0.26rem;
        margin-left: 0.39rem;
        margin-bottom: 0.25rem;
        width: 6.3rem;
        height: 0.4rem;
        display: flex;
        justify-content: space-between;

        .work_my {
          margin-top: -0.05rem;
          width: 4rem;
          height: 0.4rem;
          color: #606060;
          font-size: 0.3rem;
          font-weight: bold;
        }

        .work_price {
          font-size: 0.25rem;
          color: #51A89D;
          font-weight: bold;
        }
      }

      .work_line {
        margin: 0 auto;
        width: 6.42rem;
        height: 0.02rem;
        background: #E5E5E7;
      }
      .d_work_content{
        width: 6.4rem;
        height: 2.4rem;
        margin: 0 auto;
        .d_work_item{
          font-size: 0.28rem;
          color: #5D5D5D;
          width: 1.2rem;
          height: 0.8rem;
          float: left;
        }
      }
      .d_work_btn{
        margin: 0.14rem auto;
        width: 1.92rem;
        height: 0.5rem;
        background: url("../../../assets/imgs/btn_doctor_service.png");
        background-size: 1.92rem 0.5rem;
      }

    }

    .d_type {
      padding-top: 0.3rem;
      margin: 0.3rem auto;
      width: 6.9rem;
      height: 1.7rem;
      border-radius: 0.08rem;
      box-shadow: 0 0 0.15rem rgba(96, 96, 96, 0.32);

      .type_img {
        margin: 0 auto;
        width: 5.96rem;
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
      }

      .type_name {
        margin: 0.2rem auto 0;
        font-size: 0.28rem;
        color: #5D5D5D;
        width: 6.26rem;
        height: 0.32rem;
        display: flex;
        justify-content: space-between;
      }
    }

    .d_doc {
      margin: 0 auto;
      width: 6.9rem;
      height: 3.8rem;
      border-radius: 0.08rem;
      box-shadow: 0 0 0.15rem rgba(96, 96, 96, 0.32);
      img{
        width: 6.9rem;
        height: 3.8rem;
        border-radius: 0.08rem;
      }
    }

    .dialog_text {
      color: #3FA998;
      padding: 0.56rem 0 0.48rem;
      text-align: center;
    }

    .wxyqinfotitle {
      width: 2.9rem;
      height: 0.4rem;
      margin: 0.5rem auto 0.3rem;
      display: flex;
      justify-content: flex-start;

      .g_title {
        margin-top: 0.08rem;
        width: 0.09rem;
        height: 0.36rem;
        background: #01919C;
      }

      .g_text {
        color: #606060;
        font-size: 0.36rem;
        font-weight: bold;
        margin-left: 0.3rem;
      }
    }

    .wxyqinfo {
      margin: 0 auto 0.3rem;
      border-radius: 0.08rem;
      box-shadow: 0 0 0.15rem rgba(96, 96, 96, 0.32);
      overflow: hidden;
      width: 6.9rem;
      height: 11.9rem;
      font-size: 0.3rem;
      color: #5D5D5D;

      .wxyqimg {
        width: 6.9rem;
        height: 3.2rem;

        img {
          border-radius: 0.08rem 0.08rem 0 0;
          width: 6.9rem;
          height: 3.2rem;
        }
      }

      .wxyqdetail {
        margin: 0.28rem auto 0;
        width: 6.5rem;
        height: 1.4rem;
        border-bottom: 0.02rem solid #F8F8FA;


        .wxyq_o {
          font-weight: bold;
          width: 6.5rem;
          height: 0.8rem;
          margin: 0 auto;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .wxyqd_time {
          margin: 0.2rem auto 0;
          width: 6.5rem;
          font-size: 0.24rem;
          color: #828282;
          display: flex;
          justify-content: space-between;
        }
      }

      .eye {
        width: 0.5rem;
        height: 0.4rem;
        background: url("../../../assets/imgs/wxyq_2.png") no-repeat 0 0.08rem;
        background-size: 0.3rem 0.2rem;
        padding-left: 0.4rem;
      }

      .wxyqdetailcontent {
        margin: 0.28rem auto 0;
        width: 6.5rem;
        height: 1.7rem;
        border-bottom: 0.02rem solid #F8F8FA;
        display: flex;
        justify-content: space-between;

        .wxyqd_info {
          width: 4.1rem;
          height: 1.5rem;

          .wxyq_t {
            font-weight: bold;
            width: 4.2rem;
            height: 0.8rem;
            font-size: 0.3rem;
            color: #5D5D5D;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .wxyqd_time2 {
            margin: 0.5rem auto 0;
            width: 4.2rem;
            font-size: 0.24rem;
            color: #828282;
            display: flex;
            justify-content: space-between;
          }
        }

        .wxqyd_img {
          width: 2.2rem;
          height: 1.46rem;

          img {
            width: 2.2rem;
            height: 1.46rem;
          }
        }
      }

      .check_more {
        margin-top: 0.36rem;
        display: flex;
        justify-content: center;

        img {
          width: 2.3rem;
          height: 0.46rem;
        }
      }
    }

    .copyRight {
      height: 0.95rem;
      width: 100%;
      background: url('../../../assets/imgs/img_sy_module_four.png');
      background-size: 100% 100%;
      box-sizing: border-box;
      padding-top: 0.15rem;
      font-size: 0.24rem;
      color: #ffffff;

      .top {
        text-align: center;
      }

      .bottom {

        text-align: center;
      }
    }
  }
</style>
<style>
  @import url("../../../assets/less/vantstyle/swipe.css");
  @import url("../../../assets/less/vantstyle/notice_bar.css");
  @import url("../../../assets/less/vantstyle/button.css");
  @import url("../../../assets/less/vantstyle/dialog.css");
</style>
