import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga4"
import reportWebVitals from './reportWebVitals';


const trackingId = "G-SZXRBTBX0K"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const SendAnalytics = () => {
    console.log('Send Analytics called the Path:', window.location.pathname);
  
    ReactGA.send({
      hitType: "pageviwe",
      page: window.location.pathname,
    });
  }

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App tab="home" />);

reportWebVitals(SendAnalytics);
