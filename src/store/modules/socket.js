import Constant from '../Constant';

const localStorage = window.localStorage;

const state = {
  msgDatas: [],
};

// getters
const getters = {
};

// actions
const actions = {
};

// mutations
const mutations = {
  [Constant.PUSH_MSG_DATA]: ($state, $payload) => {
    $state.msgDatas.push($payload);
    localStorage.setItem('msg', JSON.stringify($state.msgDatas));
  },
  [Constant.CLEAR_DATA]: ($state) => {
    $state.msgDatas = [];
    localStorage.removeItem('msg');
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};