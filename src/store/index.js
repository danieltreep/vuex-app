import { createStore } from 'vuex';
import counter from './modules/counter-store';
import countries from './modules/country-store';

export default createStore({
  modules: {
    counter, 
    countries
  }
})
