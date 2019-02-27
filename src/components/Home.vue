<template>
  <HomeWrapper class="home" :url="img === null ? 'none' : img.urls.full">
    <HomeActionsWrapper class="home-actions">
      <div>
        <v-btn  
          :color="primaryColor"
          dark 
          @click="getImage"
          :loading="load"
        >
          Carregar Imagem
        </v-btn>
      </div>
      <div v-show="img !== null">
        <v-tooltip right :color="primaryColor">
          <template #activator="data">
            <v-btn icon :color="primaryColor" dark v-on="data.on" @click="navigateInfo">
              <v-icon>forward</v-icon>
            </v-btn>
          </template>
          <span>Info</span>
        </v-tooltip>
      </div>
      
    </HomeActionsWrapper>
    <p v-if="error">Erro ao fazer requisição.</p>
  </HomeWrapper>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import { HomeWrapper, HomeActionsWrapper } from './HomeStyled';
import { primaryColor } from './ui/styled';

/* eslint-disable */

export default {
  components: {
    HomeWrapper,
    HomeActionsWrapper,
  },
  computed: {
    ...mapGetters('imagem',{
      load: 'loading',
      error: 'error',
      img: 'getImagem'
    }),
    primaryColor() {
      return primaryColor;
    }
  },
  methods: {
    ...mapActions('imagem', ['REQUEST_IMAGEM']),
    getImage() {
      this.REQUEST_IMAGEM();
    },
    navigateInfo() {
      this.$router.push({
        path: '/info',
      });
    }
  }
}
</script>