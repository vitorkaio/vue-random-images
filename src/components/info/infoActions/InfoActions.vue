<template>
  <InfoActionsWrapper class="info-actions">
    <InfoChoose />
    <div class="info-action-title">
      <p>Escolha um tamanho...</p>
    </div>
  </InfoActionsWrapper>
</template>

<script>
import { InfoActionsWrapper } from './InfoActionsStyled';
import InfoChoose from './infoChoose/InfoChoose.vue';

export default {
  components: {
    InfoActionsWrapper,
    InfoChoose
  }
}
</script>

<style>

</style>
