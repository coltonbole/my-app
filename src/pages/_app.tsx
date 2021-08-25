import 'normalize.css/normalize.css';
import React from 'react';
import 'scss/main.scss';

import { headlessConfig } from '@faustjs/core';
import { HeadlessProvider } from '@faustjs/next';
import { client } from 'client';
import type { AppProps } from 'next/app';


headlessConfig({
  wpUrl: process.env.WORDPRESS_URL || process.env.NEXT_PUBLIC_WORDPRESS_URL,
  apiClientSecret: process.env.WP_HEADLESS_SECRET,
});


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadlessProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </HeadlessProvider>
    </>
  );
}
