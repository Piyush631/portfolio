import Main from "./pages/Main";

import { BrowserRouter, Route,  Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

import Contact from "./components/Contact";
import LayersPage from "./pages/layers";
import ChatPage from "./pages/chatsphere";
import GymPage from "./pages/gym";
import AirbnbPage from "./pages/airbnb";
import ContactMe from "./pages/contactPage";
import ScrollToTop from "./components/ScrollToTop";



export function App() {
  const excludedRoutes = ['https://portfolio-nu-lovat-76.vercel.app/contact'];

  return (
<div className="h-full w-full bg-gradient-to-r from-[#DFDFDF] to-[#CECECE]">

  <BrowserRouter>

  <ScrollToTop />

  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/brainly" element={<ProjectPage/>}/>
    <Route path="/layers" element={<LayersPage/>}/>
    <Route path="/chatsphere" element={<ChatPage/>}/>
    <Route path="/gym" element={<GymPage/>}/>
    <Route path="/wanderlust" element={<AirbnbPage/>}/>
<Route path="/contact" element={<ContactMe/>} />
<Route path="*" element={<ProjectPage/>} />
  </Routes>
  {!excludedRoutes.includes(location.pathname) && <Contact />}
  </BrowserRouter>

</div>
  )
}
