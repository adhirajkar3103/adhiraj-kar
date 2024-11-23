import { motion, useScroll } from "framer-motion";
// import { useSelector, useDispatch } from "react-redux";
// import { themeType } from "./types";
// import { switchTheme } from "./slice";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

const App = () => {
  const { scrollYProgress } = useScroll();
  // const dispatch = useDispatch()
  // const theme = useSelector((state: { theme: themeType })=>state.theme.theme)

  // const toggleTheme = () => {
  //   console.log('switch')
  //   dispatch(switchTheme())
  //   document.documentElement.setAttribute('data-theme', theme);
  // };
  return (
    <>
      <motion.div
        className="progress-bar  bg-primary z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="h-screen">
        <Navbar />
        <Hero />
      </div>
      <Experiences />
      <Projects />
    
   </>
  )
}

export default App