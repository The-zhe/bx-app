<template>
  <div class="diseaseDetail_container">
    <div class="headerPart_container">
    </div>
    <div class="info">
        <div class="item_top">
          <div class="item_header">
            <div class="item_label">病情描述：</div>

            <div class="item_date">2019-11-10  08:00</div>
          </div>
          <div class="item_desc">冠心病，风湿性心脏病，先天性心脏病，高血压性心 脏病，贫血性心脏病，扩张性心肌病等，心脏疾病图 胸片心脏电生理检查，心脏彩超检。</div>
        </div>
        <div class="item_bottom">
          <div class="doctor_advice">
            <div class="top">
              <div class="label">医生建议：</div>
              <div class="advice_time">2019-11-10  11:34</div>
            </div>
            <div class="doctorInfo">
              <div class="img">
                <img :src="item" />
                <div class="tag">私人医生</div>
              </div>
              <div class="text">
                <div class="name">李英</div>
                <div class="rank">副主任医师</div>
              </div>
              <div class="contact">
                联系TA
              </div>
            </div>
            <div class="advice">近期饮食需要以清单为主，不要吃油腻辛辣食物。多 喝水</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'diseaseDetail',
    data(){
        return{
        }
    },
    created(){

    },
    computed:{
    },
    watch:{

    },
    mounted(){
    },
    methods:{

    }
}
</script>

<style lang="less" scope>
.diseaseDetail_container{
  .headerPart_container{
    height: 1.16rem;
    background-color: #008B84;
  }
  .info{
      margin: -0.86rem auto 0;
      border-radius: 0.1rem;
      box-shadow: 0 0 0.05rem #a9a9a9;
      padding: 0 0.2rem;
      box-sizing: border-box;
      width: 7rem;
      background-color: #fff;
      font-size: 0.3rem;
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
            color: #40B2A0;
          }
          .item_date {
            margin-right: 0.09rem;
          }
        }
        .item_desc {
          padding-bottom: 0.35rem;
          font-size: 0.28rem;
          color: #777777;
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
              color: #40B2A0;
              font-size: 0.28rem;
              font-weight: bold;
            }
            .advice_time {
            margin-right: 0.09rem;
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
                background: url("../../assets/imgs/advice2.png") no-repeat;
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
            .contact{
              margin-left: auto;
              width: 1.4rem;
              height: 0.61rem;
              background-color: #3EB4A1;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 0.1rem;
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
 </style>
