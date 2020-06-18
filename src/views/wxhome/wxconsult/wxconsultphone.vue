<template>
  <div class="wxconsultphone">
    <div class="phoneimg">
      <img :src="manImg"/>
    </div>
    <div class="phonename">
       {{phonename}}
    </div>
    <div class="phoneing" v-show="!isphone">
      等待接听...
    </div>
    <div>
      <video autoplay="autoplay" class="phonestyle" id="onLinebigb"></video>
      <video class="phonestyle" autoplay="autoplay" id="localbigb"></video>
    </div>
    <div class="phonebtn">
      <!--<div class="phonetime">00:00</div>-->
     <div class="btntip" v-show="!isphone">取消</div>
      <div class="btntip" v-show="isphone" @click="WebSocketClose">挂断</div>
    </div>
  </div>
</template>

<script>
  let RTC;
  let stream;
  export default {
    name: "wxconsultphone",
    data() {
      return {
        isphone:false,
        manImg: require("../../../assets/imgs/manPatient.png"),
        womanImg: require("../../../assets/imgs/womenPatient.png"),
        jumpPath:sessionStorage.getItem('jumpPath'),
        roomId:this.$route.query.roomId,
        userSig:'',
        sdkAppId: '1400267551',
        userId:'',
        phonename:sessionStorage.getItem('phonename'),
      }
    },
    methods:{
      //挂断退出视频
      WebSocketClose() {
        RTC.quit(
          res => {
            //退出成功
            //刷新
            console.log('rtc退出');
            //console.log('退出成功')
          },
          res => {
            //退出失败
          }
        );

      },

      //创建room
      getROOM(roomId) {
        console.log('进入房间');
        RTC.enterRoom(
          {
            roomid: roomId, // [必选]房间号，可以由您的服务指定
            role: "role" // 画面设定的配置集名称 （见控制台 - 画面设定 )
          },
          res => {
            this.getLocationvideo();
            // 成功
            console.log(res + "创建成功");
          },
          function(fail) {
            // 失败
            console.log(fail);
          }
        );
      },

      //初始化rtc
      initRTC() {
        this.getRTC();
      },
      //rtc方法
      getRTC() {
        RTC = new WebRTCAPI(
          {
            sdkAppId: this.sdkAppId, // [必选]开通实时音视频服务创建应用后分配的 sdkappid
            userId: this.userId, // [必选]用户 ID，可以由您的服务指定
            userSig: this.userSig // [必选]身份签名，需要从自行搭建的签名服务获取
          },
          res => {
            if(this.jumpPath){
              console.log(typeof (this.jumpPath));
              this.getROOM(this.jumpPath); //this.jumpPath
              console.log('jumpPath',this.jumpPath);
            }else {
              this.getROOM(this.roomId);//this.roomId
              console.log('getRTC', this.roomId);
            }
          },
          err => {
            console.log(err);
          }
        );
        //远端更新视频
        RTC.on("onRemoteStreamUpdate", this.onRemoteStreamUpdate);
        // 本地流新增
        RTC.on("onLocalStreamAdd", this.onLocalStreamAdd);
        // 远端流断开
        RTC.on("onRemoteStreamRemove", this.onRemoteStreamRemove);
        //websocket 断开通知
        RTC.on( "onWebSocketNotify" , this.onWebSocketClose);
      },

      //更新视频
      onRemoteStreamUpdate(info) {
        this.isphone=true;
        if (info.stream && info.stream.active === true) {
          let id = "onLinebigb";
          let video = document.getElementById(id);
          video.srcObject = info.stream;
          video.autoplay = true;
          console.log("进入if", info);
        } else {
        }
      },
      //获取本地视频
      getLocationvideo() {
        RTC.getLocalStream(
          {
            video: false, // 是否采集视频，默认true
            audio: true, // 是否采集音频，默认true
          },
          info => {
            stream = info.stream;
            this.pushVideo();
          },
          error => {
            console.error("getLocationvideo", error);
          }
        );
      },
      //推流
      pushVideo() {
        RTC.startRTC(
          {
            role: "role", // 画面设定的配置集名称 （见控制台 - 画面设定 )
            stream: stream // 通过采集本地音视频流获取到的本地流对象
          },
          res => {
            RTC.on("onLocalStreamAdd", this.onLocalStreamAdd);
          },
          err => {
            // 失败
            console.log("pushVideo", err);
          }
        );
      },
      //本地视频显示
      onLocalStreamAdd(info) {
        //this.isPhone=true;
        if (info.stream && info.stream.active === true) {
          let id ="localbigb";
          let video = document.getElementById(id);
          video.srcObject = info.stream;
          //video.muted = true;
          video.autoplay = true;
          video.playsinline = false;
        }
      },
      //断开
      onRemoteStreamRemove(info) {
        console.log("断开", info);
        //tim.setMessageRead({conversationID: 'C2Cexample'});
        this.$alert("本次视频会诊已结束，确定返回远程门诊", "操作提示", {
          confirmButtonText: "确定",
          callback: action => {
            this.WebSocketClose();
          }
        });
        let videoNode = document.getElementById("onLinebigb");
        if (videoNode) {
          videoNode.srcObject = null;
          document.getElementById("onLinebigb").parentElement.removeChild(videoNode);
        }
      },
    },
    mounted() {
      if(Boolean(localStorage.getItem('isDoctor'))){
        this.userId=localStorage.getItem('doctorId');
        this.userSig=sessionStorage.getItem('doctorSig');
      }else {
        this.userId=localStorage.getItem('userId');
        this.userSig=sessionStorage.getItem('userSig');
      }
      this.initRTC();
    }
  }
</script>

<style scoped lang="less">
  .wxconsultphone {
    width: 100%;
    height: 100%;
    background: url("../../../assets/imgs/x_inphone.png");
    background-size: 100% 100%;
    .phonestyle{
      width:2rem;
      height: 2rem;
    }
    .phoneimg {
      margin: 0 auto;
      padding-top: 1.5rem;
      width: 2rem;
      height: 2rem;
      img{
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
      }
    }
    .phonename{
      font-size: 0.36rem;
      color: #FFFFFF;
      width: 5rem;
      height: 0.5rem;
      margin: 0.4rem auto;
      text-align: center;
    }
    .phoneing{
      font-size: 0.3rem;
      color: #FFFFFF;
      width: 2rem;
      height: 0.4rem;
      text-align: center;
      margin: 0 auto;
    }
    .phonetime{
      margin: 0 auto;
      font-size: 0.3rem;
      color: #FFFFFF;
      width: 1rem;
      height: 0.3rem;
      text-align: center;
    }
    .phonebtn{
      bottom: 15%;
      left: 50%;
      margin-left: -0.65rem;
      position: absolute;
      width: 1.3rem;
      height: 2.5rem;
      background: url("../../../assets/imgs/x_cancelphone.png") no-repeat 0 0.6rem;
      background-size: 1.3rem 1.3rem;
      .btntip{
        text-align: center;
        width: 1rem;
        height: 0.3rem;
        margin: 1.8rem auto 0;
        color: white;
        font-size: 0.3rem;

      }
    }
  }
</style>
