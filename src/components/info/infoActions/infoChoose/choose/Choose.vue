<template>
  <ChooseWrapper class="choose" :active="active" @click="onChooseHandler">
    <template v-for="(size, i) in sizes" >
      <a :key="i" class="info-sizes" :href="size.url" target="_blank">
        <img :src="size.img" alt="size" width="80px" height="80px">
        <p class="info-sizes-title">{{ size.size }}</p>
      </a>
    </template>
  </ChooseWrapper>
</template>

<script>
import { mapGetters } from 'vuex';
import { ChooseWrapper, iconsSizes } from './ChooseStyled';

/* eslint-disable */


export default {
  props: {
    active: Boolean,
    onChooseHandler: Function
  },
  components: {
    ChooseWrapper
  },
  computed: {
    ...mapGetters('imagem',{
      img: 'getImagem'
    }),
    sizes() {
      const listSizes = [];
      for(let key in this.img.urls) {
        listSizes.push({
          size: key,
          url: this.img.urls[key],
          img: iconsSizes[key]
        });
      }
      console.log(listSizes);
      return listSizes;
    }
  },
}
</script>

<style scoped>
  .info-sizes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 1.2rem 0;
  }
  .info-sizes-title {
    margin-top: 0.3rem;
    font-size: 1rem;
    font-weight: bold;
    font-variant-caps: small-caps;
    background-color: transparent;
    text-decoration: none;
  }
</style>
