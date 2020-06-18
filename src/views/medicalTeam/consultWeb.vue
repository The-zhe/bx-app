<!--xtt-->
<template>
  <div class="consultWeb">
    <div class="consultTop">
      <div class="left">
        <div class="consultPeople">
          <div class="c_img">
          <img :src="consultimg">
          </div>
          <div class="name">{{consultname}}
            <div class="jibie">{{consultrank}}</div>
          </div>
          <div class="select" @click="toSelect"></div>
        </div>
        <div v-if="isselect" class="consultPeopleList">
          <div v-for="(item,index) in consultPeopleList" :key="index" class="onselect" @click="toChange(item)">
            <div class="c_img" v-show="item.catCd==='1'"><img :src="item.imgUrl?item.imgUrl:nurseImg"></div>
            <div class="c_img" v-show="item.catCd==='2'"><img :src="item.imgUrl?item.imgUrl:stewardImg"></div>
            <div class="c_img" v-show="item.catCd==='0'"><img :src="item.imgUrl?item.imgUrl:doctorImg"></div>
            <div class="name">{{item.name}}
              <div class="jibie">{{item.workDoctor}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="dialog"></div>
        <div class="phone" @click="toDial"></div>
        <div class="video" @click="toVideo"></div>
      </div>
    </div>
    <div class="consultContent" id="dialogue_box">
     <div v-for="(item,index) in messageItems" :key="index">
       <div v-if="item.userType === 1">
         <div class="consultTime"><div class="line"></div><div>{{item.time}}</div><div class="line"></div></div>
         <div class="consultText">
           <div class="yourphoto"><img :src="consultimg"/></div>
           <div v-if="item.msgType === 'text'" class="yourdialog">{{ item.msg }}</div>
           <div class="yourdialog" v-else-if="item.msgType === 'img'">
               <img :src="item.msg"/>
           </div>
<!--           <div class="yourdialog">{{item.msg}}</div>-->
         </div>
       </div>
       <div v-else-if="item.userType === 2">
        <div class="consultTime"><div class="line"></div><div>{{item.time}}</div><div class="line"></div></div>
         <div class="consultText">
           <div class="myphoto"><img :src="memberImg"/></div>
           <div v-if="item.msgType === 'text'" class="mydialog">{{ item.msg }}</div>
           <div class="mydialog" v-else-if="item.msgType === 'img'">
               <img :src="item.msg"/>
           </div>
<!--           <div class="mydialog">{{item.msg}}</div>-->
         </div>
       </div>
     </div>
    </div>
    <div class="dialogBottom"><div  v-show="iscurrent">当前咨询图文次数无限制</div></div> <!-- ：{{consultnum}} -->
    <div class="consultBottom">
      <div class="bottomvideo"></div>
      <div class="bottominput"><input v-model="textMsg" placeholder="请输入" @focus="myFunction" style="font-size:0.3rem"/></div>
      <div class="bottompic" @click="selectpic">
        <input type="file" accept="image/*" id="imagePicker" ref="photoInput" value @change="onSendImgMsg"/>
      </div>
      <div class="bottomsub" @click="onSendTextMsg"></div>
    </div>
    <van-action-sheet
      v-model="showsheet"
      :actions="actions"
      cancel-text="取消"
      @cancel="onCancel"
      @select="onselect"
    />
  </div>
</template>

<script>
  import {getSig,getMedicalTeamData,getMedicalTeamCount,getConsultCount,getVideoCount,getConsultReduce,getSaveHistory} from "../../api/index"
  import moment from "moment"
  export default {
    name: "consultWeb",
    data() {
      return {
        doctorImg:require("../../assets/imgs/img_yhtd_doctor.png"),
        nurseImg:require("../../assets/imgs/img_yhtd_nurse.png"),
        stewardImg:require("../../assets/imgs/img_yhtd_steware.png"),
        memberImg:require("../../assets/imgs/member_head.png"),
        userSig:'',
        iscurrent:true,
        showsheet:false,
        actions: [
          { name: '从手机相册选择' },
          { name: '拍照' },
        ],
        showtime: '',//当前时间
        textMsg: '',  //文本内容
        consultname: '华佗',
        consultrank: '主治医生',
        consultimg:require("../../assets/imgs/img_yhtd_doctor.png"),
        phonenum: 1,  //电话次数
        videonum: 1,  //视频次数
        consultPeople: this.$route.query.id,  //咨询对象id
        type: this.$route.query.type,   //咨询对象类型   1是医生 2管家 3护士
        identifier:sessionStorage.getItem('nativeMemberId') , //4707081046479873  '4535481258038273'  sessionStorage.getItem('nativeMemberId')
        sdkAppId: '1400267551',
        doctorIdaccept: "", //pad端发起视频 接收的doctorid
        messageItems: [],     //咨询对话
        show: true,
        isselect: false,      //下拉框是否显示
        testlist: [{name: '李颖', jibie: '一级营养师'}, {name: '王超', jibie: '一级营养师'}, {name: '陈海燕', jibie: '二级营养师'}],
        consultPeopleList:[],
        consultnum: 1, //图文小次数
        isCountMin:false,
        historyList:[],
        strDate:'',
        imagetextBig:0,  //图文大次数
        phoneBig:0,   //语音大次数
        videoBig:0,  //视频大次数
        flag:''
        // memberId:sessionStorage.getItem('nativeMemberId');
      }
    },
    watch:{
   /*   flag(newVal,oldVal){
          if(newVal.length===3){
            this.getMedicalTeamDataList()
          }
      }*/
    },
    methods: {
      myFunction(){
        console.log('233');
      },
      scrollBottom(){
      this.$nextTick(function() {
        let div = document.getElementById('dialogue_box');
        div.scrollTop = div.scrollHeight;
      })
    },
      //视频/语音/图文(大)次数  对应type是2/1/0
      getConsultPeopleCount(type){
        let memberId=sessionStorage.getItem('nativeMemberId');//'4535481258038273'
        let teamId=this.consultPeople;
        getMedicalTeamCount(memberId,teamId,type).then(res=>{
          if(type===0){
            //this.flag+='1';
            this.imagetextBig=res.data.data;
          }else if(type===1){
            this.phoneBig=res.data.data;
          }else  if(type===2){
            this.videoBig=res.data.data;
          }
           console.log('图文大次',res.data.data);
        });
      },
      //当前咨询对象图文小次数 语音，视频消耗次数
      getImageTextCount(type){
        let memberId=sessionStorage.getItem('nativeMemberId');//'4535481258038273'
        let teamId=this.consultPeople;
        getConsultCount(memberId,teamId,type).then(res=>{
          if(type===0){
            //  this.consultnum=res.data.data.smallTimes;
          }else if(type===1){

          }else if(type===2){

          }
        });
      },
      getMedicalTeamDataList(){
        let memberId=sessionStorage.getItem('nativeMemberId');//'' sessionStorage.getItem('nativeMemberId')
        console.log('图文大次此次次次',this.imagetextBig);
          this.$dialog.confirm({
            title: '套餐信息确认',
            message: '图文：无限制'+ '  '  + '语音：' + this.phoneBig + '  '  + '视频：' + this.videoBig, //this.imagetextBig
            confirmButtonText:'立即咨询',
            confirmButtonColor:'#3FA998'
          }).then(() => {
            this.getImageTextCount(0);
          }).catch(() => {
            sessionStorage['routerFlag']--;
            this.$router.push({path:'/medicalteam'});

          });
        getMedicalTeamData(memberId).then(res=>{
          console.log('medicalconsult',res.data.data);
          res.data.data.forEach((element)=>{
            if(element.id===this.consultPeople){
              this.consultname=element.name;
              this.consultrank=element.workDoctor;
              this.consultimg=element.imgUrl;
              if(!this.consultimg){
                if(element.catCd==='0'){
                  this.consultimg=require("../../assets/imgs/img_yhtd_doctor.png");
                }else if(element.catCd==='1'){
                  this.consultimg=require("../../assets/imgs/img_yhtd_nurse.png");
                }else if(element.catCd==='2'){
                  this.consultimg=require("../../assets/imgs/img_yhtd_steware.png");
                }
              }
              if(element.catCd==='2'){
                this.iscurrent=false;
              }else {
                this.iscurrent=true;
              }
            }
            this.consultPeopleList.push(element);
          });
          console.log('cccc',this.consultPeopleList);
        });
      },
      //下拉选择
      toSelect() {
        this.isselect = !this.isselect;
        console.log('111', this.consultPeople, this.type);
      },
      //切换咨询对象
      toChange(data) {
        console.log('change',data);
        this.consultname = data.name;
        this.consultrank = data.workDoctor;
        this.consultimg=data.imgUrl;
        this.consultPeople=data.id;
        if(data.catCd==='0'){
          this.type=1
          this.iscurrent=true;
        }else if(data.catCd==='1'){
          this.type=3
          this.iscurrent=true;
        }else if(data.catCd==='2'){
          this.iscurrent=false;
        }
        this.isselect = false;
        this.getImageTextCount(0);
        this.getHistoryMessage();
      },
      //拨号
      toDial() {
        if(this.type===2){

        }else {
          let memberId=sessionStorage.getItem('nativeMemberId');//  sessionStorage.getItem('nativeMemberId')
          getMedicalTeamCount(memberId, this.consultPeople,1).then(res => {
            this.phonenum = res.data.data;
            if(this.phonenum<1){
              this.$dialog.confirm({
                title: '提醒',
                message: '没有次数啦，要购买了'+'\n'+
                       '您剩余次数:' + 0,
                confirmButtonText:'立即购买',
                confirmButtonColor:'#3FA998'
              }).then(() => {
                this.$router_({path:'/testChart'});
              }).catch(() => {
                console.log('999');
              })
            }else {
              this.$dialog.confirm({
                title: '电话咨询确认',
                message: '电话咨询有限时间为30分钟，每次' + '\n' +
                  '拨号消耗一次电话咨询次数，若电' + '\n' +
                  '话未接通，不消耗次数，请稍后再' + '\n' +
                  '拨。' + '\n' +
                  '（手机号码由第三方进行隐私加密,\n' +
                  '防止双方隐私泄露。）\n' +
                  '您剩余次数:' + this.phonenum
              }).then(() => {
                this.tophonecall(this.type);
                 //this.phoneCall(this.consultPeople,'d',4535481258038273)
              }).catch(() => {
                console.log('999');
              })
            }
          });
        }
      },
      //视频
      toVideo() {
        if(this.type===2){

        }else {
          let memberId=sessionStorage.getItem('nativeMemberId');//  sessionStorage.getItem('nativeMemberId');
          getMedicalTeamCount(memberId, this.consultPeople,2).then(res => {
            this.videonum = res.data.data;
            if(this.videonum<1){
              this.$dialog.confirm({
                title: '提醒',
                message: '没有次数啦，要购买了'+'\n'+
                  '您剩余次数:' + 0,
                confirmButtonText:'立即购买',
                confirmButtonColor:'#3FA998'
              }).then(() => {
                this.$router_({path:'/testChart'});
              }).catch(() => {
                console.log('999');
              })
            }else {
              this.$dialog.confirm({
                title: '视频咨询确认',
                message:
                  '视频咨询有限时间为30分钟，每次' + '\n' +
                  '视频消耗一次视频咨询次数，若视' + '\n' +
                  '频未接通，不消耗次数，请稍后发' + '\n' +
                  '起。' + '\n' +
                  '您剩余次数：' + this.videonum

              }).then(() => {
                console.log('要跟医生通视频了',this.consultPeople);
                this.tovideocall(this.type);
                //this.videoCall(this.consultPeople,'d',4535481258038273);
              }).catch(() => {
                console.log('999');
              })
            }

          });
        }
      },
      tovideocall(type){
        let msg={
          id:this.consultPeople,
          type:type,
          memberId:sessionStorage.getItem('nativeMemberId')
        }
        this.$bridge.callHandler("videoCall", msg, () => {
        });
      },
      //安卓调js  d医生 n护士  id：1是医生id
      /*videoCall(vid,type,memberId){
        document.location = "js://webview?videoCall&id="+vid+"type="+type+"memberId"+memberId;
      },*/
      tophonecall(type){
        let msg={
          id:this.consultPeople,
          type:type,
          memberId:sessionStorage.getItem('nativeMemberId')
        }
        //let msg='id:'+this.consultPeople+','+'type:'+type+','+'memberId:'+sessionStorage.getItem('nativeMemberId');
        this.$bridge.callHandler("phoneCall", msg, () => {
        });
      },
      //安卓调js  d医生 n护士  id：1是医生id
     /* phoneCall(vid,type,memberId){
        document.location = "js://webview?phoneCall&id="+vid+"type="+type+"memberId"+memberId;
      },*/
      endVideo(vid,type){
        //vid 医生或者护士id type 医生d还是护士n
      },
      //取当前时间
      getTime() {
        let timedata = new Date();
        let timeyear=timedata.getFullYear();
        let timemonth = timedata.getMonth() + 1;
        let timeday = timedata.getDate();
        let timehour = timedata.getHours();
        let timemin = timedata.getMinutes();
        let timeseconds = timedata.getSeconds();
        this.showtime = timeyear+'-'+timemonth + '-' + timeday + ' ' + timehour + ':' + timemin;
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
      //历史数据只能是被发的一方，得取两次
      getHistoryMessage(){
        let that=this;
        let historyList=[];
        let conversationID='C2C'+this.consultPeople;
        console.log('进入历史数据啦',conversationID);
        let promise = tim.getMessageList({conversationID: "C2C4707081046479873", count: 15});
        promise.then(function(imResponse) {
          const messageList = imResponse.data.messageList; // 消息列表。
          const isCompleted = imResponse.data.isCompleted; // 表示是否已经拉完所有消息。
          console.log('history45',messageList,isCompleted);
        });
        let promise1 = tim.getMessageList({conversationID:conversationID , count: 15});//"C2C3664372564677633"
        promise1.then(function(imResponse) {
          const messageList1 = imResponse.data.messageList; // 消息列表。
          const isCompleted1 = imResponse.data.isCompleted; // 表示是否已经拉完所有消息。
          console.log('history33',messageList1,isCompleted1);
          messageList1.forEach((message)=>{
            if(message.type==="TIMTextElem"){
              historyList.push({
                msgType:"text",
                msg:message.payload.text,
                time:that.getLocalTime(message.time),
                userType:2
              })
            }else {
              historyList.push({
                msgType:"img",
                msg:message.payload.imageInfoArray[0].imageUrl,
                time:that.getLocalTime(message.time),
                userType:2
              })
            }

          });
          console.log('历史记录list',historyList);
          that.messageItems=historyList;
          that.scrollBottom();
          console.log('messss',that.messageItems);
          console.log('history33处理',messageList1[0]._elements[0].content.text);
        });

      },
      //时间戳转日期格式
      getLocalTime(nS) {
        let time = moment(nS*1000).format()
        let d = new Date(time);
        let batchDate = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() +'日'
        let batchTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() ;
        return batchTime
      //return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
     },

      //登录腾讯im获取秘钥
      getUserSig(){
        getSig(this.identifier).then(res=>{
          this.userSig=res.data.data;
          this.getIMBegin();
        });
      },
      onReadyStateUpdate() {
        this.getHistoryMessage();
      },
      //收到信息事件
      onMessageReceived(event) {
        let presentTime = new Date();
        presentTime.setMinutes(presentTime.getMinutes() - 1);
        let presentString = Date.parse(presentTime) / 1000;
        console.log('presentString', presentString);
        console.log("onMessage", event);
        let length = event.data.length;
        console.log("length", length);
        let res = event.data[0];
        let historyTime = res.time;
        let type = res.elements[0].type;
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
            sessionStorage.setItem("doctorIdaccept", res.from);
            this.addMsg(type, res);
          }
        }
      },
      //收到信息回调
      addMsg(type, res) {
        if (type === TIM.TYPES.MSG_TEXT) {
          this.messageItems.push({
            msg: res.elements[0].content.text,
            name: res.elements[0].content.from,
            tx: res,
            userType: 1,
            msgType: "text",
            time:this.showtime,
          });
        } else if (type === TIM.TYPES.MSG_IMAGE) {
          this.messageItems.push({
            msg: res.elements[0].content.imageInfoArray[0].imageUrl,
            name: res.elements[0].from,
            tx: res,
            userType: 1,
            msgType: "img",
            time:this.showtime,
          });
        }
      },
      //发送文本消息
      onSendTextMsg() {
        console.log('idddd',this.consultPeople);
        this.getTime();
        let text = this.textMsg;
        //let topeople='4707081046479876';
        let topeople=this.consultPeople+'';
        console.log('信息',this.showtime,text,topeople);
        // if(this.consultnum<0||this.consultnum===0) {
        //   if (this.imagetextBig<0||this.imagetextBig === 0) {
        //     this.$dialog.confirm({
        //       title: '提醒',
        //       message: '图文次数都用完了！',
        //       confirmButtonText:'立即购买',
        //       confirmButtonColor:'#3FA998'
        //     }).then(() => {
        //       this.$router_({path:'/testChart'});
        //     }).catch(() => {

        //       console.log('999');
        //     })
        //   } else {
        //   this.$dialog.confirm({
        //     title: '提醒',
        //     message: '进入下一个10次了哦'
        //   }).then(() => {
        //     for(let i=0;i<2;i++){
        //       this.reduceCount();
        //     }
        //   }).catch(() => {
        //     this.reduceCount();
        //     console.log('999');
        //   })
        // }
        // }else {
          let message = tim.createTextMessage({
            to:topeople,  //topeople
            conversationType: TIM.TYPES.CONV_C2C,
            payload: {
              text: text
            }
          });
          // 2. 发送消息
          let promise = tim.sendMessage(message);
          promise
            .then(imResponse => {
              console.log('imResponse',imResponse);
              this.textMsg = "";
              // 发送成功
              this.reduceCount();
              this.scrollBottom();
              let hjjkHistoryRecordRo= {
                bigTimes: this.imagetextBig+'',
                catCd: '0',
                fromId: parseInt(imResponse.data.message.from),
                msg: imResponse.data.message.payload.text,
                msgType: 'text',
                sendDate: this.getLocalTime(imResponse.data.message.time),
                toId: parseInt(imResponse.data.message.to)
              };
              getSaveHistory(hjjkHistoryRecordRo).then(res=>{
                console.log('hjjkHistoryRecordRo',res);
              });
              this.messageItems.push({
                msg: imResponse.data.message.payload.text,
                name: imResponse.data.message.from,
                tx: "../../../assets/imgs/specialist.png",
                userType: 2,
                msgType: "text",
                time:this.showtime,
              });
            })
            .catch(function(imError) {
              // 发送失败
              console.log(imError);
              //console.warn('sendMessage error:', imError);
            });
        // }

      },
      //发送图片消息
      onSendImgMsg() {
        console.log('调用onSendImgMsg方法了',document.getElementById("imagePicker").value);
        this.getTime();
        let topeople=this.consultPeople+'';

        if(document.getElementById("imagePicker").value == null || document.getElementById("imagePicker").value == ""){
          console.log('文件为空');
        }else {
          console.log('文件不为空',document.getElementById("imagePicker").value);
          // if (this.consultnum < 0 || this.consultnum === 0) {
            // if (this.imagetextBig < 0 || this.imagetextBig === 0) {
            //   this.$dialog.confirm({
            //     title: '提醒',
            //     message: '图文次数都用完了！',
            //     confirmButtonText: '立即购买',
            //     confirmButtonColor: '#3FA998'
            //   }).then(() => {
            //     this.$router_({path: '/testChart'});
            //   }).catch(() => {

            //     console.log('999');
            //   })
            // } else {
            //   this.$dialog.confirm({
            //     title: '提醒',
            //     message: '进入下一个10次了哦'
            //   }).then(() => {
            //     for (let i = 0; i < 2; i++) {
            //       this.reduceCount();
            //     }

            //   }).catch(() => {
            //     this.reduceCount();
            //     console.log('999');
            //   })
            // }
          // } else {
            let message = tim.createImageMessage({
              to: topeople,  //topeople 消息接收方
              conversationType: TIM.TYPES.CONV_C2C, //回话类型
              payload: {
                file: document.getElementById("imagePicker") //消息容器
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
                this.reduceCount();
                let hjjkHistoryRecordRo = {
                  bigTimes: this.imagetextBig + '',
                  catCd: '0',
                  fromId: parseInt(imResponse.data.message.from),
                  msg: imResponse.data.message.payload.imageInfoArray[0].imageUrl,
                  msgType: 'img',
                  sendDate: this.getLocalTime(imResponse.data.message.time),
                  toId: parseInt(imResponse.data.message.to)
                };
                getSaveHistory(hjjkHistoryRecordRo).then(res => {
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
                  });
                }
              })
              .catch(function (imError) {
                // 发送失败
                console.warn("sendMessage error:", imError);
              });
          // }
        }
      },
      photo(){
        console.log('js调安卓');
        this.$refs.photoInput.click();
        this.$bridge.callHandler("openAlbum", "", () => {
        });
        //document.location = "js://webview?pic";
      },
      photograph(){
        this.$refs.photoInput.click();
        this.$bridge.callHandler("takePhoto", "", () => {
        });
        //document.location="js://webview?photograph";
      },
      getPhotoUrl(strUrl){

      },
      selectpic(){
        this.showsheet=true;
      },
      onCancel() {
        this.showsheet = false;
      },
      onselect(item,index){
        if(index===0){
          this.photo();
        }
        if(index===1){
          this.photograph();
        }
      },
      //减少视频次数
      reduceVideoCount(){
        let memberId=sessionStorage.getItem('nativeMemberId');
        let catCd;
        if(this.type===1){
          catCd='80060.104';
        }
        if(this.type===3){
          catCd='80060.107';
        }
        getVideoCount(memberId,catCd).then(res=>{
          console.log('closevideo',res.data);
        });
      },
      //减少小图文次数
      reduceCount(){
        let memberId=sessionStorage.getItem('nativeMemberId');//'4535481258038273' sessionStorage.getItem('nativeMemberId')
        getConsultReduce(memberId,this.consultPeople).then(res=> {
          console.log('rerrqqqq',res.data.data);  //bigTimes
          // this.consultnum=res.data.data.smallTimes;
          this.imagetextBig=res.data.data.bigTimes;
        });
      },
   },
    mounted() {

      window.closeVideo=this.closeVideo;
      window.closePhone=this.closePhone;
      Promise.all([getMedicalTeamCount(sessionStorage.getItem('nativeMemberId'),this.consultPeople,0),getMedicalTeamCount(sessionStorage.getItem('nativeMemberId'),this.consultPeople,1),getMedicalTeamCount(sessionStorage.getItem('nativeMemberId'),this.consultPeople,2)]).then((res)=>{
        this.imagetextBig=res[0].data.data;
        this.phoneBig=res[1].data.data;
        this.videoBig=res[2].data.data;
        this.getMedicalTeamDataList();
      });
      // this.getConsultPeopleCount(0);
      // this.getConsultPeopleCount(1);
      // this.getConsultPeopleCount(2);

      // this.getMedicalTeamDataList();

      this.getUserSig();
      // this.getIMBegin();
      this.tim.on(TIM.EVENT.SDK_READY, this.onReadyStateUpdate);
      this.tim.on(TIM.EVENT.MESSAGE_RECEIVED, this.onMessageReceived);
      window.onSendImgMsg=this.onSendImgMsg
      window.endVideo=this.endVideo
      this.getHistoryMessage();
      // this.$nextTick(() => {
      //   this.$refs.main.scrollTop = this.$refs.content.scrollHeight;
      // })
    },
  }
</script>

<style scoped lang="less">
  .consultWeb {
    width: 100%;
    background: white;
    .consultTop {
      height: 1.2rem;
      display: flex;
      .left {
        position: relative;
        width: 50%;  //3.75rem
        .consultPeopleList {
          width: 3.75rem;
          height: auto;
          max-height: 3.2rem;
          overflow-y: auto;
          position: absolute;
          background: white;
          box-shadow: 0.05rem 0.05rem 0.1rem #b8d4d3;
          border-radius: 0 0 0.15rem 0.15rem;
          z-index: 2;

          .onselect {
            width: 3.75rem;
            display: flex;
            justify-content: space-around;
            .c_img{
              width: 1rem;
              img {
                margin-top: 0.15rem;
                width: 0.9rem;
                height: 0.9rem;
                border-radius: 0.45rem;
              }
            }
            .name {
              width: 1.8rem;
              margin-top: 0.1rem;
              color: #595757;
              font-size: 0.3rem;
              font-weight: bold;
              .jibie {
                margin-top: 0.15rem;
                margin-left: -0.05rem;
                width: auto;
                height: 0.38rem;
                //border-radius: 0.25rem;
               // border: 0.01rem solid #F09365;
                color: #F09365;
                font-size: 0.26rem;
               // text-align: center;
              }
            }
          }
          .select {
            margin-top: 0.5rem;
            width: 0.22rem;
            height: 0.19rem;
            background: url("../../assets/imgs/consult1_x.png") no-repeat;
            background-size: 0.21rem 0.19rem;
          }
        }
      }

      .right {
        width: 50%;  //3.75rem
        display: flex;
        justify-content: space-around;

        .dialog {
          margin-top: 0.4rem;
          width: 0.47rem;
          height: 0.45rem;
          background: url("../../assets/imgs/consult2_x.png");
          background-size: 0.47rem 0.45rem;
        }

        .phone {
          margin-top: 0.4rem;
          width: 0.43rem;
          height: 0.43rem;
          background: url("../../assets/imgs/consult3_x.png");
          background-size: 0.43rem 0.43rem;
        }

        .video {
          margin-top: 0.4rem;
          width: 0.39rem;
          height: 0.49rem;
          background: url("../../assets/imgs/consult4_x.png");
          background-size: 0.39rem 0.49rem;
        }
      }

      .consultPeople {
        height: 1.2rem;
        background: white;
        box-shadow: 0.05rem 0.05rem 0.1rem #b8d4d3;
        border-radius: 0 0 0.15rem 0.15rem;
        display: flex;
        justify-content: space-around;
        .c_img{
          width: 1rem;
          img {
            margin-top: 0.15rem;
            width: 0.9rem;
            height: 0.9rem;
            border-radius: 0.45rem;
          }
        }
        .name {
          width: 1.8rem;
          margin-top: 0.1rem;
          color: #595757;
          font-size: 0.3rem;
          font-weight: bold;
          .jibie {
            margin-top: 0.15rem;
            margin-left: -0.05rem;
            width: auto;  //136
            height: 0.38rem;
            //border-radius: 0.25rem;
            //border: 0.01rem solid #F09365;
            color: #F09365;
            font-size: 0.26rem;
            //text-align: center;
          }
        }

        .select {
          margin-top: 0.5rem;
          width: 0.22rem;
          height: 0.19rem;
          background: url("../../assets/imgs/consult1_x.png") no-repeat;
          background-size: 0.21rem 0.19rem;
        }
      }

    }
    .consultContent{
      width: 100%;
      //height: 70%;
      position: absolute;
      top:2.8rem;
      bottom: 1.4rem;
      overflow-y: auto;
      z-index:1;
      .consultTime{
        margin: 0.5rem auto 0;
        color: #cecdcb;
        font-size: 0.26rem;
        width: 5.5rem;
        height: 0.35rem;
        display: flex;
        justify-content: space-around;
        .line{
          margin-top: 0.15rem;
          width: 1.5rem;
          height: 0.02rem;
          background: #f4f4f4;
        }
      }
      .consultText{
        width:7rem;
        .mydialog{
          max-width: 4.5rem;
          margin-bottom: 0.7rem;
          margin-right: 0.3rem;
          float: right;
          display: inline-block;
          padding: 0.15rem 0.15rem;
          margin-top: 0.4rem;
          border-radius: 0.2rem;
          font-size: 0.28rem;
          color: #777777;
          background: #f4f4f4;
          img{
            width: 4rem;
            height: 4rem;
          }
        }
        .myphoto{
          margin-top: 0.2rem;
          float: right;
          width: 1rem;
          height: 1rem;
          border-radius: 0.5rem;
          img{
            width: 1rem;
            height: 1rem;
            border-radius: 0.5rem;
          }
        }
        .yourphoto{
          margin-top: 0.2rem;
          margin-left: 0.5rem;
          float: left;
          width: 1rem;
          height: 1rem;
          border-radius: 0.5rem;
          background: #f6a540;
          img{
            width: 1rem;
            height: 1rem;
            border-radius: 0.5rem;
          }
        }
        .yourdialog{
          margin-left: 0.3rem;
          max-width: 4.5rem;
          margin-bottom: 0.7rem;
          float: left;
          display: inline-block;
          padding: 0.15rem 0.15rem;
          margin-top: 0.4rem;
          border-radius: 0.2rem;
          font-size: 0.28rem;
          color: white;
          background: #94C5C5;
          img{
            width: 4rem;
            height: 4rem;
          }
        }
      }
    }
    .dialogBottom {
      padding-top: 0.3rem;
     /* left: 50%;
      margin-left: -1.5rem;*/
      text-align: center;
      /*width: 3rem;
      height: 0.2rem;*/
      width: 100%;
      height: 0.4rem;
      color: #999999;
      font-size: 0.26rem;
      position: absolute;
      bottom: 1rem;
    }

    .consultBottom {
      width: 100%;
      height: 1rem;
      background: #F4F4F4;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-around;

      .bottomvideo {
        margin-top: 0.3rem;
        width: 0.39rem;
        height: 0.45rem;
        background: url("../../assets/imgs/consult5_x.png");
        background-size: 0.39rem 0.45rem;
      }

      .bottominput {
        // margin-top: 0.25rem;
        width: 5.15rem;
        height: 0.5rem;

        input {
          color: #777777;
          width: 5rem;
          height: 0.5rem;
          border-radius: 0.1rem;
          padding-left: 0.2rem;
        }
      }

      .bottompic {
        margin-top: 0.3rem;
        width: 0.45rem;
        height: 0.38rem;
        background: url("../../assets/imgs/consult6_x.png");
        background-size: 0.45rem 0.38rem;
        #imagePicker {
          pointer-events:none;
          opacity: 0;
          width: 0.45rem;
          height: 0.38rem;
        }
      }


      .bottomsub {
        margin-top: 0.3rem;
        width: 0.4rem;
        height: 0.34rem;
        background: url("../../assets/imgs/consult7_x.png");
        background-size: 0.4rem 0.34rem;
      }
    }
  }
</style>
<style>
  @import url('../../assets/less/vantstyle/dialog.css');
  @import url('../../assets/less/vantstyle/button.css');
</style>
