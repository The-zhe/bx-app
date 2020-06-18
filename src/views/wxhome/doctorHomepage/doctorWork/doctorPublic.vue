// 2020/3/19 created by xtt
<template>
  <div class="doctorPublic">
    <van-popup
      v-model="selectshow"
      position="bottom"
    ><van-picker
      show-toolbar
      title="标题"
      :columns="columns"
      @cancel="selectshow=false"
      @confirm="onConfirm"
    />
    </van-popup>
    <div class="search">
      <div class="select_type" @click="toselect">{{type}}</div>
      <div style="width: 0.02rem;height: 0.5rem;background: #F0EDF1"></div>
      <div class="search_user"><input v-model="username" :placeholder="ptip" @focus="tofocus" @blur="toblur" @input="inputname"/></div>
    </div>
    <div class="container" v-for="item in datalist" @click="toDetail(item)">
      <div class="title">
        <div style="margin-left: 0.25rem">{{item.hjjkServiceOrderVo.serviceName}}</div>
        <div class="t_state">
          <div v-show="item.state" class="t_state_new">新任务</div>
          <div v-show="!item.state" class="t_state_out">新任务超时</div>
        </div>
        <div style="font-size: 0.26rem;color: #8E8E8E;font-weight: normal">{{item.hjjkServiceOrderVo.crtTm}}</div>
      </div>
      <div class="content">
        <div class="info">
         <img :src="userImg"/>
          <div class="name">
            <div style="font-weight: bold">{{item.hjjkServiceOrderVo.userName}}</div>
            <div style="margin-top: 0.16rem">{{item.hjjkServiceOrderVo.sex}} {{item.hjjkServiceOrderVo.age}}岁 {{item.hjjkServiceOrderVo.proviceNm}} {{item.hjjkServiceOrderVo.cityNm}}</div>
          </div>
        </div>
        <div class="symptom text_ellipsis">主诉：{{item.hjjkServiceOrderVo.cont}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    import {getdoctorWork} from "../../../../api";
    import Toast from "vant/es/toast";

    export default {
        name: "doctorPublic",
        data(){
          return{
            userImg:require('../../../../assets/imgs/advicehistory2.png'),
            datalist:[],
            selectshow:false,
            columns: ['全部','新冠','慢病'],
            type:'全部',
            username:'',
            ptip:'请输入患者姓名、手机号',
            serviceId:'',
            isState:false,
           }
       },
        methods:{
          toDetail(item){
            if(item.hjjkServiceOrderVo.consultId){
             sessionStorage.setItem('consultId',item.hjjkServiceOrderVo.consultId);
              this.$router_({name: 'formConsultDetail'});
            }else {
              Toast('没有consuiltId');
            }
          },
          tofocus(){
            this.ptip='';
          },
          toblur(){
            this.ptip='请输入患者姓名、手机号'
          },
          inputname(){
            getdoctorWork('4844079179961344',0,this.username).then((res)=>{
              this.datalist=res.data.list;
            })
          },
          toselect(){
            this.selectshow=true;
          },
          onConfirm(value,index){
            if(index===1){
             this.serviceId='4667450476631078';
            }else if(index===2) {
              this.serviceId='4667450476631079';
            }
            this.type=value;
            this.selectshow=false;
            getdoctorWork('4844079179961344',0,this.username,this.serviceId).then((res)=>{
              this.datalist=res.data.list;
            })
            console.log('sssindex',index);
          },
          getinfo(){  //公益区  statCd传  0  待处理传1
            getdoctorWork('4844079179961344',0).then((res)=>{
              this.datalist=res.data.list;
              this.datalist.forEach((ele)=>{
                let crt=new Date(ele.hjjkServiceOrderVo.crtTm).getTime() + 6 * 60 * 60 * 1000;
                if(new Date()<crt){
                  ele.state=true;
                }else {
                  ele.state=false;
                }
              })
              console.log('work',res);
            })
          },

       },
      mounted() {
          this.getinfo();
      }
    }
</script>

<style scoped lang="less">
 .doctorPublic{
   padding-top: 0.3rem;
   .search{
     width: 6.9rem;
     height: 0.6rem;
     display: flex;
     justify-content: space-between;
     margin: 0 auto;
   .select_type{
     line-height: 0.55rem;
     text-align: center;
     color: #51A89D;
     width: 2rem;
     height: 0.55rem;
     border-radius: 0.3rem;
     border: 0.02rem solid #D6D3D6;
   }
     .search_user{
       padding-left: 0.3rem;
       line-height: 0.55rem;
       width: 4.12rem;
       height: 0.55rem;
       border-radius: 0.3rem;
       border: 0.02rem solid #D6D3D6;
     }
   }
   .container{
     margin: 0.3rem auto 0;
     width: 6.9rem;
     height: 2.7rem;
     border-radius: 0.16rem;
     box-shadow: 0 0 0.15rem rgba(96, 96, 96, 0.32);
     background: #F6F3F7;
     .title{
       padding-top: 0.2rem;
       font-weight: bold;
       color: #5D5D5D;
       font-size: 0.3rem;
       display: flex;
       justify-content: flex-start;
       height: 0.5rem;
       .t_state{
         margin-top: 0.05rem;
         font-size: 0.22rem;
         font-weight: normal;
         margin-left: 0.18rem;
         width: 2.5rem;
         height: 0.4rem;
         .t_state_new{
           text-align: center;
           width: 0.97rem;
           height: 0.33rem;
           border-radius: 0.3rem;
           border: 0.01rem solid #00A99D;
           color: #00A99D;
         }
         .t_state_out{
           text-align: center;
           width: 1.44rem;
           height: 0.33rem;
           border-radius: 0.3rem;
           border: 0.01rem solid #F15A24;
           color: #F15A24;
         }
       }
     }
     .content{
       padding-top: 0.22rem;
       border-radius: 0.16rem;
       box-shadow: 0 0 0.15rem rgba(121, 121, 121, 0.32);
       height: 1.78rem;
       background: white;
       .info{
         margin-left: 0.25rem;
         height: 1rem;
         display: flex;
         justify-content: flex-start;
         img{
           width: 1rem;
           height: 1rem;
           border-radius: 0.5rem;
         }
         .name{
           font-size: 0.3rem;
           color: #5D5D5D;
           margin-left: 0.24rem;
           height: 1rem;
         }
       }
       .symptom{
         margin-top: 0.15rem;
         margin-left: 0.25rem;
         height: 0.5rem;
       }
     }
   }
 }
</style>
