import { createStore } from 'vuex';
import advicesModule from '../modules/advices/store/index.js';
import LoginModule from '../modules/login/store/index.js';

export default createStore({
  modules: {
    advices: advicesModule,
    login: LoginModule
  }
})
