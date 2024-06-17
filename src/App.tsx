import { Route, Routes } from "react-router-dom";
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LandingPage } from "./routes/routes";
import { Team } from "./routes/routes";
import { Services } from "./routes/routes";
import { Contact } from "./routes/routes";

function App() {
  return (
   
      <div className="App custom-sider">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ToastContainer />
      </div>
    
  );
}

export default App;
