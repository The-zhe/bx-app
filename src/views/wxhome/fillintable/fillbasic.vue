<template>
    <div class="fillbasic">
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
        <div class="fillname">
          <div class="filltitle">*1.你的姓名</div>
            <div class="fillinput">
              <input :placeholder="ptip" v-model="nickname" @focus="tofocus" @blur="toblur"/>
            </div>
        </div>
      <div class="fillsex">
        <div class="filltitle">*2.你的性别</div>
        <div class="sex_select">
          <div><img :src="issexb?unselect:select" @click="sexb"></div>&ensp;男
          <div class="girl"><img :src="issexb?select:unselect" @click="sexg"></div>&ensp;女
        </div>
      </div>
      <div class="filldate">
        <div class="filltitle">*3.你的生日</div>
      <!--  <div class="fillinput">
          <div class="fillsui" v-show="issui">岁</div>
          <input :placeholder="ptip" v-model="dateTime" @focus="tofocus" @blur="toblur" type="number"/>
        </div>-->
        <div class="fillinput" @click="selectdate" :style="dateTime===null?'color:#BCBCBC':'color:#777777'">{{dateTime===null?'你的生日':dateTime}}</div>
        <van-popup
          v-model="dateshow"
          position="bottom"
        ><van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirmdate"
          @cancel="canceldate"
          />
        </van-popup>
      </div>
      </div>
   <!--   <div class="filladdress">
        <div class="filltitle">*3.长期居所</div>
        <div class="fillinput_a" @click="selectaddress">{{address==='null-null-null'?'请输入居所':address }}</div>
        <van-popup
          v-model="addressshow"
          position="bottom"
        >
        <van-area :area-list="areaList"
                  title="标题"
                  @confirm="confirmaddress"
                  @cancel="canceladdress"
                  value="110101"
        />
        </van-popup>
      </div>
      <div class="fillresentaddress">
        <div class="filltitle">*4.近期居住地（7天内）</div>
        <div class="fillinput_a" @click="selectraddress">{{raddress==='null-null-null'?'请输入居所':raddress }}</div>
        <van-popup
          v-model="raddressshow"
          position="bottom"
        >
          <van-area :area-list="areaList"
                    title="标题"
                    @confirm="confirmraddress"
                    @cancel="canceladdress"
                    value="110101"
          />
        </van-popup>
      </div>-->
      <div class="fillbtnback">
      <div class="fillbtn" v-show="hideshow">
        <div class="fillzx" @click="toahead"></div>
        <div class="fillnext" @click="tonext"></div>
      </div>
      </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import Toast from "vant/es/toast";
    export default {
        name: "fillbasic",
        data(){
          return{
            docmHeight: document.documentElement.clientHeight ||document.body.clientHeight,
            showHeight: document.documentElement.clientHeight ||document.body.clientHeight,
            hideshow:true,  //显示或者隐藏footer
            isshowbtn:true,
            issui:false,
            ptip:'你的姓名',
            nickname:localStorage.getItem('nickname'),
            issexb:false,
            select:require('../../../assets/imgs/xfill1_sex1.png'),
            unselect:require('../../../assets/imgs/xfill1_sex2.png'),
            num:1,
            dateshow:false,
            dateTime:localStorage.getItem('birthday'),
            address:localStorage.getItem('proviceNm')+'-'+localStorage.getItem('cityNm')+'-'+localStorage.getItem('districtNm'),
            raddress:localStorage.getItem('jqProviceNm')+'-'+localStorage.getItem('jqCityNm')+'-'+localStorage.getItem('jqDistrictNm'),
            addressshow:false,
            raddressshow:false,
            minDate: new Date(1950, 0, 1),
            maxDate: new Date(),
            currentDate: new Date(),
            areaList:require('@/utils/area.js').default,
          }
      },
      methods:{
        tofocus(){
         this.ptip='';
        },
        toblur(){
          this.ptip='你的姓名'
        /*  console.log(this.dateTime);
          if(this.dateTime){
            this.issui=true;
          }else {
            this.issui=false;
            this.ptip='你的年龄';
          }*/

        },
        confirmdate(value){
          this.dateshow=false;
          this.dateTime=moment(value).format('YYYY-MM-DD');
          localStorage.setItem('birthday',this.dateTime);
        },
        canceldate(){
          this.dateshow=false;
        },
        confirmraddress(a){
          this.raddress=a[0].name+'-'+a[1].name+'-'+a[2].name;
          localStorage.setItem('jqProviceNm',a[0].name);
          localStorage.setItem('jqCityNm',a[1].name);
          localStorage.setItem('jqDistrictNm',a[2].name);
          this.raddressshow=false;
        },
        confirmaddress(a){
          this.address=a[0].name+'-'+a[1].name+'-'+a[2].name;
          localStorage.setItem('proviceNm',a[0].name);
          localStorage.setItem('cityNm',a[1].name);
          localStorage.setItem('districtNm',a[2].name);
          this.addressshow=false;
        },
        canceladdress(){
          this.raddressshow=false;
          this.addressshow=false;
        },
        selectdate(){
          this.dateshow=true;
        },
        selectaddress(){
          this.addressshow=true;
        },
        selectraddress(){
          this.raddressshow=true;
        },
        sexb(){
         this.issexb=!this.issexb;
         if(this.issexb){
           localStorage.setItem('sex','女');
         }else{
           localStorage.setItem('sex','男');
         }

        },
        sexg(){
          this.issexb=!this.issexb;
          if(this.issexb){
            localStorage.setItem('sex','女');
          }else{
            localStorage.setItem('sex','男');
          }
         },
        toahead(){
          this.$router_({path: '/'});
        },
        tonext(){
          localStorage.setItem('nickname',this.nickname);
          if(!this.nickname){
            Toast('请填写你的姓名');
          }
          else if(!this.dateTime){
            Toast('请填写你的生日');
          }/*else if(this.address==='null-null'){
            Toast('请填写长期居所');
          }else if(this.raddress==='null-null'){
            Toast('请填写近期居所');
          }*/
          else {
            this.$router_({path: '/fillillness'});
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
        localStorage.setItem('sex','男');
        /*if(sessionStorage.getItem('age')){
          this.issui=true;
        }*/
        //监听事件
        window.onresize = ()=>{
          return(()=>{
            this.showHeight = document.documentElement.clientHeight || document.body.clientHeight;
          })()
        }

      },
    }
</script>
<style scoped lang="less">
.fillbasic{
  padding-bottom: 1rem;
  font-size: 0.3rem;
  .filltop{
    height: 0.9rem;
    //background: url("../../../assets/imgs/x_filltop.png");
    background: #56B2AE;
    font-size: 0.36rem;
    color: white;
    line-height: 0.9rem;
    text-align: center;
  }
  .fillprogress{
    height: 2.2rem;
    background: #56B2AE;
    .fill_b{
      padding-top: 0.22rem;
      margin: 0 auto;
      width: 5.92rem;
      height: 0.82rem;
      background: url("../../../assets/imgs/x_fill_b1.png") no-repeat 0 0.22rem;
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
    height: 7rem;
    border-radius: 0.3rem;
    background: #FFFFFF;
  }
  .filltitle{
    width: 3.7rem;
    height: 0.3rem;
    font-weight: bold;
    color: #767777;
  }
  .fillname{
    width: 6.6rem;
    margin: 0 auto;
    padding-top: 0.7rem;
    height: 2rem;
    border-bottom: 0.02rem solid #F1EFF2;
    .fillinput{
      color: #777777;
      line-height:0.7rem;
      padding-left: 0.2rem;
      margin-top: 0.48rem;
      margin-left: 0.4rem;
      width: 5.82rem;
      height: 0.7rem;
      border: 0.02rem solid #D6D6D8;
      border-radius: 0.08rem;
      input{
        width: 4.5rem;
        height: 0.56rem;
      }
    }
  }
  .fillsex{
    width: 6.6rem;
    margin: 0 auto;
    padding-top: 0.5rem;
    height: 1.6rem;
    border-bottom: 0.02rem solid #F1EFF2;
    .sex_select{
      color: #717071;
      margin-top: 0.45rem;
      margin-left: 0.4rem;
      height: 0.6rem;
      display: flex;
      justify-content: flex-start;
      img{
        padding-top: 0.02rem;
        width: 0.35rem;
        height: 0.35rem;
      }
      .girl{
        margin-left: 0.8rem;
      }
    }
  }
  .filldate{
    width: 6.6rem;
    margin: 0 auto;
    padding-top: 0.5rem;
    height: 1.3rem;
    .fillnoinput{
     color: #BCBCBC;
    }
    .fillinput{
      color: #777777;
      line-height:0.7rem;
      padding-left: 0.2rem;
      margin-top: 0.48rem;
      margin-left: 0.4rem;
      width: 5.62rem;
      height: 0.7rem;
      border: 0.02rem solid #D6D6D8;
      border-radius: 0.08rem;
      background: url("../../../assets/imgs/x_fill_b2.png") no-repeat 5.3rem;
      background-size: 0.21rem 0.16rem;
      .fillsui{
        position: absolute;
        left: 1.6rem;
      }
      input{
        width: 4.5rem;
        height: 0.56rem;
      }
    }
  }
  .filladdress{
    height: 1.8rem;
    border-bottom: 0.02rem solid #F1EFF2;
    .fillinput_a{
      line-height:0.56rem;
      padding-left: 0.1rem;
      margin-top: 0.48rem;
      margin-left: 0.9rem;
      width: 5.28rem;
      height: 0.56rem;
      border: 0.02rem solid #B7B7B7;
      border-radius: 0.08rem;
      background: url("../../../assets/imgs/xfill1_address.png") no-repeat 4.84rem;
      background-size: 0.21rem 0.19rem;
      input{
        width: 4.5rem;
        height: 0.56rem;
      }
    }
  }
  .fillresentaddress{
    height: 2.5rem;
    .fillinput_a{
      line-height: 0.56rem;
      padding-left: 0.1rem;
      margin-top: 0.48rem;
      margin-left: 0.9rem;
      width: 5.28rem;
      height: 0.56rem;
      border: 0.02rem solid #B7B7B7;
      border-radius: 0.14rem;
      background: url("../../../assets/imgs/xfill1_address.png") no-repeat 4.84rem;
      background-size: 0.21rem 0.19rem;
      input{
        width: 4.5rem;
        height: 0.56rem;
      }
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
    .fillzx{
      width: 2.72rem;
      height: 0.72rem;
      background: url("../../../assets/imgs/x_fh2.png") no-repeat;
      background-size: 2.72rem 0.72rem;
    }
    .fillnext{
      width: 2.72rem;
      height: 0.72rem;
      background: url("../../../assets/imgs/x_xyb2.png") no-repeat;
      background-size: 2.72rem 0.72rem;
    }
  }
  /*.fillbtn{
     position: absolute;
     bottom: 1.2rem;
     left: 50%;
     margin-left: -2.77rem;
     //margin: 0 auto;
     width: 5.54rem;
     height: 0.7rem;
     display: flex;
     justify-content: space-between;
     .fillzx{
       width: 2.33rem;
       height: 0.65rem;
       background: url("../../../assets/imgs/xfill3_1.png");
       background-size: 2.33rem 0.65rem;
     }
     .fillnext{
       width: 2.31rem;
       height: 0.65rem;
       background: url("../../../assets/imgs/xfill3.png");
       background-size: 2.31rem 0.65rem;
     }
   }*/
}
</style>
