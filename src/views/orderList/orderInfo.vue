// 2020/1/17 created by xtt
<template>
    <div class="orderInfo">
      <div class="o_top">
        <div class="o_top_img"></div>
        <div class="o_top_right">
          <div class="o_top_right_service">挂号服务</div>
          <div class="o_top_right_price">会员价：¥68.00 ¥120.00</div>
        </div>
      </div>
      <div class="o_info">
        <div class="o_info_top">订单信息</div>
        <div class="o_info_content">
         <div class="o_info_content_text">就诊项目：<span>挂号服务</span></div>
          <div class="o_info_content_text">
            下单日期：<span>2019-12-27</span>
          </div>
          <div class="o_info_content_text">
            订单编号：<span>JZ20191227000141</span>
          </div>
          <div class="o_info_content_text">
            就&ensp;诊&ensp;人：<span>王娇娇  男  36    13732182995</span>
          </div>
          <div class="o_info_content_text">
            服务费用：<span>58.00元</span>
          </div>
        </div>
      </div>
      <div class="o_seedoctor">
        <div class="o_info_top">就医信息</div>
        <div class="o_info_content">
          <div class="o_info_content_text">医&emsp;&emsp;院：<span>宁波第一医院</span></div>
          <div class="o_info_content_text">
            就诊科室：<span>普通    普通内科</span>
          </div>
          <div class="o_info_content_text">
            医&emsp;&emsp;生：<span>李建波</span>
          </div>
          <div class="o_info_content_text">
            预约时间：<span>2019-12-27    上午</span>
          </div>
          <div class="o_info_content_text">
            病情描述：<span>
                                感冒发烧流鼻涕呕吐，头一阵一阵的头一阵一阵的
                            </span>
          </div>
        </div>
      </div>
      <div class="o_datdcard">
        <div class="o_info_top">资料卡证信息</div>
        <div class="o_info_content_z">
        <div class="o_info_content_text">医保卡号：<span>A20190004</span></div>
        </div>
        <div class="o_datacard_s">证件卡递送方式
        <div class="o_datdcard_s_k">快递寄送</div>
        <img src="../../assets/imgs/btn_da_next.png"/>
        </div>
        <div class="o_datdcard_address">
          <div class="o_info_content_text">
            寄送地址：<span>中山西2号恒隆中心11A</span>
          </div>
        </div>
        <div class="o_datdcard_receive">
          <div class="o_info_content_text">
            收&ensp;件&ensp;人：<span>健康管家  18011484679</span>
          </div>
        </div>
        <div class="o_datacard_s">证件卡递回方式
          <div class="o_datdcard_s_k">服务点自取</div>
          <img src="../../assets/imgs/btn_da_next.png"/>
        </div>
        <div class="o_datdcard_address">
          <div class="o_info_content_text">
            递回地址：<span>中山西2号恒隆中心11A</span>
          </div>
        </div>
        <div class="o_datdcard_receive2">
          <div class="o_info_content_text">
            收&ensp;件&ensp;人：<span>健康管家  18011484679</span>
          </div>
        </div>
      </div>
      <div class="o_pay">
        <div class="o_info_top">支付信息</div>
        <div class="o_info_content">
        <div class="o_info_content_text">
          付款方式：<span>微信支付</span>
        </div>
        <div class="o_info_content_text">
          预付定金：<span>¥68</span>
        </div>
        <div class="o_info_content_text">
          优&emsp;&emsp;惠：<span>¥10</span>
        </div>
          <div class="o_info_content_text_b">
            实付金额：<span>¥58</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "orderInfo"
    }
</script>

<style scoped lang="less">
.orderInfo{
  width: 100%;
  background: #F4F4F4;
  padding-bottom: 0.2rem;
  .o_top{
    width: 7rem;
    height: 1.62rem;
    margin: 0.2rem auto;
    border: 0.02rem solid #E6E6E6;
    border-radius: 0.2rem;
    background: white;
    display: flex;
    justify-content: flex-start;
    .o_top_img{
      margin-top: 0.3rem;
      margin-left: 0.2rem;
      width: 1rem;
      height: 1rem;
      background: #40b2a0;
      border-radius: 0.5rem;
    }
    .o_top_right{
      margin-top: 0.35rem;
      margin-left: 0.3rem;
      font-size: 0.3rem;
      color: #777777;
      .o_top_right_service{
        width: 1.2rem;
        height: 0.28rem;
        font-weight: bold;
      }
      .o_top_right_price{
        margin-top: 0.25rem;
        font-weight: normal;

      }
    }
  }
  .o_info_top{
    color: #777777;
    font-size: 0.3rem;
    font-weight: bold;
    margin: 0.2rem auto;
    width: 6.6rem;
    height: 0.6rem;
    border-bottom: 0.02rem solid #E3E3E5;
  }
  .o_info_content_z{
    margin: 0 auto;
    width: 6.6rem;
    height: 0.6rem;
    border-bottom: 0.02rem solid #E3E3E5;
    color: #A0A0A0;
    font-size: 0.3rem;
    span{
      color: #777777;
    }
  }
  .o_info_content{
    margin: 0 auto;
    width: 6.6rem;
    height: auto;
    color: #A0A0A0;
    font-size: 0.3rem;
  }
  .o_info_content_text{
    margin-top: 0.15rem;
    span{
      color: #777777;
    }
  }
  .o_info_content_text_b{
    color: #777777;
    font-weight: bold;
    margin-top: 0.15rem;
  }
  .o_info{
    width: 7rem;
    height: 3.8rem;
    margin: 0.2rem auto;
    border: 0.02rem solid #E6E6E6;
    border-radius: 0.2rem;
    background: white;
  }
  .o_seedoctor{
    width: 7rem;
    height: auto;
    padding-bottom: 0.2rem;
    margin: 0.2rem auto;
    border: 0.02rem solid #E6E6E6;
    border-radius: 0.2rem;
    background: white;
  }
  .o_datdcard{
    width: 7rem;
    height: auto;
    margin: 0.2rem auto 0 auto;
    border: 0.02rem solid #E6E6E6;
    border-radius: 0.2rem;
    background: white;
    .o_datacard_s{
      margin: 0.2rem auto;
      width: 6.6rem;
      height: 0.6rem;
      border-bottom: 0.02rem dashed #E3E3E5;
      color: #777777;
      font-size: 0.3rem;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      .o_datdcard_s_k{
        width: 1.5rem;
        height: 0.3rem;
        text-align: right;
        font-weight: normal;
        margin-right: -2.4rem;
      }
      img{
        margin-top: 0.08rem;
        width: 0.18rem;
        height: 0.27rem;
      }
    }
    .o_datdcard_address{
      margin: 0.2rem auto;
      width: 6.6rem;
      height: 0.6rem;
      border-bottom: 0.02rem dashed #E3E3E5;
      color: #A0A0A0;
      font-size: 0.3rem;
    }
    .o_datdcard_receive{
      margin: 0.2rem auto;
      width: 6.6rem;
      height: 0.6rem;
      border-bottom: 0.02rem solid #E3E3E5;
      color: #A0A0A0;
      font-size: 0.3rem;
    }
    .o_datdcard_receive2{
      margin: 0.2rem auto;
      width: 6.6rem;
      height: 0.6rem;
      color: #A0A0A0;
      font-size: 0.3rem;
    }
  }
  .o_pay{
    width: 7rem;
    height: 3.3rem;
    margin: 0.2rem auto 0 auto;
    border: 0.02rem solid #E6E6E6;
    border-radius: 0.2rem;
    background: white;
  }
}
</style>
