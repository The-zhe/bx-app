<template>
    <div class="historyHealth">
        <div class="history_top">
            <HeaderTitle :title="title"></HeaderTitle>
        </div>

        <div class="history">
            <div class="time">
                <Time></Time> - <Time></Time>
            </div>
            <div class="divder"></div>
            <div class="flex">
                <div class="report_card" v-for="(item,index) in list" :key="index">
                    <div class="card_top">
                        <div class="title">{{item.title}}</div>
                        <div class="date">{{item.date}}</div>
                    </div>
                    <div class="divder_c"></div>
                    <div class="card_bottom">
                        <div class="data">{{item.data}}</div>
                        <div class="upload">{{item.upload}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '../../../components/headertitle'
import Time from '../../../components/timeSelect'
import { getHistoryHealth } from '../../../api/apiz'
export default {
    name:'historyHealth',
    components:{ HeaderTitle,Time },
    data(){
        return{
            title:'指标历史记录',
            id:'4813385221673984',
            list:[
                {
                    title:'心率',
                    date:'2020-5-7  15:27',
                    data:'82bmp',
                    upload:'管家上传'
                },
                {
                    title:'心率',
                    date:'2020-5-7  15:27',
                    data:'82bmp',
                    upload:'管家上传'
                },
                {
                    title:'心率',
                    date:'2020-5-7  15:27',
                    data:'82bmp',
                    upload:'管家上传'
                },
                {
                    title:'心率',
                    date:'2020-5-7  15:27',
                    data:'82bmp',
                    upload:'管家上传'
                },
                {
                    title:'心率',
                    date:'2020-5-7  15:27',
                    data:'82bmp',
                    upload:'管家上传'
                },
                {
                    title:'心率',
                    date:'2020-5-7  15:27',
                    data:'82bmp',
                    upload:'管家上传'
                },
                {
                    title:'心率',
                    date:'2020-5-7  15:27',
                    data:'82bmp',
                    upload:'管家上传'
                },
                {
                    title:'心率',
                    date:'2020-5-7  15:27',
                    data:'82bmp',
                    upload:'管家上传'
                },
                {
                    title:'心率',
                    date:'2020-5-7  15:27',
                    data:'82bmp',
                    upload:'管家上传'
                },
            ]
        }
    },
    methods:{
        getHistory(id){
            console.log(this.id)
            getHistoryHealth(this.id).then(res => {
                console.log(res)
            })
        }
    },
    mounted(){
        this.getHistory()
    }
}
</script>

<style lang="less" scoped>
.historyHealth{
    .history{
        padding: 0.3rem;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        background: #ffffff;
        width: 100%;
        position: absolute; 
        top: 1.7rem ; 
        left: 0 ; 
        bottom: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: fixed;
        .time{
            display: flex;
            flex-direction: row;
            margin-bottom: .3rem;
        }
        .divder{
            height: 0.01rem;
            width: 100%;
            background-color: rgba(91, 91, 91, .2);
        }
        .flex{
            overflow: auto;
            .report_card{
                display: flex;
                flex-direction: column;
                font-size:.3rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(119,119,119,1);
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                padding: .2rem;
                margin: .3rem .1rem .3rem .1rem;
                .card_top{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding-bottom: .2rem;
                    .title{
                        font-weight: bold;
                    }
                }
                .divder_c{
                    height: 0.01rem;
                    width: 100%;
                    background: rgba(91, 91, 91, .2);
                }
                .card_bottom{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding-top: .2rem;
                }
            }
        }
    }
}
</style>