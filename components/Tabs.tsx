import * as React from 'react';
import { TabMenuProps } from '@admiral-ds/react-ui/dist/components/TabMenu';
import { useMediaQuery } from 'components/Layout/useMediaQuery';
import { device } from 'components/Layout/device';
import dynamic from 'next/dynamic';

const TabMenu = dynamic<TabMenuProps>(() => import('@admiral-ds/react-ui').then((mod) => mod.TabMenu), { ssr: false });
export const Tabs: React.FunctionComponent<TabMenuProps> = (props) => {
  const isDesktop = useMediaQuery(device.laptop);
  return <TabMenu {...props} dimension={isDesktop ? 'l' : 'm'} />;
};
