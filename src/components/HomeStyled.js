import styled from 'vue-styled-components';
import defaultImage from "./../assets/wall.jpg";

/* eslint-disable */

const props = {
  url: String,
}

export const HomeWrapper = styled('div', props)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;

  background-image: url(${props => props.url === 'none' ? defaultImage : props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center; 
`;

export const HomeActionsWrapper = styled('div')`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
