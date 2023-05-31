import { GuidelinesProvider, acmeLegacyThemeClass } from '@acme/guidelines';
import montserratVariableItalicStylesheets from '@fontsource-variable/montserrat/wght-italic.css';
import montserratVariableStylesheets from '@fontsource-variable/montserrat/wght.css';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import modelNormalizeStyles from 'modern-normalize/modern-normalize.css';

export const meta: V2_MetaFunction = () => [
  {
    charSet: 'utf-8',
  },
  {
    title: 'Document renderer',
  },
  {
    tagName: 'meta',
    name: 'viewport',
    content: 'width=device-width,initial-scale=1',
  },
  {
    tagName: 'meta',
    name: 'theme-color',
    content: '#ffffff',
  },
];

export function links(): ReturnType<LinksFunction> {
  return [
    { rel: 'stylesheet', href: modelNormalizeStyles },
    { rel: 'stylesheet', href: montserratVariableStylesheets },
    { rel: 'stylesheet', href: montserratVariableItalicStylesheets },
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  ];
}

export default function Root() {
  return (
    <html lang="fr" className={acmeLegacyThemeClass}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <GuidelinesProvider>
          <Outlet />
        </GuidelinesProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
