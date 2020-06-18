<!--xtt-->
<template>
    <div class="stewardInfo">
      <div class="introtop">
        <div class="introblock">
          <div class="photo"><img :src="stewardInfo.imgUrl?stewardInfo.imgUrl:stewardImg"></div>
          <div class="name">{{stewardInfo.name}}</div>
          <div class="rank">{{stewardInfo.level}}</div>
        </div>
      </div>
      <div class="introcontent">
        <div class="brief">
          <div class="briefwhite">
          <div class="briefImg">管家简介</div>
          <div class="brieftext">{{introduction}}</div>
        </div>
        </div>
      </div>
      <medical-bottom></medical-bottom>
    </div>
</template>

<script>
  import {getMedicalInfo} from '../../api/index'
  import MedicalBottom from '../../components/medicalBottom'
    export default {
      name: "stewardInfo",
      components:{MedicalBottom},
      data(){
        return{
          stewardId:this.$route.query.id,
          stewardInfo:'',
          introduction:'',
          stewardImg:require("../../assets/imgs/img_yhtd_steware.png")
        }
      },
      methods:{
        getStewardInfo(){
          getMedicalInfo(this.stewardId).then(res=>{
            this.stewardInfo=res.data.data;
            this.introduction=this.stewardInfo.brief;
          })
        }
      },
      mounted() {
        this.getStewardInfo();
      }
    }
</script>

<style scoped lang="less">
 .stewardInfo{
   .introtop{
     height: 4.15rem;
     background: url("../../assets/imgs/introbar_x.png") no-repeat;
     background-size:100% 2.15rem;
     background-color: white;
     .introblock{
       margin-left: auto;
       margin-right: auto;
       padding-top: 1.2rem;
       width: 2rem;
       height: 2.5rem;
       text-align: center;
       .photo{
         margin-left: auto;
         margin-right: auto;
         width: 1.8rem;
         height: 1.8rem;
         border-radius: 0.9rem;
         background: #ffffff;
         display: flex;
         justify-content: center;
         align-items: center;
         img{
           width: 1.72rem;
           height: 1.72rem;
           border-radius: 0.86rem;
         }
       }
       .name{
         font-size: 0.3rem;
         color: #0F847E;
         font-weight: bold;
       }
       .rank{
         font-size: 0.26rem;
         color: #777777;
       }
     }
   }
   .introcontent{
     .brief{
       margin: 0.2rem auto 0 auto;
       width: 7.2rem;
       height: auto;
       background: #40b2a0;
       box-shadow: 0rem 0rem 0.08rem #a7a7a7;
       border-radius: 0.2rem;
       overflow: hidden;
       .briefwhite {
         width: 7rem;
         height: auto;
         float: right;
         background: white;
         .briefImg {
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
         .brieftext{
           margin-left: 0.2rem;
           color: #777777;
           font-size: 0.28rem;
           line-height: 0.4rem;
           padding:0.2rem 0;
         }
       }
     }
   }
 }
</style>
