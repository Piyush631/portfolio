import Main from "./pages/Main";

import { BrowserRouter, Route,  Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import LayersPage from "./pages/layers";
import ChatPage from "./pages/chatsphere";
import GymPage from "./pages/gym";
import AirbnbPage from "./pages/airbnb";
import ContactMe from "./pages/contactPage";


export function App() {


  return (
<div className="h-full w-full bg-gradient-to-r from-[#DFDFDF] to-[#CECECE]">

  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/brainly" element={<ProjectPage/>}/>
    <Route path="/layers" element={<LayersPage/>}/>
    <Route path="/chatsphere" element={<ChatPage/>}/>
    <Route path="/gym" element={<GymPage/>}/>
    <Route path="/wanderlust" element={<AirbnbPage/>}/>
<Route path="/contact" element={<ContactMe/>} />
  </Routes>
  {location.pathname !== "/contact" && <Contact />}
  </BrowserRouter>

</div>
  )
}
