import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { HashRouter, Routes, Route } from "react-router-dom";
import {About} from './components/F2';
import "./components/bootstrap-icons/bootstrap-icons.css";
import "./components/boxicons/css/boxicons.min.css"
import "./components/glightbox/css/glightbox.min.css"
import "./components/remixicon/remixicon.css"
import "./components/swiper/swiper-bundle.min.css"
<link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet"></link>




function App() {
  return (
    <div>
      <HashRouter>
        
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
