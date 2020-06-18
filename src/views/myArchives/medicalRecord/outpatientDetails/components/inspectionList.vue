/*
 * @Author: zzh 
 * @Date: 2019-12-26 14:32:57 
 * @Last Modified by: zzh
 * @Last Modified time: 2020-01-17 11:35:19
 */

<template>
  <div class="inspectionList_container" v-if="InspectionList.length" >
    <div class="list_container">
      <div class="item" @click="JumpToDetailPage(item,index)" :key="item.id" v-for="(item,index) in fixedList">
        <div class="item_head">
          <div class="item_title">{{`${item.date.slice(0,16)} 检验单`}}</div>
          <div class="item_next">
            <img src="@/assets/imgs/btn_da_next.png" />
          </div>
        </div>
        <div class="item_info">
          <div class="info_date">
            <div class="info_title">检查日期：</div>
            <div class="info_text">{{item.date}}</div>
          </div>
          <div class="info_item">
            <div class="info_title">检查项目：</div>
            <div class="info_text">{{item.name}}</div>
          </div>
          <div class="info_place">
            <div class="info_title">医疗机构：</div>
            <div class="info_text">{{item.hospName}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="showMore_container" v-if="InspectionList.length>2" @click="changeShowMore">
      <div class="text">{{showMore?'收回':'展开'}}</div>
      <div class="arrow">
        <img :src="showMore?upArrowIconUrl:downArrwoIconUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import {getInspectionList} from '@/api/apiz'
export default {
  components: {},
  name: "inspectionList",
  props: ["opcId"],
  data() {
    return {
      showMore: false,
      upArrowIconUrl: require("@/assets/imgs/btn_da_recovery.png"),
      downArrwoIconUrl: require("@/assets/imgs/btn_da_return.png"),
      InspectionList: []
    };
  },
  created() {},
  computed: {
    fixedList() {
      return this.showMore ? this.InspectionList : this.InspectionList.slice(0, 2);
    }
  },
  watch: {},
  mounted() {
    this.getInspectionListFunc()
  },
  methods: {
    changeShowMore() {
      this.showMore = !this.showMore;
    },
    JumpToDetailPage(item,index){
      this.$router_({name:'inspectionDetail',params:{id:item.id,index,InspectionList:this.InspectionList}})
    },
    getInspectionListFunc(){
      getInspectionList(this.opcId).then((res)=>{
        this.InspectionList=res.data.list
      })
    }
  }
};
</script>

<style lang="less" scope>
.inspectionList_container {
  width: 6.61rem;
  border-top: none;
  margin: 0 auto 0;
  .list_container {
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
        .item_next {
          margin-left: auto;
          img {
            height: 0.27rem;
          }
        }
      }
      .item_info {
        font-size: 0.28rem;
        color: #777777;
        .info_date {
          display: flex;
          height: 0.58rem;
          line-height: 0.58rem;
        }
        .info_item {
                    height: 0.58rem;
          line-height: 0.58rem;
          
          display: flex;
          border-top: 0.02rem dashed #dadada;
          .info_title {
            white-space: nowrap;
          }
        }
        .info_place {
          display: flex;
padding: 0.1rem 0;
          border-top: 0.02rem dashed #dadada;
          .info_title{
            white-space: nowrap;
          }
        }
      }
      &:not(:first-child) {
        border-top: 0.21rem solid #f4f4f4;
      }
    }
  }
  .showMore_container {
    display: flex;
    font-size: 0.28rem;
    color: #40b2a0;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    margin-top: 0.29rem;
    .arrow {
      margin-left: 0.18rem;
      img {
        width: 0.27rem;
      }
    }
  }
}
</style>
