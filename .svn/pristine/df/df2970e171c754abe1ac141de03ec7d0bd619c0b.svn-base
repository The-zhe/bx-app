// 2020/1/8 created by xtt
<template>
    <div class="managementReport">
      <div class="a_top">
        <div class="a_select">
          <div>{{value}}</div>
          <div class="a_triangle" @click="toselect"></div>
        </div>
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
        <div class="a_more" @click="tomore">查看更多<img src="../../../assets/imgs/btn_da_next.png"></div>
      </div>
      <!-- <div class="a_content">
        <div class="a_report" v-for="item in reportList">
          <div class="r_top">
              <div class="r_title">{{item.name}}</div>
              <div class="a_gt" @click="toReportInfo(item.type,item.id)"><img src="../../../assets/imgs/btn_da_next.png"></div>
            </div>
          <div class="r_content">
           <div class="r_div">检查日期：{{item.time}}</div>
            <div class="r_div">医疗机构：{{item.hospName}}</div>
            <div class="r_div1">医生建议：{{item.msg}}</div>
          </div>
        </div>

      </div> -->
      <div class="a_content">
        <div class="a_advice" v-for="item in reportList">
          <div class="a_advice_content">
            <div class="a_advice_top">
              <div class="a_type">{{item.type}}</div>
              <div class="a_date">{{item.date}}</div>
            </div>
            <div class="divder"></div>
            <div class="a_advice_middle">
              <div class="a_report">{{item.hosp}}</div>
            </div>
            <div class="divder"></div>
            <div class="a_advice_bottom">{{item.details}}</div>
          </div>
          
        </div>
     </div>
    </div>
</template>

<script>
  import moment from "moment";
  import {getReportList} from "../../../api/index"
    export default {
        name: "managementReport",
      data(){
          return{
            rtime:moment().format('YYYY-MM-DD HH:mm'),
            value:'今 日',
            showPicker:false,
            isselect:false,
            columns: ['今 日', '近7天', '近一个月', '近三个月'],
            hospName: '医院机构',// 医院机构
            msg: '',//  建议
            name: '检查项目',// 检查项目
            time: '',// 检查时间
            type: '',//  0检查 1检验
            reportList:[
              {
                type:'胃部CT',
                hosp:"宁波第一医院",
                date:'2020-4-28  15.43',
                details:'Vant 是有赞开源的一套基于 Vue 2.0 的 Mobile 组件库。通过 Vant,可以快速搭建出风格统一的页面,提升开发效率。目前已有近 50 个组件,这些组件被广泛使用于有赞.'
              },
              {
                type:'胃部CT',
                hosp:"宁波第一医院",
                date:'2020-4-28  15.43',
                details:'Vant 是有赞开源的一套基于 Vue 2.0 的 Mobile 组件库。通过 Vant,可以快速搭建出风格统一的页面,提升开发效率。目前已有近 50 个组件,这些组件被广泛使用于有赞.'
              },
              {
                type:'胃部CT',
                hosp:"宁波第一医院",
                date:'2020-4-28  15.43',
                details:'Vant 是有赞开源的一套基于 Vue 2.0 的 Mobile 组件库。通过 Vant,可以快速搭建出风格统一的页面,提升开发效率。目前已有近 50 个组件,这些组件被广泛使用于有赞.'
              },
              {
                type:'胃部CT',
                hosp:"宁波第一医院",
                date:'2020-4-28  15.43',
                details:'Vant 是有赞开源的一套基于 Vue 2.0 的 Mobile 组件库。通过 Vant,可以快速搭建出风格统一的页面,提升开发效率。目前已有近 50 个组件,这些组件被广泛使用于有赞.'
              },
              {
                type:'胃部CT',
                hosp:"宁波第一医院",
                date:'2020-4-28  15.43',
                details:'Vant 是有赞开源的一套基于 Vue 2.0 的 Mobile 组件库。通过 Vant,可以快速搭建出风格统一的页面,提升开发效率。目前已有近 50 个组件,这些组件被广泛使用于有赞.'
              }
            ],
          }
      },
      methods:{
        toselect(){
          this.showPicker=true;
        },
        onConfirm(value,index){
          // this.reportList=[];
          this.value=value;
          this.showPicker = false;
          index=index+'';
          getReportList(4535481258038273,1,index).then(res=>{
            // this.reportList=res.data.list;
            console.log('cc',res.data.list);
          });
          console.log(index);
        },
        //查看更多
        tomore(){
          this.$router_({path:'/reportHistory'});
        },
        //新报告详情
        toReportInfo(type,id){
          console.log('rrinfo',type);
          if(type==='0'){
            this.$router_({path:'/reportCheckInfo',query:{id:id}});
          }
          if(type==='1'){
            this.$router_({path:'/reportInspectInfo',query:{id:id}});
          }
        },
        getInfo(){
          //0今日 1近7天  4全部
          getReportList(4535481258038273,1,'0').then(res=>{
            // this.reportList=res.data.list;
           console.log('rrr',res);
          });
        }
      },
      mounted() {
        this.getInfo();
      }
    }
</script>
<style scoped lang="less">
  .managementReport {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    padding-bottom: 0.2rem;
    box-shadow: 0 .1rem 12px 0 rgba(0,0,0,1);
    margin-top: 0.1rem;
    .a_top {
      height: 0.9rem;
      background: white;
      .a_select {
        margin-top: 0.15rem;
        margin-left: 0.25rem;
        float: left;
        width: 2.7rem;
        height: 0.5rem;
        border-radius: 0.6rem;
        border: 0.02rem #40b2a0 solid;
        font-size: 0.3rem;
        color: #40b2a0;
        padding-left: 0.3rem;
        padding-top: 0.1rem;
        display: flex;
        justify-content: space-between;

        .a_triangle {
          margin-top: 0.1rem;
          margin-right: 0.2rem;
          height: 0rem;
          width: 0rem;
          z-index: 1; /*这个与后面的空心三角形有关*/
          border-left: 0.1rem solid transparent;
          border-right: 0.1rem solid transparent;
          border-top: 0.2rem solid #048A83;
        }
      }

      .a_select1 {
        margin-left: 0.25rem;
        position: absolute;
        margin-top: 0.8rem;
        width: 2.7rem;
        height: auto;
        border-radius: 0.1rem;
        border-left: 0.01rem #f4f4f4 solid;
        border-right: 0.01rem #f4f4f4 solid;
        border-bottom: 0.01rem #f4f4f4 solid;
        font-size: 0.3rem;
        color: #40b2a0;
        padding-left: 0.3rem;
        padding-top: 0.1rem;
        background: white;

        .onselect {
          width: 2rem;
          height: 0.5rem;
          border-top: 0.01rem solid #F4F4F4;
        }
      }

      .a_more {
        margin-top: 0.25rem;
        margin-right: 0.5rem;
        float: right;
        font-size: 0.3rem;
        color: #048A83;

        img {
          margin-left: 0.15rem;
          display: inline-block;
          width: 0.15rem;
          height: 0.27rem;
        }
      }
    }
    .a_content{
  height: 100%;
  background: #ffffff;
  .a_advice{
    display: flex;
    flex-direction: column;
    width: 7rem;
    height: 3rem;
    margin: 0 auto;
    .a_advice_content{
      padding: .3rem;
      font-size:.3rem;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(119,119,119,1);
      box-shadow: 0 0 0.08rem #bebcbc;
      .a_advice_top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: .2rem;
        .a_type{
          font-weight:bold;
          color:rgba(93,93,93,1);
        }
      }
      .divder{
        width: 100%;
        margin-bottom: .2rem;
        height: .01rem;
        background-color:rgba(93,93,93,.2);
      }
      .a_advice_middle{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: .2rem;
      }
      .a_advice_bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        display: inline-block;
        white-space: nowrap; 
        width: 100%; 
        overflow: hidden;
        text-overflow:ellipsis;
      }
    }
  }
}
  }
</style>
