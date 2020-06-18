<template>
    <div class="manage_dynamic">
        <div class="header_top">
            <HeaderTitle :title="title"></HeaderTitle>
        </div>
        <div class="dynamic">
            <div class="dynamic_space"></div>
            <div class="dynamic_card" v-for="item in list">
                <div>
                    <div class="dynamic_card_child">
                        <div class="dynamic_card_child_top">
                            <div class="check">
                                <div class="check_report">{{item.typeNm}}</div>
                                <div class="tip" v-if="item.tip"><img :src="item.img" alt=""></div>
                            </div>
                            <div class="check_date">{{item.date}}</div>
                        </div>
                        <hr>
                        <div class="dynamic_card_child_content">
                            <div class="dynamic_card_child_content_middle">
                                <div class="dynamic_card_head">
                                    <img :src="item.imgUrl" alt="">
                                </div>
                                <div class="dynamic_card_name">
                                    <div class="dynamic_card_name_top">
                                        <div class="name">{{item.username}}</div>
                                        <div class="type">{{item.memberType}}</div>
                                    </div>
                                    <div class="dynamic_card_name_botton">
                                        <div class="sex">{{item.sex}}</div>
                                        <div class="age">{{item.age}}岁</div>
                                        <div class="address">{{item.cityNm}}</div>
                                    </div>
                                </div>
                                <div class="dynamic_card_upload">{{item.from}}</div>
                            </div>
                            <div class="dynamic_card_child_content_details">
                                {{item.details}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '../../../components/headertitle'
import { getManage } from '@/api/apiz'
export default {
    components:{ HeaderTitle },
    name:'manageDynamic',
    data(){
        return{
            title:'会员动态',
            list:''
        }
    },
    methods:{
        getManageId(id){
            getManage(id).then((res) => {
                console.log(res)
                this.list = res.data.list
            })
        }
    },
    mounted(){
        this.getManageId();
    }
}
</script>

<style lang="less" scoped>
.manage_dynamic{
    // display: flex;
    // flex-direction: column;
    // justify-content: flex-end;
    height: 100%;
    position: relative;
    .dynamic_space{
        width: 100%;
        height: .25rem;
        background: #ffffff;
        position: fixed;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }
    .dynamic{
        // flex: 1;
        // background: #FFFFFF;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        background: #ffffff;
         width: 100%;
         position: absolute; 
         top: 1.7rem ; 
         left: 0 ; 
         bottom: 0;
         position: fixed;
         overflow: auto;
         .dynamic_card{
             .dynamic_card_child{
                 display: flex;
                 width:6.91rem;
                 height:2.81rem;
                 border-top-left-radius: .08rem;
                 border-top-right-radius: .08rem;
                 border-bottom-left-radius: .08rem;
                 border-bottom-right-radius: .08rem;
                //  opacity:0.4;
                 margin: 0.35rem 0.29rem 0.08rem 0.3rem;
                 box-shadow: 0.01rem 0.01rem 0.1rem rgba(225, 225, 230, 0.6), -0.01rem -0.01rem 0.1rem rgba(225, 225, 230, 0.6);
                 flex-direction: column;
                 .dynamic_card_child_top{
                     display: flex;
                     height: .79rem;
                     flex-direction: row;
                     justify-content: space-between;
                     .check{
                         display: flex;
                         font-family:Microsoft YaHei;
                         flex-direction: row;
                         align-self: center;
                         .check_report{
                             font-size:0.3rem;
                             font-weight:bold;
                             color: #5D5D5D;
                             margin-left: 0.25rem;
                         }
                         .tip{
                             height: .40rem;
                             width: .35rem;
                             margin-left: 0.11rem;
                             img{
                                 height: .35rem;
                                 width: .35rem;
                                 margin-top: 0.05rem;
                             }
                         }
                     }
                     .check_date{
                         font-size:0.3rem;
                         font-weight:400;
                         color: #5D5D5D;
                         line-height: .8rem;
                         margin-right: 0.32rem;
                     }
                 }
                 .dynamic_card_child_content{
                     display: flex;
                     flex: 1;
                     flex-direction: column;
                     .dynamic_card_child_content_middle{
                         width:6.29rem;
                         height:1.5rem;
                         display: flex;
                         flex-direction: row;
                        //  justify-content: space-between;
                         .dynamic_card_head{
                             margin-left: .27rem;
                             margin-top: .16rem;
                             img{
                                 width: 1rem;
                                 height: 1rem;
                                //  background: burlywood;
                                 border-radius: 50% 50%;
                             }
                         }
                         .dynamic_card_name{
                             width: 3.14rem;
                             height: 1rem;
                            //  padding: .41rem 0rem .41rem 0rem;
                            //  background: lightblue;
                             margin-top: .2rem;
                             margin-left: .2rem;
                             display: flex;
                             flex-direction: column;
                             justify-content: space-between;
                             .dynamic_card_name_top{
                                 width: 3.14rem;
                                 height: .3rem;
                                //  background: lightgreen;
                                 display: flex;
                                 flex-direction: row;
                                 .name{
                                     font-size: .3rem;
                                     color: #5D5D5D;
                                     font-family:Microsoft YaHei;
                                     font-weight:400;
                                     margin-left: .1rem;
                                 }
                                 .type{
                                     font-size: .3rem;
                                     color: #5D5D5D;
                                     font-family:Microsoft YaHei;
                                     font-weight:400;
                                     margin-left: .2rem;
                                 }
                             }
                             .dynamic_card_name_botton{
                                 width: 3.14rem;
                                 height: .3rem;
                                 margin-bottom: .15rem;
                                //  background: lightseagreen;
                                 display: flex;
                                 flex-direction: row;
                                 .sex{
                                     font-size: .3rem;
                                     color: #5D5D5D;
                                     font-family:Microsoft YaHei;
                                     font-weight:400;
                                     margin-left: .1rem;
                                 }
                                 .age{
                                     font-size: .3rem;
                                     color: #5D5D5D;
                                     font-family:Microsoft YaHei;
                                     font-weight:400;
                                     margin-left: .2rem;
                                 }
                                 .address{
                                     font-size: .3rem;
                                     color: #5D5D5D;
                                     font-family:Microsoft YaHei;
                                     font-weight:400;
                                     margin-left: .2rem;
                                 }
                             }
                         }
                         .dynamic_card_upload{
                             width:1.2rem;
                             height:.3rem;
                            //  background: lightcoral;
                             margin-top: .16rem;
                             color: #8E8E8E;
                             font-family:Microsoft YaHei;
                             font-weight:400;
                             font-size: .3rem;
                             margin-left: .48rem;
                         }
                     }
                     .dynamic_card_child_content_details{
                         width:6.29rem;
                        //  height:.28rem;
                         font-size:.28rem;
                         font-family:Microsoft YaHei;
                         font-weight:400;
                         color:#8E8E8E;
                         line-height:.38rem;
                         white-space:nowrap;
                         overflow:hidden;
                         text-overflow:ellipsis;
                         margin-left: .3rem;
                     }
                 }
             }
             .van-card{
                 margin: 0.31rem 0.18rem 0.08rem 0.19rem;
             }
         }
    }
}
    
</style> 