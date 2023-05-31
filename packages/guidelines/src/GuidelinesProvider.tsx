import { ReactNode } from 'react';
import { SSRProvider } from 'react-aria-components';

export function GuidelinesProvider({ children }: { children: ReactNode }) {
  return <SSRProvider>{children}</SSRProvider>;
}
