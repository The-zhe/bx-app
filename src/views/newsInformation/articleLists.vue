<template>
    <div class="articleLists">
        <header>
             <div class="hd_search">
                <input type="text" placeholder="文章首页或关键词">
            </div>
            <div class="hd_sicon"><img src="../../assets/imgs/btn_news_search_white.png" alt=""></div>
        </header>
        <div class="list_main">
            <div class="bigImg" @click="getCardId(list[0].id)">
                <img src="../../assets/imgs/wxyq_3.png" alt="">
                <div class="bigtitle">
                    <div class="bigtitle_text">
                        {{list[0].cont}}
                    </div>
                    <div class="bigtitle_date">{{this.list[0].date}}</div>
                </div>
            </div>
            <div class="list_card" v-for="(card,index) in newlist" :key="index" @click="getCardId(card.id)">
                <div class="card_img"><img src="../../assets/imgs/wxyq_3.png" alt=""></div>
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
</template>
<script>
export default {
    name:'articleLists',
    data(){
        return{
            id:'',
            val:'',
            list:[
                {
                    image:'../assets/imgs/wxyq_3.png',
                    id:'4234515357500215001',
                    title:'高血压是怎么回事？',
                    name:'刘佳 •  主任医师 •  宁波市医疗中心 李惠利医院',
                    date:'2020/6/3',
                    read:'1234阅读',
                    cont:'根据全球疫情最新实时统计数据显示，全球累计确诊新冠肺炎病例6340811例，累计死亡378359例。其中，美国新冠肺炎确诊超182万，累计确诊高达1828736例，累计死亡106046例。这个时候，美股的走势更让人意想不到，居然在周二美股再一次强势上涨的情况。'
                },
                {
                    image:'../assets/imgs/wxyq_1.png',
                    id:'4234515357500215002',
                    title:'高血压是怎么回事？',
                    name:'刘备 •  主任医师 •  宁波市医疗中心 李惠利医院',
                    date:'2020/6/4',
                    read:'1235阅读',
                    cont:'根据全球疫情最新实时统计数据显示，全球累计确诊新冠肺炎病例6340811例，累计死亡378359例。其中，美国新冠肺炎确诊超182万，累计确诊高达1828736例，累计死亡106046例。这个时候，美股的走势更让人意想不到，居然在周二美股再一次强势上涨的情况。'
                },
                {
                    image:'../assets/imgs/wxyq_3.png',
                    id:'4234515357500215003',
                    title:'高血压是怎么回事？',
                    name:'刘星 •  主任医师 •  宁波市医疗中心 李惠利医院',
                    date:'2020/6/5',
                    read:'1234阅读',
                    cont:'根据全球疫情最新实时统计数据显示，全球累计确诊新冠肺炎病例6340811例，累计死亡378359例。其中，美国新冠肺炎确诊超182万，累计确诊高达1828736例，累计死亡106046例。这个时候，美股的走势更让人意想不到，居然在周二美股再一次强势上涨的情况。'
                },
                {
                    image:'../assets/imgs/wxyq_3.png',
                    id:'4234515357500215004',
                    title:'高血压是怎么回事？',
                    name:'刘星 •  主任医师 •  宁波市医疗中心 李惠利医院',
                    date:'2020/6/5',
                    read:'1234阅读',
                    cont:'根据全球疫情最新实时统计数据显示，全球累计确诊新冠肺炎病例6340811例，累计死亡378359例。其中，美国新冠肺炎确诊超182万，累计确诊高达1828736例，累计死亡106046例。这个时候，美股的走势更让人意想不到，居然在周二美股再一次强势上涨的情况。'
                },
                {
                    image:'../assets/imgs/wxyq_3.png',
                    id:'4234515357500215005',
                    title:'高血压是怎么回事？',
                    name:'刘星 •  主任医师 •  宁波市医疗中心 李惠利医院',
                    date:'2020/6/5',
                    read:'1234阅读',
                    cont:'根据全球疫情最新实时统计数据显示，全球累计确诊新冠肺炎病例6340811例，累计死亡378359例。其中，美国新冠肺炎确诊超182万，累计确诊高达1828736例，累计死亡106046例。这个时候，美股的走势更让人意想不到，居然在周二美股再一次强势上涨的情况。'
                },
                {
                    image:'../assets/imgs/wxyq_3.png',
                    id:'4234515357500215006',
                    title:'高血压是怎么回事？',
                    name:'刘星 •  主任医师 •  宁波市医疗中心 李惠利医院',
                    date:'2020/6/5',
                    read:'1234阅读',
                    cont:'根据全球疫情最新实时统计数据显示，全球累计确诊新冠肺炎病例6340811例，累计死亡378359例。其中，美国新冠肺炎确诊超182万，累计确诊高达1828736例，累计死亡106046例。这个时候，美股的走势更让人意想不到，居然在周二美股再一次强势上涨的情况。'
                },
            ],
            newlist:[]
        }
    },
    mounted(){
        this.getnewlist()
    },
    methods:{
        getnewlist(){
            this.newlist = this.list.concat()
            this.newlist.shift()
        },
        getCardId(id){
            console.log(id)
        },
        // getBigId(val){
        //     console.log(val)
        // }
    }
}
</script>
<style lang="less" scoped>
header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    // height: 2.44rem;
    padding:.3rem;
    background-image: linear-gradient(to right,rgba(0, 140, 147, 1), rgba(42, 177, 167, 1));
    .hd_search{
        font-size:.26rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(183,183,183,1);
        input{
            padding:0rem .28rem;
            width:5.5rem;
            height:.6rem;
            border-radius: .25rem;
            outline: none;
        }
    }
    .hd_sicon{
        width: .36rem;
        height: .36rem;
        margin-top: .1rem;
        margin-right: .1rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.list_main{
    padding: .3rem;
    background-color: rgb(244, 244, 244);
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
            margin-bottom: .3rem;
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
</style>