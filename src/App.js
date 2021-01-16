// import logo from './logo.svg';
import './index.css' ;
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer';
// import ContactForm from './components/contactForm'
import NavTop from './components/nav'
// import ControlledCarousel from './components/carousel'
// import QuotesCarousel from './components/QuotesCarousel'
import FeatureOne from './components/featureOne'
import Portfolio from './components/portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';
// import FeatureTwo from './components/featureTwo'
import HomeHero from './components/HomeHero'
import MediaModule from './components/MediaModule'
import LogoImages from "./components/LogoImages"
// import SocialContacts from "./components/SocialContacts"
import ContactReact from "./components/ContactReact"

function App() {
  return (
    <div className="App">
    < NavTop />
    <HomeHero />
    <LogoImages />
    < FeatureOne />
    {/* <MediaModule /> */}
    < Portfolio />
    {/* < ContactForm /> */}
    <ContactReact />
    {/* < SocialContacts /> */}
    < Footer />
    </div>
  );
}

export default App;
