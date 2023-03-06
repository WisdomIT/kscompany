import { AnimatePresence } from 'framer-motion';
import { GlobalStyles } from '@/styles/global-style';
import Topnav from '@/components/topnav';

export default function App({ Component, pageProps, router }) {
  return (<>
    <GlobalStyles />
    <Topnav path={router.pathname} />
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.pathname} />
    </AnimatePresence>
  </>)
}
