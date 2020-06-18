<template>
    <div class="bxhome">
        <div class="header">
            <div class="hd_img">
                <img src="../../assets/imgs/logo.png" alt="">
            </div>
            <div class="hd_title">倍熙私人医生</div>
            <div class="hd_navigat">
                <img src="../../assets/imgs/btn_menu.png" alt="">
            </div>
        </div>
        <div class="herder_c" style="height: 1rem;"></div>
        <div class="bx_main">
            <van-swipe :autoplay="3000" style="height:3.5rem;width:100%">
                <van-swipe-item v-for="(image, index) in topImages" :key="index">
                    <img :src="image.image" style="width:100%;height:100%" @click="toNewDetail(image)">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="convenient"> <!-- 便捷就医 -->
            <div class="con_title">
                <div class="con_title_top">
                    <div class="line"></div>
                    <div class="con_title_text">便捷就医</div>
                    <div class="line"></div>
                </div>
                <div class="con_text">CONVENIENT MEDICAL TREATMENT</div>
            </div>
            <van-grid :column-num="4" >
                <van-grid-item v-for="(service,index) in convenient" :key="index" :icon="service.image" :text="service.name" border="false" :url="service.outUrl"/>
            </van-grid>
            <div class="con_classificat">
                全部分类 >
            </div>
        </div>

        <div class="management"> <!-- 专项管理 -->
            <div class="mgt_title">
                <div class="mgt_title">
                    <div class="mgt_title_top">
                        <div class="line"></div>
                        <div class="mgt_title_text">专项管理</div>
                        <div class="line"></div>
                    </div>
                    <div class="mgt_text">SPECIAL MANAGEMENT</div>
                </div>
            </div>
            <div class="mgt_ad" v-for="(item,index) in adList" :key="index">
                <img :src="item.image" alt="">
            </div>
        </div>

        <div class="goods">
            <div class="goods_title">
                <div class="goods_title">
                    <div class="goods_title_top">
                        <div class="line"></div>
                        <div class="goods_title_text">健康优品</div>
                        <div class="line"></div>
                    </div>
                    <div class="goods_text">EXCELLENT HEALTH PRODUCTS</div>
                </div>
            </div>
            <div class="goods_list">
                <ul>
                    <li class="goods_detail" v-for="(goods,index) in goodsList" :key="index">
                        <div class="goods_img">
                            <img v-if="goods.imgUrl !== ''" :src="goods.imgUrl" alt="" >
                            <img v-else src="../../assets/imgs/img_yjyy_photo.png">
                        </div>
                        <div class="goods_name">{{goods.name}}</div>
                        <div class="goods_msg">{{goods.subject}}</div>
                        <div class="price">
                            <div class="goods_price">￥{{goods.salePrice}}</div>
                            <div class="goods_old">￥{{goods.oldPrice}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="advertise" v-for="(adver,index) in adverList" :key="index">
            <img :src="adver.imgUrl" alt="">
        </div>

        <div class="new">
            <div class="new_title">
                <div class="new_title">
                    <div class="new_title_top">
                        <div class="line"></div>
                        <div class="new_title_text">健康新闻</div>
                        <div class="line"></div>
                    </div>
                    <div class="new_text">HEALTH NEWS</div>
                </div>
            </div>
            <div class="big_New">
                <div class="big_Img">
                    <img :src="bigImgUrl" alt="">
                </div>
                <div class="big_Text">
                    <div class="big_Detail">{{bigname}}</div>
                    <div class="big_Bottom">
                        <div class="big_time">{{bigcrtTm|fromNowTime}}</div>
                        <div class="big_read">
                            <img src="../../assets/imgs/icon_home_see.png" alt="">
                            <span>{{bigreadNum}}</span> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="new_list" v-for="(news,index) in newsList" :key="index">
                <div class="list_detail">
                    <div class="list_top">
                        {{ news.name===''?'这是测试文本':news.name }}
                    </div>
                    <div class="list_bottom">
                        <div class="list_time">{{news.crtTm|fromNowTime}}</div>
                        <div class="list_read">
                            <img src="../../assets/imgs/icon_home_see.png" alt="">
                            <span>{{news.readNum}}</span>
                        </div>
                    </div>
                </div>
                <div class="list_img">
                    <img v-if="news.images !== ''" :src="news.images" alt="">
                    <img v-else src="../../assets/imgs/img_yjyy_photo.png">
                </div>
            </div>
            <div class="moreNews" @click="toNewslist()">查看更多 >></div>
        </div>
    </div>
</template>
<script>
import { getHomeInfo } from "../../api/apiz";
import moment from "moment";
export default {
    name: 'bxhome',
    filters: {
      fromNowTime: function (value) {
        let array = moment(value)
          .fromNow()
          .split(" ");
        array[0] = array[0] == "a" ? "1" : array[0] == "an" ? "1" : array[0] + "";
        let EN = [
          "minute",
          "minutes",
          "hour",
          "hours",
          "day",
          "days",
          "month",
          "months",
          "year",
          "years"
        ];
        let CN = ["分钟", "小时", "天", "个月", "年"];
        array[1] = CN[parseInt(EN.indexOf(array[1]) / 2)];
        return array.length == 4
          ? "几秒前"
          : new Array(array[0], array[1]).join("") + "前";
      }
    },
    data(){
        return{
            reporttime: moment().subtract(1, "days").format("YYYY-MM-DD"), //报道时间
            userId:'4745078308721662',
            topImages: [],  //顶部轮播图
            serviceType:[],  //便捷就医
            adList:[],  //专项管理
            goodsList:[],  //商品
            adverList:[
                {
                    imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg'
                }
            ],
            newsList:[],
            convenient:[], //服务类型
            bigImgUrl:'',
            bigid:'',
            bigname:'',
            bigreadNum:'',
            bigtype:'',
            bigcrtTm:'',
            bigsourceId:'',
        }
    },
    methods:{
        getInfo(){
            getHomeInfo(this.userId).then( res =>{
                console.log(res)
                this.topImages = res.data.data.bannerHjjkIndexInfoDtos //轮播图
                this.serviceType = res.data.data.quickDocBodyHjjkIndexInfoDtos //便捷就医
                this.adList = res.data.data.adHjjkIndexInfoDtos //专项管理
                this.goodsList = res.data.data.hjjkIndexGoodsDtos  //商品
                var newList = res.data.data.healthBodyHjjkIndexInfoDtos
                this.bigImgUrl=newList[0].images;  // 新闻第一条
                this.bigid=newList[0].id;
                this.bigname=newList[0].name;
                this.bigreadNum=newList[0].readNum;
                this.bigtype=newList[0].type;
                this.bigcrtTm=newList[0].crtTm;
                this.bigsourceId = newList[0].sourceId
                this.newsList = newList.concat()
                this.newsList.shift() //新闻
                this.convenient = res.data.data.quickDocBodyHjjkIndexInfoDtos
            })
        },
        toNewslist(){
            this.$router_({path: "/newsInfo"});
        },
        toNewDetail(image){
            this.$router_({path: "/newsDetails",query:{id:image.id}});
        }
    },
    mounted(){
        this.getInfo()
    }
}
</script>
<style scoped lang="less">
.bxhome{
    width: 100%;
    height:100%;
    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        z-index: 1000;
        width: 100%;
        height: 1rem;
        background-color: red;
        background-image: radial-gradient(at bottom right,rgba(42, 177, 167, 1), rgba(0, 140, 147, 1));
        .hd_img{
            width: .8rem;
            margin-left: .2rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .hd_title{
            font-size:.36rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(255,255,255,1);
        }
        .hd_navigat{
            width: .4rem;
            margin-right: .2rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .bx_main{
        background-color: rgb(244, 244, 244);
    }
    .line{
        width:2.21rem;
        height:.01rem;
        background-color: rgb(230, 230, 230)
    }
    .convenient{
        background: white;
        padding: .2rem;
        padding-top: .42rem;
        .con_title{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: .64rem;
            padding-bottom: .5rem;
            .con_title_top{
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                margin-bottom: .15rem;
                .con_title_text{
                    font-size:.36rem;
                    font-family:Microsoft YaHei;
                    font-weight:bold;
                    color:rgba(42,177,167,1);
                    margin: 0rem .5rem;
                }
            }
            .con_text{
                width: 100%;
                text-align: center;
                font-size:.26rem;
                font-family:Microsoft YaHei;
                font-weight:bold;
                color:rgba(239,125,89,1);
            }
        }
        .con_classificat{
            margin-top:.5rem;
            width: 100%;
            text-align: center;
            font-size:.28rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(127,127,127,1);
        }
    }
    .management{
        margin-top: .3rem;
        background: white;
        padding: .2rem;
        .mgt_title{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: .64rem;
            padding-bottom: .5rem;
            .mgt_title_top{
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                margin-bottom: .15rem;
                .mgt_title_text{
                    font-size:.36rem;
                    font-family:Microsoft YaHei;
                    font-weight:bold;
                    color:rgba(42,177,167,1);
                    margin: 0rem .5rem;
                }
            }
            .mgt_text{
                width: 100%;
                text-align: center;
                font-size:.26rem;
                font-family:Microsoft YaHei;
                font-weight:bold;
                color:rgba(239,125,89,1);
            }
        }
        .mgt_ad{
            height: 2.21rem;
            width: 6.91rem;
            img{
                height: 100%;
                width: 100%;
                margin: .2rem 0;
                margin-left: .1rem;
            }
        }
    }
    .goods{
        width: 100%;
        display: inline-block;
        margin-top: .3rem;
        background-color: rgb(244, 244, 244);
        padding-bottom: .3rem;
        .goods_title{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: .64rem;
            padding-bottom: .6rem;
            .goods_title_top{
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                margin-bottom: .15rem;
                .goods_title_text{
                    font-size:.36rem;
                    font-family:Microsoft YaHei;
                    font-weight:bold;
                    color:rgba(42,177,167,1);
                    margin: 0rem .5rem;
                }
            }
            .goods_text{
                width: 100%;
                text-align: center;
                font-size:.26rem;
                font-family:Microsoft YaHei;
                font-weight:bold;
                color:rgba(239,125,89,1);
            }
        }
        .goods_list{
            ul{
                .goods_detail:nth-of-type(odd){
                    width:3.31rem;
                    // height:5.01rem;
                    margin-left: .3rem;
                    list-style:none;
                    background-color: white;
                    float: left;
                    margin-top: .1rem;
                    border-radius: .3rem .3rem;
                }
                .goods_detail:nth-of-type(even){
                    width:3.31rem;
                    // height:5.01rem;
                    margin-right: .3rem;
                    list-style:none;
                    background-color: white;
                    float: right;
                    margin-top: .1rem;
                    border-radius: .3rem .3rem;
                }
                .goods_img{
                        width: 3.3rem;
                        img{
                            width: 100%;
                        }
                    }
                .goods_name{
                    font-size:.3rem;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(73,73,73,1);
                    line-height:.57rem;
                    padding: 0rem .2rem;
                }
                .goods_msg{
                    font-size:.24rem;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(162,162,162,1);
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    padding: 0.03rem .2rem;
                }
                .price{
                    display: flex;
                    flex-direction: row;
                    .goods_price{
                        font-size:.28rem;
                        font-family:Microsoft YaHei;
                        font-weight:bold;
                        color:rgba(239,107,17,1);
                        padding: .01rem .2rem;
                    }
                    .goods_old{
                        font-size:.2rem;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(162,162,162,1);
                        text-decoration: line-through;
                        margin-top: 0.05rem;
                    }
                }
                
            }
        }
    }
    .advertise{
        width: 100%;
        height: 4rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .new{
        margin-top: .3rem;
        .new_title{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: .64rem;
            padding-bottom: .6rem;
            .new_title_top{
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                margin-bottom: .15rem;
                .new_title_text{
                    font-size:.36rem;
                    font-family:Microsoft YaHei;
                    font-weight:bold;
                    color:rgba(42,177,167,1);
                    margin: 0rem .5rem;
                }
            }
            .new_text{
                width: 100%;
                text-align: center;
                font-size:.26rem;
                font-family:Microsoft YaHei;
                font-weight:bold;
                color:rgba(239,125,89,1);
            }
        }
        .big_New{
            display: flex;
            flex-direction: column;
            .big_Img{
                width: 100%;
                height: 3.7rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .big_Text{
                display: flex;
                flex-direction: column;
                margin:.3rem;
                border-bottom: 0.01rem solid rgba(162,162,162,.5);
                .big_Detail{
                    font-size:.3rem;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(61,61,61,1);
                    line-height:.41rem;
                                    }
            }
            .big_Bottom{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding-top: 0.3rem;
                padding-bottom:.3rem ;
                .big_time{
                    font-size:.24rem;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(130,130,130,1);
                    line-height:.33rem;
                }
                .big_read{
                    display: flex;
                    flex-direction: row;
                    align-content: center;
                    align-items: center;
                    font-size:.24rem;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(130,130,130,1);
                    line-height:.33rem;
                    img{
                        width: .3rem;
                        height: .2rem;
                    }
                    span{
                        margin-left: .1rem;
                    }
                }
            }
        }
        .new_list{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: .3rem;
            margin-top: 0rem;
            border-bottom: 0.01rem solid rgba(162,162,162,.5);
            .list_detail{
                display: flex;
                flex-direction: column;
                .list_top{
                    width: 4.22rem;
                    height: .69rem;
                    font-size:.3rem;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(61,61,61,1);
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
                .list_bottom{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: .3rem 0rem;
                    .list_time{
                        font-size:.24rem;
                        font-family:PingFang SC;
                        font-weight:500;
                        color:rgba(130,130,130,1);
                    }
                    .list_read{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        font-size:.24rem;
                        font-family:PingFang SC;
                        font-weight:500;
                        color:rgba(130,130,130,1);
                        img{
                            width: .3rem;
                            height: .2rem;
                        }
                        span{
                            margin-left: 0.1rem;
                        }
                    }
                }
            }
            .list_img{
                width: 2.2rem;
                height: 1.48rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .moreNews{
            font-size:.3rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(42,177,167,1);
            text-align: center;
            margin-bottom: .3rem;
        }
    }
}
</style>