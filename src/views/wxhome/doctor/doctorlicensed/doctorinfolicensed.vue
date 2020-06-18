// 2020/3/31 created by xtt
<template>
  <div class="doctorlicensed">
    <van-popup v-model="showRankPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="Rankcolumns"
        @cancel="showRankPicker = false"
        @confirm="onRankConfirm"
      />
    </van-popup>
    <van-popup v-model="dateshow" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirmdate"
        @cancel="dateshow=false"
      />
    </van-popup>
    <van-popup v-model="showMajorPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="Majorcolumns"
        @cancel="showMajorPicker = false"
        @confirm="onMajorConfirm"
      />
    </van-popup>
    <van-popup v-model="showEducationPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="Educationcolumns"
        @cancel="showEducationPicker = false"
        @confirm="onEducationConfirm"
      />
    </van-popup>
    <div class="top">填写执业信息</div>
    <div class="content">
      <div class="title">毕业院校</div>
      <div class="name">
        <div class="text">
          <input
            v-model="school"
            placeholder="请填写毕业院校"
            @blur="changeSchool"
            @keyup.enter="changeSchool"
          />
        </div>
        <img style="height: 0.3rem" :src="nextIcon" />
      </div>
    </div>
    <div class="content" @click="showEducationPicker=true">
      <div class="title">最高学历</div>
      <div class="name">
        <div class="text">{{doctorInfo.edu ===''?'请选择最高学历':doctorInfo.edu}}</div>
        <img style="height: 0.3rem" :src="nextIcon" />
      </div>
    </div>
    <div class="content" @click="dateshow=true">
      <div class="title">毕业年月</div>
      <div class="name">
        <div class="text">{{doctorInfo.graduateTm===''?'请选择毕业年月':doctorInfo.graduateTm}}</div>
        <img style="height: 0.3rem" :src="nextIcon" />
      </div>
    </div>
    <div class="content" style="border-bottom: 0" @click="showMajorPicker=true">
      <div class="title">专业</div>
      <div class="name">
        <div class="text">{{major===''?'请选择专业':major}}</div>
        <img style="height: 0.3rem" :src="nextIcon" />
      </div>
    </div>
    <div class="line"></div>
    <div class="content" @click="showRankPicker=true">
      <div class="title">职称</div>
      <div class="name">
        <div class="text">{{rank===''?'请选择职称':rank}}</div>
        <img style="height: 0.3rem" :src="nextIcon" />
      </div>
    </div>
    <div class="content" @click="topracticeExperience" style="height: auto;min-height: 1rem;">
      <div class="title">执业经历</div>
      <div class="name" style="height: auto">
        <div class="text ellipsis">{{doctorInfo.experience===''?'请填写执业经历':doctorInfo.experience}}</div>
        <img style="height: 0.3rem" :src="nextIcon" />
      </div>
    </div>
    <div
      class="content"
      @click="toprofessionalInfo"
      style="height: auto;min-height: 1rem;border-bottom: 0"
    >
      <div class="title">专业擅长</div>
      <div class="name" style="height: auto">
        <div class="text ellipsis">{{doctorInfo.skills===''?'请填写专业擅长':doctorInfo.skills}}</div>
        <img style="height: 0.3rem" :src="nextIcon" />
      </div>
    </div>
    <div class="line"></div>
    <div class="content" style="border-bottom: 0" @click="toPoints" v-show="!pointshow">
      <div class="title">执业点</div>
      <div class="name">
        <div class="text">{{point===''?'请设置执业地点':point}}</div>
        <img style="height: 0.3rem" :src="nextIcon" />
      </div>
    </div>
    <div class="content point" v-for="(item,index) in addlist" @click="toPoints" v-show="pointshow">
      <div class="title" style="margin-top: 0.3rem">第{{chineseNum[index].title}}执业点</div>
      <!-- 第{{chineseNum[index].title}}执业点 -->
      <div class="hospital">
        <div>{{item.point}}</div>
        <div>{{item.departNm}} {{item.duty}}</div>
      </div>
      <div class="ponitImg">
        <img v-show="index===0" style="height: 0.3rem" :src="nextIcon" />
      </div>
    </div>
    <div class="line"></div>
    <div class="content" style="border-bottom: 0" @click="toCertification">
      <div class="title">执业资格认证</div>
      <div class="name">
        <div class="text">{{licenseTip}}</div>
        <img style="height: 0.3rem" :src="nextIcon" />
      </div>
    </div>
    <div class="line"></div>
    <!-- <div class="fixbtn">
      <div class="btn back" @click="toback">上一步</div>
      <div class="btn next" @click="tonext">下一步</div>
    </div>-->
  </div>
</template>

<script>
import moment from "moment";
import {
  getDoctorInfo, //获取医生执业信息
  editDoctorInfo, //修改医生执业信息
  getEducationItemList,
  getMajorItemList,
  getRankItemList
} from "../../../../api/apiz";
import Toast from "vant/es/toast";

export default {
  name: "doctorinfolicensed",
  data() {
    return {
      nextIcon: require("../../../../assets/imgs/btn_grzx_jbzl_next.png"),
      selectIcon: require("../../../../assets/imgs/btn_grzx_select.png"),
      minDate: new Date(1950, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      dateshow: false, //显示毕业年月
      showRankPicker: false, //显示职称
      showMajorPicker: false, //显示专业
      showEducationPicker: false, //显示学历
      doctorInfo: {
        //更新数据组
        userId: "",
        id: "",
        school: "", //毕业院校
        edu: "", //最高学历
        graduateTm: "", //毕业时间
        majorCd: "", //主修ID
        titleCd: "", //
        experience: "", //执业经历
        skills: "", //擅长
        //hasAuth: "", //资格认证种中
        //titleNm: "", //职称
        hjjkPracticePlaceVos: "" //执业点
      },
      school: "", //毕业院校
      graduationDate: "", //毕业年月
      rank: "", //职称
      rankCd: "",
      major: "", //专业
      majorCd: "",
      education: "", //学历
      educationCd: "",
      rankItemList: [],
      majorItemList: [],
      educationItemList: [],
      experience: "",
      skills: "",
      point: "", //执业点
      check: false,
      addlist: "",
      pointshow: false,
      hasAuth: "",
      chineseNum: [
        {
          num: 0,
          title: "一"
        },
        {
          num: 1,
          title: "二"
        },
        {
          num: 2,
          title: "三"
        },
        {
          num: 3,
          title: "四"
        },
        {
          num: 4,
          title: "五"
        }
      ],
      licenseTip: "立刻认证"
    };
  },
  watch: {
    doctorInfo: {
      handler: function(oldVal, newVal) {
        //console.log(oldVal == newVal);
        //do something
        if (newVal == "" || oldVal !== newVal) {
          console.log("chushihua");
        } else {
          console.log("需要更新数据了");
          this.postUpdateDoctorInfo();
        }
      },
      deep: true
    }
  },
  methods: {
    //获取路由来源，执行更新数据，如果路由来自专业擅长或者其他的页面
    getRouter() {
      const changeFromPractice = localStorage.getItem(
        "practiceExperienceChange"
      );
      const changeFromSkills = localStorage.getItem(
        "professionalInfoChange"
      );
      console.log("路由信息", changeFromPractice);
      if (changeFromPractice) {
        console.log(this.userId, this.id, this.experience);
        let data = {
          userId: this.userId,
          id: this.id,
          experience: this.experience,
        };
        editDoctorInfo(data).then(res => {
          console.log("跟新了个人信息--提交一次");
          this.getDoctorInfoMethod();
        });
        //
        if (changeFromSkills) {
        console.log(this.userId, this.id, this.skills);
        let data = {
          userId: this.userId,
          id: this.id,
          skills: this.skills,
        };
        editDoctorInfo(data).then(res => {
          console.log("跟新了个人信息--提交一次");
          this.getDoctorInfoMethod();
        });

        // let date = {
        //   userId: "",
        //   id: "",
        //   experience: ''
        // }
      }
      }
    },
    //获取医生执业认证信息
    getDoctorInfoMethod() {
      getDoctorInfo().then(res => {
        if (res.data.code == 0) {
          console.log("数据请求成");
          //this.doctorInfo = res.data.data;
          this.doctorInfo = {
            school: res.data.data.school,
            id: res.data.data.hjjkHealthTeamVo.id,
            userId: res.data.data.hjjkHealthTeamVo.userId,
            edu: res.data.data.edu, //最高学历
            graduateTm: res.data.data.graduateTm, //毕业时间
            majorCd: res.data.data.hjjkHealthTeamVo.majorCd, //专业ID
            titleCd: res.data.data.hjjkHealthTeamVo.titleCd, //职称
            experience: res.data.data.hjjkHealthTeamVo.experience, //执业经历
            skills: res.data.data.hjjkHealthTeamVo.skills, //擅长
            //hasAuth: res.data.data.hjjkHealthTeamVo.hasAuth, //只是标识资格认证种中
            hjjkPracticePlaceVos: res.data.data.hjjkPracticePlaceVos //执业点
          };
          this.hasAuth = res.data.data.hjjkHealthTeamVo.hasAuth;
          this.certImgUrl =  res.data.data.hjjkHealthTeamVo.certImgUrl;
          this.idCardGhImgUrl =  res.data.data.hjjkHealthTeamVo.idCardGhImgUrl;
          this.idCardRlImgUrl =  res.data.data.hjjkHealthTeamVo.idCardRlImgUrl;
          this.school = this.doctorInfo.school;
          this.major = res.data.data.hjjkHealthTeamVo.majorNm;
          this.rank = res.data.data.hjjkHealthTeamVo.titleNm;
          console.log(this.doctorInfo);
          localStorage.setItem("userId", this.doctorInfo.userId);
          localStorage.setItem("id", this.doctorInfo.id);
        }
      });
    },
    //更新医生执业认证信息并刷新数据
    postUpdateDoctorInfo() {
      //data为修改的信息
      console.log("发起请求信息", this.doctorInfo);
      //将本地存储的数据拿过来
      // this.doctorInfo = {

      // }
      editDoctorInfo(this.doctorInfo).then(res => {
        console.log("跟新了个人信息--提交一次");
        this.getDoctorInfoMethod();
      });
      // this.getDoctorInfoMethod();
    },
    //本地存毕业院校
    localschool() {
      console.log("获取本地的院校信息");
      localStorage.setItem("doctorschool", this.school);
    },
    //跳转到执业点
    toPoints() {
      this.$router.push({ path: "/practicePoints" });
    },
    changeSchool() {
      this.doctorInfo.school = this.school;
      //console.log(this.school,this.doctorInfo.school)
      console.log("修改了内容");
    },
    checkinfo() {
      if (!this.school) {
        Toast("请填写毕业院校");
      } else if (!this.doctorInfo.edu) {
        Toast("请选择最高学历");
      } else if (!this.doctorInfo.graduateTm) {
        Toast("请选择毕业年月");
      } else if (!this.major) {
        Toast("请选择专业");
      } else if (!this.rank) {
        Toast("请选择职称");
      } else if (!this.experience) {
        Toast("请填写执业经历");
      } else if (!this.skills) {
        Toast("请填写专业擅长");
      } else if (!this.pointshow) {
        Toast("请设置执业地点");
      } else {
        this.check = true;
      }
    },
    //跳转到执业认证
    toCertification() {
      this.checkinfo();
      if (this.check) {
        this.$router.push({ path: "/CertificationInstruction" });
      }
    },
    //跳转到执业经历
    topracticeExperience() {
      this.$router.push({ path: "/practiceExperience" });
    },
    //跳转到专业擅长
    toprofessionalInfo() {
      this.$router.push({ path: "/professionalInfo" });
    },
    //确认专业
    onMajorConfirm(val) {
      console.log(val)
      this.major = val;
      //修改更新请求信息
      this.doctorInfo.majorCd = this.majorItemList.find(item => {
        return item.nm == val;
      }).cd;
      this.showMajorPicker = false;
      console.log("专业更改", this.doctorInfo);
    },
    //确认学历
    onEducationConfirm(val) {
      this.doctorInfo.edu = val;
      // this.doctorInfo.majorCd = this.educationItemList.find(item => {
      //   return item.nm == val;
      // }).cd;
      console.log(this.doctorInfo);
      this.showEducationPicker = false;
    },
    //确认职称
    onRankConfirm(val) {
      this.rank = val;
      this.doctorInfo.titleCd = this.rankItemList.find(item => {
        return item.nm == val;
      }).cd;
      this.showRankPicker = false;
      console.log("修改了职称", this.doctorInfo);
      // localStorage.setItem("doctorrank", val);
      // localStorage.setItem("doctorrankCd", this.rankCd);
    },
    //确认毕业年月
    confirmdate(val) {
      this.doctorInfo.graduateTm = moment(val).format("YYYY-MM");
      this.dateshow = false;
      //localStorage.setItem("doctorgraduationDate", this.graduationDate);
    },
    tonext() {
      if (!this.school) {
        Toast("请填写毕业院校");
      } else if (!this.education) {
        Toast("请选择最高学历");
      } else if (!this.graduationDate) {
        Toast("请选择毕业年月");
      } else if (!this.major) {
        Toast("请选择专业");
      } else if (!this.rank) {
        Toast("请选择职称");
      } else {
        localStorage.setItem(
          "doctorlicensed",
          JSON.stringify({
            school: this.school,
            edu: this.education,
            graduateTm: this.graduationDate,
            majorId: this.majorCd,
            titleCd: this.rankCd,
            experience: this.experience,
            skills: this.skills
          })
        );
        this.$router.push({ path: "/doctorserve" });
      }
    },
    toback() {
      this.$router.push({ path: "/doctorperinfo" });
    },
    //获取学历list
    geEducationList() {
      getEducationItemList().then(res => {
        this.educationItemList = res.data.data.list;
      });
    },
    //获取职称list
    getRankItemListFun() {
      getRankItemList().then(res => {
        this.rankItemList = res.data.data.list;
      });
    },
    //获取专业list
    getMajorList() {
      getMajorItemList().then(res => {
        this.majorItemList = res.data.data.list;
      });
    },
    getUserId() {
      //console.log("获取安卓数据");
      this.$bridge.callHandler("getUserId", "", (res) => {
        localStorage.setItem('userId',res)
      });
    }
  },
  computed: {
    Rankcolumns() {
      if (this.rankItemList.length) {
        let array = [];
        this.rankItemList.forEach(item => {
          array.push(item.nm);
        });
        return array;
      } else {
        return [];
      }
    },
    Majorcolumns() {
      if (this.majorItemList.length) {
        let array = [];
        this.majorItemList.forEach(item => {
          array.push(item.nm);
        });
        return array;
      } else {
        return [];
      }
    },
    Educationcolumns() {
      if (this.educationItemList.length) {
        let array = [];
        this.educationItemList.forEach(item => {
          array.push(item.nm);
        });
        return array;
      } else {
        return [];
      }
    }
  },
  mounted() {
    this.getUserId();
    //获取医生信息
    this.getDoctorInfoMethod();
    this.getRankItemListFun();
    this.geEducationList();
    this.getMajorList();
    if (localStorage.getItem("practiceExperience")) {
      // console.log('没有数据，可以拿到数据',localStorage.getItem("practiceExperience"))
      this.experience = localStorage.getItem("practiceExperience");
      // console.log('更行后',this.doctorInfo.experience)
    }
    if (localStorage.getItem("professionalInfo")) {
      this.skills = localStorage.getItem("professionalInfo");
    }
    if (localStorage.getItem("userId")) {
      this.userId = localStorage.getItem("userId");
    }
    if (localStorage.getItem("id")) {
      this.id = localStorage.getItem("id");
    }
    // if (localStorage.getItem("doctorschool" && this.doctorInfo.school == '')) {
    //   this.doctorInfo.school = localStorage.getItem("doctorschool");
    // }
    // if (localStorage.getItem("doctoreducation" && this.doctorInfo.edu == '')) {
    //   this.doctorInfo.edu = localStorage.getItem("doctoreducation");
    // }
    // if (localStorage.getItem("doctorrank")) {
    //   this.rank = localStorage.getItem("doctorrank");
    // }
    // if (localStorage.getItem("doctorgraduationDate")) {
    //   this.doctorInfo.graduateTm = localStorage.getItem("doctorgraduationDate");
    // }
    // if (localStorage.getItem("doctormajor")) {
    //   this.major = localStorage.getItem("doctormajor");
    // }
    if (localStorage.getItem("addlist")) {
      //console.log('已添加了执业点',localStorage.getItem("addlist"))
      this.pointshow = true;
      this.addlist = JSON.parse(localStorage.getItem("addlist"));
      //this.doctorInfo.hjjkPracticePlaceVos = this.addlist;
      //console.log("医生执业点信息", this.doctorInfo);
    }
    this.getRouter();
    if (
      this.certImgUrl&&
      this.idCardRlImgUrl&&
      this.idotherCardRlImgUrl
    ) {
      if(this.hasAuth == 0){
        this.licenseTip = "立刻认证";
      }else if(this.hasAuth == 1 || this.hasAuth == 3){
        this.licenseTip = "资料修改中";
      }else if(this.hasAuth == 2){
        this.licenseTip = "已认证";
      }else{
        this.licenseTip = "立刻认证";
      }
    }
  }
};
</script>

<style scoped lang="less">
.doctorlicensed {
  padding-bottom: 1.5rem;
  font-size: 0.3rem;
  .line {
    height: 0.2rem;
    background: #f3f3f5;
  }
  .top {
    height: 0.88rem;
    background: url("../../../../assets/imgs/x_filltop.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.36rem;
    color: #ffffff;
  }
  .content {
    margin: 0 auto;
    padding: 0 0.25rem;
    //width: 6.9rem;
    height: 1rem;
    align-items: center;
    border-bottom: 0.02rem solid #f3f0f3;
    display: flex;
    justify-content: space-between;
    .title {
      //margin-left: 0.15rem;
      color: #777777;
      font-weight: bold;
    }
    .name {
      color: #8e8e8e;
      width: 5.2rem;
      height: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .text {
        text-align: right;
        width: 4.6rem;
        height: 0.4rem;
      }
      .ellipsis {
        height: auto;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      input {
        text-align: right;
        width: 4rem;
        height: 0.4rem;
      }
      input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #8e8e8e;
      }
      img {
        width: 0.16rem;
        height: 0.13rem;
      }
    }
  }
  .point {
    align-items: baseline;
    height: 1.5rem;
    border-bottom: 0.02rem dashed #f3f0f3;
    .hospital {
      color: #8e8e8e;
      width: 4.2rem;
      height: 1rem;
      text-align: right;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ponitImg {
      width: 0.16rem;
      height: 0.13rem;
      img {
        width: 0.16rem;
        height: 0.13rem;
      }
    }
  }
  .fixbtn {
    width: 6.5rem;
    position: fixed;
    bottom: 0;
    padding-left: 0.5rem;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    .btn {
      font-size: 0.32rem;
      width: 3.1rem;
      height: 0.7rem;
      line-height: 0.7rem;
      text-align: center;
    }
    .back {
      color: #00a99d;
      background: url("../../../../assets/imgs/bg_grzx_brn_nor.png") no-repeat;
      background-size: 3.1rem 0.7rem;
    }
    .next {
      color: white;
      background: url("../../../../assets/imgs/bg_grzx_brn_pre.png") no-repeat;
      background-size: 3.1rem 0.7rem;
    }
  }
}
</style>