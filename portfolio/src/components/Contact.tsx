import { CiLinkedin } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";

import { MdOutlineFileDownload } from "react-icons/md";
import { useRef } from "preact/hooks";
import { useInView } from "motion/react";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
export default function Contact (){
  const skill=useRef<HTMLDivElement>(null)
  const isSkill=useInView(skill,{  margin: "-100px" });
    return (
        <div ref={skill} id="contact" className="h-screen  w-full py-28 lg:py-0  overflow-hidden bg-black">
            <div className="h-full  w-full bg-[linear-gradient(45deg,#000000,#2c2c2c,#ffffff40,#2c2c2c,#000000)] ">

           <motion.div
            initial={{y:-550}}
            animate={isSkill ? { y: 0 } : {  }}
            transition={{duration:1.1, delay:0.1 ,ease:"easeInOut"}}
           
           >

       
            <motion.div
       
       
            className="  z-20 pt-24 flex justify-center  items-center gap-4">
            <div className="h-[1px] w-20 bg-gradient-to-r from-gray-300 to-gray-700"></div>
            <div className="font-secondary scale-y-110  font-medium italic text-3xl text-center tracking-tighter text-white/40">I'm available</div>
            <div className="h-[1px] w-20 bg-gradient-to-r from-gray-700 to-gray-300"></div>
        </motion.div>
        <div className="lg:text-7xl md:text-5xl text-4xl font-secondary pt-12 scale-y-120  text-center"><span className="text-white ">Let's</span><span className="text-white/40 italic">{" "}Connect</span> </div>
        <div className="w-full  pt-10 flex justify-center">
        <div className="lg:w-1/3  w-full md:text-lg text-md font-medium  text-center  text-white/50">Feel free to contact me if having any questions.<br/> I'm available for new projects or just for chatting.</div>
        </div>
        <div className="flex flex-col lg:flex-row  w-full   justify-center gap-4">

      
      <div className=" flex justify-center pt-8">
     <Link to="/contact">
      <div className="bg-white/40  group h-15 rounded-4xl w-[280px]  md:w-[500px] flex justify-center items-center lg:w-40">
     
       <button className="bg-black  cursor-pointer group py-[11px] lg:w-36 md:w-[484px]  w-[274px] rounded-4xl text-white/70 flex justify-center items-center gap-2 hover:shadow-[0px_-15px_20px_rgba(255,255,255,0.2)]  hover:shadow-white/40">
  <div className="text-md font-medium  group-hover:shadow-white/40  group-hover:shadow-2xl">Contact Me</div>
  <div className="text-white/40 group-hover:text-white text-xl font-semibold">
    <GoArrowUpRight />
  </div>
</button>

        </div> </Link> 
     
      </div>

      <div className=" flex justify-center pt-8">
    
      <div className="bg-white/40  group h-15 rounded-4xl w-[280px]  md:w-[500px] flex justify-center items-center lg:w-40">
     
       <button className="bg-black  cursor-pointer group py-[11px] lg:w-36 md:w-[484px]  w-[274px] rounded-4xl text-white/70 flex justify-center items-center gap-2 hover:shadow-[0px_-15px_20px_rgba(255,255,255,0.2)]  hover:shadow-white/40">
  <div className="text-md font-medium  group-hover:shadow-white/40  group-hover:shadow-2xl"> Resume</div>
  <div className="text-white/40 group-hover:text-white text-xl font-semibold">
  <MdOutlineFileDownload />

  </div>
</button>

        </div> 
     
      </div>
      </div>
      <div className=" z-50 lg:pt-8  md:pt-24 pt-28 flex justify-center">
      <div className="md:flex gap-5 hidden ">
                <div class="h-10 w-12 flex justify-center cursor-pointer  text-white/60 hover:text-white items-center px-2 py-2 border-1 rounded-3xl text-2xl">

                <a href="https://x.com/Piyush8204" target="_blank">            <RiTwitterXLine /> </a>
</div>
<div  class="h-10 w-12 flex justify-center   text-white/60 cursor-pointer hover:text-white items-center px-2 py-2 border-1 rounded-3xl text-2xl">
<a href="https://www.linkedin.com/in/piyush068/" target="_blank">     <CiLinkedin /> </a>

</div>
< div     class="h-10 w-12 flex justify-center   text-white/60 cursor-pointer hover:text-white  items-center px-2 py-2 border-1 rounded-3xl text-2xl">

<a href="https://github.com/Piyush631" target="_blank">   <IoLogoGithub /> </a>

</div>
               </div>
      </div>
      </motion.div>
        </div>
        </div>
    )
}