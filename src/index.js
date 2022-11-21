import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'
import ReactGA from "react-ga"
   
const TRACKING_ID = "G-SZXRBTBX0K";
ReactGA.initialize(TRACKING_ID);

const container = document.querySelector("#root");
const root = createRoot(container); 
root.render(<App tab="home" />);