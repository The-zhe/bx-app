<template>
    <div class="slowconsultinfo">
      <div class="filltop">
        咨询详情
      </div>
      <div class="patient_info">
        <div class="avatar">
          <img :src="patientInfo.sex=='男'?manIcon:womenIcon" />
        </div>
        <div class="text">
          <div class="top">
            <div class="name">用户{{patientInfo.phone}}</div>
            <div class="publish_time" v-if="Object.keys(patientInfo).length>0">{{patientInfo.sendDate.slice(0,16)}}</div>
          </div>
          <div class="bottom">
            <div class="sex">{{patientInfo.sex}}</div>
            <div class="age" v-show="!patientInfo.age">不详</div>
            <div class="age" v-show="patientInfo.age">{{patientInfo.age}}岁</div>
            <div class="place">{{patientInfo.proviceNm}}{{patientInfo.cityNm}}</div>
          </div>
        </div>
      </div>
      <div class="form_info">
        <div class="item description">
          <div class="label">病情描述及就诊过程:</div>
          <div class="val">{{patientInfo.illDesc==''?'无':patientInfo.illDesc}}</div>
        </div>
        <div class="item checkReport">
          <div class="label">近期检查报告或其他病历资料:</div>
          <div class="val">
            <span v-if="patientInfo.imgUrl===''">无</span>
            <img v-else />
          </div>
        </div>
        <div class="item process">
          <div class="label">咨询目的:</div>
          <div class="val">{{patientInfo.illPurpose==''?'无':patientInfo.illPurpose}}</div>
        </div>
      </div>
      <div class="fillbtn">
        <div class="fillzx" @click="toahead"></div>
        <div class="fillnext" @click="tonext"></div>
      </div>
    </div>
</template>

<script>
    import {getmbconsultinfo} from "../../../api";

    export default {
        name: "slowconsultinfo",
      data(){
          return{
            patientInfo:{
            },

            manIcon:require('@/assets/imgs/manPatient.png'),
            womenIcon:require('@/assets/imgs/womenPatient.png'),
          }
      },
      methods:{
        toahead(){

        },
        tonext(){

        },
          getinfo(){
            //id long型
            getmbconsultinfo(4817326713246720).then((res)=>{
              this.patientInfo=res.data.data;
               console.log('64645645',res);
            })
          }
      },
      mounted() {
          this.getinfo();
      }
    }
</script>

<style scoped lang="less">
.slowconsultinfo{
  font-size: 0.3rem;
  .filltop{
    height: 0.9rem;
    background: url("../../../assets/imgs/x_filltop.png");
    background-size: 100% 0.9rem;
    font-size: 0.32rem;
    font-weight: bold;
    color: white;
    line-height: 0.9rem;
    text-align: center;
  }
  .patient_info{
    width: 7rem;
    margin: 0.24rem auto;
    height: 1.52rem;
    display: flex;
    align-items: center;
    box-shadow: 0 0 0.1rem #dddddd;
    .avatar{
      margin: 0 0.28rem 0 0.33rem;
      img{
        width: 0.9rem;
        height: 0.9rem;
      }
    }
    .text{
      color: #717071;
      //color: #56B2AD;
      font-size: 0.3rem;
      .top{
        display: flex;
        align-items: center;
        .name{

        }
        .publish_time{
          margin-left: 0.7rem;
          font-size: 0.26rem;
          color: #999999;
        }
      }
      .bottom{
        display: flex;
        margin-top: 0.15rem;
        .sex{

        }
        .age{
          margin-left: 0.49rem;
          margin-right: 0.57rem;
        }
        .place{

        }
      }
    }
  }
  .form_info{
    padding-bottom: 0.15rem;
    box-shadow: 0 0 0.1rem #dddddd;
    width: 7rem;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 0.25rem;
    .item{
      padding: 0.3rem 0.12rem 0.3rem 0.14rem;
      //display: flex;
      border-bottom: 0.02rem solid #FAF7FA;
      .label{
        color: #777777;
        font-size: 0.3rem;
        font-weight: bold;
      }
      .val{
       // flex: 1;
        margin-top: 0.3rem;
        font-size: 0.28rem;
        color: #717071;
        .symptom_item{
          display: flex;
          .symptom_label{

          }
          .symptom_date{
            margin-left: auto;
          }
          &:not(:first-child){
            margin-top: 0.15rem;
          }
        }
      }
    }
    .recentSituation{
      display: block !important;
      .val{
        margin-top: 0.14rem;
        .top{

        }
        .bottom{
          margin-top: 0.1rem;
        }
      }
    }
  }
  .fillbtn{
    position: fixed;
    bottom: 6%;
    width: 6.5rem;
    height: 0.7rem;
    display: flex;
    justify-content: space-between;
    // margin: 0.3rem auto 0;
    left: 50%;
    margin-left:-3.25rem;
    .fillzx{
      width: 3.1rem;
      height: 0.72rem;
      background: url("../../../assets/imgs/x_fh2.png");
      background-size: 3.1rem 0.72rem;
    }
    .fillnext{
      width: 3.1rem;
      height: 0.72rem;
      background: url("../../../assets/imgs/x_consultljhf.png");
      background-size: 3.1rem 0.72rem;
    }
  }
}
</style>
