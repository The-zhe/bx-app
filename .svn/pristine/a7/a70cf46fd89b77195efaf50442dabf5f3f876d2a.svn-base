<template>
  <div class="doorsCare_container">
    <div class="search_container">
      <div class="input">
        <input type="text" placeholder="点击搜索" v-model="searchVal" />
      </div>
      <div class="icon">
        <img :src="searchIcon" />
      </div>
    </div>
    <div class="list_container">
      <div class="door_item" @click="JumpToDetail(item)" v-for="item in list">
        <div class="top">
          <div class="icon">
            <img :src="IconList[item.catCd]" />
          </div>
          <div class="name">{{item.name}}</div>
          <div class="finishStatus" :style="{backgroundImage:item.finishStatus?'url('+hasFinishIcon+')':'url('+notFinishIcon+')'}" >
            {{item.finishStatus?'已完成':'未完成'}}
          </div>
        </div>
        <div class="item checkItem" v-if="item.catCd==1">
          <div class="label">检查项目：</div>
          <div class="val">{{item.checkItem}}</div>
        </div>
        <div class="item doorPeople">
          <div class="label">医护人员：</div>
          <div class="val">医生{{item.doctorName}} 护士{{item.nurseName}}</div>
        </div>
        <div class="item orderTime">
          <div class="label">订单时间：</div>
          <div class="val">{{item.orderTime}}</div>
        </div>
        <div class="item doorTime">
          <div class="label">上门时间：</div>
          <div class="val">{{item.doorTime}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "doorsCare",
  data() {
    return {
      hasFinishIcon: require("@/assets/imgs/tab_syda_label_nor.png"),
      notFinishIcon: require("@/assets/imgs/tab_syda_label_pre.png"),
      searchIcon: require("@/assets/imgs/btn_syda_search.png"),
      searchVal: "",
      IconList: [
        require("@/assets/imgs/icon_syda_inject.png"),
        require("@/assets/imgs/icon_syda_inspect.png")
      ],
      list: [
        {
          name: "上门注射",
          catCd: 0,
          doctorName: "李英",
          nurseName: "李立波",
          orderTime: "2019-11-07 14:30",
          doorTime: "2019-11-08 14:30",
          finishStatus: 1
        },
        {
          name: "上门检查",
          catCd: 1,
          checkItem: "心电图",
          doctorName: "李英",
          nurseName: "李立波",
          orderTime: "2019-11-07 14:30",
          doorTime: "2019-11-08 14:30",
          finishStatus: 0
        }
      ]
    };
  },
  methods: {
      JumpToDetail(item){
          this.$router_({name:'doorscareDetail'})
      }
  }
};
</script>

<style scoped lang="less">
.doorsCare_container {
  .search_container {
    width: 7.03rem;
    height: 0.62rem;
    margin: 0.3rem auto 0;
    border: 0.02rem solid #258180;
    border-radius: 0.16rem;
    background-color: #ffffff;
    font-size: 0.28rem;
    box-sizing: border-box;
    padding: 0.08rem 0 0 0.29rem;
    position: relative;
    .input {
        
    }
    .icon {
      position: absolute;
      top: 0.1rem;
      right: 0.27rem;
      img {
        width: 0.34rem;
        height: 0.35rem;
      }
    }
  }
  .list_container {
    .door_item {
        padding: 0 0.2rem;
        box-sizing: border-box;
      border-radius: 0.16rem;
      box-shadow: 0 0 0.06rem #a9a9a9;
      margin: 0.3rem auto 0;
      background-color: #ffffff;
      width: 7.01rem;
      font-size: 0.28rem;
      color: #777777;
      .top {
          border-bottom: 0.01rem solid #d8d5d9;
        height: 0.78rem;
        align-items: center;
        display: flex;
        .icon {
            img {
                width: 0.33rem;
            height: 0.33rem;
          }
        }
        .name {
            margin-left: 0.15rem;
            }
        .finishStatus {
            margin-left: auto;
            margin-right: -0.2rem;
            font-size: 0.24rem;
            box-sizing: border-box;
            display: flex;
            padding-top: 0.02rem;
            padding-left: 0.2rem;
            color: #ffffff;
            width: 0.99rem;
            height: 0.38rem;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            }
      }
      .item{
          align-items: center;
          display: flex;
          height: 0.78rem;
          &:not(:last-child){
              border-bottom: 0.01rem dashed #D8D5D8;
          }
      }
    }
  }
}
</style>
