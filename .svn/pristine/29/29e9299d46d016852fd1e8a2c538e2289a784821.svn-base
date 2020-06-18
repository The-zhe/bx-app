// 2020/4/3 created by xtt
<template>
  <div class="selectDepartment_container">
    <div class="department_container" :style="{'height':listHeight+'px'}" >
      <div class="department_list">
        <div
          class="department_item"
          @click="changeMajor(item,index)"
          :key="item.id"
          :class="{'active_item':majorIndex==index}"
          v-for="(item,index) in majorList"
        >{{item.nm}}</div>
      </div>
      <div class="project_list">
        <div class="project_item" @click="SelectMajor(item)" v-for="item in projectList">{{item.nm}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    import {getMajorfieldItemList} from "../../../../api/apiz";

    export default {
        name: "majorfiled",
      data(){
          return{
            locationIcon: require("@/assets/imgs/icon_bjjy_xzyy_add.png"),
            majorIndex: 0,
            majorList: [],
            projectList: [],
            listHeight:0,
            pointmajorIndex:this.$route.query.majorIndex,
          }
      },
      mounted(){
        let headerShow=Boolean(Number(sessionStorage.getItem('InApp')))
        let headerHeight = headerShow?44:0;
        this.listHeight = document.documentElement.clientHeight-headerHeight-10;
        getMajorfieldItemList('60100').then((res)=>{
          this.majorList=res.data.data.list;
          this.getProjectListFun(res.data.data.list[0].cd);
        })
      },
      methods:{
        changeMajor(item,index){
          this.majorIndex=index;
          this.getProjectListFun(item.cd)
        },
        SelectMajor(item){
          let addlist = JSON.parse(localStorage.getItem('addlist'));
          addlist[this.pointmajorIndex].marjorNm = this.majorList[this.majorIndex].nm;
          addlist[this.pointmajorIndex].marjorId = this.majorList[this.majorIndex].cd;
          addlist[this.pointmajorIndex].secmajorNm = item.nm;
          addlist[this.pointmajorIndex].secmajorId = item.cd;
          localStorage.setItem('addlist',JSON.stringify(addlist));
          localStorage.setItem('MajorInfo',JSON.stringify({
            majornm:this.majorList[this.majorIndex].nm,
            majorId:this.majorList[this.majorIndex].cd,
            majornm2:item.nm,
            majorId2:item.cd,
          }));
          this.$router.go(-1)
        },
        getProjectListFun(pid){
          getMajorfieldItemList(pid).then((res)=>{
            console.log('resdsds',res);
            this.projectList=res.data.data.list;
          })
        }
      }
    }
</script>

<style scoped lang="less">
  .selectDepartment_container {
    padding-top: 0.2rem;
    background-color: #f4f4f4;
    .selected_hospital {
      height: 1.1rem;
      box-sizing: border-box;
      padding-left: 0.26rem;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      font-size: 0.3rem;
      color: #777777;
      img {
        margin-right: 0.17rem;
        height: 0.41rem;
        width: 0.27rem;
      }
    }
    .department_container {
      display: flex;
      font-size: 0.3rem;
      color: #777777;
      .department_list {
        width: 2.8rem;
        box-sizing: border-box;
        overflow-y: scroll;
        .department_item {
          padding-left: 0.45rem;
          background-color: #f5f5f5;
          height: 1rem;
          display: flex;
          align-items: center;
        }
        .active_item {
          background-color: #ffffff;
          color: #40b2a0;
          font-weight: bold;
          position: relative;
          &::after {
            position: absolute;
            height: 1rem;
            width: 0.07rem;
            left: 0;
            top: 0;
            background-color: #3eb4a1;
            content: "";
          }
        }
      }
      .project_list {
        width: 4.7rem;
        background-color: #ffffff;
        flex: 1;
        .project_item {
          padding-left: 0.34rem;
          display: flex;
          align-items: center;
          height: 1rem;
        }
      }
    }
  }
</style>
