<template>
    <div class="gginfo">
      <div v-html="details"></div>
    </div>
</template>

<script>
  import {getgginfo} from '../../../api/index'
    export default {
        name: "gginfo",
        data(){
          return{
            details:'',
            ggid:this.$route.query.id,
          }
        },
      methods:{
         getinfo(){
           getgginfo(this.ggid).then((res)=>{
             console.log(res);
              this.details=res.data.data.notice;
           })
         }
      },
      mounted() {
          this.getinfo();
      }
    }
</script>

<style scoped lang="less">
.gginfo{

}
</style>
