<template>
  <BackDropWrapper class="brackdrop" :active="active" @click="onChooseHandler"/>
</template>

<script>
import { BackDropWrapper } from './BackDropStyled';

export default {
  props: {
    active: Boolean,
    onChooseHandler: Function
  },
  components: {
    BackDropWrapper
  }
}
</script>