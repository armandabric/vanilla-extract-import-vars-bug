import { type StyleRule, style } from '@vanilla-extract/css';

import { AcmeLegacyVars } from './AcmeLegacy.css';

type FontSizeVariant = 'xs' | 's' | 'm';

type FontStyleVariant = 'regular' | 'bold';

export const bodyRule: Record<
  FontSizeVariant,
  Record<FontStyleVariant, StyleRule>
> = {
  m: {
    regular: {
      fontFamily: AcmeLegacyVars.fontFamily.base,
      fontWeight: AcmeLegacyVars.fontWeight.regular,
      fontStyle: 'normal',
      letterSpacing: 'unset',
      fontSize: AcmeLegacyVars.fontSize['04'],
      lineHeight: 'unset',
    },
    bold: {
      fontFamily: AcmeLegacyVars.fontFamily.base,
      fontWeight: AcmeLegacyVars.fontWeight.bold,
      fontStyle: 'normal',
      letterSpacing: 'unset',
      fontSize: AcmeLegacyVars.fontSize['04'],
      lineHeight: 'unset',
    },
  },
  s: {
    regular: {
      fontFamily: AcmeLegacyVars.fontFamily.base,
      fontWeight: AcmeLegacyVars.fontWeight.regular,
      fontStyle: 'normal',
      letterSpacing: 'unset',
      fontSize: AcmeLegacyVars.fontSize['03'],
      lineHeight: 'unset',
    },
    bold: {
      fontFamily: AcmeLegacyVars.fontFamily.base,
      fontWeight: AcmeLegacyVars.fontWeight.bold,
      fontStyle: 'normal',
      letterSpacing: 'unset',
      fontSize: AcmeLegacyVars.fontSize['03'],
      lineHeight: 'unset',
    },
  },
  xs: {
    regular: {
      fontFamily: AcmeLegacyVars.fontFamily.base,
      fontWeight: AcmeLegacyVars.fontWeight.regular,
      fontStyle: 'normal',
      letterSpacing: 'unset',
      fontSize: AcmeLegacyVars.fontSize['02'],
      lineHeight: 'unset',
    },
    bold: {
      fontFamily: AcmeLegacyVars.fontFamily.base,
      fontWeight: AcmeLegacyVars.fontWeight.bold,
      fontStyle: 'normal',
      letterSpacing: 'unset',
      fontSize: AcmeLegacyVars.fontSize['02'],
      lineHeight: 'unset',
    },
  },
};

export const bodyStyle: Record<
  FontSizeVariant,
  Record<FontStyleVariant, string>
> = {
  m: {
    regular: style(bodyRule.m.regular),
    bold: style(bodyRule.m.bold),
  },
  s: {
    regular: style(bodyRule.s.regular),
    bold: style(bodyRule.s.bold),
  },
  xs: {
    regular: style(bodyRule.xs.regular),
    bold: style(bodyRule.xs.bold),
  },
};
