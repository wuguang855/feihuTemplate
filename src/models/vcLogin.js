
export default {
  namespace: 'vcLogin',
  state: {
    accid: null,
    refreshtoken: null,
    token: null,
    uid: '01_888'
  },
  subscriptions: {
    //setup({ dispatch, history }) {
    // }
  },

  effects: {
    // *fetch({ payload }, { call, put }) {
    //   yield put({ type: 'save' });
    //}
  },

  reducers: {
    save(state) {
      return { ...state };
    }
  }
};
