import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global/global.css',
  namespace: 'stencil-starter-on',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
  devServer: {
    initialLoadUrl: 'ON-your-styleguide',
  },
};
