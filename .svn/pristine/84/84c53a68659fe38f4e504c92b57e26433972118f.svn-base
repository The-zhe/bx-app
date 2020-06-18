// 2020/3/12 created by xtt
<template>
  <div class="wxhome">
    <div class="swipe_container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <div v-for="item in lblist">
          <van-swipe-item @click="toinfo2(item)">
            <img :src="item.indexCarouselImgs"/>
          </van-swipe-item>
        </div>
      </van-swipe>
    </div>
    <!--<div class="wxbar"><img src="../../assets/imgs/wx2.png"></div>-->
    <div class="wxnotice" @click="togginfo">
      <img src="../../assets/imgs/wx1_2.png" class="icon"/>
      <div class="bar" :style="{'margin-top':isIos?'-0.08rem':'-0.05rem'}">
        <van-notice-bar color="#4F4F4F" background="#ffffff" :text="notice"></van-notice-bar>
      </div>
    </div>
    <div class="wxconsult" @click="toconsult">
      <!--<div class="wxconsultc"></div>-->
    </div>
    <div class="wxchronicdisease">
      <img class="wxchro" src="@/assets/imgs/btn_sy_consuilt_mb.png" @click="toslowtype"/>
      <img class="wxchrt" src="@/assets/imgs/btn_sy_medicine.png" @click="toDoorsMedicine"/>
    </div>
    <!--       <div class="wxapp">
        <div class="wxappo" @click="linkDownload('https://m.youlai.cn/whfy/?source=uc&uc_biz_str=S:custom%7CC:iflow_ncmt&app=uc-iflow&pagetype=share')"><img src="../../assets/imgs/wx7_1.png">权威发布</div>
        <div class="wxappt" @click="linkDownload('https://mp.weixin.qq.com/s/9aZAniafsCClig9mvgTnMw')"><img src="../../assets/imgs/wx7_2.png"> 发热门诊</div>
        <div class="wxappth" @click="linkDownload('https://broccoli.uc.cn/apps/feiyansearch/routes/d_beY5eo')"><img src="../../assets/imgs/wx7_3.png">患者同行程</div>
        <div class="wxappf"><img src="../../assets/imgs/wx7_4.png">APP下载</div>
    </div>-->

    <div class="wxinfo">
      <div class="wxinfo_top">
        <div :class="isshow?'wxinfo_top_nation':'wxinfo_top_zj'" @click="toQg">全国疫情播报</div>
        <div :class="isshow?'wxinfo_top_zj':'wxinfo_top_nation'" @click="toZj">浙江疫情播报</div>
      </div>
      <div class="wxinfo_click" @click="jumpToIframePage('https://huodong.myzaker.com/h/2019ncov/map.php','新型肺炎疫情最新动态')">
        <div class="wxinfo_content" v-show="isqg">
          <div class="num">
            {{wxinfo.qgQz}}
            <div class="definite">确诊</div>
            <!--            <div>宁波</div> -->
          </div>

          <div class="num" style="color: #F49A40">
            {{wxinfo.qgYs}}
            <div class="definite">疑似</div>
            <!--             <div>确诊 <span>{{wxinfo.nbQz}}</span></div> -->
          </div>

          <div class="num" style="color: #06C1AD">
            {{wxinfo.qgZy}}
            <div class="definite">治愈</div>
            <!--             <div>治愈  <span>{{wxinfo.nbZy}}</span></div> -->
          </div>

          <div class="num" style="color: black">
            {{wxinfo.qgSw}}
            <div class="definite">死亡</div>
            <!--             <div>死亡  <span>{{wxinfo.nbSw}}</span></div> -->
          </div>
        </div>
        <div v-show="!isqg">
          <div class="wxinfo_content">

            <div class="num">{{wxinfo.zjQz}}
              <div class="definite">
                确诊
              </div>
            </div>

            <div class="num" style="color: #06C1AD">{{wxinfo.zjZy}}
              <div class="definite">
                治愈
              </div>
            </div>


            <div class="num" style="color: black">{{wxinfo.zjSw}}
              <div class="definite">
                死亡
              </div>
            </div>

          </div>
          <!--           <div class="zjyq">
              <div class="definite">宁波</div>
              <div class="definite">确诊 <span>{{wxinfo.nbQz}}</span></div>
              <div class="definite">治愈  <span>{{wxinfo.nbZy}}</span></div>
              <div class="definite">死亡  <span>{{wxinfo.nbSw}}</span></div>
          </div>-->
        </div>
        <div class="wxinfo_bottom">
          <img src="../../assets/imgs/wx8_1.png"/>
          <div class="wxinfo_text">截至{{reporttime}}&emsp;来源：各地区卫健委</div>
          <div
            class="wxinfo_btn"
            @click="linkDownload('https://m.uczzd.cn/webview/article/newspecial.html?uc_biz_str=S%3Acustom%7CC%3Atitlebar_hover_2&aid=3804775841868884355&cid=100&uc_param_str=lodndseiwifrvesvntgi&sm_article_id=3804775841868884355&uc_h5_page_name=iflowspecial&feiyan=1&feiyan_jump=-3&app=uc-iflow&enterfrom=xxl-bigboycard&zzd_from=uc-iflow&dl_type=2&recoid=10438703697711189275&activity=1&activity2=1\n')"
          ></div>
        </div>
      </div>
      <div class="wxinfo_news" @click="tossnews(sszxInfo.sszxId)">
        <img class="icon" src="@/assets/imgs/img_sy_sszx.png"/>
        <div class="text">
          <div class="title">{{sszxInfo.sszxTitle}}</div>
          <div class="time">{{sszxInfo.sszxTime}}</div>
        </div>
        <img class="arrow" src="@/assets/imgs/btn_da_next.png"/>
      </div>
    </div>
    <div class="wxdiscuss" @click="toinfo2({id:wxinfo.doctorSayId})">
      <img :src="wxinfo.doctorSayImg"/>
      <!--<div class="wxdisb">防疫专家谈新冠</div>
      <div class="wxdiss">宁波疾控中心健教所  贺天锋所长</div>-->
    </div>

    <div class="wxpublic">
      <div class="wxp_top">
        <img src="@/assets/imgs/btn_sy_join.png" class="wxp_btn" @click="tojoinpublic"/>
      </div>
      <div class="wxp_divy" v-if="gdlist.length>0">
        <van-swipe
          style="height: 4.8rem;"
          :show-indicators="false"
          vertical
          :autoplay="3000"
          indicator-color="white"
          :touchable="false"
        >
          <div v-for="(items,index) in gdlist">
            <van-swipe-item>
              <div class="wxp_div" v-for="item in items" @click="jumpToDoctorDetail(item)">
                <div class="wxp_head">
                  <img :src="item.imgUrl!=''?item.imgUrl:doctorimg"/>
                  <div class="wxp_card">
                    <img src="../../assets/imgs/img_home_Freeclinic.png"/>
                  </div>
                </div>
                <div class="wxp_info">
                  <div class="wxop_info_name">
                    <div class="nameo">{{item.name}}</div>
                    <div class="namet">{{item.titleNm}}</div>
                    <div class="nameth">已加入</div>
                  </div>
                  <div class="wxp_hos">{{item.hospitalName}}</div>
                </div>
              </div>
            </van-swipe-item>
          </div>
        </van-swipe>
      </div>
      <div class="wxp_more" @click="todoclist">
        <div class="wxp_more_text">查看全部医生</div>
        <!--<img src="../../assets/imgs/wx1_3.png"/>-->
      </div>
    </div>


    <!--<div class="padding_container">
      <div class="padding"></div>-->
    <div class="heathinfo_container">
      <div class="title"></div>
      <div class="list">
        <div class="item" v-for="item in wxinfo.healthPreservationList" @click="toinfo2(item)">
          <div class="text">
            <div class="item_title">{{item.title}}</div>
            <div class="item_info">
              <div class="time">{{item.crtTm|fromNowTime}}</div>
              <div class="view">
                <div class="icon">
                  <img src="@/assets/imgs/wxyq_2.png"/>
                </div>
                <div class="num">{{item.browse}}</div>
              </div>
            </div>
          </div>
          <div class="img">
            <img :src="item.imgUrl"/>
          </div>
        </div>
      </div>
      <div class="check_more">
        <img @click="tohealthinfo" src="@/assets/imgs/wxyq_4.png"/>
      </div>
    </div>
    <!--  <div class="padding"></div>
    </div>-->


    <div class="copyRight">
      <div class="top">COPY RIGHT 宁波百护佳健康管理有限公司 版权所有</div>
      <div class="bottom">浙ICP备16032948号-1</div>
    </div>
    <!--       <div class="wxyqinfo">

        <div class="wxyqimg"><img :src="healthPreservationList[0].imgUrl"></div>
        <div class="wxyqdetail" @click="toyqinfo(healthPreservationList[0].id)">
          <div>
            <div class="wxyq_o">{{healthPreservationList[0].title}}</div>
          <div class="wxyqd_time"><div>20分钟前</div> <div class="eye">{{healthPreservationList[0].browse}}</div></div>
          </div>
        </div>
        <div class="wxyqdetail"  v-for="item in newhealthPreservationList" @click="toinfo2(item)">
          <div class="wxyqd_info">
            <div class="wxyq_t">{{item.title}}</div>
            <div class="wxyqd_time2"><div>{{item.crtTm|fromNowTime}}</div> <div class="eye">{{item.browse}}</div></div>
          </div>
          <div class="wxqyd_img"><img :src="item.imgUrl"></div>
        </div>
        <div class="wxyq_btn" @click="tohealthinfo"></div>
    </div>-->
  </div>
</template>

<script>
  import moment from "moment";
  import {getYqinfo, getlbinfo,getisyqtable,getSig, getwxuserunreadnum} from "../../api/index";

  export default {
    name: "wxhome",
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
    data() {
      return {
        isIos:false,
        reporttime: moment()
          .subtract(1, "days")
          .format("YYYY-MM-DD"), //报道时间
        isshow: true,
        doctorimg: require("../../assets/imgs/x_docimg.png"),
        isqg: true,
        labaimg: require("../../assets/imgs/wx1_2.png"),
        wxinfo: {},
        notice: "",
        lblist: [],
        healthTeamList: [],
        doctorSayImg: "",
        healthPreservationList: [],
        newhealthPreservationList: [],
        healthInfoList: [],
        gdlist: [],
        sszxInfo: {},
        identifier:'',   //用户id
        userSig:'',
      };
    },
    methods: {
      //实时资讯跳转
      tossnews(id){
        this.$router_({path: "/yqinfodetail",query:{healthInfoId:id}});
      },
      getinfo() {
        getYqinfo().then(res => {
          this.sszxInfo = {
            sszxId: res.data.data.sszxId,
            sszxTime: res.data.data.sszxTime,
            sszxTitle: res.data.data.sszxTitle
          };
          this.notice = res.data.data.noticeTitle;
          this.wxinfo = res.data.data;
          this.lblist = res.data.data.indexImagesList;
          this.healthTeamList = res.data.data.healthTeamList;
          this.doctorSayImg = res.data.data.doctorSayImg;
          /*              this.healthPreservationList=res.data.data.healthPreservationList;
               this.newhealthPreservationList=this.healthPreservationList.concat();
               this.newhealthPreservationList.shift(); */
          for (let i = 0; i < this.healthTeamList.length; i = i + 3) {
            this.gdlist.push(this.healthTeamList.slice(i, i + 3));
          }
        });
      },
      //医生列表
      todoclist() {
        sessionStorage.setItem('istype','');
        if(Boolean(sessionStorage.getItem('inApp'))){
          let hasLogin = Boolean(localStorage['userId']);
          if(hasLogin){
            sessionStorage.setItem("istype", "yizhen");
            this.$router_({path: "/wxdoctorlist"});
          }else {
            this.$router_({path: "/userlogin"});
          }

        }else {
          this.$dialog.confirm({
            title: '提示',
            message: '下载APP，与医生一对一即时交流',
            confirmButtonText: '确 定',
            cancelButtonText: '打开APP',
            confirmButtonColor: '#56B2AD',
            cancelButtonColor: '#56B2AD'
          }).then(() => {

          }).catch(() => {

          });
        }

      },
      jumpToIframePage(url,title) {
        this.$router_({name:'iframePage',params:{type:0,url,title}})
      },
      //加入微公益
      tojoinpublic() {
        this.$router_({name: "joinWelfare"});
      },
      toDoorsMedicine(){
        this.$router_({name:'doorsMedicine'})
      },
      jumpToDoctorDetail(item){
        this.$router_({path:'/wxdoctorinfo',query:{id:item.id}})
      },
      //慢病咨询
      toslowtype() {
        this.$router_({path: "/slowtype"});
      },
      toinfo2(a) {
        if(a.id!=''){
          if(a.type==1){
            this.$router.push({path:'/iframePage',params:{type:0},query:{id:a.id}})
          }
          else{
            this.$router_({path: "/yqinfodetail",query:{healthInfoId:a.id}});
          }
        }
      },
      toyqinfo(a) {
        sessionStorage.setItem("healthInfoId", a);
        this.$router_({path: "/yqinfodetail"});
      },
      toconsult() {
        let userId=localStorage.getItem('userId');
        if(Boolean(userId)){
          getisyqtable(Number(userId)).then((res)=>{
            if(res.data.data==='0'){
              this.$router_({path: "/fillbasic"});
            }else {
              this.$dialog.alert({
                title: '提示',
                message: '你已提交过表单',
                confirmButtonText: '确 定',
                confirmButtonColor: '#3FA998',
              }).then(() => {
              }).catch(() => {
              });
            }
          });
        }else {
          this.$router_({path: "/fillbasic"});
        }
      },
      toZj() {
        this.isqg = false;
        this.isshow = false;
      },
      toQg() {
        this.isqg = true;
        this.isshow = true;
      },
      tolbinfo(a) {
        this.$router_({path: "/lbinfodetail", query: {id: a.id}});
        console.log("www", a);
      },
      togginfo() {
        let id = this.wxinfo.noticeId;
        this.$router_({path: "/gginfo", query: {id: id}});
      },
      tohealthinfo() {
        this.$router_({path: "/yqinfolist"});
      },
      //用户未读数
      getuserunreadnum() {
        let userId = sessionStorage.getItem("userId");
        getwxuserunreadnum(userId).then(res => {
          this.resetSetItem("wxunread", res.data.data.msgNum);
          console.log("3333", res.data.data.msgNum);
        });
        // this.set_interval();
      },
      set_interval() {
        //clearInterval(secondInterval);
        let secondInterval = setInterval(() => {
          setTimeout(() => {
            console.log("num");
            this.getuserunreadnum();
          }, 500000);
        }, 500000);
      },
      emptytable() {
        sessionStorage.setItem('symOptionsFr','false');
        sessionStorage.setItem('symOptionsKs','false');
        sessionStorage.setItem('symOptionsXmqj','false');
        sessionStorage.setItem('symOptionsFlst','false');
        sessionStorage.setItem('symOptionsFx','false');
        sessionStorage.setItem('symOptionsExot','false');
        sessionStorage.removeItem('symOptionsOt');
        sessionStorage.removeItem('symOptionsExTime');
        sessionStorage.removeItem('symOptionsOtTime');
        sessionStorage.removeItem('districtNm');
        sessionStorage.removeItem('istableupd');
        sessionStorage.removeItem('birthday');
        sessionStorage.removeItem('cityNm');
        sessionStorage.removeItem('code');
        sessionStorage.removeItem('fkxxOptionsA');
        sessionStorage.removeItem('fkxxOptionsB');
        sessionStorage.removeItem('fkxxOptionsBDesc');
        sessionStorage.removeItem('fkxxOptionsC');
        sessionStorage.removeItem('fkxxOptionsCDesc');
        sessionStorage.removeItem('fkxxOptionsD');
        sessionStorage.removeItem('fkxxOptionsDDesc');

        sessionStorage.removeItem('illnessDesc');
        sessionStorage.removeItem('jqCityNm');
        sessionStorage.removeItem('jqProviceNm');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('pastHistory');

        sessionStorage.removeItem('phone');
        sessionStorage.removeItem('proviceNm');
        sessionStorage.removeItem('reportImg');
        sessionStorage.removeItem('sex');
        sessionStorage.removeItem('statNm');

        //sessionStorage.removeItem('symOptionsExot');
        sessionStorage.removeItem('symOptionsExotTime');
        //sessionStorage.removeItem('symOptionsFlst');
        sessionStorage.removeItem('symOptionsFlstTime');
        //sessionStorage.removeItem('symOptionsFr');
        sessionStorage.removeItem('symOptionsEx');

        sessionStorage.removeItem('symOptionsFrTime');
        // sessionStorage.removeItem('symOptionsFx');
        sessionStorage.removeItem('symOptionsFxTime');
        //sessionStorage.removeItem('symOptionsKs');
        sessionStorage.removeItem('symOptionsKsTime');

        // sessionStorage.removeItem('symOptionsXmqj');
        sessionStorage.removeItem('symOptionsXmqjTime');
        sessionStorage.removeItem('temp');
        sessionStorage.removeItem('tripCityNm');
        sessionStorage.removeItem('tripDesc');

        sessionStorage.removeItem('tripEndTime');
        sessionStorage.removeItem('tripProviceNm');
        sessionStorage.removeItem('tripStartTime');
        sessionStorage.removeItem('visitingProcess');

      },
      //登录腾讯im获取秘钥
      getUserSig(){
        getSig(this.identifier).then(res=>{
          this.userSig=res.data.data;
          sessionStorage.setItem('userSig',this.userSig);
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
          console.log("IM登录成功",imResponse);
        })
          .catch(function (imError) {
            console.warn("login error:", imError); // 登录失败的相关信息
          });
      },
    },
    mounted() {
      this.isIos=sessionStorage.getItem('phoneType')=='ios'
      this.identifier=localStorage.getItem('userId');
      this.$store.commit('setHeaderTitle','倍熙私医')
      this.$nextTick(()=>{
        this.getinfo();
        this.getUserSig();
        this.getuserunreadnum();
        this.emptytable();
      });
      let type=sessionStorage.getItem('phoneType');
      if(type==='ios'){
        sessionStorage.setItem('inApp',"1");
      }

    }
  };
</script>
<style>
  @import url("../../assets/less/vantstyle/notice_bar.css");
</style>
<!--<style scoped lang="less">
  .wxp_divy{
    .van-swipe-item{
      height: 450px !important;
    }
  }
</style>-->
<style scoped lang="less">
  .my-swipe .van-swipe-item {
    height: 3.06rem;
    border-radius: 0.16rem !important ;
    img {
      width: 100%;
      height: 3.06rem;
      border-radius: 0.16rem !important;
    }
  }
  .van-swipe{
    transform: translateY(0);
    overflow:hidden;
    border-radius: 0.16rem !important;
    .van-swipe__track{
      border-radius: 0.16rem !important;
    }
  }

</style>
<style scoped lang="less">
  .wxhome {
    margin-top: 0.88rem;
    width: 100%;

    .wxbar {
      height: 3.4rem;

      img {
        width: 100%;
        height: 3.4rem;
      }
    }
    .swipe_container{
      width: 6.9rem;
      height: 3.07rem;
      margin: 0 auto;
      border-radius: 0.16rem;
    }
    .wxnotice {
      display: flex;
      align-items: center;
      padding-left: 0.17rem;
      margin: 0.3rem auto 0;
      // margin: 0.2rem auto 0.22rem;
      overflow: hidden;
      width: 6.9rem;
      height: 0.55rem;
      border-radius: 0.16rem;
      box-sizing: border-box;
      box-shadow: 0rem 0rem 0.1rem rgba(96, 96, 96, 0.32);

      .icon {
        width: 0.35rem;
        height: 0.33rem;
      }

      .bar {
        flex: 1;
      }
    }

    .wxconsult {
      margin: 0.3rem auto;
      //margin: 0.14rem auto 0.12rem;
      width: 6.9rem;
      height: 1.47rem;
      border-radius: 0.16rem;
      overflow: hidden;
      background: url("../../assets/imgs/img_home_entry.png");
      background-size: 6.9rem 1.47rem;

      .wxconsultc {
        margin-top: 0.62rem;
        margin-left: 4.16rem;
        width: 2.67rem;
        height: 0.44rem;
        background: url("../../assets/imgs/btn_sy_consulting_one.png") no-repeat;
        background-size: 2.67rem 0.44rem;
      }
    }

    .wxchronicdisease {
      padding: 0 0.3rem;
      height: 1.32rem;
      display: flex;
      justify-content: center;

      .wxchro {
        box-shadow: 0rem 0rem 0.1rem rgba(96, 96, 96, 0.32);
        width: 3.3rem;
        //width: 3.46rem;
        height: 1.32rem;
        border-radius: 0.16rem;
      }

      .wxchrt {
        box-shadow: 0rem 0rem 0.1rem rgba(96, 96, 96, 0.32);
        margin-left: 0.3rem;
        width: 3.3rem;
        //width: 3.46rem;
        height: 1.32rem;
        border-radius: 0.16rem;
      }
    }

    .wxdiscuss {
      width: 6.9rem;
      //padding: 0 0.25rem;
      margin: 0.3rem auto;
      //background: url("../../assets/imgs/wx6.png");
      img {
        box-shadow: 0rem 0rem 0.2rem rgba(96, 96, 96, 0.32);
        border-radius: 0.2rem;
        height: 100%;
        width: 100%;
      }

      /*  box-shadow: 0rem 0rem 0.1rem rgba(96, 96, 96, 0.32); */

      .wxdisb {
        padding-top: 1rem;
        padding-left: 0.5rem;
        color: #606060;
        font-size: 0.36rem;
        font-weight: bold;
      }

      .wxdiss {
        margin-top: 0.3rem;
        padding-left: 0.5rem;
        font-size: 0.26rem;
        font-weight: 300;
        color: #606060;
      }
    }

    .wxapp {
      margin: 0.2rem auto;
      width: 7rem;
      height: 1.7rem;
      border-radius: 0.2rem;
      box-shadow: 0rem 0rem 0.1rem rgba(96, 96, 96, 0.32);
      font-size: 0.26rem;
      color: #5d5d5d;
      display: flex;
      justify-content: space-between;
      text-align: center;

      .wxappo {
        width: 1.35rem;
        height: 1.25rem;

        img {
          margin: 0.2rem auto;
          width: 0.73rem;
          height: 0.73rem;
        }
      }

      .wxappt {
        width: 1.35rem;
        height: 1.25rem;

        img {
          margin: 0.2rem auto;
          width: 0.76rem;
          height: 0.76rem;
        }
      }

      .wxappth {
        width: 1.35rem;
        height: 1.25rem;

        img {
          margin: 0.2rem auto;
          width: 0.69rem;
          height: 0.73rem;
        }
      }

      .wxappf {
        width: 1.35rem;
        height: 1.25rem;
        color: #ea6000;

        img {
          margin: 0.2rem auto;
          width: 0.73rem;
          height: 0.73rem;
        }
      }
    }

    .wxinfo {
      margin: 0.3rem auto;
      width: 7rem;
      height: 3.91rem;
      border-radius: 0.16rem;
      overflow: hidden;
      box-shadow: 0rem 0rem 0.2rem rgba(96, 96, 96, 0.32);

      .wxinfo_top {
        width: 7rem;
        height: 0.7rem;
        font-size: 0.28rem;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        text-align: center;

        .wxinfo_top_nation {
          padding-top: 0.15rem;
          color: #63bec3;
          width: 3.5rem;
          height: 0.55rem;
        }

        .wxinfo_top_zj {
          padding-top: 0.15rem;
          color: white;
          width: 3.5rem;
          height: 0.55rem;
          background: #cecece;
        }
      }

      .wxinfo_content {
        margin: 0.35rem auto 0 auto;
        width: 7rem;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        text-align: center;

        .num {
          font-weight: bold;
          font-size: 0.3rem;
          color: #e03838;

          .definite {
            font-size: 0.28rem;
            font-weight: 400;
            color: #5d5d5d;
            margin-top: 0.1rem;
            width: 1.68rem;
            height: 0.5rem;
          }
        }

        /* .suspected{
          width: 1.68rem;
          height: 1.6rem;
          .num{
            font-size: 0.36rem;
            color: #F49A40;
          }
        }
        .cure{
          width: 1.68rem;
          height: 1.6rem;
          .num{
            font-size: 0.36rem;
            color: #06C1AD;
          }
        }
        .die{
          width: 1.68rem;
          height: 1.6rem;
          .num{
            font-size: 0.36rem;
            color: #000000;
          }
        }*/
      }

      .zjyq {
        margin: -0.55rem auto 0.35rem auto;
        width: 7rem;
        height: 0.2rem;
        display: flex;
        justify-content: space-between;
        text-align: center;
        color: #5d5d5d;
        font-size: 0.24rem;
        font-weight: bold;

        .definite {
          width: 1.68rem;
          height: 0.2rem;

          .num {
            margin-top: 0.34rem;
            font-size: 0.36rem;
            color: #e03838;
          }
        }
      }

      .wxinfo_bottom {
        padding-bottom: 0.2rem;
        padding-top: 0.25rem;
        height: 0.4rem;
        font-size: 0.18rem;
        color: #777777;
        display: flex;
        justify-content: space-between;

        img {
          margin-top: 0.03rem;
          width: 1.02rem;
          height: 0.31rem;
          margin-left: 0.2rem;
        }

        .wxinfo_text {
          font-size: 0.18rem;
          //margin-top: 0.05rem;
        }

        .wxinfo_btn {
          margin-right: 0.2rem;
          width: 1.3rem;
          height: 0.34rem;
          background: url("../../assets/imgs/wx8_2.png");
          background-size: 1.3rem 0.34rem;
        }
      }

      .wxinfo_news {
        background-color: #f9feff;
        height: 1.15rem;
        display: flex;
        align-items: center;

        .icon {
          margin-left: 0.26rem;
          height: 0.67rem;
          width: 0.64rem;
        }

        .text {
          margin-left: 0.2rem;

          .title {
            font-size: 0.3rem;
            color: #5d5d5d;
          }

          .time {
            font-size: 0.24rem;
            color: #828282;
          }
        }

        .arrow {
          margin-right: 0.34rem;
          margin-left: auto;
          width: 0.15rem;
          height: 0.27rem;
        }
      }
    }

    .wxpublic {
      margin: 0rem auto;
      width: 6.9rem;
      height: auto;
      max-height: 7.2rem;
      border-radius: 0.16rem;
      box-shadow: 0rem 0rem 0.2rem rgba(96, 96, 96, 0.32);

      .wxp_top {
        padding-top: 0.66rem;
        width: 6.9rem;
        height: 1.96rem;
        background: url("../../assets/imgs/img_sy_join.png");
        background-size: 6.9rem 1.96rem;

        .wxp_btn {
          margin-left: 3.58rem;
          width: 3.12rem;
          height: 0.6rem;
        }
      }

      .wxp_divy {
        border-radius: 0.1rem;
        background-color: #ffffff;
        margin-top: -1.05rem;
        z-index: 1000;
        width: 6.9rem;
        height: auto;
        max-height: 5.5rem; //4.75
        overflow-y: scroll;

        .wxp_div {
          margin: 0 auto;
          width: 6rem;
          height: 1.58rem;
          display: flex;
          justify-content: space-between;
          border-top: 0.02rem solid #edeaed;

          .wxp_head {
            margin-top: 0.3rem;
            margin-left: -0.3rem;
            width: 1.4rem;
            height: 1.25rem;

            img {
              width: 0.98rem;
              height: 0.98rem;
              border-radius: 0.49rem;
            }

            .wxp_card {
              width: 0.55rem;
              height: 0.31rem;
              margin-top: -0.3rem;
              margin-left: 0.5rem;

              img {
                width: 0.55rem;
                height: 0.31rem;
              }
            }
          }

          .wxp_info {
            color: #5d5d5d;
            margin-top: 0.4rem;
            font-size: 0.26rem;
            width: 5.2rem;
            height: 1rem;

            .wxop_info_name {
              margin-left: 0.2rem;
              width: 5.1rem;
              height: 0.5rem;
              display: flex;
              justify-content: space-between;
              font-size: 0.3rem;
              margin-bottom: 0.1rem;

              .nameo {
                font-weight: bold;
                margin-left: 0.1rem;
                width: 1.2rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }

              .namet {
                margin-top: 0.05rem;
                margin-left: -0.2rem;
                width: 1.5rem;
                font-size: 0.28rem;
              }

              .nameth {
                text-align: right;
                width: 2.1rem;
                font-size: 0.3rem;
                color: #f49a40;
              }
            }

            .wxp_hos {
              width: 3.5rem;
              font-size: 0.28rem;
              margin-left: 0.3rem;
            }
          }
        }
      }

      .wxp_more {
        width: 7rem;
        height: 0.5rem;
        //background: #007aff;
        .wxp_more_text{
          margin: 0 auto;
          font-size: 0.28rem;
          color: #06C1AD;
          width: 2.1rem;
          height: 0.34rem;
          background: url("../../assets/imgs/btn_home_nextstep.png") no-repeat 1.8rem 0.1rem;
          background-size:0.21rem 0.2rem;
        }
        img {
          margin: 0.2rem auto;
          width: 1.96rem;
          height: 0.32rem;
        }
      }
    }

    .wxyqinfo {
      margin: 0.8rem auto 0 auto;
      width: 100%;
      height: auto;

      .wxyq_top {
        margin: 0 auto;
        width: 6.66rem;
        height: 0.7rem;
        color: #ef7d59;
        font-size: 0.22rem;
        font-weight: bold;
        text-align: center;

        .wxyq_top_line {
          margin-bottom: 0.1rem;
          width: 6.66rem;
          height: 0.4rem;
          display: flex;
          justify-content: space-between;

          .yqline {
            margin-top: 0.35rem;
            width: 2.22rem;
            height: 0.02rem;
            background: #bfbfc1;
          }

          .yqtitle {
            font-size: 0.32rem;
            color: #2ab1a7;
          }
        }
      }

      .wxyqimg {
        margin-top: 0.5rem;
        width: 100%;
        height: 3.5rem;

        img {
          width: 100%;
          height: 3.5rem;
        }
      }

      .wxyqdetail {
        font-size: 0.3rem;
        color: #5d5d5d;
        margin: 0.2rem auto 0 auto;
        width: 7rem;
        height: 1.6rem;
        border-bottom: 0.02rem solid #efecf0;
        display: flex;
        justify-content: space-between;

        .wxyqd_time {
          width: 7rem;
          margin-left: 0.1rem;
          margin-top: 0.24rem;
          font-size: 0.24rem;
          color: #828282;
          display: flex;
          justify-content: space-between;

          .eye {
            padding-left: 0.45rem;
            width: 0.65rem;
            height: 0.4rem;
            background: url("../../assets/imgs/wxyq_2.png") no-repeat 0 0.05rem;
            background-size: 0.3rem 0.2rem;
          }
        }

        .wxyqd_time2 {
          width: 4.5rem;
          margin-left: 0.1rem;
          margin-top: 0.24rem;
          font-size: 0.24rem;
          color: #828282;
          display: flex;
          justify-content: space-between;

          .eye {
            padding-left: 0.45rem;
            width: 0.65rem;
            height: 0.4rem;
            background: url("../../assets/imgs/wxyq_2.png") no-repeat 0 0.05rem;
            background-size: 0.3rem 0.2rem;
          }
        }

        .wxyq_t {
          width: 4.5rem;
          height: 0.8rem;
        }

        .wxyq_o {
          width: 7rem;
          height: 0.8rem;
        }

        .wxyqd_info {
          width: 4.6rem;
          height: 1.5rem;
        }

        .wxqyd_img {
          width: 2.22rem;
          height: 1.48rem;

          img {
            width: 2.22rem;
            height: 1.48rem;
          }
        }
      }

      .wxyq_btn {
        margin: 0.2rem auto;
        width: 2.3rem;
        height: 0.46rem;
        background: url("../../assets/imgs/wxyq_4.png");
        background-size: 2.3rem 0.46rem;
      }
    }

    /* .padding_container {
       margin: 0.29rem 0 0.52rem;
       display: flex;
       }*/

    .padding {
      width: 0.3rem;
    }

    .heathinfo_container {
      //flex: 1;
      width: 6.9rem;
      margin: 0.3rem auto;
      box-shadow: 0rem 0rem 0.2rem rgba(96, 96, 96, 0.32);
      border-radius: 0.16rem;
      box-sizing: border-box;
      padding: 0 0 0.4rem;

      .title {
        background: url("../../assets/imgs/img_home_zx_one.png");
        background-size: 100% 100%;
        height: 1.8rem;

        .bar {
          width: 0.1rem;
          height: 0.35rem;
          background-color: #f58008;
        }

        .text {
          margin-left: 0.36rem;
          color: #51a89d;
          font-size: 0.36rem;
          letter-spacing: 0.2rem;
          font-weight: bold;
        }
      }

      .list {
        margin-top: -0.45rem;
        background-color: #ffffff;
        border-radius: 0.14rem;
        padding: 0 0.25rem 0.32rem;
        border-bottom: 0.02rem solid #E7E4E7;

        .item {
          height: 1.84rem;
          box-sizing: border-box;
          padding: 0.18rem 0 0.18rem 0.02rem;
          display: flex;
          justify-content: space-between;

          .text {
            width: 4.2rem;
            margin-right: 0.2rem;
            display: flex;
            flex-direction: column;

            .item_title {
              color: #5d5d5d;
              font-size: 0.28rem;
            }

            .item_info {
              justify-content: space-between;
              margin-top: auto;
              display: flex;
              color: #828282;
              font-size: 0.24rem;

              .view {
                display: flex;
                align-items: center;

                .icon {
                  margin-right: 0.07rem;

                  img {
                    width: 0.31rem;
                    height: 0.21rem;
                  }
                }
              }
            }
          }

          .img {
            img {
              width: 2.22rem;
              height: 1.47rem;
            }
          }

          &:not(:last-child) {
            border-bottom: 0.02rem solid #E7E4E7;
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
      background: url('../../assets/imgs/img_sy_module_four.png');
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
  @import url("../../assets/less/vantstyle/swipe.css");
  @import url("../../assets/less/vantstyle/notice_bar.css");
</style>

