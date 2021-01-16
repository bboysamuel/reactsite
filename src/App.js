// import logo from './logo.svg';
import './index.css' ;
import 'bootstrap/dist/css/bootstrap.min.css'
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
import LogoImages from "./components/LogoImages"
import SocialContacts from "./components/SocialContacts"
import ContactReact from "./components/ContactReact"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

//NOTES do some cool stuff. animations. SSR. email form. banner of skills and programs. lazy load more projects perhaps. sticky nav. Bigger bolder titles/text.



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
    < NavTop />
    {/* < ControlledCarousel /> */}
    <HomeHero />
    <LogoImages />
    {/* <LogoCarousel /> */}
    < FeatureOne />
    {/* < FeatureTwo /> */}
    {/* <MediaModule /> */}

    < Portfolio />
    < ContactForm />
    <ContactReact />

    {/* < SocialContacts /> */}
    < Footer />


      {/* </header> */}
    </div>
  );
}

export default App;
