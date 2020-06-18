// 2020/3/19 created by xtt
<template>
<div class="doctorfinish">
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
  <van-popup
    v-model="isstart"
    position="bottom"
  >
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirmstart"
      @cancel="isstart=false"
    />
  </van-popup>
  <van-popup
    v-model="isend"
    position="bottom"
  >
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirmend"
      @cancel="isend=false"
    />
  </van-popup>
  <div class="search">
    <div class="select_type" @click="toselect">{{type}}</div>
    <div style="width: 0.02rem;height: 0.5rem;background: #F0EDF1"></div>
    <div class="search_user"><input v-model="username" :placeholder="ptip" @focus="tofocus" @blur="toblur" @input="inputname"/></div>
  </div>
  <div class="search_time">
    <div class="time_div" @click="isstart=true">{{starttime?starttime:'请选择起始时间'}}</div>
    <div class="time_line"></div>
    <div class="time_div" @click="isend=true">{{endtime?endtime:'请选择结束时间'}}</div>
  </div>
  <div class="container">
    <div class="title">
      <div style="margin-left: 0.25rem">新冠咨询</div>
      <div style="font-size: 0.26rem;color: #8E8E8E;font-weight: normal;margin-right: 0.24rem">2019/12/12  19:30</div>
    </div>
    <div class="content">
      <div class="info">
        <img :src="userImg"/>
        <div class="name">
          <div style="font-weight: bold">陈亚明</div>
          <div style="margin-top: 0.16rem">男 26岁 浙江 温州</div>
        </div>
      </div>
      <div class="symptom text_ellipsis">主诉：感觉发热、...头痛三天，恶心想吐1天，现在不头痛三天，恶心想吐1天，现在不</div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "doctorfinish",
        data(){
        return{
          starttime:'',
          endtime:'',
          userImg:require('../../../../assets/imgs/advicehistory2.png'),
          datalist:[],
          selectshow:false,
          isstart:false,
          isend:false,
          minDate: new Date(2020, 0, 1),
          maxDate: new Date(),
          currentDate: new Date(),
          columns: ['全部','新冠','慢病'],
          type:'全部',
          username:'',
          ptip:'请输入患者姓名、手机号',
          serviceId:''
         }
        },
        methods:{
          tofocus(){
            this.ptip='';
          },
          toblur(){
            this.ptip='请输入患者姓名、手机号'
          },
          inputname(){
            getdoctorWork('4844079179961344',1,this.username).then((res)=>{
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
            getdoctorWork('4844079179961344',1,this.username,this.serviceId).then((res)=>{
              this.datalist=res.data.list;
            })
            console.log('sssindex',index);
          },
          confirmstart(val){
            this.isstart=false;
            this.starttime = moment(val).format('YYYY-MM-DD');
          },
          confirmend(val){
            let start=new Date(this.starttime);
            let end=new Date(moment(val).format('YYYY-MM-DD'));
            if(start>end){
              Toast('结束时间不能早于开始时间')
            }else{
              this.isend=false;
              this.endtime = moment(val).format('YYYY-MM-DD');
              getdoctorWork('4844079179961344',1,this.username,this.serviceId,this.starttime,this.endtime).then((res)=>{
                this.datalist=res.data.list;
              })
            }


          },
       }
    }
</script>

<style scoped lang="less">
.doctorfinish{
  padding-top: 0.16rem;
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
  .search_time{
    margin-top: 0.15rem;
    padding-top: 0.18rem;
    height: 0.72rem;
    background: #F6F3F7;
    display: flex;
    justify-content: flex-start;
    padding-left: 0.3rem;
    .time_div{
      text-align: center;
      color: #C8C8CC;
      line-height: 0.54rem;
      width: 3.2rem;
      height: 0.54rem;
      border-radius: 0.3rem;
      border: 0.02rem solid #D6D3D6;
      background: white;
    }
    .time_line{
      margin: 0.3rem 0.1rem 0;
      width: 0.3rem;
      height: 0.02rem;
      background:#51A89D;
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
      justify-content: space-between;
      height: 0.5rem;
      .t_state{
        font-size: 0.22rem;
        font-weight: normal;
        margin-left: 0.18rem;
        width: 2.8rem;
        height: 0.4rem;
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
