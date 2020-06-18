<template>
<div>
    <div class="listColumns" v-for="(column,index) in cardList" :key="index">
        <div class="list_hd">
            <div class="list_title">
                <div class="list_img"><img src="../assets/imgs/img_news_square.png" alt=""></div>
                <div class="list_text">{{column.hjjkNewsListDtoName}}</div>
            </div>
            <div class="list_more">查看更多 ></div>
            <!-- {{column.list}} -->
        </div>
        <div class="list_main">
            {{ column.hjjkSourceDtoList[0].hjjkSourceVoId }}
            <div class="bigImg">
                <img src="#" alt="">
                <div class="bigtitle">
                    <div class="bigtitle_text">
                        {{cardFirst.bigText}}
                    </div>
                    <div class="bigtitle_date">{{cardFirst.bigDate}}</div>
                </div>
            </div>
            <div class="list_card" v-for="(card,index) in NewcolumnsList" :key="index">
                <div class="card_img"><img src="../assets/imgs/wxyq_3.png" alt=""></div>
                <div class="card_msg">
                    <div class="msg_title">{{card.title}}</div>
                    <div class="msg_name">{{card.name}}</div>
                    <div class="msg_dr">
                        <div class="msg_date">{{card.date}}</div>
                        <div class="msg_read">{{card.read}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    name:'listColumns',
    props:['cardList','cardFirst'],
    data(){
        return{
            columnsList:[],
            NewcolumnsList:[],
            bigImg:'',
            bigText:'',
            bigDate:''
        }
    },
    watch:{
        cardList:function(newval,oldval){
            console.log('new',newval)
            // this.columnsList = newval
            // this.NewcolumnsList = this.columnsList.concat()
            // this.NewcolumnsList.shift()
        }
    },
    methods:{
    },
    mounted(){
        // console.log(this.cardList)
        // this.columnsList = this.cardList
    }
}
</script>
<style lang="less" scoped>
.listColumns{
    display: flex;
    flex-direction: column;
    padding: .5rem .3rem;
    background-color: rgb(244, 244, 244);
    .list_hd{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size:.32rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(86,178,173,1);
        margin-bottom: .2rem;
        .list_title{
            display: flex;
            flex-direction: row;
            align-items: center;
            .list_img{
                width: .1rem;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .list_text{
                margin-left: .2rem;
            }
        }
        .list_more{
            font-size: .26rem;
        }
    }
    .list_main{
        .bigImg{
            position: relative;
            height: 3.2rem;
            margin-bottom: .3rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: .2rem;
            }
            .bigtitle{
                display: flex;
                flex-direction: column;
                position: absolute;
                top:50%;
                margin-top:-0.65rem;
                font-size:.32rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color: white;
                padding: 0rem .3rem;
                .bigtitle_text{
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .bigtitle_date{
                    font-size: .26rem;
                    margin-top: .1rem;
                }
            }
        }
        .list_card{
            display: flex;
            flex-direction: row;
            background-color: white;
            padding: .3rem;
            border-radius: .2rem;
            .card_img{
                width: 1.8rem;
                height: 1.8rem;
                img{
                    width: 1.8rem;
                    height: 1.8rem;
                }
            }
            .card_msg{
                display: flex;
                flex-direction: column;
                font-size:.28rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(163,163,163,1);
                margin-left: .3rem;
                .msg_title{
                    font-size:.3rem;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(76,76,76,1);
                }
                .msg_name{
                    margin: .2rem 0rem;
                }
                .msg_dr{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .msg_date{

                    }
                    .msg_read{
                        color:rgba(76,76,76,1);
                    }
                }
            }
        }
    }
}
</style>