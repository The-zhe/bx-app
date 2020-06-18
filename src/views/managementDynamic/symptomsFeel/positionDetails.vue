<template>
    <div class="details">
        <div class="details_top">
            <HeaderTitle :title="title"></HeaderTitle>
            <div class="details_img" > <img :src="img" alt="" @click="showPopup"></div>
        </div>
        <div class="position">
           <div class="flex">
               <div class="space"></div>
                <div class="position_top">
                <div class="position_img">
                    <img :src="posimg" alt="">
                </div>
                <div class="position_msg">
                    <div class="position_msg_top">
                        <div class="msg_name">{{this.name}}</div>
                        <div class="msg_member">{{this.member}}</div>
                    </div>
                    <div class="position_msg_bottom">
                        <div class="msg_sex">{{this.sex}}</div>
                        <div class="msg_age">{{this.age}}岁</div>
                        <div class="msg_city">{{this.city}}</div>
                    </div>
                </div>
            </div>
            <div class="submit_time">
                <div class="sub_left">
                    <div class="title">提交时间</div>
                    <div class="date">{{this.date}}</div>
                </div>
                <div class="sub_right">{{this.upload}}</div>
            </div>
            <div class="submit_time">
                <div class="sub_left">
                    <div class="title">主要症状</div>
                    <div class="date">{{this.symptoms}}</div>
                </div>
            </div>
            <div class="submit_time">
                <div class="sub_left">
                    <div class="title" style="width: 4.9rem;">详细描述</div>
                    <div class="date" style="padding-right: .2rem;">{{this.describe}}</div>
                </div>
            </div>
            <div class="submit_time" v-show="this.modify">
                <div class="sub_left">
                    <div class="title">提交时间</div>
                    <div class="date">{{this.date}}</div>
                </div>
                <div class="sub_right">{{this.memberload}}</div>
            </div>
            <div class="drop" v-show="this.modify" @click="toogle"><img :src="this.dropimg" alt=""></div>
            <div class="divder_c"></div>
            <div class="advice" v-show="this.block">
                <div class="advice_content">
                    <div class="advice_top">
                        <div class="advice_name">{{this.doctorname}}</div>
                        <div class="advice_time">{{this.dactortime}}</div>
                    </div>
                    <div class="advice_main">{{this.text}}</div>
                </div>
            </div>
           </div>
        </div>    
        <div class="divder"></div>

        <van-popup v-model="show" position="bottom">
            <router-link to="./symptomsFeelAdvices" class="advices" tag="div">
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
import HeaderTitle from '../../../components/headertitle';
import { getHealthMessage } from '../../../api/apiz';
export default {
    components: { HeaderTitle },
    name:'positionDetails',
    data(){
        return{
            id:this.$route.query.id,
            block:false,
            show:false,
            modify:true,
            name:'陈某某',
            member:'优医会员',
            sex:'男',
            age:'20',
            city:'浙江  温州',
            title:'状况详情',
            date:'2020-5-6  15:26',
            upload:'会员上传',
            memberload:'客户上传',
            symptoms:'发烧，39度',
            doctorname:'医疗部  张欣  主治医师',
            dactortime:'2020-5-7  9:21',
            describe:'第39届香港电影金像奖因新冠肺炎疫情已宣布取消实体颁奖礼，获奖名单将于2020年5月6日下午3时，通过3个不同社交媒体，直播公布，整个活动预计约20分钟',
            text:'2019/12/12  上午，与护理团队上门咨询，需要带诊器，和客户商量下一步检查事宜的处境时刻你你大撒把金额近您的健康才能看到说的就是很多与护理团队上门咨询，需要带上听诊器，和客户商量下一步检查事宜的处境时刻你的健康才能看到说的就是很多事 。',
            img:require('../../../assets/imgs/cherk_report.png'),
            dropimg:require('../../../assets/imgs/btn_da_return.png'),
            posimg:require('../../../assets/imgs/member_head.png')
        }
    },
    methods:{
        toogle(){
            this.block = !this.block
        },
        getId(){
            console.log('getid',this.id)
        },
        getMessage(id){
            // getHealthList(this.id).then(res=>{
            //     console.log(res.data.list)
            // })
            console.log('id',this.id)
            getHealthMessage(this.id).then(res => {
                console.log(res)
            })
        },
        showPopup() {
        this.show = true;
        },
        closePopup() {
        this.show = false;
        },
    },
    mounted(){
        this.getId()
        this.getMessage()
    },
}
</script>

<style lang="less" scoped>
.details{
    .details_top{
        .details_img{
            img{
                position: fixed;
                top: 0.9rem;
                right: 0.3rem;
            }
        }
    }
     .position{
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
            .space{
                width: 100%;
                height: 0.4rem;
                background-color: #ffffff;
                position: fixed;
                border-top-left-radius: .3rem;
                border-top-right-radius: .3rem;
                z-index: 100;
            }
            .position_top{
            display: flex;
            flex-direction: row;
            margin-bottom: .5rem;
            margin-top: .36rem;
            padding-left: .3rem;
            .position_img{
                height: 1rem;
                width: 1rem;
                overflow: hidden;
                border-radius: 50% 50%;
                img{
                    height: 1rem;
                    width: 1rem;
                }
            }
            .position_msg{
                display: flex;
                flex-direction: column;
                font-size:.3rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(93,93,93,1);
                .position_msg_top{
                    display: flex;
                    flex-direction: row;
                    margin-bottom: .26rem;
                    .msg_name{
                        margin-left: .36rem;
                        font-weight: bold;
                    }
                    .msg_member{
                        margin-left: .36rem;
                    }
                }
                .position_msg_bottom{
                    display: flex;
                    flex-direction: row;
                    .msg_sex{
                        margin-left: .36rem;
                    }
                    .msg_age{
                        margin-left: .36rem;
                    }
                    .msg_city{
                        margin-left: .36rem;
                    }
                }
            }
        }
        .submit_time{
         display: flex;
         flex-direction: row;
         width: 100%;
         margin-top: .5rem;
         font-size:.3rem;
         font-family:Microsoft YaHei;
         font-weight:400;
         color:rgba(93,93,93,1);
         justify-content: space-between;
         padding-bottom: .36rem;
         border-bottom: 0.01rem rgba(93,93,93,0.3) dashed;
         .sub_left{
             display: flex;
             flex-direction: row;
             .title{
                 font-weight: bold;
                 margin-left: .4rem;
             }
             .date{
                 margin-left: .36rem;
             }
            }
         .sub_right{
                 margin-right: .36rem;
                 width: 1.5rem;
            }
        }
        .drop{
            width: 100%;
            padding: 0.3rem 0rem 0.3rem 0rem;
            img{
                display: block;
                width: .29rem;
                margin: 0 auto;
            }
        }
        .divder_c{
         width:100%;
         height:.21rem;
         background: rgba(119,119,119,.1);
        }
     }
     .divder{
         position: absolute;
         top: 3.5rem;
         width:100%;
         height:.21rem;
         background: rgba(119,119,119,.2);
     }
     .advice{
         width: 100%;
         .advice_content{
             padding: .3rem;
             display:flex;
             flex-direction: column;
             font-size:.3rem;
             font-family:Microsoft YaHei;
             font-weight:400;
             color:rgba(91,91,91,1);
             .advice_top{
                 padding-bottom: .3rem;
                 display: flex;
                 flex-direction: column;
                 border-bottom: 0.01rem solid rgba(91,91,91,0.3);
                 .advice_name{
                     font-weight: bold;
                     margin-bottom: .2rem;
                 }
             }
             .advice_main{
                padding-top: .3rem;
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