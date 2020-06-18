<template>
    <div class="myCollection">
        <div class="header">
             <div class="hd_search">
                <input type="text" placeholder="文章首页或关键词">
                <div class="hd_sicon"><img src="../../assets/imgs/xdoc4.png" alt=""></div>
            </div>
        </div>
        <div class="main">
            <div class="author" v-for="(card,index) in myCollects" :key="index">
                <div class="act_img"><img :src="card.imgUrl" alt=""></div>
                <div class="act_msg">
                    <div class="msg_title">{{card.notic}}</div>
                    <div class="msg_name">{{card.author}} •  {{card.title}} •  {{card.hospital}}</div>
                    <div class="msg_dr">
                        <div class="msg_price">{{card.crtTm}}</div>
                        <div class="msg_num">{{card.readNum}}人阅读</div>
                    </div>
                </div>
            </div>
            <!-- <div class="author">
                <div class="act_img"><img src="../../assets/imgs/wxyq_3.png" alt=""></div>
                <div class="act_msg">
                    <div class="msg_title">高血压是怎么回事？</div>
                    <div class="msg_name">刘佳 •  主任医师 •  宁波市医疗中心 李惠利医院</div>
                    <div class="msg_dr">
                        <div class="msg_price">￥10</div>
                        <div class="msg_num"> x 1</div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import { getCollection } from '../../api/apiz'
export default {
    name:'myCollection',
    data(){
        return{
            myCollects:[],
        }
    },
    methods:{
        getMyCollects(){
            getCollection().then( res => {
                console.log(res.data.list)
                this.myCollects = res.data.list
            })
        }
    },
    mounted(){
        this.getMyCollects()
    }
}
</script>
<style lang="less" scoped>
.myCollection{
    .header{
            height: 1.2rem;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
        .hd_search{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            input{
                background-color: rgba(160,160,160,.1);
                width: 6rem;
                height: .6rem;
                border-radius: 2rem;
                font-size: .32rem;
                padding: 0rem .3rem;
            }
            .hd_sicon{
                height: .37rem;
                width: .37rem;
                position: absolute;
                right: .3rem;
                img{
                    width: 100%;
                    height: 100%;
                };
            }
        }
    }
    .main{
        padding: .3rem;
    }
    .author{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: .3rem;
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
            width: 100%;
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
                align-items: center;
                .msg_price{
                    font-size:.3rem;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(73,73,73,1);
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
}
</style>