import styled from 'styled-components';
import { HTMLAttributes, MouseEventHandler } from 'react';
import { ReactComponent as CloseSvg } from './Outline/Close Outline.svg';
import { ReactComponent as MenuSvg } from './Outline/Menu Outline.svg';

const Container = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background: ${(p) => p.theme.color['Opacity/Dark Static Hover']};
  }
  &:active {
    background: ${(p) => p.theme.color['Opacity/Dark Static Press']};
  }
  & > svg {
    display: block;

    width: 40px;
    height: 40px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export type MenuToggleButtonProps = {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};
export const MenuToggleButton = (props: MenuToggleButtonProps & HTMLAttributes<HTMLDivElement>) => {
  return <Container {...props}>{props.isOpen ? <CloseSvg /> : <MenuSvg />}</Container>;
};
