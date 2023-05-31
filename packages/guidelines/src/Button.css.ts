import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { AcmeLegacyVars } from './Themes/AcmeLegacy.css';
import { bodyStyle } from './Themes/Typography.css';

export const button = recipe({
  defaultVariants: {
    intent: 'tertiary',
    size: 'medium',
  },

  base: {
    borderRadius: 9999,
    border: '2px solid transparent',
  },

  variants: {
    intent: {
      primary: {
        color: AcmeLegacyVars.colors.white,
        background: AcmeLegacyVars.colors.blue[500],
        selectors: {
          '&:disabled': {
            background: AcmeLegacyVars.colors.gray[400],
          },
          '&:hover:not(:disabled)': {
            background: AcmeLegacyVars.colors.blue[700],
          },
        },
      },
      secondary: {
        color: AcmeLegacyVars.colors.white,
        background: AcmeLegacyVars.colors.pink[500],
        selectors: {
          '&:disabled': {
            background: AcmeLegacyVars.colors.gray[400],
          },
          '&:hover:not(:disabled)': {
            background: AcmeLegacyVars.colors.pink[700],
          },
        },
      },
      tertiary: {
        color: AcmeLegacyVars.colors.pink[500],
        background: AcmeLegacyVars.colors.transparent,
        selectors: {
          '&:disabled': {
            color: AcmeLegacyVars.colors.gray[500],
          },
        },
      },
    },
    size: {
      small: [
        bodyStyle.xs.regular,
        {
          padding: '0.125rem 0.5rem',
        },
      ],
      medium: [
        bodyStyle.s.regular,
        {
          padding: '0.5rem 1rem',
        },
      ],
      large: [
        bodyStyle.s.regular,
        {
          padding: '0.75rem 1.5rem',
        },
      ],
    },
  },

  compoundVariants: [
    {
      variants: {
        intent: 'tertiary',
      },
      style: {
        padding: 0,
      },
    },
  ],
});

export type ButtonVariant = RecipeVariants<typeof button>;
