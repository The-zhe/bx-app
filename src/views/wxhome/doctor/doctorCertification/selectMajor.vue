// 2020/3/19 created by xtt
<template>
<div class="selectMajor">
  <div class="department_container" :style="{'height':listHeight+'px'}" >
    <div class="department_list">
      <div
        class="department_item"
        @click="changeDepartment(item,index)"
        :key="item.id"
        :class="{'active_item':departmentIndex==index}"
        v-for="(item,index) in departmentList"
      >{{item.nm}}</div>
    </div>
    <div class="project_list">
      <div class="project_item" @click="SelectDepartment(item)" v-for="item in projectList">{{item.nm}}</div>
    </div>
  </div>
</div>
</template>

<script>
    import {getMajorList} from "../../../../api";

    export default {
        name: "selectMajor",
        data(){
          return{
            departmentIndex: 0,
            departmentList: [],
            projectList: [],
            listHeight:0
          }
        },
      methods:{
        SelectDepartment(item){
          sessionStorage.setItem('majorId',item.cd);
          sessionStorage.setItem('majorNm',item.nm);
          this.$router.go(-1)
        },
        changeDepartment(item,index){
          this.departmentIndex=index;
          this.getMajorSecondList(item.cd);
        },
        getMajorSecondList(cd){
          getMajorList(cd).then((res)=>{
            this.projectList=res.data.data.list
            console.log('projectList',res);
          })
        },
          getinfo(){
            getMajorList('60100').then((res)=>{
              this.departmentList=res.data.data.list;
             console.log('major',res.data.data.list);
            })
          }
      },
      mounted() {
        let headerShow=Boolean(Number(sessionStorage.getItem('InApp')))
        let headerHeight = headerShow?44:0;
        this.listHeight = document.documentElement.clientHeight-headerHeight-10;
        this.getinfo();
        this.getMajorSecondList('60100.130');
      }
    }
</script>

<style scoped lang="less">
.selectMajor{
  padding-top: 0.2rem;
  background-color: #f4f4f4;
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
