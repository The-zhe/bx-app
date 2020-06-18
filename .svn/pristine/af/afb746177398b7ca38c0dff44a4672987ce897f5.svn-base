<template>
  <div class="wxdoctorinfo">
    <div class="filltop">
      医生详情
    </div>
    <div class="d_back"></div>
    <div class="d_top">
      <div class="d_top_head">
        <div class="d_top_head_photo">
          <img :src="doctorinfo.imgUrl!=''?doctorinfo.imgUrl:doctorImg"/>
          <div class="photo_z"><img :src="doctorinfo.state==='1'?zimg:limg"/></div>
        </div>
        <div class="d_head_middle">
          <div class="d_head_name">
            <div class="d_head_name_o text_ellipsis">{{doctorinfo.name}}</div>
            <div class="d_head_name_t text_ellipsis">{{doctorinfo.secondDepNm}}</div>
            <div class="d_head_point"></div>
            <div class="d_head_name_th text_ellipsis">{{doctorinfo.titleNm}}</div>
          </div>
          <div class="d_head_hos text_ellipsis">{{doctorinfo.hospitalName}}</div>
        </div>
        <div class="d_head_right">
          <div class="d_head_yz" v-show="doctorinfo.isEpidemic==='1'||doctorinfo.isEpidemic==='12'||doctorinfo.isEpidemic==='2'"></div>
        </div>
        <!--<div class="d_top_head_zx" @click="togx"><img src="../../../assets/imgs/xdocinfo1_1.png"></div>-->
      </div>
      <div class="d_yz">
        <div class="d_yz_img"></div>
        <div>服务人次</div>
        <div class="d_yznum">{{doctorinfo.servicePopulationNum}}</div>
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
    </div>
 <!--   <div class="d_tip">-->
      <van-swipe style="height: 0.8rem;" vertical :autoplay="3000" :show-indicators=false>
        <van-swipe-item>
          <div class="d_tip">
          <img src="../../../assets/imgs/d_info_tip.png"/>
         <div class="d_line"></div>
           <div class="d_tip_text">疫情防控期间，为减缓医院接诊压力，方便患者就医，每名患者提供3次免费咨询服务</div>
          </div>
      </van-swipe-item>
        <van-swipe-item>
          <div class="d_tip">
            <img src="../../../assets/imgs/icon_notice.png"/>
            <div class="d_line"></div>
            <div class="d_tip_text">疫情防控期间，为减缓医院接诊压力，方便患者就医，每名患者提供3次免费咨询服务</div>
          </div>
        </van-swipe-item>
      </van-swipe>
      <!--<img src="../../../assets/imgs/d_info_tip.png"/>
      <div class="d_line"></div>
      <div class="d_tip_text">疫情防控期间，为减缓医院接诊压力，方便患者就医，每名患者提供3次免费咨询服务</div>
      <div class=""></div>-->
 <!--   </div>-->
    <div class="div_type">
      <div class="typetop">
        <img class="moveimg" src="../../../assets/imgs/btn_ysxq_prev.png" @click="toleft"/>
        <div class="d_typecontent">
          <div :class="activeIndex===index?'d_type_item':'d_type_itemh'" v-for="(item,index) in typeitemcreated"
             @click="toindex(index)">
          <div class="typeimg">
            <img :src="activeIndex===index?item.selectImgUrl:item.defaultImgUrl"/>
            <div :style="activeIndex===index?'color:#FE7B58':'color:#54AAA4'" class="a_text">{{item.name}}</div>
          </div>
        </div>
        <!--<div :class="activeIndex===index?'d_type_item':'d_type_itemh'" v-for="(item,index) in typeitem"
             @click="toindex(index)">  &lt;!&ndash;@click="toPage(index)"&ndash;&gt;
          <div :class="style[index]">
            <img v-show="doctorinfo.isEpidemic!=='12'&&activeIndex!==index" :src="doctorinfo.isEpidemic==='1'?item.img:item.aimg"/>
            <img v-show="doctorinfo.isEpidemic==='12'&&activeIndex!==index" :src="item.bimg"/>
            <img v-show="activeIndex===index" :src="item.cimg"/>
            &lt;!&ndash;<div v-show="activeIndex!==index" :style="doctorinfo.isEpidemic=='12'||doctorinfo.isEpidemic=='1'||doctorinfo.isEpidemic=='2'?'color:#54AAA4':'color:#D1D1D1'">{{item.name}}</div>&ndash;&gt;
            <div :style="activeIndex===index?'color:#FE7B58':'color:#54AAA4'">{{item.name}}</div>
            &lt;!&ndash; <div class="white_t" v-show="activeIndex===index"><img :src="white_tragle"/></div>&ndash;&gt;
          </div>
        </div>-->
      </div>
        <img class="moveimg" src="../../../assets/imgs/btn_ysxq_next.png" @click="toright"/>
      </div>
      <div class="d_type_line"></div>
      <div class="d_type_tip" v-for="(item,index) in typeitemcreated" v-show="activeIndex===index">
        <div v-show="activeIndex===index">{{item.introduce}}</div>
      </div>
      <div class="d_type_price" v-show="activeIndex===index&&item.dssList.length>0" v-for="(item,index) in typeitemcreated">
        <div class="d_type_p_item" v-for="type in item.dssList">
          <div class="select"><img :src="type.select?select1:select2" @click="type.select=!type.select"></div>
          <div class="d_type_p_item_name">{{type.hjjkDoctorServiceSpecVo.specNm}}</div>
          <div class="d_type_p_item_twprice">
            <div class="tucishu">剩余免费:3次</div>
            <div class="tuwenprice"><del>￥&emsp;168元/次</del></div>
          </div>
        </div>
        <!--<div class="d_type_p_item">
          <div class="select"><img :src="is2?select1:select2" @click="toselect(2)"></div>
          <div class="d_type_p_item_name">视频会诊</div>
          <div class="d_type_p_item_price">￥&emsp;500元/次</div>
        </div>
        <div class="d_type_p_item">
          <div class="select"><img :src="is3?select1:select2" @click="toselect(3)"></div>
          <div class="d_type_p_item_name">现场会诊</div>
          <div class="d_type_p_item_price">￥&emsp;500元/次</div>
        </div>-->
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
      <div class="zyjl_c">{{doctorinfo.experience}}</div>
    </div>
    <div class="d_btn_back">
    <div class="d_btn" @click="toPage"></div>
    </div>
    <van-popup v-model="show" round>
      <div class="warp">
        <div class="w_x" @click="tocancel"><img src="../../../assets/imgs/xconsult_x.png"/></div>
        <div class="w_title">下载APP</div>
        <div class="w_content">享受更多专家一对一咨询，请前往 APP内操作。</div>
        <div class="w_m"><img src="../../../assets/imgs/xconsult_m.png"></div>
        <div class="w_s">识别二维码，即刻下载APP</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {getwxdoctorinfo, getmodifydz} from '../../../api/index'
  import {
    getconsultId,
    getismbtable,
    getisyqsubimt,
    getisyqtable,
    getwxdoctorinfo2,
    getyqtableinfo
  } from "../../../api";
  import Toast from "vant/es/toast";

  export default {
    name: "wxdoctorinfo",
    data() {
      return {
        fwdetail:[{
          detail:'新冠'
        },{
          detail:'精通高血压、心脏病、糖尿病和神经系统及骨质 疏松症和门诊护理的临床专家为患者答疑解惑'
        },{
          detail:'一对一'
        },{
          detail:'MDT会诊'
        },{
          detail:'手术会诊'
        },{
          detail:'私人医生'
        },
        ],
        is1: true,
        is2: false,
        is3: false,
        select1: require('../../../assets/imgs/xfill1_sex1.png'),
        select2: require('../../../assets/imgs/xfill1_sex2.png'),
        activeIndex: 9,
        white_tragle: require("../../../assets/imgs/x_whitet.png"),
        doctorImg: require("../../../assets/imgs/x_docimg.png"),
        show: false,
        ganx: require('../../../assets/imgs/xdocinfo9.png'),
        unganx: require('../../../assets/imgs/xdocinfo8.png'),
        recordid: this.$route.query.id,
        doctorinfo: {},
        state: 0,
        typeitem: [{
          img: require('../../../assets/imgs/xdoctype1.png'),   //lv
          aimg: require('../../../assets/imgs/xdoctype1_1.png'),  //hui
          bimg: require('../../../assets/imgs/xdoctype1.png'),
          cimg: require('../../../assets/imgs/xdoctype1_2.png'),
          name:'新冠咨询'
        }, {
          img: require('../../../assets/imgs/xdoctype2_1.png'),   //hui
          aimg: require('../../../assets/imgs/xdoctype2.png'),   //lv
          bimg: require('../../../assets/imgs/xdoctype2.png'),
          cimg: require('../../../assets/imgs/xdoctype2_2.png'),
          name:'慢病义诊'
        }, {
          img: require('../../../assets/imgs/xdoctype3_1.png'), //hui
          aimg: require('../../../assets/imgs/xdoctype3_1.png'),
          bimg: require('../../../assets/imgs/xdoctype3_1.png'),
          cimg: require('../../../assets/imgs/xdoctype3_2.png'),
          name:'单次咨询'
        }, {
          img: require('../../../assets/imgs/xdoctype4_1.png'),  //hui
          aimg: require('../../../assets/imgs/xdoctype4_1.png'),
          bimg: require('../../../assets/imgs/xdoctype4_1.png'),
          cimg: require('../../../assets/imgs/xdoctype4_2.png'),
          name:'MDT会诊'
        },
       /*   {
          img: require('../../../assets/imgs/xdoctype5.png'),  //hui
          aimg: require('../../../assets/imgs/xdoctype5.png'),
          bimg: require('../../../assets/imgs/xdoctype5.png'),
          cimg: require('../../../assets/imgs/xdoctype5_2.png'),
        }, {
          img: require('../../../assets/imgs/xdoctype6_1.png'),  //hui
          aimg: require('../../../assets/imgs/xdoctype6_1.png'),
          bimg: require('../../../assets/imgs/xdoctype6_1.png'),
          cimg: require('../../../assets/imgs/xdoctype6_2.png'),
        }*/
        ],
        style: ['aimg', 'bimg', 'cimg', 'dimg'],
        zimg:require('../../../assets/imgs/x_doctor_z.png'),
        limg:require('../../../assets/imgs/x_doctor_l.png'),
        typeitemcreated:[],
      }
    },
    methods: {
      toleft(){
        if(this.activeIndex===0){
          this.activeIndex=0
        }else {
          this.activeIndex = this.activeIndex - 1;
        }
      },
      toright(){
        let num=this.typeitemcreated.length-1;
        if(this.activeIndex===num){
          this.activeIndex=0
        }else {
          this.activeIndex=this.activeIndex+1;
        }

      },
      toselect(index) {
        if (index === 1) {
          this.is1 = !this.is1;
          this.is2=false;
          this.is3=false;
        } else if (index === 2) {
          Toast('疫情期间，只提供图文会诊服务');
         /* this.is2 = !this.is2;
          this.is1=false;
          this.is3=false;*/
        } else if (index === 3) {
          Toast('疫情期间，只提供图文会诊服务');
         /* this.is3 = !this.is3;
          this.is2=false;
          this.is1=false;*/
        }
      },
      toindex(index) {
        this.activeIndex = index;
      },
      tocancel() {
        this.show = false;
      },
      editTable(){
          localStorage.setItem('districtNm', res.data.data.hjjkYqConsultVo.districtNm),
          localStorage.setItem('birthday', res.data.data.hjjkYqConsultVo.birthday),
          localStorage.setItem('cityNm', res.data.data.hjjkYqConsultVo.cityNm),
          localStorage.setItem('fkxxOptionsA', res.data.data.hjjkYqConsultVo.fkxxOptionsA),
          localStorage.setItem('fkxxOptionsB', res.data.data.hjjkYqConsultVo.fkxxOptionsB),
          localStorage.setItem('fkxxOptionsBDesc', res.data.data.hjjkYqConsultVo.fkxxOptionsBDesc),
          localStorage.setItem('fkxxOptionsC', res.data.data.hjjkYqConsultVo.fkxxOptionsC),
          localStorage.setItem('fkxxOptionsCDesc', res.data.data.hjjkYqConsultVo.fkxxOptionsCDesc),
          localStorage.setItem('fkxxOptionsD', res.data.data.hjjkYqConsultVo.fkxxOptionsD),
          localStorage.setItem('fkxxOptionsDDesc', res.data.data.hjjkYqConsultVo.fkxxOptionsDDesc),
          localStorage.setItem('pastHistory', res.data.data.hjjkYqConsultVo.pastHistory),
          localStorage.setItem('proviceNm', res.data.data.hjjkYqConsultVo.proviceNm),
          localStorage.setItem('reportImg', res.data.data.hjjkYqConsultVo.reportImg),
          localStorage.setItem('sex', res.data.data.hjjkYqConsultVo.sex),
          localStorage.setItem('symOptionsEx', res.data.data.hjjkYqConsultVo.symOptionsEx),
          localStorage.setItem('symOptionsExTime', res.data.data.hjjkYqConsultVo.symOptionsExTime),
          localStorage.setItem('symOptionsFr', res.data.data.hjjkYqConsultVo.symOptionsFr),
          localStorage.setItem('symOptionsFrTime', res.data.data.hjjkYqConsultVo.symOptionsFrTime),
          localStorage.setItem('symOptionsFx', res.data.data.hjjkYqConsultVo.symOptionsFx),
          localStorage.setItem('symOptionsFxTime', res.data.data.hjjkYqConsultVo.symOptionsFxTime),
          localStorage.setItem('symOptionsKs', res.data.data.hjjkYqConsultVo.symOptionsKs),
          localStorage.setItem('symOptionsKsTime', res.data.data.hjjkYqConsultVo.symOptionsKsTime),
          localStorage.setItem('symOptionsOt', res.data.data.hjjkYqConsultVo.symOptionsOt),
          localStorage.setItem('symOptionsOtTime', res.data.data.hjjkYqConsultVo.symOptionsOtTime),
          localStorage.setItem('symOptionsXmqj', res.data.data.hjjkYqConsultVo.symOptionsXmqj),
          localStorage.setItem('symOptionsXmqjTime', res.data.data.hjjkYqConsultVo.symOptionsXmqjTime),
          localStorage.setItem('temp', res.data.data.hjjkYqConsultVo.temp),
          localStorage.setItem('visitingProcess', res.data.data.hjjkYqConsultVo.visitingProcess),
          localStorage.setItem('illnessDesc', res.data.data.hjjkYqConsultVo.illnessDesc),
          localStorage.setItem('jqProviceNm', res.data.data.hjjkYqConsultVo.jqProviceNm),
          localStorage.setItem('jqCityNm', res.data.data.hjjkYqConsultVo.jqCityNm),

          localStorage.setItem('istableupd', '1');
      },
      toPage() {
        if(this.typeitemcreated[this.activeIndex].id===4667450476631078){       //新冠
          let id = this.doctorinfo.userId;
          sessionStorage.setItem('consultdoctorId', id);
          let userId = Number(localStorage.getItem('userId'));
          getisyqsubimt(userId).then((res) => {  //isSend 有没有提交过  stat有没有回复过，  0未提交或未回复 1 已提交或已回复
            if (res.data.data.isSend === '1') {
              if (res.data.data.stat === '1') {
                this.$dialog.alert({
                  title: '提示',
                  message: '您的免费咨询已用完',
                  confirmButtonText: '确 定',
                  confirmButtonColor: '#3FA998',
                }).then(() => {
                }).catch(() => {
                });
              } else {
                this.$dialog.confirm({
                  title: '提示',
                  message: '是否要修改已填写的表单',
                  confirmButtonText: '修改',
                  cancelButtonText: '跳过',
                  confirmButtonColor: '#56B2AD',
                  cancelButtonColor: '#56B2AD'
                }).then(() => {
                  getconsultId(userId).then((res)=>{
                    console.log('疫情consultid',res.data.list[0].hjjkYqConsultVo.id);
                    let consultId=res.data.list[0].hjjkYqConsultVo.id;
                    sessionStorage.setItem('consultId',consultId);
                    getyqtableinfo(consultId).then((res) => {
                      console.log('疫情详情', res);
                      if (res.data.code === 0) {
                        this.editTable();
                        this.$router_({path: '/fillbasic'});
                      }
                    });
                  });

                }).catch(() => {
                  sessionStorage.setItem('freetalktype','1');
                  this.$router_({path: '/wxconsultuser'});
                });
              }
            } else {
              this.$router_({path: '/fillbasic'});
            }
          });
        }
        else if(this.typeitemcreated[this.activeIndex].id===4667450476631079){   //慢病
            let id = this.doctorinfo.userId;
            console.log('infoiddd', id);
            sessionStorage.setItem('consultdoctorId', id);
            let sex = localStorage.getItem('persex');
            let birthday = localStorage.getItem('perbirthday');
            if (sex && birthday) {
              sessionStorage.setItem('freetalktype','2');
              this.$router_({path: '/wxconsultuser'});
            } else {
              this.$router_({path: '/userupdinfo'});
            }
        }
        console.log('565656',this.typeitemcreated[this.activeIndex])
        /*if (this.activeIndex === 0) {
          if (this.doctorinfo.isEpidemic === '2') {
            this.$dialog.alert({
              title: '提示',
              message: ' 当前医生无新冠义诊服务',
              confirmButtonText: '返回',
              confirmButtonColor: '#3FA998'
            }).then(() => {
            });
          }
          else {
            let id = this.doctorinfo.userId;
            console.log('infoiddd', id);
            sessionStorage.setItem('consultdoctorId', id);
            let userId = Number(localStorage.getItem('userId'));
            getisyqsubimt(userId).then((res) => {  //isSend 有没有提交过  stat有没有回复过，  0未提交或未回复 1 已提交或已回复
              console.log('是否提交过 是否回复过', res.data.data);
              if (res.data.data.isSend === '1') {
                if (res.data.data.stat === '1') {
                  this.$dialog.alert({
                    title: '提示',
                    message: '您的免费咨询已用完',
                    confirmButtonText: '确 定',
                    confirmButtonColor: '#3FA998',
                  }).then(() => {
                  }).catch(() => {
                  });
                } else {
                  this.$dialog.confirm({
                    title: '提示',
                    message: '是否要修改已填写的表单',
                    confirmButtonText: '修改',
                    cancelButtonText: '跳过',
                    confirmButtonColor: '#56B2AD',
                    cancelButtonColor: '#56B2AD'
                  }).then(() => {

                    getconsultId(userId).then((res)=>{
                      console.log('疫情consultid',res.data.list[0].hjjkYqConsultVo.id);
                      let consultId=res.data.list[0].hjjkYqConsultVo.id;
                      sessionStorage.setItem('consultId',consultId);
                      getyqtableinfo(consultId).then((res) => {
                     console.log('疫情详情', res);
                     if (res.data.code === 0) {

                         sessionStorage.setItem('districtNm', res.data.data.hjjkYqConsultVo.districtNm),
                         sessionStorage.setItem('birthday', res.data.data.hjjkYqConsultVo.birthday),
                         sessionStorage.setItem('cityNm', res.data.data.hjjkYqConsultVo.cityNm),
                         sessionStorage.setItem('fkxxOptionsA', res.data.data.hjjkYqConsultVo.fkxxOptionsA),
                         sessionStorage.setItem('fkxxOptionsB', res.data.data.hjjkYqConsultVo.fkxxOptionsB),
                         sessionStorage.setItem('fkxxOptionsBDesc', res.data.data.hjjkYqConsultVo.fkxxOptionsBDesc),
                         sessionStorage.setItem('fkxxOptionsC', res.data.data.hjjkYqConsultVo.fkxxOptionsC),
                         sessionStorage.setItem('fkxxOptionsCDesc', res.data.data.hjjkYqConsultVo.fkxxOptionsCDesc),
                         sessionStorage.setItem('fkxxOptionsD', res.data.data.hjjkYqConsultVo.fkxxOptionsD),
                         sessionStorage.setItem('fkxxOptionsDDesc', res.data.data.hjjkYqConsultVo.fkxxOptionsDDesc),
                         sessionStorage.setItem('pastHistory', res.data.data.hjjkYqConsultVo.pastHistory),
                         sessionStorage.setItem('proviceNm', res.data.data.hjjkYqConsultVo.proviceNm),
                         sessionStorage.setItem('reportImg', res.data.data.hjjkYqConsultVo.reportImg),
                         sessionStorage.setItem('sex', res.data.data.hjjkYqConsultVo.sex),
                         sessionStorage.setItem('symOptionsEx', res.data.data.hjjkYqConsultVo.symOptionsEx),
                         sessionStorage.setItem('symOptionsExTime', res.data.data.hjjkYqConsultVo.symOptionsExTime),
                         sessionStorage.setItem('symOptionsFr', res.data.data.hjjkYqConsultVo.symOptionsFr),
                         sessionStorage.setItem('symOptionsFrTime', res.data.data.hjjkYqConsultVo.symOptionsFrTime),
                         sessionStorage.setItem('symOptionsFx', res.data.data.hjjkYqConsultVo.symOptionsFx),
                         sessionStorage.setItem('symOptionsFxTime', res.data.data.hjjkYqConsultVo.symOptionsFxTime),
                         sessionStorage.setItem('symOptionsKs', res.data.data.hjjkYqConsultVo.symOptionsKs),
                         sessionStorage.setItem('symOptionsKsTime', res.data.data.hjjkYqConsultVo.symOptionsKsTime),
                         sessionStorage.setItem('symOptionsOt', res.data.data.hjjkYqConsultVo.symOptionsOt),
                         sessionStorage.setItem('symOptionsOtTime', res.data.data.hjjkYqConsultVo.symOptionsOtTime),
                         sessionStorage.setItem('symOptionsXmqj', res.data.data.hjjkYqConsultVo.symOptionsXmqj),
                         sessionStorage.setItem('symOptionsXmqjTime', res.data.data.hjjkYqConsultVo.symOptionsXmqjTime),
                         sessionStorage.setItem('temp', res.data.data.hjjkYqConsultVo.temp),
                         sessionStorage.setItem('visitingProcess', res.data.data.hjjkYqConsultVo.visitingProcess),
                         sessionStorage.setItem('illnessDesc', res.data.data.hjjkYqConsultVo.illnessDesc),
                         sessionStorage.setItem('jqProviceNm', res.data.data.hjjkYqConsultVo.jqProviceNm),
                         sessionStorage.setItem('jqCityNm', res.data.data.hjjkYqConsultVo.jqCityNm),

                         sessionStorage.setItem('istableupd', '1');
                       this.$router_({path: '/fillbasic'});
                     }
                   });
                    });



                  }).catch(() => {
                    sessionStorage.setItem('freetalktype','1');
                    this.$router_({path: '/wxconsultuser'});
                  });
                }

              } else {
                this.$router_({path: '/fillbasic'});
              }
            });
          }
        }
        if (this.activeIndex === 1) {
          let userId = Number(localStorage.getItem('userId'));
          getismbtable(userId).then((res) => {
            let issubmit = res.data.data;
            if (this.doctorinfo.isEpidemic === '1') {
              this.$dialog.alert({
                title: '提示',
                message: ' 当前医生无慢病咨询服务',
                confirmButtonText: '返回',
                confirmButtonColor: '#3FA998'
              }).then(() => {
              });
            } else {
             /!* if (issubmit === '1') {  //已经提交过

              } else {          //还没提交过

              }*!/

              /!* let type = sessionStorage.getItem('phoneType');
               let inapp = sessionStorage.getItem('inApp');*!/
              let id = this.doctorinfo.userId;
              console.log('infoiddd', id);
              sessionStorage.setItem('consultdoctorId', id);
              let sex = localStorage.getItem('persex');
              let birthday = localStorage.getItem('perbirthday');
              if (sex && birthday) {
                sessionStorage.setItem('freetalktype','2');
                this.$router_({path: '/wxconsultuser'});
              } else {
                this.$router_({path: '/userupdinfo'});
              }
            }

          });

        }
        if (this.activeIndex === 2) {
          this.$dialog.alert({
            title: '提示',
            message: '您还不是倍熙私医会员，无法使用此功能',
            confirmButtonText: '返回',
            confirmButtonColor: '#3FA998'
          }).then(() => {

          });
        }
        if (this.activeIndex === 3) {
          this.$dialog.alert({
            title: '提示',
            message: ' 当前医生无MDT会诊服务',
            confirmButtonText: '返回',
            confirmButtonColor: '#3FA998'
          }).then(() => {

          });
        }
        if (this.activeIndex === 4) {
          this.$dialog.alert({
            title: '提示',
            message: ' 当前医生无手术会诊服务',
            confirmButtonText: '返回',
            confirmButtonColor: '#3FA998'
          }).then(() => {

          });
        }
        if (this.activeIndex === 5) {
          this.$dialog.alert({
            title: '提示',
            message: ' 当前医生无私人医生服务',
            confirmButtonText: '返回',
            confirmButtonColor: '#3FA998'
          }).then(() => {

          });
        }*/
      },
      togx() {
        this.$dialog.alert({
          title: '提示',
          message: '您还不是倍熙私医会员，无法使用此功能',
          confirmButtonText: '返回',
          confirmButtonColor: '#3FA998'
        }).then(() => {

        });
        // let userId = '';
        // let teamId = '';
        // getmodifydz(userId, teamId).then((res) => {
        //
        // })
      },
      getinfo() {
       /* getwxdoctorinfo(this.recordid).then((res) => {
          this.state = res.data.data.isThumbs;
          this.doctorinfo = res.data.data.hjjkHealthTeamVo;
          console.log('docinf', res);
        })*/
        getwxdoctorinfo2(this.recordid).then((res)=>{
          this.state = res.data.data.isThumbs;
          this.doctorinfo = res.data.data.hjjkHealthTeamVo;
          res.data.data.dsList.forEach((ele)=>{
            ele.dssList.forEach((item)=>{
              item.select=false
            })
            this.typeitemcreated.push({
              defaultImgUrl:ele.defaultImgUrl,
              selectImgUrl:ele.selectImgUrl,
              name:ele.hjjkDoctorServiceVo.serviceNm,
              id:ele.hjjkDoctorServiceVo.serviceId,
              introduce:ele.introduce,
              dssList:ele.dssList
            })
          });
            console.log('this.recordidthis.recordid',res.data.data);
          console.log('666666666666666',this.typeitemcreated);
        })
      }
    },
    mounted() {
      this.getinfo();
      if(sessionStorage.getItem('istype')==='slow'){
        this.activeIndex=1;
      }
    }
  }
</script>

<style scoped lang="less">
  .wxdoctorinfo {
    color: #767777;
    font-size: 0.28rem;
    padding-bottom: 2rem;
    background: #F5F7F9;
    height: 100%;

    .filltop {
      height: 0.9rem;
      background: url("../../../assets/imgs/x_filltop.png");
      background-size: 100% 0.9rem;
      font-size: 0.32rem;
      font-weight: bold;
      color: white;
      line-height: 0.9rem;
      text-align: center;
    }
    .d_back{
      height: 1rem;
      background: url("../../../assets/imgs/d_back.png");
      background-size: 100% 1rem;
    }
    .d_btn_back{
      width: 100%;
      height:1.2rem;
      background:white;
      position: fixed;
      bottom: 0;
    }
    .d_btn {
      margin: 0.25rem auto;
      width: 6.6rem;
      height: 0.7rem;
      background: url("../../../assets/imgs/x_jrzx.png") no-repeat;
      background-size: 6.6rem 0.7rem;
    }

    .warp {
      width: 5.13rem;
      height: 4.5rem;
      background: white;
      color: #777777;

      .w_x {
        position: absolute;
        right: 0.3rem;
        top: 0.2rem;
        width: 0.24rem;
        height: 0.24rem;

        img {
          width: 0.24rem;
          height: 0.24rem;
        }
      }

      .w_s {
        margin: 0.2rem auto 0;
        width: 3.34rem;
        height: 0.27rem;
        font-size: 0.28rem;
      }

      .w_m {
        margin: 0.3rem auto;
        width: 1.59rem;
        height: 1.59rem;

        img {
          width: 1.59rem;
          height: 1.59rem;
        }
      }

      .w_title {
        margin: 0.4rem auto 0.3rem;
        width: 1.4rem;
        height: 0.34rem;
        font-size: 0.34rem;
        color: #3FA998;
      }

      .w_content {
        margin: 0 auto;
        width: 4.5rem;
        height: 0.7rem;
        font-size: 0.3rem;
      }
    }

    .typeimg {
      margin-right: 0.2rem;
      width: 1.5rem;
      height: 1rem;

      img {
        margin: 0 auto;
        width: 0.5rem;
        height: 0.5rem;
      }
      .a_text{
        margin-top: 0.1rem;
        text-align: center;
        white-space:nowrap;
      }

      .white_t {
        margin: 0.15rem auto 0;
        width: 0.42rem;
        height: 0.22rem;

        img {
          width: 0.42rem;
          height: 0.22rem;
        }
      }
    }
    .bimg {
      width: 1.2rem;
      height: 0.9rem;

      img {
        margin: 0 auto;
        width: 0.47rem;
        height: 0.47rem;
      }

      .white_t {
        margin: 0.15rem auto 0;
        width: 0.42rem;
        height: 0.22rem;

        img {
          width: 0.42rem;
          height: 0.22rem;
        }
      }
    }
    .cimg{
      width: 1.2rem;
      height: 0.9rem;

      img {
        margin: 0 auto;
        width: 0.43rem;
        height: 0.43rem;
      }

      .white_t {
        margin: 0.15rem auto 0;
        width: 0.42rem;
        height: 0.22rem;

        img {
          width: 0.42rem;
          height: 0.22rem;
        }
      }
    }
    .dimg{
      width: 1.4rem;
      height: 0.9rem;

      img {
        margin: 0 auto;
        width: 0.44rem;
        height: 0.43rem;
      }

      .white_t {
        margin: 0.15rem auto 0;
        width: 0.42rem;
        height: 0.22rem;

        img {
          width: 0.42rem;
          height: 0.22rem;
        }
      }
    }

    .d_top {
      padding-top: 0.3rem;
      margin: -1rem auto 0;
      width: 6.9rem;
      border-radius: 0.16rem;
      height: 1.7rem;
      background: white;
      box-shadow: 0rem 0rem 0.1rem rgba(96, 96, 96, 0.25);

      .d_top_head {
        margin-left: 0.3rem;
        width: 6.3rem;
        height: 1rem;
        display: flex;
        justify-content: space-between;

        .d_top_head_photo {
          width: 1.1rem;
          height: 1.1rem;
          img{
            width: 1.1rem;
            height: 1.1rem;
            border-radius:0.55rem;
          }
          .photo_z {
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
          margin-right: -0.4rem;
          width: 1.25rem;
          height: 0.52rem;
          .d_head_yz {
            width: 1.25rem;
            height: 0.52rem;
            background: url("../../../assets/imgs/x_doctor_axyz.png");
            background-size: 1.25rem 0.52rem;
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
    }

    .d_tip {
      margin: 0.25rem auto;
      width: 6.6rem;
      height: 0.7rem;
      font-size: 0.24rem;
      color: #848484;
      display: flex;
      justify-content: space-between;
      img{
        width: 0.73rem;
        height: 0.58rem;
      }
      .d_line{
        width: 0.03rem;
        height: 0.56rem;
        background:#E2E1E6;
      }
      .d_tip_text{
        margin-top: -0.02rem;
        width: 5.6rem;
        height: 0.58rem;
        line-height: 0.3rem;
      }
    }

    .div_type {
      border-radius: 0.16rem;
      background: #FFFFFF;
      box-shadow: 0rem 0rem 0.1rem rgba(96, 96, 96, 0.25);
      margin: 0.2rem auto;
      width: 6.9rem;
      height: auto;
      padding-bottom: 0.2rem;
      //height: 2.4rem;
      .d_type_line{
        margin: 0.3rem auto;
        width: 6.2rem;
        height: 0.03rem;
        background: #F9F9FB;
      }
      .d_type_tip {
        color: #848484;
        font-size: 0.26rem;
        padding-left: 0.5rem;
        width: 5.7rem;
        height: 0.7rem;
        margin: 0.2rem auto 0;
        //border-bottom: 2px solid #F2F2F2;
        background: url("../../../assets/imgs/x_docinfo_type.png") no-repeat 0 0.02rem;
        background-size: 0.3rem 0.31rem;
      }

      .d_type_price {
        padding-top: 0.3rem;
        width: 7rem;
        height: auto;

        .d_type_p_item {
          height: 0.8rem;
          font-weight: bold;
          display: flex;
          justify-content: flex-start;

          .select {
            padding-top: 0.05rem;
            margin-left: 0.4rem;
            width: 0.35rem;
            height: 0.35rem;

            img {
              width: 0.35rem;
              height: 0.35rem;
            }
          }

          .d_type_p_item_name {
            margin-left: 0.25rem;
            font-size: 0.3rem;
            color: #777777;
          }
          .d_type_p_item_twprice{
            margin-left: 2.2rem;
           .tucishu{
             font-size: 0.28rem;
             font-weight: bold;
             color: #DC5518;
           }
            .tuwenprice{
              font-weight: normal;
              font-size: 0.26rem;
              color: #989898;
            }
          }
          .d_type_p_item_price {
            margin-left: 2.2rem;
            font-size: 0.28rem;
            color: #DC5518;
          }
        }
      }
    }
   .typetop {
     margin-left: 0.23rem;
     padding-top: 0.2rem;
     width: 6.44rem;
     height: 1.2rem;
     display: flex;
     justify-content: flex-start;
     .moveimg{
       margin-top: 0.4rem;
       width: 0.16rem;
       height: 0.3rem;
     }
     .d_typecontent {
       margin: 0 0.25rem;
       width: 5.64rem;
       height: 1.4rem;
       display: flex;
       flex-wrap: nowrap;
       justify-content: flex-start;
       padding: 0;
       overflow: auto;

       .d_type_itemb {
         margin: 0.2rem 0.2rem;
         width: 1.3rem;
         height: 0.9rem;

         img {
           width: 1.3rem;
           height: 0.9rem;
         }
       }

       .d_type_item {
         padding-top: 0.2rem;
        /* min-width: 1.2rem;*/
         width: 1.5rem;
         height: 1rem;
         background: #E8F4F2;
       }

       .d_type_itemh {
         padding-top: 0.2rem;
         width: 1.5rem;
         height: 1rem;
       }
     }
   }
    .d_content {
      padding-bottom: 0.2rem;
      padding-top: 0.3rem;
      margin: 0 auto;
      width: 6.9rem;
      border-radius: 0.16rem;
      height: auto;
      box-shadow: 0rem 0rem 0.1rem rgba(96, 96, 96, 0.25);
      background: #FFFFFF;

      .d_zy {
        margin-left: 0.32rem;
        font-weight: bold;
        padding-left: 0.5rem;
        width: 1.8rem;
        height: 0.35rem;
        background: url("../../../assets/imgs/xdocinfo_jl1.png") no-repeat;
        background-size: 0.34rem 0.35rem;
      }

      .zy_c {
        color: #848484;
        margin-top: 0.2rem;
        margin-left: 0.34rem;
      }

      .d_zhiy {
        margin-top: 0.3rem;
        margin-left: 0.32rem;
        font-weight: bold;
        padding-left: 0.5rem;
        width: 1.8rem;
        height: 0.35rem;
        background: url("../../../assets/imgs/xdocinfo_jl2.png") no-repeat;
        background-size: 0.34rem 0.35rem;
      }

      .zhiy_c {
        color: #848484;
        margin-top: 0.2rem;
        margin-left: 0.34rem;
      }

      .d_zyjl {
        margin-top: 0.3rem;
        margin-left: 0.32rem;
        font-weight: bold;
        padding-left: 0.5rem;
        width: 1.8rem;
        height: 0.33rem;
        background: url("../../../assets/imgs/xdocinfo_jl3.png") no-repeat;
        background-size: 0.3rem 0.33rem;
      }

      .zyjl_c {
        color: #848484;
        margin-top: 0.2rem;
        margin-left: 0.34rem;
        width: 6.3rem;
      }
    }

    .d_gx {
      .d_ungx {
        margin: 0.75rem auto;
        width: 2.21rem;
        height: 0.63rem;

        img {
          width: 2.21rem;
          height: 0.63rem;
        }
      }

      .d_ingx {
        margin: 0.75rem auto;
        width: 2.21rem;
        height: 0.63rem;

        img {
          width: 0.41rem;
          height: 0.35rem;
        }
      }
    }
  }
</style>
