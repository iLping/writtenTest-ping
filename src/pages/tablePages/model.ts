import { Effect, Reducer, Subscription } from 'umi';
import {
  getListRemoto,
  editListRemoto,
  addListRemoto,
  deleteListRemoto,
} from './service';
interface tableModelType {
  namespace: 'tables';
  state: {};
  reducers: {
    getList: Reducer;
    addList: Reducer;
    editList: Reducer;
    deletedata: Reducer;
  };
  effects: {
    getListRemoto: Effect;
    editListRemoto: Effect;
    addListRemoto: Effect;
    deleteListRemoto: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const tableModel: tableModelType = {
  namespace: 'tables',
  state: {},
  reducers: {
    getList(state, action) {
      return action.payload;
    },
    addList(state, action) {
      return action.payload;
    },
    editList(state, action) {
      return action.payload;
    },
    deletedata(state, action) {
      return action.payload;
    },
  },
  effects: {
    *getListRemoto(action, { put, call }) {
      const data = yield call(getListRemoto);
      console.log(data, 'data');
      yield put({
        type: 'getList',
        payload: { data },
      });
    },
    *editListRemoto({ payload: { id, values } }, { put, call }) {
      const data = yield call(editListRemoto, { id, values });
      yield put({
        type: 'editList',
        payload: { data },
      });
    },
    *addListRemoto(action, { put, call }) {
      const data = yield call(addListRemoto);
      yield put({
        type: 'addList',
        payload: { data },
      });
    },
    *deleteListRemoto({ payload: { id } }, { put, call }) {
      const data = yield call(deleteListRemoto, { id });
      yield put({
        type: 'deletedata',
        payload: { id },
      });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'getListRemoto',
          });
        }
      });
    },
  },
};
export default tableModel;
