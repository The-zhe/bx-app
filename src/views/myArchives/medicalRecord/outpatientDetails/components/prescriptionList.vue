/*
 * @Author: zzh 
 * @Date: 2019-12-26 14:32:51 
 * @Last Modified by: zzh
 * @Last Modified time: 2020-01-17 11:35:26
 */

<template>
  <div class="precriptionList_container" v-if="prescriptionLists.length">
    <div class="list_container">
          <div class="item" @click="JumpToDetailPage(item)" v-for="(item,index) in fixedList">
      <div class="item_head">
        <div class="item_title">{{`${item.catNm}${index+1}`}}</div>
        <div class="item_num">处方编号：{{item.num}}</div>
        <div class="item_next">
          <img src="@/assets/imgs/btn_da_next.png" />
        </div>
      </div>
      <div class="item_list">
        <div
          class="prescription_item"
          v-for="(prescriptionItem,prescriptionIndex) in item.preslist"
        >{{prescriptionItem.name}}</div>
      </div>
    </div>
    </div>
    <div class="showMore_container" v-if="prescriptionLists.length>2" @click="changeShowMore">
      <div class="text">{{showMore?'收回':'展开'}}</div>
      <div class="arrow">
        <img :src="showMore?upArrowIconUrl:downArrwoIconUrl"/>
      </div>
    </div>
  </div>
</template>

<script>
import {getPrescriptionList} from '@/api/apiz'
export default {
  components: {},
  name: "precriptionList",
  props:['opcId'],
  data() {
    return {
      showMore:false,
      upArrowIconUrl:require('@/assets/imgs/btn_da_recovery.png'),
      downArrwoIconUrl:require('@/assets/imgs/btn_da_return.png'),
      prescriptionLists: []
    };
  },
  created() {},
  computed: {
    fixedList(){
      return this.showMore?this.prescriptionLists:this.prescriptionLists.slice(0,2)
}
  },
  watch: {
    opcId(newVal,oldVal){
      this.getPrescriptionListFunc()
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.getPrescriptionListFunc()
    })
  },
  methods: {
    changeShowMore(){
      this.showMore=!this.showMore
    },
    JumpToDetailPage(item){
      this.$router_({name:'prescriptionDetail',params:{opcPresId:item.id}})
    },
    getPrescriptionListFunc(){
      getPrescriptionList(this.opcId).then((res)=>{
        this.prescriptionLists=res.data.list
      })
    }
  }
};
</script>

<style lang="less" scope>
.precriptionList_container {
  width: 6.61rem;
  border-top: none;
  margin: 0 auto 0;
  .list_container{
    border: 0.02rem solid #e1e1e1;
      .item {
    padding: 0 0.23rem;
    .item_head {
      display: flex;
      font-size: 0.28rem;
      color: #40b2a0;
      display: flex;
      height: 0.84rem;
      align-items: center;
      font-weight: bold;
      box-sizing: border-box;

      border-bottom: 0.02rem solid #e5e5e5;
      .item_title {
      }
      .item_num {
        margin-left: 0.34rem;
      }
      .item_next {
        margin-left: auto;
        img {
          height: 0.27rem;
        }
      }
    }
    .item_list {
      font-size: 0.28rem;
      color: #777777;
      .prescription_item {
        height: 0.76rem;
        line-height: 0.76rem;
        box-sizing: border-box;
        &:not(:first-child){
            border-top: 0.02rem dashed #DADADA;
        }
      }
    }
    &:not(:first-child) {
      border-top: 0.21rem solid #f4f4f4;
    }
  }
  }
  .showMore_container{
    display: flex;
    font-size: 0.28rem;
    color: #40B2A0;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    margin-top: 0.29rem;
    .arrow{
      margin-left: 0.18rem;
          img{
      width: 0.27rem;
    }
    }

  }
}
</style>
