import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/MainPage';
import ShowDL from "./Page/PDG SHOW/DL";
import ShowCO from "./Page/PDG SHOW/CO";
import ShowWT from "./Page/PDG SHOW/WT";
import Upload from "./Page/uploadpdf";
import Ai from "./Page/Ai";
function App() {
  return (

    <Router>
      <div>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/show/dl" element={<ShowDL />} /> 
           <Route path="/show/co" element={<ShowCO />} /> 
           <Route path="/show/wt" element={<ShowWT />} /> 
           <Route path="/upload" element={<Upload />} /> 
           <Route path="/ai" element={<Ai/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
