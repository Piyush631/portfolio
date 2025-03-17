import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
export default function Back(){
    return (
        <motion.div 
        initial={{y:-200}}
        animate={{y:0}}
        transition={{ease:"easeIn", duration:0.5,delay:0.5}}
        
        className=" fixed w-full px-12 py-5  z-100">
             <Link to="/"> <div className="flex  gap-1 items-center">

 <div className="bg-white  w-16 px-3 py-1  h-8 font-secondary scale-y-120 italic rounded-3xl flex justify-center items-center">

 
<div className="text-lg scale-x-125"><LiaLongArrowAltLeftSolid />
</div>
<div>
    Back
</div>
</div>
</div>
</Link>
        </motion.div>
    )
}