import React from "react";
import Home from "./Home";
import Modules from "./Modules";
import Exams from "./Exams";
import AbouUs from "./AbouUs";
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';

function App(){
  return(
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Modules">Modules</Link>
          <Link to="/Exams">Exams</Link>
          <Link to="/AboutUs">AboutUs</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Modules" element={<Modules/>}/>
          <Route path="/Exams" element={<Exams/>}/>
          <Route path="/AboutUs" element={<AbouUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;