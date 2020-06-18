<!--xtt-->
<template>
    <div class="medicalTeam">
      <div class="title">我的私人医生</div>
      <div v-for="(item1,index) in doctorList" :key="index">
      <div class="intro">
        <div class="photo"><img :src="item1.imgUrl?item1.imgUrl:doctorImg" @click="toDoctor(item1.id)"></div>
        <div class="introtext">
          <div class="introname">{{item1.name}}&emsp;<div class="intronamework">{{item1.workDoctor}}</div></div>
          <div>{{item1.department}}</div>
          <div>{{item1.hospital}}</div>
        </div>
        <div class="consult" @click="toConsult(item1.id,1)"><img src="../../assets/imgs/consult_x.png"></div>
      </div>
      </div>
      <div class="title">我的私人管家</div>
      <div v-for="(item2,index) in stewardList" :key="index">
        <div class="intro">
          <div class="photo"><img :src="item2.imgUrl?item2.imgUrl:stewardImg" @click="toSteward(item2.id)"></div>
          <div class="introtext">
            <div class="introname">{{item2.name}}</div>
            <div>&emsp;</div>
            <div>{{item2.level}}</div>
          </div>
          <div class="consult" @click="toConsult(item2.id,2)"><img src="../../assets/imgs/consult_x.png"></div>
        </div>
      </div>
      <div class="title">我的私人护士</div>
      <div v-for="(item3,index) in nurseList" :key="index">
        <div class="intro">
          <div class="photo"><img :src="item3.imgUrl?item3.imgUrl:nurseImg" @click="toNurse(item3.id)"></div>
          <div class="introtext">
            <div class="introname">{{item3.name}}</div>
            <div>&emsp;</div>
            <div>{{item3.level}}</div>
          </div>
          <div class="consult" @click="toConsult(item3.id,3)"><img src="../../assets/imgs/consult_x.png"></div>
        </div>
      </div>
      <!--<MedicalBottom></MedicalBottom>-->
    </div>
</template>

<script>
  import {getMedicalTeamData,getMedicalTeamCount} from '../../api/index'
  import MedicalBottom from '../../components/medicalBottom'
    export default {
      components:{MedicalBottom},
        name: "medicalTeam",
        data(){
          return{
            doctorList:[
             /* {img:require('../../assets/imgs/doctor_x.png'),name:'李颖',keshi:'内科',adr:'宁波市第一医院',jibie:'主治医生'}*/
            ],
            stewardList:[],
            nurseList:[],
            doctorId:'',
            stewardId:'',
            nurseId:'',
            consultnum:1,
            doctornum:1,
            nursenum:1,
            memberId:'',
            doctorImg:require("../../assets/imgs/img_yhtd_doctor.png"),
            nurseImg:require("../../assets/imgs/img_yhtd_nurse.png"),
            stewardImg:require("../../assets/imgs/img_yhtd_steware.png")
          }
        },
        methods:{
           getNativeMemberId(){
             sessionStorage.setItem('nativeMemberId','4535481258038273') //存储用户id
             let memberId = sessionStorage.getItem('nativeMemberId') //获取存储的用户id
             getMedicalTeamData(memberId).then( res => {
               console.log(res)
               res.data.data.forEach(element => {
                if(element.catCd === '0'){ //判断职业 医生0 护士1 管家2
                  this.doctorList.push(element)
                }else if(element.catCd === '1'){
                  this.nurseList.push(element)
                }else if(element.catCd === '2'){
                  this.stewardList.push(element)
                }
               });
             })
             console.log('getid')
            //  this.$bridge.callHandler("getMemberId","",res => {
            //    console.log('res',res)
            //  })
           },
        //   getNativeMemberId(){
        //     // sessionStorage.setItem('nativeMemberId','4535481258038273');
        //     this.$bridge.callHandler("getMemberId", "", (res) => {
        //       this.memberId = res;
        //       sessionStorage.setItem('nativeMemberId',res);
        //       this.$nextTick(()=>{
        //         this.getMedicalTeamDataList();
        //       })
        //     });
        //   },
        // getMedicalTeamDataList(){
        //   let memberId=sessionStorage.getItem('nativeMemberId');//    '4535481258038273'  sessionStorage.getItem('nativeMemberId')
        //   getMedicalTeamData(memberId).then(res=>{
        //     console.log('medical',res.data.data);
        //     res.data.data.forEach((element)=>{
        //       if(element.catCd==='0'){
        //         this.doctorList.push(element);
        //       }
        //       if(element.catCd==='1'){
        //         this.nurseList.push(element);
        //       }
        //       if(element.catCd==='2'){
        //         this.stewardList.push(element);
        //       }
        //     })
        //     // res.data.list.forEach((element)=>{
        //     //   if(element.hjjkHealthTeamVo.catCd==='0'){
        //     //     this.doctorList.push(element.hjjkHealthTeamVo);
        //     //   }
        //     // })
        //   });
        // },
          toDoctor(id){
            this.$router_({path:'/doctorInfo',query:{id:id}});
          },
          toSteward(id){
            this.$router_({path:'/steWardInfo',query:{id:id}});
          },
          toNurse(id){
            this.$router_({path:'/nurseInfo',query:{id:id}});
          },
          toConsult(id,type){
          console.log(id);
            let memberId=sessionStorage.getItem('nativeMemberId'); //    '4535481258038273'
            //1是医生 2管家 3护士
            this.$router_({path: '/consultWeb', query: {id: id, type: type}});
          }
        },
      mounted() {
       this.getNativeMemberId();
        // this.getMedicalTeamDataList();

      }
    }
</script>

<style scoped lang="less">
  .medicalTeam{
    //width: 100%;
    background: white;
   // height: 100%;
    .title{
      padding-top: 0.15rem;
      padding-left: 0.2rem;
      font-size: 0.28rem;
      color: #999999;
      height: 0.5rem;
      background: #f4f4f4;
    }
    .intro{
      padding-top: 0.3rem;
      color: #777777;
      font-size: 0.28rem;
      border-top:0.01rem solid #f4f4f4;
      display: flex;
      justify-content: space-around;
      .introtext{
        width: 2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .introname{
        font-size: 0.3rem;
        color:#0F847E;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        .intronamework{
          //display: flex;
          align-items:center;
          //line-height: 0.3rem;
          text-align: center;
          width: 1.05rem;
          height: 0.3rem;
          border-radius: 0.15rem;
          border: 0.02rem solid #f6a540;
          font-size: 0.2rem;
          color: #F6A540;
        }
      }
      .photo{
        width: 1.18rem;
        height: 1.18rem;
        border-radius: 0.59rem;
        img{width: 1.18rem;height: 1.18rem;border-radius: 0.59rem;}
      }
      .consult{
        width: 1.45rem;
        height: 1.45rem;
        img{width: 1.45rem;height: 1.45rem}
      }
    }
  }
</style>
<style>
  @import url('../../assets/less/vantstyle/dialog.css');
  @import url('../../assets/less/vantstyle/button.css');
</style>
