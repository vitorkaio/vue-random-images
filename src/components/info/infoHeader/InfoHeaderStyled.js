import styled from 'vue-styled-components';

const props = {
  url: String,
}

export const InfoHeaderWrapper = styled('div')`
  flex: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0.4rem 0.4rem;
`;

export const ImageInfoWrapper = styled('div', props)`
  flex: 1;
  width: 850px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  border: 1px solid transparent;
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 849px) {
    width: 100%;
  }
`;

export const InfoChipsWrapper = styled('div')`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  & a {
    color: white;
  }
`;

export const InfoHomeNavigateWrapper = styled('div')`
  flex: 1;
`;