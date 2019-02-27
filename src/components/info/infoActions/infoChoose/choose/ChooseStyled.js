import styled from 'vue-styled-components';

import thumb from '@/assets/icons/thumb.svg';
import small from '@/assets/icons/small.svg';
import regular from '@/assets/icons/regular.svg';
import full from '@/assets/icons/full.svg';
import raw from '@/assets/icons/raw.svg';
import custom from '@/assets/icons/custom.svg';

const props = {
  active: Boolean,
};

export const ChooseWrapper = styled('div', props)`
  width: 300px;
  height: 200px;
  position: absolute;
  top: -220px;
  left: -110px;
  overflow-y: scroll;

  z-index: ${props => props.active ? 101 : -101};
  background-color: whitesmoke;

  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);

`;

export const iconsSizes = {
  'thumb': thumb,
  'small': small,
  'regular': regular,
  'full': full,
  'raw': raw,
  'custom': custom,
}