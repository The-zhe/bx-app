<template>
  <div class="search-list">
    <div>
      {{val}}
<!--         <textarea ref="textarea" v-model="keywords" :maxlength="keywordsMax"></textarea>
        <span class="clear" @click="clearKeywords">x</span> -->
    </div>
  </div>
</template>

<script>
import {autoTextarea} from '../../utils/index'
let rootFontSize = parseFloat(document.documentElement.style.fontSize);
  export default {
    data () {
      return {
        keywordsMax: 128,
        keywords: '',
        list: [],
        geolocation:null,
        positionNum:0,
        val:'',
        area:require('../../utils/area').default.county_list
      }
    },
    mounted () {
      this.geolocation= new qq.maps.Geolocation("NYMBZ-KWNK3-VLV3D-3S7XO-TXLW7-6MBMN", "bxsy")
      this.$nextTick(()=>{
        this.geolocation.getLocation(this.showPosition, this.showErr);
      })
/*         this.$nextTick(() => {
          let textarea = this.$refs.textarea;
          textarea.focus();
          let prevHeight = 65;
          textarea && autoTextarea(textarea, 5, 0, (height) => {
            height += 20;
            if (height !== prevHeight) {
              prevHeight = height;
              let rem = height / rootFontSize;
              this.$refs.list.style.height = `calc(100% - ${rem}rem)`;
            }
          });
        }) */
    },
    methods: {
    showPosition(position) {
/*         var adCode = position.adCode;//邮政编码
        var nation = position.nation;//中国
        var city = position.city; //城市
        var addr = position.addr; //详细地址
        var lat = position.lat; //
        var lng = position.lng; //火星坐标 //TODO 实现业务代码逻辑 */
        let adcode = position.adcode
        this.val=this.area[adcode]
     },
    showErr(err) { 
  console.log(err)
        //TODO 如果出错了调用此方法 
    }

/*       clearKeywords () {
        this.keywords = '';
        this.list = [];
        let textarea = this.$refs.textarea;
        let height = 40;
        let rem = height / rootFontSize;
        textarea.style.height = `${rem}rem`;
        rem = (height + 20) / rootFontSize;
        this.$refs.list.style.height = `calc(100% - ${rem}rem)`;
        textarea.focus();
      }, */
    }
  }
</script>

<style scoped lang="less">
  .search-list{
    textarea{
      border: 1px solid red;
    }
  }

</style>
