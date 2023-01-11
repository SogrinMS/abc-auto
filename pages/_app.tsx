import type { AppProps } from 'next/app';

import { Roboto } from '@next/font/google';

import '/src/styles/globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: 'normal',
  subsets: ['latin', 'cyrillic'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
