<template>
    <div class="lbinfodetail">
      <div v-html="details"></div>
    </div>
</template>

<script>
  import {getlbinfo} from '../../../api/index'
    export default {
        name: "lbinfodetail",
        data(){
          return{
            lbid:this.$route.query.id,
            details:''
          }
        },
      methods:{
          getinfo(){
            getlbinfo(this.lbid).then((res)=>{
              this.details=res.data.data.details;
              console.log(res.data.data);
            });
          }
      },
      mounted() {
          this.getinfo();
      }
    }
</script>

<style scoped lang="less">
.lbinfodetail{

}
</style>
