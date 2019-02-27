<template>
  <InfoHeaderWrapper class="info-header" >
    <template v-if="img !== null">
      <ImageInfoWrapper :url="img.urls.full">

        <InfoHomeNavigateWrapper class="home-back">
          <v-tooltip right :color="primaryColor">
            <template #activator="data">
              <v-btn :color="primaryColor" dark icon v-on="data.on" @click="homeNavigate" >
                <v-icon>arrow_back</v-icon>
              </v-btn>
            </template>
            <span>Voltar</span>
          </v-tooltip>
        </InfoHomeNavigateWrapper>

        <InfoChipsWrapper class="info-chips">
          <v-chip dark :color="primaryColor">{{ name }}</v-chip>
          <v-chip dark :color="primaryColor">
            <a :href="link" target="_blank">{{ link }}</a>
          </v-chip>
        </InfoChipsWrapper>
        
    </ImageInfoWrapper>
    </template>
  </InfoHeaderWrapper>
</template>

<script>
import { InfoHeaderWrapper, ImageInfoWrapper, InfoChipsWrapper, InfoHomeNavigateWrapper } from './InfoHeaderStyled';
import { primaryColor } from '@/components/ui/styled';

export default {
  props: {
    img: Object
  },
  components: {
    InfoHeaderWrapper,
    ImageInfoWrapper,
    InfoChipsWrapper,
    InfoHomeNavigateWrapper
  },
  computed: {
    name() {
      return this.img.user.first_name + ' ' + this.img.user.last_name;
    },
    link() {
      return this.img.user.links.html;
    },
    primaryColor() {
      return primaryColor;
    }
  },
  methods: {
    homeNavigate() {
      this.$router.push({
        path: '/',
      });
    }
  }
}
</script>