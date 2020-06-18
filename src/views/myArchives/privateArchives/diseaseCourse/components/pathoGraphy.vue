<template>
  <div class="pathoGraphy_container">
    <van-dialog v-model="showDialog" :showConfirmButton="false" :close-on-click-overlay="true">
      <div class="upload_container">
        <div class="title">上传记录</div>
        <div class="label">病情描述：</div>
        <div class="input">
          <textarea v-model="feelText" rows="4" cols="20" autofocus></textarea>
        </div>
        <div @click="uploadDiseaseFun" class="upload_button">上传</div>
      </div>
    </van-dialog>
    <div class="recordList_container">
      <div class="item" :key="item.date" v-for="item in listData">
        <div class="item_top">
          <div class="item_header">
            <div class="item_label">病情描述：</div>

            <div class="item_date">{{item.symptomTime}}</div>
            <div class="arrow">
              <img src="@/assets/imgs/btn_da_next.png" />
            </div>
          </div>
          <div class="item_desc">{{item.symptom}}</div>
        </div>
        <div class="item_bottom">
          <div class="doctor_advice" v-if="item.advice">
            <div class="top">
              <div class="label">医生建议：</div>
              <div class="advice_time">{{item.adviceTime}}</div>
            </div>
            <div class="doctorInfo">
              <div class="img">
                <img :src="item.doctorImg" />
                <div class="tag">{{item.catCd=='0'?'私人医生':item.catCd=='1'?'私人护士':'私人管家'}}</div>
              </div>
              <div class="text">
                <div class="name">{{item.doctorName}}</div>
                <div class="rank">{{item.position}}</div>
              </div>
            </div>
            <div class="advice">{{item.advice}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="upload_record" @click="showDialog=true">
      <img src="@/assets/imgs/btn_syda_upload.png" />
    </div>
  </div>
</template>

<script>
import {uploadDisease} from '@/api/apiz'
export default {
  components: {},
  name: "pathoGraphy",
  props: ["listData"],
  data() {
    return {
      showDialog:false,
      feelText:"",
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    uploadDiseaseFun(){
      uploadDisease({feelText:this.feelText}).then((res)=>{
        this.showDialog=false
        this.$emit('uploadSuccess')
      })
    }
  }
};
</script>

<style lang="less" scope>
.pathoGraphy_container {
  font-weight:400;
  display: flex;
  flex-direction: column;
  align-items: center;
  .upload_container{
    height: 7.51rem;
    width: 6rem;
    box-sizing: border-box;
    padding: 0.62rem 0.55rem 0.32rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    .title{
      font-size: 0.36rem;
      color: #7c7c7c;
      font-weight: bold;
    }
    .label{
      align-self: flex-start;
      margin-top: 0.52rem;
      font-size: 0.3rem;
      color: #777777;
    }
    .input{
      margin-top: 0.3rem;
      width: 4.9rem;
      height: 3.75rem;
      box-sizing: border-box;
      border: 0.01rem solid #EAEBEC;
      padding: 0.2rem 0.15rem;
      textarea{
        width: 4.6rem;
        height: 3.35rem;
      }
    }
    .upload_button{
      margin-top: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.9rem;
      height: 0.72rem;
      color: #fff;
      background-color: #3EB4A1;
      border-radius: 0.16rem;
    }
  }
  .recordList_container {
    .item {
      margin-bottom: 0.42rem;
      border-radius: 0.1rem;
      box-shadow: 0 0 0.05rem #a9a9a9;
      padding: 0 0.2rem;
      box-sizing: border-box;
      width: 7rem;
      background-color: #fff;
      font-size: 0.28rem;
      font-weight: 400;
      .item_top {
        .item_header {
          color: #777777;
          height: 0.79rem;
          align-items: center;
          display: flex;
          justify-content: flex-end;
          .item_label {
            margin-right: auto;
            font-weight: bold;
          }
          .item_date {
            font-size: 0.3rem;
            margin-right: 0.18rem;
          }
          .arrow {
            img {
              height: 0.27rem;
              width: 0.15rem;
            }
          }
        }
        .item_desc {
          padding-bottom: 0.2rem;
          font-size: 0.28rem;
          color: #999999;
          border-bottom: 0.01rem solid #f0f1f2;
        }
      }
      .item_bottom {
        .doctor_advice {
          padding: 0.19rem 0 0.4rem;
          .top {
            display: flex;
            color: #777777;
            .label {
              font-size: 0.28rem;
              font-weight: bold;
            }
            .advice_time {
              margin-right: 0.33rem;
              margin-left: auto;
              font-size: 0.3rem;
            }
          }
          .doctorInfo {
            margin-top: 0.18rem;
            align-items: center;
            display: flex;
            .img {
              position: relative;
              img {
                width: 1.22rem;
                height: 1.22rem;
              }
              .tag {
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.2rem;
                position: absolute;
                bottom: -0.1rem;
                width: 1.31rem;
                height: 0.44rem;
                background: url("../../../../../assets/imgs/advice2.png") no-repeat;
                background-size: 100% 100%;
              }
            }
            .text {
              margin-left: 0.3rem;
              font-size: 0.3rem;
              .name {
                color: #5b5b5b;
                font-weight: bold;
              }
              .rank {
                color: #777777;
                font-weight: 400;
              }
            }
          }
          .advice {
            font-size: 0.28rem;
            font-weight: 400;
            color: #999999;
            margin-top: 0.22rem;
          }
        }
      }
      &:not(:last-child) {
        margin-bottom: 0.25rem;
      }
    }
  }
  .upload_record {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 3.01rem;
      height: 0.61rem;
    }
  }
}
</style>
<style>
@import url('../../../../../assets/less/vantstyle/dialog.css');
</style>