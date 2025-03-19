import College from "../components/College";


import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";

import Project from "../components/project";
import Skills from "../components/Skills";

export default function Main(){
    return (
        <div className="h-auto overflow-hidden  w-full bg-gradient-to-r from-[#DFDFDF] to-[#CECECE] ">
      <Navbar/>
        <Introduction/>
        <Project/>
        <Skills/>
        <Experience/>
        <College/>

        </div>
    )
}