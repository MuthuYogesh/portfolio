import react from 'react'
import Background from './components/Background';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Background>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </Background>

      {/* <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer> */}
    </>
  );
}

export default App
