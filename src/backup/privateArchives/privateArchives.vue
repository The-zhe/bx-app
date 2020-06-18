<template>
  <div class="privateArchives_container">
    <div class="header_container"></div>
    <div class="banner_container">
      <div class="info">
        <div class="date">2019-11-12</div>
        <div class="meal">术后康复管理套餐</div>
        <div class="mature">（服务到期：2020.12.01）</div>
      </div>
      <div class="moreArchives">
        <img src="../../assets/imgs/btn_wdda_more.png"/>
      </div>
    </div>
    <div class="list_container">
      <div class="item" :key="item.title" @click="JumpToPage(item)" v-for="item in recordList">
        <div class="item_icon">
          <img :src="item.iconUrl"/>
        </div>
        <div class="item_text">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'privateArchives',
    data(){
        return{
          recordList:[
            {
              title:'病程记录',
              desc:'记录病情变化',
              pageName:'diseaseCourse',
              iconUrl:require('../../assets/imgs/btn_wdda_progress.png')
            },
            {
              title:'咨询记录',
              desc:'咨询记录查询',
              iconUrl:require('../../assets/imgs/btn_wdda_consult.png')
            },
            {
              title:'上门医护',
              desc:'私医专属服务',
              iconUrl:require('../../assets/imgs/btn_wdda_visit.png')
            },
              {
              title:'服务记录',
              desc:'服务记录查询',
              iconUrl:require('../../assets/imgs/btn_wdda_service.png')
            },
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
    },
    methods:{
      JumpToPage(item){
        this.$router_({name:item.pageName})
      }
    }
}
</script>

<style lang="less" scope>
.privateArchives_container{
  .header_container{
    background: url('../../assets/imgs/img_gldt_home.png') no-repeat;
    background-size: 100% 100%;
  }
  .banner_container{
    background: url('../../assets/imgs/img_wdda_home_banner.png') no-repeat;
    background-size: 100% 100%;
    height: 161px;
    width: 700px;
    margin:-100px auto 0;
    box-sizing: border-box;
    padding: 12px 0  22px 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info{
      .date{
        font-size: 26px;
        font-weight: 400;
        color: #A46823;
      }
      .meal{
        font-weight: 600;
        color: #B6631F;
        font-size: 32px;
        margin-top: 12px;

      }
      .mature{
        font-size: 22px;
        color: #A46823;
        font-weight: 400;
        margin-top: 10px;
      }
    }
    .moreArchives{
      img{
        width: 220px;
        height: 70px;
      }
    }
  }
  .list_container{
    display: flex;
    flex-wrap: wrap;
    .item{
      box-sizing: border-box;
      border: 1px solid #E5E5E5;
      margin-top: 24px;
      margin-left: 24px;
      display: flex;
      background-color: #fff;
      width: 340px;
      height: 142px;
      align-items: center;
      .item_icon{
        margin-left: 18px;
        img{
          height: 90px;
          width: 90px;
        }
      }
      .item_text{
        margin-left: 18px;
        .title{
          color: #5A5B5B;
          font-size: 30px;
          font-weight: 600;
        }
        .desc{
          color: #979696;
          font-size: 26px;
          font-weight: 400;
        }
      }
    }
  }
}
 </style>
