import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Yarn } from './index';

export const BasicYarn = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <Yarn />
      </MDXLayout>
    </ThemeCompositions>
  );
};
