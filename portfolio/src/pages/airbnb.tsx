import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react"; 
import { useEffect } from "react";
import {motion} from "framer-motion"

import Back from "../components/Back";

gsap.registerPlugin(ScrollTrigger);

export default function AirbnbPage() {
    useEffect(() => {
        const leftXValues = [-400, -500, -200]; 
        const rightXValues = [400, 500, 200]; 
        const leftRotationValues = [-15, -10, -18]; 
        const rightRotationValues = [15, 10, 18];
        const yValues = [50, -80, -200]; 

        gsap.utils.toArray(".row").forEach((row, index) => {
            //@ts-ignore
            const cardLeft = row.querySelector(".left-card");
               //@ts-ignore
            const cardRight = row.querySelector(".right-card");

            gsap.to(cardLeft, {
                x: leftXValues[index],
                y: yValues[index],
                rotate: leftRotationValues[index],
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".main",
                    start: "top center",
                    end: "bottom top",
                    scrub: 1.5, // Smoother scrub effect
                }
            });

            gsap.to(cardRight, {
                x: rightXValues[index],
                y: yValues[index],
                rotate: rightRotationValues[index],
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".main",
                    start: "top center",
                    end: "bottom top",
                    scrub: 1.5,
                }
            });
        });
    }, []);

    const generateRows = () => {
        const rows = [];
        for (let i = 1; i <= 2; i++) {
            rows.push(
                <div key={i} className="row z-50 relative flex py-6 overflow-x-clip w-full justify-center  gap-4">
                    <div className="card  z-50 relative left-card ov w-[500px]">
                        <img src={`./img-a-${2 * i - 1}.png`} className="rounded-2xl" style={{ transformOrigin: "center" }} />
                    </div>
                    <div className="card relative right-card w-[500px]">
                        <img src={`./img-a-${2 * i}.png`} className="rounded-2xl" style={{ transformOrigin: "center" }} />
                    </div>
                </div>
            );
        }
        return rows;
    };

    return (
        <div>
<Back/>
        
      <div className="w-full pt-24 px-8">
                         <ReactLenis root>
                             <div className="flex pt-24 flex-col gap-10">
                                 <motion.div 
                            
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              ease: [0.25, 0.1, 0.25, 1], 
                              duration: 1.2}} 
                                 
                                 className="font-secondary scale-y-130 font-medium text-5xl">WanderLust</motion.div>
                                 < motion.div
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                          type: "spring",
                                          stiffness: 100,
                                          damping: 12,
                                          duration: 2,
                                          delay:0.2
                                        }}
                                 
                                 className="flex gap-3">
                                     <div className="bg-white text-center rounded-3xl px-2 text-sm py-1">Full Stack</div>
                                     <div className="bg-white text-center rounded-3xl px-2 text-sm py-1">Website</div>
                                 </motion.div>
                                 <motion.div 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                          ease: [0.25, 0.1, 0.25, 1], 
                                          duration: 1.2,delay:0.3}} 
                                 
                                 className="lg:w-1/2  w-full  text-xl leading-6 text-black/50 font-semibold">
                                 Wanderlust is a travel platform built with JavaScript for the frontend and Node.js with Express for the backend. It allows users to search and add hotels, similar to Airbnb. Featuring authentication with login and signup, it supports CRUD operations for managing users and hotel listings.
                                 </motion.div>
                                 <motion.div
                                       initial={{ y: 20, opacity: 0 }}
                                       animate={{ y: 0, opacity: 1 }}
                                       transition={{
                                         ease: [0.25, 0.1, 0.25, 1], 
                                         duration: 1.2,delay:0.5}} 
                                 
                                 className="lg:flex-row flex flex-col gap-3">
                         <a href="https://airbnb-lite.onrender.com/listing" target="_blank">             <button className="bg-black shadow-2xl shadow-black hover:shadow-[0px_-5px_10px_rgba(255,255,255,0.2)] hover:shadow-black/40 font-semibold cursor-pointer text-white lg:w-28 w-full h-11 text-md rounded-3xl">
                                         Live Link
                                     </button> </a>
                                     <a href="https://github.com/Piyush631/Airbnb_lite" target="_blank">            <button className="text-black border border-black/60 cursor-pointer font-semibold lg:w-28 hover:border-black h-11 text-md rounded-3xl w-full">
                                         Git Hub
                                     </button> </a>
                                 </motion.div>
                             </div>
                             <div className="main relative w-full gap-4 mt-16 justify-center">
                             <div className="data absolute md:top-36 top-0 bottom-0 left-0 right-0  ">
                             
                             <div className="h-full  w-full text-black">
                
                           
                <div className="  z-20 pt-24 flex justify-center  items-center gap-4">
                <div className="h-[1px] w-20 bg-gradient-to-r from-gray-300 to-gray-700"></div>
                <div className="font-secondary scale-y-110  font-medium italic md:text-2xl text-lg text-center tracking-tighter text-black">Welcome</div>
                <div className="h-[1px] w-20 bg-gradient-to-r from-gray-700 to-gray-300"></div>
            </div>
            <div className="lg:text-4xl md:text-2xl text-xl font-secondary lg:pt-12 md:pt-8 pt-4 scale-y-120  text-center"><span className="text-black ">WanderLust</span> </div>
            <div className="w-full  lg:pt-10 pt-7 flex justify-center">
            <div className=" flex flex-wrap  lg:gap-3 gap-2 lg:w-1/2 w-full justify-center ">
              <button className="bg-black z-50 text-white cursor-pointer text-xs lg:text-md px-2 py-1 rounded-2xl hover:bg-white hover:text-black">HTML</button>
              <button className="bg-black z-50 text-white cursor-pointer text-xs lg:text-md   px-2 py-1 rounded-2xl hover:bg-white hover:text-black">JavaScript</button>
              <button className="bg-black z-50 text-white cursor-pointer text-xs lg:text-md   px-2 py-1 rounded-2xl hover:bg-white hover:text-black">Express</button>
              <button className="bg-black z-50 text-white cursor-pointer text-xs lg:text-md   px-2 py-1 rounded-2xl hover:bg-white hover:text-black">EJS</button>
              <button className="bg-black z-50 text-white cursor-pointer text-xs lg:text-md   px-2 py-1 rounded-2xl hover:bg-white hover:text-black">Mongoose</button>
              <button className="bg-black z-50 text-white cursor-pointer text-xs lg:text-md  px-2 py-1 rounded-2xl hover:bg-white hover:text-black">MongoDb</button>
            </div>
            </div>
          <div className=" flex justify-center pt-8">
            
         
          </div>
          
            </div>
                             
                             </div>
                              
                             {generateRows()}
                             </div>
                         </ReactLenis>
                         </div>
                     </div>
    );
}
