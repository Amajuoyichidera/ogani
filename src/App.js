import Navbar from './components/Navbar';
import Vege from './components/vege/Vege';
import SlideShow from './components/slideShow/SlideShow';
import Featured from './components/featured/Featured';
import Summer from './components/Summer/Summer';
import Products from './components/Products/Products';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import { motion, useScroll } from "framer-motion";
import styles from './styles.module.css';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
    <motion.div
        className={styles.progress}
        style={{ scaleX: scrollYProgress }}
      />
    <Navbar />
    <Vege />
    <SlideShow />
    <Featured />
    <Summer />
    <Products />
    <Blog />
    <Footer />
    </>
  );
}

export default App;
