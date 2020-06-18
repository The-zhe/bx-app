<template>
  <div class="wxconsultuser">
    <div class="wxc_top">
     <!-- <div class="top_img"><img :src="zxinfo.imgUrl!=''?zxinfo.imgUrl:doctorImg"></div>-->
      <div class="top_div">
        <div class="top_div_name">
          <div class="top_name">{{zxinfo.name}}</div>
          <div class="top_dept">{{zxinfo.secondDeNm}}</div>
          <div class="top_point"></div>
          <div class="top_titlname">{{zxinfo.workDoctor}}</div>
        </div>
        <div class="top_doc">{{zxinfo.hospitalName}}</div>
      </div>
      <div class="top_right" @click="tozxinfo" v-show="isconsult"><img src="../../../assets/imgs/x_consultzxxq.png"/></div>
    </div>
   <!-- <div class="wxc_tip">
     <img src="../../../assets/imgs/x_consultgth.png"/>
      <div class="tiptext">医生工作繁忙，义诊时间皆为医生业余时间，每次咨询限3次追问，请尽量简单准确描述你的病情</div>
    </div>-->
   <!-- <div class="c_tip">
      <div class="c_top">
        <div class="top_content">
          <img :src="zxinfo.imgUrl!=''?zxinfo.imgUrl:doctorImg">
          <div class="top_div"><span class="top_name">{{zxinfo.name}}</span> <span>{{zxinfo.titleNm}}</span>
            <div class="top_doc">
              <div class="top_hosname">{{zxinfo.hospitalName}}</div>
              <div class="top_secname">{{zxinfo.secondDeNm}}</div>
            </div>
          </div>
          <div class="top_right" @click="tophone"><img src="../../../assets/imgs/xconsultuser1.png"/></div>
        </div>
        <div class="top_zx" v-show="isZxXq" @click="tozxinfo">
          <img src="../../../assets/imgs/xconsultinfo.png"/>
        </div>
        <div class="top_mb" v-show="isMbXq">
          慢病咨询病种&emsp;{{mbname}}
        </div>
      </div>
      <div class="c_tip_text">疫情防控期间，为减缓医院接诊压力，方便患者就 医，提供3次免费咨询服务</div>
    </div>-->
    <div class="consultContent" id="dialogue_box">
      <div v-for="item in messageItems">
        <div v-if="item.userType === 1">
          <div class="consultTime">
            <div class="line"></div>
            <div>{{item.time}}</div>
            <div class="line"></div>
          </div>
          <div class="consultText">
            <div class="yourphoto"><img :src="item.doctorimg!=''?item.doctorImg:doctorImg"/></div>
            <div v-if="item.msgType === 'text'" class="yourdialog">{{ item.msg }}</div>
            <div class="yourdialog" v-else-if="item.msgType === 'img'">
              <img :src="item.msg"/>
            </div>
            <!--           <div class="yourdialog">{{item.msg}}</div>-->
          </div>
        </div>
        <div v-else-if="item.userType === 2">
          <div class="consultTime">
            <div class="line"></div>
            <div>{{item.time}}</div>
            <div class="line"></div>
          </div>
          <div class="consultText">
            <div class="myphoto"><img :src="item.selfimg!=''?item.selfimg:userImg"/></div>
            <div v-if="item.msgType === 'text'" class="mydialog">{{ item.msg }}</div>
            <div class="mydialog" v-else-if="item.msgType === 'img'">
              <viewer>
              <img :src="item.msg"/>
              </viewer>
            </div>
            <!--           <div class="mydialog">{{item.msg}}</div>-->
          </div>
        </div>
      </div>
    </div>
    <div class="wxbottom">
    <div class="dialogBottom">
      <div>剩余追问时间：<span>{{countDownList}}</span> 次数：<span style="color: #6EA890">{{consultnum}}次</span></div>
    </div>
   <!-- <div class="wxtip">医生工作繁忙，可能无法立即回复，请您随时关注信息！</div>-->
    <div class="consultBottom">
      <div class="bottomvideo" @click="toVoice"></div>
      <div class="bottominput">
      <!--  <input v-model="textMsg" placeholder="请输入" autofocus="autofocus"/>-->
        <textarea ref="textarea" v-model="textMsg" :maxlength="keywordsMax"></textarea>
      </div>
      <div class="bottompic">
        <input type="file" accept="image/*" id="imagePicker" ref="photoInput" value @change="onSendImgMsg"/>
      </div>
      <div class="bottomsub" @click="onSendTextMsg"></div>
    </div>
    </div>
   <!-- <div class="c_sub" @click="onSendTextMsg"></div>-->
  </div>
</template>

<script>
  import {getSig, getuserfree, getwxconsulthistoryadd} from '../../../api/index'
  import moment from "moment";
  import {getmorehistory} from "../../../api";
  import {autoTextarea, debounce} from "../../../utils";
  let RTC;
  let stream;
  export default {
    name: "wxconsultuser",
    data() {
      return {
        isconsult:false,  //有没有咨询详情
        doctorImg:require("../../../assets/imgs/x_docimg.png"),
        userImg: require("../../../assets/imgs/manPatient.png"),
        sdkAppId: '1400267551',
        consultnum: 0,
        messageItems: [
         /* {
            msgType:'text',
            msg:'问权限，医生不受限制，回复请尽量问权限，医生不受限制，回复请尽量问权限，医生不受限制，回复请尽量',
            userType:1,
            time:'2020-03-05'

          },{
            msgType:'text',
            msg:'问权限，医生不受限制，回复请尽量问权限，医生不受限制，回复请尽量问权限，医生不受限制，回复请尽量',
            userType:2,
            time:'2020-03-05'
          },{
            msgType:'text',
            msg:'问权限，医生不受限制，回复请尽量问权限，医生不受限制，回复请尽量问权限，医生不受限制，回复请尽量',
            userType:1,
            time:'2020-03-05'
          },{
            msgType:'text',
            msg:'问权限，医生不受限制，回复请尽量问权限，医生不受限制，回复请尽量问权限，医生不受限制，回复请尽量',
            userType:2,
            time:'2020-03-05'
          }*/
        ],     //咨询对话
        identifier: '4874370812023808',   //用户id
        userSig: '',
        textMsg: '',  //文本内容
        oddtime: '',
        zxinfo: '',

        countDownList: '24时00分00秒',
        actEndTime: '2020-02-20 18:50:00',
        istype:'',   //区分新冠 60000.130.110  慢病60000.130.120
        isZxXq:true,   //是否是咨询详情  默认是
        isMbXq:false,   //是否是慢病咨询  默认否
        consultdoctorId:sessionStorage.getItem('consultdoctorId'), //慢病查看医生直接点箭头进来的 和医生详情选择过进来的
        mbname:'',//慢病病种的名字
        hour:'24',
        min:'00',
        sec:'00',
        statCd:'1',
        talkType:'60000.130.110',
        timer:null,
        datedate:'',

        keywordsMax: 128,
        keywords: '',
        jumpPath:'',
        houtaidate:'',  //后台传过来的date
        freetalktype:sessionStorage.getItem('freetalktype'),// from  to  接口传talktype  1疫情 2慢病
        serviceId:0,
      }
    },
    methods: {
      //给安卓调的 收到自定义消息就跳到接听页面
      togetwebPhone(){
        this.$bridge.registerHandler("towebPhone", (data, responseCallback) => {
          this.$router.push({path:'/wxconsultphone'});
        })
      },
      //给安卓调的 获取安卓给我的语音转文字字符串
     getvoice() {
        this.$bridge.registerHandler("nativeVoice", (data, responseCallback) => {
          this.textMsg=data;
        })
      },
      //调安卓的收到自定义消息弹框
      toshowMessage(){
        this.$bridge.callHandler("showMessage", "", () => {
        });
      },
      //调安卓的语音转文字
      toVoice(){
        this.$bridge.callHandler("getSpeech", "", () => {
        });
      },
      tophone() {
        this.$dialog.alert({
          title: '提示',
          message: '您还不是倍熙私医会员，无法使用此功能',
          confirmButtonText: '返回',
          confirmButtonColor: '#3FA998'
        }).then(() => {

        });
      },
      timeFormat(param) {
        return param < 10 ? '0' + param : param;
      },
      countDown() {
        this.timer = setInterval(() => {
          // 获取当前时间，同时得到活动结束时间数组
          let newTime = new Date().getTime();
          // 对结束时间进行处理渲染到页面
          let endTime = new Date(this.datedate).getTime();
          let obj = null;
          // 如果活动未结束，对时间进行处理
          if (endTime - newTime > 0) {
            let time = (endTime - newTime) / 1000;
            // 获取天、时、分、秒
            let day = parseInt(time / (60 * 60 * 24));
            let hou = parseInt(time % (60 * 60 * 24) / 3600);
            let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
            let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
            obj = {
              day: this.timeFormat(day),
              hou: this.timeFormat(hou),
              min: this.timeFormat(min),
              sec: this.timeFormat(sec)
            };
          } else { // 活动已结束，全部设置为'00'
            obj = {
              day: '00',
              hou: '00',
              min: '00',
              sec: '00'
            };
            clearInterval(this.timer);
          }
          this.hour=obj.hou;
          this.min=obj.min;
          this.sec=obj.sec;
          this.countDownList = obj.hou + '时' + obj.min + '分' + obj.sec + '秒';
        }, 1000);
      },
      tozxinfo() {
        this.$router_({path: '/formConsultDetail'})
      },
      getinfo() {
        if(this.$route.query.type){
          this.consultdoctorId=this.$route.query.id;
           if(this.$route.query.conId){
             this.isZxXq=true;
           }else{
             this.isZxXq=false;
           }
           if(this.$route.query.type==='mb'){
             this.isZxXq=false;
             this.isMbXq=true;
             this.statCd='2';
             this.talkType='60000.130.120';
             this.serviceId=4667450476631079;
           }else if(this.$route.query.type==='xg'){
             this.isZxXq=true;
             this.serviceId=4667450476631078;
           }
        }
        /*if(this.$route.params.hjjkMsgVo){   //如果是从消息中心进来的
          this.istype=this.$route.params.hjjkMsgVo.catCd;
          this.consultdoctorId=this.$route.params.fromId;
          if(this.istype==='60000.130.110'){
            this.isZxXq=true;
          }else {
            this.isZxXq=false;
            this.isMbXq=true;
            this.mbname=this.$route.params.illName;// 消息中心进来的
            this.statCd='2';
            this.talkType='60000.130.120';
          }
        }*/else{   //慢病咨询进来的
          this.consultdoctorId=sessionStorage.getItem('consultdoctorId');
          this.isZxXq=false;
          this.isMbXq=true;
          this.mbname=sessionStorage.getItem('mbname');//
          this.statCd='2';
          this.talkType='60000.130.120';
          this.serviceId=4667450476631079;
        }
        let fromId =Number(localStorage.getItem('userId'))
        let toId = Number(this.consultdoctorId);
        getuserfree(4874370812023808,4816104082297856,this.freetalktype).then((res) => {
        /*getuserfree(fromId, toId,this.freetalktype).then((res) => {*/
          this.zxinfo = res.data.data;
          if(this.zxinfo.times>0){
            this.consultnum = this.zxinfo.times;
          }
          if(this.zxinfo.conId){
            sessionStorage.setItem('consultId',this.zxinfo.conId);
            this.isconsult=true;
          }
          console.log('usercccccc', res.data.data);
          let date = res.data.data.date;
          this.houtaidate=res.data.data.date;
          if(date){
              date = date.replace(/-/g, '/')
            let t = new Date(date).getTime() + 24 * 60 * 60 * 1000;   //24小时 * 60分钟 * 60秒 * 1000
              this.datedate = moment(t).format('YYYY/MM/DD HH:mm:ss')
            this.$nextTick(()=>{
              this.countDown();
            });
          }else {

          }
         // this.getHistoryMessage();
        });

      },
      //取当前时间
      getTime() {
        let timedata = new Date();
        let timeyear = timedata.getFullYear();
        let timemonth = timedata.getMonth() + 1;
        let timeday = timedata.getDate();
        let timehour = timedata.getHours();
        let timemin = timedata.getMinutes();
        let timeseconds = timedata.getSeconds();
        this.showtime = timeyear + '-' + timemonth + '-' + timeday + ' ' + timehour + ':' + timemin;
      },
      //登录腾讯im获取秘钥
      getUserSig() {
        getSig(this.identifier).then(res => {
          this.userSig = res.data.data;
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
      //历史数据只能是被发的一方，得取两次
      getHistoryMessage() {
        let that = this;
        let historyList = [];
        let conversationID = 'C2C' + this.consultdoctorId; //要聊天的医生id
        let selfconversationID='C2C'+localStorage.getItem('userId');
        console.log('进入历史数据啦', conversationID);
        /*let promise = tim.getMessageList({conversationID: selfconversationID, count: 15});
        promise.then(function (imResponse) {
          const messageList = imResponse.data.messageList; // 消息列表。
          const isCompleted = imResponse.data.isCompleted; // 表示是否已经拉完所有消息。
          console.log('history45', imResponse,messageList, isCompleted);
          messageList.forEach((message) => {
            if (message.type === "TIMTextElem") {
              historyList.push({
                msgType: "text",
                msg: message.payload.text,
                time: that.getLocalTime(message.time),
                userType: 2,
                selfimg: that.zxinfo.selefImgUrl
              })
            } else {
              historyList.push({
                msgType: "img",
                msg: message.payload.imageInfoArray[0].imageUrl,
                time: that.getLocalTime(message.time),
                userType: 2,
                selfimg: that.zxinfo.selefImgUrl
              })
            }
          });
        });*/
        let promise1 = tim.getMessageList({conversationID: conversationID, count: 15});//"C2C3664372564677633"
        promise1.then(function (imResponse) {
          const messageList1 = imResponse.data.messageList; // 消息列表。
          const isCompleted1 = imResponse.data.isCompleted; // 表示是否已经拉完所有消息。
          console.log('history33', messageList1, isCompleted1);
          messageList1.forEach((message) => {
            if (message.type === "TIMTextElem"&&message.flow==='in') {
              historyList.push({
                msgType: "text",
                msg: message.payload.text,
                time: that.getLocalTime(message.time),
                userType: 1,
                doctorimg: that.zxinfo.imgUrl
              })
            } else if(message.type === "TIMImageElem"&&message.flow==='in'){
              historyList.push({
                msgType: "img",
                msg: message.payload.imageInfoArray[0].imageUrl,
                time: that.getLocalTime(message.time),
                userType: 1,
                doctorimg: that.zxinfo.imgUrl
              })
            }else if(message.type === "TIMTextElem"&&message.flow==='out'){
              historyList.push({
                msgType: "text",
                msg: message.payload.text,
                time: that.getLocalTime(message.time),
                userType: 2,
                selfimg: that.zxinfo.selefImgUrl
              })
            }else if(message.type === "TIMImageElem"&&message.flow==='out'){
              historyList.push({
                msgType: "img",
                msg: message.payload.imageInfoArray[0].imageUrl,
                time: that.getLocalTime(message.time),
                userType: 2,
                selfimg: that.zxinfo.selefImgUrl
              })
            }
          });
          console.log('历史记录list', historyList);
          that.messageItems = historyList;
          that.scrollBottom();
          console.log('messss', that.messageItems);
        });
        let teamId=this.consultdoctorId+'';
        let userId=localStorage.getItem('userId');
        getmorehistory(teamId,userId,this.talkType).then((res)=>{
          console.log('mmmm666666',res.data.list);
          /*that.messageItems.push({
            msgType: "img",
            msg: message.payload.imageInfoArray[0].imageUrl,
            time: that.getLocalTime(message.time),
            userType: 2,
            selfimg: that.zxinfo.selefImgUrl
          });*/
        })
      },
      //时间戳转日期格式
      getLocalTime(nS) {
        let time = moment(nS * 1000).format()
        let d = new Date(time);
        let batchDate = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日'
        let batchTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
        return batchTime
        //return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
      },

      onReadyStateUpdate() {
        this.getHistoryMessage();
      },
      //收到信息事件
      onMessageReceived(event) {
        let presentTime = new Date();
        presentTime.setMinutes(presentTime.getMinutes() - 1);
        let presentString = Date.parse(presentTime) / 1000;
        console.log("onMessage", event);
        let length = event.data.length;
        let res = event.data[0];
        let historyTime = res.time;
        let type = res.type;
        this.count = this.count + 1;
        let count = this.count;
        console.log("Messageres", res.from, count);
        //push 接收到的msg
        if (presentString < historyTime) {
          if (this.countall) {
            console.log("已经接听过了");
          } else {
            console.log("没有接听过了");
            this.doctorIdaccept = res.from;
            this.addMsg(type, res);
          }
        }
      },
      //收到信息回调
      addMsg(type, res) {
        this.getTime();
        if (type === TIM.TYPES.MSG_TEXT) {
          if(!this.houtaidate&&!this.datedate){
            let t = new Date().getTime() + 24 * 60 * 60 * 1000;   //24小时 * 60分钟 * 60秒 * 1000
            this.datedate = moment(t).format('YYYY/MM/DD HH:mm:ss')
            this.$nextTick(()=>{
              this.countDown();
            });
          }
          this.messageItems.push({
            msg: res.payload.text,
            name: res.from,
            tx: res,
            userType: 1,
            msgType: "text",
            time: this.showtime,
            doctorimg: this.zxinfo.imgUrl
          });
        } else if (type === TIM.TYPES.MSG_IMAGE) {
          if(!this.houtaidate&&!this.datedate){
            let t = new Date().getTime() + 24 * 60 * 60 * 1000;   //24小时 * 60分钟 * 60秒 * 1000
            this.datedate = moment(t).format('YYYY/MM/DD HH:mm:ss')
            this.$nextTick(()=>{
              this.countDown();
            });
          }
          this.messageItems.push({
            msg: res.payload.imageInfoArray[0].imageUrl,
            name: res.from,
            tx: res,
            userType: 1,
            msgType: "img",
            time: this.showtime,
            doctorimg: this.zxinfo.imgUrl
          });
        }else if (type === TIM.TYPES.MSG_CUSTOM) {
          let dataJson = JSON.parse(res.payload.extension);
          console.log("自定义消息", dataJson);
          let roomId = dataJson.roomId;
          this.roomId = roomId;
          this.jumpPath=roomId;
          sessionStorage.setItem("jumpPath", dataJson.roomId);
          console.log("receive", this.roomId);
          this.toshowMessage();
        }
      },
      //发送文本消息
      onSendTextMsg() {
        this.getTime();
        let text = this.textMsg;
        let topeople='4816104082297856';
       // let topeople = this.consultdoctorId+'';//'4745039825753088';
        this.consultnum=10;
        if(this.consultnum<=0) {
          this.$dialog.alert({
            title: '提示',
            message: '您的追问次数已用完',
            confirmButtonText: '返回',
            confirmButtonColor: '#3FA998'
          }).then(() => {
          });
        }
        else if(this.hour==='00'&&this.min==='00'&&this.sec==='00'){
          this.$dialog.alert({
            title: '提示',
            message: '时间结束',
            confirmButtonText: '返回',
            confirmButtonColor: '#3FA998'
          }).then(() => {
          });
        }else{
          let message = tim.createTextMessage({
            to: topeople,  //topeople
            conversationType: TIM.TYPES.CONV_C2C,
            payload: {
              text: text
            }
          });
          // 2. 发送消息
          let promise = tim.sendMessage(message);
          promise
            .then(imResponse => {
              console.log('imResponse', imResponse);
              this.textMsg = "";
              // 发送成功
              this.scrollBottom();
              //添加历史数据并减少一次咨询次数
              let hjjkHistoryRecordRo = {
                consultId: Number(sessionStorage.getItem('consultId')),   //im取
                fromId: Number(localStorage.getItem('userId')),
                isDoctor: 0,
                msg: imResponse.data.message.payload.text,
                msgType: 'text',
                sendDate: this.getLocalTime(imResponse.data.message.time),
                statCd: this.statCd,    //  1 疫情 2慢病
                toId: Number(this.consultdoctorId),   //医生的id
                type: '0',   // 用户传 0  医生传 2  字符串
                talkType:this.talkType,  // 慢病60000.130.120  疫情60000.130.110
                illType: sessionStorage.getItem('mbnameid'),  //illTypeid
                serviceId:this.serviceId,//服务id
                serviceSpecId:0  // 服务规格id
              };
              getwxconsulthistoryadd(hjjkHistoryRecordRo).then((res) => {
                this.consultnum = res.data.data;
                console.log('hissssss', res.data.data);
              })
              this.messageItems.push({
                msg: imResponse.data.message.payload.text,
                name: imResponse.data.message.from,
                tx: "../../../assets/imgs/specialist.png",
                userType: 2,
                msgType: "text",
                time: this.showtime,
                selfimg: this.zxinfo.selefImgUrl
              });
            })
            .catch(function (imError) {
              // 发送失败
              console.log(imError);
              //console.warn('sendMessage error:', imError);
            });

        }
      },
      //发送图片消息
      onSendImgMsg() {
        this.getTime();
        let topeople='4816104082297856';
        //let topeople = this.consultdoctorId+'';//'4745039825753088';
        let message = tim.createImageMessage({
          to: topeople,  //topeople
          conversationType: TIM.TYPES.CONV_C2C,
          payload: {
            file: document.getElementById("imagePicker")
          },
          onProgress: function (event) {
            console.log("file uploading:", event);
          }
        });
        // 2. 发送消息
        let promise = tim.sendMessage(message);
        promise
          .then(imResponse => {
            // 发送成功
            this.scrollBottom();
            let hjjkHistoryRecordRo = {
              consultId: Number(sessionStorage.getItem('consultId')),
              fromId: Number(localStorage.getItem('userId')),
              isDoctor: 0,
              msg: imResponse.data.message.payload.imageInfoArray[0].imageUrl,
              msgType: 'img',
              sendDate: this.getLocalTime(imResponse.data.message.time),
              statCd: this.statCd,  //0表示一对一消息 2表示疫情肺炎消息 3 慢病咨询消息）
              toId: Number(this.consultdoctorId),
              type: '0',  //用户传 0  医生传 2  字符串
              talkType:this.talkType,  // 慢病60000.130.120  疫情60000.130.110
              illType: sessionStorage.getItem('mbnameid'),  //illTypeid
              serviceId:this.serviceId,//服务id
              serviceSpecId:0  // 服务规格id
            };
            getwxconsulthistoryadd(hjjkHistoryRecordRo).then(res => {
              console.log('hjjkHistoryRecordRo', res);
            });
            console.log(imResponse.data.message.payload);
            if (message.type === TIM.TYPES.MSG_IMAGE) {
              this.messageItems.push({
                msg:
                imResponse.data.message.payload.imageInfoArray[0].imageUrl,
                name: imResponse.data.message.from,
                tx: imResponse.data,
                userType: 2,
                msgType: "img",
                time: this.showtime,
                selfimg: this.zxinfo.selefImgUrl
              });
            }
          })
          .catch(function (imError) {
            // 发送失败
            console.warn("sendMessage error:", imError);
          });
      },
      //距离24小时

      scrollBottom() {
        this.$nextTick(function () {
          let div = document.getElementById('dialogue_box');
          div.scrollTop = div.scrollHeight;
        })
      },

     //自定义消息
      onSendCustomMsg() {
        let strings = this.roomId;
        // 2. 创建消息实例，接口返回的实例可以上屏
        let topeople;
        let message = tim.createCustomMessage({
          to:"4813480599409664",  //topeople
          conversationType: TIM.TYPES.CONV_C2C,
          payload: {
            data: "dice", // 用于标识该消息是骰子类型消息
            description: strings, // 获取骰子点数
            extension: JSON.stringify({
              roomId: strings,
            })
          }
        });
        // 3. 发送消息
        let promise = tim.sendMessage(message);
        console.log('fasongde ',message);
        promise
          .then(imResponse => {
            this.mySend=setTimeout(e => {
              this.$confirm("患者目前不在，是否继续等待", "温馨提示", {
                confirmButtonText: '退出',
                cancelButtonText: '继续等待',
              }).then(() => {
                this.WebSocketClose();
              }).catch(() => {
                this.myTime=setTimeout(e=>{
                  this.WebSocketClose();
                  this.$alert("患者接听超时，视频断开","温馨提示",{
                    confirmButtonText: '确定',
                  });
                },120000);//120000
              });
            }, 120000);  //120000
          })
          .catch(function(imError) {
            // 发送失败
            console.warn("sendMessage error:", imError);
          });
      },

      clearKeywords () {
        this.keywords = '';
        this.list = [];
        let textarea = this.$refs.textarea;
        let height = 40;

        //this.$refs.list.style.height = `calc(100% - height)`;
        textarea.focus();
      },
    /*  searchChange: debounce(function () {
        let trim = this.keywords.trim();
        const params = {
          keywords: this.keywords
        }
      })*/
    },
    mounted() {
      console.log('this.$route.query',this.$route.query);
      this.getUserSig();
      this.getinfo();
      this.tim.on(TIM.EVENT.SDK_READY, this.onReadyStateUpdate);
      this.tim.on(TIM.EVENT.MESSAGE_RECEIVED, this.onMessageReceived);
      this.getvoice();
      this.togetwebPhone();
      this.$nextTick(() => {
        let textarea = this.$refs.textarea;
        textarea.focus();
        let prevHeight = 65;
        textarea && autoTextarea(textarea, 5, 60, (height) => {
        });
      })
    }
  }
</script>
<style>
  @import url('../../../assets/less/vantstyle/dialog.css');
  @import url('../../../assets/less/vantstyle/button.css');
</style>
<style scoped lang="less">
  .wxconsultuser {
    font-size: 0.28rem;
    color: #595757;
    height: 100%;
    background: #F7F6FD;
    .wxc_top{
      padding-top: 0.3rem;
      height: 0.9rem;
      background: url("../../../assets/imgs/x_zxltback.png");
      background-size: 100% 1.2rem;
      display: flex;
      justify-content: space-between;
      .top_img{
        margin-left: 0.25rem;
        width: 0.76rem;
        height: 0.76rem;
        border-radius: 0.38rem;
        img{
          border-radius: 0.38rem;
          width: 0.76rem;
          height: 0.76rem;
        }
      }
      .top_right{
        margin-right: 0.2rem;
        width: 0.97rem;
        height: 0.72rem;
        img{
          width: 0.97rem;
          height: 0.72rem;
        }
      }
      .top_div {
        margin-left: 0.3rem;
        width: 5rem;
        height: 0.72rem;
        color: #FFFFFF;
        .top_div_name{
          width: 5.9rem;
          height: 0.3rem;
          display: flex;
          justify-content: flex-start;
          .top_name {
            margin-top: -0.05rem;
            font-size: 0.28rem;
            font-weight: bold;
          }
          .top_dept{
            margin-left: 0.3rem;
           font-size: 0.24rem;
          }
          .top_point{
            margin-left: 0.1rem;
            margin-top: 0.15rem;
            width: 0.05rem;
            height: 0.05rem;
            border-radius: 0.025rem;
            background: white;
          }
          .top_titlname{
            margin-left: 0.1rem;
            font-size: 0.24rem;
          }
        }

      }
      .top_doc{
        margin-top: 0.05rem;
        width: 5rem;
        height: 0.3rem;
        color:#FFFFFF;
        font-size: 0.24rem;
      }
    }
    .wxc_tip{
      padding-top: 0.2rem;
      height: 0.84rem;
      background: #FFFFFF;
      display: flex;
      justify-content: flex-start;
      border-bottom: 1px solid #f0f1f2;
      img{
        margin-left: 0.36rem;
        width: 0.29rem;
        height: 0.29rem;
      }
      .tiptext{
        margin-top: -0.05rem;
        margin-left: 0.13rem;
        font-size: 0.26rem;
        color: #EB6100;
        width: 6.3rem;
        height: 0.62rem;
      }
    }
    .wxbottom{
      width: 100%;
      height: auto;
      position: absolute;
      bottom: 0;
    }
    .c_top {
      padding-top: 0.3rem;
      font-size: 0.28rem;
      color: #595757;
      height: 1.52rem;
      border-radius: 0 0 0.2rem 0.2rem;
      border: 0;
      background: white;
      //box-shadow: 0rem 0.2rem 0.2rem -0.2rem rgba(96, 96, 96, 0.24);
      .top_content {
        margin: 0 auto;
        width: 7rem;
        height: 0.9rem;
        display: flex;
        justify-content: space-between;

        img {
         border-radius: 0.45rem;
          width: 0.9rem;
          height: 0.9rem;
        }

        .top_div {
          width: 3.5rem;
          height: 0.78rem;
          border-right: 0.02rem solid #F6F3F7;
        }
        .top_doc{
          width: 3.2rem;
          height: 0.3rem;
          display: flex;
          justify-content: space-between;
           .top_hosname{
            width: 2rem;
             height: 0.5rem;
             overflow: hidden;
             text-overflow:ellipsis;
             white-space: nowrap;
           }
          .top_secname{
            width: 1.1rem;
            height: 0.5rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
         }
        .top_name {
          font-size: 0.3rem;
          font-weight: bold;
        }

        .top_right {
          margin-top: 0.2rem;
          width: 2rem;
          height: 0.7rem;

          img {
            border-radius: 0;
            width: 1.74rem;
            height: 0.49rem;
          }
        }
      }

      .top_mb {
        font-size: 0.3rem;
        color: #56B2AD;
        width: 5rem;
        height: 0.3rem;
        margin-left: 0.3rem;
        margin-top: 0.1rem;
      }

      .top_zx {
        color: #EB6100;
        font-size: 0.28rem;
        margin-left: 0.27rem;
        width: 7rem;
        height: 0.5rem;
        display: flex;
        justify-content: space-between;

        img {
          margin-top: 0.15rem;
          width: 1.91rem;
          height: 0.34rem;
        }

        .top_zx_num {
          margin-top: 0.1rem;
          width: 2.6rem;
          height: 0.4rem;
          text-align: right;
        }

        .top_zx_time {
          margin-top: 0.1rem;
          width: 2.2rem;
          height: 0.4rem;
        }
      }
    }

    .c_tip {
      height: 2.8rem;
      background: #F9E5D5;
      color: #EB6100;

      .c_tip_text {
        margin-left: 0.44rem;
        margin-top: 0.1rem;
        width: 6.5rem;
        height: 0.65rem;
      }
    }

    .consultContent {
      width: 100%;
      //height: 70%;
      position: absolute;
      top: 1.5rem;
      bottom: 2.1rem;
      overflow-y: auto;
      z-index: 1;
      .consultTime {
        margin: 0.5rem auto 0;
        color: #cecdcb;
        font-size: 0.26rem;
        width: 5.5rem;
        height: 0.35rem;
        display: flex;
        justify-content: space-around;

        .line {
          margin-top: 0.15rem;
          width: 1.5rem;
          height: 0.02rem;
          background: #f4f4f4;
        }
      }

      .consultText {
        width: 7rem;

        .mydialog {
          max-width: 4.5rem;
          margin-bottom: 0.7rem;
          margin-right: 0.3rem;
          float: right;
          display: inline-block;
          padding: 0.15rem 0.15rem;
          margin-top: 0.4rem;
          border-radius:0.1rem 0 0.1rem 0.1rem;
          font-size: 0.28rem;
          color: white;
          background: #35ada4;

          img {
            width: 4rem;
            height: 4rem;
          }
        }

        .myphoto {
          margin-top: 0.2rem;
          float: right;
          width: 1rem;
          height: 1rem;
          border-radius: 0.5rem;

          img {
            width: 1rem;
            height: 1rem;
            border-radius: 0.5rem;
          }
        }

        .yourphoto {
          margin-top: 0.2rem;
          margin-left: 0.5rem;
          float: left;
          width: 1rem;
          height: 1rem;
          border-radius: 0.5rem;
          //background: #f6a540;

          img {
            width: 1rem;
            height: 1rem;
            border-radius: 0.5rem;
          }
        }

        .yourdialog {
          margin-left: 0.3rem;
          max-width: 4.5rem;
          margin-bottom: 0.7rem;
          float: left;
          display: inline-block;
          padding: 0.15rem 0.15rem;
          margin-top: 0.4rem;
          border-radius: 0 0.1rem 0.1rem 0.1rem;
          font-size: 0.28rem;
          color: #606060;
          background: white;

          img {
            width: 4rem;
            height: 4rem;
          }
        }
      }
    }

    .dialogBottom {
      padding-top: 0.3rem;
      text-align: center;
      width: 100%;
      height: 0.4rem;
      color: #999999;
      font-size: 0.26rem;
     // position: absolute;
      //bottom: 2rem;

      span {
        color: #EB6100;
      }
    }

    .wxtip {
      padding-top: 0.2rem;
      text-align: center;
      color: #56B2AD;
      width: 100%;
      height: 0.4rem;
      //position: absolute;
      //bottom: 0.6rem;
      background: #EFEEF1;
    }

    .consultBottom {
      width: 100%;
      /* height: 1rem; */
      background: #f7f7f7;
      //position: absolute;
     // bottom: 0;
      display: flex;
      justify-content: space-around;

      .bottomvideo {
        margin-top: 0.3rem;
        width: 0.39rem;
        height: 0.45rem;
        background: url("../../../assets/imgs/consult5_x.png");
        background-size: 0.39rem 0.45rem;
      }

      .bottominput {
        margin-top: 0.2rem;
        width: 4.15rem;
         //height: 1rem;
        input {
          color: #777777;
          width: 4rem;
          height: 0.7rem;
          border-radius: 0.1rem;
          padding-left: 0.2rem;
        }
        textarea{
          font-size: 0.3rem;
          width: 4rem;
          height: 0.7rem;
        }
      }

      .bottompic {
        margin-top: 0.3rem;
        width: 0.45rem;
        height: 0.38rem;
        background: url("../../../assets/imgs/consult6_x.png");
        background-size: 0.45rem 0.38rem;
        input {
          width: 0.45rem;
          height: 0.38rem;
        }
        #imagePicker {
          overflow: hidden;
          //pointer-events:none;
          opacity: 0;
          width: 0.45rem;
          height: 0.38rem;
        }

      }


      .bottomsub {
        margin-top: 0.2rem;
        width: 1.22rem;
        height: 0.56rem;
        background: url("../../../assets/imgs/x_consultfs.png") no-repeat;
        background-size: 1.22rem 0.56rem;
      }
    }
    .c_sub{
      z-index:999;
      position: absolute;
      bottom: 0.2rem;
      right: 0.2rem;
      width: 0.5rem;
      height: 0.5rem;
      background: url("../../../assets/imgs/consult7_x.png") no-repeat;
      background-size: 0.4rem 0.34rem;
    }

  }
</style>
