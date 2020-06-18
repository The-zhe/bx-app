// 2020/1/9 created by xtt
<template>
    <div class="adjustMedical">
      <div class="p_adjust">
        <div class="p_adjust_top">
            <div class="p_info_top_left">
              <div class="p_info_top_left_bold">最近用药</div>
              <div class="p_info_top_left_small">刘成刚  主任医师 2019/09/07 18:00</div>
            </div>
          <div class="a_gt" @click="toStop"><img src="../../../assets/imgs/pharmacy5.png"></div>
          <div class="a_gt"><img src="../../../assets/imgs/pharmacy4.png"></div>
    </div>
        <div class="p_content">
          <div class="p_content_div">药品名称： 头孢丙烯分散片</div>
          <div class="p_content_div">药品规格： 0.25g*10s</div>
          <div class="p_content_div1">用&emsp;&emsp;法：  一日二次，0.5g，口服</div>
        </div>
      </div>
      <van-dialog
        v-model="stopShow"
        :show-confirm-button="false"
      >
        <div class="p_stop">是否停药？</div>
        <div class="p_stop_btn">
          <img src="../../../assets/imgs/pharmacy6.png" @click="toCancel">
          <img src="../../../assets/imgs/pharmacy7.png" @click="StopMedical">
        </div>
      </van-dialog>
      <van-dialog
        v-model="addShow"
        :show-confirm-button="false"
      >
        <div class="p_add_title">新增药品</div> <div class="p_add_x" @click="toExit"><img src="../../../assets/imgs/management_x.png"></div>
        <div class="p_add_input">
          <div class="p_add_input_name">药品名称：</div>
          <div class="p_add_input_div"> <input/></div>
        </div>
        <div class="p_add_input">
          <div class="p_add_input_name">药品规格：</div>
          <div class="p_add_input_div"> <input/></div>
        </div>
        <div class="p_add_input">
          <div class="p_add_input_name">用&emsp;&emsp;法：</div>
          <div class="p_add_input_div1"> <input/> <div class="p_add_input_div_triangle"></div></div>
        </div>
        <div class="p_add_input">
          <div class="p_add_input_name">用&emsp;&emsp;量:</div>
          <div class="p_add_input_div2"><input class="p_add_input_div2_inp1"/>单位：<input class="p_add_input_div2_inp2"/><div class="p_add_input_div_triangle"></div></div>
        </div>
        <div class="p_add_input">
          <div class="p_add_input_name">给药方式：</div>
          <div class="p_add_input_div1"> <input/> <div class="p_add_input_div_triangle"></div></div>
        </div>
        <div class="p_add_btn">
          <img src="../../../assets/imgs/pharmacy8.png" @click="toCancel">
        </div>
      </van-dialog>

      <div class="p_adjust">
        <div class="p_adjust_top">
          <div class="p_info_top_left">
            <div class="p_info_top_left_bold">最近用药</div>
            <div class="p_info_top_left_small">刘成刚  主任医师 2019/09/07 18:00</div>
          </div>
          <div class="a_gt" @click="toStop"><img src="../../../assets/imgs/pharmacy5.png"></div>
          <div class="a_gt"><img src="../../../assets/imgs/pharmacy4.png"></div>
        </div>
        <div class="p_content">
          <div class="p_content_div">药品名称： 头孢丙烯分散片</div>
          <div class="p_content_div">药品规格： 0.25g*10s</div>
          <div class="p_content_div1">用&emsp;&emsp;法：  一日二次，0.5g，口服</div>
        </div>
      </div>

      <div class="p_btn" @click="toAdd">
        新增
      </div>
    </div>
</template>

<script>
  import {toStopMedical} from '../../../api/index'
  import moment from "moment"
    export default {
        name: "adjustMedical",
      data(){
        return {
          addShow:false,
          stopShow:false,
          timeshow:false,
          exitshow:false,
          adviceindex:0,
          show: false,
          rtime: moment().format('YYYY-MM-DD HH:mm'),
        }
      },
      methods:{
        //点击显示新增
        toAdd(){
          this.addShow=true;
        },
        //点击显示是否停药
        toStop(){
          this.stopShow=true;
        },
        //停药
        StopMedical(){
          toStopMedical(id).then(res=>{

          })
        },
        toCancel(){
          this.stopShow=false
          console.log('cancel');
        },
        confirmStop(){
          console.log('stop')
        },
        changeshow(){
          this.show=true;
        },
        toselect(){
          console.log("aaa")
          this.adviceindex=1;
          this.exitshow=true;
        },
        toExit(){
          this.addShow=false;
          this.adviceindex=0;
          this.exitshow=false;
          console.log(this.adviceindex,this.exitshow);
        },
      }
    }
</script>
<style>
  @import url('../../../assets/less/vantstyle/dialog.css');
  @import url('../../../assets/less/vantstyle/button.css');
</style>
<style lang="less">
  .adjustMedical {
    /*.van-dialog{
      width: 5rem !important;
    }*/
  }
</style>
<style scoped lang="less">
.adjustMedical{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #F4F4F4;
  .a_empty{
    width: 1rem;
    height: 0.2rem;
  }
  .p_adjust{
    width: 7rem;
    height: 3.5rem;
    margin: 0.2rem auto 0 auto;
    background: white;
    border-radius: 0.2rem;
    box-shadow: 0 0 0.08rem #bebcbc;
    .p_adjust_top{
      margin: 0 auto;
      width: 6.5rem;
      height: 1.1rem;
      border-bottom: 0.01rem solid #CDCDCD;
      display: flex;
      justify-content: space-between;
      .p_info_top_left{
        margin-top: 0.2rem;
        width: 4.8rem;
        height: 0.8rem;
        .p_info_top_left_bold{
          color: #606060;
          font-size: 0.28rem;
          font-weight: bold;
          width: 1.5rem;
        }
        .p_info_top_left_small{
          color: #969696;
          font-size: 0.26rem;
        }

      }
      .p_info_top_right{
        margin-top: 0.2rem;
        text-align: center;
        line-height: 0.6rem;
        color: white;
        font-size: 0.3rem;
        width: 1.4rem;
        height: 0.6rem;
        background: #3EB4A1;
        border-radius: 0.1rem;
      }
      .a_gt{
        margin-top: 0.35rem;
        width: 0.47rem;
        height: 0.47rem;
        img{
          width: 0.47rem;
          height: 0.47rem;
        }
      }
    }
    .p_content{
      margin:0 auto;
      width: 6.5rem;
      height: 2rem;
      color: #777777;
      font-size: 0.28rem;
      .p_content_div{
        margin-left: 0.1rem;
        margin-top: 0.2rem;
        width: 6.4rem;
        height: 0.6rem;
        border-bottom: 0.01rem dashed #CDCDCD;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .p_content_div1{
        margin-left: 0.1rem;
        margin-top: 0.2rem;
        width: 6.4rem;
        height: 0.5rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }

  }
  .p_stop{
    margin: 0 auto;
    width: 3.5rem;
    height: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
    color: #7C7C7C;
    font-size: 0.36rem;
    font-weight: bold;
    border-bottom: 0.01rem solid #F4F4F4;
  }
  .p_stop_btn{
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
    display: flex;
    justify-content: space-around;
    img{
      width: 2rem;
      height: 0.65rem;
    }
  }
  .p_add_btn{
    width: 5rem;
    height: 0.72rem;
    margin: 0.2rem auto;
    img{
      width: 5rem;
      height: 0.72rem;
    }
  }
  .p_add_title{
    margin: 0 auto;
    width: 3.5rem;
    height: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
    color: #7C7C7C;
    font-size: 0.36rem;
    font-weight: bold;
  }
  .p_add_input{
    display: flex;
    justify-content: space-between;
    width: 5rem;
    height: 0.7rem;
    margin: 0 auto;
    font-size: 0.3rem;
    color: #777777;
    .p_add_input_name{
      width: 1.5rem;
      height: 0.4rem;
    }
    .p_add_input_div{
      width: 3.3rem;
      height: 0.4rem;
      border-bottom: 0.01rem solid #F4F4F4;
    }
    .p_add_input_div1{
      width: 3.3rem;
      height: 0.4rem;
      border-bottom: 0.01rem solid #F4F4F4;
      display: flex;
      justify-content: space-between;
      input{
        width: 2.9rem;
        height: 0.3rem;
      }
      .p_add_input_div_triangle{
        height: 0rem;
        width: 0rem;
        z-index: 1;/*这个与后面的空心三角形有关*/
        border-left: 0.1rem solid transparent;
        border-right: 0.1rem solid transparent;
        border-top: 0.2rem solid #3EB4A1;
      }
    }
    .p_add_input_div2{
      width: 3.3rem;
      height: 0.4rem;
      //border-bottom: 0.01rem solid #F4F4F4;
      display: flex;
      justify-content: space-between;
      .p_add_input_div2_inp1{
        width: 1.2rem;
        height: 0.4rem;
        border-bottom: 0.01rem solid #F4F4F4;
      }
      .p_add_input_div2_inp2{
        width: 1rem;
        height: 0.4rem;
        border-bottom: 0.01rem solid #F4F4F4;
      }
      .p_add_input_div_triangle{
        height: 0rem;
        width: 0rem;
        z-index: 1;/*这个与后面的空心三角形有关*/
        border-left: 0.1rem solid transparent;
        border-right: 0.1rem solid transparent;
        border-top: 0.2rem solid #3EB4A1;
      }
    }
  }
  .p_add_x{
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    width: 0.22rem;
    height: 0.22rem;
    img{
      width: 0.22rem;
      height: 0.22rem;
    }
  }
  .p_btn{
    margin-bottom: 1.5rem;
    margin-top: auto;
    /*position: absolute;
    bottom: 0.2rem;
    left: 50%;
    margin-left: -1.5rem;*/
    text-align: center;
    line-height: 0.6rem;
    color: white;
    font-size: 0.32rem;
    font-weight: bold;
   width: 3rem;
    height: 0.6rem;
    background: #3EB4A1;
    border-radius: 0.3rem;
  }
}
</style>

