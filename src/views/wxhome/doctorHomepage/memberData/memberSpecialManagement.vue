// 2020/4/13 created by xtt
<template>
    <div class="memberSpecialManagement">
      <div class="top">
        <div class="toptitle">
          <img src="../../../../assets/imgs/return_white.png" @click="toback">
          专项管理</div>
      </div>
      <div class="topdata" v-for="item in archiveList" @click="toInfo()">
        <img src="../../../../assets/imgs/img_hyzl_vip_two.png"/>
        <div class="topdataleft">
          {{item.name}}第36天
          <div style="color: #777777;font-size: 0.28rem;margin-top:0.1rem">服务到期：{{item.dueTime|date}}</div>
        </div>
          
      </div>
    </div>
</template>

<script>
    import {getdoctormemberarchiveList} from "../../../../api";

    export default {
        name: "memberSpecialManagement",
      filters:{
            date:function (val) {
            return new Date(val).toLocaleDateString();
          }
      },
       data(){
          return{
            item:'',
            archiveList:[
              // {
              //   dueTime: "2021-04-14 09:21:42",
              //   effectTime: "2020-04-14 09:21:40",
              //   id: 2,
              //   imgUrl: "https://ht.zjhjjk.com/upload/cutchart/img_hyzl_vip_two.png",
              //   name: "孕期管理套餐",
              //   setmealId: 2
              // },
              // {
              //   dueTime: "2021-04-15 09:21:42",
              //   effectTime: "2020-04-15 09:21:40",
              //   id: 2,
              //   imgUrl: "https://ht.zjhjjk.com/upload/cutchart/img_hyzl_vip_two.png",
              //   name: "孕期管理套餐",
              //   setmealId: 2
              // },
            ],
          }
       },
      methods:{
        toback(){
          this.$router.go(-1);
        },
        toInfo(){
          // this.item = item
          // console.log('item',item);
          // sessionStorage.setItem('memberSpecialManagement',JSON.stringify(item));
          this.$router.push({path:'/memberSpecialManagementInfo'})
        },
          getinfo(){
            getdoctormemberarchiveList(4841561225810944).then((res)=>{
              this.archiveList=res.data.list;
               console.log('achiii',res);
               this.oneinfo()
            });
          },
          oneinfo(){
            console.log('length',this.archiveList.length)
            // console.log('item1',item);
            if(this.archiveList.length === 1){
              this.toInfo()
            }
          }
      },
      mounted() {
          this.getinfo();
          // this.oneinfo();
      }
    }
</script>

<style scoped lang="less">
.memberSpecialManagement{
  font-size: 0.3rem;
  color: #5C5D5D;
  background: #F0EDF1;
  height: 100%;
  .top{
    height: 3.5rem;
    background: url("../../../../assets/imgs/img_hyzl_bbg.png");
    background-size: 100% 3.5rem;
    .toptitle{
      padding-top: 1.1rem;
      font-size: 0.36rem;
      color: white;
      text-align: center;
      height: 0.67rem;
      background: url("../../../../assets/imgs/img_hyzl_bg.png");
      background-size: 100% 1.76rem;
      img{
        left: 0.22rem;
        position: absolute;
        width: 0.16rem;
        height: 0.3rem;
      }
    }
  }
  .topdata{
    border-radius: 0.12rem;
    margin: -1.7rem auto 2rem;
    width: 6.9rem;
    height: 1.8rem;
    background: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 0.15rem rgba(43, 43, 43, 0.32);
    .topdataleft{
      width: 4.5rem;
      margin-left: 0.4rem;
      font-size:.3rem;
      font-family:Microsoft YaHei;
      font-weight:bold;
      color:rgba(92,93,93,1);
          }
    img{
      width: 1.1rem;
      height: 0.5rem;
      margin-left: .5rem;
    }
  }
}
</style>
