import TIM from 'tim-js-sdk';
import COS from 'cos-js-sdk-v5';
// 初始化 SDK 实例
const tim = TIM.create({
  SDKAppID: '1400267551' // 接入时需要将0替换为您的即时通信应用的 SDKAppID
})

tim.registerPlugin({'cos-js-sdk': COS});
export default tim
