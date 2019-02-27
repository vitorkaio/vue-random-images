import styled from 'vue-styled-components';

const props = {
  active: Boolean,
};

export const BackDropWrapper = styled('div', props)`
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  z-index: ${props => props.active ? 99 : -99};
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);

`;