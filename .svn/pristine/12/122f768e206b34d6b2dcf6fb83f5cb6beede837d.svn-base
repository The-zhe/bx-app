<template>
    <div class="familyMember_container">
        <div class="member_item" v-for="item in memberList" @click="selectPatient(item)">
            <div class="select_status">
                <img :src="notSelectIcon"/>
            </div>
            <div class="patient_info">
                <div class="identity">{{item.catNm}}</div>
                <div class="bottom">
                    <div class="name">{{item.name}}</div>
                    <div class="sex">{{item.sex}}</div>
                    <div class="age">20岁</div>
                </div>
            </div>
            <div class="default" v-if="item.statCd=='1'">
                默认
            </div>
            <div class="edit" @click.stop="editMember(item)">
                <img :src="editIcon"/>
            </div>
        </div>
        <div class="add_icon" @click="addMember">
            <img :src="addIcon"/>
        </div>
    </div>
</template>

<script>
import {getFamilyMemberList} from '../../api/apiz'
export default {
name:"familyMember",
data(){
    return{
        addIcon:require('@/assets/imgs/btn_syfu_add.png'),
        editIcon:require('@/assets/imgs/btn_syfu_edit.png'),
        notSelectIcon:require('@/assets/imgs/btn_syfw_choose_nor.png'),
        hasSelectIcon:require('@/assets/imgs/btn_syfw_choose_pre.png'),
        memberList:[]
    }
},
mounted(){
    this.getFamilyMemberListFun()
},  
methods:{
    addMember(){
        this.$router_({name:'addMember'})
    },
    editMember(item){
        this.$router_({name:'editMember',query:{id:item.id}})
    },
    selectPatient(item){
         this.$router.go(-1)
        sessionStorage.setItem('patientInfo',JSON.stringify({name:item.name,id:item.id}))
    },
    getFamilyMemberListFun(){
        getFamilyMemberList().then(res=>{
            this.memberList=res.data.list
        })
    }
},

};
</script>
 
<style scoped lang="less">
.familyMember_container{
    .member_item{
        padding: 0.23rem 0.61rem 0.17rem 0.57rem;
        align-items: center;
        display: flex;
        .select_status{
            img{
                width:0.33rem;
                height:0.33rem;
            }
        }
        .patient_info{
            margin-left: 0.6rem;
            font-size: 0.3rem;
            .identity{
                color: #0F807E;
                font-weight: bold;
            }
            .bottom{
                display: flex;
                .name{
                    white-space: nowrap;
                }
                .sex{
                    margin-left: 0.49rem;
                    margin-right: 0.41rem;
                }
                .age{
                    white-space: nowrap;
                }
            }
        }
        .default{
            margin-left: 0.92rem;
            width:0.8rem;
            height:0.37rem;
            color: #40B2A0;
            font-size: 0.24rem;
            border: 0.02rem solid #40B2A0;
            border-radius: 0.16rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .edit{
            margin-left: auto;
            img{
                width: 0.44rem;
                height: 0.47rem;
            }
        }
    }
    .add_icon{
        position: absolute;
        bottom: 0;
            left: 50%;
            margin-left: -0.82rem;
            bottom: 0.14rem;
        img{

            width: 1.64rem;
            height: 1.64rem;
        }
    }
}
</style>
