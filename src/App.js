// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import ContactForm from './components/contactForm'
import NavTop from './components/nav'
import ControlledCarousel from './components/carousel'
import QuotesCarousel from './components/QuotesCarousel'
import FeatureOne from './components/featureOne'
import Portfolio from './components/portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';
// import FeatureTwo from './components/featureTwo'
import HomeHero from './components/HomeHero'
import MediaModule from './components/MediaModule'
import LogoCarousel from "./components/LogoCarousel"

//NOTES do some cool stuff. animations. SSR. email form. banner of skills and programs. lazy load more projects perhaps. sticky nav. Bigger bolder titles/text.



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
    < NavTop />
    {/* < ControlledCarousel /> */}
    <HomeHero />
    <LogoCarousel />
    < FeatureOne />
    {/* < FeatureTwo /> */}
    {/* <MediaModule /> */}

    < Portfolio />
    < ContactForm />
    < Footer />


      {/* </header> */}
    </div>
  );
}

export default App;
