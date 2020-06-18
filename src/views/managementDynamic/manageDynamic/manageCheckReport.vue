<template>
    <div class="check_report">
        <div class="check_header_top">
            <HeaderTitle :title="title"></HeaderTitle>
            <div class="check_report_img" @click="showPopup"><img :src="this.img" alt=""></div>
        </div>
        <div class="check_content">
            <div class="check_main">
                <div class="check_hospital">
                    <div class="check_hospital_name">{{this.hospital}}</div>
                    <div class="check_hospital_report">{{this.report}}</div>
                </div>
                <div class="divider"></div>
                <div class="divider_c"></div>
                <div class="check_basic">
                    <div class="check_basic_department">
                        <div class="check_basic_room">科&nbsp;&nbsp;&nbsp;&nbsp;室&nbsp;&nbsp;:&nbsp;<span>内科</span></div>
                        <div class="check_basic_name">医&nbsp;&nbsp;&nbsp;&nbsp;生&nbsp;&nbsp;:&nbsp; <span>苏荷</span></div>
                    </div>
                    <div class="check_basic_date">时&nbsp;&nbsp;&nbsp;&nbsp;间&nbsp;&nbsp;:&nbsp;<span>2015-11-12</span></div>
                    <div class="check_basic_num">门&nbsp;&nbsp;诊&nbsp;&nbsp;号&nbsp;:&nbsp;<span>20151112080302415</span></div><span></span>
                </div>
                <div class="divider_c2"></div>
                <div class="medical_history">
                    <div class="medical_title">简要病史</div>
                    <div class="medical_details">上腹不适2周，拒绝胃镜</div>
                </div>
                <div class="divider_c3"></div>
                <div class="medical_history">
                    <div class="medical_title">诊查表现</div>
                    <div class="medical_details">胃FeaturesTreeSelect: 更新 nav 背景色 #2952；Field: 新增 auto-focus、disable-default-padding、cursor </div></div>
                <div class="divider_c3"></div>
                <div class="medical_history">
                    <div class="medical_title">诊断结论</div>
                    <div class="medical_details">胃FeaturesTreeSelect: 更新 nav 背景色 #2952；Field: 新增 auto-focus、disable-default-padding、cursor 属性 #2936；NavBar: 新增 placeholder 属性 #2896；Bug Fixes</div>
                </div>
                <div class="divider_c3"></div>
                 <div class="medical_history">
                    <div class="medical_title">报告医生&nbsp;:&nbsp;<span>陈某某</span></div>
                </div>
            </div>
        </div>
        <van-popup v-model="show" position="bottom">
            <router-link to="./manageCheckAdvices" class="advices" tag="div">
                <img src="../../../assets/imgs/icon_zx_txjy.png" alt="">
                <div class="text">填写建议</div>
            </router-link>
            <div class="advices">
                <img src="../../../assets/imgs/icon_zx_bddh.png" alt="">
                <div class="text">拨打电话</div>
            </div>
            <div class="advices">
                <img src="../../../assets/imgs/icon_zx_lxtd.png" alt="">
                <div class="text">联系团队</div>
            </div>
            <div class="advices">
                <img src="../../../assets/imgs/icon_zx_tjrw.png" alt="">
                <div class="text">添加任务</div>
            </div>
            <div class="divided"></div>
            <div class="advices close" @click="closePopup">取消</div>
        </van-popup >
    </div>
</template>

<script>
import HeaderTitle from '../../../components/headertitle'
export default {
    components: { HeaderTitle },
    name:'manageCheckReport',
    data(){
        return{
            show: false,
            title:'检查报告',
            hospital:'鄞州人民医院',
            report:'胃部B超检查报告',
            img:require('../../../assets/imgs/cherk_report.png')
        }
    },
    methods:{
        showPopup() {
        this.show = true;
        },
        closePopup() {
        this.show = false;
        },
    }
}
</script>

<style lang="less" scoped>
.check_report{
    // position: relative;
    position: fixed;
    .check_header_top{
        .check_report_img{
            img{
                position: absolute;
                position: fixed;
                top:.9rem;
                right:.3rem;
            }
        }
    }
    .check_content{
        border-top-left-radius: .08rem;
        border-top-right-radius: .08rem;
        border-bottom-left-radius: .08rem;
        border-bottom-right-radius: .08rem;
        background: #ffffff;
         width:6.41rem;
         height:10.8rem;
         position: absolute; 
         top: 1.8rem ; 
         left: 0.35rem; 
         bottom: 0;
         padding: .15rem .25rem .37rem .15rem;
         .check_main{
            display: flex;
            flex-direction: column;
            .check_hospital{
                display: flex;
                flex-direction: column;
                .check_hospital_name{
                    width: 1.9rem;
                    height: .29rem;
                    font-size:.3rem;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(119,119,119,1);
                    margin: 0 auto;
                    margin-bottom: .15rem;
                }
                .check_hospital_report{
                    width: 2.4rem;
                    height: .3rem;
                    font-size:.3rem;
                    font-family:Microsoft YaHei;
                    font-weight:bold;
                    color:rgba(119,119,119,1);
                    margin: 0 auto ;
                }
            }
            .divider{
                width: 100%;
                height: .077rem;
                background: gray;
                opacity: .3;
                margin-top:.3rem;
            }
            .divider_c{
                height: .04rem;
                width: 100%;
                background: gray;
                opacity: .3;
                margin-top:.06rem;
            }
            .check_basic{
                height: 100%;
                width: 6.41rem;
                // background: lightblue;
                display: flex;
                flex-direction: column;
                margin-left: .29rem;
                margin-right: .88rem;
                .check_basic_department{
                    display: flex;
                    flex-direction: row;
                    // justify-content: space-between;
                    // margin-right: .8rem;
                    margin-top: .2rem;
                    margin-bottom: .2rem;
                    .check_basic_room{
                        width: 3.1rem;
                        font-size:.3rem;
                        font-family:Microsoft YaHei;
                        font-weight:bold;
                        color:rgba(119,119,119,1);
                        span{
                            font-weight:normal;
                        }
                    }
                    .check_basic_name{
                        font-size:.3rem;
                        font-family:Microsoft YaHei;
                        font-weight:bold;
                        color:rgba(119,119,119,1);
                        span{
                            font-weight:normal;
                        }
                    }
                }
                .check_basic_date{
                     font-size:.3rem;
                    font-family:Microsoft YaHei;
                    font-weight:bold;
                    color:rgba(119,119,119,1);
                    margin-bottom: .2rem;
                    span{
                            font-weight:normal;
                        }
                }
                .check_basic_num{
                    font-size:.3rem;
                    font-family:Microsoft YaHei;
                    font-weight:bold;
                    color:rgba(119,119,119,1);
                    margin-bottom: .2rem;
                    span{
                            font-weight:normal;
                        }
                }
            }
            .divider_c2{
                height: .2rem;
                width: 100%;
                background: gray;
                opacity: .1;
            }
            .medical_history{
                margin-left: 0.29rem;
                margin-bottom: 0.2rem;
                .medical_title{
                    margin-top: .2rem;
                    font-size:.3rem;
                    font-family:Microsoft YaHei;
                    font-weight:bold;
                    color:rgba(96,96,96,1);
                    span{
                        font-size:.3rem;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(119,119,119,1);
                    }
                }
                .medical_details{
                    margin-top: .2rem;
                    font-size:.3rem;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(119,119,119,1);
                }
            }
            .divider_c3{
                height: .01rem;
                width: 100%;
                background: lightgrey;
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