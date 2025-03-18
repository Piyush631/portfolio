import {motion} from "framer-motion"
import { useDragControls } from "motion/react"
import { Fragment } from "preact/jsx-runtime";
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

import { TbBrandPrisma } from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";

import { FaFigma } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiMysql } from "react-icons/di";


const data=[
    {name:"React",icon:<FaReact />},
    {name:"JavaScript",icon:<RiJavascriptLine />},
    {name:"Nextjs",icon:<RiNextjsLine />},
    {name:"Express",icon:<SiExpress />},
    {name:"Typescript",icon:<TbBrandTypescript /> },
    {name:"MongoDB",icon:<DiMongodb />},
    {name:"Prisma",icon:<TbBrandPrisma />    },
    {name:"PostgreSQL",icon:<DiPostgresql />    },
    {name:"Figma",icon:<FaFigma /> },
    {name:"Framer Motion",icon:<TbBrandFramerMotion />},
    {name:"My Sql",icon:<DiMysql />    }
]
export default function Skills(){
    const controls = useDragControls()
    return (
<div id="about" className="mt-30 py-28">
    <div className="flex justify-center  items-center gap-4">
        <div className="h-[1px] w-20 bg-gradient-to-r from-gray-300 to-gray-700"></div>
        <div className="font-secondary italic text-2xl tracking-tighter scale-y-130 text-[#948585]">Hello!</div>
        <div className="h-[1px] w-20 bg-gradient-to-r from-gray-700 to-gray-300"></div>
    </div>
    <div className="text-3xl py-5 mt-8 scale-y-130 font-medium tracking-tight leading-8 font-secondary w-full px-5 lg:hidden justify-center text-center flex">
        I help startups and enterprise to establish an emotional connection between their products and happy engaged customers
        </div>
    <div className="flex justify-center lg:gap-5  gap-14 mt-1 lg:mt-8  ">
        <div className="flex flex-col gap-8   items-center justify-center ">
        <motion.button 
        drag
        dragControls={controls}
        dragConstraints={{top:0,left:0,bottom:0,right:0}}
        className="bg-white px-3 rotate-3 w-40 h-10 text-black/85 font-medium text-center text-lg cursor-grab font-regular rounded-3xl py-1.5">Design System</motion.button>
        <motion.button 
        drag
        dragControls={controls}
        dragConstraints={{top:0,left:0,bottom:0,right:0}} className="bg-white px-3 rotate-6 cursor-grab text-black/85 font-medium  text-lg text-center h-10 w-20 rounded-3xl py-1">UI/UX</motion.button>
        <motion.button 
        drag
        dragControls={controls}
        dragConstraints={{top:0,left:0,bottom:0,right:0}}className= " relative bg-white px-3 cursor-grab text-black/85 font-medium  -rotate-3 h-11 left-12  -top-3 text-center  text-lg w-28  rounded-3xl py-1">Resarch</motion.button>
        </div>
        <div className="text-4xl py-5 scale-y-130 font-medium tracking-tight leading-11 font-secondary w-1/2 hidden text-center lg:flex">
         I specialize in developing dynamic, high-performance web applications with smooth animations, scalable architectures, and optimized user experiences.
        </div>
        <div className="flex flex-col  justify-center items-center gap-8"> 
        <motion.button 
        drag
        dragControls={controls}
        dragConstraints={{top:0,left:0,bottom:0,right:0}}
        className="bg-white px-3 -rotate-3 w-32 h-11 text-black/85 font-medium text-center text-lg cursor-grab font-regular rounded-3xl py-1.5">Animtion</motion.button>
          <motion.button 
        drag
        dragControls={controls}
        dragConstraints={{top:0,left:0,bottom:0,right:0}}
        className="bg-white px-3 -rotate-6 w-24 h-11 text-black/85 font-medium text-center text-lg cursor-grab font-regular rounded-3xl py-1.5">React</motion.button>
          <motion.button 
        drag
        dragControls={controls}
        dragConstraints={{top:0,left:0,bottom:0,right:0}}
        className=" relative bg-white px-3  -top-5 rotate-6 w-40 h-11 text-black/85 font-medium text-center text-lg cursor-grab font-regular rounded-3xl py-1.5">Framer Motion</motion.button>
        </div>
    </div>
        <div className=" relative lg:left-90 md:left-70  left:60 flex   mt-8 md:w-1/2 w-full  overflow-hidden " style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>

       
    <motion.div 
    
    animate={{
        x:"-50%"
    }}
    transition={{
        duration:40,
     
        ease:"linear",
        repeat:Infinity
    }}
  className="flex flex-none text-xl text-black/30 gap-16 ">
      {
        Array.from({length:2}).map((_,i)=>(
            <Fragment key={i}>
                {
data.map((d)=> (
    <div key={d} className="flex justify-center gap-2 items-center"> 
    <div className="flex justify-center items-center text-xl">
        {d.icon}
        </div>
        <div className="text-sm">
            {d.name}
        </div>
        </div>
)
               
            )
                }

            </Fragment>
        ))
}
    </motion.div>
    </div>
</div>
    )
}