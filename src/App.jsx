import './App.css';
import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
