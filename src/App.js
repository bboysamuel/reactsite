// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import ContactForm from './components/contactForm'
import Nav from './components/nav'
import Slider from './components/slider'
import FeatureOne from './components/featureOne'
import Portfolio from './components/portfolio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
    < Nav />
    < Slider />
    < FeatureOne />
    < Portfolio />
    < ContactForm />
    < Footer />


      </header>
    </div>
  );
}

export default App;
