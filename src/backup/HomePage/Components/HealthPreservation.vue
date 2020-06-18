<template>
  <!-- 非会员首页健康养生 -->
  <div class="HealthPreservation_container">
    <div class="information_list_container">
      <div class="info_item" :key="index" v-for="(item,index) in informationList">
        <div class="info_img">
          <img :src="item.hjjkHealthPreservationVo.imgUrl" />
        </div>
        <div class="info_text">
          <div class="info_title">{{item.hjjkHealthPreservationVo.title}}</div>
          <div class="info_bottom">
            <div class="info_publishTime">{{item.hjjkHealthPreservationVo.crtTm|fromNowTime}}</div>
            <div class="info_checkNum">
                <div class="check_icon">
                    <img src="../../../assets/imgs/check_icon.png" />
                </div>
                <div class="check_text">
                    {{item.hjjkHealthPreservationVo.commentNum}}
                </div>
                
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModuleTitle from "../../../components/ModuleTitle";
import moment from 'moment';
export default {
  name: "HealthPreservation",
  props:['informationList'],
  components: { ModuleTitle },
  filters:{
    fromNowTime:function(value){
      let array = moment(value).fromNow().split(" ")
      array[0]=array[0]=='a'?"1":array[0]=='an'?"1":array[0]+''
      let EN=['minute','minutes','hour','hours','day','days','month','months','year','years']
      let CN=['分钟','小时','天','个月','年']
      array[1]=CN[parseInt(EN.indexOf(array[1])/2)]
      return array.length==4?'几秒前':new Array(array[0],array[1]).join('')+'前'
    }
  },
  data() {
    return {
    };
  },
  methods: {},
  mounted(){
  }
};
</script>

<style scoped lang="less">
@import "../../../../static/lessfunc.less";
.healthInfo_container {
  .title_container {
    .bb();
    .pdt(48px);
    .h(160px);
  }
  .information_list_container {
    .info_item {
      .info_text {
        .ptr();
        .bb();
        .pd(30px,25px,40px,30px);
        .info_ditle {
          .fs(30px);
          .fc(#3d3d3d);
        }
        .info_bottom {
          display: flex;
          justify-content: space-between;
          .fs(24px);
          .fc(#828282);
          .mgt(24px);

          .info_checkNum {
              .flex_y_center();
              .check_icon{
                  .mgr(9px);
                  img{
                      .w(30px);
                      .h(20px);
                  }
              }
          }
        }
        &::after{
            .pta();
            content: "";
            .w(700px);
            .h(1PX);
            bottom: 0;
            .bgc(rgb(234,234,234));
        }
      }
      .info_img {
          img {
            .h(350px);
            .w(750px);
          }
      }
      &:not(:first-child) {
        .pdr(25px);
        .flex_y_center();
        flex-direction: row-reverse;
        .info_text {
          .w(505px);
          .info_title {
            .fs(30px);
          }
          .info_bottom {
            .mgt(39px);
          }
        }
        .info_img {
                img {
          .h(146px);
          .w(220px);
        }

        }
      }
    }
  }
  .check_more_container {
    .h(90px);
    .fc(#40b2a0);
    .fs(28px);
    .flex_y_center();
    .bb();
    flex-direction: row-reverse;
    .check_more_icon {
        .mgl(14px);
        .mgr(33px);
      img {
        .w(25px);
        .h(25px);
      }
    }
  }
}
</style>