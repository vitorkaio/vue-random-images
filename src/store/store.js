import Vue from 'vue';
import Vuex from 'vuex';

import imagem from './modules/imagem/imagem';

Vue.use(Vuex);

const vuex = new Vuex.Store({
  modules: {
    imagem,
  }
});

export default vuex;