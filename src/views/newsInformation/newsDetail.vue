<template>
    <div class="newsdetails">
        <div class="tab_container">
            <div class="tab_item" :class="{'active_item':index==activeTabIndex}" @click="selectTab(item,index)" :key="item.pid" v-for="(item,index) in tabList">
                <div class="tab_title">{{item.name}}</div>
            </div>
            <div class="tab_icon">
                <img src="../../assets/imgs/wxyq_3.png" alt="">
            </div>
        </div>
        <!-- <div class="top_c" style="width:100%;height:1.27rem"></div> -->
        <!-- <div class="advertising"> -->
            <!-- <img :src="this.advertising" alt=""> -->
            <van-swipe :autoplay="3000" v-show="this.topimages !== ''">
                <van-swipe-item v-for="(topimages, index) in topimages" :key="index" style="height:2.31rem">
                    <img v-lazy="topimages.imgUrl" :src="topimages.imgUrl" @click="toNews(topimages.attrSourceId)" style="width:100%;height:100%"/>
                </van-swipe-item>
            </van-swipe>
        <!-- </div> -->
        <div class="new">
            <!-- <div class="new_title">
                <div class="title_top">{{this.notic}}</div>
                <div class="title_msg">
                    <div class="msg">
                        <div class="msg_pic"><img :src="this.addImgUrl" alt=""></div>
                        <div class="msg_name">{{this.author}}-{{this.origin}}</div>
                    </div>
                    <div class="msg_date">{{this.crtTm}}</div>
                </div>
            </div> -->
            <div class="new_card">
                <div class="card_img"><img src="../../assets/imgs/wxyq_3.png" alt=""></div>
                <div class="card_msg">
                    <div class="msg_title">降压药到底能不能停？</div>
                    <div class="msg_name">刘佳 •  主任医师 •  宁波市医疗中心 李惠利医院</div>
                    <div class="msg_dr">
                        <div class="msg_date">2020-04-28</div>
                        <div class="msg_read">124147人阅读</div>
                    </div>
                </div>
            </div>

            <div class="divder"></div>
            <div class="new_article">{{this.cont}}
                <!-- <div class="new_paragraph">{{this.paragraph}}</div>
                <div class="new_paragraph">{{this.paragraph}}</div>
                <div class="new_paragraph">{{this.paragraph}}</div>
                <div class="new_paragraph">{{this.paragraph}}</div>
                <div class="new_paragraph">{{this.paragraph}}</div> -->
            </div>
            <div class="divder"></div>
            <div class="new_read">
                <div class="read_num">{{this.readnum}}人已阅读</div>
            </div>
             <van-swipe :autoplay="3000" style="height:2.31rem">
                <van-swipe-item v-for="(downimages, index) in downimages" :key="index">
                    <img v-lazy="downimages.imgUrl" :src="downimages.imgUrl" @click="toNews(downimages.attrSourceId)" style="width:100%;height:100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="about">
            <div class="about_title">相关阅读</div>
            <ul>
                <li v-for="(item,index) in articlelist" :key="index" @click="toNews(item.attrSourceId)">
                    <div class="about_img"><img :src="item.imgUrl" alt=""></div>
                    <span>{{item.readNum}}人阅读</span>
                    <div class="small_title">{{item.notic}}</div>
                </li>
                <!-- <li>
                    <div class="about_img"><img :src="this.advertising" alt=""></div>
                    <span>123121人阅读</span>
                    <div class="small_title">降压要到底能不能停</div>
                </li>
                <li>
                    <div class="about_img"><img :src="this.advertising" alt=""></div>
                    <span>123121人阅读</span>
                    <div class="small_title">降压要到底能不能停</div>
                </li> -->
            </ul>
        </div>
        <div class="leave">
            <div class="l_title">用户留言</div>
            <div class="divder"></div>
            <div class="message" v-for="(item,index) in talklist" :key="index">
                <div class="l_msg_top">
                    <div class="l_top_left">
                        <img :src="item.imgUrl" alt="">
                        <div class="l_name">{{item.Name}}</div>
                    </div>
                    <div class="l_top_right">{{item.fav}}赞</div>
                </div>
                <div class="l_msg_bottom">{{item.cont}}
                    <div class="l_msg_date">{{item.crtTm}}</div>
                </div>
            </div>
        </div>
        <!-- <div class="btn">
            <div class="btn_read">了解文章</div>
            <div class="btn_more">试读更多</div>
        </div> -->
        <div style="height: 1.2rem;"></div>
        <div class="comments">
            <div class="hd_search">
                <input type="text" placeholder="写评论">
                <div class="hd_sicon"><img src="../../assets/imgs/xdoc4.png" alt=""></div>
            </div>
            <div class="com_msg">
                <img src="../../assets/imgs/btn_jkzx_not_collect.png" alt="">
            </div>
            <div class="com_col" @click="collect()"><img :src="this.colImage" alt=""></div>
            <div class="com_send"><img src="../../assets/imgs/btn_jkzx_not_collect.png" alt=""></div>
        </div>
    </div>
</template>

<script>
import { getBannerNew } from '../../api/apiz'
export default {
    name:'newsdetail',
    data(){
        return{
            newid:this.$route.query.id,
            // membeiId:'1',
            back:require('../../assets/imgs/xconsult_x.png'),
            advertising:require('../../assets/imgs/wxyq_1.png'),
            title:'降压药到底能不能停？',
            images: [
                // 'https://img.yzcdn.cn/vant/apple-1.jpg',
                // 'https://img.yzcdn.cn/vant/apple-2.jpg',
            ],
            getNewList:[],
            paragraph:'李叔患病这么多年，高血压病方面的知识知道不少，算是半个医生，仍觉得这套言论听起来有理有据，甚至有醍醐灌顶的感觉。按压不住心中的冲动，他拨打了屏幕上的电话，当即订购了10盒药膏。',
            topimages:[],
            downimages:[],
            cont:'',
            talklist:[],
            articlelist:[],
            notic:'',
            origin:'',
            readnum:'',
            author:'',
            crtTm:'',
            addImgUrl:'',
            userId :'123456789',
            activeTabIndex:0,
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
            iscol:false,
            colImage:require('../../assets/imgs/btn_jkzx_not_collect.png'),
            errImage:require('../../assets/imgs/btn_jkzx_not_collect.png'),
            sucImage:require('../../assets/imgs/icon_news_col_select.png'),
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        getNews(){
            console.log('getNews',this.newid)
            // let userid = localStorage.getItem('userId')
            let userId = '123456789'
            // console.log('userid',userid)
            getBannerNew(this.newid,userId).then( res =>{
                console.log(res)
                this.topimages = res.data.data.topHjjkSourceAttrDtos
                this.downimages = res.data.data.downHjjkSourceAttrDtos
                this.cont = res.data.data.cont
                this.talklist = res.data.data.hjjkCommentDtos
                this.articlelist = res.data.data.serviceHjjkSourceAttrDtos
                this.notic = res.data.data.notic
                this.origin = res.data.data.origin
                this.readnum = res.data.data.readNum
                this.workNm = res.data.data.workNm
                this.crtTm = res.data.data.crtTm
                this.addImgUrl = res.data.data.addImgUrl
                this.author = res.data.data.author
            })
        },
        toNews(id){
            this.newid = id
            console.log(this.newid)
            this.$router.push({path:'/newsDetail',query: {id: this.newid,userId:this.userId}})
        },
        selectTab(item,index){
            // this.informationList=[];
            // this.pageNum=1;
            this.activeTabIndex=index;
            // this.id=item.id;
            // this.getHealthInfoListFun(item.id,1)
        },
        collect(){
            if(this.iscol == false){
                Toast.success('收藏成功')
                this.colImage = this.sucImage
                this.iscol = true
            }else if(this.iscol == true){
                Toast.success('取消收藏')
                this.colImage = this.errImage
                this.iscol = false
            }
            
        },
    },
    mounted(){
         this.getNews()
    }
}
</script>

<style lang="less" scoped>
.newsdetails{
    display: flex;
    flex-direction: column;
    .tab_container{
        position: relative;
        padding-top: 0.3rem;
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
            position: fixed;
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
    .news_top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        font-size:.36rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(96,96,96,1);
        height:.88rem;
        padding:.2rem .3rem .2rem .3rem;
        background:rgba(255,255,255,1);
        color:#606060;
        position:fixed;
        border-bottom: 0.01rem dashed rgba(163,163,163,.5);
        z-index: 100;
        .news_back{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: .3rem;
            img{
                width: .3rem;
                height: .3rem;
            }
        }
        .news_title{
            line-height: .85rem;
        }
        .news_space{
            margin-right: .9rem;
            line-height: .6rem;
        }
    }
    .advertising{
        height: 2.31rem;
        width:100%;
        img{
            width: 100%;
        }
    }
    .new{
        display: flex;
        flex-direction: column;
        padding: .3rem;
        .new_card{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .card_img{
                width: 2.1rem;
                height: 2.1rem;
                img{
                    width: 100%;
                    height:100%;
                }
            }
            .card_msg{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
        // .title_top{
        //     font-size:.4rem;
        //     font-family:FZXiaoBiaoSong-B05S;
        //     font-weight:400;
        //     color:rgba(45,45,45,1);
        // }
        // .title_msg{
        //     display: flex;
        //     flex-direction: row;
        //     justify-content: space-between;
        //     font-size:.3rem;
        //     font-family:Microsoft YaHei;
        //     font-weight:400;
        //     color:rgba(163,163,163,1);
        //     padding:.4rem 0rem .3rem 0rem;
        //     .msg{
        //         display: flex;
        //         flex-direction: row;
        //         .msg_pic{
        //             width: .58rem;
        //             height: .61rem;
        //             border-radius: 50% 50%;
        //             img{
        //                 width: 100%;
        //                 height:100%
        //             }
        //         }
        //         .msg_name{
        //             line-height: .6rem;
        //             margin-left: .3rem;
        //         }
        //     }
        //     .msg_date{
        //         line-height: .6rem;
        //     }
        // }
        .divder{
            width: 100%;
            height: .02rem;
            background: rgba(91, 91, 91, .2);
        }
        .new_article{
            width: 6.4rem;
            padding: .3rem;
            font-size:.3rem;
            letter-spacing: 8px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(76,76,76,1);
            word-wrap: break-word;
            word-break: normal;
            .new_paragraph{
                padding: .15rem 0rem;
                letter-spacing: 5px;
                line-height:.56rem;
                text-indent:.6rem;
            }
        }
        .new_read{
            margin: .3rem;
            font-size:.24rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(76,76,76,1);
            .read_num{
                float: right;
            }
        }
    }
    .about{
        display: flex;
        flex-direction: column;
        margin-bottom: .3rem;
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
                        bottom: .1rem;
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
                        bottom: 0.1rem;
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
                        bottom: 0.1rem;
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
    .btn{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: .3rem 0rem;
        .btn_read{
            margin-left: .5rem;
            font-size:0.32rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(96,96,96,1);
            line-height:0.72rem;
        }
        .btn_more{
            width: 3.12rem;
            height: 0.72rem;
            font-size:0.32rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:0.41rem;
            background-image:url('../../assets/imgs/btn_news_bg.png'); 
            background-repeat:no-repeat; 
            background-size:100% 100%;
            -moz-background-size:100% 100%;
            text-align: center;
            line-height: .72rem;
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