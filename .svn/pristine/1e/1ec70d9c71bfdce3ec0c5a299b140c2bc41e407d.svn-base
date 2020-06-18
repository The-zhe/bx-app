<template>
    <div class="doctorInfoedit_container">
        <van-popup v-model="showRankPicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="Rankcolumns"  
                @cancel="showRankPicker = false"
                @confirm="onRankConfirm"
            />
        </van-popup>
        <div class="form_item avatar">
            <div class="label">头像</div>
            <img class="avatarImg" :src="uploadData.imgUrl" />
            <img :src="rightArrow"  class="rightArrow"/>
        </div>
        <div class="form_item name">
            <div class="label">姓名：</div>
            <div class="val">
                <input type="text" v-model="uploadData.name" placeholder="请输入姓名" />
            </div>
        </div>
        <div class="form_item idCard">
            <div class="label">身份证：</div>
            <div class="val">
                <input type="text" v-model="uploadData.idCard" placeholder="请输入身份证" />
            </div>
        </div>
        <div class="form_item rank" @click="showRankPicker=true">
            <div class="label">职称：</div>
            <div class="val">
                {{uploadData.titleNm}}
            </div>
            <img :src="downArrow" class="downArrow"/>
        </div>
        <div class="form_item hospital">
            <div class="label">医院：</div>
            <div class="val">
                <input type="text" @input="hospitalChange"  v-model.trim="uploadData.hospitalName" placeholder="请输入您的医院"/>
                <div class="hospital_list" v-if="listShow">
                    <div class="list">
                        <div class="item" @click="selectHospitalItem(item)" v-for="item in hospitalItemList" >{{item.name}}</div>
                    </div>
                    <div class="cancel" @click="cancelList">
                        关闭
                    </div>
                </div>
            </div>
        </div>
        <div class="form_item department" @click="selectDepartment">
            <div class="label">科室：</div>
            <div class="val">
                {{uploadData.secondDepNm}}
            </div>
            <img :src="downArrow" class="downArrow"/>
        </div>
        <div class="form_item experienceNum">
            <div class="label">执业证书编号：</div>
            <div class="val">
                <input type="text" v-model="uploadData.certNo" placeholder="请输入执业证书编号" />
            </div>
        </div>
<!--         <div class="form_item experienceImg">
            <div class="label">执业证书照片</div>
            <div class="val"></div>
        </div>
        <div class="form_item cardImg">
            <div class="label">身份证照片</div>
            <div class="val"></div>
        </div> -->
        <div class="form_item phone">
            <div class="label">手机号：</div>
            <div class="val">
                <input type="text" v-model="uploadData.phone" placeholder="请输入手机号" />
            </div>
        </div>
        <div class="form_item skills">
            <div class="label">专业擅长：</div>
            <div class="val">
                <textarea  v-model="uploadData.skills" placeholder="请输入专业擅长"/>
            </div>
        </div>
        <div class="form_item experience_place">
            <div class="label">执业地点：</div>
            <div class="val">
                <textarea  v-model="uploadData.address" placeholder="请输入执业地点"/>
            </div>
        </div>
        <div class="form_item experience">
            <div class="label">执业经历：</div>
            <div class="val">
                <textarea  v-model="uploadData.experience" placeholder="请输入执业经历"/>
            </div>
        </div>
        <div class="button_container">
            <img :src="backImg" @click="backToInfo" class="backImg"/>
            <img :src="submitImg" @click="editDoctorInfoFun" class="submitImg"/>
        </div>
    </div>
</template>

<script>
import {getDoctorInfo,getRankItemList,getCertifiHospitalList,editDoctorInfo} from '../../../../api/apiz'
export default {
name:"doctorInfoedit",
data(){
    return{
        backImg:require('@/assets/imgs/btn_grxx_back.png'),
        submitImg:require('@/assets/imgs/btn_grxx_done.png'),
        rightArrow:require('@/assets/imgs/btn_grzx_next.png'),
        downArrow:require('@/assets/imgs/consult1_x.png'),
        rankItemList:[],
        hospitalItemList:[],
        listShow:false,
        showRankPicker:false,
        uploadData:{
            imgUrl:'',
            name:'',
            idCard:'',
            titleCd:'',
            titleNm:'',
            hospitalName:'',
            hospitalId:0,
            departmentName:'',
            departmentId:'',
            secondDepNm:'',
            secondDepId:'',
            certNo:'',
            phone:'',
            skills:'',
            experience:'',
            address:'',
            id:0
            }
    }
},
computed:{
    Rankcolumns(){
        if(this.rankItemList.length){
            let array=[]
            this.rankItemList.forEach(item=>{
                array.push(item.nm)
            })
            return array
        }else{
            return []
        }
    },
},
methods:{
    editDoctorInfoFun(){
        editDoctorInfo(this.uploadData).then((res)=>{
            if(res.data.code==0){
                this.$router.replace({name:'doctorPersonalInfo'})
                sessionStorage.removeItem('uploadData')
                sessionStorage.removeItem('departmentInfo')
            }
        })
    },
    getDoctorInfoFun(){
        getDoctorInfo().then(res=>{
            let doctorInfo=res.data.data
            Object.keys(this.uploadData).forEach(item=>{
                this.uploadData[item]=doctorInfo[item]
            })
        })
    },
    getRankItemListFun(){
        getRankItemList().then((res)=>{
            this.rankItemList=res.data.data.list
        })
    },
    onRankConfirm(val){
        this.uploadData.titleNm=val
        this.titleCd=this.rankItemList.find(item=>{
            return item.nm==val
        }).cd
        this.showRankPicker=false
    },
    selectDepartment(){
        sessionStorage.setItem('uploadData',JSON.stringify(this.uploadData))
        this.$router_({name:'selectDepartment'})
    },
    hospitalChange(){
      if(this.uploadData.hospitalName.trim()!==''){
          this.getCertifiHospitalListFun(this.uploadData.hospitalName)
      }else{
          this.listShow=false
          this.hospitalItemList=[]
      }
    },
    selectHospitalItem(item){
        this.uploadData.hospitalName=item.name
        this.uploadData.hospitalId=item.id
        this.listShow=false
    },
    cancelList(){
        this.listShow=false
    },
    getCertifiHospitalListFun(name){
        getCertifiHospitalList(name).then((res)=>{
            if(res.data.list.length>0){
                this.hospitalItemList=res.data.list
                this.listShow=true
            }else{
                this.listShow=false
            }
            
        })
    },
    backToInfo(){
        this.$router.replace({name:'doctorPersonalInfo'})
        sessionStorage.removeItem('uploadData')
        sessionStorage.removeItem('departmentInfo')
    }
},
mounted(){
    if(sessionStorage.getItem('uploadData')){
        this.uploadData=JSON.parse(sessionStorage.getItem('uploadData'))
        if(sessionStorage.getItem('departmentInfo')){
            let departmentInfo = JSON.parse(sessionStorage.getItem('departmentInfo'))
            this.uploadData.departmentName=departmentInfo.departmentName
            this.uploadData.departmentId=departmentInfo.departmentId
            this.uploadData.secondDepNm=departmentInfo.secondDepNm,
            this.uploadData.secondDepId=departmentInfo.secondDepId
        }
    }else{
        this.getDoctorInfoFun()
    }
    this.getRankItemListFun()
    
}

};
</script>

<style scoped lang="less">
.doctorInfoedit_container{
.form_item{
        height: 0.98rem;
        display: flex;
        align-items: center;
        border-bottom: 0.03rem solid #F4F1F4;
        font-size: 0.3rem;
         padding:0 0.5rem;

        .label{
            font-weight: bold;
            color: #777777;
        }
        .val{
            position: relative;
            margin-left: auto;
            color: #717071;
            input{
                text-align: right;
            }
            textarea{
                width: 100%;
            }
                .hospital_list{
                    border: 1px solid #bebdbf;
                    z-index: 1000;
                    background-color: #ffffff;
                    position: absolute;
                    top: 0.6rem;
                    left: 0;
                    border-radius: 0.12rem;
                    width: 100%;
                    font-size: 0.3rem;
                    .list{
                        max-height: 3.5rem;
                        overflow: scroll;
                        width: 100%;
                        .item{
                            width: 100%;
                            height: 0.7rem;
                            line-height: 0.7rem;
                            box-sizing: border-box;
                            padding-left: 0.15rem;
                            border-bottom: 0.01rem solid #bebdbf;
                        }
                    }
                    .cancel{
                        height: 0.6rem;
                        color: #6AAcf7;
                        line-height: 0.6rem;
                        text-align: right;
                        padding-right: 0.3rem;
                        box-sizing: border-box;
                    }
                }
        }
        .avatarImg{
            margin-right: .45rem;
            height: 1rem;
            width: 1rem;
        }
        .rightArrow{
            width: 0.18rem;
            height: .31rem;
        }
        .downArrow{
            margin-left: 0.74rem;
            width: 0.21rem;
            height: 0.19rem;
        }
    }
        .avatar{
            height: 1.72rem;
            justify-content: flex-end;
            .label{
                margin-right: auto;
            }
        }
        .experienceImg{
            height: 2.47rem;
        }
        .cardImg{
            height: 1.85rem;
        }
        .skills{
            height: 1.33rem;
            .val{
                flex: 1;
            }
        }
        .experience_place{
            height: 1.3rem;
            .val{
                flex: 1;
            }
        }
        .experience{
            height: 1.3rem;
            .val{
                flex: 1;
            }
        }
    .button_container{
        margin: 1.11rem 0;
        display: flex;
        justify-content: center;
        .backImg{
            width: 3.1rem;
            height: 0.71rem;
        }
        .submitImg{
            margin-left: .39rem;
            width: 3.07rem;
            height: 0.71rem;
        }
    }
}
</style>