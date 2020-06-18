import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
  //mode: 'history',
  mode: 'hash',
  routes: [
    {
      name:'bxhome',
      path:'/',
      component:resolve => require(['../views/wxhome/bxhome'],resolve),
      meta:{
        title:'倍熙首页',
        bxhome: 1,
      }
    },
    {
      name:'newsdetail',
      path:'/newsdetail',
      component:resolve => require(['../views/newsInformation/newsdetail'],resolve),
      meta:{
        title:'新闻详情'
      }
    },
    {
      name:'newComments',
      path:'/newComments',
      component:resolve => require(['../views/newsInformation/newComments'],resolve),
      meta:{
        title:'评论列表'
      }
    },
    {
      name:'videoNews',
      path:'/videoNews',
      component:resolve => require(['../views/newsInformation/videoNews'],resolve),
      meta:{
        title:'视频播放',
      }
    },
    {
      name:'myCollection',
      path:'/myCollection',
      component:resolve => require(['../views/newsInformation/myCollection'],resolve),
      meta:{
        title:'我的收藏'
      }
    },
    {
      name:'successPay',
      path:'/successPay',
      component:resolve => require(['../views/newsInformation/successPay'],resolve),
      meta:{
        title:'支付成功'
      }
    },
    {
      name:'newsInfoDetails',
      path:'/newsInfoDetails',
      component:resolve => require(['../views/newsInformation/newsInfoDetails'],resolve),
      meta:{
        title:'新闻详情',
      }
    },
    {
      name:'payOrder',
      path:'/payOrder',
      component:resolve => require(['../views/newsInformation/payOrder'],resolve),
      meta:{
        title:'订单支付'
      }
    },
    {
      name:'articleLists',
      path:'/articleLists',
      component:resolve => require(['../views/newsInformation/articleLists'],resolve),
      meta:{
        title:'文章列表',
      }
    },
    {
      name:'newsInfo',
      path:'/newsInfo',
      component:resolve => require(['../views/newsInformation/newsInfo'],resolve),
      meta:{
        title:'新闻资讯'
      }
    },
    {
      name:'drugQuery',
      path:'/drugQuery',
      component:resolve => require(['../views/managementDynamic/pharmacyInfo/drugQuery'],resolve),
      meta:{
        title:'用药动态'
      }
    },
    {
      name:'historyPharmacy',
      path:'/historyPharmacy',
      component:resolve => require(['../views/managementDynamic/pharmacyInfo/historyPharmacy'],resolve),
      meta:{
        title:'历史修改'
      }
    },
    {
    name:'indicatorDetails',
    path:'/indicatorDetails',
    component:resolve => require(['../views/managementDynamic/healthIndicator/indicatorDetails'],resolve),
    meta:{
      title:'心率指标详情'
    }
  },
    {
    name:'newsdetails',
    path:'/newsdetails',
    component:resolve => require(['../views/wxhome/newsDetails/newsDetails'],resolve),
    meta:{
      title:'新闻详情',
      background:1
    }
  },
    {
      name:'historyHealth',
      path:'/historyHealth',
      component:resolve => require(['../views/managementDynamic/healthIndicator/historyHealth'],resolve),
      meta:{
        title:'指标历史记录'
      }
    },
    {
      name:'fillProposal',
      path:'/fillProposal',
      component:resolve => require(['../views/managementDynamic/managementAdvice/fillProposal'],resolve),
      meta:{
        title:'填写建议'
      }
    },
    {
      name:'positionDetails',
      path:'/positionDetails',
      component:resolve => require(['../views/managementDynamic/symptomsFeel/positionDetails'],resolve),
      meta:{
        title:'状况详情'
      }
    },
    {
      name:'symptomsFeelAdvices',
      path:'/symptomsFeelAdvices',
      component: resolve => require(['../views/managementDynamic/symptomsFeel/symptomsFeelAdvices'], resolve),
      meta:{
        title: '健康状况建议'
      }
    },
    {
      name:'manageCheckReport',
      path:'/manageCheckReport',
      component: resolve => require(['../views/managementDynamic/manageDynamic/manageCheckReport'], resolve),
      meta:{
        title: '检查报告'
      }
    },
    {
      name:'manageDynamic',
      path:'/manageDynamic',
      component: resolve => require(['../views/managementDynamic/manageDynamic/manageDynamic'], resolve),
      meta:{
        title: '会员动态'
      }
    },
    {
      name:'manageCheckAdvices',
      path:'/manageCheckAdvices',
      component: resolve => require(['../views/managementDynamic/manageDynamic/manageCheckAdvices'], resolve),
      meta:{
        title: '会员动态'
      }
    },
    // {
    //   name:'manageMember',
    //   path:'/manageMember',
    //   component: resolve => require(['../views/managementDynamic/manageDynamic/manageMember'], resolve),
    //   meta:{  
    //     title: '会员管理'
    //   }
    // },
    {
      name: 'myArchives',
      path: '/myarchives',
      component: resolve => require(['../views/myArchives/myArchives'], resolve),
      meta: {
        title: '我的档案'
      }
    },
    {
      name: 'myCoupon',
      path: '/myCoupon',
      component: resolve => require(['../views/myCoupon/myCoupon'], resolve),
      meta: {
        title: '我的优惠券'
      }
    },
    {
      name: 'privateArchives',
      path: '/privatearchives',
      component: resolve => require(['../views/myArchives/privateArchives/privateArchives'], resolve),
      meta: {
        title: '私医档案'
      },
      children: [
        {
          name: 'diseaseCourse',
          path: '',
          component: resolve => require(['../views/myArchives/privateArchives/diseaseCourse/diseaseCourse'], resolve),
        },
        {
          name: 'consultRecord',
          path: 'consultrecord',
          component: resolve => require(['../views/myArchives/privateArchives/consultRecord/consultRecord'], resolve),
        },
        {
          name: 'doorsCare',
          path: 'doorscare',
          component: resolve => require(['../views/myArchives/privateArchives/doorsCare/doorsCare'], resolve),
        },
      ]
    },
    {
      name: 'doorscareDetail',
      path: '/doorscaredetail',
      component: resolve => require(['../views/doorscareDetail/doorscareDetail'], resolve),
      meta: {
        title: '病情详情'
      }
    },
    {
      name: 'diseaseDetail',
      path: '/diseasedetail',
      component: resolve => require(['../views/diseaseDetail/diseaseDetail'], resolve),
      meta: {
        title: '病情详情'
      }
    },
    {
      name: 'medicalRecord',
      path: '/medicalrecord',
      component: resolve => require(['../views/myArchives/medicalRecord/medicalRecord'], resolve),
      meta: {
        title: '就医记录'
      }
    },
    {
      name: 'outpatientDetails',
      path: '/outpatientdetails',
      component: resolve => require(['../views/myArchives/medicalRecord/outpatientDetails/outpatientDetails'], resolve),
      meta: {
        title: '门诊详情'
      }
    },
    {
      name: 'prescriptionDetail',
      path: '/prescriptiondetail',
      component: resolve => require(['../views/myArchives/medicalRecord/outpatientDetails/prescriptionDetail/prescriptionDetail'], resolve),
      meta: {
        title: '处方详情'
      }
    },
    {
      name: 'checklistDetail',
      path: '/checklistdetail',
      component: resolve => require(['../views/myArchives/medicalRecord/outpatientDetails/checklistDetail/checklistDetail'], resolve),
      meta: {
        title: '检查单详情'
      }
    },
    {
      name: 'inspectionDetail',
      path: '/inspectiondetail',
      component: resolve => require(['../views/myArchives/medicalRecord/outpatientDetails/inspectionDetail/inspectionDetail'], resolve),
      meta: {
        title: '检验单详情'
      }
    },
    {
      name: 'quickAppoint',
      path: '/quickappoint',
      component: resolve => require(['../views/quickAppoint/quickAppoint'], resolve),
      meta: {
        title: '一键预约'
      }
    },
    {
      name: 'serviceExplain',
      path: '/serviceexplain',
      component: resolve => require(['../views/serviceExplain/serviceExplain'], resolve),
    },
    {
      name: 'sendWay',
      path: '/sendway',
      component: resolve => require(['../views/sendWay/sendWay'], resolve),
      meta: {
        title: '证件递交方式'
      }
    },
    {
      name: 'returnWay',
      path: '/returnway',
      component: resolve => require(['../views/returnWay/returnWay'], resolve),
      meta: {
        title: '证件递还方式'
      }
    },
    {
      name: 'selectHospital',
      path: '/selecthospital',
      component: resolve => require(['../views/selectHospital/selectHospital'], resolve),
      meta: {
        title: '选择医院',
        background: 1
      }
    },
    {
      name: 'selectDepartment',
      path: '/selectdepartment',
      component: resolve => require(['../views/selectDepartment/selectDepartment'], resolve),
      meta: {
        title: '选择科室'
      }
    },
    {
      name: 'outpatientRegistrate',
      path: '/outpatientregistrate',
      component: resolve => require(['../views/outpatientRegistrate/outpatientRegistrate'], resolve),
      meta: {
        title: '挂号服务'
      }
    },
    {
      name: 'doorsMedicine',
      path: '/doorsMedicine',
      component: resolve => require(['../views/appointService/doorsMedicine/doorsMedicine'], resolve),
      meta: {
        title: '送药上门'
      }
    },
    {
      name: 'doorsCheck',
      path: '/doorsCheck',
      component: resolve => require(['../views/appointService/doorsCheck/doorsCheck'], resolve),
      meta: {
        title: '上门检查',
        background: 1
      }
    },
    {
      name: 'doorsPicc',
      path: '/doorsPicc',
      component: resolve => require(['../views/appointService/doorsPicc/doorsPicc'], resolve),
      meta: {
        title: '上门更换Picc',
        background: 1
      }
    },
    {
      name: 'doorsCatheter',
      path: '/doorsCatheter',
      component: resolve => require(['../views/appointService/doorsCatheter/doorsCatheter'], resolve),
      meta: {
        title: '上门插导尿管',
        background: 1
      }
    },
    {
      name: 'doorsChangedrug',
      path: '/doorsChangedrug',
      component: resolve => require(['../views/appointService/doorsChangedrug/doorsChangedrug'], resolve),
      meta: {
        title: '上门换药',
        background: 1
      }
    },
    {
      name: 'doorsDrawblood',
      path: '/doorsDrawblood',
      component: resolve => require(['../views/appointService/doorsDrawblood/doorsDrawblood'], resolve),
      meta: {
        title: '上门抽血',
        background: 1
      }
    },
    {
      name: 'doorsInjection',
      path: '/doorsInjection',
      component: resolve => require(['../views/appointService/doorsInjection/doorsInjection'], resolve),
      meta: {
        title: '上门注射',
        background: 1
      }
    },
    {
      name: 'doorsPhysical',
      path: '/doorsPhysical',
      component: resolve => require(['../views/appointService/doorsPhysical/doorsPhysical'], resolve),
      meta: {
        title: '上门康复理疗',
        background: 1
      }
    },
    {
      name: 'doorsConsult',
      path: '/doorsConsult',
      component: resolve => require(['../views/appointService/doorsConsult/doorsConsult'], resolve),
      meta: {
        title: '医生上门咨询',
        background: 1
      }
    },
    {
      name: 'reportUnscramble',
      path: '/reportUnscramble',
      component: resolve => require(['../views/appointService/reportUnscramble/reportUnscramble'], resolve),
      meta: {
        title: '报告解读',
        background: 1
      }
    },
    {
      name: 'expertAppoint',
      path: '/expertAppoint',
      component: resolve => require(['../views/appointService/expertAppoint/expertAppoint'], resolve),
      meta: {
        title: '专家预约特诊',
        background: 1
      }
    },
    {
      name: 'transportService',
      path: '/transportService',
      component: resolve => require(['../views/appointService/transportService/transportService'], resolve),
      meta: {
        title: '接送服务',
        background: 1
      }
    },
    {
      name: 'nurseList',
      path: '/nurseList',
      component: resolve => require(['../views/nurseList/nurseList'], resolve),
      meta: {
        title: '护士列表',
        background: 1
      }
    },
    {
      name: 'doctorList',
      path: '/doctorList',
      component: resolve => require(['../views/doctorList/doctorList'], resolve),
      meta: {
        title: '医生列表',
        background: 1
      }
    },
    {
      name: 'familyMember',
      path: '/familyMember',
      component: resolve => require(['../views/familyMember/familyMember'], resolve),
      meta: {
        title: '家庭成员',
        background: 1
      }
    },
    {
      name: 'addMember',
      path: '/addMember',
      component: resolve => require(['../views/addMember/addMember'], resolve),
      meta: {
        title: '新增成员',
        background: 1
      }
    },
    {
      name: 'editMember',
      path: '/editMember',
      component: resolve => require(['../views/editMember/editMember'], resolve),
      meta: {
        title: '编辑成员',
        background: 1
      }
    },
    {
      name: 'therapistList',
      path: '/therapistList',
      component: resolve => require(['../views/therapistList/therapistList'], resolve),
      meta: {
        title: '理疗师列表',
        background: 1
      }
    },
    {
      name: 'healthInfo',
      path: '/healthinfo',
      component: resolve => require(['../views/healthInfo/healthInfo'], resolve),
      meta: {
        title: '健康资讯'
      }
    },
    {
      name: 'healthInfoDetail',
      path: '/healthInfodetail',
      component: resolve => require(['../views/healthInfoDetail/healthInfoDetail'], resolve),
      meta: {
        title: '健康资讯详情'
      }
    },
    {
      name: 'addressAdd',
      path: '/addressadd',
      component: resolve => require(['../views/address/addressAdd/addressAdd'], resolve),
      meta: {
        title: '新增地址'
      }
    },
    {
      name: 'addressEdit',
      path: '/addressedit',
      component: resolve => require(['../views/address/addressEdit/addressEdit'], resolve),
      meta: {
        title: '编辑地址'
      }
    },
    {
      name: 'addressManage',
      path: '/addressmanage',
      component: resolve => require(['../views/address/addressManage/addressManage'], resolve),
      meta: {
        title: '常用地址'
      }
    },


    {
      name: 'medicalTeam',
      path: '/medicalteam',
      component: resolve => require(['../views/medicalTeam/medicalTeam'], resolve),
      meta: {
        title: '我的医护团队',
        background: 1
      }
    },
    {
      name: 'doctorInfo',
      path: '/doctorinfo',
      component: resolve => require(['../views/medicalTeam/doctorInfo'], resolve),
      meta: {
        title: '医生详情'
      }
    },
    {
      name: 'stewardInfo',
      path: '/stewardinfo',
      component: resolve => require(['../views/medicalTeam/stewardInfo'], resolve),
      meta: {
        title: '管家详情'
      }
    },
    {
      name: 'nurseInfo',
      path: '/nurseinfo',
      component: resolve => require(["../views/medicalTeam/nurseInfo"], resolve),
      meta: {
        title: '护士详情'
      }
    },
    {
      name: 'consultWeb',
      path: '/consultweb',
      component: resolve => require(["../views/medicalTeam/consultWeb"], resolve),
      meta: {
        title: '咨询',
        background: 1
      }
    },
    {
      name: 'testChart',
      path: '/testchart',
      component: resolve => require(["../views/medicalTeam/testChart"], resolve),
      meta: {
        title: 'test'
      }
    },
    {
      name: 'managementDynamic',
      path: '/managementdynamic',
      component: resolve => require(["../views/managementDynamic/managementDynamic"], resolve),
      meta: {
        title: '管理动态'
      }
    },
    {
      name: 'dynamicBar',
      path: '/dynamicbar',
      component: resolve => require(["../views/managementDynamic/dynamicBar"], resolve),
      meta: {
        title: '管理动态'
      }
    },
    {
      name: 'adviceHistory',
      path: '/advicehistory',
      component: resolve => require(["../views/managementDynamic/managementAdvice/adviceHistory"], resolve),
      meta: {
        title: '管理建议历史记录',
        hasSearch: 1
      }
    },
    {
      name: 'adviceInfo',
      path: '/adviceinfo',
      component: resolve => require(["../views/managementDynamic/managementAdvice/adviceInfo"], resolve),
      meta: {
        title: '建议详情',
        background: 1
      }
    },
    {
      name: 'reportHistory',
      path: '/reporthistory',
      component: resolve => require(["../views/managementDynamic/managementReport/reportHistory"], resolve),
      meta: {
        title: '报告历史记录',
        hasSearch: 1
      }
    },
    {
      name: 'reportCheckInfo',
      path: '/reportcheckinfo',
      component: resolve => require(["../views/managementDynamic/managementReport/reportCheckInfo"], resolve),
      meta: {
        title: '检查单'
      }
    },
    {
      name: 'reportInspectInfo',
      path: '/reportinspectinfo',
      component: resolve => require(["../views/managementDynamic/managementReport/reportInspectInfo"], resolve),
      meta: {
        title: '检验单'
      }
    },
    {
      name: 'pharmacyHistory',
      path: '/pharmacyhistory',
      component: resolve => require(["../views/managementDynamic/pharmacyInfo/pharmacyHistory"], resolve),
      meta: {
        title: '用药历史记录'
      }
    },
    {
      name: 'adjustMedical',
      path: '/adjustmedical',
      component: resolve => require(["../views/managementDynamic/pharmacyInfo/adjustMedical"], resolve),
      meta: {
        title: '调整用药动态'
      }
    },
    {
      name: 'healthIndicator',
      path: '/healthIndicator',
      component: resolve => require(["../views/managementDynamic/healthIndicator/healthIndicator"], resolve),
      meta: {
        title: '心率'
      }
    },
    {
      name: 'indicatorInfo',
      path: '/indicatorinfo',
      component: resolve => require(["../views/managementDynamic/healthIndicator/indicatorInfo"], resolve),
      meta: {
        title: '心率'
      }
    },
    {
      name: 'upIndicator',
      path: '/upindicator',
      component: resolve => require(["../views/managementDynamic/healthIndicator/upIndicator"], resolve),
      meta: {
        title: ''
      }
    },
    {
      name: 'orderList',
      path: '/orderlist',
      component: resolve => require(["../views/orderList/orderList"], resolve),
      meta: {
        title: '订单详情'
      }
    },
    {
      name: 'orderInfo',
      path: '/orderinfo',
      component: resolve => require(["../views/orderList/orderInfo"], resolve),
      meta: {
        title: '订单详情'
      }
    },
    {
      name: 'serviceList',
      path: '/servicelist',
      component: resolve => require(["../views/serviceList/serviceList"], resolve),
      meta: {
        title: '我的服务'
      }
    },
    {
      name: 'serviceInfo',
      path: '/serviceinfo',
      component: resolve => require(["../views/serviceList/serviceInfo"], resolve),
      meta: {
        title: '服务单详情'
      }
    },
    {
      name: 'userAgreement',
      path: '/useragreement',
      component: resolve => require(["../views/loginWord/userAgreement"], resolve),
      meta: {
        title: '倍熙私医用户协议',
        background: 1
      }
    },
    {
      name: 'privacyPolicy',
      path: '/privacypolicy',
      component: resolve => require(["../views/loginWord/privacyPolicy"], resolve),
      meta: {
        title: '隐私权保护政策',
        background: 1
      }
    },
    {
      name: 'payment',
      path: '/payment',
      component: resolve => require(["../views/orderList/payment"], resolve),
      meta: {
        title: '确认支付'
      }
    },
    {
      name: 'wxhome',
      path: '/wxhome',
      component: resolve => require(['../views/wxhome/wxhome'], resolve),
      meta: {
        title: '倍熙私人医生',
        wxhome: 1,
        background: 1,
      }
    },
    {
      name: 'lbinfodetail',
      path: '/lbinfodetail',
      component: resolve => require(['../views/wxhome/yqinfo/lbinfodetail'], resolve),
      meta: {
        title: '详情',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'gginfo',
      path: '/gginfo',
      component: resolve => require(['../views/wxhome/yqinfo/gginfo'], resolve),
      meta: {
        title: '公告详情',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'filljump',
      path: '/filljump',
      component: resolve => require(['../views/wxhome/fillintable/filljump'], resolve),
      meta: {
        title: '跳转页',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1
      }
    },
    {
      name: 'fillbasic',
      path: '/fillbasic',
      component: resolve => require(['../views/wxhome/fillintable/fillbasic'], resolve),
      meta: {
        title: '新冠肺炎免费咨询',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1
      }
    },
    {
      name: 'fillillness',
      path: '/fillillness',
      component: resolve => require(['../views/wxhome/fillintable/fillillness'], resolve),
      meta: {
        title: '新冠肺炎免费咨询',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1
      }
    },
    {
      name: 'medicalinfo',
      path: '/medicalinfo',
      component: resolve => require(['../views/wxhome/fillintable/medicalinfo'], resolve),
      meta: {
        title: '新冠肺炎免费咨询',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1
      }
    },
    {
      name: 'fillsass',
      path: '/fillsass',
      component: resolve => require(['../views/wxhome/fillintable/fillsass'], resolve),
      meta: {
        title: '新冠肺炎免费咨询',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1
      }
    },
    {
      name: 'fillphone',
      path: '/fillphone',
      component: resolve => require(['../views/wxhome/fillintable/fillphone'], resolve),
      meta: {
        title: '新冠肺炎免费咨询',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1
      }
    },
    {
      name: 'wxdoctorlist',
      path: '/wxdoctorlist',
      component: resolve => require(['../views/wxhome/doctorlist/wxdoctorlist'], resolve),
      meta: {
        title: '医生列表',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1
      }
    },
    {
      name: 'wxdoctorinfo',
      path: '/wxdoctorinfo',
      component: resolve => require(['../views/wxhome/doctorlist/wxdoctorinfo'], resolve),
      meta: {
        title: '医生详情',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1
      }
    },
    {
      name: 'myMessage',
      path: '/myMessage',
      component: resolve => require(['../views/wxhome/menubar/myMessage'], resolve),
      meta: {
        title: '我的消息',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'formConsult',
      path: '/formConsult',
      component: resolve => require(['../views/wxhome/formConsult/formConsult'], resolve),
      meta: {
        title: '新冠肺炎咨询',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'formConsultDetail',
      path: '/formConsultDetail',
      component: resolve => require(['../views/wxhome/formConsultDetail/formConsultDetail'], resolve),
      meta: {
        title: '咨询详情',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'wxconsultuser',
      path: '/wxconsultuser',
      component: resolve => require(['../views/wxhome/wxconsult/wxconsultuser'], resolve),
      meta: {
        title: '咨询回复',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
      }
    },
    {
      name: 'wxconsultdoctor',
      path: '/wxconsultdoctor',
      component: resolve => require(['../views/wxhome/wxconsult/wxconsultdoctor'], resolve),
      meta: {
        title: '咨询回复',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
      }
    },
    {
      name: 'wxconsultphone',
      path: '/wxconsultphone',
      component: resolve => require(['../views/wxhome/wxconsult/wxconsultphone'], resolve),
      meta: {
        title: '通话',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
      }
    },
    {
      name: 'userlogin',
      path: '/userlogin',
      component: resolve => require(['../views/wxhome/menubar/userlogin/userlogin'], resolve),
      meta: {
        title: '登录',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1
      }
    },
    {
      name: 'userforget',
      path: '/userforget',
      component: resolve => require(['../views/wxhome/menubar/userlogin/userforget'], resolve),
      meta: {
        title: '忘记密码',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
      }
    },
    {
      name: 'wxmodifypassword',
      path: '/wxmodifypassword',
      component: resolve => require(['../views/wxhome/menubar/userlogin/wxmodifypassword'], resolve),
      meta: {
        title: '忘记密码',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
      }
    },
    {
      name: 'yqinfolist',
      path: '/yqinfolist',
      component: resolve => require(['../views/wxhome/yqinfo/yqinfolist'], resolve),
      meta: {
        title: '新闻资讯',
        headerColor: '#58B2AC',
        noIcon: 1,
        background: 1,
      }
    },
    {
      name: 'yqinfodetail',
      path: '/yqinfodetail',
      component: resolve => require(['../views/wxhome/yqinfo/yqinfodetail'], resolve),
      meta: {
        title: '新闻资讯',
        headerColor: '#58B2AC',
        noIcon: 1,
      }
    },
    {
      name: 'CertificationInstruction',
      path: '/CertificationInstruction',
      component: resolve => require(['../views/wxhome/doctor/CertificationInstruction/CertificationInstruction'], resolve),
      meta: {
        title: '认证须知',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1,
      }
    },
    {
      name: 'uploadCertificate',
      path: '/uploadCertificate',
      component: resolve => require(['../views/wxhome/doctor/CertificationInstruction/uploadCertificate'], resolve),
      meta: {
        title: '上传执业证书',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1,
      }
    },
    {
      name: 'uploadCardFront',
      path: '/uploadCardFront',
      component: resolve => require(['../views/wxhome/doctor/CertificationInstruction/uploadCardFront'], resolve),
      meta: {
        title: '上传身份证件',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1,
      }
    },
    {
      name: 'uploadCardBack',
      path: '/uploadCardBack',
      component: resolve => require(['../views/wxhome/doctor/CertificationInstruction/uploadCardBack'], resolve),
      meta: {
        title: '上传身份证件',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1,
      }
    },
    {
      name: 'doctorphone',
      path: '/doctorphone',
      component: resolve => require(['../views/wxhome/doctor/doctorJoin/doctorphone'], resolve),
      meta: {
        title: '注册',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'doctorperinfo',
      path: '/doctorperinfo',
      component: resolve => require(['../views/wxhome/doctor/doctorJoin/doctorperinfo'], resolve),
      meta: {
        title: '注册',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      // 与完善执业信息同一个页面
      name: 'doctorlicensed',
      path: '/doctorlicensed',
      component: resolve => require(['../views/wxhome/doctor/doctorJoin/doctorlicensed'], resolve),
      meta: {
        title: '注册',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'practiceExperience',
      path: '/practiceExperience',
      component: resolve => require(['../views/wxhome/doctor/doctorJoin/practiceExperience'], resolve),
      meta: {
        title: '执业经历',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'professionalInfo',
      path: '/professionalInfo',
      component: resolve => require(['../views/wxhome/doctor/doctorJoin/professionalInfo'], resolve),
      meta: {
        title: '专业擅长',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'practicePoints',
      path: '/practicePoints',
      component: resolve => require(['../views/wxhome/doctor/doctorJoin/practicePoints'], resolve),
      meta: {
        title: '设置执业点',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {

      name: 'majorfield',
      path: '/majorfield',
      component: resolve => require(['../views/wxhome/doctor/doctorJoin/majorfield'], resolve),
      meta: {
        title: '专业方向',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    // {

    //   name: 'getMajorItemList',
    //   path: '/getMajorItemList',
    //   component: resolve => require(['../views/wxhome/doctor/doctorlicensed/getMajorItemList'], resolve),
    //   meta: {
    //     title: '专业',
    //     background: 1,
    //     headerColor: '#58B2AC',
    //     noIcon: 1
    //   }
    // },
    {
      name: 'doctorserve',
      path: '/doctorserve',
      component: resolve => require(['../views/wxhome/doctor/doctorJoin/doctorserve'], resolve),
      meta: {
        title: '注册',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'doctorsubmit',
      path: '/doctorsubmit',
      component: resolve => require(['../views/wxhome/doctor/doctorJoin/doctorsubmit'], resolve),
      meta: {
        title: '注册',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'myConsult',
      path: '/myConsult',
      component: resolve => require(['../views/wxhome/myConsult/myConsult'], resolve),
      meta: {
        title: '我的咨询',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1
      }
    },
    {
      name: 'doctorLogin',
      path: '/doctorLogin',
      component: resolve => require(['../views/wxhome/menubar/doctorLogin/doctorLogin'], resolve),
      meta: {
        title: '登录',
        background: 1,
        noIcon: 1,
        noHeader: 1,
      }
    },
    {
      name: 'doctorHomepage',
      path: '/doctorHomepage',
      component: resolve => require(['../views/wxhome/doctorHomepage/doctorHomepage'], resolve),
      meta: {
        title: '倍熙私人医生医生版',
        wxhome: 1,
        background: 1,
        noConsult: 1,
        headerColor: '#58B2AC',
      }
    },
    {
      name: 'doctorWork',
      path: '/doctorWork',
      component: resolve => require(['../views/wxhome/doctorHomepage/doctorWork/doctorWork'], resolve),
      meta: {
        title: '我的工作站',
        background: 1,
        noConsult: 1,
        headerColor: '#58B2AC',
        noHeader: 1,
      }
    },
    {
      name: 'doctorPrivate',
      path: '/doctorPrivate',
      component: resolve => require(['../views/wxhome/doctorHomepage/doctorWork/privateService/doctorPrivate'], resolve),
      meta: {
        title: '私医服务',
        background: 1,
        noConsult: 1,
        headerColor: '#58B2AC',
        noHeader: 1,
      }
    },
    {
      name: 'slowtype',
      path: '/slowtype',
      component: resolve => require(['../views/wxhome/slowdisease/slowtype'], resolve),
      meta: {
        title: '慢病免费咨询',
        background: 1,
        noIcon: 1,
        noHeader: 1,
      }
    },
    {
      name: 'doctorinfoslowtype',
      path: '/doctorinfoslowtype',
      component: resolve => require(['../views/wxhome/slowdisease/doctorinfoslowtype'], resolve),
      meta: {
        title: '慢病咨询',
        background: 1,
        noIcon: 1,
        noHeader: 1,
      }
    },
    {
      name: 'slowtable',
      path: '/slowtable',
      component: resolve => require(['../views/wxhome/slowdisease/slowtable'], resolve),
      meta: {
        title: '慢病免费咨询',
        background: 1,
        noIcon: 1,
        noHeader: 1,
      }
    }, {
      name: 'slowbasic',
      path: '/slowbasic',
      component: resolve => require(['../views/wxhome/slowdisease/slowbasic'], resolve),
      meta: {
        title: '慢病免费咨询',
        background: 1,
        noIcon: 1,
        noHeader: 1,
      }
    }, {
      name: 'slowphone',
      path: '/slowphone',
      component: resolve => require(['../views/wxhome/slowdisease/slowphone'], resolve),
      meta: {
        title: '慢病免费咨询',
        background: 1,
        noIcon: 1,
        noHeader: 1,
      }
    },
    {
      name: 'slowconsultinfo',
      path: '/slowconsultinfo',
      component: resolve => require(['../views/wxhome/slowdisease/slowconsultinfo'], resolve),
      meta: {
        title: '慢病免费咨询',
        background: 1,
        noIcon: 1,
        noHeader: 1,
      }
    },
    {
      name: 'selectMajor',
      path: '/selectMajor',
      component: resolve => require(['../views/wxhome/doctor/doctorCertification/selectMajor'], resolve),
      meta: {
        title: '选择专业',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }

    },
    {
      name: 'joinWelfare',
      path: '/joinwelfare',
      component: resolve => require(['../views/wxhome/doctor/joinWelfare/joinWelfare'], resolve),
      meta: {
        title: '加入微公益',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'personalInfo',
      path: '/personalInfo',
      component: resolve => require(['../views/wxhome/personalInfo/personalInfo'], resolve),
      meta: {
        title: '个人信息',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'personalInfoedit',
      path: '/personalInfoedit',
      component: resolve => require(['../views/wxhome/personalInfoedit/personalInfoedit'], resolve),
      meta: {
        title: '个人信息修改',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'doctorPersonalInfo',
      path: '/doctorPersonalInfo',
      component: resolve => require(['../views/wxhome/doctor/doctorInfo/doctorInfo'], resolve),
      meta: {
        title: '基本资料',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'doctorInfophone',
      path: '/doctorInfophone',
      component: resolve => require(['../views/wxhome/doctor/doctorInfo/doctorInfophone'], resolve),
      meta: {
        title: '修改手机号码',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'doctorInfoaddress',
      path: '/doctorInfoaddress',
      component: resolve => require(['../views/wxhome/doctor/doctorInfo/doctorInfoaddress'], resolve),
      meta: {
        title: '编辑地址',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1,
        noHeader: 1,
      }
    },
    {
      name: 'doctorinfolicensed',
      path: '/doctorinfolicensed',
      component: resolve => require(['../views/wxhome/doctor/doctorlicensed/doctorinfolicensed'], resolve),
      meta: {
        title: '完善执业信息',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'doctorPersonalInfoEdit',
      path: '/doctorPersonalInfoEdit',
      component: resolve => require(['../views/wxhome/doctor/doctorInfoedit/doctorInfoedit'], resolve),
      meta: {
        title: '个人资料修改',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'wxpersonalcenter',
      path: '/wxpersonalcenter',
      component: resolve => require(['../views/wxhome/menubar/wxpersonalcenter'], resolve),
      meta: {
        title: '个人中心',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'wxdoctorreply',
      path: '/wxdoctorreply',
      component: resolve => require(['../views/wxhome/wxconsult/wxdoctorreply'], resolve),
      meta: {
        title: '咨询回复',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    }, {
      name: 'userupdinfo',
      path: '/userupdinfo',
      component: resolve => require(['../views/wxhome/menubar/userlogin/userupdinfo'], resolve),
      meta: {
        title: '完善基本信息',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    }, {
      name: 'doctorResearch',
      path: '/doctorResearch',
      component: resolve => require(['../views/wxhome/doctor/doctorResearch/doctorResearch'], resolve),
      meta: {
        title: '医生意愿调查表',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'Mine',
      path: '/Mine',
      component: resolve => require(['../backup/Mine/Mine'], resolve),
      meta: {
        title: '咨询回复',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'aboutinfo',
      path: '/aboutinfo',
      component: resolve => require(['../views/wxhome/menubar/aboutinfo'], resolve),
      meta: {
        title: '倍熙私医',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'test',
      path: '/test',
      component: resolve => require(['../views/wxhome/test'], resolve),
      meta: {
        title: 'test',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noBack: 1
      }
    },
    {
      name: 'iframePage',
      path: '/iframePage',
      component: resolve => require(['../views/wxhome/iframePage/iframePage'], resolve),
      meta: {
        title: '',
        background: 1,
        headerColor: '#58B2AC',
        noIcon: 1,
        noHeader: 1
      }
    },
    {
      name: 'userConsult',
      path: '/userConsult',
      component: resolve => require(['../views/wxhome/menubar/userConsult/userConsult'], resolve),
      meta: {
        title: '我的咨询',
        background: 1,
        gradualHeader: 1,
        noIcon: 1,
      }
    },
    {
      name: 'doctorPersonal',
      path: '/doctorPersonal',
      component: resolve => require(['../views/wxhome/doctor/doctorPersonal'], resolve),
      meta: {
        title: '个人中心',
        background: 1,
        gradualHeader: 1,
        noIcon: 1,
      }
    },
    {
      name:'memberData',
      path:'/memberData',
      component: resolve => require(['../views/wxhome/doctorHomepage/memberData/memberData'], resolve),
      meta: {
        title: '会员资料',
        background: 1,
        gradualHeader: 1,
        noIcon: 1,
      }
    },
    {
      name:'memberInfo',
      path:'/memberInfo',
      component: resolve => require(['../views/wxhome/doctorHomepage/memberData/memberInfo'], resolve),
      meta: {
        title: '个人资料',
        background: 1,
        gradualHeader: 1,
        noIcon: 1,
      }
    },
    {
      name:'memberSpecialManagement',
      path:'/memberSpecialManagement',
      component: resolve => require(['../views/wxhome/doctorHomepage/memberData/memberSpecialManagement'], resolve),
      meta: {
        title: '专项管理',
        background: 1,
        gradualHeader: 1,
        noIcon: 1,
      }
    },
    {
      name:'memberSpecialManagementInfo',
      path:'/memberSpecialManagementInfo',
      component: resolve => require(['../views/wxhome/doctorHomepage/memberData/memberSpecialManagementInfo'], resolve),
      meta: {
        title: '专项管理',
        background: 1,
        gradualHeader: 1,
        noIcon: 1,
      }
    },
    {
      name: 'scanner',
      path: '/scanner',
      component: resolve => require(['../views/wxhome/scanner'], resolve),
      meta: {
        title: 'ttt',
      }
    },
    {
      name: 'testdemo',
      path: '/testdemo',
      component: resolve => require(['../views/wxhome/testdemo'], resolve),
      meta: {
        title: 'demo',
      }
    },
  ]
})
