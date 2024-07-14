import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./Pages/home";
import { Contact } from "./Pages/contact";
import Footer from "./components/footer";
import Services from "./Pages/services";
import Specialities from "./Pages/specialities";
import Event from "./Pages/event";
import Careers from "./Pages/careers";
import Chatbot from "./components/chatbot";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/specialities" element={<Specialities />} />
            <Route path="/services" element={<Services />} />
            <Route path="/event" element={<Event />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {}
        {isOpen ? <Chatbot /> : <div className="chatbot-logo" onClick={() => setIsOpen(true)}></div>}
        <Footer />
      </Router>
  </>
  );
}

export default App;
