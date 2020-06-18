<template>
  <div class="fillillness">
    <div class="filltop">
      新冠肺炎免费咨询
    </div>
    <div class="fillprogress">
      <div class="fill_b"></div>
      <div class="fill_text">
        <div>基本信息</div>
        <div class="fill_text_span">症状病情</div>
        <div class="fill_text_span">就诊资料</div>
        <div class="fill_text_span">近期行程</div>
      </div>
    </div>
    <div class="fillill_tip">
      <div class="fillill_tip_one">医生均为工作间隙义务咨询，为方便准确快速了解您的病情，请尽量详细描述，医生有空时会尽快回复!</div>
      <div style="color: #F4793B;margin-left: 0.3rem">*若病情严重，尽快至发热门诊就诊。</div>
    </div>
    <div class="fillradius">
    <div class="fillsymptom">
      <div class="fillsymptom_top">*1.勾选你的症状<div class="top_hot" @click="linkDownload('https://mp.weixin.qq.com/s/9aZAniafsCClig9mvgTnMw')"></div></div>
      <div class="select_hot"><img :src="ish==='true'?select1:select2" @click="selectsymptom('ish','symOptionsFr','symOptionsFrTime')"><div class="select_name" :style="ish==='true'?'font-weight:bold':''">发热</div></div>
      <div class="hotshow" v-show="ish==='true'">
        <div class="hotmax" @click="gethot">
          <div class="hottiwen">体温</div>
          <div class="hotnum">
                 <div class="h_hotnum">{{hotnum}}</div>
        </div><div class="h_danw" v-show="isdw">℃</div></div>
        <van-popup
          v-model="hotshow"
          position="bottom"
        ><van-picker class="my-picker" cancel-button-text="未测量" show-toolbar title="请选择" :columns="columns" @cancel="cancelhot" @confirm="confirmhot"/>
        </van-popup>
        <div class="hottime"><div class="hotstart">开始时间</div><div class="fillinput" @click="hdate" :style="starttime===''||starttime===null?'color:#BCBCBC':'color:#777777'">{{starttime===''||starttime===null?'请输入时间':starttime}}</div></div>
        <van-popup
          v-model="datehshow"
          position="bottom"
        ><van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirmh"
          @cancel="cancelh"
        />
        </van-popup>
      </div>
      <div class="select_hot"><img :src="isc==='true'?select1:select2" @click="selectsymptom('isc','symOptionsKs','symOptionsKsTime')"><div class="select_name" :style="isc==='true'?'font-weight:bold':''">咳嗽</div></div>
      <div v-show="isc==='true'">
      <div class="hottime"><div class="hotstart">开始时间</div><div class="fillinput" @click="cdate" :style="starttimec===''||starttimec===null?'color:#BCBCBC':'color:#777777'">{{starttimec===''||starttimec===null?'请输入时间':starttimec}}</div></div>
        <van-popup
          v-model="datecshow"
          position="bottom"
        ><van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirmc"
          @cancel="cancelh"
        />
        </van-popup>
      </div>
        <div class="select_hot"><img :src="isx==='true'?select1:select2" @click="selectsymptom('isx','symOptionsXmqj','symOptionsXmqjTime')"><div class="select_name" :style="isx==='true'?'font-weight:bold':''">胸闷、心悸</div></div>
      <div v-show="isx==='true'">
        <div class="hottime"><div class="hotstart">开始时间</div><div class="fillinput" @click="xdate" :style="starttimex===''||starttimex===null?'color:#BCBCBC':'color:#777777'">{{starttimex===''||starttimex===null?'请输入时间':starttimex}}</div></div>
        <van-popup
          v-model="datexshow"
          position="bottom"
        ><van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirmx"
          @cancel="cancelh"
        />
        </van-popup>
      </div>
      <div class="select_hot"><img :src="ise==='true'?select1:select2" @click="selectsymptom('ise','symOptionsFlst','symOptionsFlstTime')"><div class="select_name" :style="ise==='true'?'font-weight:bold':''">乏力、肌肉酸痛</div></div>
      <div v-show="ise==='true'">
        <div class="hottime"><div class="hotstart">开始时间</div><div class="fillinput" @click="edate" :style="starttimee===''||starttimee===null?'color:#BCBCBC':'color:#777777'">{{starttimee===''||starttimee===null?'请输入时间':starttimee}}</div></div>
        <van-popup
          v-model="dateeshow"
          position="bottom"
        ><van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirme"
          @cancel="cancelh"
        />
        </van-popup>
      </div>
      <div class="select_hot"><img :src="isf==='true'?select1:select2" @click="selectsymptom('isf','symOptionsFx','symOptionsFxTime')"><div class="select_name" :style="isf==='true'?'font-weight:bold':''">腹泻</div></div>
      <div v-show="isf==='true'">
        <div class="hottime"><div class="hotstart">开始时间</div><div class="fillinput" @click="fdate" :style="starttimef===''||starttimef===null?'color:#BCBCBC':'color:#777777'">{{starttimef===''||starttimef===null?'请输入时间':starttimef}}</div></div>
        <van-popup
          v-model="datefshow"
          position="bottom"
        ><van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirmf"
          @cancel="cancelh"
        />
        </van-popup>
      </div>
      <div class="select_hot"><img :src="iso==='true'?select1:select2" @click="selectsymptom('iso','symOptionsExot','symOptionsExotTime')"><div class="select_name" :style="iso==='true'?'font-weight:bold':''">恶心、呕吐</div></div>
      <div v-show="iso==='true'">
        <div class="hottime"><div class="hotstart">开始时间</div><div class="fillinput" @click="odate" :style="starttimeo===''||starttimeo===null?'color:#BCBCBC':'color:#777777'">{{starttimeo===''||starttimeo===null?'请输入时间':starttimeo}}</div></div>
        <!--:style="{ height: '30%' }"-->
        <van-popup
          v-model="dateoshow"
          position="bottom"
        ><van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirmo"
          @cancel="cancelh"
        />
        </van-popup>
      </div>
      </div>
      <div class="fill_line"></div>
    <div class="filldesc">
      <div class="filltitle">*2.描述发病过程</div>
      <div class="filltext"><textarea :placeholder="ptip1" v-model="descinfo" @focus="tofocus" @blur="toblur"></textarea></div>
    </div>
      <div class="fill_line"></div>
    <div class="fillhis">
      <div class="filltitle">3.填写其他病史</div>
      <div class="filltext"><textarea :placeholder="ptip2" v-model="otherinfo" @focus="tofocus1" @blur="toblur1"></textarea></div>
    </div>
    </div>
    <div class="fillbtnback">
    <div class="fillbtn" v-show="hideshow">
      <div class="fillzx" @click="toahead"></div>
      <div class="fillnext" @click="tonext"></div>
    </div>
    </div>
  </div>
</template>

<script>
  import filltop from './filltop'
  import moment from 'moment'
  import Toast from "vant/es/toast";
    export default {
      name: "fillillness",
      components:{ filltop },
      data(){
        return{
          docmHeight: document.documentElement.clientHeight ||document.body.clientHeight,
          showHeight: document.documentElement.clientHeight ||document.body.clientHeight,
          hideshow:true,  //显示或者隐藏footer
          ptip1:"请详细描述你的发病过程，症状情况",
          ptip2:'请输入您的慢性病史，或近期患的疾病',
          isdw:true,
          columns:[
            {
              values:['','','',''],
            },
            // 第一列
            {
              values: ['35', '36', '37', '38', '39','40','41','42'],
              defaultIndex: 2
            },
            // 第二列
            {
              values: ['.0', '.1', '.2','.3','.4','.5','.6','.7','.8','.9'],
              defaultIndex: 0
            },
            {
              values:['','','',''],
            }
          ],
          hotshow:false,
          hotnum:localStorage.getItem('temp'),
          minDate: new Date(2019, 0, 1),
          maxDate: new Date(),
          currentDate: new Date(),
          datehshow:false,  //热
          datecshow:false,   //咳嗽
          datexshow:false,    //胸痛
          dateeshow:false,     //恶心
          datefshow:false,     //腹泻
          dateoshow:false,     //呕吐
          starttime:localStorage.getItem('symOptionsFrTime'),         //热 symOptionsFrTime
          starttimec:localStorage.getItem('symOptionsKsTime'),         //咳嗽
          starttimex:localStorage.getItem('symOptionsXmqjTime'),         //胸痛
          starttimee:localStorage.getItem('symOptionsFlstTime'),          //乏力 肌肉酸痛
          starttimef:localStorage.getItem('symOptionsFxTime'),          //腹泻
          starttimeo:localStorage.getItem('symOptionsExotTime'),         //恶心、呕吐
          select1:require('../../../assets/imgs/xfill1_sex1.png'),
          select2:require('../../../assets/imgs/xfill1_sex2.png'),
          ish:localStorage.getItem('symOptionsFr'),
          isc:localStorage.getItem('symOptionsKs'),
          isx:localStorage.getItem('symOptionsXmqj'),
          ise:localStorage.getItem('symOptionsFlst'),
          isf:localStorage.getItem('symOptionsFx'),
          iso:localStorage.getItem('symOptionsExot'),
          num:2,
          descinfo:localStorage.getItem('illnessDesc'),  //病情描述
          otherinfo:''
        }
      },
      methods:{
        tofocus(){
          this.ptip1='';
        },
        tofocus1(){
          this.ptip2='';
        },
        toblur(){
         this.ptip1='请详细描述你的发病过程，症状情况';
        },
        toblur1(){
         this.ptip2='请输入您的慢性病史，或近期患的疾病';
        },
        linkDownload(url){
          window.location.href = url;
        },
        confirmhot(a){
          this.isdw=true;
          this.hotshow=false;
          this.hotnum=a[1]+a[2];
          localStorage.setItem('temp',this.hotnum);
          console.log(a);
        },
        gethot(){
          this.hotshow=true;
        },
        confirmh(value){
          this.datehshow=false;
          this.starttime=moment(value).format('YYYY-MM-DD');
          localStorage.setItem('symOptionsFrTime',this.starttime);
        },
        confirmc(value){
          this.datecshow=false;
          this.starttimec=moment(value).format('YYYY-MM-DD');
          localStorage.setItem('symOptionsKsTime',this.starttimec);
        },
        confirmx(value){
          this.datexshow=false;
          this.starttimex=moment(value).format('YYYY-MM-DD');
          localStorage.setItem('symOptionsXmqjTime',this.starttimex);
        },
        confirme(value){
          this.dateeshow=false;
          this.starttimee=moment(value).format('YYYY-MM-DD');
          localStorage.setItem('symOptionsFlstTime',this.starttimee);
        },
        confirmf(value){
          this.datefshow=false;
          this.starttimef=moment(value).format('YYYY-MM-DD');
          localStorage.setItem('symOptionsFxTime',this.starttimef);
        },
        confirmo(value){
          this.dateoshow=false;
          this.starttimeo=moment(value).format('YYYY-MM-DD');
          localStorage.setItem('symOptionsExotTime',this.starttimeo);
        },
        cancelhot(){
          this.hotnum='未测量';
          this.hotshow=false;
          this.isdw=false;
        },
        cancelh(){
          this.hotshow=false;
          this.datehshow=false;
          this.datecshow=false;
          this.datexshow=false;
          this.dateeshow=false;
          this.datefshow=false;
          this.dateoshow=false;
        },
        hdate(){this.datehshow=true;},
        cdate(){this.datecshow=true;},
        xdate(){this.datexshow=true;},
        edate(){this.dateeshow=true;},
        fdate(){this.datefshow=true;},
        odate(){this.dateoshow=true;},
        setsess(sess,name,timename){
          if(sess==='true'){
            localStorage.setItem(name,true);
          }else {
            localStorage.setItem(timename,'');
            localStorage.setItem(name,false);
          }
        },
        tochange(state){
          if(state==='true'){
            state='false';
          }else {
            state='true';
          }
          return state;
        },
        selectsymptom(iss,sessname,timename){
          if(iss==='ish'){
            this.ish=this.tochange(this.ish);
            if(this.ish==='false'){
              this.hotnum='';
              this.starttime='';
              localStorage.setItem('temp','');
            }
            this.setsess(this.ish,sessname,timename);
          }else  if(iss==='isc'){
            this.isc=this.tochange(this.isc);
            if(this.isc==='false'){
              this.starttimec='';
            }
            this.setsess(this.isc,sessname,timename);
          }else if(iss==='isx'){
            this.isx=this.tochange(this.isx);
            if(this.isx==='false'){
              this.starttimex='';
            }
            this.setsess(this.isx,sessname,timename);
          }else if(iss==='ise'){
            this.ise=this.tochange(this.ise);
            if(this.ise==='false'){
              this.starttimee='';
            }
            this.setsess(this.ise,sessname,timename);
          }else if(iss==='isf'){
            this.isf=this.tochange(this.isf);
            if(this.isf==='false'){
              this.starttimef='';
            }
            this.setsess(this.isf,sessname,timename);
          }else{
            this.iso=this.tochange(this.iso);
            if(this.iso===false){
              this.starttimeo='';
            }
            this.setsess(this.iso,sessname,timename);
          }

        },
        toahead(){
          this.$router_({path: '/fillbasic'});
        },
        tonext(){
          if(this.ish==='false'&&this.isc==='false'&&this.isx==='false'&&this.ise==='false'&&this.isf==='false'&&this.iso==='false'){
            Toast('请勾选症状');
          }
          else if(this.ish==='true'&&!this.hotnum){
            Toast('请填写体温');
          }else if(this.ish==='true'&&!this.starttime){
            Toast('请填写发热开始时间');
          }else if(this.isc==='true'&&!this.starttimec){
            Toast('请填写咳嗽开始时间');
          }else if(this.isx==='true'&&!this.starttimex){
            Toast('请填写胸闷、心悸开始时间');
          }else if(this.ise==='true'&&!this.starttimee){
            Toast('请填写乏力、肌肉酸痛开始时间');
          }else if(this.isf==='true'&&!this.starttimef){
            Toast('请填写腹泻开始时间');
          }else if(this.iso==='true'&&!this.starttimeo){
            Toast('请填写恶心、呕吐开始时间');
          }else if(!this.descinfo){
            Toast('请描述发病过程');
          }
          else {
            localStorage.setItem('illnessDesc',this.descinfo);
            localStorage.setItem('pastHistory',this.otherinfo);
            this.$router_({path: '/medicalinfo'});
          }
        }
      },
      watch: {
        //监听显示高度
        showHeight:function() {
          if(this.docmHeight > this.showHeight){
            //隐藏
            this.hideshow=false
          }else{
            //显示
            this.hideshow=true
          }
        }
      },
      mounted() {
        //监听事件
        window.onresize = ()=>{
          return(()=>{
            this.showHeight = document.documentElement.clientHeight || document.body.clientHeight;
          })()
        }
      }
    }
</script>
<style scoped lang="less">
  .my-picker {
    /deep/ .van-picker-column {
      font-size: 0.36rem !important;
      font-weight: bold;
    }
    /deep/.van-picker__cancel{
      color:#56B2AD;
    }
  /deep/.van-picker__confirm{
      color:#56B2AD;
    }
  }


</style>
<style scoped lang="less">
  .fillillness{
    padding-bottom: 2.8rem;
    font-size: 0.3rem;
    color: #777777;
    .fill_line{
      margin: 0 auto;
      width: 6.6rem;
      height: 0.02rem;
      background: #F1EFF2;
    }
    .filltop{
      height: 0.9rem;
      font-size: 0.36rem;
      color: white;
      line-height: 0.9rem;
      text-align: center;
      background: #56B2AE;
    }
    .fillprogress{
      height: 2.2rem;
      background: #56B2AE;
      .fill_b{
        padding-top: 0.22rem;
        margin: 0 auto;
        width: 5.92rem;
        height: 0.82rem;
        background: url("../../../assets/imgs/x_fill_i1.png") no-repeat 0 0.22rem;
        background-size:5.92rem 0.82rem;
      }
      .fill_text{
        width: 6.6rem;
        color: white;
        font-size: 0.26rem;
        margin-left: 0.46rem;
        display: flex;
        justify-content: flex-start;
        .fill_text_span{
          width: 1.04rem;
          margin-left: 0.81rem;
          opacity: 0.4;
        }
      }
    }
    .fillill_tip{
      margin-top: -0.5rem;
      height: 2.2rem;
      border-radius: 0.3rem;
      background: #F4F1F4;
      color: #949494;
      font-size: 0.26rem;
      line-height: 0.4rem;
      .fillill_tip_one{
        padding-top: 0.3rem;
          width: 6.95rem;
          margin-left: 0.3rem;
      }
    }
    .fillradius{
      margin-top: -0.5rem;
      height: auto;
      border-radius: 0.3rem;
      background: #FFFFFF;
    }
    .filltitle{
      margin-top: 0.54rem;
      margin-left: 0.5rem;
      width:2.5rem;
      height: 0.3rem;
      font-weight: bold;
    }
    .fillinput{
     // margin-top:-0.06rem ;
      margin-left: 0.3rem;
      padding-left: 0.1rem;
      width: 3.83rem;
      line-height: 0.53rem;
      height: 0.53rem;
      border: 0.02rem solid #D6D6D8;
      border-radius: 0.08rem;
      background: url("../../../assets/imgs/xfill1_date.png") no-repeat 3.4rem;
      background-size: 0.27rem 0.27rem;
      input{
        width: 3rem;
        height: 0.44rem;
      }
    }
    .fillsymptom{
      height: auto;
      padding-bottom: 0.5rem;
      .hottime{
        width: 5.7rem;
        height: 0.5rem;
        margin-left: 1.48rem;
        margin-top: 0.2rem;
        margin-bottom: 0.8rem;
        display: flex;
        justify-content: flex-start;
        .hotstart{
          margin-top: 0.1rem;
         width: 1.24rem;
          height: 0.3rem;
        }
      }
      .fillsymptom_top{
        font-weight: bold;
        color: #767777;
        padding-top: 0.5rem;
        padding-left: 0.5rem;
        height: 0.6rem;
        .top_hot{
          float: right;
          margin-right: 0.5rem;
          margin-top: -0.15rem;
          width: 1.6rem;
          height: 0.6rem;
          background: url("../../../assets/imgs/x_frmz.png") no-repeat;
          background-size: 1.6rem 0.6rem;
        }
      }
      .select_hot{
        margin-left: 0.9rem;
        margin-top: 0.3rem;
        display: flex;
        justify-content: flex-start;
        height: auto;
        img{
          width: 0.35rem;
          height: 0.35rem;
        }
      }
      .select_name{
        width: 2.3rem;
        height: 0.3rem;
        margin-left: 0.2rem;
        margin-top: -0.04rem;
      }
      .hotshow{
        height: 1.6rem;
        .hotmax{
          width: 4rem;
          height: 0.56rem;
          margin-left: 1.48rem;
          margin-top: 0.2rem;
          display: flex;
          justify-content: flex-start;
          .hottiwen{
            margin-right: 0.9rem;
            margin-top: 0.06rem;
            width: 0.63rem;
            height: 0.3rem;
          }
          .hotnum{
            pointer-events:none;
            padding-left: 0.1rem;
            width: 1.63rem;
            line-height: 0.53rem;
            height: 0.53rem;
            border-radius: 0.08rem;
            border: 0.02rem solid #D6D6D8;
            display: flex;
            justify-content: flex-start;
            background: url("../../../assets/imgs/x_fill_b2.png") no-repeat 1.3rem;
            background-size: 0.21rem 0.16rem;
            .h_hotnum{
              font-size: 0.28rem;
              width: 0.9rem;
              height: 0.32rem;
            }
          }
        }
        .h_danw{
          padding-top: 0.1rem;
          margin-left: 0.1rem;
          width: 0.3rem;
          height: 0.3rem;
        }
      }
    }
    .filltext{
      margin: 0.5rem auto 0 auto;
      width: 6rem;
      height: 3rem;
      border: 0.02rem solid #D6D6D8;
      overflow: hidden;
      border-radius: 0.08rem;
      textarea{
        width: 5.8rem;
        height: 2.8rem;
        padding-left: 0.2rem;
        padding-top: 0.2rem;
      }
      textarea::-webkit-input-placeholder{
        color:#BCBCBC;
      }
      textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */
        color:#BCBCBC;
    }
      textarea:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        color:#BCBCBC;
      }
      textarea:-ms-input-placeholder{  /* Internet Explorer 10-11 */
        color:#BCBCBC;
      }
    }
    .filldesc{
      height: 3.8rem;
      margin-bottom: 0.8rem;
    }
    .fillhis{
      height: 3.3rem;
    }
    .fillbtnback{
       width: 100%;
       position: fixed;
       height: 1.4rem;
       bottom: 0;
       background: white;
     }
    .fillbtn{
      width: 5.9rem;
      height: 0.7rem;
      display: flex;
      justify-content: space-between;
      margin: 0.34rem auto;
      .fillzx{
        width: 2.72rem;
        height: 0.72rem;
        background: url("../../../assets/imgs/x_syb2.png") no-repeat;
        background-size: 2.72rem 0.72rem;
      }
      .fillnext{
        width: 2.72rem;
        height: 0.72rem;
        background: url("../../../assets/imgs/x_xyb2.png") no-repeat;
        background-size: 2.72rem 0.72rem;
      }
    }

  }
</style>
