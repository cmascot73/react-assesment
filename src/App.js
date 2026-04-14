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
        <nav className="flex justify-center items-center text-white bg-blue-500 h-20 w-full">
          <Link to="/" class="flex mr-3">Home</Link>
          <Link to="/Modules" class="flex mr-3">Modules</Link>
          <Link to="/Exams" class="flex mr-3">Exams</Link>
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