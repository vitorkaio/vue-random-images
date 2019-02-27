import styled from 'vue-styled-components';
import choose from '@/assets/choose.svg';


export const InfoChooseWrapper = styled('div')`
  width: 80px;
  height: 80px;

  background-image: url(${choose});
  background-size: cover;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

`;