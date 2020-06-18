<template>
    <div class="slowtable">
      <div class="filltop">
        2.&ensp;填写病情
      </div>
      <div class="sasstop">
        <div class="sasstop_text">您有3次免费慢病咨询服务，医生工作繁忙，请尽量详细准确描述你的病情与需求，便于医生快速回复 </div>
      </div>
      <div class="fillprocess">
        <div class="filltitle">*1.描述您的病情及就诊过程</div>
        <div class="filltext"><textarea :placeholder="ptip1" v-model="seedoc" @focus="tofocus" @blur="toblur"></textarea></div>
      </div>
      <div class="fillupd">
        <div class="filltitle">*2.请上传你近期的检查报告或其他资料</div>
        <div class="fillimg">
          <van-uploader :after-read="afterRead" v-model="fileList" multiple />
        </div>
      </div>
      <div class="fillprocess">
        <div class="filltitle">*3.填写咨询目的</div>
        <div class="filltext"><textarea :placeholder="ptip2" v-model="illPurpose" @focus="tofocus1" @blur="toblur1"></textarea></div>
      </div>
      <div class="fillbtn">
        <div class="fillzx" @click="toahead"></div>
        <div class="fillnext" @click="tonext" v-show="islogin"></div>
        <div class="filltj" @click="totj" v-show="!islogin"></div>
      </div>
    </div>
</template>

<script>
  import {getmbtable, getuploader} from "../../../api";
    import moment from "moment";
  import Toast from "vant/es/toast";

    export default {
        name: "slowtable",
      data(){
          return{
            ptip1:'描述您的病情及就诊过程',
            ptip2:'填写咨询目的',
            issubmit:false,
            islogin:true,
            fileList: [],
            reportimg:'',
            seedoc:'',
            illPurpose:'',//咨询目的
            presenttime:moment().format('YYYY-MM-DD HH:mm:ss'),
          }

      },
      methods:{
        tofocus(){
          this.ptip1='';
        },
        toblur(){
          this.ptip1='描述您的病情及就诊过程';
        },
        tofocus1(){
          this.ptip2='';
        },
        toblur1(){
          this.ptip2='填写咨询目的';
        },
        //上传图片
        afterRead(file,name){
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
         this.$router.push({path:'/slowbasic'});
        },
        tonext(){
          sessionStorage.setItem('slowreportImg',this.reportimg);
          sessionStorage.setItem('illDesc',this.seedoc);
          sessionStorage.setItem('illPurpose',this.illPurpose);
          this.$router.push({path:'/slowphone'});
        },
        totj(){
          if(this.issubmit){
            Toast('请勿多次点击');
          }else {
            let hjjkMbConsultRo = {
              nickname:sessionStorage.getItem('slowname'),
              birthday: sessionStorage.getItem('slowbirthday'),
              code: '',
              doctorId: 0,
              illDesc: sessionStorage.getItem('illDesc'),
              illPurpose: sessionStorage.getItem('illPurpose'),
              illTypeId: Number(sessionStorage.getItem('mbnameid')),
              illTypeNm: sessionStorage.getItem('mbname'),
              imgUrl: sessionStorage.setItem('slowreportImg'),
              phone: localStorage.getItem('tablephone'),
              sendDate: this.presenttime,
              sex: sessionStorage.getItem('slowsex'),
              userId: Number(localStorage['userId']),
              serviceId:4667450476631079,//服务id
              serviceSpecId:0  // 服务规格id
            }
            getmbtable(hjjkMbConsultRo).then((res) => {
              this.issubmit=true;
              console.log('ssstable', res);
              this.userId = res.data.data;
              if (res.data.code === 0) {
                this.$dialog.confirm({
                  title: '提交成功',
                  message: '医生将会尽快回复您的咨询 请注意消息查收！' + '<br>' + '也可下载APP，与医生一对一即时交流',
                  confirmButtonText: '确 定',
                  cancelButtonText: '打开APP',
                  confirmButtonColor: '#56B2AD',
                  cancelButtonColor: '#56B2AD'
                }).then(() => {
                  this.emptytable();
                  this.$router_({path: '/'});
                }).catch(() => {
                  this.emptytable();
                });

              } else {
                let msg = res.data.msg;
                Toast(msg);
              }
            });
          }
        },
        emptytable() {
          sessionStorage.removeItem('slowname');
          sessionStorage.removeItem('slowbirthday');
          sessionStorage.removeItem('illDesc');
          sessionStorage.removeItem('illPurpose');
          sessionStorage.removeItem('slowreportImg');
          sessionStorage.removeItem('slowsex');
        }
      },
      mounted() {
        let hasLogin = Boolean(localStorage['userId']);
        if(hasLogin){
          this.islogin=true;
        }else {
          this.islogin=false;
        }
      }
    }
</script>

<style scoped lang="less">
.slowtable{
  padding-bottom: 1.8rem;
  font-size: 0.3rem;
  .filltop{
    height: 0.9rem;
    background: url("../../../assets/imgs/x_filltop.png");
    background-size: 100% 0.9rem;
    font-size: 0.32rem;
    font-weight: bold;
    color: white;
    line-height: 0.9rem;
    text-align: center;
  }
  .sasstop {
    padding-top: 0.2rem;
    padding-left: 0.4rem;
    line-height: 0.42rem;
    color: #F4793B;
    font-size: 0.26rem;
    height: 1.2rem;
    background: #F0EDF1;
    .sasstop_text {
      color: #F4793B;
      width: 6.9rem;
    }
  }
  .fillprocess{
    height: 4.2rem;
    border-bottom: 0.02rem solid #F1EFF2;
  }
  .fillupd{
    height: auto;
    padding-bottom: 0.3rem;
    border-bottom: 0.02rem solid #F1EFF2;
    .fillimg{
      margin-top: 0.5rem;
      margin-left: 0.6rem;
    }
  }
  .filltitle{
    margin-top: 0.54rem;
    margin-left: 0.5rem;
    width:6rem;
    height: 0.3rem;
    font-weight: bold;
    color: #767777;
  }
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
  .filltext{
    margin: 0.5rem auto 0 auto;
    width: 5.92rem;
    height: 2.86rem;
    border: 0.02rem solid #C5C5C5;
    overflow: hidden;
    border-radius: 0.08rem;
  }
  .fillbtn{
    position: fixed;
    bottom: 6%;
    width: 6.5rem;
    height: 0.7rem;
    display: flex;
    justify-content: space-between;
    // margin: 0.3rem auto 0;
    left: 50%;
    margin-left:-3.25rem;
    .fillzx{
      width: 3.1rem;
      height: 0.72rem;
      background: url("../../../assets/imgs/x_syb2.png") no-repeat;
      background-size: 3.1rem 0.72rem;
    }
    .filltj{
      width: 3.1rem;
      height: 0.72rem;
      background: url("../../../assets/imgs/x_tj2.png") no-repeat;
      background-size: 3.1rem 0.72rem;
    }
    .fillnext{
      width: 3.1rem;
      height: 0.72rem;
      background: url("../../../assets/imgs/x_xyb2.png") no-repeat;
      background-size: 3.1rem 0.72rem;
    }
  }
}
</style>
