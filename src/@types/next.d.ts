import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import Default from '@global-layouts/Default';

type DefaultType = typeof Default;
type LayoutType = DefaultType;

declare module 'next' {
  export interface LayoutPage extends NextPage {
    Layout: LayoutType;
  }
}

declare module 'next/app' {
  export interface LayoutAppProps extends AppProps {
    Component: NextPage & {
      Layout: LayoutType;
    };
  }
}
