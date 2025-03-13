import Main from "./pages/Main";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./components/Contact";
import LayersPage from "./pages/layers";
import ChatPage from "./pages/chatsphere";
import GymPage from "./pages/gym";
import AirbnbPage from "./pages/airbnb";
import ContactMe from "./pages/contactPage";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const location = useLocation(); 

  return (
    <div className="h-full w-full bg-gradient-to-r from-[#DFDFDF] to-[#CECECE]">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/brainly" element={<ProjectPage />} />
        <Route path="/layers" element={<LayersPage />} />
        <Route path="/chatsphere" element={<ChatPage />} />
        <Route path="/gym" element={<GymPage />} />
        <Route path="/wanderlust" element={<AirbnbPage />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<ProjectPage />} />
      </Routes>

     
      {location.pathname !== "/contact" && <Contact />}
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
