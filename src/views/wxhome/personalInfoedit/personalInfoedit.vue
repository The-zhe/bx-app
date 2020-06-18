<template>
    <div class="personalInfoedit_container">
        <van-popup v-model="showSexPicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="columns"  
                @cancel="showSexPicker = false"
                @confirm="onSexConfirm"
            />
        </van-popup>
        <van-popup v-model="showDatePicker"  position="bottom">
            <van-datetime-picker
                v-model="date"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
                @cancel="showDatePicker=false"
                @confirm="onDateConfirm"
            />
        </van-popup>
            <van-popup v-model="showPlacePicker" position="bottom">
            <van-area
            :area-list="areaList"
            @cancel="showPlacePicker=false"
            @confirm="confirmEvent"
            :columns-placeholder="['请选择', '请选择', '请选择']"
            />
        </van-popup>
        <div class="tip">
            医院办理具体服务事项，需凭本人医保卡或就诊卡，请填写您本人的医保卡和就诊卡，便于为您提供更好更快捷的服务            
        </div>
        <div class="item name">
            <div class="label">姓&emsp;&emsp;名：</div>
            <div class="val">
                <input type="text" v-model="uploadData.nickname" placeholder="请输入姓名"/>
            </div>
        </div>
        <div class="item sex" @click="showSexPicker=true">
            <div class="label">性&emsp;&emsp;别：</div>
            <div class="val" :class="{'pickerPlaceholder':uploadData.sex==''}">
                {{uploadData.sex==''?'请选择性别':uploadData.sex}}
            </div>
            <img class="downArrow" :src="downArrowIcon"/>
        </div>
        <div class="item birthday" @click="showDatePicker=true">
            <div class="label">生&emsp;&emsp;日：</div>
            <div class="val" :class="{'pickerPlaceholder':uploadData.birthday==''}">
                {{uploadData.birthday==''?'请选择生日':uploadData.birthday}}
            </div>
            <img class="downArrow" :src="downArrowIcon"/>
        </div>
        <div class="item idCard">
            <div class="label">身&ensp;份&ensp;证：</div>
            <div class="val">
                <input type="text" v-model="uploadData.card" placeholder="请输入身份证"/>
            </div>
        </div>
        <div class="item place" @click="showPlacePicker=true">
            <div class="label">所在地区：</div>
            <div class="val" :class="{'pickerPlaceholder':uploadData.provinceNm==''}">
                {{uploadData.provinceNm==''?'请选择':`${uploadData.provinceNm} ${uploadData.cityNm} ${uploadData.districtNm}`}}
            </div>
            <img class="rightArrow" :src="rightArrowIcon"/>
        </div>
        <div class="item address">
            <div class="label">详细地址：</div>
            <div class="val">
                <input type="text" v-model="uploadData.address" placeholder="详细街道、楼栋号、房间号等"/>
            </div>
        </div>
        <div class="item yBCard">
            <div class="label">医&ensp;保&ensp;卡：</div>
            <div class="val">
                <input type="text" v-model="uploadData.medicalCard" placeholder="请输入医保卡号"/>
            </div>
        </div>
        <div class="item jzCard">
            <div class="label">就&ensp;诊&ensp;卡：</div>
            <div class="val">
                <input type="text" v-model="uploadData.visitingCard" placeholder="请输入就诊卡号"/>
            </div>
        </div>
        <div class="button_container">
            <img @click="back" :src="backImg"/>
            <img @click="editUserInfoFun" :src="submitImg"/>
        </div>
    </div>
</template>

<script>
import{getUserInfo,editUserInfo} from '../../../api/apiz'
import {Toast} from 'vant'
export default {
name:"personalInfoedit",
data(){
    return{
        backImg:require('@/assets/imgs/btn_grzx_back.png'),
        submitImg:require('@/assets/imgs/btn_grzx_save.png'),
        rightArrowIcon:require('@/assets/imgs/btn_grzx_next.png'),
        downArrowIcon:require('@/assets/imgs/consult1_x.png'),
        areaList:require('@/utils/area.js').default,
        columns:['男','女'],
        showSexPicker:false,
        showDatePicker:false,
        showPlacePicker:false,
        minDate:new Date(1920,0,1),
        maxDate:new Date(2000,0,1),
        date:new Date(1990,0,1),
        uploadData:{
            nickname:'',
            sex:'',
            birthday:'',
            card:'',
            address:'',
            medicalCard:'',
            visitingCard:'',
            provinceCd:'',
            provinceNm:'',
            cityCd:'',
            cityNm:'',
            districtCd:'',
            districtNm:''
        }
    }
},
methods:{
    getUserInfoFun(){
        getUserInfo().then(res=>{
            let userInfo=res.data.data
            Object.keys(this.uploadData).forEach(item=>{
                this.uploadData[item]=userInfo[item]
            })
        })
    },
    onSexConfirm(val){
        this.uploadData.sex=val
        this.showSexPicker=false
    },
    onDateConfirm(val){
      let year = val.getFullYear()
      let month = val.getMonth()>9?val.getMonth()+1:'0'+(val.getMonth()+1)
      let day = val.getDate()>9?val.getDate():'0'+(val.getDate())
      this.uploadData.birthday=`${year}-${month}-${day}`
      this.showDatePicker=false
    },
    confirmEvent(val){
      this.uploadData.provinceCd=val[0].code
      this.uploadData.provinceNm=val[0].name
      this.uploadData.cityCd=val[1].code
      this.uploadData.cityNm=val[1].name
      this.uploadData.districtCd=val[2].code
      this.uploadData.districtNm=val[2].name
      this.showPlacePicker=false
    },
    editUserInfoFun(){
        if(this.uploadData.card.length==18||this.uploadData.card.length==15){
            editUserInfo(this.uploadData).then(res=>{
                if(res.data.code==0){
                    this.$router.go(-1)
                }
            })    
        }else{
            Toast('身份证格式不正确')
        }

    },
    back(){
        this.$router.go(-1)
    }
},
mounted(){
    this.getUserInfoFun()
}


};
</script>

<style scoped lang="less">
.personalInfoedit_container{
    .tip{
        height: 1.54rem;
        background-color: #F0EDF1;
        color: #949494;
        font-size: .28rem;
        box-sizing: border-box;
        padding: 0.2rem 0.39rem 0.24rem 0.24rem;
    }
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
        }
        .pickerPlaceholder{
            color: #ACACAC !important;
        }
        .val{
            flex: 1;
            margin-left: 0.3rem;
            color: #717071;
            input{
                width: 100%;
            }
        }
        .downArrow{
            width:0.21rem;
            height:0.19rem;
            margin-right: 0.52rem;
        }
        .rightArrow{
            width:0.18rem;
            height:0.31rem;
            margin-right: 0.53rem;
        }
    }
    .button_container{
        display: flex;
        justify-content: space-around;
        margin-top: 4rem;
        img{
            width: 3.1rem;
            height: 0.71rem;
        }
    }
}
</style>
<style>
@import url("../../../assets/less/vantstyle/picker.css");
</style>