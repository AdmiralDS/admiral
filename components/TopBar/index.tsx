import styled from 'styled-components';
import { device } from 'components/Layout/device';

export const TopBar = styled.div`
  height: 48px;
  @media ${device.laptop} {
    && {
      display: none;
    }
  }
`;
