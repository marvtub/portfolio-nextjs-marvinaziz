import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const pageTrans = {
    initial: {opacity:0, },
    animate: {opacity:1,transition:{duration:2, ease:'easeInOut'}},
    exit: {opacity:0, },
  };



  return (
    <div className="bg-black scroll-smooth">
    <AnimatePresence exitBeforeEnter>
     <motion.div inital="initial" animate="animate" exit="exit" variants={pageTrans} key={router.route}>
      <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
    </div>
  );
}

export default MyApp;
