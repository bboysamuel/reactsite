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
import Privacy from "./components/PrivacyPolicy"
// import { Helmet } from "react-helmet"
import {
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App safeApp">
    < NavTop />
    < Route exact path="/">
    <HomeHero />
    <LogoImages />
      {/* <MediaModule /> */}
    < FeatureOne />
    < Portfolio />
    <ContactReact />
    </Route>

    <Route exact path="/privacy">
      <Privacy />
    </Route>
    < Footer />
    </div>
  );
}

export default App;
