<template>
  <div id="app" :style="{backgroundColor:$route.meta.background?'#ffffff':'#f4f4f4'}">
    <header-bar @showSearchEvent="showSearch"></header-bar>
      <router-view ref="view"></router-view>
  </div>
</template>

<script>
import HeaderBar from "./components/header";
import {getdoctorstate} from "./api";
export default {
  components: { HeaderBar },
  name: "App",
  data() {
    return {
      login: this.$store.state.token,
      menuShow:false,
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {
    /* this.menuShow=!this.menuShow */
    if(webpackJsonp){
      this.getnativeToken();
      sessionStorage.setItem("routerFlag", 0);
      document.body.addEventListener('focusout', () => {
        window.scrollTo({ bottom: 0, left: 0, behavior: 'smooth' })
      })
    }else{
      location.reload()
    }
  },
  methods: {
    showSearch() {
      this.$refs["view"].showSearchPopup();
    },
    getnativeToken(){
      this.$bridge.callHandler("getToken", "", (res) => {
        sessionStorage.setItem('_token',res);
      });
    },
    leftEvent(){
      console.log('left')
    },
    rightEvent(){
      console.log('right')
    }
  },
  beforeDestroy(){
    if(localStorage.getItem('doctorId')!=null){
      //调接口 让医生离线
      let id=Number(localStorage.getItem('doctorId'));
      getdoctorstate(id).then((res)=>{
      })
    }
  },
  destroyed() {
    sessionStorage.removeItem("routerFlag");
  }
};
</script>
<style lang="less">
#app{
}
</style>
