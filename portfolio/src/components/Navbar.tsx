import {   useState } from "preact/hooks"
import {motion} from "framer-motion"
import { RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub} from "react-icons/io5";


import { Link } from "react-router-dom";


const listVariant={
    initial:{
        x:-15,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:0.4,
            staggerChildren:0.2
        }
    }
}
export default function Navbar(){
    const [open,setOpen]=useState(false)
  /*  const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
 
        if (localStorage.getItem("theme") === "dark") {
          document.documentElement.classList.add("dark");
          setDarkMode(true);
        }
      }, []);
      const toggleDarkMode = () => {
        if (darkMode) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }
        setDarkMode(!darkMode);
      }; */
    return (
        <motion.div 
        initial={{y:-200}}
        animate={{y:0}}
        transition={{ease:"easeIn", duration:0.5,delay:0.5}}
        
        className=" fixed w-full px-12 py-5  z-50">
            <div className=" h-full w-full flex justify-between items-center"> 
                
<div className="font-coursive h-10 w-20 px-2 flex italic justify-center font-secondary scale-y-120 items-center rounded-full bg-white ">
 <Link to="/"><div>Piyush</div>   </Link>
    </div>

    
   {/*  <div className=" flex text-xl" onClick={toggleDarkMode}>
          {
            darkMode ? <div className="text-white"><IoMoonOutline /></div>: <div className="text-black">   <IoSunny/>  </div>


          }
          </div> */}
       
<div onClick={()=>{
    setOpen(!open)
    
}} className="h-10 w-10 p-1 bg-[#E7E7E7] cursor-pointer flex justify-center items-center rounded-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
     <motion.line
          x1="3" y1="8" x2="21" y2="8"
          animate={{ rotate: open ? 45 : 0    ,y: open ? 12 - 8 : 0}}
          transition={{ duration: 0.3 }}
               
        />
         <motion.line
          x1="3" y1="16" x2="21" y2="16"
          animate={{ rotate: open ? -45 : 0  ,  y: open ? 12 - 16 : 0,}}
          transition={{ duration: 0.3 }}
              
        />
    </svg>

</div>
            </div>
            {
          
          open &&    <motion.div 
          variants={listVariant} initial="initial" animate="animate"
          className=" flex px-10 flex-col gap-10 py-12  absolute right-15 mt-2 rounded-r-md rounded-l-2xl rounded-b-2xl bg-white h-[355px] w-[315px] ">
               <div>
                <ul className="flex flex-col gap-4 text-2xl ">
              <a href="#home">   <motion.li variants={listVariant}>Home</motion.li></a>
             <a href="#project">     <motion.li variants={listVariant}>Project</motion.li> </a>
                 <a href="#about"><motion.li variants={listVariant}>About</motion.li>  </a> 
             <a href="#contact">   <motion.li variants={listVariant}>Contact</motion.li> </a>
                </ul>
               </div>
               <div className="flex gap-5">
                <motion.div  variants={listVariant} class="h-10 w-12 flex justify-center  text-gray-600 items-center px-2 py-2 border-1 rounded-2xl text-2xl">

                 <a href="https://x.com/Piyush8204" target="_blank">    <RiTwitterXLine /></a> 
</motion.div>
<motion.div  variants={listVariant}  class="h-10 w-12 flex justify-center  text-gray-600 items-center px-2 py-2 border-1 rounded-2xl text-2xl">
<a href="https://www.linkedin.com/in/piyush068/" target="_blank">  <CiLinkedin /> </a>

</motion.div>
< motion.div  variants={listVariant}   class="h-10 w-12 flex justify-center  text-gray-600 items-center px-2 py-2 border-1 rounded-2xl text-2xl">

  <a href="https://github.com/Piyush631" target="_blank">   <IoLogoGithub /> </a>

</motion.div>
               </div>
                </motion.div>
            }

          
            
        </motion.div>
    )
}