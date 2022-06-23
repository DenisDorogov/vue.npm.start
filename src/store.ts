import { createStore } from 'vuex';
import MainModule from './modules/main/store/index';
import ExampleModule from './modules/example/store/index';

export default createStore({
  modules: {
    main: MainModule,
    example: ExampleModule
  }
})
