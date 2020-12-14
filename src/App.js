// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import ContactForm from './components/contactForm'
import Nav from './components/nav'
import ControlledCarousel from './components/carousel'
import QuotesCarousel from './components/QuotesCarousel'
import FeatureOne from './components/featureOne'
import Portfolio from './components/portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';
// import FeatureTwo from './components/featureTwo'
import HomeHero from './components/HomeHero'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
    < Nav />
    {/* < ControlledCarousel /> */}
    <HomeHero />
    < FeatureOne />
    {/* < FeatureTwo /> */}
    < Portfolio />
    < ContactForm />
    < Footer />


      {/* </header> */}
    </div>
  );
}

export default App;
