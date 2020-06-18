<template>
    <div class="personalInfo_container">
        <div class="item name">
            <div class="label">姓&emsp;名：</div>
            <div class="val">{{userInfo.nickname}}</div>
        </div>
        <div class="item sex">
            <div class="label">性&emsp;别：</div>
            <div class="val">{{userInfo.sex}}</div>
        </div>
        <div class="item birthday">
            <div class="label">生&emsp;日：</div>
            <div class="val">{{userInfo.birthday}}</div>
        </div>
        <div class="item idCard">
            <div class="label">身份证：</div>
            <div class="val">{{userInfo.card}}</div>
        </div>
        <div class="item place">
            <div class="label">住&emsp;址：</div>
            <div class="val" v-if="Object.keys(userInfo).length>0">{{`${userInfo.provinceNm}${userInfo.cityNm}${userInfo.districtNm}${userInfo.address}`}}</div>
        </div>
        <div class="item yBCard">
            <div class="label">医保卡：</div>
            <div class="val">{{userInfo.medicalCard}}</div>
        </div>
        <div class="item jzCard">
            <div class="label">就诊卡：</div>
            <div class="val">{{userInfo.visitingCard}}</div>
        </div>
        <img class="editButton" @click="jumpToEditPage" :src="editImg"/>
    </div>
</template>

<script>
import{getUserInfo} from '../../../api/apiz'
export default {
name:"personalInfo",
data(){
    return{
        editImg:require('@/assets/imgs/btn_grzx_modifies.png'),
        userInfo:{}
    }
},
methods:{
    getUserInfoFun(){
        getUserInfo().then(res=>{
            this.userInfo=res.data.data
        })
    },
    jumpToEditPage(){
        this.$router_({name:'personalInfoedit',params:{id:this.userInfo.id}})
    }
},
mounted(){
    this.getUserInfoFun()
}

};
</script>

<style scoped lang="less">
.personalInfo_container{
    .item{
        height: 0.88rem;
        display: flex;
        font-size: 0.3rem;
        border-bottom: 0.01rem solid #F4F1F4;
        padding-left: 0.51rem;
        align-items: center;    
        .label{
            color: #777777;
            font-weight: bold;
            letter-spacing: 0.05rem;
        }
        .val{
            margin-left: 0.3rem;
            color: #717071
        }
    }
    .editButton{
        width: 3.09rem;
        height: 0.71rem;
        margin: 4rem auto 0;
    }
}
</style>
