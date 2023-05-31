import { createTheme } from '@vanilla-extract/css';

import { fontFamily, fontSize, fontWeight } from './AcmeLegacy/Typography';

export const [acmeLegacyThemeClass, AcmeLegacyVars] = createTheme({
  fontFamily,
  fontSize,
  fontWeight,

  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    gray: {
      '100': '#f9fafb',
      '200': '#f3f4f6',
      '300': '#e5e7eb',
      '400': '#d1d5db',
      '500': '#9ca3af',
      '600': '#6b7280',
      '700': '#4b5563',
      '800': '#374151',
      '900': '#1f2937',
      '1000': '#111827',
    },
    pink: {
      '500': '#FF497F',
      '700': '#F3356E',
    },
    blue: {
      '500': '#1990FF',
      '700': '#146CBD',
    },
  },
});
