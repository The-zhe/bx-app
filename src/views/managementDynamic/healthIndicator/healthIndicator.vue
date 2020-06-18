// 2020/1/8 created by xtt
<template>
  <div class="healthIndicator">
    <div class="h_content" v-for="item in healthIndicatorList">
      <div class="h_content_top">
        <div class="healthIndicator1"><img src="../../../assets/imgs/healthIndicator1.png"></div>
        <div class="h_content_top_text">
          {{item.typeNm}}
          <div class="h_content_top_text_num">{{item.value1}}
          <span class="h_content_top_text_num_span1">bmp</span>
            <span class="h_content_top_text_num_span2">{{item.crtTm | time}}</span>
          </div>
        </div>
        <div class="h_content_top_tip1" v-show="item.statCd==='0'">{{item.statNm}}</div>
        <div class="h_content_top_tip2" v-show="item.statCd==='1'">{{item.statNm}}</div>
      </div>
      <div class="h_contetn_pic" @click="toindicatorInfo">
        <!--<canvas id="myChart"></canvas>-->
      </div>
    </div>
      <div class="h_bottom">
        <div class="h_line"></div>
        <div class="h_btn" @click="toUpload">上传指标</div>
    </div>
    <van-action-sheet
      v-model="showUp"
      :actions="actions"
      cancel-text="取消"
      @cancel="onCancel"
      @select="onselect"
    />
  </div>
</template>

<script>
  import {getHealthIndicator} from '../../../api/index';
  import Vue from 'vue';
  import moment from 'moment';
  Vue.filter('time',function (data,formatString) {
    formatString=formatString||'MM-DD hh:mm';
    return moment(data).format(formatString);
  });
    export default {
        name: "healthIndicator",
      data(){
        return{
          showUp:false,
          actions:[
            { name: '手动上传' },
            { name: '连接设备' },
          ],
          data:[{
            day: '周一',
            value: 300
          }, {
            day: '周二',
            value: 400
          }, {
            day: '周三',
            value: 350
          }, {
            day: '周四',
            value: 500
          }, {
            day: '周五',
            value: 490
          }, {
            day: '周六',
            value: 600
          }, {
            day: '周日',
            value: 900
          }],
          healthIndicatorList:[],
        }
      },
       methods:{
         getInfo(){
           let memberId='4535481258038273';
           getHealthIndicator(memberId).then(res=>{
             this.healthIndicatorList=res.data.list;
             console.log('hhh',res.data.list);
           })
         },
         toindicatorInfo(){
           this.$router_({path:'/indicatorinfo'});
         },
         //出现手动上传，连接设备
         toUpload(){
           this.showUp=true;
         },
         //选择手动上传或连接设备
         onselect(item,index){
           console.log(index);
           if(index===0){
             this.$router_({path:'/upIndicator'});
           }
         },
         onCancel() {
           this.showsheet = false;
         },
        drawChart(){
          // Step 1: 创建 Chart 对象
          const chart = new this.$F2.Chart({
            id: 'myChart',
            pixelRatio: window.devicePixelRatio // 指定分辨率
          });

          // Step 2: 载入数据源
          chart.source(this.data, {
            value: {
              tickCount: 10,
              min: 100
            },
            day: {
              range: [ 0, 1 ]
            }
          });

          // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
          /*chart.interval().position('genre*sold').color('genre');*/

          chart.axis('day', {
            label:null
          });
          chart.axis('value', {
            label:null
          });
          chart.line().position('day*value').color('#3EB4A1');
          chart.point().position('day*value').style({
            fill:'#3EB4A1',
            stroke: '#3EB4A1',
            lineWidth: 1
          });
          // Step 4: 渲染图表
          chart.render();
        },
      },
      mounted() {
        this.getInfo();
        /*this.$nextTick(()=>{
          this.drawChart();
        })*/


      }
    }
</script>

<style scoped lang="less">
 .healthIndicator{
   display: flex;
   flex-direction: column;
   align-items: center;
   //width: 100%;
  // height: 100%;
   #myChart{
     width: 6rem;
     height: 1.8rem;
   }
   .h_content{
     width: 7rem;
     height: 2.2rem;
     background: white;
     border-radius: 0.2rem;
     margin: 0.2rem auto;
     box-shadow: 0 0 0.08rem #bebcbc;
     .h_content_top{
       padding-top: 0.2rem;
       margin: 0 auto;
       width: 6.5rem;
       height: 1rem;
       display: flex;
       justify-content: space-between;
       .healthIndicator1{
         margin-top: 0.15rem;
         margin-left: 0.1rem;
         width: 1rem;
         height: 0.75rem;
         img{
           width: 0.81rem;
           height: 0.71rem;
         }
       }
       .healthIndicator2{
         padding-left: 0.08rem;
         margin-left: 0.1rem;
         margin-top: 0.08rem;
         width: 0.92rem;
         height: 0.75rem;
         img{
           width: 0.38rem;
           height: 0.71rem;
         }
       }
       .healthIndicator3{
         padding-left: 0.15rem;
         margin-left: 0.1rem;
         margin-top: 0.15rem;
         width: 0.85rem;
         height: 0.75rem;
         img{
           width: 0.64rem;
           height: 0.71rem;
         }
       }
       .h_content_top_text{
         width: 4rem;
         height: 0.85rem;
         font-size: 0.28rem;
         color: #606060;
         .h_content_top_text_num{
           font-size: 0.42rem;
           font-weight: bold;
           .h_content_top_text_num_span1{
             font-size: 0.28rem;
             font-weight: normal;
           }
           .h_content_top_text_num_span2{
             font-size: 0.28rem;
             font-weight: normal;
             color: #AFAFAF;
           }
         }
       }
       .h_content_top_tip1{
         margin-top: 0.2rem;
          width: 1rem;
         height: 0.5rem;
         line-height: 0.5rem;
         text-align: center;
         color: #048A83;
         font-size: 0.3rem;
         border: 0.02rem solid #048A83;
         border-radius: 0.5rem;
       }
       .h_content_top_tip2{
         margin-top: 0.2rem;
         width: 1rem;
         height: 0.5rem;
         line-height: 0.5rem;
         text-align: center;
         color: red;
         font-size: 0.3rem;
         border: 0.02rem solid red;
         border-radius: 0.5rem;
       }
     }
     .h_contetn_pic{
       margin: 0 auto;
       width: 7rem;
       height: 1.5rem;
       margin-top: -0.5rem;
       //border: 0.01rem solid black;
     }
   }
   .h_bottom{
     //margin-bottom: 4rem;
     margin-top: auto;
     width: 7rem;
     height: 1rem;
     .h_line{
       width: 7rem;
       height: 0.02rem;
       background: #CDCDCD;
     }
     .h_btn{
       margin: 0.3rem auto 0 auto;
       width: 3rem;
       height: 0.6rem;
       background: #3EB4A1;
       border-radius: 0.6rem;
       color: white;
       font-size: 0.3rem;
       line-height: 0.6rem;
       text-align: center;
     }
   }


 }
</style>
