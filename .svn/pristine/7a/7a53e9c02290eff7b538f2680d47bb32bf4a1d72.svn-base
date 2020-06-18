// 2020/1/8 created by xtt
<template>
  <div class="symptomsFeel">
    <div class="time_select_box">
      <time-select></time-select>
      <time-select></time-select>
    </div>
    <div class="health_state">
      <div class="state_card" v-for="(item,index) in healtState" :key="index" @click="toinfo(item.id)">
        <div class="staet_top">
          <span class="weight">{{item.symptomNm}}
            <span v-show="item.new == true" class="new_tag">新</span> 
          </span>
          <span>2019/08/11 10:20</span>
        </div>
        <div class="state_bottom">
          <span class="state_bottom_border">{{item.feel}}</span>
          <span v-show="item.advice!==''">{{item.advice}}</span>
          <span v-show="item.advice===''">未填写建议</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import timeSelect from "../../../components/timeSelect.vue";
import { getHealthList } from '../../../api/apiz';
export default {
  name: "symptomsFeel",
  components: { timeSelect },
  data() {
    return {
      healtState:[],
      id:'',
      advice:'',
      crtTm:'',
      doctorHasRead:'',
      situationNm:'',
      symptomNm:'',
      feel:''
    };
  },
  methods:{
    getHealthList(){
      getHealthList().then(res => {
        console.log('res',res.data.list)
        this.healtState = res.data.list
        this.id = this.healtState.id
        this.advice = this.healtState.advice
        this.crtTm = this.healtState.crtTm
        this.doctorHasRead = this.healtState.doctorHasRead
        this.situationNm = this.healtState.situationNm
        this.symptomNm = this.healtState.symptomNm
        this.feel = this.healtState.feel
      })
    },
    toinfo(id) {//列表跳转
      console.log('id',id)
      this.$router.push({path: '/positionDetails',query:{id:id}})
    }
  },
  mounted(){
    this.getHealthList();
  }
};
</script>

<style scoped lang="less">
.symptomsFeel {
  box-shadow: 0 .1rem 12px 0 rgba(0,0,0,1);
  background-color: #fff;
  margin-top: .1rem;
  .time_select_box {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
  }
  .health_state {
    padding: .1rem .2rem;
    //border-radius: .5rem;
    .state_card {
      margin: .2rem 0;
      border: 2px solid #eee;
      background-color: #fff;
      font-size: 0.3rem;
      color: #777777FF;
      padding: .1rem .2rem;
      border-radius: .09rem;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      .staet_top {
        padding-bottom: 0.2rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dotted #eee;
        .weight{
          font-weight: 550;
          color: #5D5D5D;
        }
        .new_tag{
          padding: .04rem .1rem;
          font-size: .08rem;
          // line-height: .2rem;
          border-radius: 50%;
          background-color: #FF7B57;
        }
      }
      .state_bottom {
        font-size: 0.3rem;
        display: flex;
        flex-direction: column;
        span{
          padding: .2rem 0;
        }
        .state_bottom_border{
          border-bottom: 1px dotted #eee;
        }

      }
    }
  }
}
</style>