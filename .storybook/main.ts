import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../client/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: false,
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}
export default config
