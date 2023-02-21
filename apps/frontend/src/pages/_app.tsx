import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { fontFamily } from '@/font/font-family';
import '@/style/global.css';

const GlobalHook: FC = () => null;

const App: FC<AppProps> = ({ Component, pageProps, router }) => (
  <RecoilRoot>
    <GlobalHook />
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <div key={router.asPath} className={`${fontFamily} flex min-h-screen flex-col font-sans`}>
        <Component {...pageProps} />
      </div>
    </AnimatePresence>
  </RecoilRoot>
);

export default App;
