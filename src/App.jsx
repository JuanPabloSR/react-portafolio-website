import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ReactGA from "react-ga4"
import reportWebVitals from './reportWebVitals';

const trackingId = "G-SZXRBTBX0K"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

const SendAnalytics = () => {
  console.log('Send Analytics called the Path:', window.location.pathname);

  ReactGA.send({
    hitType: "pageviwe",
    page: window.location.pathname,
  });
}


reportWebVitals(SendAnalytics)
export default App;