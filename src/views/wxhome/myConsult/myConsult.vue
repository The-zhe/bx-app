<template>
  <div class="myConsult_container">
    <div class="tab_container">
      <div class="tab_item"
           :class="{'active_item':index==activeTabIndex,'new_item':index==0,'reply_item':index==1}"
           @click="changeTab(item,index)" :key="item.title" v-for="(item,index) in tabList">
        <div class="item_title">
          {{item.title}}
          <div class="reply_num" v-show="index===1&&oldcountnum>0">{{oldcountnum}}</div>
          <div class="reply_num" v-show="index===0&&newcountnum>0">{{newcountnum}}</div>
        </div>
        <img :style="{'opacity':index==activeTabIndex?'1':'0'}" :src="arrowIcon"/>

      </div>

    </div>
    <div class="list_container">
      <div class="item" @click="jumpToDetail(item)" v-for="item in activeTabIndex==0?ydynewlist:ydyoldlist">
        <div class="avatar">
          <img :src="item.sex=='男'?manIcon:womenIcon" />
          <div class="hasCatch" v-if="activeTabIndex==1&&item.type=='1'">

          </div>
        </div>
        <div class="text">
          <div class="top">
            <div class="name">{{item.phone}}</div>
            <div class="sex">{{item.sex}}</div>
            <div class="age">{{item.age}}岁</div>
            <div class="publish_time">{{item.sendDate|fromNowTime}}</div>
          </div>
          <div class="bottom">
            <div class="illnessDesc">
              {{item.msg}}
            </div>
            <div class="unread" v-show="item.questionNumber">{{item.questionNumber}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  <div class="search_container">
        &lt;!&ndash; <div class="input">&ndash;&gt;
           <input placeholder="搜索" type="text"/>
        &lt;!&ndash; </div>&ndash;&gt;
       </div>-->
</template>

<script>
  import moment from 'moment';
  import {getmbconsultlist} from "../../../api";

  export default {
    name: "myConsult",
    data() {
      return {
        arrowIcon:require('../../../assets/imgs/img_xgzx_new.png'),
        typeIcon:require('../../../assets/imgs/icon_xgzx_system.png'),
        manIcon: require('../../../assets/imgs/manPatient.png'),
        womenIcon: require('../../../assets/imgs/womenPatient.png'),
        activeTabIndex: 0,
        tabList: [
          {
            title: '新咨询',
          },
          {
            title: '已回复',
          }
        ],
        listData: [],
        qfxglist: [],  //表单咨询数据
        mblist: [],   //慢病列表数据（已弃用）
        xgnum: 0,  // 新冠未读数（已弃用）
        mbnum: 0,  //慢病未读数（已弃用）
        unreadnum: 0, //显示的未读数
        ydynewnum: 0,  //新咨询未读数
        ydynewlist: [],   //新咨询未读列表
        ydyoldlist: [],   //已回复已读列表
        newConsultPageNum:1,
        replyPageNum:1,
        newConsultTotal:0,
        replyTotal:0,
        newcountnum:0,
        oldcountnum:0,
      }
    },
    filters: {
      age: function (value) {
        var birthday = new Date(value.replace(/-/g, "\/"));
        var d = new Date();
        var age = d.getFullYear() - birthday.getFullYear() - ((d.getMonth() < birthday.getMonth() || d.getMonth() == birthday.getMonth() && d.getDate() < birthday.getDate()) ? 1 : 0);
        return age
      },
      fromNowTime: function (value) {
        let todayYear = Number(new Date().getFullYear())
        let todayMonth = Number(new Date().getMonth() + 1)
        let todayDay = Number(new Date().getDate())
        let valueYear = Number(value.slice(0, 4))
        let valueMonth = Number(value.slice(5, 7))
        let valueDay = Number(value.slice(8, 10))
        if (todayYear == valueYear && todayMonth == valueMonth && todayDay == valueDay) {
          return value.slice(11, 16)
        } else {
          let array = moment(value)
            .fromNow()
            .split(" ");
          array[0] = array[0] == "a" ? "1" : array[0] == "an" ? "1" : array[0] + "";
          let EN = [
            "minute",
            "minutes",
            "hour",
            "hours",
            "day",
            "days",
            "month",
            "months",
            "year",
            "years"
          ];
          let CN = ["分钟", "小时", "天", "个月", "年"];
          array[1] = CN[parseInt(EN.indexOf(array[1]) / 2)];
          return array.length == 4
            ? "几秒前"
            : new Array(array[0], array[1]).join("") + "前";
        }

      }
    },
    methods: {
      //咨询详情
      jumpToDetail(item) {
        if (this.activeTabIndex === 0) {
          this.$router.push({name: 'wxconsultdoctor', params: {fromId:item.userId}});

        } else {
          this.$router.push({name: 'wxconsultdoctor',params: {fromId:item.userId}});
          console.log(item);
        }

      },
      changeTab(item, index) {
        this.activeTabIndex = index;
        if (index == 0) {
          //this.unreadnum = this.ydynewnum;
          this.getFormConsultListFun();
        } else {
          this.getReplyFormConsultListFun();
        }
      },
      getConversationList() {
        // 拉取会话列表
        let that = this;
        let promise = tim.getConversationList();
        promise.then(function (imResponse) {
          const conversationList = imResponse.data.conversationList; // 会话列表，用该列表覆盖原有的会话列表
          console.log('tttt', conversationList);
          let nicklist = [];
          let nickll = [];
          /* let qfxglisg=[];  //区分新冠
           let mbxglist=[]; //慢病的*/
          let ydynew = [];
          let ydyold = [];
          conversationList.forEach((element) => {
            nicklist = element.userProfile.nick.split(',');
            nicklist.push(element.unreadCount);
            nicklist.push(element.conversationID);
            nicklist.push(element.lastMessage.fromAccount);
            nickll.push(nicklist);
          });
          nickll.forEach((element) => {
            if (element[3] === '2' && element[5] > 0) {
              ydynew.push({
                phone: element[0],
                sex: element[1],
                age: element[2],
                consultId: element[4],
                unread: element[5],
                conversationID: element[6],
                fromAccount:element[7]
              });
              that.ydynewnum = that.ydynewnum + element[5];
            }
            if (element[3] === '2' && element[5] === 0) {
              ydyold.push({
                phone: element[0],
                sex: element[1],
                age: element[2],
                consultId: element[4],
                unread: element[5],
                conversationID: element[6],
                fromAccount:element[7]
              });
            }
          });
          /* nickll.forEach((element)=>{
             if(element[3]==='1'){
               qfxglisg.push({phone:element[0],sex:element[1],birthday:element[2],consultId:element[4],unread:element[5],conversationID:element[6]});
               that.xgnum=that.xgnum+element[5];
             }
             if(element[3]==='2'){
               mbxglist.push({phone:element[0],sex:element[1],birthday:element[2],consultId:element[4],unread:element[5],conversationID:element[6]})
               that.mbnum=that.mbnum+element[5];
             }
           });*/
          console.log('233', nickll);
          console.log('ydynew',ydynew);
          /*that.qfxglist=qfxglisg;
          that.mblist=mbxglist;*/
          that.ydynewlist = ydynew;
          that.ydyoldlist = ydyold;
          that.listData = that.ydynewlist;
          console.log('ydynewlist', that.ydynewlist);
        }).catch(function (imError) {
          console.warn('getConversationList error:', imError); // 获取会话列表失败的相关信息
        });
      },
      getFormConsultListFun(pagenum) {
        if(this.newConsultTotal==0||this.newConsultTotal>(this.newConsultPageNum-1)*10) {
          let doctorId=localStorage.getItem('doctorId');
          getmbconsultlist(doctorId,'0',pagenum).then((res) => {
            console.log('question',res.data.list[0].questionNumber);
            if(res.code===0){
              console.log('nnn',typeof (nnn));
              res.data.list.forEach((elem)=>{
                this.newcountnum=this.newcountnum+elem.questionNumber;
              });
            /*  for(let i=0;i<res.page.total;i++){
                this.newcountnum=this.newcountnum+nnn[i].num;
              }*/
              this.newConsultTotal=res.page.total;
              this.newConsultPageNum++;
              this.ydynewlist = this.ydynewlist.concat(res.data.list);
             // this.ydynewlist = res.data.list;
              console.log('fff', res);
            }
          })
        }
      },
      getReplyFormConsultListFun(pagenum) {
        if(this.replyTotal==0||this.replyTotal>(this.replyPageNum-1)*10) {
          let doctorId=localStorage.getItem('doctorId');
          getmbconsultlist(doctorId,'2',pagenum).then((res) => {
            if(res.code==0){
              for(let i=0;i<res.page.total;i++){
                this.oldcountnum=this.oldcountnum+res.data.list[i].questionNumber;
              }
              this.replyTotal=res.page.total
              this.replyPageNum++
              this.ydyoldlist = res.data.list;
            }


          })
        }
      },
    },
    mounted() {
      this.getFormConsultListFun(this.newConsultPageNum)
      this.getReplyFormConsultListFun(this.replyPageNum)
      window.addEventListener('scroll',()=>{
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
        //滚动条到底部的条件
        if(scrollTop+windowHeight+3>=scrollHeight){
          if(!this.activeTabIndex){
            debounce(this.getFormConsultListFun(this.newConsultPageNum),1000)
          }else{
            debounce(this.getReplyFormConsultListFun(this.replyPageNum),1000)
          }

        }
      })
    }


  };
</script>

<style scoped lang="less">
  .myConsult_container {
    .tab_container {
      display: flex;
      width: 100%;
      height: 1.02rem;
      background-color: #56B2AC;

      .tab_item {
        margin-top: 0.31rem;
        width: 3.5rem;
        height: 0.63rem;
        color: #B3DFE5;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.3rem;
        img{
          margin-top: 0.17rem;
          margin-bottom: -0.22rem;
          height: 0.4rem;
          width: 0.6rem;
        }
        .item_title{
          position: relative;
          .reply_num{
            border-radius: 50%;
            right: -0.20rem;
            top: -0.14rem;
            position: absolute;
            width:0.31rem;
            height:0.31rem;
            background-color: #FB8001;
            color: #ffffff;
            font-size: 0.22rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .reply_item{
      }

      .active_item {
        font-size: 0.36rem;
        background-color: #56B2AC;
        color: #ffffff;
      }
    }
    .list_container {
      width: 7rem;
      margin: 0 auto 0.2rem;
      padding: 0 0.25rem;
      box-sizing: border-box;

      .item {
        color: #777777;
        font-size: 0.3rem;
        height: 1.64rem;
        display: flex;
        align-items: center;
        border-bottom: 0.02rem solid #F5F2F5;

        .avatar {
          position: relative;
          margin-left: 0.17rem;
          border-radius: 50%;
          border: 1px solid #f4f4f4;
          height: 1.01rem;
          width: 1.01rem;
          img {
            height: 1.01rem;
            width: 1.01rem;
          }
          .hasCatch{
            position: absolute;
            right: 0;
            top: 0;
            width: 0.23rem;
            height: 0.23rem;
            border-radius: 50%;
            background-color: #F38008;

          }
        }

        .text {
          margin-left: 0.34rem;
          width: 100%;
          .top {
            display: flex;

            .name {

            }

            .sex {
              margin-left: 0.24rem;
              margin-right: 0.24rem;
            }

            .age {
            }

            .publish_time {
              margin-right: 0.12rem;
              margin-left: auto;
            }
          }

          .bottom{
            width: 100%;
            display: flex;
            .illnessDesc {
              margin-top: 0.12rem;
              width: 3.08rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .unread{
              margin-top: 0.2rem;
              border-radius: 50%;
             margin-left: 0.7rem;
              width:0.31rem;
              height:0.31rem;
              background-color: #FB8001;
              color: #ffffff;
              font-size: 0.22rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            img{
              margin-top: 0.32rem;
              margin-left: auto;
              width: 0.47rem;
              height: 0.39rem;
            }
          }
        }
      }
    }
  }
</style>
