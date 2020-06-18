<template>
    <div class="wxdoctorlist">
      <div class="d_top">
        <div class="d_top_input">
          <div class="d_top_input_f" v-show="isinput" @click="toinput">输入医生姓名</div>
          <div class="d_top_input_c" v-show="!isinput"><input v-model="docname" @keyup="inputname"/></div>
        </div>
        <div class="d_top_select" @click="tokeshi" v-show="istype==='slow'">科室</div>
        <div class="d_top_select" @click="toselect" v-show="istype==='yizhen'">{{state}}</div>
        <van-popup
          v-model="selectshow"
          position="bottom"
          :style="{ height: '30%' }"
        ><van-picker
          show-toolbar
          title="标题"
          :columns="columns"
          @cancel="onCancel"
          @confirm="onConfirm"
        />
        </van-popup>
      </div>
      <div class="d_content" v-for="item in doctorlist">
         <div class="d_head">
           <div class="d_head_photo" @click="todoctorinfo(item.id)">
            <img :src="item.imgUrl"/>
             <div class="photo_z"><img src="../../../assets/imgs/wx9_3.png"/></div>
           </div>
           <div class="d_head_name">
             {{item.name}}  <span>{{item.workDoctor}}</span>
           </div>
           <div class="d_head_state">{{item.state===1?'在线':'离线'}}</div>
           <div class="d_head_simg"><img :src="item.state===1?inimg:unimg"></div>
           <div class="d_head_next"><div class="nextimg" v-show="item.state===1"></div></div>
         </div>
        <div class="d_head_hos">{{item.hospitalName}} {{item.departmentName}}</div>
        <div class="d_yz">义诊人数 <span>{{item.servicePopulationNum}}</span>&emsp;&emsp;&emsp;&emsp;<span>{{item.praiseNum}}</span></div>
        <div class="d_sc">擅长：{{item.skills}}</div>
      </div>
    </div>
</template>

<script>
  import {getwxdoctorlist} from '../../../api/index'
    export default {
      name: "wxdoctorlist",
      data(){
          return{
            istype:this.$route.query.istype,   //路由跳转过来
            docname:'',
            selectshow:false,
            columns: ['义诊', '全部'],
            state:'义诊',
            stateCd:'',
            inimg:require('../../../assets/imgs/xdoc2.png'),
            unimg:require('../../../assets/imgs/xdoc1.png'),
            isinput:true,
            doctorlist:[],
          }
      },
      methods:{
        todoctorinfo(id){
          this.$router_({path: '/wxdoctorinfo',query:{id:id}});
        },
        inputname(){
          getwxdoctorlist(this.docname,this.stateCd).then((res)=>{
            console.log(res);
            this.doctorlist=res.data.list;
          })
        },
        toinput(){
          this.isinput=false;
        },
        //跳转到科室
        tokeshi(){
          this.$router_({path: '/selectDepartment'});
        },
        toselect(){
          this.selectshow=true;
        },
        onConfirm(value,index){
          this.state=value;
          if(index===1){
            this.stateCd='0';
          }
          if(index===0){
            this.stateCd='1';
          }
          if(index===2){
            this.stateCd='';
          }
          getwxdoctorlist(this.docname,this.stateCd).then((res)=>{
            this.doctorlist=res.data.list;
          })
          this.selectshow=false;
        },
        onCancel(){
          this.selectshow=false;
        },
        getinfo(){
          getwxdoctorlist().then((res)=>{
            this.doctorlist=res.data.list;
           console.log(res.data.list);
          })
        },
      },
      mounted() {
       this.getinfo();
      }
    }
</script>

<style scoped lang="less">
.wxdoctorlist{
  font-size: 0.3rem;
  color: #777777;
  .d_top{
    margin: 0.3rem auto 0 auto;
    width: 7rem;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    .d_top_input{
      width: 4.92rem;
      height: 0.57rem;
      background:#F4F1F4;
      .d_top_input_f{
        margin: 0.06rem auto;
        color: #BBBBBB;
        padding-left: 0.4rem;
        width: 1.9rem;
        height: 0.38rem;
        background: url("../../../assets/imgs/xdoc4.png") no-repeat 0 0.04rem;
        background-size: 0.33rem 0.34rem;
      }
      .d_top_input_c{
        margin: 0.06rem auto;
        color: #BBBBBB;
        padding-left: 0.3rem;
        width: 2rem;
        height: 0.38rem;
        input{
          width: 2rem;
          background:#F4F1F4;
        }
      }
    }
    .d_top_select{
      padding-top: 0.04rem;
      padding-left: 0.3rem;
      color: #56B2AD;
      width: 1.52rem;
      height: 0.53rem;
      box-shadow:0rem 0rem 0.1rem rgba(96, 96, 96, 0.25);
      background: url("../../../assets/imgs/xdoc5.png") no-repeat 1.26rem;
      background-size: 0.21rem 0.19rem;
    }
  }
  .d_content{
    margin: 0.3rem auto 0 auto;
    width: 7rem;
    height: 3.56rem;
    box-shadow:0rem 0rem 0.1rem rgba(96, 96, 96, 0.25);
    .d_head{
      margin-left: 0.2rem;
      padding-top: 0.28rem;
      width: 6.5rem;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      .d_head_photo{
         width: 1.24rem;
         height: 1.24rem;
         img{
           width: 1.24rem;
           height:1.24rem;
           border-radius:0.62rem;
         }
        .photo_z{
          margin-top: -0.62rem;
          margin-left: 0.7rem;
          width: 0.54rem;
          height: 0.62rem;
          img{
            width: 0.54rem;
            height: 0.62rem;
          }
        }
      }
      .d_head_name{
        margin-top: 0.1rem;
        margin-left: 0.3rem;
        width: 3rem;
        height: 0.4rem;
        color: #5D5D5D;
        font-weight: bold;
        span{
          font-weight: normal;
          font-size: 0.28rem;
        }
      }
      .d_head_state{
        width: 0.6rem;
        height: 0.3rem;
        color: #56B2AD;
        font-size: 0.28rem;
      }
      .d_head_simg{
        width: 0.3rem;
        height: 0.36rem;
        img{
          width: 0.3rem;
          height: 0.36rem;
        }
      }
      .d_head_next{
        width: 0.8rem;
        height: 0.4rem;
        .nextimg{
          margin-left: 0.6rem;
          width: 0.18rem;
          height: 0.31rem;
          background: url("../../../assets/imgs/xdoc6.png");
          background-size: 0.18rem 0.31rem;
        }
      }
    }
    .d_head_hos{
      margin-top: -0.3rem;
      margin-left: 1.8rem;
      width: 4.8rem;
      height: 0.4rem;
      color: #5D5D5D;
      font-size: 0.28rem;
    }
    .d_yz{
      margin-top: 0.3rem;
      color: #999999;
      font-size: 0.24rem;
      margin-left: 0.2rem;
      width: 3rem;
      height: 0.3rem;
      background: url("../../../assets/imgs/xdoc3.png") no-repeat 2rem;
      background-size: 0.27rem 0.28rem;
      span{
        color: #F4793B;
      }
    }
    .d_sc{
      line-height: 0.56rem;
      margin-top: 0.2rem;
      margin-left: 0.18rem;
      width: 6.6rem;
      height:1rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
