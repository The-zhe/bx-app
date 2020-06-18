<template>
  <div class="selectHospital_container">
    <div class="navbar_container">
      <div class="location">
        <img :src="locationIcon" />
        {{locationVal}}
      </div>
      <div class="search_container">
        <div class="input">
          <input type="text" v-model="searchInput" placeholder="搜索医院" />
        </div>
        <img :src="searchIcon" />
      </div>
    </div>
    <div class="city_list">
      <div class="city_item" :class="{'active_item':item==locationVal.slice(0,2)}" :key="item" v-for="item in cityList">{{item}}</div>
    </div>
    <div class="hospital_list">
      <div class="hospital_item" @click="selectHospital(item)" v-for="item in hospitalList">
        <img :src="item.picUrl" />
        <div class="item_text">
          <div class="name">{{item.name}}</div>
          <div class="level">{{item.catNm}}</div>
          <div class="place">{{item.address}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHospitalList } from "../../api/apiz";
import {Toast} from 'vant';
export default {
  components: {},
  name: "selectHospital",
  data() {
    return {
      locationVal: "",
      area: require("@/utils/area.js").default,
      locationIcon: require("@/assets/imgs/icon_bjjy_xzyy_add.png"),
      searchIcon: require("@/assets/imgs/icon_bjjy_xzyy_search.png"),
      searchInput: "",
      cityList: ["宁波", "上海", "杭州", "北京", "更多 >"],
      hospitalList: []
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {
    this.getCurrentCityName();
  },
  methods: {
    getCurrentCityName() {
      let myCity = new BMap.LocalCity();
      myCity.get(result => {
        this.locationVal = result.name;
        let cityId = Object.keys(this.area.city_list).find(item => {
          return this.area.city_list[item] == result.name;
        });
        this.getHospitalListFun(cityId);
      });
    },
    getHospitalListFun(cityId) {
      getHospitalList(cityId).then(res => {
        if (res.code == 0) {
          this.hospitalList = res.data.list;
        }else{
          Toast({
            message: "当前城市暂无服务医院",
            icon: "warning-o"
          });
        }
      });
    },
    selectHospital(item) {
      this.$router.go(-1);
      sessionStorage.setItem(
        "hospitalInfo",
        JSON.stringify({ hospitalName: item.name, hospitalId: item.id })
      );
    }
  }
};
</script>

<style lang="less" scope>
.selectHospital_container {
  .navbar_container {
    height: 1.1rem;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.25rem;
    .location {
      display: flex;
      font-size: 0.3rem;
      color: #777777;
      img {
        margin-right: 0.17rem;
        height: 0.41rem;
        width: 0.27rem;
      }
    }
    .search_container {
      margin-left: 0.15rem;
      width: 5.5rem;
      height: 0.6rem;
      background-color: #f3f3f4;
      color: #bcbcbc;
      font-size: 0.28rem;
      position: relative;
      border-radius: 0.3rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.31rem 0 0.33rem;
      .input {
        input {
          background-color: #f3f3f4;
        }
      }
      img {
        margin-left: auto;
        width: 0.34rem;
        height: 0.34rem;
      }
    }
  }
  .city_list {
    background-color: #f4f4f4;
    height: 0.9rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .city_item {
      margin-left: 0.08rem;
      width: 1.4rem;
      height: 0.7rem;
      background-color: #e6e6e6;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .active_item{
      color: #ffffff;
      font-weight: bold;
      background-color:#41B2A0; 
    }
  }
  .hospital_list {
    padding: 0 0.25rem;
    .hospital_item {
      display: flex;
      box-sizing: border-box;
      padding: 0.35rem 0 0.35rem 0.05rem;
      height: 2rem;
      border-bottom: 0.02rem solid #e3e3e3;
      img {
        width: 1.3rem;
        height: 1.3rem;
      }
      .item_text {
        margin-left: 0.35rem;
        font-size: 0.26rem;
        color: #777777;
        .name {
          font-size: 0.3rem;
        }
        .level {
          color: #c99167;
          margin-top: 0.07rem;
          margin-bottom: 0.08rem;
        }
      }
    }
  }
}
</style>
<style>
@import url("../../assets/less/vantstyle/toast.css");
</style>