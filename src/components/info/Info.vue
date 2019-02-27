<template>
  <InfoWrapper class="my-info">
    <InfoHeader :img="img" />
    <InfoActions />
  </InfoWrapper>
</template>

<script>
import { mapGetters } from 'vuex';
import { InfoWrapper } from './InfoStyled';
import InfoHeader from './infoHeader/InfoHeader.vue';
import InfoActions from './infoActions/InfoActions.vue';

/* eslint-disable */

export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if(vm.img === null) {
        next("/")
      }
      else {
        next();
      }
    });
  },
  components: {
    InfoWrapper,
    InfoHeader,
    InfoActions,
  },
  computed: {
    ...mapGetters('imagem',{
      img: 'getImagem'
    }),
  },
}
</script>

<style>

</style>
