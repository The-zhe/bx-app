<template>
    <div class="newsInfoDetails">
        <van-overlay :show="vipshow">
            <div class="wrapper" >
                <div class="block">
                    <div class="tip">本文是会员专享课程，您还不是会员，需付费阅读！</div>
                    <div class="price">
                        <div class="price_top">价格：10元</div>
                        <div class="price_msg">（付费后可永久免费阅读）</div>
                    </div>
                    <div class="vipImg">
                        <img src="../../assets/imgs/img_pop_vip.png" alt="">
                    </div>
                    <div class="btn">
                        <div class="vip" @click="tobeVip()">成为会员</div>
                        <div class="divder"></div>
                        <div class="buy" @click="tobuy()">立即购买</div>
                    </div>
                </div>
            </div>
        </van-overlay>
        <van-overlay :show="liveshow">
            <div class="wrapper">
                <div class="block_c">
                    <div class="tip">您当前账号未登陆,请登录！</div>
                    <div class="btn">
                        <div class="vip" @click="goback()">取消</div>
                        <div class="divder"></div>
                        <div class="buy" @click="toload()">登陆</div>
                    </div>
                </div>
            </div>
        </van-overlay>
        <div class="tab_container">
            <div class="tab_item" :class="{'active_item':index==activeTabIndex}" @click="selectTab(item,index)" :key="item.pid" v-for="(item,index) in tabList">
                <div class="tab_title">{{item.name}}</div>
            </div>
            <div class="tab_icon">
                <img src="../../assets/imgs/wxyq_3.png" alt="">
            </div>
        </div>
         <div class="ad" style="width:100%;background:white" v-show="this.topimages.length !== 0">
             <van-swipe :autoplay="3000" style="height:2.31rem;">
                <van-swipe-item v-for="(topimages, index) in topimages" :key="index">
                    <img v-lazy="topimages.imgUrl" :src="topimages.imgUrl" style="width:100%;height:100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="author">
            <div class="act_img"><img src="../../assets/imgs/wxyq_3.png" alt=""></div>
            <div class="act_msg">
                <div class="msg_title">{{this.notic}}</div>
                <div class="msg_name">{{this.author}} •  主任医师 •  宁波市医疗中心 李惠利医院</div>
                <div class="msg_dr">
                    <div class="msg_price">{{this.crtTm}}</div>
                    <div class="msg_num">{{this.readNum}}人阅读</div>
                </div>
            </div>
        </div>
        <div class="btn">
            <div class="btn_img">
                <div class="btn_text">1元/天加入会员   拥有家庭电子健康档案 9项就医特权 全年免费看>></div>
            </div>
        </div>
        <div class="line">
            <div class="divder"></div>
        </div>
        <div class="article" v-html="this.cont"> 
            <!-- {{this.cont}} -->
        </div>
        <!-- <div class="article" v-else> 
            {{this.brief}}
        </div> -->
        <div class="line">
            <div class="divder"></div>
        </div>
        <div class="ad" style="padding:.3rem;background:white" v-show="this.downimages">
             <van-swipe :autoplay="3000" style="height:2.31rem;">
                <van-swipe-item v-for="(downimages, index) in downimages" :key="index">
                    <img v-lazy="downimages.imgUrl" :src="downimages.imgUrl" style="width:100%;height:100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="about">
            <div class="about_title">更多好文</div>
            <ul>
                <!-- <li v-for="(item,index) in articlelist" :key="index" @click="toNews(item.attrSourceId)">
                    <div class="about_img"><img :src="item.imgUrl" alt=""></div>
                    <span>{{item.readNum}}人阅读</span>
                    <div class="small_title">{{item.notic}}</div>
                </li> -->
                <li>
                    <div class="about_img"><img :src="this.advertising" alt=""></div>
                    <span>123121人阅读</span>
                    <div class="small_title">降压要到底能不能停</div>
                </li>
                <li>
                    <div class="about_img"><img :src="this.advertising" alt=""></div>
                    <span>123121人阅读</span>
                    <div class="small_title">降压要到底能不能停</div>
                </li>
                <li>
                    <div class="about_img"><img :src="this.advertising" alt=""></div>
                    <span>123121人阅读</span>
                    <div class="small_title">降压要到底能不能停</div>
                </li>
            </ul>
        </div>
        <div class="leave">
            <div class="l_title">用户留言</div>
            <div class="divder"></div>
            <div class="message" v-for="(item,index) in talklist" :key="index">
                <div class="l_msg_top">
                    <div class="l_top_left">
                        <img :src="item.imgUrl" alt="">
                        <div class="l_name">{{item.userName}}</div>
                    </div>
                    <div class="l_top_right">{{item.fav}}赞</div>
                </div>
                <div class="l_msg_bottom">{{item.cont}}
                    <div class="l_msg_date">{{item.crtTm}}</div>
                </div>
            </div>
        </div>
        <div style="height: 1.2rem;"></div>
        <div class="comments">
            <div class="hd_search">
                <input type="text" placeholder="写评论" v-model="comdata.cont">
                <div class="hd_sicon"><van-icon name="edit" size=".4rem"/></div>
                <!-- <img src="../../assets/imgs/xdoc4.png" alt=""> -->
            </div>
            <!-- <div class="com_msg"> -->
                <!-- <img src="../../assets/imgs/btn_jkzx_not_collect.png" alt=""> -->
                <van-icon name="other-pay" badge="99+" size=".4rem" style="margin-left: .3rem;margin-right: .2rem;"/>
            <!-- </div> -->
            <div class="com_col" @click="collect()"><img :src="this.colImage" alt=""></div>
            <div class="com_send" @click="send()"><img src="../../assets/imgs/btn_jkzx_not_collect.png" alt=""></div>
        </div>
    </div>
</template>
<script>
import {Toast} from 'vant'
import { addCollection , addcommon , getDetails, celCollection} from '../../api/apiz'
export default {
    name:'newsInfoDetails',
    data(){
        return{
            newId:this.$route.query.infoid,
            sourceId:this.$route.query.id,
            userId:123456,
            catCd:'60000.160.140',
            isfree:false,
            isvip:false,
            vipshow: false,
            liveshow:false,
            activeTabIndex:0,
            iscol:false,
            colImage:require('../../assets/imgs/btn_jkzx_not_collect.png'),
            errImage:require('../../assets/imgs/btn_jkzx_not_collect.png'),
            sucImage:require('../../assets/imgs/icon_news_col_select.png'),
            tabList:[
                {
                    id:'453215542101',
                    name:'健康真相台',
                },
                {
                    id:'453215542101',
                    name:'健康真相台',
                },
                {
                    id:'453215542101',
                    name:'健康真相台',
                },
                {
                    id:'453215542101',
                    name:'健康真相台',
                },
                {
                    id:'453215542101',
                    name:'健康真相台',
                },
                {
                    id:'453215542101',
                    name:'健康真相台',
                },
                {
                    id:'453215542101',
                    name:'健康真相台',
                },
            ],
            topimages:[],
            downimages:[
                // {
                //     imgUrl:require('../../assets/imgs/wxyq_3.png')
                // },
                // {
                //     imgUrl:require('../../assets/imgs/wxyq_3.png')
                // },
            ],
            comdata:{
                userId:'',
                objId:'',
                catCd:'',
                cont:'',
                // star:''
            },
            newsDate:{
                userId:0,
                sourceId:0,
                newsInfoId:0,
            },
            talklist:[],
            author:'',
            addImgUrl:'',
            crtTm:'',
            readNum:'',
            notic:'',
            // brief:'',
            buttonValue:0,
            cont:'',
        }
    },
    methods:{
        send(){ //发布评论
            this.comdata.userId = this.userId
            this.comdata.objId = this.sourceId
            this.comdata.catCd = '60000.160.140'
            addcommon(this.comdata).then(res => {
                console.log(res)
            })
        },
        toload(){
            this.$router.push({path:'/userlogin'})
        },
        goback(){
            this.$router.go(-1)
        },
        selectTab(item,index){
            // this.informationList=[];
            // this.pageNum=1;
            this.activeTabIndex=index;
            // this.id=item.id;
            // this.getHealthInfoListFun(item.id,1)
        },
        // vipShow(){
        //     this.show = false
        //     console.log('show',this.show)
        // },
        tobeVip(){
            // this.show = false
            console.log('tobeVip')
        },
        livevip(){
            // if(this.isfree == false){
            //     if(this.userId == ''){
            //         this.liveshow = true
            //     }else if(this.userId !== '' && this.isvip == false){
            //         this.vipshow = true
            //     }
            // }else{
            //     console.log('free',this.isfree)
            // }
            console.log('buttonValue',this.buttonValue)
            if(this.buttonValue == 0){
                this.liveshow = true
            }else if(this.buttonValue != 0){
                if(this.buttonValue == 1){
                    this.vipshow = true
                }else{
                    this.liveshow =false
                    this.vipshow = false
                }
            }
        },
        collect(){
            if(this.iscol == false){
                Toast.success('收藏成功')
                this.colImage = this.sucImage
                this.iscol = true
                this.addCollect()
            }else if(this.iscol == true){
                Toast.success('取消收藏')
                this.colImage = this.errImage
                this.iscol = false
                this.celCollect()
            }
        },
        free(){
            if(this.isfree || this.isvip){
                this.$router.push({path: '/newsdetails', query: {id: this.newId}})
            }
        },
        addCollect(){
            addCollection(this.userId,this.newId,this.catCd).then( res => {
                console.log(res)
            })
        },
        celCollect(){
            let NewId = Number(this.newId)
            celCollection(this.userId,NewId,this.catCd).then( res => {
                console.log(res)
            })
        },
        getNewsDetails(){
            this.newsDate.userId = 4902136544580608
            this.newsDate.sourceId = Number(this.sourceId)
            this.newsDate.newsInfoId = Number(this.newId)
            console.log(this.sourceId)
            getDetails(this.newsDate).then( res => {
                console.log(res)
                this.talklist = res.data.data.hjjkCommentDtos
                this.author = res.data.data.author
                this.addImgUrl = res.data.data.addImgUrl
                this.crtTm = res.data.data.crtTm
                this.readNum = res.data.data.readNum
                this.notic = res.data.data.notic
                // this.brief = res.data.data.brief
                // this.buttonValue = res.data.data.buttonValue
                this.buttonValue = 2
                this.tabList = res.data.data.hjjkNewsInfoListDtos
                this.topimages = res.data.data.topHjjkSourceAttrDtos
                this.downimages = res.data.data.downHjjkSourceAttrDtos
                this.cont = res.data.data.cont
                this.livevip()
            })
            
        },
        tobuy(){
            this.$router.push({path:'/payOrder',query: {id: this.newId}})
        }
    },
    mounted(){
        
        console.log('id',this.newId)
        // this.free()
        this.getNewsDetails()
    }
}
</script>
<style lang="less" scoped>
.newsInfoDetails{
     .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .block {
        width:5.41rem;
        height:7.1rem;
        background-color: #fff;
        border-radius: .2rem;
        .tip{
            height:.8rem;
            padding: .6rem ;
            background: rgba(160,160,160,.5);
            text-align: center;
            font-size:.3rem;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(96,96,96,1);
        }
        .price{
            display: flex;
            flex-direction: column;
            padding: .6rem;
            height: .8rem;
            background-color: white;
            .price_top{
                font-size:.3rem;
                font-family:Microsoft YaHei;
                font-weight:bold;
                color:rgba(234,85,20,1);
                text-align: center;
            }
            .price_msg{
                font-size:.26rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                text-align: center;
                color: rgba(93, 93, 93, 1);
                margin-top: .1rem;
            }
        }
        .vipImg{
            height: 2.23rem;
            img{
                width: 100%;
            }
        }
        .btn{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            font-size: .32rem;
            padding: .3rem;
            .vip{
                font-size:.3rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(47,165,145,1);
                margin-left: .1rem;
            }
            .divder{
                width: .01rem;
                background-color: rgba(160,160,160,.5);
            }
            .btn{
                font-size:.3rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(81,81,81,1);
                margin-right: .1rem;
            }
        }
    }
    .block_c {
        // width:5.4rem;
        // height:2.2rem;
        background-color: white;
        border-radius: .2rem;
        .tip{
            height:.8rem;
            padding: .6rem ;
            // background: rgba(160,160,160,.5);
            border-bottom: 0.01rem solid rgba(160,160,160,.5);
            text-align: center;
            font-size:.3rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(96,96,96,.5);
            line-height: .8rem;
        }
        .price{
            display: flex;
            flex-direction: column;
            padding: .6rem;
            height: .8rem;
            background-color: white;
            .price_top{
                font-size:.3rem;
                font-family:Microsoft YaHei;
                font-weight:bold;
                color:rgba(234,85,20,1);
                text-align: center;
            }
            .price_msg{
                font-size:.26rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                text-align: center;
                color: rgba(93, 93, 93, 1);
                margin-top: .1rem;
            }
        }
        .vipImg{
            height: 2.23rem;
            img{
                width: 100%;
            }
        }
        .btn{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            font-size: .32rem;
            padding: .2rem;
            border-radius: .2rem;
            .vip{
                font-size:.3rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(160,160,160,.5);
            }
            .divder{
                width: .01rem;
                background-color: rgba(160,160,160,.5);
            }
            .buy{
                font-size:.3rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(47,165,145,1);
            }
        }
    }
    .tab_container{
        // position: relative;
        padding-top: 0.3rem;
        padding-right: 1rem;
        background-color: white;
        width:auto;
        height: 0.8rem;
        font-size: 0.3rem;
        /*align-items: center;
        display: flex;
        justify-content: flex-start;*/
        color: #606060;
        white-space: nowrap;/*文本不会换行，文本会在在同一行上继续*/
        overflow-y:auto;/*可滑动*/
        .tab_item{
            margin-left: 0.3rem;
            width: auto;
            /*display: flex;
            flex-direction: column;
            align-items: center;*/
            display: inline-block;/*行内块元素*/
            .tab_title{

            }
            img{
                margin-top: 0.16rem;
                width: 0.6rem;
                height: 0.09rem;
                opacity: 0;
            }
            .tab_space{
                // height: .6rem;
                // width: .6rem
            }
        }
        .tab_item:last-child{
            margin-left: 0.3rem;
            margin-right: 0.3rem;
            width: auto;
            /*display: flex;
            flex-direction: column;
            align-items: center;*/
            display: inline-block;/*行内块元素*/
            .tab_title{

            }
            img{
                margin-top: 0.16rem;
                width: 0.6rem;
                height: 0.09rem;
                opacity: 0;
            }
            .tab_space{
                height: .6rem;
                width: .6rem;
                position: fixed;
                top: 0.25rem;
                right: 0;
            }
        }
        .active_item{
            .tab_title{
                font-weight: bold;
                color: rgba(41, 155, 146, 1);
            }
            img{
                opacity: 1;
            }
        }
        .tab_icon{
            height: .6rem;
            width: .6rem;
            background-color: lightblue;
            position: absolute;
            top: .2rem;
            right: 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .tab_container::-webkit-scrollbar{
        display: none;
    }
    .author{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: .3rem;
        padding: .28rem;
        background-color: white;
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
                width: 5rem;
                font-size:.3rem;
                color:rgba(76,76,76,1);
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
            }
            .msg_name{
                padding: .2rem 0rem;
            }
            .msg_dr{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding-right:.2rem;
                .msg_price{
                    font-size:.28rem;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(163,163,163,1);
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
    .btn{
        background-color: white;
        padding: .3rem;
        .btn_img{
            // width: 6.7rem;
            height: 1rem;
            background-image: url('../../assets/imgs/btn_news_bg_one(2).png');
            background-size: 100% 100%;
            padding: 0rem .8rem 0rem 1.5rem;
            .btn_text{
                padding-top: .1rem;
                font-size:.28rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
        }
    }
    .line{
        width: 100%;
        padding: 0.1rem 0rem;
        background-color: white;
        .divder{
            height: .01rem;
            width: 6.91rem;
            margin: 0 auto;
            background: rgba(160,160,160,.5);;
        }
    }
    .article{
        font-size:.3rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(76,76,76,1);
        padding: .3rem;
        background-color: white;
        word-wrap: break-word;
        word-break: normal;
        letter-spacing: 1px;
        line-height: .4rem;
    }
    .about{
        display: flex;
        flex-direction: column;
        margin-bottom: .3rem;
        background-color: white;
        .about_title{
            padding: 0.3rem 0.3rem 0.2rem 0.3rem;
            font-size:.3rem;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(76,76,76,1);
        }
        ul{
            list-style:none;
            padding: 0rem .3rem;
                li{
                    display: flex;
                    flex-direction: column;
                    float:left;
                    position: relative;
                    width: 2.1rem;
                    margin: 0rem .15rem;
                    .about_img{
                        width: 2.1rem;
                        height: 2.81rem;
                        img{
                         width: 100%;
                         height: 100%;
                        }
                    }
                    
                    span{
                        position: absolute;
                        bottom: .91rem;
                        width: 100%;
                        background-color: rgba(45,45,45,.5);
                        font-size:.24rem;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        text-indent: .1rem;
                    }
                    .small_title{
                        margin-top: 0.1rem;
                        font-size:.3rem;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(76,76,76,1);
                        word-break: break-all;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
                li:first-child{
                    display: flex;
                    flex-direction: column;
                    float:left;
                    position: relative;
                    width: 2.1rem;
                    margin: 0rem .15rem;
                    margin-left: 0rem;
                    .about_img{
                        width: 2.1rem;
                        height: 2.81rem;
                        img{
                         width: 100%;
                         height: 100%;
                        }
                    }
                    
                    span{
                        position: absolute;
                        bottom: 0.91rem;
                        width: 100%;
                        background-color: rgba(45,45,45,.5);
                        font-size:.24rem;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        text-indent: .1rem;
                    }
                    .small_title{
                        margin-top: 0.1rem;
                        font-size:.3rem;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(76,76,76,1);
                        word-break: break-all;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
                li:last-child{
                    display: flex;
                    flex-direction: column;
                    float:left;
                    position: relative;
                    width: 2.1rem;
                    margin: 0rem .15rem;
                    margin-right: 0rem;
                    .about_img{
                        width: 2.1rem;
                        height: 2.81rem;
                        img{
                         width: 100%;
                         height: 100%;
                        }
                    }
                    
                    span{
                        position: absolute;
                        width: 100%;
                        bottom: 0.91rem;
                        background-color: rgba(45,45,45,.5);
                        font-size:.24rem;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        text-indent: .1rem;
                    }
                    .small_title{
                        margin-top: 0.1rem;
                        font-size:.3rem;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(76,76,76,1);
                        word-break: break-all;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }
    }
    .leave{
        display: flex;
        flex-direction: column;
        padding: .3rem;
        font-size:0.3rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(96,96,96,1);
        line-height:0.44rem;
        background-color: rgba(96,96,96,.05);
        .l_title{
            font-weight: bold;
            padding-bottom: .3rem;
        }
        .divder{
            width: 100%;
            height: .02rem;
            background: rgba(91, 91, 91, .2);
        }
        .message{
            display: flex;
            flex-direction: column;
            .l_msg_top{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: .15rem 0rem;
                line-height: .6rem;
                .l_top_left{
                    display: flex;
                    flex-direction: row;
                    img{
                        width: 0.61rem;
                        height: 0.61rem;
                        border-radius: 50% 50%;
                    }
                    .l_name{
                        margin-left: .3rem;
                    }
                }
            }
            .l_msg_bottom{
                display: flex;
                flex-direction: column;
                justify-content: end;
                margin-left: .91rem;
                .l_msg_date{
                    font-size:0.24rem;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(122,122,122,1);
                    margin-top: .2rem;
                }
            }
        }
    }
    .comments{
            height: 1.2rem;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: -3px -1px 10px 0px #888888;
            position: fixed;
            bottom: 0;
            width: 100%;
        .hd_search{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            input{
                background-color: rgba(160, 160, 160, 0.1);
                width: 2.8rem;
                height: 0.6rem;
                border-radius: 2rem;
                font-size: 0.32rem;
                padding: 0rem 0.8rem;
                color: rgba(76, 76, 76, 1);
            }
            .hd_sicon{
                    height: 0.37rem;
                    width: 0.37rem;
                    position: absolute;
                    left: 0.3rem;
                    top: -.14rem;;
                img{
                    width: 100%;
                    height: 100%;
                };
            }
        }
        .com_msg{
                width: .41rem;
                height: .39rem;
                margin: 0rem .15rem;
                img{
                    width: 100%;
                    height: 100%;
                };
            }
            .com_col{
                width: .41rem;
                height: .39rem;
                margin: 0rem .15rem;
                img{
                    width: 100%;
                    height: 100%;
                };
            }
            .com_send{
                width: .41rem;
                height: .39rem;
                margin: 0rem .15rem;
                img{
                    width: 100%;
                    height: 100%;
                };
            }
    }
}
</style>