<template>
  <div class="time_select">
    <!--     -->
    <div class="caret">
      <input v-model="date" :placeholder="date" />
      <span class="triangle" @click="show = !show"></span>
    </div>
    <van-calendar
      v-show="show"
      :show-title="false"
      :poppable="false"
      style="width: 5rem;height: 5rem"
      v-model="show"
      position="top"
      @confirm="commit"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</template>

<script>
export default {
  name: "timeSelect",
  data() {
    return {
      show: false,
      date: "2019-10-01",
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2010, 0, 31)
    };
  },
  methods: {
    commit(date) {
        const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const daten = date.getDate();
      console.log(year,month,daten);
        this.date = `${year}-${month}-${daten}`
        this.show = !this.show
    }
  }
};
</script>

<style lang="less" scoped>
.time_select {
  width: 3.4rem;
  padding: 0.1rem;
  position: relative;
  background-color: #fff;
  .caret {
    display: flex;
    justify-content: row;
    align-items: center;
    .triangle {
      width: 0;
      height: 0;
      border-top: 0.3rem solid black;
      border-right: 0.15rem solid transparent;
      border-bottom: 0.15rem solid transparent;
      border-left: 0.15rem solid transparent;
      border-top-color: #afafaf;
      position: absolute;
      right: 0.25rem;
      top: 0.25rem;
    }
    input {
      height: 0.6rem;
      font-size: 0.3rem;
      text-align: center;
      width: 100%;
      border-radius: 0.35rem;
      background-color: #f4f4f4;
    }
  }
  //   .van-popup {
  //     width: 5rem;
  //     position: relative;
  //     top: 2.5rem;
  //     left: 0.2rem;
  //     width: 4rem !important;
  //     height: 6rem !important;
  //   }
  .van-calendar {
    width: 3.5rem !important;
    height: 5rem !important;
    position: absolute;
    top: .8rem;
    padding-bottom: 0.2rem;
    /deep/ .van-calendar__footer{
      .van-button{
        line-height: .3rem;
      }
         .van-calendar__confirm{
                width: 3rem;
                height: .5rem;
                .van-button__text{
                    line-height: .5rem;
                }
        }
    }
  }
//   .van-calendar__footer {
//     width: 0.2rem;
//   }
}
// .van-calendar__footer {
//   width: 1rem;
//   height: 0.78rem;
// }
</style>