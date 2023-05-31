import { AcmeLegacyVars } from '@acme/guidelines';
import { style } from '@vanilla-extract/css';

export const someStyle = style({
  color: 'purple',
  paddingBottom: '8px',

  /**
   * When I try to to use one of the theme variable, the build got stuck with no message.
   */
  borderBottom: `1px solid ${AcmeLegacyVars.colors.gray[500]}`,
});
