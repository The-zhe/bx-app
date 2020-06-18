<template>
    <div class="addMember_container">
        <van-popup v-model="showPicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="columns"  
                @cancel="showPicker = false"
                @confirm="onConfirm"
            />
        </van-popup>
        <div class="form_container">
            <div class="form_item name">
                <div class="label">*姓&emsp;&emsp;名：</div>
                <div class="input">
                    <input type="text" v-model="name" placeholder="请输入姓名" />
                </div>
            </div>
            <div class="form_item role" @click="showPicker=true">
                <div class="label">*角&emsp;&emsp;色：</div>
                <div class="input">
                    {{catNm}}
                </div>
                <div class="arrow">
                    <img :src="arrowIcon"/>
                </div>
            </div>
            <div class="form_item idCard">
                <div class="label">*身份证号：</div>
                <div class="input">
                    <input type="text" v-model="idCard" placeholder="请输入身份证号" />
                </div>
            </div>
            <div class="form_item sex">
                <div class="label">*性&emsp;&emsp;别：</div>
                <div class="input">
                    {{sex==1?'男':sex==0?'女':'自动识别无需输入'}}
                </div>
            </div>
            <div class="form_item birthday">
                <div class="label">*出生年月：</div>
                <div class="input">
                    {{birthday}}
                </div>
            </div>
            <div class="form_item medicalNum">
                <div class="label">*医保卡号：</div>
                <div class="input">
                    <input type="text" v-model="miCard" placeholder="请输入医保卡号" />
                </div>
            </div>
            <div class="form_item contact">
                <div class="label">*联系方式：</div>
                <div class="input">
                    <input type="text" v-model="phone" placeholder="请输入联系方式" />
                </div>
            </div>
            <div class="form_item defalut">
                <div class="label">*默认就诊人</div>
                <div class="input switch">
                    <van-switch v-model="checked" active-color="#8FC1C0" size="18px" inactive-color="#CAC7C8" />
                </div>
            </div>
        </div>
        <div class="button_container">
            <!--     -->  
            <div class="save" @click="submitForm">保存</div>  
        </div>
    </div>
</template>

<script>
import {addFamilyMember,getRoleItemList} from '../../api/apiz'
export default {
name:"addMember",
data(){
    return{
        roleItemList:[],
        arrowIcon:require('@/assets/imgs/btn_yjyy_dropdown.png'),
        checked:false,
        showPicker:false,
        catNm:"请选择角色",
        catCd:"0",
        name:"",
        idCard:"",
        phone:"",
        miCard:"",
    }
},
mounted(){
    this.getRoleItemListFun()
},
methods:{
    onConfirm(val){
        this.catNm=val
        this.catCd=this.roleItemList.find(item=>{
            return item.nm==val
        }).cd
        this.showPicker=false
    },
    submitForm(){
        addFamilyMember({
            name:this.name,
            idCard:this.idCard,
            sex:this.sex+'',
            birthday:this.birthday,
            phone:this.phone,
            miCard:this.miCard,
            catCd:this.catCd,
            catNm:this.catNm,
            statCd:Number(this.checked)+''
        }).then(res=>{
            if(res.data.code==0){
                this.$router.push({name:'familyMember'})
            }
        })
    },
    getRoleItemListFun(){
        getRoleItemList().then(res=>{
            this.roleItemList=res.data.data.list
        })
    }
},
computed:{
    columns(){
        if(this.roleItemList.length){
            let array=[]
            this.roleItemList.forEach(item=>{
                array.push(item.nm)
            })
            return array
        }else{
            return []
        }
    },
    birthday(){
        if(this.idCard.length==18){
            let year = this.idCard.slice(6,10)
            let month = this.idCard.slice(10,12)
            let day = this.idCard.slice(12,14)
            return `${year}-${month}-${day}`
        }else{
            return "自动识别无需输入"
        }
    },
    sex(){
        if(this.idCard.length==18){
            return this.idCard[16]%2
        }else{
            return "自动识别无需输入"
        }
    }
}

};
</script>

<style scoped lang="less">
.addMember_container{
    .form_container{
        .form_item{
            height: 1.06rem;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding-left: 0.52rem;
            &:not(:last-child){
                border-bottom: 0.01rem solid #F4F1F4;
            }
            .label{
                font-size: 0.3rem;
                color: #777777;
                font-weight: bold;
            }
            .input{
                margin-left: 0.32rem;
                color: #999999;
                font-size: 0.28rem;
                ::placeholder{
                    color: #999999;
                }
            }
            .switch{
                margin-left: auto;
                margin-right: 0.32rem;
                margin-top: 0.1rem;   
            }
            .arrow{
                margin-left: auto;
                margin-right: 0.43rem;
                img{
                    width:0.21rem;
                    height:0.19rem;
                }
            }
        }
    }
    .button_container{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .save{
        width: 3.01rem;
        height: 0.61rem;
        background-color: #41B29E;
        color: #ffffff;
        font-size: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.32rem;
        }
    }
}
</style>
<style>
@import url("../../assets/less/vantstyle/picker.css");
</style>