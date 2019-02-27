import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const imagem = {
  namespaced: true,
  state: {
    img: null,
    load: false,
    error: false,
  },
  getters: getters,
  mutations: mutations,
  actions: actions
};

export default imagem;