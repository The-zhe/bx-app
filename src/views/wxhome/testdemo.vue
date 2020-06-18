// 2020/3/30 created by xtt
<template>
    <div class="testdemo">
      i am demo
      <div class="top">
        <div class="bnt" @click="addDom(1)">文本框</div>
        <div class="bnt" @click="addDom(2)">图片</div>
        <div class="bnt" @click="addDom(3)">按钮</div>
        <div class="bnt" @click="addDom(4)">数字</div>
      </div>
      <div><input v-model="name"/></div>
      <div class="content">
        <div v-for="item in addlist">
          <div>{{item.name}}</div>
          <div>{{item.dom}}</div>
        </div>
      </div>
      <div id="bpp" @mousedown="move">       <!--绑定按下事件-->
        {{positionX}}
        {{positionY}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "testdemo",
      data(){
        return{
         addlist:[],
          addnum:0,
          name:'',
          positionX:0,
          positionY:0,
        }
      },
      methods:{
        move(e){
          console.log('testdemo',e);
          let odiv = e.target;        //获取目标元素

          //算出鼠标相对元素的位置
          let disX = e.clientX - odiv.offsetLeft;
          let disY = e.clientY - odiv.offsetTop;
          document.onmousemove = (e)=>{       //鼠标按下并移动的事件
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;
            let top = e.clientY - disY;

            //绑定元素位置到positionX和positionY上面
            this.positionX = top;
            this.positionY = left;

            //移动当前元素
            odiv.style.left = left + 'px';
            odiv.style.top = top + 'px';
          };
          document.onmouseup = (e) => {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        },
        addDom(num){
          if(num===1){
            this.addnum=this.addnum+1;
            this.addlist.push({
              name:this.name,
              dom:'文本框'
            });
          }else if(num===2){
            this.addlist.push({
              name:this.name,
              dom:'我是图片',
            });
          }else if(num===3){
            this.addlist.push({
              name:this.name,
              dom:'我是按钮'
            });
          }else {
            this.addlist.push({
              name:this.name,
              dom:'我是数字'
            });
          }

        }
      }
    }
</script>

<style scoped lang="less">
  #bpp{
    position: relative;     /*定位*/
    top: 10px;
    left: 10px;
    width: 200px;
    height: 200px;
    background: #666;       /*设置一下背景*/
  }
.testdemo{
font-size: 0.3rem;
  .top{
    display: flex;
    justify-content: flex-start;
  }
  .bnt{
    line-height: 0.5rem;
    text-align: center;
    margin-left: 0.2rem;
    width: 2rem;
    height: 0.5rem;
    border: 0.02rem solid #0f847e;
  }
  .content{
    margin: 0.2rem auto;
    width: 7rem;
    height: 7rem;
    border: 0.02rem solid #0f847e;
  }
}
</style>
