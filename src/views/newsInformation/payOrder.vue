<template>
    <div class="payOrder">
        <div class="main">
            <div class="acticle">
                <div class="act_img"><img src="../../assets/imgs/wxyq_3.png" alt=""></div>
                <div class="act_msg">
                    <div class="msg_title">{{this.title}}</div>
                    <div class="msg_name">{{this.author}} •  主任医师 •  宁波市医疗中心 李惠利医院</div>
                    <div class="msg_dr">
                        <div class="msg_price">￥{{this.price}}</div>
                        <div class="msg_num"> x {{this.num}}</div>
                    </div>
                </div>
            </div>
            <div class="preferential">
                <div class="pre_top">
                    <div class="top_text">优惠券</div>
                    <div class="top_have">
                        <div class="have_text">无可用</div>
                        <div class="have_icon"><img src="@/assets/imgs/btn_news_pay_next.png" alt=""></div>
                    </div>
                </div>
                <div class="pre_btm">
                    <div class="top_text">代金券</div>
                    <div class="top_have">
                        <div class="have_text">无可用</div>
                        <div class="have_icon"><img src="@/assets/imgs/btn_news_pay_next.png" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="vip">
                <div class="vip_top">
                    <div class="top_title">
                        <div class="title_left">
                            <img src="@/assets/imgs/icon_news_pay_vip.png" alt="">
                            <div class="top_text">会员折扣</div>
                        </div>
                        <div class="title_right"><img src="@/assets/imgs/btn_news_pay_next.png" alt=""></div>
                    </div>
                </div>
                <div class="vip_btm"> 1元/天全年免费，专属健康档案  9项会员特权 ，尊享服务折上8折</div>
            </div>
            <div class="payway">
                <div class="title">支付方式</div>
                <van-radio-group v-model="radio" >
                    <van-radio name="1" @click="getName()">
                        微信支付
                        <template #icon="props" >
                        <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
                        </template>
                    </van-radio>
                    <van-radio name="2" @click="getName()">
                        支付宝
                        <template #icon="props">
                        <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
                        </template>
                    </van-radio>
                    <van-radio name="3" style="border:none" @click="getName()" disabled>
                        倍熙钱包
                        <template #icon="props">
                        <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
                        </template>
                    </van-radio>
                </van-radio-group>
            </div>
            <div class="tip">
                本课程虚拟内容服务，已经购买完成。无法退订、转让，敬请谅解                         
            </div>
        </div>
        <div class="space" style="width:100%;height:1rem"></div>
        <div class="buy">
            <div class="all">总计 : <span>￥{{this.price}}</span></div>
            <div class="btn" @click="buyNews()">确认支付</div>
        </div>
    </div>
</template>
<script>
import qs from 'qs'
import { alipay } from '../../api/apiz'
export default {
    name:'payOrder',
    data(){
        return{
            title:'高血压是怎么回事？',
            price:10.00,
            num:1,
            author:'刘佳',
            activeTabIndex:0,
            radio: '1',
            activeIcon: require('../../assets/imgs/btn_pay_choice_pre.png'),
            inactiveIcon:require('../../assets/imgs/btn_pay_choice_nor.png') ,
            buyList:{
                catCd:'60000.160.140',
                subject:'', //标题
                userId:4902136544580608,
                productId:'4944743447647232', //商品id
                totalAmount:'10.00', //总价
                phone:'',
                name:'',
                addr:'',
                array:[], //商品系数
                timeoutExpress:'30' //付款时间限制
            }
        }
    },
    methods:{
        getName(){
            console.log('radio',this.radio)
        },
        buyNews(){
            this.buyList.array= [],
            this.buyList.array.push(this.title,this.price,this.num,this.author)
            this.buyList.subject = this.title
            let BuyList = this.buyList
            if(this.radio === '2'){
                alipay({params:BuyList}).then( res => {
                    console.log(res)
                }).catch( err => {
                    console.log(err)
                })
                // this.jsp('createOrder',{...this.buyList}).then((res)=>{
                //     console.log(res)
                // }).catch((err)=>{
                //     console.log(err);
                // })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.payOrder{
    height: 100%;
    width: 100%;
    .main{
        background-color: rgb(244, 244, 244);
        padding: .3rem;
        .acticle{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: .28rem;
            background-color: white;
            border-radius: .2rem;
            .act_img{
                width: 1.8rem;
                height: 1.8rem;
                img{
                    width: 1.8rem;
                    height: 1.8rem;
                }
            }
            .act_msg{
                display: flex;
                flex-direction: column;
                margin-left: .3rem;
                font-size:.28rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(163,163,163,1);
                .msg_title{
                    font-size:.3rem;
                    color:rgba(76,76,76,1);
                }
                .msg_name{
                    padding: .2rem 0rem;
                }
                .msg_dr{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .msg_price{
                        font-size:.3rem;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(239,107,17,1);
                    }
                    .msg_num{
                        font-size:.26rem;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(73,73,73,1);
                    }
                }
            }
        }
        .preferential{
            display: flex;
            flex-direction: column;
            background-color: white;
            margin-top: .3rem;
            border-radius: .2rem;
            padding: .3rem;
            .pre_top{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-content: center;
                font-size:.3rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(160,160,160,1);
                padding-bottom: .28rem;
                border-bottom:0.01rem solid rgba(160,160,160,.5);
                .top_text{

                }
                .top_have{
                    display: flex;
                    flex-direction: row;
                    .have_text{
                        margin-right: .15rem;
                        color:rgba(73,73,73,1);
                    }
                    .have_icon{
                        width: .1rem;
                        height: .2rem;
                        img{
                            margin-top: .15rem;
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .pre_btm{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-content: center;
                font-size:.3rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(160,160,160,1);
                padding-top: .28rem;
                .top_text{

                }
                .top_have{
                    display: flex;
                    flex-direction: row;
                    .have_text{
                        color:rgba(73,73,73,1);
                        margin-right: .15rem;
                    }
                    .have_icon{
                         width: .1rem;
                         height: .2rem;
                         img{
                             margin-top: .15rem;
                             width: 100%;
                             height: 100%;
                            }
                    }
                }
            }
        }
        .vip{
            display: flex;
            flex-direction: column;
            background-color: white;
            margin-top: .3rem;
            border-radius: .2rem;
            font-size:.3rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(160,160,160,1);
            padding: .3rem;
            .vip_top{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding-bottom: .3rem;
                border-bottom: 0.01rem solid rgba(160,160,160,.5);
                .top_title{
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    justify-content: space-between;
                    .title_left{
                        display: flex;
                        flex-direction: row;
                        img{
                            width: .48rem;
                            height: .26rem;
                            margin-top: .05rem;
                        }
                        .top_text{
                            margin-left: .2rem;
                        }
                    }
                    .title_right{
                        width: .1rem;
                        height: .2rem;
                        img{
                            margin-top: .1rem;
                            height: 100%;
                            width: 100%;
                        }
                    }
                }
            }
            .vip_btm{
                padding-top: .3rem;
                font-size:.26rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(239,107,17,1);
            }
        }
        .payway{
            margin-top: .3rem   ;
            padding: .3rem;
            font-size:.3rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(73,73,73,1);
            background-color: white;
            .title{
                padding: .3rem 0rem;
                border-bottom: 0.01rem solid rgba(160,160,160,.5);
            }
            .van-radio{
                padding: .3rem 0rem;
                border-bottom: 0.01rem solid rgba(160,160,160,.5);
            }
            // #radio{
            //     border: none;
            // }
            .van-radio__icon{
                width: .32rem;
                height: .32rem;
                .img-icon {
                    width: .32rem;
                    height: .32rem;
                }
            }
        }
        .tip{
            margin-top: .3rem;
            font-size:.26rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(173,173,173,1);
        }
    }
    .buy{
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 1.2rem;
        background-color: white;
        justify-content: flex-end;
        align-items: center;
        .all{
            font-size:.3rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(73,73,73,1);
            line-height: 1.2rem;
            margin-right: .3rem;
            span{
                color: rgba(241, 127, 49, 1);
                font-weight:bold;
            }
        }
        .btn{
            width: 3rem;
            height: .7rem;
            background-image: url('../../assets/imgs/btn_bg_pay.png');
            background-size: 100% 100%;
            color: white;
            font-size:.32rem;
            text-align: center;
            line-height: .7rem;
            margin-right: .3rem;
        }
    }
}
</style>