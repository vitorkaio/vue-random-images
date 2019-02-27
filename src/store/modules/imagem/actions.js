import ImageService from './../../../services/imageService';

/* eslint-disable */

const actions = {

  async REQUEST_IMAGEM(context) {
    context.commit('REQUEST_IMAGEM');

    // Acessa o store.
    // console.log(context.state.load);

    const apiService = new ImageService();
    const res = await apiService.getRandomImage();
    
    if(res !== null) {
      context.commit('SUCESS_IMAGEM', res);
    }
    else {
      context.commit('ERROR_IMAGEM');
    }
  },
  
}

export default actions;