
import './App.css';
import Navbar from '../components/navbar/Navbar.js';
import AboutMe from '../components/about me/AboutMe';
// import Technologies from '../components/technologies/Technologies';
import Experience from '../components/experience/Experience';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <AboutMe />
      {/* <Technologies /> */}
      <Experience />
      <Contact />
      <Footer />
    </main>
    
  );
}

export default App;
