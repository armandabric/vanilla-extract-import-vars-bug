import '@fontsource-variable/montserrat/wght-italic.css';
import '@fontsource-variable/montserrat/wght.css';
import { withThemeByClassName } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';
import 'modern-normalize/modern-normalize.css';

import { acmeLegacyThemeClass } from '../src/Themes/AcmeLegacy.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'White',
      values: [
        {
          name: 'White',
          value: '#FFFFFF',
        },
        {
          name: 'Grey 200',
          value: '#F3F4F6',
        },
      ],
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        AcmeLegacy: acmeLegacyThemeClass,
      },
      defaultTheme: 'AcmeLegacy',
    }),
  ],
};

export default preview;
