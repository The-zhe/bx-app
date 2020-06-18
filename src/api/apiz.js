import store from '../../vuex/store'
import { getData, postData, getListData, postDataWithQuery } from '../utils/requestFunc'
var memberId = 1
var userName = '用户A'
function getUserId() {
  var userId;
  var isDoctor = Boolean(Number(localStorage.getItem('isDoctor')))
  if (isDoctor) {
    userId = localStorage.getItem('doctorId')
  } else {
    userId = localStorage.getItem('userId')
  }
  return userId
}
function getUserType() {
  var isDoctor = Boolean(Number(localStorage.getItem('isDoctor')))

  return isDoctor ? '1' : '0'
}
/* if(process.env.NODE_ENV === 'development'){
  userId=1
  if(isDoctor){
    userId = localStorage.getItem('doctorId')
    }else{
    userId = localStorage.getItem('userId')
    }
}else{
  if(isDoctor){
  userId = localStorage.getItem('doctorId')
  }else{
  userId = localStorage.getItem('userId')
  }
} */

/* 就医记录-门诊列表 */
export function getOutpatientList(startTime, endTime) {
  let query = {
    w: [{ k: "memberId", v: memberId, m: "eq" }],
    //{ k: "date", v: "", m: "GE" }, 2019-05-12 00:00:00
    // { k: "date", v: "", m: "LE" }],2019-06-00 23:59:59
    o: [],
    p: { n: 1, s: 10 }
  }
  if (startTime.length > 9) {
    query.w.push({ k: "date", v: startTime, m: "GE" })
  }
  if (endTime.length > 9) {
    query.w.push({ k: "date", v: endTime, m: "LE" })
  }
  return getListData('/hjjk/recordOpc/page', query)
}
/* 就医记录-检查列表 */
export function getOutpatientCheckList(startTime, endTime) {
  let query = {
    w: [{ k: "memberId", v: memberId, m: "eq" }],
    //{ k: "date", v: "", m: "GE" }, 2019-05-12 00:00:00
    // { k: "date", v: "", m: "LE" }],2019-06-00 23:59:59
    o: [],
    p: { n: 1, s: 10 }
  }
  if (startTime.length > 9) {
    query.w.push({ k: "date", v: startTime, m: "GE" })
  }
  if (endTime.length > 9) {
    query.w.push({ k: "date", v: endTime, m: "LE" })
  }
  return getListData('/hjjk/recordExam/appPage', query)
}
/* 就医记录-检验列表 */
export function getOutpatientInspectionList(startTime, endTime) {
  let query = {
    w: [{ k: "memberId", v: memberId, m: "eq" }],
    //{ k: "date", v: "", m: "GE" }, 2019-05-12 00:00:00
    // { k: "date", v: "", m: "LE" }],2019-06-00 23:59:59
    o: [],
    p: { n: 1, s: 10 }
  }
  if (startTime.length > 9) {
    query.w.push({ k: "date", v: startTime, m: "GE" })
  }
  if (endTime.length > 9) {
    query.w.push({ k: "date", v: endTime, m: "LE" })
  }
  return getListData('/hjjk/recordInsp/appPage', query)
}
/* 门诊详情-门诊收费 */
export function getChargeList(opcId) {
  let query = {
    w: [{ k: "opcId", v: opcId, m: "eq" }],
    o: [],
    p: { n: 1, s: 10 }
  }
  return getListData('/hjjk/recordOpcFee/appList', query)
}
/* 门诊详情-处方信息列表 */
export function getPrescriptionList(opcId) {
  let query = {
    w: [{ k: "opcId", v: opcId, m: "eq" }],
    o: [],
    p: { n: 1, s: 10 }
  }
  return getListData('/hjjk/recordOpcPres/appList', query)
}
/* 门诊详情-检查单列表 */
export function getCheckList(opcId) {
  let query = {
    w: [{ k: "opcId", v: opcId, m: "eq" }],
    o: [],
    p: { n: 1, s: 10 }
  }
  return getListData('/hjjk/recordExam/appPage', query)
}
/* 门诊详情-检验单列表 */
export function getInspectionList(opcId) {
  let query = {
    w: [{ k: "opcId", v: opcId, m: "eq" }],
    o: [],
    p: { n: 1, s: 10 }
  }
  return getListData('/hjjk/recordInsp/appPage', query)
}
/* 检查单详情 */
export function getCheckListDetail(id) {
  return getData('/hjjk/recordExam/info', {
    id
  })
}
/* 检验单详情 */
export function getInspectionListDetail(id) {
  return getData('/hjjk/recordInsp/info', {
    id
  })
}
/* 检验单详情-检验单列表 */
export function getInspectionDetailList(inspId) {
  let query = {
    w: [{ k: "inspId", v: inspId, m: "eq" }],
    o: [],
    p: { n: 1, s: 10 }
  }
  return getListData('/hjjk/recordInspDetail/list', query)
}
/* 处方详情 */
export function getPrescriptionListDetail(opcPresId) {
  let query = {
    w: [{ k: "opcPresId", v: opcPresId, m: "eq" }],
    o: [],
    p: { n: 1, s: 10 }
  }
  return getListData('/hjjk/recordOpcPreslist/list', query)
}
/* 健康资讯列表 */
// export function getHealthInfoList(catCd, pageNum) {
//   let state = getUserType()
//   let query = {
//     w: [{ k: "statCd", v: state, m: "Lk" }],
//     o: [{ "k": "crtTm", "t": "desc" }],
//     p: { n: 1, s: 10 * pageNum }
//   }
//   if (catCd) {
//     query.w.push({ k: "catCd", v: catCd, m: "eq" })
//   }
//   return getListData('/hjjk/healthPreservation/page', query)
// }
export function getHealthInfoList(channelId){
  return getListData('/hjjk/secondInfo/listForApp',{channelId})
}
/* 健康资讯详情 */
export function getHealthInfoDetail(id) {
  /*return getData('/hjjk/healthPreservation/appInfo',{id,memberId})*/
  return getData('/hjjk/healthPreservation/appInfo', { id })
}
/* 一键预约列表 */
export function getAppointList(memberId, catCd) {
  let query = {
    w: [{ k: "memberId", v: memberId, m: "eq" }, { k: "catCd", v: catCd, m: "eq" }],
    o: [],
    p: { n: 1, s: 10 }
  }
  return getListData('/hjjk/memberService/page', query)
}
/* 健康资讯收藏 */
export function collectHealthInfo(objId) {
  return postData('/hjjk/memberCollect/add', {
    objId, memberId: 1, catCd: '60000.110.100'
  })
}
/* 健康资讯取消收藏 */
export function cancelCollectHealthInfo(id) {
  return getData('/hjjk/memberCollect/appDel', {
    id, memberId: 1, catCd: '60000.110.100'
  })
}
/* 门诊预约-表单提交 */
export function PostappointData(data) {
  return postData('/hjjk/apntRegister/add', data)
}
/* 门诊预约-医院列表 */
export function getHospitalList(cityCd, name) {
  if (name) {
    query.w.push({ k: "name", v: name, m: "lk" })
  }
  let query = {
    w: [{ k: "cityCd", v: cityCd, m: "eq" }],
  }
  return getListData('/hjjk/hospital/list', query)
}
/* 门诊预约-科室列表 */
export function getDepartmentList(type, val) {
  /* type 1传hospitalId 0 传pid */
  let query = {

  }
  if (type) {
    query.w = [{ k: 'level', v: '1', m: 'eq' }]
    /* query.w.push({}) */
    /* query.w.push({ k: "hospitalId", v: val, m: "eq" }) */
  } else {
    query.w = [{ k: "pid", v: val, m: "eq" }]
  }
  return getListData('/hjjk/hospitalDept/list', query)
}
/* 地址管理-地址列表获取 */
export function getAddressList() {
  let userId = getUserId()
  let query = {
    w: [{ k: "userId", v: userId, m: "eq" }],
    o: [],
    p: { n: 1, s: 10 }
  }
  return getListData('/hjjk/memberAddr/listForAdimin', query)
}
/* 地址详情 */
export function getAddressDetail(id) {
  return getData('/hjjk/memberAddr/info', { id })
}
/* 地址添加 */
export function addAddress(data) {
  let userId = getUserId()
  return postData('/hjjk/memberAddr/add', Object.assign({ userId }, data))
}
/* 地址更新 */
export function updAddress(data) {
  return postData('/hjjk/memberAddr/upd', data)
}
/* 地址删除 */
export function delAddress(id) {
  return getData('/hjjk/memberAddr/del', { id })
}

/* 私医档案-病程记录列表 */
export function getDiseaseList(startTime, endTime) {
  let query = {
    w: [{ k: "memberId", v: memberId, m: "eq" }],
    o: [],
    p: { n: 1, s: 10 }
  }
  if (startTime.length > 10) {
    query.w.push({ k: "crtTm", v: startTime, m: "GE" })
  }
  if (endTime.length > 10) {
    query.w.push({ k: "crtTm", v: endTime, m: "LE" })
  }
  return getListData('/hjjk/symptom/symptomAndAdvice', query)
}
/* 私医档案-病程记录上传 */
export function uploadDisease(data) {
  return postData('/hjjk/symptom/add', Object.assign({ memberId }, data))
}
/* 私医档案-资讯记录列表 */
export function getConsultList(startTime, endTime) {
  let query = {
    w: [{ k: "memberId", v: 4535481258038273, m: "eq" }],
    o: [],
    p: { n: 1, s: 5 }
  }
  if (startTime.length > 10) {
    query.w.push({ k: "crtTm", v: startTime, m: "GE" })
  }
  if (endTime.length > 10) {
    query.w.push({ k: "crtTm", v: endTime, m: "LE" })
  }
  return getListData('/hjjk/historyRecord/page', query)
}
/* 私医服务 表单提交接口 上门相关 */
export function postPrivateService(data) {
  return postData('/hjjk/privateService/add', Object.assign({ userId, userName }, data))
}
/*  */
export function getRoleList(catCd) {
  return getData('/hjjk/healthTeam/listAllDoctor', {
    userId, catCd
  })
}
/* 检查项目类型列表 */
export function getCheckItemList() {
  return getData('/hjjk-sys/cat/listByPrntCd?prntCd=80060.120')
}
/* 获取默认地址 */
export function getDefaultAddress() {
  let userId = getUserId()
  let query = {
    w: [{ "k": "userId", "v": userId, "m": "EQ" }, { "k": "isDefault", "v": 1, "m": "EQ" }],
    o: [],
    p: { n: 1, s: 5 }
  }
  return getListData('/hjjk/memberAddr/findAddress', query)
}
/* 获取角色列表 */
export function getRoleItemList() {
  return getData('/hjjk-sys/cat/listByPrntCd?prntCd=60000.190')
}
/* 获取角色详情 */
export function getRoleDetail(id) {
  return getData('/hjjk/familyMembers/info', { id })
}
/* 增加家庭成员 */
export function addFamilyMember(data) {
  return postData('/hjjk/familyMembers/add', Object.assign({ userId, fid: userId }, data))
}
/* 更新家庭成员信息 */
export function updateFamilyMember(data) {
  return postData('/hjjk/familyMembers/upd', Object.assign({ userId, fid: userId }, data))
}
/* 删除家庭成员 */
export function deleteFamilyMember(id) {
  return getData('/hjjk/familyMembers/del', { ids: id })
}
/* 获取家庭成员列表 */
export function getFamilyMemberList() {
  let query = {
    w: [{ "k": "userId", "v": userId, "m": "EQ" }],
    o: [],
    p: { n: 1, s: 5 }
  }
  return getListData('/hjjk/familyMembers/list', query)
}
/* 微公益 获取表单资讯列表 */
export function getFormConsultList(pagenum) {
  let userId = getUserId()
  let query = {
    w: [],
    o: [{ "k": "crtTm", "t": "desc" }],
    p: { n: pagenum, s: 10 }
  }
  return getListData('/hjjk/yqConsult/webPage', query, userId)
}
/* 微公益 获取已回复资讯列表 */
export function getReplyFormConsultList(pagenum) {
  let query = {
    w: [{ "k": "doctorId", "v": getUserId(), "m": "EQ" }],
    o: [{ "k": "crtTm", "t": "desc" }],
    p: { n: pagenum, s: 10 }
  }
  return getListData('/hjjk/yqConsultReply/webPage', query)
}
/* 微公益  获取表单资讯详情 */
export function getFormConsultDetail(id) {
  return getData('/hjjk/yqConsult/webInfo', { id })
}
/* 微公益 获取职称 */
export function getRankItemList() {
  return getData('/hjjk-sys/cat/listByPrntCd?prntCd=60000.200')
}
/* 微公益 获取学历 */
export function getEducationItemList() {
  return getData('/hjjk-sys/cat/listByPrntCd?prntCd=80081')
}
/* 微公益 获取专业 */
export function getMajorItemList() {
  return getData('/hjjk-sys/cat/listByPrntCd?prntCd=60000.250')
}
/* 微公益 获取专业方向 */
export function getMajorfieldItemList(prntCd) {
  return getData('/hjjk-sys/cat/listByPrntCd', { prntCd })
}
/* 微公益 获取职务 */
export function getDutyItemList() {
  return getData('/hjjk-sys/cat/listByPrntCd?prntCd=80082')
}
/* 微公益 获取医生首页信息 */
export function getDoctorHomePageInfo() {
  let userId = getUserId()
  return getData('/hjjk/index/listForEpidemic', {
    userId,
    statCd: '1'
  })
}
/* 医生认证 获取医院列表 */
export function getCertifiHospitalList(name) {
  let query = {
    w: [{ "k": "name", "v": name, "m": "LK" }],
    o: [],
    p: { n: 1, s: 5 }
  }
  return getListData('/hjjk/hospital/list', query)
}
/* 获取医生登陆 手机验证码 */
export function getCode(phone) {
  return getData('/general/sms/getRegisterCode', {
    phone
  })
}
/* 获取医生认证 手机验证码 */
export function getCertifiCode(phone) {
  return getData('/general/sms/getWgyCode', {
    phone
  })
}
/* 医生手机登陆 */
export function doctorLogin(phone, code) {
  return getData('/general/sms/phoneCodeChkLogin', {
    phone, code, roleType: '1'
  })
}
/* 医生账号密码登陆 */
export function doctoraccountLogin(username, password) {
  return getData('/general/access/login', {
    username, password, roleType: '1'
  })
}
/* 医生认证  不需要手机号验证码 */
export function doctorAdd(data) {
  return postData('/hjjk/healthTeam/add', data)
}
/* 医生认证 需要手机验证码 */
export function doctorAddWithPhone(data) {
  return postData('/hjjk/healthTeam/addForIndex', data)
}
/* 获取我的消息列表 */
export function getMessageList(catCd) {
  let userId = getUserId()
  let query = {
    w: [{ "k": "userId", "v": userId, "m": "EQ" }, { "k": "catCd", "v": catCd, "m": "EQ" }],
    o: [{ "k": "crtTm", "t": "desc" }],
    p: { n: 1, s: 10 }
  }
  return getListData('/hjjk/msg/webPage', query)
}
/* 个人中心 获取用户个人信息 */
export function getUserInfo() {
  let id = getUserId()
  return getData('/hjjk-sys/user/userInfo', { id })
}
/* 个人中心 编辑用户个人信息 */
export function editUserInfo(data) {
  let id = getUserId()
  return postData('/hjjk-sys/user/upd', Object.assign({ id }, data))
}
/* 个人中心 获取医生个人信息 */
export function getDoctorInfo() {
  let userId = getUserId()
  return getData('/hjjk/healthTeam/webInfo', { userId })
}
/* 个人中心 编辑医生个人信息 */
export function editDoctorInfo(data) {
  let id = getUserId()
  //return postData('/hjjk/healthTeam/upd',Object.assign({id},data))
  return postData('/hjjk/healthTeam/upd', data)
}
// 获取医生执业信息
export function getPractisingInfo(data) {
  let userId = getUserId()
  return getData('/hjjk/healthTeam/practisingInfo', { userId })
}
/* 菜单栏获取未读消息数 */
export function getNotReadNumber() {
  let userId = getUserId()
  return getData('/hjjk/msg/msgNum', { userId })
}
/* 医生调查表单提交 */
export function postDoctorResearch(data) {
  let id = getUserId()
  return postData('/hjjk/doctorReport/add', Object.assign({ id }, data))
}
/* 我的消息 点击设置已读 */
export function setHasRead(id) {
  return postDataWithQuery('/hjjk/msg/changState', { id })
}
/* 用户 我的资讯列表 */
export function getUserConsultList(pagenum, type) {
  let userId = getUserId()
  let query = {
    w: [{ "k": "userId", "v": userId, "m": "EQ" }, { "k": "type", "v": type, "m": "eq" }],  //“1” 新冠肺炎“2” 慢病
    o: [{ "k": "crtTm", "t": "desc" }],
    p: { n: pagenum, s: 10 }
  }
  return getListData('/hjjk/serviceOrder/consult', query)   ///hjjk/yqConsult/consult
}
/* 用户 我的资讯列表  xtt*/
export function getUserConsultList2() {

}
/* 获取服务意愿列表 */
export function getServiceWishList() {
  let query = {
    w: [{ "k": "statCd", "v": 1, "m": "eq" }],
    o: [{ "k": "crtTm", "t": "desc" }],
    p: { n: 1, s: 10 }
  }
  return getListData('/hjjk/service/list', query)
}
/* 新闻资讯 获取类别列表 */
export function getNewsCatCdList() {
  let query = {
    "w":[{"k":"catCd","v":"7","m":"EQ"},{"k":"types","v":"0","m":"EQ"}],
    "o":[],
    "p":{"s":10,"n":1}}
  return getListData('/hjjk/channel/page', query)
}
/* 私医 动态管理 检查单获取医生Id */
export function getDoctorId(id) {
  return getData('/hjjk/recordExam/reportExamInfo', { id })
}
/* 私医 动态管理 检验单获取医生Id */
export function getInspectInfo(id) {
  return getData('/hjjk/recordInsp/reportInspInfo', { id })
}
/* 私医 会员动态 */
export function getManage(id) {
  return getData('/hjjk/memberDyn/page', { id })
}
export function getHealthList(){
  let query = {
      "w":[{"k":"memberId","v":"4664658915660820","m":"eq"}],
      "o":[{"k":"crtTm","t":"desc"}],
      "p":{"n":1,"s":10}}
  return getListData('/hjjk/symptom/pageForD',query)
}
//填写建议
export function pushAdvice(msg){  
  return postData('/hjjk/advice/add',{
    objId:'4897021344453632',userId:'4875599639925760',catCd:'1'
  },msg)
}

//写健康建议 60000.260.140
export function writeAdvice(msg){  
  return postData('/hjjk/advice/add',{
    objId:'4897021344453632',userId:'4875599639925760',catCd:'1'
  },msg)
}

//获取健康建议
export function getHealthAdvice(id){  
  let query = {
    "w":[{"k":"memberId","v":id,"m":"EQ"}],
    "o":[{"k":"crtTm","t":"desc"}],
    "p":{"n":1,"s":10}
  }
  return getListData('/hjjk/advice/pageForD',query)
}

//健康状况详情
export function getHealthMessage(id) {
  let query = {
    "w":[{"k":"memberId","v":id,"m":"eq"}],
    "o":[{"k":"crtTm","t":"desc"}],
    "p":{"n":1,"s":10}}
  return getListData('/hjjk/symptom/pageForD',query)
}
//指标历史记录
export function getHistoryHealth(id){
  // let userId = getUserId()
  let query = {
    "w":[{"k":"userId","v":id,"m":"eq"}],
    "o":[{"k":"crtTm","t":"desc"}],
    "p":{"n":1,"s":10}}
  return getListData('/hjjk/indicatorValue/pageForD',query)
}
/* 获取我的优惠券 */
export function getMyCoupon(statCd) {
  let userId = localStorage.getItem('userId')
  let query
  if (statCd == undefined) {
    //获取所有的数据
     query = {
      w: [{ "k": "userId", "v": userId, "m": "EQ" }],
      o: [{ "k": "crtTm", "t": "desc" }]
    }
  } else {
     query = {
      w: [{ "k": "userId", "v": userId, "m": "EQ" }, { "k": "statCd", "v": statCd, "m": "EQ" }],
      o: [{ "k": "crtTm", "t": "desc" }]
    }
  }
  return getListData('/hjjk/memberCoupon/list', query)
}
/* 首页banner跳转 */
export function getBannerNew(id,userId){
  return getData('/hjjk/indexInfo/indexInfo',{id:id,userId:userId})
}

/* 首页bxhome */
export function getHomeInfo(userId){
  return getData('/hjjk/index/list',{userId:userId})
}

/* 新闻首页newsInfo */
export function getNewsInfo(){
  let query = {
    "w":[{"k":"newsId","v":"4957415710725120","m":"eq"},{"k":"catCd","v":"1","m":"eq"}],
    "o":[],
    "p":{"n":1,"s":10}
  }  
  return getListData('/hjjk/news/info',query)
}

/* 新闻首页栏目newsInfo */
export function getMoreInfo(infoid){
  let query = {"w":[{k:"newsId","v":infoid,"m":"eq"},{"k":"catCd",v:"0","m":"eq"}],"o":[],"p":{n:1,s:10}} 
  return getListData('/hjjk/news/info',query)
}

/* 新闻我的收藏myCollection */
export function getCollection(){
  let query = {
    "w":[{"k":"userId","v":"1","m":"EQ"},{"k":"catCd","v":"60000.160.140","m":"EQ"}],
    "o":[{"k":"crtTm","t":"desc"}],
    "p":{"n":1,"s":10}
  }
  return getListData('/hjjk/collection/page',query)
}

/* 新闻 添加收藏 */
export function addCollection(userId,objId,catCd){
  console.log('addDate',userId,objId,catCd)
  return postData('/hjjk/collection/add',{userId:userId,objId:objId,catCd:catCd})
}


/* 新闻 取消收藏 */
export function celCollection(userId,objId,catCd){
  console.log('celDate',userId,objId,catCd)
  return postData('/hjjk/collection/cancel',{userId:userId,objId:objId,catCd:catCd})
}

/* 新闻 发布评论 */
export function addcommon(data){
  console.log('data',data)
  return postData('/hjjk/comment/add',data)
}

/* 新闻 详情 */
export function getDetails(data){
  return getData('/hjjk/news/findSourceInfo',data)
}

/* 新闻 支付宝接口 */
export function alipay(data){
  console.log('data',data)
  return postData('/pay/alipay/createOrder',data)
}
