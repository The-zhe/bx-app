<template>
  <div class="healthInfo_container">
    <div class="tab_container">
        <div class="tab_item" :class="{'active_item':index==activeTabIndex}" @click="selectTab(item,index)" :key="item.pid" v-for="(item,index) in tabList">
          <div class="tab_title">{{item.name}}</div>
          <img  src="@/assets/imgs/icon_xwzx_selected.png"/>
        </div>
    </div>
    <div class="information_list_container">
      <div
        class="info_item"
        @click="JumpToDetail(item)"
        :key="index"
        v-for="(item,index) in informationList"
      ><!-- :class="index==0?'first_item':'info_item'" -->
        <div class="info_img">
          <img :src="item.imageUrl" />
        </div>
        <div class="info_text">
          <div class="info_title">{{item.channelNm}}</div>
          <div class="info_bottom">
            <div class="info_publishTime">{{item.crtTm|fromNowTime}}</div>
            <div class="info_checkNum">
              <div class="check_icon">
                <img src="../../../assets/imgs/check_icon.png" />
              </div>
              <div class="check_text">{{item.readNum}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from "moment";
  import { getHealthInfoList,getNewsCatCdList } from '@/api/apiz';
  import { Toast } from "vant";
  export default {
    components: {},
    name: "yqinfolist",
    filters: {
      fromNowTime: function(value) {
        let array = moment(value)
          .fromNow()
          .split(" ");
        array[0] = array[0] == "a" ? "1" : array[0] == "an" ? "1" : array[0] + "";
        let EN = [
          "minute",
          "minutes",
          "hour",
          "hours",
          "day",
          "days",
          "month",
          "months",
          "year",
          "years"
        ];
        let CN = ["分钟", "小时", "天", "个月", "年"];
        array[1] = CN[parseInt(EN.indexOf(array[1]) / 2)];
        return array.length == 4
          ? "几秒前"
          : new Array(array[0], array[1]).join("") + "前";
      }
    },
    data() {
      return {
        id:'',
        informationList: [],
        info: "222",
        tabList:[],
        activeTabIndex:0,
        pageTotal:0,
        pageNum:1,
        cd:'60000.210.120',
      };
    },
    created() {
      sessionStorage.removeItem('returnToList')
      console.log('created')
    },
    computed: {},
    watch: {},
    mounted() {
      this.getNewsCatCdListFun();
      window.addEventListener('scroll',()=>{
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        //滚动条到底部的条件
        if(scrollTop+windowHeight+5>=scrollHeight){
          if(this.pageNum<this.pageTotal/10){
            console.log('555',this.pageNum,this.pageTotal/10,this.id)
            this.pageNum++;
          }
          this.getHealthInfoListFun(this.id,this.pageNum)
        }
      }),
      console.log('mounted')
      this.getNewId()
    },
    methods: {
      JumpToDetail(item) {
        console.log('type',item.type)
        item.type = 1;
        if(item.type==1){
          sessionStorage.setItem('returnToList',1)
          this.$router.push({path:'/iframePage',query:{id:item.sourceId}})
          // this.$router.push({path:'/newsDetails',query:{id:item.id}})
        }else{
          this.$router_({path: "/yqinfodetail",query:{healthInfoId:item.sourceId}});
          // document.write('12345')
        }
      },
      selectTab(item,index){
        this.informationList=[];
        this.pageNum=1;
        this.activeTabIndex=index;
        this.id=item.id;
        this.getHealthInfoListFun(item.id,1)
      },
      getHealthInfoListFun(channelId,pagenum){
        console.log('pageNu',pagenum);
        // getHealthInfoList(channelId,pagenum).then(res=>{
        //   this.informationList =res.data.list;
        //   console.log('arrrr',res,this.informationList);
        //   this.pageTotal=res.page.total;
        // })
        getHealthInfoList(channelId).then( res => {
          console.log(res.data.data.list)
          this.informationList = res.data.data.list
        })
      },
      getNewsCatCdListFun(){
        getNewsCatCdList().then(res=>{
          console.log('tablelist',res)
          this.tabList=res.data.list
          this.$nextTick(()=>{
            this.getHealthInfoListFun(this.tabList[0].id,1)
          })
        })
      },
      getNewId(){
        console.log('backid')
        this.$bridge.callHandler("backNewId","",(res) => {
          console.log('res',res)
        })
      }
    },
  };
</script>

<style lang="less" scope>
  #app {
    background-color: #fff;
  }
  .tab_container{
    padding-top: 0.2rem;
    width:auto;
    height: 0.8rem;
    font-size: 0.3rem;
    /*align-items: center;
    display: flex;
    justify-content: flex-start;*/
    color: #606060;
    white-space: nowrap;/*文本不会换行，文本会在在同一行上继续*/
    overflow-y:auto;/*可滑动*/
    .tab_item{
      margin-left: 0.3rem;
      width: auto;
      /*display: flex;
      flex-direction: column;
      align-items: center;*/
      display: inline-block;/*行内块元素*/
      .tab_title{

      }
      img{
        margin-top: 0.16rem;
        width: 0.6rem;
        height: 0.09rem;
        opacity: 0;
      }
    }
    .active_item{
      .tab_title{
        font-weight: bold;
      }
      img{
        opacity: 1;
      }
    }
  }
  .tab_container::-webkit-scrollbar{
    display: none;
  }
  .healthInfo_container {
    background-color: #ffffff;
    .information_list_container {
      .info_item {
        position: relative;
        padding: 0.18rem 0.33rem 0.23rem 0.31rem;
        display: flex;
        flex-direction: row-reverse;
        .info_img {
          margin-right: 0.1rem;
          img {
            width: 2.2rem;
            height: 1.46rem;
          }
        }
        .info_text {
          display: flex;
          padding-right: 0.4rem;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          .info_title {
            margin-left: 0.07rem;
            font-size: 0.3rem;
            color: #000000;
          }
          .info_bottom {
            margin-top: 0.24rem;
            font-size: 0.24rem;
            color: #848383;
            display: flex;
            justify-content: space-between;
            .info_publishTime {
              margin-left: 0.09rem;
            }
            .info_checkNum {
              display: flex;
              align-items: center;
              .check_icon {
                img {
                  width: 0.3rem;
                  height: 0.21rem;
                }
              }
              .check_text {
                margin-left: 0.09rem;
              }
            }
          }
        }
        &::after {
          position: absolute;
          content: "";
          height: 0.02rem;
          bottom: 0;
          width: 7rem;
          background-color: #f1f1f1;
        }
      }
      .first_item {
        position: relative;
        .info_img {
          img {
            width: 100%;
            height: 3.5rem;
          }
        }
        .info_text {
          padding: 0.29rem 0.25rem;
          .info_title {
            font-size: 0.3rem;
            color: #000000;
          }
          .info_bottom {
            margin-top: 0.24rem;
            font-size: 0.24rem;
            color: #848383;
            display: flex;
            justify-content: space-between;
            .info_publishTime {
            }
            .info_checkNum {
              display: flex;
              align-items: center;
              .check_icon {
                img {
                  width: 0.3rem;
                  height: 0.21rem;
                }
              }
              .check_text {
                margin-left: 0.09rem;
              }
            }
          }
        }
        &::after {
          position: absolute;
          left: 0.2rem;
          content: "";
          height: 0.02rem;
          bottom: 0;
          width: 7rem;
          background-color: #f1f1f1;
        }
      }
    }
  }
</style>

