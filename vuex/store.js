/**
 * Created by apple on 2019/7/2.
 */
import  Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//让ajax携带cookie

Vue.use(Vuex);


const state = {
  memberId:0,
  headerTitle:'',
  token : 111,//sessionStorage.getItem('_token')
};
const mutations={
  setNewToken:function(state,token){
    sessionStorage.setItem('_token',token);
    state.token = token;
  },
  setMemberId:function(state,memberId){
    state.memberId = memberId;
  },
  setHeaderTitle:function(state,val){
    state.headerTitle=val
  }
};


export default new Vuex.Store({
  state,
  mutations
})