<template>
<!-- 服务说明 -->
  <div class="serviceExplain_container">
      <div class="banner_container"></div>
      <div class="tip_container">
          <div class="tip">号难挂，队难排？您足不出户，倍熙帮您搞定</div>
          <div class="price">
              <div class="market_price">
                  <div class="val">￥120</div>
                  <div class="title">市场价</div>
              </div>
              <div class="member_price">
                  <div style="display:flex;align-items: flex-end;"><div class="val">￥68</div><span>起</span></div>
                  <div class="title">会员价</div>
              </div>
          </div>
      </div>
      <div class="service_container">
          <div class="card service_info">
              <div class="title">服务内容</div>
              <div class="info_text">为您代办各大医院预约挂号，服务完成后，您将及时 收到挂号信息。</div>
              <div class="hospital">
                  <div class="hospital_title">开通服务医院列表：</div>
                  <div class="hospital_list">
                      <div class="item" v-for="item in hospitalList">
                          {{item}}
                      </div>
                  </div>
              </div>
          </div>
          <div class="card service_notice">
              <div class="title">服务须知</div>
              <div class="notice_text">1、该服务为普通门诊挂号，请不含名医加号服务。 如需挂名医门诊，请前往“名医直通”中的“名医门 诊”预约。</div>
              <div class="notice_text">2、我们将在收到您的服务需求后2小时内为您办理完 成，急诊请勿下单！</div>
              <div class="notice_text">3、由于医疗资源稀缺，挂号预约成功后，无法再修 改或退款，敬请理解！</div>
          </div>
          <div class="card fee_notice">
              <div class="title">费用须知</div>
          </div>
          <div class="card cancel_detail">
              <div class="title">取消细则</div>
              <div class="detail_text">1、下单后，您可在客服接单前修改或取消该订单；</div>
              <div class="detail_text">2、若客服已接单，您可致电400-800-1808咨询是否 可以人工取消或修改。我们将根据实际情况确定是否 可以取消或修改。若订单已在执行过程中，则无法为 您取消，敬请谅解。</div>
          </div>
      </div>
      <div class="button_container">
          <div class="customer_service">
              <img src="@/assets/imgs/icon_bjjy_service.png"/>
              客服
          </div>
          <div class="order_immediately" @click="JumpToFormPage">立即下单</div>
      </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'serviceExplain',
    data(){
        return{
            hospitalList:[
                '宁波市第一医院','宁波市李惠利医院','宁波市第二医院','宁波市妇儿医院'
            ]
        }
    },
    created(){

    },
    computed:{
    },
    watch:{

    },
    mounted(){
        sessionStorage.removeItem('doctorInfo')
        sessionStorage.removeItem('patientInfo')
        sessionStorage.removeItem('nurseInfo')
        sessionStorage.removeItem('therapistInfo')
        window.addEventListener('scroll', function(){
        var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
        var clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
        var scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端
        if(scr + clientHeight>= scrHeight){
            if(1){
                console.log("a  ")
            }else{
            return;
            }
        }
        });
    },
    methods:{
        JumpToFormPage(){
            this.$router_({name:'outpatientRegistrate'})
        }
    }
}
</script>

<style lang="less" scope>
.serviceExplain_container{
    background-color: #f4f4f4;
    .banner_container{
        height: 3.2rem;
        background: url('../../assets/imgs/img_bjfw_ghfw.png') no-repeat;
        background-size: 100% 100%;
    }
    .tip_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 2.58rem;
        font-size: 0.28rem;
        box-sizing: border-box;
        padding: 0.3rem 0 0.6rem;
        background-color: #ffffff;
        .tip{ 
            color: #777777;
        }
        .price{
            margin-top: 0.32rem;
            display: flex;
            align-items: center;
            .market_price{
                padding-right: 0.8rem;
                border-right: 0.01rem solid #ECECEC;
            }
            .member_price{
                margin-left: 0.8rem;
            }
            .val{
                font-weight: bold;
                font-size: 0.36rem;
                color: #D05C28;
            }
            .title{
                color: #606060;
                letter-spacing: 0.08rem;
            }
            span{
                font-weight: bold;
                color: #D05C28;
            }
        }
    }
    .service_container{
        color: #777777;
        font-size: 0.28rem;
        padding: 0 0.25rem 0.25rem;
        .service_info{
            .info_text{
                padding: 0.15rem 0.12rem 0.11rem 0.06rem;
                border-bottom: 0.02rem solid #EAEAEA;
            }
            .hospital{
                padding: 0.15rem 0 0 0.06rem;
                .hospital_title{
                    font-weight: bold;
                }
                .hospital_list{
                    display: flex;
                    flex-wrap: wrap;
                    .item{
                        margin-right: 0.74rem;
                        margin-top: 0.14rem;
                    }
                }
            }
        }
        .service_notice{

        }
        .fee_notice{

        }
        .cancel_detail{

        }
        .card{
            border-radius: 0.08rem;
            box-shadow: 0rem 0rem 0.08rem #a7a7a7;
            width: 7rem;
            box-sizing: border-box;
            padding: 0.12rem 0.2rem 0.14rem;
            background-color: #ffffff;
            margin-top: 0.25rem;
            .title{
                padding: 0 0 0.13rem 0.06rem;
                border-bottom: 0.02rem solid #EAEAEA;
                font-weight: bold;
                font-size: 0.3rem;
            }
        }
    }
    .button_container{
        font-size: 0.36rem;
        display: flex;
        height: 0.98rem;
        .customer_service{
            align-items: center;
            width: 2rem;
            display: flex;
            color: #289F9C;
            justify-content: center;
            background-color: #C5E7DD;
            img{
                margin-right: 0.18rem;
                width: 0.4rem;
                height: 0.4rem;;
            }
        }
        .order_immediately{
            justify-content: center;
            display: flex;
            align-items: center;
            width: 5.5rem;
            background-color: #3EB4A1;
            color: #ffffff;
        }
    }
}
 </style>
