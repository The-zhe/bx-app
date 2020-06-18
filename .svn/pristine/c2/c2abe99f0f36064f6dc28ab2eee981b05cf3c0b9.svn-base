<template>
  <div class="healthInfoDetail_container" v-if="Object.keys(healthInfoDetail).length>0">
    <div class="title">{{healthInfoDetail.title}}</div>
    <div class="info">
      <div class="date">{{healthInfoDetail.crtTm.slice(0,10)}}</div>
      <div class="viewNum">浏览量:{{healthInfoDetail.browse}}</div>
     <!-- <div class="collect" @click="collectEvent">
        <img :src="healthInfoDetail.isCollect?hasCollectIconUrl:notCollectIconUrl" />
      </div>-->
    </div>
    <div class="content" v-html="healthInfoDetail.content"></div>
  </div>
</template>

<script>
  import {
    getHealthInfoDetail,
    cancelCollectHealthInfo,
    collectHealthInfo
  } from '@/api/apiz';
  import { Toast } from "vant";
  import {getaddBrowse} from "../../../api";
  export default {
    components: {},
    name: "yqinfodetail",
    data() {
      return {
        healthInfoDetail: {},
        memberId: 0,
        healthInfoDetailId: 0,
        hasCollectIconUrl: require("../../../assets/imgs/btn_jkzx_collect.png"),
        notCollectIconUrl: require("../../../assets/imgs/btn_jkzx_not_collect.png")
      };
    },
    created() {},
    computed: {},
    watch: {},
    mounted() {
      this.getNativeData();
      let detailId = this.$route.query.healthInfoId
      getaddBrowse(detailId).then((res)=>{
      })
        this.healthInfoDetailId = this.$route.query.healthInfoId
          this.$nextTick(() => {
            this.getHealthInfoDetailFun(this.healthInfoDetailId);
          });
    },
    methods: {
      getNativeData(){
        this.$bridge.callHandler("getData", "", (res) => {
          let id=res;
          getHealthInfoDetail(id).then(res => {
            this.healthInfoDetail = res.data.data;
          });
         /* this.$nextTick(()=>{
            this.getMedicalTeamDataList();
          })*/
        });
      },
      getHealthInfoDetailFun(id, memberId) {
        getHealthInfoDetail(id, memberId).then(res => {
          this.healthInfoDetail = res.data.data;
        });
      },
      cancelCollectHealthInfoFun(id, memberId) {
        cancelCollectHealthInfo(id, memberId).then(res => {
          if (res.data.code === 0) {
            this.healthInfoDetail.isCollect = 0;
            Toast({ message: "取消收藏成功", duration: 1000 });
          } else {
            Toast({ message: "取消收藏失败，请重试", duration: 1000 });
          }
        });
      },
      collectHealthInfoFun(id, memberId) {
        collectHealthInfo(id, memberId).then(res => {
          if (res.data.code === 0) {
            this.healthInfoDetail.isCollect = 1;
            Toast({ message: "已收藏", duration: 1000 });
          } else {
            Toast({ message: "收藏失败，请重试", duration: 1000 });
          }
        });
      },
      collectEvent() {
        this.healthInfoDetail.isCollect
          ? this.cancelCollectHealthInfoFun(
          Number(this.healthInfoDetailId),
          this.memberId
          )
          : this.collectHealthInfoFun(
          Number(this.healthInfoDetailId),
          this.memberId
          );
      },
    },
    destroyed(){
      sessionStorage.removeItem('healthInfoId')
    }
  };
</script>

<style lang="less" scope>
  .healthInfoDetail_container {
    height: 100%;
    background-color: #ffffff;
    .title {
      padding-top: 0.36rem;
      padding-left: 0.27rem;
      font-size: 0.4rem;
      color: #000000;
      font-weight: bold;
    }
    .info {
      padding: 0.42rem 0.26rem 0.44rem 0.28rem;
      display: flex;
      justify-content: space-between;
      //align-items: center;
      color: #767777;
      font-size: 0.28rem;
      .date {
      }
      .viewNum {
        margin-right: 0.3rem;
      }
      .collect {
        margin-left: auto;
        img {
          width: 0.4rem;
          height: 0.38rem;
        }
      }
    }
    .content {
      padding: 0 0.25rem;
    }
  }
</style>
<style>
  @import url("../../../assets/less/vantstyle/toast.css");
</style>
