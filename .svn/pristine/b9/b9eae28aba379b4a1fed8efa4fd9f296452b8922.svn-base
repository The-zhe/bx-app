<template>
    <div class="space">
        <div class="time">
            <div class="a_top">
                <div class="a_select">
                <div class="text">{{value}}</div>
                <div class="a_triangle" @click="toselect"></div>
                </div>
                <van-popup v-model="showPicker" position="bottom">
                <van-picker
                    show-toolbar
                    :columns="columns"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
                />
                </van-popup>
            </div>
            <div class="time_select_box">
                <time-select></time-select>
                <time-select></time-select>
            </div>
        </div>
        
        <div class="divider"></div>
        <div class="content">
            <div class="content_card" v-for="(item,index) in reportList" :key="index">
                <div class="card_top">
                    <div class="name">{{item.name}}<img v-show="item.img" src="../../../assets/imgs/pharmacy1.png" alt=""></div>
                    <div class="date">{{item.date}}</div>
                </div>
                <div class="divider_c"></div>
                <div class="card_bottom">
                    <div class="numerical">{{item.numerical}}</div>
                    <div class="type">{{item.type}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import timeSelect from "../../../components/timeSelect.vue";
import { getIndicators} from "../../../api/index"
export default {
    name:'healthIndictor',
    components:{ timeSelect },
    data(){
        return{
            id:'',
            showPicker:false,
            show:false,
            value:'全部',
            columns: ['全部', '近7天', '近一个月', '近三个月'],
            reportList:[
                {
                    name:'血压',
                    date:'2020-04-29   13:24',
                    numerical:'1108/87mmhg',
                    type:'客户上传',
                    img:true,
                },
                {
                    name:'心率',
                    date:'2020-04-29   13:24',
                    numerical:'82bmp',
                    type:'管家上传',
                    img:false,
                },
                {
                    name:'空腹血糖',
                    date:'2020-04-29   13:24',
                    numerical:'19.7mmol/l',
                    type:'医生上传',
                    img:true,
                },
                {
                    name:'尿酸',
                    date:'2020-04-29   13:24',
                    numerical:'1108/87mmhg',
                    type:'客户上传',
                    img:false,
                },
                {
                    name:'心率',
                    date:'2020-04-29   13:24',
                    numerical:'82bmp',
                    type:'管家上传',
                    img:false,
                },
            ],
            catCd: '',
            catNm: '',
            crtTm: "",
            statCd: "",
            statNm: "",
        }
    },
    methods:{
        toselect(){
          this.showPicker=true;
        },
        onConfirm(value,index){
        //   this.reportList=[];
          this.value=value;
          this.showPicker = false;
          index=index+'';
          getIndicators().then(res=>{
            // this.reportList=res.data.list;
            console.log('cc',res.data.list);
          });
          console.log(index);
        },
    },
    mounted(){
        this.onConfirm("全部",0);
    }
}
</script>

<style lang="less" scoped>
.space{
    box-shadow: 0 .1rem 12px 0 rgba(0,0,0,1);
    margin-top: 0.1rem;
    .time{
        height: 1rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        .a_top {
      height: 0.9rem;
      background: white;
      .a_select {
        margin-top: 0.15rem;
        margin-left: 0.25rem;
        float: left;
        width: 1.5rem;
        height: 0.3rem;
        border-radius: 0.6rem;
        border: 0.02rem #40b2a0 solid;
        font-size: 0.1rem;
        color: #40b2a0;
        padding-left: 0.3rem;
        padding-top: 0.1rem;
        padding-bottom: .1rem;
        display: flex;
        justify-content: space-between;
        .text{
            height: 100%;
            line-height: .3rem;
        }
        .a_triangle {
          margin-top: 0.1rem;
          margin-right: 0.2rem;
          height: 0rem;
          width: 0rem;
          z-index: 1; /*这个与后面的空心三角形有关*/
          border-left: 0.1rem solid transparent;
          border-right: 0.1rem solid transparent;
          border-top: 0.2rem solid #048A83;
        }
      }

      .a_select1 {
        margin-left: 0.25rem;
        position: absolute;
        margin-top: 0.8rem;
        width: 2.7rem;
        height: auto;
        border-radius: 0.1rem;
        border-left: 0.01rem #f4f4f4 solid;
        border-right: 0.01rem #f4f4f4 solid;
        border-bottom: 0.01rem #f4f4f4 solid;
        font-size: 0.3rem;
        color: #40b2a0;
        padding-left: 0.3rem;
        padding-top: 0.1rem;
        background: white;

        .onselect {
          width: 2rem;
          height: 0.5rem;
          border-top: 0.01rem solid #F4F4F4;
        }
      }
    }
        .all{
            font-size:.3rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(118,119,119,1)
        }
        /deep/ .time_select_box{
            display: flex;
            flex-direction: row;
            width: 3.3rem;
            .time_select{
                height: 0.7rem;
                .caret{
                    width: 2.5rem;
                    .triangle{
                        border-top: 0.15rem solid black;
                        border-right: 0.1rem solid transparent;
                        border-bottom: 0.1rem solid transparent;
                        border-left: 0.1rem solid transparent;
                        border-top-color: #afafaf;
                        position: absolute;
                        right: 0.25rem;
                        top: 0.33rem;
                    }
                }
            }
        }
    }
    .divider{
        width:6.91rem;
        height: 0.01rem;
        background: rgba(119,119,119,.5);
        margin: 0 auto;
        margin-bottom: 0.2rem;
    }
    .content{
        margin: .2rem;
        display: flex;
        flex-direction: column;
        font-size:.3rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(119,119,119,1);
        .content_card{
            padding: .2rem;
            display: flex;
            flex-direction: column;
            box-shadow: 0 0 0.08rem #bebcbc;
            margin-bottom: .3rem;
            .card_top{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .name{
                    display: flex;
                    flex-direction: row;
                    font-weight:bold;
                    img{
                        margin-top: 0.05rem;
                        margin-left: 0.1rem;
                        width: .35rem;
                        height: .35rem;
                    }
                }
            }
            .divider_c{
                width:100%;
                height: 0.01rem;
                background: rgba(119,119,119,.5);
                margin-bottom: 0.2rem;
                margin-top: 0.2rem;
            }
            .card_bottom{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
}
</style>