<template>
    <div class="formConsultDetail_container">
        <div class="patient_info">
            <div class="avatar">
                <img :src="patientInfo.sex=='男'?manIcon:womenIcon" />
            </div>
            <div class="text">
                <div class="top">
                    <div class="name">用户{{patientInfo.phone}}</div>
                    <div class="publish_time" v-if="Object.keys(patientInfo).length>0">{{patientInfo.crtTm.slice(0,16)}}</div>
                </div>
                <div class="bottom">
                    <div class="sex">{{patientInfo.sex}}</div>
                  <div class="age" v-show="!patientInfo.age">不详</div>
                    <div class="age" v-show="patientInfo.age">{{patientInfo.age}}岁</div>
                    <div class="place">{{patientInfo.proviceNm}}{{patientInfo.cityNm}}</div>
                </div>
            </div>
        </div>
        <div class="form_tabs">
          <div class="form_tab" v-for="(item,index) in tabsList" @click="toTabs(index)">
            <img :src="activeIndex===index?item.activeimg:item.img"/>
          </div>
        </div>
        <div class="form_info">
            <div class="item symptom">
                <div class="label">症&emsp;&emsp;状：</div>
                <div class="val">
                    <div class="symptom_item" v-if="JSON.parse(patientInfo.symOptionsFr)">
                        <div class="symptom_label">发热  {{patientInfo.temp}}℃</div>
                        <div class="symptom_date">{{patientInfo.symOptionsFrTime}}起</div>
                    </div>
                    <div class="symptom_item" v-if="JSON.parse(patientInfo.symOptionsKs)">
                        <div class="symptom_label">咳嗽</div>
                        <div class="symptom_date">{{patientInfo.symOptionsKsTime}}起</div>
                    </div>
                    <div class="symptom_item" v-if="JSON.parse(patientInfo.symOptionsXmqj)">
                        <div class="symptom_label">胸闷气急</div>
                        <div class="symptom_date">{{patientInfo.symOptionsXmqjTime}}起</div>
                    </div>
                    <div class="symptom_item" v-if="JSON.parse(patientInfo.symOptionsFlst)">
                        <div class="symptom_label">乏力、肌肉酸痛</div>
                        <div class="symptom_date">{{patientInfo.symOptionsFlstTime}}起</div>
                    </div>
                    <div class="symptom_item" v-if="JSON.parse(patientInfo.symOptionsFx)">
                        <div class="symptom_label">腹泻</div>
                        <div class="symptom_date">{{patientInfo.symOptionsFxTime}}起</div>
                    </div>
                    <div class="symptom_item" v-if="JSON.parse(patientInfo.symOptionsExot)">
                        <div class="symptom_label">恶心、呕吐</div>
                        <div class="symptom_date">{{patientInfo.symOptionsExotTime}}起</div>
                    </div>
                    <div class="symptom_item" v-if="!(JSON.parse(patientInfo.symOptionsFr)||JSON.parse(patientInfo.symOptionsKs)||JSON.parse(patientInfo.symOptionsXmqj)||JSON.parse(patientInfo.symOptionsFlst)||JSON.parse(patientInfo.symOptionsFx)||JSON.parse(patientInfo.symOptionsExot))">
                        <div class="symptom_label">无</div>
                    </div>
                </div>
            </div>
            <div class="item description">
                <div class="label">病情描述：</div>
                <div class="val">{{patientInfo.illnessDesc==''?'无':patientInfo.illnessDesc}}</div>
            </div>
            <div class="item medicalHistory">
                <div class="label">其他病史：</div>
                <div class="val">{{patientInfo.pastHistory==''?'无':patientInfo.pastHistory}}</div>
            </div>
            <div class="item process">
                <div class="label">就诊过程：</div>
                <div class="val">{{patientInfo.visitingProcess==''?'无':patientInfo.visitingProcess}}</div>
            </div>
            <div class="item checkReport">
                <div class="label">检查报告及其他资料：</div>
                <div class="val">
                    <span v-if="patientInfo.reportImg===''">无</span>
                    <img v-else />
                </div>
            </div>
            <div class="item recentSituation">
                <div class="label">近一个月有以下情况：</div>
                <div class="val" v-if="Boolean(Number(patientInfo.fkxxOptionsA))">
                    <div class="top" v-if="Object.keys(patientInfo).length>0"   >
                      1.去过{{patientInfo.tripProviceNm}}{{patientInfo.tripCityNm}}&emsp;&emsp;<span style="color: #f48003">{{patientInfo.tripStartTime.slice(5,10)}}一一{{patientInfo.tripEndTime.slice(5,10)}}</span>
                    </div>
                    <div class="bottom">
                        {{patientInfo.tripDesc}}
                    </div>
                </div>
                <div class="val" v-else>
                    无
                </div>
            </div>
        </div>

      <div class="fillbtnback">
        <div class="fillbtn">
          <div class="fillzx" @click="toback"></div>
          <div class="fillnext" @click="toresponse" v-show="isDoctor"></div>
        </div>
      </div>
    </div>
</template>

<script>
import {getFormConsultDetail} from '../../../api/apiz'
import {getChangeState, getReturnState} from "../../../api";
export default {
name:"formConsultDetail",
data(){
    return{
        id:0,
        patientInfo:{
        },

        manIcon:require('@/assets/imgs/manPatient.png'),
        womenIcon:require('@/assets/imgs/womenPatient.png'),
        doctorId:Number(localStorage.getItem('doctorId')),
        tabsList:[
          {
            img:require('../../../assets/imgs/btn_zxxq_blzl_nor.png'),
            activeimg:require('../../../assets/imgs/btn_zxxq_blzl_pre.png')
          },
          {
            img:require('../../../assets/imgs/btn_zxxq_zxcl_nor.png'),
            activeimg:require('../../../assets/imgs/btn_zxxq_zxcl_pre.png')
          },
          {
            img:require('../../../assets/imgs/btn_zxxq_tdhz_nor.png'),
            activeimg:require('../../../assets/imgs/btn_zxxq_tdhz_nor.png')
          },
          {
            img:require('../../../assets/imgs/btn_zxxq_cfjy_nor.png'),
            activeimg:require('../../../assets/imgs/btn_zxxq_cfjy_nor.png')
          }
        ],
      activeIndex:0,
      isDoctor:false,
    }
},
  filters: {
    age:function(value){
        if(value){
            var birthday=new Date(value.replace(/-/g, "\/"));
            var d=new Date();
            var age = d.getFullYear()-birthday.getFullYear()-((d.getMonth()<birthday.getMonth()|| d.getMonth()==birthday.getMonth() && d.getDate()<birthday.getDate())?1:0);
            return age
        }
        else{
            return ''
        }
    },
  },
methods:{
  toTabs(index){
    this.activeIndex=index;
  },
  //返回
  toback(){
    if(!this.isDoctor){
      this.$router.push({path: '/userConsult'})
    }else {
      getReturnState(this.doctorId).then((res) => {
      });
      this.$router.push({path: '/formConsult'})
    }
  },
  //立即回复
  toresponse(){
    getChangeState(this.doctorId).then((res)=>{

    });
    //type:1  是新冠
       this.$router.push({name:'wxconsultdoctor',params:{fromId:this.patientInfo.userId,type:'1'}})
  },
    getFormConsultDetailFun(id){

        getFormConsultDetail(id).then((res)=>{
            this.patientInfo=res.data.data.hjjkYqConsultVo
        })
    }
},
mounted(){
  this.isDoctor=Boolean(Number(localStorage.getItem('isDoctor')));
    this.id = sessionStorage.getItem('consultId');
    this.$nextTick(()=>{
       this.getFormConsultDetailFun(this.id)
    })
}
};
</script>

<style scoped lang="less">
.formConsultDetail_container{
    .patient_info{
        width: 7rem;
        margin: 0.24rem auto;
        height: 1.52rem;
        display: flex;
        align-items: center;
        box-shadow: 0 0 0.24rem #FBF8FB;
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
    .form_tabs{
      height: 0.9rem;
      display: flex;
      justify-content: flex-start;
      .form_tab{
          width: 1.6rem;
          height: 0.6rem;
        img{
          width: 1.6rem;
          height: 0.6rem;
        }
      }
    }
    .form_info{
        padding-bottom: 0.15rem;
        box-shadow: 0 0 0.24rem #FBF8FB;
        width: 7rem;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 0.25rem;
        .item{
            padding: 0.3rem 0.12rem 0.3rem 0.14rem;
            display: flex;
            border-bottom: 0.02rem solid #FAF7FA;
            .label{
                color: #777777;
                font-size: 0.3rem;
                font-weight: bold;
            }
            .val{
                flex: 1;
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
  .fillbtnback{
    width: 100%;
    position: fixed;
    height: 1.4rem;
    bottom: 0;
    background: white;
  }
  .fillbtn{
    width: 6.9rem;
    height: 0.7rem;
    display: flex;
    justify-content: space-around;
    margin: 0.34rem auto;
    .fillzx{
      width: 3.12rem;
      height: 0.72rem;
      background: url("../../../assets/imgs/x_fh2.png") no-repeat;
      background-size: 3.12rem 0.72rem;
    }
    .fillnext{
      width: 3.12rem;
      height: 0.72rem;
      background: url("../../../assets/imgs/btn_zxxq_zxcl.png") no-repeat;
      background-size: 3.12rem 0.72rem;
    }
  }
}
</style>
