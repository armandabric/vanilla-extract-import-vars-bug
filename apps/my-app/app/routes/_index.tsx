import { Button } from '@acme/guidelines/';

import { someStyle } from '~/routes/someStyle.css';

export default function HomePage() {
  return (
    <div style={{ margin: '40px' }}>
      <h1 className={someStyle}>Reproduction</h1>

      <p>Here my component from the design system works perfectly:</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button intent="primary">One button</Button>
        <Button intent="secondary">Another button</Button>
      </div>

      <p>
        But when I try to use one of the variable of the design system directly
        in this application the build got stuck.
      </p>

      <p>
        In the <code>`apps/my-app/app/routes/someStyle.css.ts`</code> style file
        you can comment out the usage of the theme variable to trigger the
        issue. It should apply a <code>border-bottom</code> to the heading of
        the page.
      </p>
    </div>
  );
}
