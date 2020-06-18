/*
 * @Author: zzh 
 * @Date: 2020-4-28 9:09:40 
 * @Last Modified by: hjl
 * @Last Modified time: 2020-4-28 9:09:40
 */
// 会员信息
<template>
  <div class="member_info_card">
    <div class="member_info_top">
      <div class="member_info_box">
        <!-- 会员头像 -->
        <span class="avator">
          <img src="../assets/imgs/nurse1_x.png" />
        </span>
        <!-- 会员信息 -->
        <div class="member_info member">
          <span>程亚明 优医会员</span>
          <span>男 26岁 浙江 温州</span>
        </div>
      </div>
      <div class="member_control member">
        <van-switch size=".4rem" v-model="checked" />
        <span style="font-size: .3rem">重点关注</span>
      </div>
    </div>
    <div class="member_info_bottom">
      <span>最近一次服务：03-02 17:23</span>
      <span>到期：2020-12-01</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "memberInfo",
  data() {
    return {
      checked: false //默认不是重点关注
    };
  }
};
</script>
<style lang="less" scoped>
.member_info_card {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    margin: .1rem;
  .member_info_top {
    display: flex;
    justify-content: space-between;
    font-size: 0.32rem;
      padding: .2rem;
    .member_info_box {
      display: flex;
      flex-direction: row;
      align-items: center;
      .avator {
        margin-right: 0.3rem;
        img {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }
    .member_control {
        .van-switch {
          margin-top: 0.1rem;
          margin-bottom: 0.1rem;
          position: relative;
          left: .33rem;
        }
        .van-switch--on{
            background: #00AB9E;
        }
    }
    .member {
      display: flex;
      flex-direction: column;
      padding: 0.1rem;
      span {
        margin-top: 0.1rem;
        .van-switch {
          margin-top: 0.1rem;
          margin-bottom: 0.1rem;
        }
      }
    }
  }
  .member_info_bottom {
    font-size: .32rem;
    color: #8E8E8E;
    display: flex;
    justify-content: space-between;
    padding: .2rem;
  }
}
</style>