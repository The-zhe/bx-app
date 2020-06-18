<!--xtt-->
<template>
  <div class="doctorInfo">
    <div class="introtop">
      <div class="introblock">
        <div class="photo"><img :src="doctorInfo.imgUrl?doctorInfo.imgUrl:doctorImg"></div>
        <div class="name">{{doctorInfo.name}}</div>
        <div class="rank">{{doctorInfo.workDoctor}}&emsp;{{doctorInfo.level}}</div>
      </div>
    </div>
    <div class="introcontent">
      <div class="major">
        <div class="majorwhite">
          <div class="majorImg">专业擅长</div>
          <div class="majorone">
            <div class="majorlabel" v-for="(item,index) in majorList" :key="index"><span>{{item}}</span></div>
          </div>
          <div class="majorskills" v-for="(item,index) in majorskills" :key="index">
            <div>{{item}}</div>
          </div>
        </div>
      </div>
      <div class="work">
        <div class="workwhite">
          <div class="workImg">执业经历</div>
          <div class="majorone">
            <div class="majorlabel" v-for="(item,index) in workList" :key="index"><span>{{item}}</span></div>
          </div>
          <div class="majorskills" v-for="(item,index) in workexperience" :key="index">
            <div>{{item}}</div>
          </div>
        </div>
      </div>
      <div class="address">
        <div class="addresswhite">
          <div class="addressImg">执业地点</div>
          <div class="majorskills" v-for="(item,index) in adrList" :key="index">
            <div><span>第{{item.num}}执业点</span>:{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getMedicalInfo} from '../../api/index'
  import MedicalBottom from '../../components/medicalBottom'

  export default {
    name: "doctorInfo",
    components: {MedicalBottom},
    data() {
      return {
        doctorImg:require("../../assets/imgs/img_yhtd_doctor.png"),
        doctorId: '4745039825753088', //this.$route.id
        doctorInfo: '',
        majorList: [], //专业擅长特征
        majorskills: [],//专业擅长描述
        workList: [],//执业经历特征
        workexperience: [],//执业经历描述
        adrList: [],
        numList:[
          {
            name: '',
            num: '一'
          }, {
            name: '',
            num: '二'
          },{
            name: '',
            num: '三'
          },{
            name:'',
            num:'四'
          },{
            name:'',
            num:'五'
          }
        ]
      }
    },
    methods: {
      getDoctorInfo() {
        console.log(this.doctorId);
        getMedicalInfo(this.doctorId).then(res => {
          console.log('ddd', res);
          this.doctorInfo = res.data.data;
          this.majorList = this.doctorInfo.skillsLable.split(',');
          this.majorskills = this.doctorInfo.skills.split(',');
          this.workList = this.doctorInfo.experienceLable.split(',');
          this.workexperience = this.doctorInfo.experience.split(',');
          let adr = this.doctorInfo.address.split(',');
          if(adr.length) {
            for (let i = 0; i < adr.length; i++) {
              this.adrList.push({name: adr[i], num: this.numList[i].num})
            }
          }
          console.log('a111', adr.length);
          console.log('aaa', this.adrList);
        })
      }
    },
    mounted() {
      this.getDoctorInfo();
    }
  }
</script>

<style scoped lang="less">
  .doctorInfo {
    .introtop {
      height: 3.2rem;
      background: url("../../assets/imgs/introdoctor_x.png");
      background-size: 100% 3.2rem;

      .introblock {
        margin-left: auto;
        margin-right: auto;
        padding-top: 0.75rem;
        width: 2rem;
        height: 2.5rem;
        text-align: center;

        .photo {
          margin-left: auto;
          margin-right: auto;
          width: 1.38rem;
          height: 1.38rem;
          border-radius: 0.69rem;
          background: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 1.32rem;
            height: 1.32rem;
            border-radius: 0.66rem;
          }
        }

        .name {
          font-size: 0.3rem;
          color: white;
          font-weight: bold;
        }

        .rank {
          font-size: 0.28rem;
          color: white;
        }
      }
    }

    .introcontent {
      .major {
        margin: 0.2rem auto 0 auto;
        width: 7.2rem;
        height: auto;
        box-shadow: 0rem 0rem 0.08rem #a7a7a7;
        border-radius: 0.2rem;
        overflow: hidden;
        background: #40B2A0;

        .majorwhite {
          width: 7rem;
          height: auto;
          float: right;
          background: white;

          .majorImg {
            margin-top: 0.2rem;
            width: 2rem;
            height: 0.45rem;
            padding-left: 0.7rem;
            padding-top: 0.05rem;
            color: #40B2A0;
            font-size: 0.3rem;
            font-weight: bold;
            background: url("../../assets/imgs/intro1_x.png") no-repeat 0.2rem;
            background-size: 0.34rem 0.35rem;
          }
        }

      }

      .majorone {
        margin: 0.1rem 0;
        width: 6.5rem;
        height: 0.5rem;
        overflow: hidden;

        .majorlabel {
          font-size: 0.26rem;
          margin-left: 0.2rem;
          float: left;
          width: auto;
          padding: 0.04rem 0.15rem;
          height: auto;
          color: white;
          border-radius: 0.25rem;
          background: #40B2A0;
        }
      }

      .majorskills {
        width: 6rem;
        height: 0.5rem;
        font-size: 0.28rem;
        color: #777777;
        margin-left: 0.2rem;
      }

      .work {
        margin: 0.2rem auto 0 auto;
        width: 7.2rem;
        height: auto;
        background: #40B2A0;
        box-shadow: 0rem 0rem 0.08rem #a7a7a7;
        border-radius: 0.2rem;
        overflow: hidden;

        .workwhite {
          width: 7rem;
          height: auto;
          float: right;
          background: white;

          .workImg {
            margin-top: 0.2rem;
            width: 2rem;
            height: 0.45rem;
            padding-left: 0.7rem;
            padding-top: 0.05rem;
            color: #40B2A0;
            font-size: 0.3rem;
            font-weight: bold;
            background: url("../../assets/imgs/intro2_x.png") no-repeat 0.2rem;
            background-size: 0.31rem 0.39rem;
          }
        }

      }

      .address {
        margin: 0.2rem auto 0 auto;
        width: 7.2rem;
        height: auto;
        box-shadow: 0rem 0rem 0.08rem #a7a7a7;
        border-radius: 0.2rem;
        overflow: hidden;
        background: #40B2A0;

        .addresswhite {
          width: 7rem;
          height: auto;
          float: right;
          background: white;

          .addressImg {
            margin: 0.2rem 0;
            width: 2rem;
            height: 0.45rem;
            padding-left: 0.7rem;
            padding-top: 0.05rem;
            color: #40B2A0;
            font-size: 0.3rem;
            font-weight: bold;
            background: url("../../assets/imgs/intro3_x.png") no-repeat 0.2rem;
            background-size: 0.31rem 0.33rem;
          }
        }
      }
    }
  }
</style>
