import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-starter-on',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
  devServer: {
    reloadStrategy: 'pageReload',
    initialLoadUrl: 'ON-your-styleguide',
  },
};
