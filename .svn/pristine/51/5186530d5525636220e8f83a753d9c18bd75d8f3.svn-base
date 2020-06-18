<template>
    <div class="newComments">
        <div class="title">用户留言</div>
        <div class="divder"></div>
        <div class="commentsList">
            <div class="com_main">
                <div class="com_img">
                    <img src="../../assets/imgs/avatar.png" alt="">
                </div>
                <div class="com_msg">
                    <div class="msg_name">
                        <div class="name">王宝宝</div>
                        <div class="icon" @click="icon()"><img :src="this.image" alt=""><span>{{this.iconNum}}</span></div>
                    </div>
                    <div class="msg_main">在某些人眼里，很多西药对付症状很好，可治标不治本，事实上，这种观点是不正确的。</div>
                    <div class="msg_date">2020-04-28</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'newComments',
    data(){
        return{
            isicon:false, //点赞效果
            iconNum:28,
            image:require('../../assets/imgs/btn_fabulous_nor.png'),
            activeimage:require('../../assets/imgs/btn_fabulous_pre.png'),
            iconimage:require('../../assets/imgs/btn_fabulous_nor.png'),
        }
    },
    methods:{
        icon(){
            if(this.isicon === false){
                this.iconNum++
                this.image = this.activeimage
                this.isicon = true
            }else{
                this.iconNum--
                this.image = this.iconimage
                this.isicon = false
            }
        }
    }
}
</script>
<style lang="less" scoped>
.newComments{
    height: 100%;
    background-color: white;
    .title{
        height: 1.5rem;
        font-size:.3rem;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(76,76,76,1);
        background-color: white;
        line-height: 1.5rem;
        padding-left: .3rem;
    }
    .divder{
        width:100%;
        height:.21rem;
        background-color: rgba(160,160,160,.1);
    }
    .commentsList{
        padding: .3rem;
        .com_main{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: .01rem solid rgba(160,160,160,.3);
            padding-bottom: .3rem;
            .com_img{
                width: .7rem;
                height: .7rem;
                border-radius: 50% 50%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .com_msg{
                width: 6rem;
                font-size:.3rem;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(76,76,76,1);
                .msg_name{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-bottom: .2rem;
                    .name{
                        font-size:.3rem;
                        font-family:Microsoft YaHei;
                        font-weight:bold;
                        color:rgba(96,96,96,1);
                    }
                    .icon{
                        display: flex;
                        flex-direction: row;
                        font-size:.3rem;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(96,96,96,1);
                        img{
                            width: .3rem;
                        }
                        span{
                            margin-left: .2rem;
                        }
                    }
                }
                .msg_main{
                    margin-bottom: .2rem;
                }
            }
        }
    }
}
</style>