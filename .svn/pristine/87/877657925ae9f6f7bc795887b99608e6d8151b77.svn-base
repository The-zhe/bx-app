// 2020/1/15 created by xtt
<template>
    <div class="upIndicator">
      <div class="u_top">
        上传每日指标，让医生管家更好的进行管理。
      </div>
      <div class="u_indicator">
        <div class="u_indicator_name">
          <div class="u_indicator_name_text">指标名称：</div>
          <div class="u_indicator_name_inp">
          <input class="u_indicator_name_input" placeholder="请选择指标名称"/>
            <div class="u_triangle"></div>
        </div>
        </div>
        <div class="u_indicator_name">
          <div class="u_indicator_name_text">选择图标：</div>
        </div>
      </div>
      <div class="u_inspect">
        <div class="u_inspect_result">
          <div class="u_inspect_result_text">检测结果：</div>
          <div class="u_inspect_result_inp">
            <input class="u_inspect_result_input" placeholder="请输入检测结果"/>
          </div>
        </div>
        <div class="u_inspect_result">
          <div class="u_inspect_result_text">检测单位：</div>
          <div class="u_inspect_result_inp">
            <input class="u_inspect_result_input" placeholder="请选择检测单位"/>
            <div class="u_triangle"></div>
          </div>
        </div>
        <div class="u_inspect_result">
          <div class="u_inspect_result_text">正常范围：</div>
          <div class="u_inspect_result_inp_samll">
            <input class="u_inspect_result_input_small" placeholder="请输入最小值"/>
           <!-- <input class="u_inspect_result_input_small" placeholder="请输入最大值"/>-->
          </div>
          <div class="u_inspect_result_inp_samll_bl">~</div>
          <div class="u_inspect_result_inp_samll">
            <input class="u_inspect_result_input_small" placeholder="请输入最大值"/>
          </div>
        </div>
        <div class="u_inspect_btn">保存</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "upIndicator",
      data(){
          return{

          }
      }
    }
</script>

<style scoped lang="less">
.upIndicator{
  width: 100%;
  color: #606060;
  font-size: 0.28rem;
  .u_top{
    width: 100%;
    height: 1rem;
    background: #F4F4F4;
    line-height: 1rem;
    text-align: center;
  }
  .u_triangle{
    height: 0rem;
    width: 0rem;
    z-index: 1;/*这个与后面的空心三角形有关*/
    border-left: 0.1rem solid transparent;
    border-right: 0.1rem solid transparent;
    border-top: 0.2rem solid #3EB4A1;
  }
  .u_indicator{
    width: 100%;
    height: 3.65rem;
    background: white;
    .u_indicator_name{
      margin: 0 auto;
      width: 5.9rem;
      height:1.5rem;
      display: flex;
      justify-content: space-between;
      .u_indicator_name_text{
        margin-top: 0.8rem;
      }
    .u_indicator_name_inp{
      margin-top: 0.8rem;
      width: 4.3rem;
      height: 0.5rem;
      border-bottom: 0.01rem solid #DFDFDF;
      display: flex;
      justify-content: space-between;
      .u_indicator_name_input{
        margin-left: 0.1rem;
        width: 3rem;
        height: 0.4rem;
      }
     }
    }
    .u_indicator_img{

    }
  }
  .u_inspect{
    width: 100%;
    height: 7rem;
    margin-top: 0.2rem;
    background: white;
    .u_inspect_result{
      margin: 0 auto;
      width: 5.9rem;
      height:1.5rem;
      display: flex;
      justify-content: space-between;
      .u_inspect_result_text{
        margin-top: 0.8rem;
      }
      .u_inspect_result_inp{
        margin-top: 0.8rem;
        width: 4.3rem;
        height: 0.5rem;
        border-bottom: 0.01rem solid #DFDFDF;
        display: flex;
        justify-content: space-between;
        .u_inspect_result_input{
          margin-left: 0.1rem;
          width: 3rem;
          height: 0.4rem;
        }
      }
      .u_inspect_result_inp_samll_bl{
        margin-top: 0.8rem;
      }
      .u_inspect_result_inp_samll{
        margin-top: 0.8rem;
        width: 1.95rem;
        height: 0.5rem;
        border-bottom: 0.01rem solid #DFDFDF;
      }
      .u_inspect_result_input_small{
        margin-left: 0.1rem;
      }
    }
    .u_inspect_btn{
      margin: 1.5rem auto 0 auto;
      width: 3rem;
      height: 0.6rem;
      background: #3EB4A1;
      border-radius: 0.6rem;
      font-size: 0.3rem;
      color: white;
      line-height: 0.6rem;
      text-align: center;
    }
  }
}
</style>
