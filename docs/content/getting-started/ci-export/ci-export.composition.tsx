import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { CiExport } from './index';

export const BasicCreateWorkspace = () => (
  <ThemeCompositions>
    <MDXLayout>
      <CiExport />
    </MDXLayout>
  </ThemeCompositions>
);
