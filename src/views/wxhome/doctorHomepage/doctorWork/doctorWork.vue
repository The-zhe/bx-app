// 2020/3/19 created by xtt
<template>
  <div class="doctorWork">
    <div class="work_head">
      我的工作站
    </div>
    <div class="work_select">
      <div class="selectImg" v-for="(item,index) in worklist" @click="selectWork(index)">
        <img :src="activeIndex===index?item.selectedimg:item.selectimg"/>
        <div :style="activeIndex===index?'margin-top: 0.2rem;color:#F48003':'margin-top: 0.2rem;'">{{item.name}}</div>
      </div>
    </div>
    <div style="width: 6.9rem;height: 0.01rem;background: #F0EDF1;margin: 0 auto"></div>
    <div v-show="activeIndex===1">
      <doctor-public></doctor-public>
    </div>
    <div v-show="activeIndex===2">
      <doctor-pending></doctor-pending>
    </div>
    <div v-show="activeIndex===3">
      <doctorfinish></doctorfinish>
    </div>
  </div>
</template>

<script>
  import doctorPublic from './doctorPublic'
  import doctorPending from './doctorPending'
  import doctorfinish from './doctorfinish'
  import {getdoctorWork} from "../../../../api";
    export default {
        name: "doctorWork",
      components:{doctorPublic,doctorPending,doctorfinish},
      data(){
          return{
            activeIndex:1,
            worklist:[
              {
                selectimg:require('../../../../assets/imgs/w_select1.png'),
                selectedimg:require('../../../../assets/imgs/w_select1.png'),
                name:'私医服务'
              },
              {
                selectimg:require('../../../../assets/imgs/w_select2.png'),
                selectedimg:require('../../../../assets/imgs/w_selected2.png'),
                name:'公益咨询区'
              },
              {
                selectimg:require('../../../../assets/imgs/w_select3.png'),
                selectedimg:require('../../../../assets/imgs/w_selected3.png'),
                name:'待处理'
              },
              {
                selectimg:require('../../../../assets/imgs/w_select4.png'),
                selectedimg:require('../../../../assets/imgs/w_selected4.png'),
                name:'已完成'
              }
            ]
          }
      },
      methods:{
        selectWork(index){
          if(index===0){
           this.$router.push({path:'/doctorPrivate'})
          }
         this.activeIndex=index;
        },

      },
      mounted() {
      }
    }
</script>

<style scoped lang="less">
.doctorWork{
  font-size: 0.28rem;
  color: #8E8E8E;
  .work_head{
    height: 1.32rem;
    background: #58B2AC;
    text-align: center;
    font-size: 0.36rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    //line-height: 1rem;
  }
  .work_select{
    padding-top: 0.3rem;
    margin-top: -0.3rem;
    height: 1.7rem;
    background: white;
    border-radius: 0.3rem 0.3rem 0 0;
    display: flex;
    justify-content:flex-start;
    .selectImg{
      text-align: center;
      margin-left: 0.6rem;
      /*width: 1.8rem;*/
      height: 1.4rem;
      display: flex;
      flex-direction:column;
      align-items: center;
      img{
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }

}
</style>
