// 2020/1/8 created by xtt
<template>
    <!-- <div class="pharmacyInfo">
      <div class="p_line">
       <div class="p_line_top">
         <div class="p_line_top_medicine">
           <div class="p_line_top_medicine_triangle"></div>
         </div>
         <div class="p_line_top_line"></div>
         <div class="p_line_top_time">
           <div class="p_line_top_time_triangle"></div>
         </div>
       </div>
      </div>
      <div class="p_info">
       <div class="p_info_top">
         <div class="p_info_top_left">
           <div class="p_info_top_left_bold">最近用药<img src="../../../assets/imgs/pharmacy1.png"></div>
           <div class="p_info_top_left_small">{{recentInfo.doctorName}}  {{recentInfo.title}} {{recentInfo.crtTm}}</div>
         </div>
         <div class="p_info_top_right" @click="toAdjust">调整</div>
       </div>
        <div class="p_info_content">
         <div class="p_info_content_div">药品名称： {{medicalInfo.medName}} <div class="p_info_content_div_circle"></div></div>
          <div class="p_info_content_div">药品规格： {{medicalInfo.medSpec}}</div>
          <div class="p_info_content_div1">用&emsp;&emsp;法：  {{medicalInfo.medUse}}，{{medicalInfo.phrUnit}}，{{medicalInfo.medMode}}</div>
        </div>
        <div class="p_info_btn" @click="toHistoryList">历史用药</div>
      </div>
      <div class="p_advice">
        <div class="p_advice_title">管理建议：</div>
        <div class="p_advice_info">
          &emsp;&emsp;{{recentInfo.msg}}
        </div>
      </div>
    </div> -->
    
    <div class="pharmacyInfo">
      <div class="medication" style="box-shadow: 0 0.1rem 12px 0 #000000;margin-top: .1rem;">
        <div class="mine">
          <div class="mine_advice advice_and_devuece" @click="advice">
            <img src="advice_png" alt="">
            <div class="mine_text">药品查询</div>
          </div>
          <div class="new_devuce advice_and_devuece">
            <img src="../../../assets/imgs/btn_bcjl_add.png" alt="">
            <div class="add_advice">历史修改</div>
          </div>
        </div>
        <div class="medication_main">
          <div class="recently">
            <div class="recently_title">
              <div class="recently_main">
                <div class="text">最近用药</div>
                <div class="date">2020/4/28 17:54</div>
              </div>
              <div class="change">修改</div>
            </div>
            <div class="divder"></div>
            <div class="xunhuan" v-for="(item,index) in recentInfo" :key="index">
              <div class="medica">
                <div class="medica_name">药品名称:{{item.medName}}</div>
                <div class="medica_img"></div>
              </div>
              <div class="divder_l"></div>
              <div class="medica" >
                <div class="medica_name" style="font-weight:400;">药品规格:{{item.medSpec}}</div>
                <div class="medica_img"></div>
              </div>
              <div class="divder_l"></div>
              <div class="medica" >
                <div class="medica_name" style="font-weight:400;">用法:{{item.medUse}}</div>
                <div class="medica_img"></div>
              </div>
              <div class="divder"></div>
            </div>
          </div>

          <div class="jilu">
              <div class="medica">
                <div class="medica_name">修改记录</div>
                <div class="medica_doctro">医生名</div>
              </div>
              <div class="divder"></div>
              <div class="medica" >
                <div class="medica_name" style="font-weight:400;">新增</div>
                <div class="medica_img"></div>
              </div>
              <div class="divder"></div>
              <div class="medica" >
                <div class="medica_name" style="font-weight:400;">修改</div>
                <div class="medica_img"></div>
              </div>
              <div class="divder"></div>
              <div class="medica" >
                <div class="medica_name" style="font-weight:400;">停用</div>
                <div class="medica_img"></div>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {getRecentMedical,getUserMedical} from '../../../api/index';
    export default {
        name: "pharmacyInfo",
      data(){
          return{
             msg:'',  //管理建议
             recentInfo:[],
            medicalInfo:{

            },
            doctorName:'',
            medId:'',
            medMode:'',
            medName:'',
            medSpec:'',
            medUse:'',
            //  onePhr: '',
            //  phrUnit: "",
          }
      },
      methods:{
          getInfo(){
            let userId='4841561225810944';
            getRecentMedical(userId).then(res=>{
               this.recentInfo=res.data.data.hjjkMedDynamicsDtoList;
               console.log('resentMM',res.data.data.hjjkMedDynamicsDtoList);
               this.medId = this.recentInfo.medId;
               this.medMode = this.recentInfo.medMode;
               this.medName =this.recentInfo.medName;
               this.medSpec = this.recentInfo.medSpec;
               this.medUse = this.recentInfo.medUse;
              //  this.medicalInfo=res.data.list[0].medDynamicsDtoList[0];
               console.log('medMode',this.medMode)
            });
            // getUserMedical(userId).then(res=>{
            //    console.log('userMedical',res);
            // });
          },
         toAdjust(){
           this.$router_({path:'/adjustmedical'});
         },
        toHistoryList(){
          this.$router_({path:'/pharmacyhistory'});
        },
        advice(){
          console.log('1');
        },
      },
      mounted() {
          this.getInfo();
          // this.getuserid()
      }
    }
</script>

<style scoped lang="less">
.pharmacyInfo{
  // padding: .1rem;
  background: #ffffff;
  box-shadow: 0 0.1rem 12px 0 #000000;
  margin-top: 0.1rem;
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
  .medication_main{
    padding: .1rem;
    .recently{
      display: flex;
      flex-direction: column;
      font-size:.3rem;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(93,93,93,1);
      box-shadow: 0 0 0.08rem #bebcbc;
      .recently_title{
        display: flex;
        flex-direction: row;
        width: 6.5rem;
        margin: 0 auto;
        padding: .2rem;
        justify-content: space-between;
        .recently_main{
          display: flex;
          flex-direction: column;
          .text{
            font-weight: bold;
            margin-bottom: .2rem;
          }
          .date{
            margin-bottom: .2rem;
          }
        }
        .change{
          color: #00A99D;
        }
      }
      .divder{
          height: 0.01rem;
          margin:0rem 0.2rem 0.2rem 0.2rem;
          background-color: rgba(93,93,93,.2);
      }
      .xunhuan{
        .medica{
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        padding: .2rem;
        font-weight:400;
        color:rgba(93,93,93,1);
        margin-left: .2rem;
        .medica_name{
          font-weight:bold;
          .divder{
            height: 0.01rem;
            margin:0rem 0.2rem 0.2rem 0.2rem;
            background-color: rgba(93,93,93,.2);
            }
          }
        }
        
            .divder_l{
            height: 0.01rem;
            margin:0rem 0.2rem 0.2rem 0.2rem;
            background-color: rgba(93,93,93,.1);
            }
      }
      
    }
  }

  .jilu{
    margin-top: .3rem;
    font-size: .3rem;
    box-shadow: 0 0 0.08rem #bebcbc;
        .medica{
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        padding: .2rem;
        font-weight:400;
        color:rgba(93,93,93,1);
        margin-left: .2rem;
        .medica_name{
          font-weight:bold;
          .divder{
            height: 0.01rem;
            margin:0rem 0.2rem 0.2rem 0.2rem;
            background-color: rgba(93,93,93,.2);
            }
          }
        }
      }
      
}




  //  .pharmacyInfo{
  //    width: 100%;
  //    height: 100%;
  //    background: #F4F4F4;
  //    padding-bottom: 0.2rem;
  //    .p_line{
  //      margin: 0.2rem auto 0 auto;
  //       width: 7rem;
  //      height: 3.75rem;
  //      background: white;
  //      border-radius: 0.2rem;
  //      box-shadow: 0 0 0.08rem #bebcbc;
  //      .p_line_top{
  //        margin: 0 auto;
  //        padding-top: 0.2rem;
  //        width: 6.7rem;
  //        height: 0.8rem;
  //        border-bottom: 0.01rem solid #DFDFDF;
  //        display: flex;
  //        justify-content: space-between;

  //        .p_line_top_medicine{
  //          width: 3.9rem;
  //          height: 0.53rem;
  //          border-radius:0.2rem;
  //          border: 0.03rem solid #40b2a0;
  //          .p_line_top_medicine_triangle{
  //            margin-top: 0.2rem;
  //            height: 0rem;
  //            width: 0rem;
  //            z-index: 1;/*这个与后面的空心三角形有关*/
  //            border-left: 0.1rem solid transparent;
  //            border-right: 0.1rem solid transparent;
  //            border-top: 0.2rem solid #048A83;
  //          }
  //        }
  //        .p_line_top_line{
  //          width:0.02rem;
  //          height:0.53rem;
  //          background: #D0D0D0;
  //        }
  //        .p_line_top_time{
  //          width: 1.65rem;
  //          height: 0.53rem;
  //          border-radius: 0.2rem;
  //          border: 0.03rem solid #40b2a0;
  //          .p_line_top_time_triangle{
  //            margin-top: 0.2rem;
  //            height: 0rem;
  //            width: 0rem;
  //            z-index: 1;/*这个与后面的空心三角形有关*/
  //            border-left: 0.1rem solid transparent;
  //            border-right: 0.1rem solid transparent;
  //            border-top: 0.2rem solid #048A83;
  //          }
  //        }
  //      }
  //    }
  //    .p_info{
  //      margin: 0.2rem auto 0 auto;
  //       width: 7rem;
  //      height: auto;
  //      padding-bottom: 0.2rem;
  //      background: white;
  //      border-radius: 0.2rem;
  //      box-shadow: 0 0 0.08rem #bebcbc;
  //      .p_info_top{
  //        width: 6.6rem;
  //        height: 1.1rem;
  //        border-bottom: 0.01rem solid #DFDFDF;
  //        margin: 0 auto;
  //        display: flex;
  //        justify-content: space-between;
  //        .p_info_top_left{
  //          margin-top: 0.2rem;
  //            width: 4.8rem;
  //            height: 0.8rem;
  //          .p_info_top_left_bold{
  //            color: #606060;
  //            font-size: 0.28rem;
  //            font-weight: bold;
  //            width: 1.5rem;
  //             display: flex;
  //            justify-content: space-between;
  //            img{
  //              margin-top: 0.05rem;
  //              width: 0.27rem;
  //              height: 0.27rem;
  //            }
  //          }
  //          .p_info_top_left_small{
  //            color: #969696;
  //            font-size: 0.26rem;
  //          }

  //        }
  //        .p_info_top_right{
  //          margin-top: 0.2rem;
  //          text-align: center;
  //          line-height: 0.6rem;
  //          color: white;
  //          font-size: 0.3rem;
  //          width: 1.4rem;
  //          height: 0.6rem;
  //          background: #3EB4A1;
  //          border-radius: 0.1rem;
  //        }
  //      }
  //      .p_info_content{
  //        width: 6.6rem;
  //        height: 2.4rem;
  //        border: 0.01rem solid #DFDFDF;
  //        margin: 0.2rem auto 0 auto;
  //        .p_info_content_div{
  //          color: #777777;
  //          font-size: 0.28rem;
  //          margin: 0.2rem auto;
  //          width: 6.25rem;
  //          height: 0.6rem;
  //          border-bottom: 0.01rem dashed #DADADA;
  //          display: flex;
  //          justify-content: space-between;
  //          .p_info_content_div_circle{
  //            width: 0.15rem;
  //            height: 0.15rem;
  //            background: #F48100;
  //            border-radius: 0.15rem;
  //          }
  //        }
  //        .p_info_content_div1{
  //          color: #777777;
  //          font-size: 0.28rem;
  //          margin: 0 auto;
  //          width: 6.25rem;
  //          height: 0.7rem;
  //        }
  //      }
  //      .p_info_btn{
  //        text-align: center;
  //        line-height: 0.6rem;
  //        font-size: 0.3rem;
  //        color: #3EB4A1;
  //        width: 3rem;
  //        height: 0.6rem;
  //        border-radius: 0.3rem;
  //        border: 0.02rem solid #3EB4A1;
  //        margin: 0.2rem auto 0 auto;
  //      }
  //    }
  //    .p_advice{
  //      padding-bottom: 0.1rem;
  //      margin: 0.2rem auto 0 auto;
  //      width: 7rem;
  //      height: auto;
  //      background: white;
  //      border-radius: 0.2rem;
  //      box-shadow: 0 0 0.08rem #bebcbc;
  //      .p_advice_title{
  //        padding-top: 0.2rem;
  //        margin: 0 auto;
  //        width: 6.6rem;
  //        height: 0.4rem;
  //        color: #606060;
  //        font-size: 0.28rem;
  //      }
  //      .p_advice_info{
  //        line-height: 0.45rem;
  //        width: 6.6rem;
  //        height: auto;
  //        margin: 0.1rem auto;
  //        color: #969696;
  //        font-size: 0.26rem;
  //      }
  //    }
  //  }
</style>
