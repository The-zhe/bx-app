// 2020/2/3 created by xtt
<template>
    <div class="payment">
      <div class="paytop">
        <div class="paytop_img"></div>
        <div class="paytop_right">
          <div class="paytop_right_service">挂号服务</div>
          <div class="paytop_right_price">会员价：¥68.00 ¥120.00</div>
        </div>
      </div>
      <div class="paycount">
        <div class="paycount_pay"><div class="paycount_left">预付定金</div> <div class="paycount_pay_m">¥68.00</div></div>
        <div class="paycount_red">
          <div class="paycount_left">现金红包抵扣</div>
          <div class="paycount_red_div">22</div>
          <div class="paycount_red_price">-¥10.00</div>
          <div class="paycount_red_next"></div>
          </div>
        <div class="paycount_sub">
          <div class="paycount_left">小计</div>
          <div class="paycount_sub_price">¥58.00</div></div>
      </div>
      <div class="payway">
        <div class="payway_way">支付方式</div>
        <van-radio-group v-model="radio">
          <div class="payway_wx"> <van-radio name="1" shape="square" checked-color="#3FB29D">微信支付</van-radio></div>
          <div class="payway_zfb"><van-radio name="2" shape="square" checked-color="#3FB29D">支付宝</van-radio></div>
        </van-radio-group>
       <!-- <div class="payway_wx"><input type="radio" name="pay" value="n" /><label>微信支付</label></div>
        <div class="payway_zfb"><input type="radio" name="pay" value="n" /><label>支付宝</label></div>-->
      </div>
      <div class="paycheck">
        <van-checkbox v-model="checked" shape="square" checked-color="#3FB29D">我以知晓并同意《下单须知》的全 部内容，对服务条款和费用无异议</van-checkbox>
      </div>
      <div class="paybtn" @click="toPay">确认支付</div>
    </div>
</template>

<script>
    export default {
        name: "payment",
       data(){
          return{
            radio:'',
            checked:false
          }
       },
      methods:{
          //用户确认支付请求下单-后台返要跳转的url
        toPay(){
         /* 微信
           // api 请求  发订单信息给后台
          // 得到res （url） window.location.href=res.data.url 收到返回的要跳转的url
           //支付成功后 再次请求api 查询支付结果
          //得到res 支付结果
          //展示支付结果*/

         //支付宝

         /* res => {
            const div = document.createElement('div');
            div.innerHTML = res.html;
            document.body.appendChild(div);
            document.forms.alipaysubmit.submit();



           div.innerHTML=res.data.data;
         document.body.appendChild(div);
        // 一
        // document.forms[0].submit()
        // 二
        // document.forms.alipaysubmit.submit()
        // 三
        document.forms['alipaysubmit'].submit()


       想打开新的页面跳转支付宝
       // 打开新的页面进行填充html。
       var newwindow = window.open("#","_blank");
       newwindow.document.write(response.data);
          }*/
        }
      }
    }
</script>
<style>
  @import url('../../assets/less/vantstyle/icon.css');
  @import url('../../assets/less/vantstyle/radio.css');
  @import url('../../assets/less/vantstyle/checkbox.css');
</style>
<style lang="less">
  .payment{
    .van-radio__label{
      color: #777777 !important;
      font-size: 0.3rem !important;
      font-weight: normal !important;
    }
    .van-radio__icon .van-icon{
      border-radius: 0.1rem !important;
    }
    .van-checkbox__icon .van-icon{
      border-radius: 0.1rem !important;
    }
    .van-checkbox__label{
      color: #A3A3A3 !important;
      font-size: 0.26rem !important;
    }
  }
</style>
<style scoped lang="less">
.payment{
  width: 100%;
 .paytop {
   height: 1.8rem;
   background: white;
   display: flex;
   justify-content: flex-start;

   .paytop_img {
     margin-top: 0.3rem;
     margin-left: 0.4rem;
     width: 1rem;
     height: 1rem;
     background: #40b2a0;
     border-radius: 0.5rem;
   }

   .paytop_right {
     margin-top: 0.35rem;
     margin-left: 0.3rem;
     font-size: 0.3rem;
     color: #777777;

     .paytop_right_service {
       width: 1.2rem;
       height: 0.28rem;
       font-weight: bold;
     }

     .paytop_right_price {
       margin-top: 0.25rem;
       font-weight: normal;
     }
   }
 }
  .paycount{
    margin-top: 0.2rem;
    height: 2.7rem;
    background: white;
    font-size: 0.3rem;
    color: #777777;
    font-weight: bold;
    .paycount_left{
      margin-top: 0.3rem;
      margin-left: 0.2rem;
    }
    .paycount_pay{
      margin: 0 auto;
      width: 7rem;
      height: 0.9rem;
      border-bottom: 0.02rem solid #E5E5E7;
      display: flex;
      justify-content: space-between;
      .paycount_pay_m{
        margin-right: 0.3rem;
        margin-top: 0.3rem;
      }
    }
    .paycount_red{
      margin: 0 auto;
      width: 7rem;
      height: 0.9rem;
      border-bottom: 0.02rem solid #E5E5E7;
      display: flex;
      justify-content: space-between;
      .paycount_red_div{
        margin-top: 0.35rem;
        margin-right: 2.5rem;
        width: 0.31rem;
        height: 0.31rem;
        background: #FA706C;
        border-radius: 0.1rem;
        font-size: 0.2rem;
        color: white;
        font-weight: normal;
        line-height: 0.3rem;
        text-align: center;
      }
      .paycount_red_price{
        margin-top: 0.3rem;
      }
      .paycount_red_next{
        margin-right: 0.1rem;
        margin-top: 0.4rem;
        width: 0.15rem;
        height: 0.27rem;
        background: url("../../assets/imgs/btn_da_next.png") no-repeat;
        background-size: 0.15rem 0.27rem;
      }
    }
    .paycount_sub{
      margin: 0 auto;
      width: 7rem;
      height: 0.9rem;
      display: flex;
      justify-content: space-between;
      .paycount_sub_price{
        margin-top: 0.2rem;
        margin-right: 0.3rem;
        font-size: 0.36rem;
        color: #FD6D65;
      }
    }
  }
  .payway{
    margin-top: 0.2rem;
    height: 2.7rem;
    background: white;
    font-size: 0.3rem;
    color: #777777;
    font-weight: bold;
    .payway_way{
      margin: 0 auto;
      width: 6.7rem;
      height: 0.6rem;
      border-bottom: 0.02rem solid #E5E5E7;
      padding-left: 0.3rem;
      padding-top: 0.3rem;
    }
    .payway_wx{
      margin: 0 auto;
      width: 7rem;
      height: 0.9rem;
      border-bottom: 0.02rem solid #E5E5E7;
      color: #777777;
      font-size: 0.3rem;
    }
    .payway_zfb{
      margin: 0 auto;
      width: 7rem;
      height: 0.9rem;
      color: #777777;
      font-size: 0.3rem;
    }
  }
  .paycheck{
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    margin-left: -2.25rem;
    width: 4.5rem;
    height: 0.9rem;
    color: #A3A3A3;
    font-size: 0.26rem;
  }
  .paybtn{
    position: absolute;
    bottom: 0;
    height: 0.98rem;
    width: 100%;
    background: #40B2A0;
    color: white;
    font-size: 0.36rem;
    line-height: 0.98rem;
    text-align: center;
  }
}
</style>
