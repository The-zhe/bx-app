<template>
    <div class="userConsult_container">
        <div class="tab_container">
            <div class="tab_item" @click="activeTabIndex=0" :class="{'active_item':activeTabIndex==0}">
                <div class="text">新冠肺炎咨询</div>
                <img v-show="activeTabIndex==0" src="@/assets/imgs/img_xgzx_new.png"/>
            </div>
            <div class="tab_item" @click="activeTabIndex=1" :class="{'active_item':activeTabIndex==1}">
                <div class="text">慢病咨询</div>
                <img v-show="activeTabIndex==1" src="@/assets/imgs/img_xgzx_new.png"/>
            </div>
        </div>
        <div class="consult_list">
            <div class="consult_item" v-for="item in activeTabIndex==0?leftList:rightList">
                <div class="consult_time">
                    {{item.hjjkServiceOrderVo.crtTm}}
                </div>
                <div class="consult_content">
                    <div class="top">
                        <div class="title" @click="toDetail(item)" v-show="item.hjjkServiceOrderVo.consultId!==''">
                            咨询详情
                        </div>
                        <div class="hasReply" v-if="item.hjjkServiceOrderVo.replyNum!==''" @click="toConsult(item)">
                            <img src="@/assets/imgs/icon_wdzx_new.png"/>
                            有{{item.hjjkServiceOrderVo.replyNum}}条新回复
                        </div>
                        <div class="arrow" @click="toConsult(item)">
                            <img src="@/assets/imgs/btn_grzx_next.png"/>
                        </div>
                    </div>
                    <div class="info" @click="toConsult(item)">
                        {{item.hjjkServiceOrderVo.cont}}
                    </div>
                    <div class="rest_times">
                        剩余{{item.havaTimes}}次追问
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getUserConsultList} from '../../../../api/apiz'
import Toast from "vant/es/toast";
export default {
name:"userConsult",
data(){
    return{
        activeTabIndex:0,
        leftPageNum:1,
        rightPageNum:1,
        leftList:[],
        rightList:[],
        type:''
    }
},
beforeRouteEnter(to,from,next){
let hasLogin = Boolean(localStorage['userId'])
if(hasLogin){
    next()
}else{
    next('/userlogin')
}
},
methods:{
  toConsult(item){
    console.log('item',item);
    let inApp = Boolean(Number(sessionStorage.getItem('inApp')));
    let isIos = sessionStorage.getItem('phoneType')=='ios';
    if(inApp||isIos){
      if(item.hjjkServiceOrderVo.doctorId){
        if(this.activeTabIndex===0){
          sessionStorage.setItem('freetalktype',1);
          this.type='xg';
          this.$router_({path:'/wxconsultuser',query:{id:item.hjjkServiceOrderVo.doctorId,type:this.type,conId:item.hjjkServiceOrderVo.consultId}})
        }else {
          sessionStorage.setItem('freetalktype',2);
          this.type='mb';
          this.$router_({path:'/wxconsultuser',query:{id:item.hjjkServiceOrderVo.doctorId,type:this.type,conId:item.hjjkServiceOrderVo.consultId}})
        }

      }else {
        Toast('还没医生回复过哦');
      }

    }else {
      this.$router_({path:'/wxdoctorreply',query:{doctorId:item.hjjkServiceOrderVo.doctorId,serviceId:item.hjjkServiceOrderVo.serviceId}});
    }
  },
  toDetail(item){
    sessionStorage.setItem('consultId', item.hjjkServiceOrderVo.consultId);
    this.$router_({name: 'formConsultDetail'});
    console.log('item',item.hjjkServiceOrderVo.consultId);
  },
  tojump(item){
    if(this.activeTabIndex===1){   //慢病
      sessionStorage.setItem('freetalktype',2);
      if(item.conId){

      }else{
       this.$router.push({path:'/wxconsultuser',query:{id:item.doctorId,type:'mb'}});
      }
    }else{   //新冠
      sessionStorage.setItem('freetalktype',1);
    }

 console.log('item',item);
  },
    getUserConsultListFun(pageNum,type){
        getUserConsultList(pageNum,type).then((res)=>{
            if(type=='1'){
                this.leftList=this.leftList.concat(res.data.list)
                console.log('leftlist',this.leftList);
                this.leftPageNum++
            }else{
                this.rightList=this.rightList.concat(res.data.list)
                console.log('rightlist',this.rightList);
                this.rightPageNum++
            }
        })
    }
},
mounted(){
  //“1” 新冠肺炎“2” 慢病
    this.getUserConsultListFun(this.leftPageNum,'1')
    this.getUserConsultListFun(this.rightPageNum,'2')
}

};
</script>

<style scoped lang="less">
.userConsult_container{
    margin-top: -1px;
    .tab_container{
        display: flex;
        height: 0.94rem;
        width: 100%;
        .tab_item{
            background-color: #E7E7E7;
            color: #606060;
            font-size: 0.32rem;
            width: 50%;
            height: 0.94rem;
            display: flex;
            align-items: center;
            position: relative;
            justify-content: center;
            .text{

            }
            img{
                bottom: -0.22rem;
                position: absolute;
                height: 0.4rem;
                width: 0.64rem;
            }
        }
        .active_item{
            color: #ffffff;
            background: url('../../../../assets/imgs/img_wdzx_options_pre.png') no-repeat;
            background-size: 100% 100%;
        }
    }
    .consult_list{
        font-size: 0.28rem;
        .consult_item{
            .consult_time{
                height: 1.04rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #777777;
            }
            .consult_content{
                box-shadow: 0rem 0rem 0.1rem rgba(96, 96, 96, 0.32);
                box-sizing: border-box;
                padding: 0 0.25rem;
                width: 7.01rem;
                margin: 0 auto;
                .top{
                    height: 0.67rem;
                    display: flex;
                    align-items: center;
                    .title{
                        color: #56B2AD;
                        font-weight: 600;
                    }
                    display: flex;
                    .hasReply{
                        margin-left: 2.3rem;
                        align-items: center;
                        display: flex;
                        color: #F48003;
                        img{
                            margin-right: 0.15rem;
                            width: 0.71rem;
                            height: 0.29rem;
                        }
                    }
                    .arrow{
                        margin-left: auto;
                        img{
                            width:0.18rem;
                            height:0.31rem;
                        }
                    }
                }
                .info{
                    color: #767777;
                    font-size: 0.3rem;
                    padding: 0.16rem 0 0.23rem;
                    border-bottom: 1px solid #FCF9FC;
                }
                .rest_times{
                    height: 0.61rem;
                    line-height: 0.61rem;
                    text-align: right;
                    color: #56B2AD;
                }
            }
        }
    }
}
</style>
