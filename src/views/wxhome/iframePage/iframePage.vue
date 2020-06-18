<template>
    <div class="iframe_container">
        <div class="header_container" :style="{backgroundColor:$route.meta.headerColor?$route.meta.headerColor:'#008B84'}">
            <div class="content">
                <div class="backTo"  @click="backToPrevPage">
                    <img :src="backToImg"/>
                </div>
                <div class="title" :style="{color:$route.meta.titleColor?$route.meta.titleColor:'#ffffff'}">
                    {{$store.state.headerTitle}}
                </div>
                <div class="icon" >
                </div>
            </div>
        </div>
        <iframe id="frameObj" width="100%" height="100%" frameborder="no" :src="url"></iframe>
    </div>
</template>

<script>
import {getHealthInfoDetail} from '../../../api/apiz'
import {getaddBrowse} from "../../../api";
export default {
name:"iframePage",
data(){
    return{
        url:'',
        backToImg:require('@/assets/imgs/return_white.png'),
        isNative:false,
    }
},
methods:{
   getNativeData(){
    this.$bridge.callHandler("getData", "", (res) => {
      this.isNative=true;
      let id=res;
      getHealthInfoDetail(id).then(res => {
        this.url=res.data.data.outUrl;
      });
    });
   },
  getBack(){
    this.$bridge.callHandler("back", "", (res) => {
    });
  },
    backToPrevPage(){
      this.$router.go(-1);
      this.getBack();
      /*  if(sessionStorage.getItem('returnToList')){
            this.$router.go(-1)
        }else{
            this.$router.replace({path:'/'})
        }*/
    },
    getHealthInfoDetailFun(id) {
    getHealthInfoDetail(id, 0).then(res => {
        this.url=res.data.data.outUrl
    });
    },
},
created(){
    if(this.$route.query.id){
      let detailId = this.$route.query.id
      getaddBrowse(detailId).then((res)=>{
      })
        this.getHealthInfoDetailFun(this.$route.query.id)
        this.$store.commit('setHeaderTitle','资讯详情')
        document.title = '资讯详情'
    }else{
        this.url=this.$route.params.url
        this.$store.commit('setHeaderTitle',this.$route.params.title)
        document.title = this.$route.params.title
    }
},
  mounted() {
    this.getNativeData();
    if(this.isNative){
      this.$store.commit('setHeaderTitle','资讯详情')
      document.title = '资讯详情'
    }

  }

};
</script>

<style scoped lang="less">
.iframe_container{
    height: 100%;
    .header_container{
        height: 0.88rem;
        width: 100%;
        box-sizing: border-box;
    // padding-top: 0.6rem;
        .content{
            position: relative;
            height: 0.88rem;
            display: flex;
            align-items: center;
            justify-content: center;
            .backTo{
                position: absolute;
                left: 0.19rem;
                height: 0.29rem;
            }
            .title{
                font-size: 0.36rem;
                //color: #ffffff;
                font-weight: bold;
            }
            .icon{
                position: absolute;
                right: 0.21rem;
                height: 0.28rem;
            }
        }
    }
}
</style>
