import Images from "./imagehover";
import {motion} from "framer-motion"
export default function Introduction(){
    return (
        < div  id="home" className="flex flex-col   gap-2 pt-28 justify-center ">
            <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1], 
              duration: 1.2,}} 
            
            className="flex mt-36 justify-center items-center gap-2 lg:text-7xl md:text-6xl text-4xl">
                <div className="font-secondary">
                I'm <span className="text-[#717171] italic ">Piyush</span>
                </div>
                <div className="h-12 w-16 md:h-16 md:w-24 border-1 rounded-4xl">
                    <img src="./pic2.jpg " className="h-full w-full  border-1 rounded-4xl object-cover"/>
                    
                </div>
                <span className="font-secondary">,</span>
     
            </motion.div>
            
            <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{
               ease: [0.25, 0.1, 0.25, 1], 
               duration: 1.2,delay:0.3}} 
        
            className="flex  justify-center items-center gap-2 lg:text-7xl md:text-6xl text-3xl ">
                <div className="font-secondary"> 
             a Fullstack
                </div>
                <div className="h-12 w-16 md:h-16 md:w-24 border-4 rounded-4xl">
                  <Images/>
                    
                </div>
                <span className="text-[#717171] font-secondary italic "> Developer</span>
     
        
            </motion.div>
        
            <motion.div 
            
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1], 
              duration: 1.2,delay:0.5}} 
            className="flex  justify-center items-center gap-2 lg:text-7xl md:text-6xl text-4xl ">
                <div className="font-secondary">
                based in India
                </div>
                <div className="h-12 w-16 md:h-16 md:w-24 border-1 rounded-4xl">
                    <img src="./pic2.jpg" className="h-full w-full  border-1 rounded-4xl object-cover"/>
                    
                </div>
               
     
            </motion.div>
            <div className="flex justify-center w-full">
                <div className="lg:w-1/3 md:w-full w-full mt-16 md:px-1 px-7 text-md text-[#717171] text-center">
                I have 11 years of experience working on useful and mindful products together with startups and known brands
                </div>
          
            </div>
         <div className="h-10 w-full  fixed bottom-0 z-5 backdrop-blur-xs   drop-shadow-2xl  ">

         </div>

        </div>
    )
}