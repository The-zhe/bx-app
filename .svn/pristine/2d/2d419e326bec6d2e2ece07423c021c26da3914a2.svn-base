<template>
    <div class="medicalinfo">
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
      <div class="fillradius">
      <div class="fillprocess">
        <div class="filltitle">1.描述就诊过程</div>
        <div class="filltext"><textarea :placeholder="ptip" v-model="seedoc" @focus="tofocus" @blur="toblur"></textarea></div>
      </div>
        <div class="fill_line"></div>
      <div class="fillupd">
        <div class="filltitle">2.上传你的检查报告或其他资料</div>
        <div class="fillimg">
          <van-uploader :after-read="afterRead" v-model="fileList" multiple />
        </div>
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
  import{getuploader} from '../../../api/index'
  import filltop from './filltop'
    export default {
      name: "medicalinfo",
      components:{ filltop },
      data(){
        return{
          docmHeight: document.documentElement.clientHeight ||document.body.clientHeight,
          showHeight: document.documentElement.clientHeight ||document.body.clientHeight,
          hideshow:true,  //显示或者隐藏footer
          ptip:'填写就诊过程信息，如无就诊不用填写',
          fileList: [],
          num:3,
          seedoc:'',    //就诊过程
          reportimg:''
        }
      },
      methods:{
        tofocus(){
          this.ptip='';
        },
        toblur(){
          this.ptip='填写就诊过程信息，如无就诊不用填写';
        },
        //删除图片
        deleteimg(detail){
         console.log('dddd',detail);
        },
        //上传图片
        afterRead(file,name){
          console.log('delete',this.fileList);
          console.log('name',name);
          let data = new FormData();
          data.append("file",file.file);
          console.log(file);
          getuploader(data).then((res)=>{
            if(!this.reportimg){
              this.reportimg=res.data.data;
            }else {
              this.reportimg=this.reportimg+','+res.data.data;
            }
            console.log('img',this.reportimg);
          })
        },
        toahead(){
          this.$router_({path:'/fillillness'});
        },
        tonext(){
          localStorage.setItem('reportImg',this.reportimg);
          localStorage.setItem('visitingProcess',this.seedoc);
          this.$router_({path:'/fillsass'});
        },
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
        if(localStorage.getItem('visitingProcess')){
          this.seedoc=localStorage.getItem('visitingProcess');
        }
        //监听事件
        window.onresize = ()=>{
          return(()=>{
            this.showHeight = document.documentElement.clientHeight || document.body.clientHeight;
          })()
        }
      }

    }
</script>
<style>
  @import url('../../../assets/less/vantstyle/uploader.css');
</style>
<style scoped lang="less">
.medicalinfo{
  padding-bottom: 0.2rem;
  font-size: 0.3rem;
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
      background: url("../../../assets/imgs/x_fill_m1.png") no-repeat 0 0.22rem;
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
  .fillradius{
    margin-top: -0.5rem;
    height: 8rem;
    border-radius: 0.3rem;
    background: #FFFFFF;
  }
  .fillprocess{
    padding-top: 0.7rem;
    height: 4.5rem;
  }
  .fillupd{
    padding-top: 0.5rem;
    height: auto;
    .fillimg{
      margin-top: 0.5rem;
      margin-left: 0.75rem;
    }
  }
  .filltitle{
    margin-left: 0.5rem;
    width:4.5rem;
    height: 0.3rem;
    font-weight: bold;
    color: #767777;
  }
  .filltext{
    margin: 0.5rem auto 0 auto;
    width: 5.92rem;
    height: 2.86rem;
    border: 0.02rem solid #D6D6D8;
    overflow: hidden;
    border-radius: 0.08rem;
    textarea{
      width: 5.5rem;
      height: 2.5rem;
      padding-left: 0.2rem;
      padding-top: 0.2rem;
      color: #777777;
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
    .fillzx {
      width: 2.72rem;
      height: 0.72rem;
      background: url("../../../assets/imgs/x_syb2.png") no-repeat;
      background-size: 2.72rem 0.72rem;
    }

    .fillnext {
      width: 2.72rem;
      height: 0.72rem;
      background: url("../../../assets/imgs/x_xyb2.png") no-repeat;
      background-size: 2.72rem 0.72rem;
    }
  }
}
</style>
