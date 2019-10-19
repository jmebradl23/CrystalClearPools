import React from 'react';
// import Nav from './Nav/Nav';
// import Faq from './FAQ/FaqMain/Faq';
// import Home from './Home/Home';
// import Services from './Services/Services';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Footer from './Footer/Footer';
// import About from './About/About';
// import Contact from './Contact/Contact';
// import Gallery from './Gallery/GalleryPage/Gallery';
// import ContactRedirect from './ContactRedirect/ContactRedirect';
import Wrapper from './Wrapper/Wrapper';
// import { browserHistory } from 'react-router-dom';

function App() {

  return (
    <div>
      < Wrapper />
    </div>
  )
 
  // return (
  //   <Router>
  //     <div className="App">
  //       <Nav />
  //       <Switch>
  //         <Route path="/about" component={About} />
  //         <Route path="/services" component={Services} />
  //         <Route path="/faq" component={Faq} />
  //         <Route path="/gallery" component={Gallery} />
  //         <Route path="/contact" component={Contact} />
  //         <Route path="/contact-redirect" component={ContactRedirect} />
  //         <Route path="/" exact component={Home} />
  //       </Switch>
  //       <Footer />
  //     </div>
  //   </Router>
  // );
}

export default App;
