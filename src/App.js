import './App.css';
import About from './sections/About';
import Header from './sections/Header.js';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Services from './sections/Services';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
