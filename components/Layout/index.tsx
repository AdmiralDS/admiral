import * as React from 'react';
import styled from 'styled-components';
import { MenuToggleButton } from 'components/TopBar/MenuToggleButon';
import { NavPanel } from 'components/NavPanel';
import { device } from 'components/Layout/device';
import { useMediaQuery } from 'components/Layout/useMediaQuery';
import { NavButtonList } from 'components/NavPanel/NavButtonList';
import { AdmiralGroupLogo } from './AdmiralGroupLogo/';

export const DesktopContainer = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  height: 100vh;
  overflow-y: auto;
  padding: 0 60px 0 348px;
`;
export const DesktopContent = styled.main`
  margin: 0 auto;
  padding: 40px 0;
  max-width: 1195px;
`;
const MobileContainer = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  min-height: 100vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Overlay = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(p) => (p.show ? 'block' : 'none')};
  background-color: ${(p) => p.theme.color['Opacity/Modal']};
`;

const MobilePositionNavPanel = styled(NavPanel)`
  position: absolute;
  top: 1px;
  bottom: 0;
  left: 0;
`;

const MobileContent = styled.div`
  position: relative;
  flex: 1 1 100%;
  padding: 40px 16px;
`;

export function Layout({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery(device.laptop);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return !isDesktop ? (
    <MobileContainer>
      <MobileContent>
        {children}
        {isMenuOpen && (
          <>
            <Overlay show={isMenuOpen} />
            <MobilePositionNavPanel isMobile>
              <NavButtonList />
            </MobilePositionNavPanel>
          </>
        )}
      </MobileContent>
      <AdmiralGroupLogo />
      <MenuToggleButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ position: 'absolute', top: 12, right: 12 }}
      />
    </MobileContainer>
  ) : (
    <DesktopContainer>
      <DesktopContent>{children}</DesktopContent>
      <AdmiralGroupLogo />
    </DesktopContainer>
  );
}
