<template>
  <div class="homepage">
    <div class="header_part_container">
      <header-part
        :memberInfo="dataObj.hjjkMemberDto.hjjkMemberVo"
        :bannerImgListStr="dataObj.hjjkIndexImagesDtoList[0].hjjkIndexImagesVo.indexCarouselImgs"
        :NoticeList="dataObj.hjjkNoticeDto"
        :moduleList="dataObj.hjjkMainfunctionDtoList"
        v-if="dataObj.hjjkMemberDto"
      ></header-part>
    </div>
    <div class="convenitent_medical_container">
      <convenitent-medical
        :serviceList="dataObj.hjjkIndexServiceDtoList"
        :diseaseList="dataObj.hjjkIllnessTestDtoList"
      ></convenitent-medical>
    </div>
    <div class="hot_services_container">
      <hot-services :mealList="dataObj.hjjkIndexSetMealDto"></hot-services>
    </div>
    <div class="health_preservation_container">
      <health-preservation :informationList="dataObj.hjjkHealthPreservationDtoList"></health-preservation>
    </div>
    <div class="quick_appointment_container">
      <quick-appointment></quick-appointment>
    </div>
    <div class="contact_us_container">
      <contact-us></contact-us>
    </div>
    <div class="copy_right_container">
      <copy-right></copy-right>
    </div>
  </div>
</template>
<script>
/* import mixin from "../../mixin/index"; */
import HeaderPart from "./Components/HeaderPart";
import ConvenitentMedical from "./Components/ConvenitentMedical";
import HotServices from "./Components/HotServices";
import HealthPreservation from "./Components/HealthPreservation";
import QuickAppointment from "./Components/QuickAppointment";
import ContactUs from "./Components/ContactUs";
import CopyRight from "../../components/CopyRight";
import { getHomePageData } from "../../api/index";
import axios from 'axios'
export default {
  name: "HomePage",
/*   mixins: [mixin], */
  components: {
    HeaderPart,
    ConvenitentMedical,
    HotServices,
    HealthPreservation,
    QuickAppointment,
    ContactUs,
    CopyRight
  },
  data() {
    return {
      dataObj: {}
    };
  },
  computed: {},
  created() {
    this.initData();
  },
  mounted() {

  },
  methods: {
    initData() {
      getHomePageData().then(
        res => {
          console.log(res);
          this.dataObj = res.data;
        },
        err => {
          /* this.$router.replace({name:'loadfail'}) */
        }
      );
    }
  }
};
</script>

<style lang="less" scoped>
</style>