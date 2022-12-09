import styled from 'styled-components';
import { ReactComponent as AdmiralGroupLogoSVG } from 'components/Layout/AdmiralGroupLogo/AdmiralGroupLogo.svg';
import { device } from 'components/Layout/device';

export const AdmiralGroupLogo = styled(AdmiralGroupLogoSVG)`
  position: absolute;
  top: 24px;
  left: 64px;
  max-height: 53px;
  @media ${device.smartphone} {
    max-height: 40px;
    top: 20px;
    left: 20px;
  }

  transition: all 0.3s ease-in-out;
`;
