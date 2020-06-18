<template>
    <div class="doctorList_container">
        <div class="doctor_item" @click="selectDoctor(item)" v-for="item in doctorList">
            <div class="avatar">
                <img :src="item.imgUrl"/>
                <div class="label" v-if="item.statCd==='1'">私人医生</div>
            </div> 
            <div class="info">
                <div class="top">
                    <div class="name">{{item.name}}</div>
                    <div class="rank">{{item.workDoctor}}</div>
                </div>
                <div class="department">{{item.departmentName}}</div>
                <div class="hospital">{{item.address}}</div>
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
name:"doctorList",
data(){
    return{
        notSelectIcon:require('@/assets/imgs/btn_syfw_choose_nor.png'),
        hasSelectIcon:require('@/assets/imgs/btn_syfw_choose_pre.png'),
        doctorList:[]
    }
},
mounted(){
    this.getDoctorList()
},
methods:{
    selectDoctor(item){
        sessionStorage.setItem('doctorInfo',JSON.stringify({doctorName:item.name,doctorId:item.id}))
        this.$router.go(-1)
    },
    getDoctorList(){
        getRoleList('0').then((res)=>{
            this.doctorList=res.data.data.list
        })
    }
},


};
</script>

<style scoped lang="less">
.doctorList_container{
        .doctor_item{
        border-bottom: 0.01rem solid #F1EFF2;
        display: flex;
        align-items: center;
        height: 1.76rem;
        .avatar{
            position: relative;
            margin-left: 0.55rem;
            img{
                width: 1.18rem;
                height: 1.18rem;
            }
            .label{
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.2rem;
                position: absolute;
                bottom: -0.1rem;
                left: -0.05rem;
                width: 1.31rem;
                height: 0.44rem;
                background: url("../../assets/imgs/advice2.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        .info{
            margin-left: 0.84rem;
            .top{
                display: flex;
                align-items: center;
                            .name{  
                color: #0F807E;
                font-size: 0.3rem;
            }
            .rank{
                margin-left: 0.37rem;
                color: #F2A140;
                font-size: 0.2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 1.05rem;
                height: 0.29rem;
                background: url('../../assets/imgs/tab_syfw_doctor.png') no-repeat;
                background-size: 100% 100%;
            }
            }
                .department{
                    font-size: 0.28rem;
                    margin-bottom: 0.1rem;
                margin-top: 0.1rem;
            }
            .hospital{
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
        left: 50%;
        margin-left: -2.52rem;
        position: absolute;
        bottom: 0.32rem;
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
