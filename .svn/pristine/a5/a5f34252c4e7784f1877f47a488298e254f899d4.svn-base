<template>
    <div class="videoNews">
        <video src="#"></video>
        <div class="msg">
            <div class="msg_main">
                <div class="msg_title">降压药到底能不能停？</div>
                <div class="msg_name">刘佳 •  主任医师 •  宁波市医疗中心李惠利医院</div>
                <div class="msg_dr">
                    <div class="msg_date">2020-04-28</div>
                    <div class="msg_read">播放量  124147</div>
                </div>
            </div>
            <div class="msg_vip">
                <div class="vip_btn">
                    1元/天加入会员   拥有家庭电子健康档案 9项就医特权 全年免费看>>
                </div>
            </div>
        </div>
         <div class="tab_container">
            <div class="tab_item" :class="{'active_item':index==activeTabIndex}" @click="selectTab(item,index)" :key="item.pid" v-for="(item,index) in tabList">
                <div class="tab_title">{{item.name}}</div>
            </div>
            <!-- <div class="tab_icon">
                <img src="../../assets/imgs/wxyq_3.png" alt="">
            </div> -->
        </div>
        <div class="about">
            <div class="about_title">更多视频</div>
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
        <div style="height: 1.2rem;"></div>
        <div class="comments">
            <div class="hd_search">
                <input type="text" placeholder="写评论">
                <div class="hd_sicon"><img src="../../assets/imgs/xdoc4.png" alt=""></div>
            </div>
            <div class="com_msg">
                <img src="../../assets/imgs/btn_jkzx_not_collect.png" alt="">
            </div>
            <div class="com_col"><img src="../../assets/imgs/btn_jkzx_not_collect.png" alt=""></div>
            <div class="com_send"><img src="../../assets/imgs/btn_jkzx_not_collect.png" alt=""></div>
        </div>
    </div>

</template>
<script>
export default {
    name:'videoNews',
    data(){
        return{
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
        }
    },
    methods:{
        selectTab(item,index){
            // this.informationList=[];
            // this.pageNum=1;
            this.activeTabIndex=index;
            // this.id=item.id;
            // this.getHealthInfoListFun(item.id,1)
        },
    }
}
</script>
<style lang="less" scoped>
.videoNews{
    video{
        width:100%;
        height:4.41rem;
        background-color: black;
        opacity: .3;
    }
    .msg{
        margin-bottom: .2rem;
        padding: .3rem;
        display: flex;
        flex-direction: column;
        background-color: white;
        margin-top: -.17rem;
        font-size:.3rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(163,163,163,1);
        .msg_main{
            // padding: .3rem;
            margin-bottom: .3rem;
            .msg_title{
                font-size: .4rem;
                font-weight: bold;
                color:rgba(76,76,76,1);
            }
            .msg_name{
                margin-top: .1rem;
            }
            .msg_dr{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-top: .3rem;
                .msg_date{
                    font-size:.3rem;
                }
                .msg_read{
                    font-size:.24rem;
                    color:rgba(76,76,76,1);
                }
            }     
        }
        .msg_vip{
            // padding: .3rem;
            padding-bottom: .3rem;
            border-top: 0.01rem solid rgba(163,163,163,.3);
            .vip_btn{
                // width:6.71rem;
                // height:1.01rem;
                margin-top: .3rem;
                padding: .1rem .2rem .1rem 1.5rem;
                background-image: url('../../assets/imgs/btn_news_bg_one(2).png');
                background-size: 100% 100%;
                font-size:.28rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height: .29rem;
                
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