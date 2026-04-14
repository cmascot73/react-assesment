import React from "react";
import Home from "./Home";
import Modules from "./Modules";
import Exams from "./Exams";
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';

function App(){
  return(
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Modules">Modules</Link>
          <Link to="/Exams">Exams</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Modules" element={<Modules/>}/>
          <Route path="/Exams" element={<Exams/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;