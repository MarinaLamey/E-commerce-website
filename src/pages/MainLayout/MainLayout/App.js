
import "./App.css"
import "../../../index.css"
import NavBar from "../../../componants/NavBar/NavBar";
import Footer from "../../../componants/Footer/Footer";
import ScrollToTop from "../../../componants/ScrollToTop/ScrollToTop";

import { Outlet } from "react-router-dom";
function App() {
  return (

    <div className="relative App  overflow-hidden" >
      <NavBar/>
      
      <ScrollToTop/>
      <Outlet /> 
      <Footer/>
    </div>
 
  );
}

export default App;
