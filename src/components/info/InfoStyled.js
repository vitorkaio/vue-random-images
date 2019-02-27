import styled from 'vue-styled-components';
import { backroundColorInfo } from '@/components/ui/styled';

export const InfoWrapper = styled('div')`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${backroundColorInfo};
`;