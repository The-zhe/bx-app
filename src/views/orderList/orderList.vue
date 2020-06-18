// 2020/1/17 created by xtt
<template>
    <div class="orderList">
       <div class="o_top" >
         <div :class="index===selectIndex?'o_top_text_select':'o_top_text'" v-for="(item,index) in titlebar" @click="toSelect(index)">{{item.name}}</div>
       </div>
      <div v-show="selectIndex===0">
       <div class="o_content" v-for="item in orderlist">
         <div class="o_content_title">
           <div class="o_content_title_info">
           <div class="o_content_title_img"></div>
           <div class="o_content_title_text">{{item.catNm}}</div>
           <div class="o_content_title_right"></div>
           </div>
           <div class="o_content_title_tip" v-show="item.statCd==='60000.170.100'?true:false">等待审核中</div>
         </div>
         <div class="o_content_info">
           <div class="o_content_info_img"></div>
           <div class="o_content_info_name">
             <div class="o_content_info_h">{{item.name}}</div>
             <div class="o_coontent_info_n">{{item.subtitle}}</div>
             <div class="o_content_info_m">合计 <span style="color:#F48100;">{{item.totalMoney}}</span>  元</div>
           </div>
         </div>
         <div class="o_content_info_btn">
           <div class="o_content_info_cancel" @click="toCancel">取消</div>
           <div class="o_content_info_watch" @click="togetInfo">查看详情</div>
         </div>
       </div>
      </div>
      <div v-show="selectIndex===1">
      <div class="o_content" v-for="item in orderlist">
        <div class="o_content_title">
          <div class="o_content_title_info">
            <div class="o_content_title_img"></div>
            <div class="o_content_title_text">{{item.catNm}}</div>
            <div class="o_content_title_right"></div>
          </div>
          <div class="o_content_title_tip">等待审核中</div>
        </div>
        <div class="o_content_info">
          <div class="o_content_info_img"></div>
          <div class="o_content_info_name">
            <div class="o_content_info_h">{{item.name}}</div>
            <div class="o_coontent_info_n">{{item.subtitle}}</div>
            <div class="o_content_info_m">合计 <span style="color:#F48100;">{{item.totalMoney}}</span>  元</div>
          </div>
        </div>
        <div class="o_content_info_btn">
          <div class="o_content_info_cancel" @click="toCancel">取消</div>
          <div class="o_content_info_watch" @click="togetInfo">查看详情</div>
        </div>
      </div>
      </div>
      <div v-show="selectIndex===2">
      <div class="o_content" v-for="item in orderlist">
        <div class="o_content_title">
          <div class="o_content_title_info">
            <div class="o_content_title_img"></div>
            <div class="o_content_title_text">{{item.catNm}}</div>
            <div class="o_content_title_right"></div>
          </div>
         <!-- <div class="o_content_title_tip">等待审核中</div>-->
        </div>
        <div class="o_content_info">
          <div class="o_content_info_img"></div>
          <div class="o_content_info_name">
            <div class="o_content_info_h">{{item.name}}</div>
            <div class="o_coontent_info_n">{{item.subtitle}}</div>
            <div class="o_content_info_m">合计 <span style="color:#F48100;">{{item.totalMoney}}</span>  元</div>
          </div>
        </div>
        <div class="o_content_info_btn">
          <div class="o_content_info_watch" @click="togetInfo">查看详情</div>
          <div class="o_content_info_pay" @click="topay">付款</div>
        </div>
      </div>
      </div>
      <div v-show="selectIndex===3">
      <div class="o_content" v-for="item in orderlist">
        <div class="o_content_title">
          <div class="o_content_title_info">
            <div class="o_content_title_img"></div>
            <div class="o_content_title_text">{{item.catNm}}</div>
            <div class="o_content_title_right"></div>
          </div>
         <!-- <div class="o_content_title_tip">等待审核中</div>-->
        </div>
        <div class="o_content_info">
          <div class="o_content_info_img"></div>
          <div class="o_content_info_name">
            <div class="o_content_info_h">{{item.name}}</div>
            <div class="o_coontent_info_n">{{item.subtitle}}</div>
            <div class="o_content_info_m">合计 <span style="color:#F48100;">{{item.totalMoney}}</span>  元</div>
          </div>
        </div>
        <div class="o_content_info_btn">
          <div class="o_content_info_cancel" @click="todelete">删除</div>
          <div class="o_content_info_watch" @click="togetInfo">查看详情</div>
        </div>
      </div>
      </div>
      <van-dialog
        v-model="cancelShow"
        :show-confirm-button="false"
      >
        <div class="o_pop_title" >取消订单</div><div class="o_pop_x" @click="toExit"><img src="../../assets/imgs/management_x.png"></div>
        <div class="o_pop_reason">
          <input placeholder="选择取消原因"/>
          <div class="o_pop_right"></div>
        </div>
        <div class="o_pop_info">
          <textarea placeholder="请补充详细信息以便更快帮您处理（选填）"></textarea>
        </div>
        <div class="o_pop_btn">确认提交</div>
      </van-dialog>
    </div>
</template>

<script>
  import {getOrderList} from '../../api/index'
    export default {
        name: "orderList",
        data(){
          return{
            cancelShow:false,
            titlebar:[
              {name:'全部'},
              {name:'待审核'},
              {name:'待付款'},
              {name:'已完成'},],
            selectIndex:0,
            orderlist:[],
            token:'13333'
          }
        },
      methods:{
        getnativeSelect() {
          this.$bridge.registerHandler("nativeSelect", (data, responseCallback) => {
            console.log('原生传过来的', data);
            this.selectIndex = parseInt(data);
            this.getinfoLsit();
          })
        },
       /* getnativeToken(){
           this.$bridge.callHandler("getToken", "", (res) => {
              this.token=res;
             sessionStorage.setItem('_token',res);
            });
        },*/
        getinfoLsit(){
          let userId='4754953811874816';
          if(this.selectIndex===0){
            getOrderList('0').then((res)=>{
              this.orderlist=res.data.list;
              console.log('order',res.data.list);
            })
          }else if(this.selectIndex===1){
            getOrderList('0','60000.170.100').then((res)=>{
              this.orderlist=res.data.list;
            })
          }else if(this.selectIndex===2){
            getOrderList('0','60000.170.110').then((res)=>{
              this.orderlist=res.data.list;
            })
          }else if(this.selectIndex===3) {
            getOrderList('0', '60000.170.140').then((res) => {
              this.orderlist = res.data.list;
            })
          }
        },
        toSelect(index){
          console.log('oiii',index);
           this.selectIndex=index;
           this.getinfoLsit();
        },
        toCancel(){
          this.cancelShow=true;
        },
        //删除
        todelete(){

        },
        toExit(){
          this.cancelShow=false;
        },
        togetInfo(){
          this.$router_({path:'/orderinfo'});
        },
        topay(){
          this.$router_({path:'/testChart'});
        }
      },
      mounted() {
        this.getnativeSelect()
        this.getinfoLsit()
      }
    }
</script>
<style>
  @import url('../../assets/less/vantstyle/dialog.css');
  @import url('../../assets/less/vantstyle/button.css');
</style>
<style scoped lang="less">
.orderList{
  width: 100%;
  .o_top{
    height: 1.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .o_top_text{
      color: #5E656D;
      font-size: 0.3rem;
    }
    .o_top_text_select{
      font-weight: bold;
      height: 0.4rem;
      color: #048A83;
      font-size: 0.3rem;
      border-bottom: 0.05rem solid #048A83;
    }
   }
  .o_content{
    margin: 0.2rem auto;
    width: 7rem;
    height: 3.45rem;
    background: white;
    border-radius: 0.2rem;
    box-shadow: 0 0 0.2rem #bebcbc;
    .o_content_title{
      padding-top: 0.3rem;
      margin-left: 0.3rem;
      width: 6.45rem;
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      .o_content_title_info{
        width: 2.4rem;
        height: 0.5rem;
        display: flex;
        justify-content: flex-start;
        .o_content_title_img{
          width: 0.5rem;
          height: 0.5rem;
          background: #40b2a0;
        }
        .o_content_title_text{
          margin-left: 0.2rem;
          width: 1.25rem;
          height: 0.3rem;
          font-size: 0.3rem;
          color: #606060;
          font-weight: bold;
        }
        .o_content_title_right{
          margin-top: 0.1rem;
          margin-left: 0.2rem;
          width: 0.18rem;
          height: 0.27rem;
          background: url("../../assets/imgs/btn_da_next.png");
          background-size: 0.18rem 0.27rem;
        }
      }
      .o_content_title_tip{
        width: 1.43rem;
        height: 0.3rem;
        color: #048A83;
        font-size: 0.28rem;
      }

    }
    .o_content_info{
      margin: 0.2rem auto;
      width: 6.45rem;
      height: 1.45rem;
      display: flex;
      justify-content: flex-start;
      .o_content_info_img{
        width: 1.4rem;
        height: 1.4rem;
        background: #40b2a0;
        border-radius: 0.1rem;
      }
      .o_content_info_name{
        width: 4.8rem;
        height: 1.4rem;
        font-size: 0.28rem;
        color: #606060;
        margin-left: 0.2rem;
        .o_content_info_h{
          width: 2rem;
          height: 0.3rem;
        }
        .o_coontent_info_n{
          margin-top: 0.24rem;
          width: 4.1rem;
          height: 0.3rem;
        }
        .o_content_info_m{
          margin-top: 0.22rem;
          margin-left: 2.8rem;
          width: 1.92rem;
          height: 0.27rem;
        }
      }
    }
    .o_content_info_btn{
      width: 3.12rem;
      height: 0.58rem;
      margin-left: 3.5rem;
      color: #606060;
      font-size: 0.28rem;
      display: flex;
      justify-content: space-between;
      .o_content_info_cancel{
        text-align: center;
        line-height: 0.53rem;
        width: 1.23rem;
        height: 0.53rem;
        border-radius: 0.3rem;
        border: 0.02rem solid #C5C5C5;
      }
      .o_content_info_watch{
        text-align: center;
        line-height: 0.53rem;
        width: 1.63rem;
        height: 0.53rem;
        border-radius: 0.3rem;
        border: 0.02rem solid #C5C5C5;
      }
      .o_content_info_pay{
        text-align: center;
        line-height: 0.53rem;
        color:white;
        width: 1.2rem;
        height: 0.53rem;
        border-radius: 0.3rem;
        background-color: #3EB4A1;
      }
    }
  }
  .o_pop_title{
    margin: 0.6rem auto;
    width: 1.5rem;
    height: 0.34rem;
    font-size: 0.36rem;
    color: #7C7C7C;
    font-weight: bold;
  }
  .o_pop_x{
    position: absolute;
    top: 0.6rem;
    right: 0.4rem;
    width: 0.22rem;
    height: 0.22rem;
    img{
      width: 0.22rem;
      height: 0.22rem;
    }
  }
  .o_pop_reason{
    width: 5.25rem;
    height: 0.6rem;
    margin: 0.2rem auto;
    border-bottom: 0.02rem solid #DFDFDF;
    display: flex;
    justify-content: space-between;
    input{
      width: 3.8rem;
      height: 0.4rem;
      font-size: 0.3rem;
      color: #777777;
    }
    .o_pop_right{
      width: 0.15rem;
      height: 0.26rem;
      background: url("../../assets/imgs/btn_da_next.png");
      background-size: 0.15rem 0.26rem;
    }
  }
  .o_pop_info{
    margin: 0.2rem auto;
    width: 5.2rem;
    height: 3rem;
    border: 0.01rem solid #DFDFDF;
    font-size: 0.26rem;
    color: #B2B2B2;
    .textarea{

    }
  }
  .o_pop_btn{
    margin: 1rem auto 0.3rem auto;
    width: 5rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-align: center;
    color: white;
    background: #3EB4A1;
    border-radius: 0.5rem;
  }
}
</style>
