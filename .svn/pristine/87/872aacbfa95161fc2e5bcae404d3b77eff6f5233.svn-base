<template>
  <div class="doctorInfo_container">
    <van-popup
      v-model="dateshow"
      position="bottom"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirmdate"
        @cancel="dateshow=false"
      />
    </van-popup>
    <van-popup
      v-model="selectshow"
      position="bottom"
    >
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="selectshow=false"
        @confirm="confirmsex"
      />
    </van-popup>
    <div class="form_item avatar">
      <div class="label">头像</div>
      <img class="avatarImg"/>
      <img :src="nextIcon" class="rightArrow"/>
    </div>
    <div class="form_item name">
      <div class="label">姓名</div>
      <div class="content">
        <div class="text">请输入姓名</div>
        <img :src="nextIcon" class="rightArrow"/>
      </div>
    </div>
    <div class="form_item">
      <div class="label">性别</div>
      <div class="content" @click="selectsex">
        <div class="text">{{initialsex}}</div>
        <img :src="selectIcon"/>
      </div>
    </div>
    <div class="form_item">
      <div class="label">出生年月</div>
      <div class="content" @click="selectdate">
        <div class="text">{{initialdate}}</div>
        <img :src="selectIcon"/>
      </div>
    </div>
    <div class="form_item phone">
      <div class="label">手机号</div>
      <div class="content" @click="toeditphone">
        <div class="text">去设置</div>
        <img :src="nextIcon" class="rightArrow"/>
      </div>
    </div>
    <div class="form_item">
      <div class="label">地址</div>
      <div class="content" @click="toeditaddress">
        <div class="text">去设置</div>
        <img :src="nextIcon" class="rightArrow"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {getDoctorInfo} from '../../../../api/apiz'
  import moment from "moment";

  export default {
    name: "doctorInfo",
    data() {
      return {
        editImg: require('@/assets/imgs/btn_grxx_modify.png'),
        rightArrow: require('@/assets/imgs/btn_grzx_next.png'),
        doctorInfo: {},
        selectIcon: require('@/assets/imgs/btn_grzx_select.png'),
        nextIcon: require('@/assets/imgs/btn_grzx_jbzl_next.png'),
        minDate: new Date(1950, 0, 1),
        maxDate: new Date(),
        currentDate: new Date(),
        dateshow: false,
        selectshow: false,
        columns: ['男', '女'],
        initialsex: '男',
        initialdate:'',
      }
    },
    methods: {
      toeditaddress(){
        this.$router.push({path:'/doctorInfoaddress'});
      },
      toeditphone(){
       this.$router.push({path:'/doctorInfophone'});
      },
      confirmdate(val) {
        this.initialdate=moment(val).format('YYYY-MM-DD');
        this.dateshow=false;
      },
      confirmsex(val) {
        this.initialsex = val;
        this.selectshow = false;
      },
      selectdate() {
        this.dateshow = true;
      },
      selectsex() {
        this.selectshow = true;
      },
      getDoctorInfoFun() {
        getDoctorInfo().then(res => {
          this.doctorInfo = res.data.data
        })
      },
      jumpToEdit() {
        this.$router_({name: 'doctorPersonalInfoEdit'})
      }
    },
    mounted() {
      this.getDoctorInfoFun()
    }

  };
</script>

<style scoped lang="less">
  .doctorInfo_container {
    font-size: 0.3rem;
    color: #777777;

    .form_item {
      margin: 0 auto;
      width: 6.9rem;
      height: 1rem;
      border-bottom: 0.02rem solid #F1F3F4;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .label {
        margin-left: 0.15rem;
        font-weight: bold;
        width: 1.5rem;
        height: 0.3rem;
      }

      .content {
        align-items: center;
        width: 2.2rem;
        height: 0.5rem;
        display: flex;
        justify-content: space-between;

        .text {
          width: 1.7rem;
          text-align: right;
          color: #8E8E8E;
        }
      }

      img {
        width: 0.16rem;
        height: 0.13rem;
      }

      .rightArrow {
        width: 0.16rem;
        height: 0.3rem;
      }

      .avatarImg {
        width: 1rem;
        height: 1rem;
        border-radius: 0.5rem;
      }
    }

    .avatar {
      width: 100%;
      height: 1.5rem;
      border-bottom: 0.2rem solid #F1F3F4;

      .label {
        margin-left: 0.45rem;
      }
    }
  }
</style>
