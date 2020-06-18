/*
 * @Author: zzh 
 * @Date: 2019-12-26 14:32:37 
 * @Last Modified by: zzh
 * @Last Modified time: 2020-01-17 11:35:38
 */

<template>
  <div class="prescriptionDetail_container" v-if="prescriptionDetailList.length">
      <div class="detail_item" v-for="item in prescriptionDetailList">
          <div class="item_title">{{item.name}}</div>
          <div class="item_specs">
                            <div class="title">规&emsp;格：</div>
              <div class="text">{{item.spec}}</div>
          </div>
          <div class="item_dose">
              <div class="title">开药量：</div>
              <div class="text">{{`${item.mediNum}${item.unit}`}}</div>
          </div>
          <div class="item_usage">
                            <div class="title">用&emsp;法：</div>
              <div class="text">{{`${item.yongfa},${item.onePhr}${item.phrUnit},${item.mode}`}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import {getPrescriptionListDetail} from '@/api/apiz'
  export default {
    components: {},
    name: 'prescriptionDetail',
    data(){
        return{
            opcPresId:0,
            prescriptionDetailList:[         
            ]
        }
    },
    created(){

    },
    computed:{

    },
    watch:{

    },
    mounted(){
        this.opcPresId=this.$route.params.opcPresId
        this.$nextTick(()=>{
            this.getPrescriptionListDetailFunc()
        })
    },
    methods:{
    getPrescriptionListDetailFunc(){
      getPrescriptionListDetail(1).then((res)=>{
        this.prescriptionDetailList=res.data.list
      })
    }
    }
}
</script>

<style lang="less" scope>
.prescriptionDetail_container{
    background-color: #f4f4f4;
    width: 100%;
    font-size: 0.28rem;
    color: #777777;
    .detail_item{
        background-color: #fff;
        border-bottom: 0.2rem solid #f4f4f4;
        padding: 0 0.25rem;
        .item_title{
            height: 0.85rem;
            line-height: 0.85rem;
            font-weight: bold;
            box-sizing: border-box;
            border-bottom: 0.02rem solid #dadada;
            padding-left: 0.18rem;
        }
        .item_dose{
            padding-left: 0.18rem;
            display: flex;
            height: 0.86rem;
            line-height: 0.86rem;
            border-bottom: 0.02rem dashed #dadada;
        }
        .item_specs{
            display: flex;
            padding-left: 0.18rem;
            height: 0.83rem;
            line-height: 0.83rem;
            border-bottom: 0.02rem dashed #dadada;
        }
        .item_usage{
            display: flex;
            padding-left: 0.18rem;
            height: 0.88rem;
            line-height: 0.88rem
        }
    }
}
 </style>
