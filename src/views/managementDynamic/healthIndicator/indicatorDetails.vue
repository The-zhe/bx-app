<template>
    <div class="in_details">
        <div class="in_top">
            <HeaderTitle :title="title"></HeaderTitle>
            <div class="in_img" > <img :src="img" alt="" @click="showPopup"></div>
        </div>
        <div class="details">
            <div class="flex">
                <div class="space"></div>
                <div class="dts">
                    <div class="dts_img">
                        <img :src="memberimg" alt="">
                    </div>
                    <div class="dts_msg">
                        <div class="msg_top">
                            <div class="msg_name">陈叶敏</div>
                            <div class="msg_type">优医会员</div>
                        </div>
                        <div class="msg_bottom">
                            <div class="msg_sex">男</div>
                            <div class="msg_age">26岁</div>
                            <div class="msg_city">温州</div>
                        </div>
                    </div>
                </div>
                <div class="divder"></div>
                <div class="e_details">
                    <div class="time">
                        <Time></Time>-<Time></Time>
                    </div>
                    <div class="divder_c"></div>
                    <div class="Chart">
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
                <div class="divder"></div>
                <div class="historyList">
                    <div class="list_title">
                        <span>历史列表</span> <img :src="listimg" alt="" style="margin-right:0.1rem">
                    </div>
                    <ul>
                        <li class="list_card">
                            <div class="card_top">
                                <div class="card_date">2020-5-11  10:46</div>
                                <div class="card_type">医生上传</div>
                            </div>
                            <div class="card_bottom">
                                <div class="card_name">心率</div>
                                <div class="card_details">82bmp</div>
                            </div>
                            <div class="divder_li"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <van-popup v-model="show" position="bottom">
            <div class="advices">
                <img src="../../../assets/imgs/icon_zx_txjy.png" alt="">
                <div class="text">填写建议</div>
            </div>
            <div class="advices">
                <img src="../../../assets/imgs/icon_zx_bddh.png" alt="">
                <div class="text">拨打电话</div>
            </div>
            <div class="advices">
                <img src="../../../assets/imgs/icon_zx_lxtd.png" alt="">
                <div class="text">联系团队</div>
            </div>
            <div class="advices">
                <img src="../../../assets/imgs/btn_hyzl_apply.png" alt="">
                <div class="text">添加任务</div>
            </div>
            <div class="divided"></div>
            <div class="advices close" @click="closePopup">取消</div>
        </van-popup >
    </div>
</template>

<script>
import HeaderTitle from '../../../components/headertitle'
import Time from '../../../components/timeSelect'
export default {
    name:'indicatorDetails',
    components:{ HeaderTitle,Time },
    data(){
        return{
            show:false,
            title:'心率指标详情',
            img:require('../../../assets/imgs/cherk_report.png'),
            memberimg:require('../../../assets/imgs/member_head.png'),
            listimg:require('../../../assets/imgs/btn_hyzl_apply.png'),
            myChart:'',
            date:[
                {
                    time:'0时',
                    value:120
                },
                {
                    time:'3时',
                    value:100
                },
                {
                    time:'6时',
                    value:91
                },
                {
                    time:'9时',
                    value:82
                },
                {
                    time:'12时',
                    value:49
                },
                {
                    time:'15时',
                    value:85
                },
                {
                    time:'18时',
                    value:99
                },
                {
                    time:'21时',
                    value:148
                },
                {
                    time:'24时',
                    value:111
                },
            ]
        }
    },
    methods:{
        drewChart(){
            //1.创建Chart对象
            const chart = new this.$F2.Chart({
                id:'myChart',
                pixelRatio: window.devicePixelRatio // 指定分辨率
            })
            //2.载入数据源
            chart.source(this.date,{
                value:{
                    tickCount:4,
                    min:0,
                    max:150,
                },
                day:{
                    range:[0,1]
                }
            });
            //3.创建图形
            chart.tooltip({
                showCrosshairs:true,//是否显示辅助线，点图、路径图、线图、面积图默认展示
                alwaysShow:true,//当移出触发区域，是否仍显示提示框内容
            });
            chart.axis('time',{//配置坐标轴
                label: (text, index, total) => {
                    const cfg = {};
                    // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
                    if (index === 0) {
                    cfg.textAlign = 'start';
                    }
                    if (index > 0 && index === total - 1) {
                    cfg.textAlign = 'end';
                    }
                    //cfg.text = text + '%'; // cfg.text 支持文本格式化处理
                    return cfg;
                },
                grid: (text, index, total) => {
                    if(text === '0%') { // 0％ 处的栅格线着重显示
                        return {
                            stroke: 'red' //#efefef
                        };
                    }
                        return {
                            stroke: 'rgba(93,93,93,.2)' //#f7f7f7
                        }
                },
            });
            chart.axis('value',{
                position:'right'
            });
            chart.line().position('time*value').color('#3EB4A1');
            chart.point().position('time*value').style({
                fill: '#3EB4A1',
                stroke: '#3EB4A1',
                lineWidth: 1
            });
            chart.guide().point({
                position: ['12时', 49],
                style: {
                stroke: 'red',
                }
            });
            chart.guide().tag({
                top:[true],
                position: ['12时', 49],
                content:'异常',
                direct: 'bc',
                background: {
                    padding: [4, 6], // tag 内边距，使用同 css 盒模型的 padding
                    radius: 2, // tag 圆角
                    fill: '#3EB4A1', // tag 背景色
                }, // tag 背景样式
                pointStyle: {
                    fill: 'white', // 填充颜色
                    r: 5, // 半径
                    lineWidth: 1, // 线的边框
                    stroke: 'red' // 线的描边
                }, // 点的样式
            })
            //4.渲染图表
            chart.render();
        },
        showPopup() {
        this.show = true;
        },
        closePopup() {
        this.show = false;
        },
    },
    mounted(){
        this.drewChart()
        // this.getwidth()
    }
}
</script>

<style lang="less" scoped>
.in_details{
    .in_top{
        .in_img{
            img{
                position: fixed;
                top: 0.9rem;
                right: 0.3rem;
            }
        }
    }
    .details{
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
        .flex{
            overflow: auto;
            height: 100%;
            .space{
                width: 100%;
                height: 0.4rem;
                background-color: #ffffff;
                position: fixed;
                border-top-left-radius: .3rem;
                border-top-right-radius: .3rem;
                z-index: 100;
            }
            .dts{
                // width: 100%;
                padding: 0.3rem;
                padding-top: .5rem;
                display: flex;
                flex-direction: row;
                .dts_img{
                    width: 1rem;
                    height: 1rem;
                    img{
                        border-radius: 50% 50%;
                        width: 1rem;
                        height: 1rem;
                        padding: .1rem;
                    }
                }
                .dts_msg{
                    display: flex;
                    flex-direction: column;
                    font-size:0.3rem;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(93,93,93,1);
                    margin-left: .3rem;
                    .msg_top{
                        display: flex;
                        flex-direction: row;
                        padding: .1rem;
                        .msg_name{
                            font-weight: bold;
                        }
                        .msg_type{
                            margin-left: .3rem;
                        }
                    }
                    .msg_bottom{
                        display: flex;
                        flex-direction: row;
                        padding: .1rem;
                        // .msg_sex{}
                        .msg_age{margin-left: .3rem;}
                        .msg_city{margin-left: .3rem;}
                    }
                }
            }
            .divder{
                width:100%;
                height:0.2rem;
                background-color: rgba(168, 168, 168, 0.2);
            }
            .e_details{
                padding: .3rem;
                .time{
                    display: flex;
                    flex-direction: row;
                }
                .divder_c{
                    height:0.01rem;
                    background-color: rgba(168, 168, 168, 0.2);
                    margin-top: .2rem;
                }
                .Chart{
                    width:6.91rem;
                    margin: 0 auto;
                    #myChart{
                        box-shadow: 0 0 0.08rem #bebcbc;
                        width:100%;
                        height:3rem;
                    }
                }
            }
            .historyList{
                display: flex;
                flex-direction: column;
                font-size:0.28rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(119,119,119,1);
                padding: .2rem;
                .list_title{
                    margin-bottom: .2rem;
                    img{
                        width:0.41rem;
                        height:0.37rem;
                        float: right;
                    }
                    span{
                        // margin-right: .2rem;
                        float: right;
                    }
                }
                ul{
                    box-shadow: 0 0 0.08rem #bebcbc;
                    li{
                        display: flex;
                        flex-direction: column;
                        padding: .2rem;
                        .card_top{
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            padding-bottom: .2rem;
                            border-bottom: 0.01rem solid rgba(168, 168, 168, 0.5);
                            // .card_date{

                            // }
                            // .card_type{

                            // }
                        }
                        .card_bottom{
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            padding-top: .2rem;
                            // .card_name{}
                            // .card_details{}
                        }
                        .divder_li{
                            height:0.2rem;
                            background-color: rgba(168, 168, 168, 0.2);
                            margin-top: .2rem;
                        }
                    }
                }
            }
        }
    }
    .van-popup{
        border-top-right-radius: .3rem;
        border-top-left-radius: .3rem;
        width:100%;
        height:5.21rem;
        .advices{
            display: flex;
            justify-content: center;
            height: 1rem;
            width: 100%;
            font-size:.35rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(113,112,113,1);
            line-height:1rem;
            border-bottom: 0.01rem solid rgba(244,244,244,1);
            img{
                height: .35rem;
                align-self: center;
            }
            .text{
                margin-left: .26rem;
            }
        }
        .divided{
            width:100%;
            height:.17rem;
            background:rgba(244,244,244,1);
        }
    }
}
</style>