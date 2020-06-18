// 2020/1/8 created by xtt
<template>
   <div class="managementAdvice">
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
<!--       <div v-if="isselect" class="a_select1">-->
<!--         <div class="onselect" v-for="item in timedata">-->
<!--           <div class="">{{item.name}}</div>-->
<!--         </div>-->
<!--       </div>-->
       <div class="a_more" @click="tomore">查看更多<img src="../../../assets/imgs/btn_da_next.png"></div>
     </div>

    <div class="mine">
      <div class="mine_advice advice_and_devuece" @click="advice">
        <img :src="advice_png" alt="">
        <div class="mine_text">我的建议</div>
      </div>
      <div class="new_devuce advice_and_devuece">
        <img src="../../../assets/imgs/btn_bcjl_add.png" alt="">
        <div class="add_advice" @click="fillProposal">新增建议</div>
      </div>
    </div>

     <div class="a_content">
        <div class="a_advice" v-for="(item,index) in adviceList" :key="index" @click="toadviceInfo(item.id)">
          <!--<div class="a_person">
             <div class="a_photo" v-show="item.catCd==='0'"><img :src="item.imgUrl?item.imgUrl:doctorImg">
              <div class="a_pimg" v-show="item.catCd==='0'">私人医生</div>
              <div class="a_pimg" v-show="item.catCd==='1'">私人护士</div>
              <div class="a_pimg" v-show="item.catCd==='2'">私人管家</div>
            </div>
            <div class="a_photo" v-show="item.catCd==='1'"><img :src="item.imgUrl?item.imgUrl:nurseImg">
              <div class="a_pimg" v-show="item.catCd==='0'">私人医生</div>
              <div class="a_pimg" v-show="item.catCd==='1'">私人护士</div>
              <div class="a_pimg" v-show="item.catCd==='2'">私人管家</div>
            </div>
            <div class="a_photo" v-show="item.catCd==='2'"><img :src="item.imgUrl?item.imgUrl:stewardImg">
              <div class="a_pimg" v-show="item.catCd==='0'">私人医生</div>
              <div class="a_pimg" v-show="item.catCd==='1'">私人护士</div>
              <div class="a_pimg" v-show="item.catCd==='2'">私人管家</div>
            </div> -->
            <!-- <div class="a_photo">
              <div class="a_cattype">私人管家</div>
            </div> -->
            <!-- <div class="a_pinfo">
              {{item.doctorName}}
              <div class="a_prank">{{item.position}}</div>
            </div>
            <div class="a_ptime">
              {{item.crtTm}}
            <div class="a_gt"><img src="../../../assets/imgs/btn_da_next.png"></div>
            </div>
          </div>
          <div class="p_content">
            {{item.msg}}
          </div> -->
          <div class="a_advice_content">
            <div class="a_advice_top">
              <div class="a_type">{{item.type}}</div>
              <div class="a_date">{{item.date}}</div>
            </div>
            <div class="divder"></div>
            <div class="a_advice_middle">
              <div class="a_report">{{item.report}}</div>
              <div class="a_job">{{item.job}}&nbsp;&nbsp;{{item.name}}</div>
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
  import {getAdvicePage} from '../../../api/index';
  import { getHealthAdvice } from '../../../api/apiz'
    export default {
      name: "managementAdvice",
      data(){
          return{
            memberid:'4813385221673984',
            doctorImg:require("../../../assets/imgs/img_yhtd_doctor.png"),
            nurseImg:require("../../../assets/imgs/img_yhtd_nurse.png"),
            stewardImg:require("../../../assets/imgs/img_yhtd_steware.png"),
            ptime:moment().format('YYYY-MM-DD HH:mm'),
            value:'今 日',
            showPicker:false,
            isselect:false,
            timedata:[{
              name:'今 日'
            },{
              name:'近7天'
            },{
              name:'近一个月'
            },{
              name:'近3个月'
            }
            ],
            columns: ['今 日', '近7天', '近一个月', '近三个月'],
            adviceList:[
              {
                type:'管家建议',
                doctorName:'陈某某',
                position:'position',
                crtTm:'crtTm',
                msg:'msg',
                catCd:'2',
                date:'2020-4-28 13:01',
                report:'膳食报告解读',
                name:'张新村',
                job:'健管部',
                details:'Vant 是有赞开源的一套基于 Vue 2.0 的 Mobile 组件库。通过 Vant,可以快速搭建出风格统一的页面,提升开发效率。目前已有近 50 个组件,这些组件被广泛使用于有赞.'
              }
            ],
            advice_png_show: false,
            advice_png: require('../../../assets/imgs/btn_bcjl_pro_nor.png'),
            advice_png_defalut: require('../../../assets/imgs/btn_bcjl_pro_nor.png'),
            advice_png_active: require('../../../assets/imgs/btn_bcjl_pro_pre.png')
          }
      },
      methods:{
        fillProposal(){
          this.$router_({path:'/fillProposal',query:{id:this.memberid}})
        },
        toselect(){
          this.showPicker=true;
        },
        onConfirm(value,index){
          this.value=value;
          this.showPicker = false;
          let setmealId=1;//套餐id
          getAdvicePage(1,4535481258038273,setmealId,index).then(res=>{
            this.adviceList=res.data.data.list;
          })
        },
        //查看更多
        tomore(){
          this.$router_({path:'/adviceHistory'});
        },
        getInfo(){
          let setmealId=1;//套餐id
          getAdvicePage(1,4535481258038273,setmealId,0).then(res=>{
            // this.adviceList=res.data.data.list;
            console.log('advice',res);
          })
        },
        //进入建议详情
        toadviceInfo(id){
          this.$router_({path:'/adviceInfo',query:{id:id}});
        },
        advice(){
          if(this.advice_png_show == false){
            this.advice_png_show = true;
            this.advice_png = this.advice_png_defalut
          }else{
            this.advice_png_show = false;
            this.advice_png = this.advice_png_active
          }
        },
        getAdvice(memberid){
          getHealthAdvice(this.memberid).then(res => {
            console.log('res',res)
          })
        }
      },
      mounted() {
        this.getInfo();
        this.getAdvice();
      }
    }
</script>

<style scoped lang="less">
.managementAdvice{
  // box-shadow:   0 .1rem 12px 0 rgba(0,0,0,1);
  margin-top: .1rem;
  .a_top{
     height: 0.9rem;
     background: white;
     .a_select{
       margin-top: 0.15rem;
       margin-left: 0.25rem;
       float: left;
       width: 2.7rem;
       height: 0.5rem;
       border-radius: 0.6rem;
       border: 0.02rem #40b2a0 solid;
       font-size: 0.3rem;
       color:#40b2a0;
       padding-left: 0.3rem;
       padding-top: 0.1rem;
       display: flex;
       justify-content: space-between;
       .a_triangle{
         margin-top: 0.1rem;
         margin-right: 0.2rem;
         height: 0rem;
         width: 0rem;
         z-index: 1;/*这个与后面的空心三角形有关*/
         border-left: 0.1rem solid transparent;
         border-right: 0.1rem solid transparent;
         border-top: 0.2rem solid #048A83;
       }
     }
     .a_select1{
       margin-left: 0.25rem;
       position: absolute;
       margin-top: 0.8rem;
       width: 2.7rem;
       height: auto;
       border-radius: 0.1rem;
       border-left: 0.01rem #f4f4f4 solid;
       border-right: 0.01rem #f4f4f4 solid;
       border-bottom:0.01rem #f4f4f4 solid;
       font-size: 0.3rem;
       color:#40b2a0;
       padding-left: 0.3rem;
       padding-top: 0.1rem;
       background: white;
       .onselect{
         width: 2rem;
         height: 0.5rem;
         border-top: 0.01rem solid #F4F4F4;
       }
     }
     .a_more{
       margin-top: 0.25rem;
       margin-right: 0.5rem;
       float: right;
       font-size: 0.3rem;
       color: #048A83;
       img{
         margin-left: 0.15rem;
         display: inline-block;
         width: 0.15rem;
         height: 0.27rem;
       }
     }
   }
}
   .mine{
     background-color: #fff;
        display: flex;
       justify-content: space-between;
       font-size: .3rem;
       padding: .35rem;
      .advice_and_devuece{
       display: flex;
       align-items: center;
       img{
         margin-right: .2rem;
         display: inline-block;
         float: left;
       }
     }
     .mine_advice{
       img {
         width: .4rem;
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




// .managementAdvice{
//   width: 100%;
//   height: 100%;
//   background: #f4f4f4;
//   padding-bottom: 0.2rem;
//   .a_top{
//     height: 0.9rem;
//     background: white;
//     .a_select{
//       margin-top: 0.15rem;
//       margin-left: 0.25rem;
//       float: left;
//       width: 2.7rem;
//       height: 0.5rem;
//       border-radius: 0.6rem;
//       border: 0.02rem #40b2a0 solid;
//       font-size: 0.3rem;
//       color:#40b2a0;
//       padding-left: 0.3rem;
//       padding-top: 0.1rem;
//       display: flex;
//       justify-content: space-between;
//       .a_triangle{
//         margin-top: 0.1rem;
//         margin-right: 0.2rem;
//         height: 0rem;
//         width: 0rem;
//         z-index: 1;/*这个与后面的空心三角形有关*/
//         border-left: 0.1rem solid transparent;
//         border-right: 0.1rem solid transparent;
//         border-top: 0.2rem solid #048A83;
//       }
//     }
//     .a_select1{
//       margin-left: 0.25rem;
//       position: absolute;
//       margin-top: 0.8rem;
//       width: 2.7rem;
//       height: auto;
//       border-radius: 0.1rem;
//       border-left: 0.01rem #f4f4f4 solid;
//       border-right: 0.01rem #f4f4f4 solid;
//       border-bottom:0.01rem #f4f4f4 solid;
//       font-size: 0.3rem;
//       color:#40b2a0;
//       padding-left: 0.3rem;
//       padding-top: 0.1rem;
//       background: white;
//       .onselect{
//         width: 2rem;
//         height: 0.5rem;
//         border-top: 0.01rem solid #F4F4F4;
//       }
//     }
//     .a_more{
//       margin-top: 0.25rem;
//       margin-right: 0.5rem;
//       float: right;
//       font-size: 0.3rem;
//       color: #048A83;
//       img{
//         margin-left: 0.15rem;
//         display: inline-block;
//         width: 0.15rem;
//         height: 0.27rem;
//       }
//     }
//   }
//   .a_content{
//     .a_advice{
//       width: 7rem;
//       height: 3rem;
//       margin: 0.2rem auto 0 auto;
//       background: white;
//       border-radius: 0.2rem;
//       box-shadow: 0 0 0.08rem #bebcbc;
//       .a_person{
//         margin: 0 auto;
//         width: 6.4rem;
//         height: 1.7rem;
//         border-bottom: 0.01rem solid #F9F9FA;
//         display: flex;
//         justify-content: space-between;
//         .a_photo{
//           width: 1.3rem;
//           height: 1.2rem;
//           img{
//             margin-top: 0.2rem;
//             width: 1.2rem;
//             height: 1.2rem;
//             border-radius: 0.6rem;
//           }
//           .a_pimg{
//             padding-top: 0.1rem;
//             position: absolute;
//             margin-top: -0.3rem;
//             margin-left: -0.02rem;
//             color: white;
//             font-size: 0.18rem;
//             text-align: center;
//             width: 1.3rem;
//             height: 0.33rem;
//             background: url("../../../assets/imgs/advice2.png");
//             background-size: 1.3rem 0.43rem;
//           }
//         }
//         .a_pinfo{
//           margin-left: 0.2rem;
//           margin-top: 0.5rem;
//           color: #5B5B5B;
//           font-size: 0.3rem;
//           font-weight: bold;
//          width: 2rem;
//          height: 0.8rem;
//           .a_prank{
//             color: #777777;
//             font-weight: normal;
//           }
//        }
//         .a_ptime{
//           margin-top: 0.5rem;
//           color: #777777;
//           font-size: 0.28rem;
//           .a_gt{
//             float: right;
//             margin-top: 0.5rem;
//             img{
//               width: 0.15rem;
//               height: 0.27rem;
//             }
//           }

//         }
//       }
//       .p_content{
//         margin: 0.2rem auto;
//         width: 6.4rem;
//         height: 0.7rem;
//         color: #969696;
//         font-size: 0.28rem;
//         display: -webkit-box;
//         -webkit-box-orient: vertical;
//         -webkit-line-clamp: 2;
//         overflow: hidden;
//         text-overflow: ellipsis;

//       }
//     }
//    }
// }
</style>
