import {easeInOut, motion} from "framer-motion"
import { Link } from "react-router-dom"

export default function Project(){
    return (
        <div  id="project" className= "h-full    w-full mt-24 flex  flex-wrap  justify-center gap-8  px-12" >
      
      <a href="/brainly"> 
           <div className="lg:h-[450px] mt-8 lg:w-[580px] md:h-[340px] md:w-[330px] h-[320px] w-[300px]  text-gray-600 hover:text-black ">
           <div className="h-full flex justify-center items-center w-full bg-[#EAEAEA] rounded-2xl">
            <div className=" relative md:h-[280px] md:w-[300px] h-[280px] w-[260px]   lg:h-[330px]  lg:w-[420px] ">   
                  
              
                       <img src="./brainly-pc.png" className="h-full absolute bg-[#EAEAEA]  rounded-2xl w-full object-contain"/>
                        <motion.img
  src="./brainly-m.png"
  className="h-full absolute w-full object-cover "
  initial={{ opacity: 0}} 
 
  whileHover={{ opacity: 1 ,scale:1.1}} 
  transition={{ duration: 0.5, ease: easeInOut }}
/>
      
            </div>
            </div>
          <div className="flex  pt-3 w-full  justify-between ">
            <div className="text-xl font-semibold">Memorix</div>
        <div className="flex gap-1">
            <button className="bg-[#EAEAEA] px-3 py-1 rounded-2xl">FullStack</button>
            <button className="bg-[#EAEAEA] px-3 py-1 rounded-2xl">Web</button>
        </div>
          </div>
           </div>
           
        </a>
        <a href="/layers"> 
           <div className=" h-[320px] w-[400px] text-gray-600 lg:h-[450px] mt-8 lg:w-[580px] md:h-[340px] md:w-[330px]  hover:text-black ">
            <div className="h-full flex justify-center items-center w-full bg-[#EAEAEA] rounded-2xl">
            <div className=" relative md:h-[280px] md:w-[300px] h-[280px] w-[260px]   lg:h-[350px]  lg:w-[460px] rounded-2xl  ">   
                  
                        <img src="./layers-p.png" className="h-full absolute rounded-2xl bg-[#EAEAEA]  w-full object-cover"/>
                        < motion.div
                          className=" absolute  flex gap-4 lg:h-[350px] lg:w-[460px] md:h-[280px] md:w-[300px] h-[280px] w-[260px] bg-[#EAEAEA] "
                          initial={{ opacity: 0 }} 
                         
                          whileHover={{ opacity: 1 ,scale:1.1}} 
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <div className="lg:h-[340px] h-[300px] w-[140px]  px-2 border-gray-900  rounded-2xl lg:w-[200px]">
                                <img src="./layer-m.png" className="h-full rounded-2xl w-full object-contain"/>
                            </div>
                            <div className="lg:h-[340px] h-[300px] w-[140px]  px-2 border-gray-900  rounded-2xl lg:w-[200px]">
                                <img src="./layer-m2.png" className="h-full rounded-2xl w-full object-contain"/>
                            </div>
                        </motion.div>
            </div>
            </div>
            <div className="flex  pt-3 w-full  justify-between ">
            <div className="text-xl font-semibold">Layers</div>
        <div className="flex gap-1">
            <button className="bg-[#EAEAEA] px-3 py-1 rounded-2xl">UI/Ux</button>
            <button className="bg-[#EAEAEA] px-3 py-1 rounded-2xl">Web</button>
        </div>
          </div>
          </div>

</a>
<a href="/chatsphere"> 
          <div className="lg:h-[450px] mt-8 lg:w-[580px] md:h-[340px] md:w-[330px] h-[320px] w-[300px]  text-gray-600 hover:text-black ">
           <div className="h-full flex justify-center items-center w-full bg-[#EAEAEA] rounded-2xl">
            <div className=" relative md:h-[280px]  md:w-[300px] h-[280px] w-[260px]   lg:h-[355px]  lg:w-[455px] ">   
                  
                        <img src="./chat-pc2.png" className="h-full border-black border-2  absolute bg-[#EAEAEA]  rounded-2xl w-full object-cover"/>
                        <motion.img
  src="./chat-m.png"
  className="h-full absolute w-full object-cover "
  initial={{ opacity: 0 }} 
 
  whileHover={{ opacity: 1 ,scale:1.1}} 
  transition={{ duration: 0.5, ease: easeInOut }}
/>
                   
            </div>
            </div>
          <div className="flex  pt-3 w-full  justify-between ">
            <div className="text-xl font-semibold">ChatSphere</div>
        <div className="flex gap-1">
            <button className="bg-[#EAEAEA] px-3 py-1 rounded-2xl">WebRtc</button>
            <button className="bg-[#EAEAEA] px-3 py-1 rounded-2xl">Web</button>
        </div>
          </div>
           </div>
           
        </a>
        <a href="/wanderlust"> 
           <div className=" h-[320px] w-[400px] text-gray-600 lg:h-[450px] mt-8 lg:w-[580px] md:h-[340px] md:w-[330px]  hover:text-black ">
            <div className="h-full flex justify-center items-center w-full bg-[#EAEAEA] rounded-2xl">
            <div className=" relative md:h-[280px] md:w-[300px] h-[280px] w-[260px]   lg:h-[350px]  lg:w-[460px] rounded-2xl  ">   
                  
                        <img src="./airbnb-pc.png" className="h-full border-2 absolute rounded-2xl bg-[#EAEAEA]  w-full object-contain"/>
                        < motion.div
                          className=" absolute  flex gap-4 lg:h-[350px] md:h-[280px] md:w-[300px] h-[280px] w-[260px] justify-center lg:w-[460px] bg-[#EAEAEA] "
                          initial={{ opacity: 0 }} 
                         
                          whileHover={{ opacity: 1 ,scale:1.1}} 
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <div className="lg:h-[340px] h-[280px] w-[140px]  px-2 border-gray-900  rounded-2xl lg:w-[190px]">
                                <img src="./airbnb-m.png" className="h-full border-2 rounded-2xl w-full object-contain"/>
                            </div>
                            <div className="lg:h-[340px] h-[280px] w-[140px]  px-2 border-gray-900  rounded-2xl lg:w-[190px]">
                                <img src="./airbnb-m2.png" className="h-full border-2 rounded-2xl w-full object-contain"/>
                            </div>
                        </motion.div>
            </div>
            </div>
            <div className="flex  pt-3 w-full  justify-between ">
            <div className="text-xl font-semibold">WanderLust</div>
        <div className="flex gap-1">
            <button className="bg-[#EAEAEA] px-3 py-1 rounded-2xl">FullStack</button>
            <button className="bg-[#EAEAEA] px-3 py-1 rounded-2xl">Web</button>
        </div>
          </div>
          </div>
         </a>
           
         <Link to="/gym"> 
           <div className=" h-[320px] w-[400px] text-gray-600 lg:h-[450px] mt-8 lg:w-[580px] md:h-[340px] md:w-[330px]  hover:text-black ">
            <div className="h-full flex justify-center items-center w-full bg-[#EAEAEA] rounded-2xl">
            <div className=" relative md:h-[280px] md:w-[300px] h-[280px] w-[260px]   lg:h-[350px]  lg:w-[460px] rounded-2xl  ">   
                  
                        <img src="./img-g-1.png" className="h-full border-4 border-black absolute rounded-2xl bg-[#EAEAEA]  w-full object-contain"/>
                        < motion.div
                          className=" absolute  flex gap-4 lg:h-[350px] md:h-[280px] md:w-[300px] h-[280px] w-[260px] justify-center lg:w-[460px] bg-[#EAEAEA] "
                          initial={{ opacity: 0 }} 
                         
                          whileHover={{ opacity: 1,scale:1.1 }} 
                          transition={{ duration: 0.5, ease: "easeIn" }}
                        >
                            <div className="lg:h-[340px] h-[280px] w-[140px]  px-2 border-gray-900  rounded-2xl lg:w-[190px]">
                                <img src="./gym-m.png" className="h-full border-2 rounded-2xl w-full object-contain"/>
                            </div>
                            <div className="lg:h-[340px] h-[280px] w-[140px]  px-2 border-gray-900  rounded-2xl lg:w-[190px]">
                                <img src="./gym-m2.png" className="h-full border-2 rounded-2xl w-full object-contain"/>
                            </div>
                        </motion.div>
            </div>
            </div>
            <div className="flex  pt-3 w-full  justify-between ">
            <div className="text-xl font-semibold">Power Gym</div>
        <div className="flex gap-1">
            <button className="bg-[#EAEAEA] px-3 py-1 rounded-2xl">FullStack</button>
            <button className="bg-[#EAEAEA] px-3 py-1 rounded-2xl">Web</button>
        </div>
          </div>
          </div>
         </Link>

        </div>
    )
}