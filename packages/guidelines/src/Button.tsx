import { Button as AriaButton } from 'react-aria-components';

import { type ButtonVariant, button } from './Button.css';

export type ButtonProps = Omit<
  React.ComponentProps<typeof AriaButton>,
  'className'
> &
  ButtonVariant;

export const Button = ({
  intent = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  return <AriaButton {...props} className={button({ intent, size })} />;
};
