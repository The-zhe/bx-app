<template>
  <div class="doctorResearch_container">
    <img :src="bannerImg" class="banner" />
    <img :src="aboutBXImg" class="aboutBx" />
    <div class="selest_container">
      <div class="select_item" v-show="pageIndex==0">
        <div class="title">1.您是否愿意提供私人医生服务？</div>
        <div class="selection_item" @click="firstVal=true">
          <img :src="firstVal?selectedIcon:selectIcon" class="icon" />
          是
        </div>
        <div class="selection_item" @click="firstVal=false">
          <img :src="!firstVal?selectedIcon:selectIcon" class="icon" />
          否
        </div>
      </div>
      <div class="select_item" v-show="pageIndex==1">
        <div class="title">2.选择您愿意提供的有偿咨询服务（多选）</div>
        <div class="selection_item" >
          <img @click="textPicConsult=!textPicConsult;textPicConsultPrice=''" :src="textPicConsult?selectedIcon:selectIcon" class="icon" />
          图文咨询 （
          <input type="number" pattern="\d*" :readonly="!textPicConsult" v-model="textPicConsultPrice"/>
          元/次）
        </div>
        <div class="selection_item" >
          <img @click="phoneConsult=!phoneConsult;phoneConsultPrice=''" :src="phoneConsult?selectedIcon:selectIcon" class="icon" />
          电话咨询 （
          <input type="number" pattern="\d*" :readonly="!phoneConsult" v-model="phoneConsultPrice"/>
          元/次）  
        </div> 
        <div class="selection_item" >
          <img @click="videoConsult=!videoConsult;videoConsultPrice=''" :src="videoConsult?selectedIcon:selectIcon" class="icon" />
          视频咨询 （
          <input type="number" pattern="\d*" :readonly="!videoConsult" v-model="videoConsultPrice"/>
          元/次）
        </div> 
      </div>
      <div class="select_item" v-show="pageIndex==2">
        <div class="title">3.您是否愿意参加MDT会诊？</div>
        <div class="selection_item" @click="thirdVal=true">
          <img :src="thirdVal?selectedIcon:selectIcon" class="icon" />
          是
        </div>
        <div class="selection_item" @click="thirdVal=false">
          <img :src="!thirdVal?selectedIcon:selectIcon" class="icon" />
          否
        </div>          
      </div>
      <div class="select_item" v-show="pageIndex==3">
        <div class="title">4.您是否愿意提供手术预约服务</div>
        <div class="selection_item" @click="forthVal=true">
          <img :src="forthVal?selectedIcon:selectIcon" class="icon" />
          是
        </div>
        <div class="selection_item" @click="forthVal=false">
          <img :src="!forthVal?selectedIcon:selectIcon" class="icon" />
          否
        </div>          
      </div>
    </div>
    <div class="button_container">
        <img @click="leftButtonClick" :src="pageIndex==0?backIcon:prevIcon" />
        <img @click="rightButtonClick" class="right" :src="pageIndex==3?submitIcon:nextIcon" />
    </div>
  </div>
</template>

<script>
import {Toast} from 'vant'
import {postDoctorResearch} from '../../../../api/apiz'
export default {
  name: "doctorResearch",
  data() {
    return {
      bannerImg: require("@/assets/imgs/img_yydcb_bg.png"),
      aboutBXImg: require("@/assets/imgs/btn_yydcb_gybx.png"),
      selectedIcon: require("@/assets/imgs/btn_syfw_choose_pre.png"),
      selectIcon: require("@/assets/imgs/btn_syfw_choose_nor.png"),
      backIcon:require('@/assets/imgs/x_fh.png'),
      nextIcon:require('@/assets/imgs/x_xyb.png'),
      prevIcon:require('@/assets/imgs/x_syb.png'),
      submitIcon: require("@/assets/imgs/x_tj.png"),
      titleList:['医生意愿调查表','选择有偿咨询服务','是否参加MDT会议','是否提供手术预约'],
      pageIndex:0,
      firstVal: true,
      textPicConsult:false,
      phoneConsult:false,
      videoConsult:false,
      thirdVal:true,
      forthVal:true,
      textPicConsultPrice:'',
      phoneConsultPrice:'',
      videoConsultPrice:'',
    };
  },
  watch:{
/*       pageIndex(newVal,oldVal){
          document.title=this.titleList[newVal]
      } */
  },
  methods: {
      leftButtonClick(){
          if(this.pageIndex==0){
              this.$router.go(-1)
          }else{
            this.pageIndex--
            this.$nextTick(()=>{
                document.title=this.titleList[this.pageIndex]
            })              
          }
      },
      rightButtonClick(){
          if(this.pageIndex==3){
            this.postDoctorResearchFun({
                orderService:this.firstVal?'1':'0',
                talk:this.textPicConsultPrice,
                phone:this.phoneConsultPrice,
                video:this.videoConsultPrice,
                mdt:this.thirdVal?'1':'0',
                operationOrder:this.forthVal?'1':'0'
            })
          }else{
            this.pageIndex++
            this.$nextTick(()=>{
                document.title=this.titleList[this.pageIndex]
            })
          }

      },
      postDoctorResearchFun(data){
          postDoctorResearch(data).then(res=>{
              console.log(res)
          })
      }
  },
  mounted(){

  }
};
</script>

<style scoped lang="less">
.doctorResearch_container {
  font-size: 0.3rem;
  color: #777777;
  .banner {
    height: 3.66rem;
    width: 100%;
  }
  .aboutBx {
    margin: 0.18rem 0.23rem 0.44rem auto;
    height: 0.66rem;
    width: 2.45rem;
  }
  .selest_container {
      height: 7rem;
    .select_item {
      .title {
          margin-left: 0.44rem;
          font-weight: 600
      }
      .selection_item {
          margin-top: 0.55rem;
          margin-left: 0.65rem;
          display: flex;
          align-items: center;
          input{
              width:0.78rem;
              border-bottom: 1px solid #C9C9CB;
              text-align: center;
          }
          img {
            margin-right: 0.41rem;
            width: 0.33rem;
            height: 0.33rem;
        }
     }
  }
}
.button_container{
    display: flex;
    justify-content: center;
    img{
        width: 3rem;
        height:0.7rem;        
    }
    .right{
        margin-left: 0.5rem
    }
}
}
</style>
