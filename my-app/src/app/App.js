
import './App.css';
import Navbar from '../components/navbar/Navbar.js';
import AboutMe from '../components/about me/AboutMe';
import Technologies from '../components/technologies/Technologies';
import Experience from '../components/experience/Experience';

function App() {
  return (
    <main>
      <Navbar />
      <AboutMe />
      <Technologies />
      <Experience />
    </main>
    
  );
}

export default App;
