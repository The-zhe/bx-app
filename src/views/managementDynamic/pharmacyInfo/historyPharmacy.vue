<template>
    <div class="historyPharmacy">
        <div class="pharmacy_top">
            <HeaderTitle :title="title"></HeaderTitle>
        </div>

        <div class="history">
            <div class="time">
                <Time></Time> - <Time></Time>
            </div>
            <div class="divder"></div>
            <div class="flex">
                <div class="pharmacy_list">
                    <div class="pharmacy_card" v-for="(item,index) in list" :key="index">
                        <div class="card_date" v-show="item.date">
                            <div class="card_title_bold">修改时间</div>{{item.date}}</div>
                        <div class="card_add" v-show="item.add">
                            <div class="card_title">新增药品</div>{{item.add}}</div>
                        <div class="card_name" v-show="item.name">
                            <div class="card_title">修改药品</div>{{item.name}}</div>
                        <div class="card_stop" v-show="item.stop">
                            <div class="card_title">停止药品</div>{{item.stop}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '../../../components/headertitle'
import Time from '../../../components/timeSelect'
export default {
    name:'historyPharmacy',
    components:{ HeaderTitle,Time },
    data(){
        return{
            title:'历史修改',
            list:[
                {
                    date:'2020-5-11 14:30',
                    add:'头孢克洛分散片',
                    name:'左氧氟沙星片',
                    stop:'新康泰克复方盐酸伪麻黄碱缓释胶囊',
                },
                {
                    date:'2020-5-11 14:30',
                    add:'头孢克洛分散片',
                    name:'左氧氟沙星片',
                },
                {
                    date:'2020-5-11 14:30',
                    add:'头孢克洛分散片',
                    name:'左氧氟沙星片',
                },
                {
                    date:'2020-5-11 14:30',
                    stop:'新康泰克复方盐酸伪麻黄碱缓释胶囊',
                },
                {
                    date:'2020-5-11 14:30',
                    add:'头孢克洛分散片',
                    name:'左氧氟沙星片',
                    stop:'新康泰克复方盐酸伪麻黄碱缓释胶囊',
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.historyPharmacy{
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
            .pharmacy_list{
                display: flex;
                flex-direction: column;
                font-size:0.3rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(119,119,119,1);
                margin-top: .2rem;
                .pharmacy_card{
                    display: flex;
                    flex-direction: column;
                    margin: .1rem;
                    padding: .1rem;
                    box-shadow: 0 0 0.08rem #bebcbc;
                    .card_date{
                        display: flex;
                        flex-direction: row;
                        font-weight: bold;
                        padding: .15rem;
                        border-bottom: 0.01rem rgba(93,93,93,0.3) solid;
                        .card_title_bold{
                            font-weight: bold;
                            margin-right: .2rem;
                        }
                    }
                    .card_add{
                        display: flex;
                        flex-direction: row;
                        padding: .15rem;
                        border-bottom: 0.01rem rgba(93,93,93,0.3) dashed;
                        .card_title{
                            margin-right: .2rem;
                        }
                    }
                    .card_name{
                        display: flex;
                        flex-direction: row;
                        padding: .15rem;
                        border-bottom: 0.01rem rgba(93,93,93,0.3) dashed;
                        .card_title{
                            margin-right: .2rem;
                        }
                    }
                    .card_stop{
                        display: flex;
                        flex-direction: row;
                        padding: .15rem;
                        .card_title{
                            margin-right: .2rem;
                        }
                    }
                }
            }
        }
    }
}
</style>