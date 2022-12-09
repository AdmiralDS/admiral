import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavPanelButton } from './NavPanelButton';
import { ReactComponent as StarOutline } from '@admiral-ds/icons/build/system/StarOutline.svg';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { ReactComponent as TypographyOutline } from '@admiral-ds/icons/build/category/TypographyOutline.svg';
import { ReactComponent as TypographySolid } from '@admiral-ds/icons/build/category/TypographySolid.svg';
import { ReactComponent as ComponentSolid } from '@admiral-ds/icons/build/category/ComponentSolid.svg';
import { ReactComponent as ComponentOutline } from '@admiral-ds/icons/build/category/ComponentOutline.svg';
import { NavPanelButtonGroup } from './NavPanelButtonGroup';

type NavModel = {
  href: string;
  text?: string;
  icon?: React.FunctionComponent<{ isActive?: boolean }>;
  group?: Array<NavModel>;
};

const ROUTE_LIST_MODEL = [
  {
    href: '/documentation/button',
    text: 'Основы',
    icon: ({ isActive }: { isActive?: boolean }) => (isActive ? <StarSolid /> : <StarOutline />),
  },
  {
    href: '/documentation/icon',
    text: 'Компоненты',
    icon: ({ isActive }: { isActive?: boolean }) => (isActive ? <ComponentSolid /> : <ComponentOutline />),
    group: [
      {
        href: '/documentation/select',
        text: 'Select',
      },
      {
        href: '/documentation/button',
        text: 'Button',
      },
    ],
  },
  {
    href: '/documentation/typography',
    text: 'Типографика',
    icon: ({ isActive }: { isActive?: boolean }) => (isActive ? <TypographySolid /> : <TypographyOutline />),
  },
] as Array<NavModel>;

type LinkButtonProps = {
  href: string;
  text?: string;
  icon?: React.FunctionComponent<{ isActive?: boolean }>;
  isActive: boolean;
};

const LinkButton = ({ href, text, icon, isActive }: LinkButtonProps) => (
  <Link key={href} href={href} passHref legacyBehavior>
    <NavPanelButton text={text} isActive={isActive} icon={icon} />
  </Link>
);

export const NavButtonList = () => {
  const { asPath } = useRouter();
  const [activeIndex, setActiveIndex] = React.useState(-1);

  React.useEffect(() => {
    const activePath = new URL(asPath, location.href).pathname;
    setActiveIndex(ROUTE_LIST_MODEL.findIndex(({ href }) => activePath === new URL(href, location.href).pathname));
  }, [asPath]);

  return (
    <>
      {ROUTE_LIST_MODEL.map(({ href, text, icon, group }, index) => {
        if (group) {
          return (
            <NavPanelButtonGroup key={href} text={text} isActive={index === activeIndex} icon={icon}>
              {group.map(({ href, text, icon }, index) => (
                <LinkButton key={href} href={href} text={text} isActive={index === activeIndex} icon={icon} />
              ))}
            </NavPanelButtonGroup>
          );
        }
        return <LinkButton key={href} href={href} text={text} isActive={index === activeIndex} icon={icon} />;
      })}
    </>
  );
};
