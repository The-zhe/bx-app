<template> 
<!-- 选择理疗师页面 -->
    <div class="therapistList_container">
        <div class="therapist_item" @click="selectTherapist(item)" v-for="item in therapistList" >
            <div class="avatar">
                <img src="@/assets/imgs/avatar.png"/>
            </div>
            <div class="info">
                <div class="name">{{item.name}}</div>
                <div class="rank">{{item.level}}</div>
            </div>
            <div class="status">
                <img :src="notSelectIcon"/>
            </div>
        </div>
        <div class="tip_container">
            <div class="line"></div>
            <div class="text">
                <div class="top">倍熙私医</div>
                <div class="bottom">健康触手可得</div>
            </div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
import {getRoleList} from '../../api/apiz';
export default {
name:"therapistList",
data(){
    return{
        notSelectIcon:require('@/assets/imgs/btn_syfw_choose_nor.png'),
        hasSelectIcon:require('@/assets/imgs/btn_syfw_choose_pre.png'),
        therapistList:[],
    }
},
mounted(){
    this.getRoleListFun()
},
methods:{
    /* 选择理疗师 */
    selectTherapist(item){
        this.$router.go(-1)
        sessionStorage.setItem('therapistInfo',JSON.stringify({therapistName:item.name,therapistId:item.id}))        
    },
    getRoleListFun(){
        getRoleList(3).then(res=>{
            this.therapistList=res.data.data.list
        })
    }
},


};
</script>

<style scoped lang="less">
.therapistList_container{
    .therapist_item{
        border-bottom: 0.01rem solid #F1EFF2;
        display: flex;
        align-items: center;
        height: 1.76rem;
        .avatar{
            margin-left: 0.55rem;
            img{
                width: 1.18rem;
                height: 1.18rem;
            }
        }
        .info{
            margin-left: 0.84rem;
            .name{
                color: #0F807E;
                font-size: 0.3rem;
            }
            .rank{
                margin-top: 0.2rem;
                color: #777777;
                font-size: 0.28rem;
            }
        }
        .status{
            margin-left: auto;  
            margin-right: 0.5rem;
            img{
                width:0.39rem;
height:0.38rem;
            }
        }
    }
    .tip_container{
        margin: 0.5rem auto;
        justify-content: center;
        display: flex;
        align-items: center;
        width: 5.03rem;
        .line{
            width: 1.3rem;
            height:0.02rem;
            background-color: #96B6B6;
        }
        .text{
            margin: 0 0.3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #0F807E;
            font-size: 0.28rem;
            .top{

            }
            .bottom{

            }
        }
    }
}
</style>
