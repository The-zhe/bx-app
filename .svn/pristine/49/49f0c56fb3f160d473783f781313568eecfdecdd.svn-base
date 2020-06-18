<template>
  <div class="privateArchives_container">
    <div class="headerPart_container">
      <div class="list_container">
        <div
          class="list_item"
          @click="JumpToPage(item,index)"
          :class="{'active_item':currentPageIndex==index}"
          v-for="(item,index) in recordList"
        >{{item.title}}</div>
      </div>
    </div>
    <div class="view_container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "privateArchives",
  data() {
    return {
      currentPageIndex: 0,
      recordList: [
        {
          title: "病程记录",
          pageName: "diseaseCourse"
        },
        {
          title: "咨询记录",
          pageName: "consultRecord"
        },
        {
          title: "上门医护",
          pageName:"doorsCare"
        },
        {
          title: "服务记录"
        }
      ]
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {
    this.$store.commit("setHeaderTitle", "私医记录");
  },
  methods: {
    JumpToPage(item, index) {
      this.currentPageIndex = index;
      this.$router.replace({ name: item.pageName });
    },
    stateTimeChange(val) {
      this.startTime = val;
    },

    endTimeChange(val) {
      this.endTime = val;
    }
  }
};
</script>

<style lang="less" scope>
.privateArchives_container {
  background-color: #f4f4f4;
  .headerPart_container {
    height: 0.86rem;
    background-color: #008b84;
    .list_container {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0.26rem 0;
      .list_item {
        padding-bottom: 0.05rem;
        width: 1.31rem;
        text-align: center;
        white-space: nowrap;
        font-size: 0.28rem;
        color: #fff;
        font-weight: 400;
      }
      .active_item {
        font-weight: bold;
        font-size: 0.3rem;
        border-bottom: 0.07rem solid #ffffff;
      }
    }
  }
}
</style>
