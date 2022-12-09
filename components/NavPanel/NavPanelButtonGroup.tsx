import styled from 'styled-components';
import * as React from 'react';
import { T, OpenStatusButton } from '@admiral-ds/react-ui';

const NavPanelButtonContainer = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  padding: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;

  background-color: ${(p) => (p.isActive ? p.theme.color['Opacity/Dark Static Focus'] : 'initial')};
  &:hover {
    background-color: ${(p) => p.theme.color['Opacity/Dark Static Hover']};
  }

  &:active {
    background-color: ${(p) => p.theme.color['Opacity/Dark Static Press']};
  }

  transition: background 0.3s ease;
`;

const Container = styled.div``;
const GroupContainer = styled.div<{ isOpen: boolean }>`
  height: ${(p) => (p.isOpen ? 'initial' : '0')};
  overflow: hidden;
  & > * {
    margin-top: 8px;
  }
`;

const TextContainer = styled.div`
  flex: 1 1 100%;
`;
const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
  margin: 0 16px 0 0;
  & path {
    fill: ${(p) => p.theme.color['Special/Dark Static Neutral 90']};
  }
`;
export type NavPanelButtonProps = {
  text?: string;
  icon?: React.FunctionComponent<{ isActive?: boolean }>;
  isActive?: boolean;
  children?: React.ReactNode;
};
export const NavPanelButtonGroup = React.forwardRef<HTMLAnchorElement, NavPanelButtonProps>(
  ({ icon = () => null, text = '', children, ...props }, ref) => {
    const Icon = icon;
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return (
      <Container>
        <NavPanelButtonContainer
          {...props}
          ref={ref}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <IconContainer>
            <Icon isActive={props.isActive} />
          </IconContainer>
          <TextContainer>
            <T color={'Special/Dark Static Neutral 90'} font={'Body/Body 2 Long'}>
              {text}
            </T>
          </TextContainer>
          <OpenStatusButton $isOpen={isOpen} width={20} />
        </NavPanelButtonContainer>
        <GroupContainer isOpen={isOpen}>{children}</GroupContainer>
      </Container>
    );
  },
);

NavPanelButtonGroup.displayName = 'NavPanelButtonGroup';
