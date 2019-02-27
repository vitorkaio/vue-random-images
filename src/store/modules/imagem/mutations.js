const mutations = {
  REQUEST_IMAGEM(state) {
    state.load = true;
    state.error = false;
  },
  SUCESS_IMAGEM(state, payload) {
    state.img = payload;
    state.load = false;
    state.error = false;
  },
  ERROR_IMAGEM(state) {
    state.img = null;
    state.load = false;
    state.error = true;
  }
}

export default mutations;