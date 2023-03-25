import './App.css';
import About from './components/About/About';
import Contactme from './components/Contactme/Contactme';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Techstack from './components/Techstack/Techstack';

function App() {
  return (
    <div className="App">
      <Navbar />
    <div className='margin'>
      <Intro/>
      <About />
      <Techstack />
      <Portfolio />
      <Contactme />
      <Footer/>
    </div>
    </div>
  );
}

export default App;
