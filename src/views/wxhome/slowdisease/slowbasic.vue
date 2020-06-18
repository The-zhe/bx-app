<template>
    <div class="slowbasic">
      <div class="filltop">
        1.&ensp;填写基本资料
      </div>
      <div class="fillname">
        <div class="filltitle">*1.你的姓名</div>
        <div class="fillinput">
          <input :placeholder="ptip" v-model="nickname" @focus="tofocus" @blur="toblur"/>
        </div>
      </div>
      <div class="fillsex">
        <div class="filltitle">*1.你的性别</div>
        <div class="sex_select">
          <div><img :src="issexb?unselect:select" @click="sexb"></div>&emsp;男
          <div class="girl"><img :src="issexb?select:unselect" @click="sexg"></div>&emsp;女
        </div>
      </div>
      <div class="filldate">
        <div class="filltitle">*2.你的生日</div>
        <!--<div class="fillinput"><input :placeholder="ptip" v-model="dateTime" @focus="tofocus" @blur="toblur"/></div>-->
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
      <div class="fillbtn">
        <div class="fillzx" @click="tofreezx"></div>
        <div class="fillnext" @click="tonext"></div>
      </div>
    </div>
</template>

<script>
    import Toast from "vant/es/toast";
    import moment from "moment";

    export default {
        name: "slowbasic",
      data(){
          return{
            nickname:sessionStorage.getItem('slowname'),
            ptip:'你的姓名',
            issexb:false,
            select:require('../../../assets/imgs/xfill1_sex1.png'),
            unselect:require('../../../assets/imgs/xfill1_sex2.png'),
            dateTime:sessionStorage.getItem('slowbirthday'),
            dateshow:false,
            minDate: new Date(1950, 0, 1),
            maxDate: new Date(),
            currentDate: new Date(),
          }
      },
      methods:{
        confirmdate(value){
          this.dateshow=false;
          this.dateTime=moment(value).format('YYYY-MM-DD');
          sessionStorage.setItem('slowbirthday',this.dateTime);
        },
        canceldate(){
          this.dateshow=false;
        },
          selectdate(){
            this.dateshow=true;
          },
        sexb(){
          this.issexb=!this.issexb;
          if(this.issexb){
            sessionStorage.setItem('slowsex','女');
          }else{
            sessionStorage.setItem('slowsex','男');
          }

        },
        sexg(){
          this.issexb=!this.issexb;
          if(this.issexb){
            sessionStorage.setItem('slowsex','女');
          }else{
            sessionStorage.setItem('slowsex','男');
          }
        },
        tofocus(){
          this.ptip='';
        },
        toblur(){
          this.ptip='你的姓名'
        },
        tofreezx(){

        },
        tonext(){
          sessionStorage.setItem('slowbirthday',this.dateTime);
          sessionStorage.setItem('slowname',this.nickname);
          if(!this.nickname){
            Toast('请填写你的姓名');
          }
          else if(!this.dateTime){
            Toast('请填写你的生日');
          }
          else {
            this.$router_({path: '/slowtable'});
          }
        }
      }
    }
</script>

<style scoped lang="less">
.slowbasic{
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
  .filltitle{
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    width: 3.7rem;
    height: 0.3rem;
    font-weight: bold;
    color: #767777;
  }
  .fillname{
    height: 1.8rem;
    border-bottom: 0.02rem solid #F1EFF2;
  }
  .fillsex{
    height: 1.6rem;
    border-bottom: 0.02rem solid #F1EFF2;
    .sex_select{
      color: #717071;
      margin-top: 0.45rem;
      margin-left: 0.9rem;
      height: 0.6rem;
      display: flex;
      justify-content: flex-start;
      img{
        width: 0.35rem;
        height: 0.35rem;
      }
      .girl{
        margin-left: 1.7rem;
      }
    }
  }
  .fillinput{
    color: #777777;
    line-height:0.7rem;
    padding-left: 0.1rem;
    margin-top: 0.48rem;
    margin-left: 0.9rem;
    width: 5.28rem;
    height: 0.7rem;
    border: 0.02rem solid #C1BEC1;
    border-radius: 0.08rem;
    //background: url("../../../assets/imgs/xfill1_date.png") no-repeat 4.7rem;
    // background-size: 0.38rem 0.35rem;
    input{
      width: 4.5rem;
      height: 0.56rem;
    }
  }
  .filldate{
    height: 1.8rem;
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
      background: url("../../../assets/imgs/x_freezx.png") no-repeat;
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
