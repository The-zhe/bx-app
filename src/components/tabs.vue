<template>
  <div class="hj_tabs">
      <div class="tabs">
          <div class="tabs_title">{{tabs[0].cate}}
              <img @click="showMore" src="../assets/imgs/icon_hygl_select.png">
          </div>
          <ul>
              <li v-show="tabShow" v-for="(item,index) in tabs" @click="changeRouter(item,index)" :key="index + item">{{item.cate}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Tabs',
    props: {
        tabs: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
            //
            tabShow: false
        }
    },
    methods: {
        changeRouter(item,index){
            console.log(item,index)
        },
        showMore(){
            console.log('sss')
            this.tabShow = !this.tabShow
        }
    }
}
</script>

<style lang="less" scoped>
    .hj_tabs{
        //width: 2.5rem;
        background-color: #ffffff;
        .tabs{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-bottom: 2px solid #eeeeee;
            padding: .3rem .2rem;
            ul{
                position: absolute;
                top: .8rem;
                left: .1rem;
                li{ 
                list-style: none;
                display: inline-block;
                font-size: .3rem;
                line-height: .3rem;
                padding: .1rem;
                }
            }
            .tabs_title{
                position: relative;
                padding-bottom: .2rem;
                border-bottom: 2px solid #eee;
                font-size: .3rem;
                img{
                    // position: absolute;
                    // right: -.4rem;
                    // top: .15rem; 
                    display: inline-block;
                    margin-left: .2rem;    
                    width: .2rem;
                    height: .2rem;
                }
            }

        }
    }
</style>