// import logo from './logo.svg';
import './index.css' ;
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer';
import NavTop from './components/nav'
import FeatureOne from './components/featureOne'
import Portfolio from './components/portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHero from './components/HomeHero'
// import MediaModule from './components/MediaModule'
import LogoImages from "./components/LogoImages"
// import SocialContacts from "./components/SocialContacts"
import ContactReact from "./components/ContactReact"
// import { Helmet } from "react-helmet"

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
