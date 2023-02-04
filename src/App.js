import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
    <Header />
    <main className="full-width m-0 p-0 bg-cool-gray-50" id="hero">
       <Hero />
       <About />
       <Skills />
       <Projects />
       <Testimonials />
     </main> 
     <Footer />
     </>
  );
}

export default App;
