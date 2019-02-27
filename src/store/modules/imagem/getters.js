const getters = {
  loading(state) {
    return state.load;
  },
  error(state) {
    return state.error;
  },
  getImagem(state) {
    return state.img;
  },
}

export default getters;