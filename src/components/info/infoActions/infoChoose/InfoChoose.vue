<template>
  <div class="info-choose-root">
    <InfoChooseWrapper class="info-choose" @click="onChooseHandler"/>
    <BackDrop :active="onChoose" :onChooseHandler="onChooseHandler" />
    <Choose :active="onChoose" :onChooseHandler="onChooseHandler" />
  </div>
</template>

<script>
import { InfoChooseWrapper } from './InfoChooseStyled';
import BackDrop from './backdrop/BackDrop.vue';
import Choose from './choose/Choose.vue';

export default {
  components: {
    InfoChooseWrapper,
    BackDrop,
    Choose
  },
  data() {
    return {
      onChoose: false,
    }
  },
  methods: {
    onChooseHandler() {
      this.onChoose = !this.onChoose;
    }
  }
}
</script>

<style scoped>
.info-choose-root {
  position: relative;
}

</style>
