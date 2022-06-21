import { createStore } from 'vuex';
import MainModule from './modules/main/store/index.js';
import ExampleModule from './modules/example/store/index.js';

export default createStore({
  modules: {
    main: MainModule,
    example: ExampleModule
  }
})
