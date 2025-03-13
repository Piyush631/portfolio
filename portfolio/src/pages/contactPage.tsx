

import { useRef, useState } from "react";
import Back from "../components/Back";
import emailjs from '@emailjs/browser';
import{motion} from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import Images from "../components/imagehover";

export default function ContactMe(){
    const form = useRef<HTMLFormElement | null>(null);
    const[success,setSuccess]=useState(false)
    const [error,setError]=useState(false)
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_bcw42dy" as string, "template_mdc0mpj" as string, form.current, {
        publicKey: "3XWlKZ01OGUjpIg-k" as string,
      })
      .then(
        () => {
            setSuccess(true)
         form.current?.reset()
        },
        () => {
         setError(true)
        }
      );
  };
    return (

      <div className="h-screen flex flex-col lg:flex-row   w-screen bg-gradient-to-r from-[#DFDFDF] to-[#CECECE] ">
        <Back/>

<div className="md:h-full h-96 mt-8 w-full flex flex-col gap-4 justify-center items-center text-black">


    <div className="hidden md:flex">
    <TypeAnimation
      sequence={[
        'Welcome',
        1000,
        'Say Hello',
        1000, 
  
       
      
      ]}
      wrapper="span"
      speed={20}
      style={{  display: 'inline-block' }}
      className="lg:text-3xl md:text-3xl text-xl"
      repeat={Infinity}
    />
    </div>
    <div>
   <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1], 
              duration: 1.2,}} 
            
            className="flex text-black lg:mt-24 md:mt-16 mt-8 justify-center items-center gap-2 lg:text-5xl md:text-5xl text-3xl">
                <div className="font-secondary">
                I'm <span className="text-[#717171] italic ">Piyush</span>
                </div>
                <div className="h-12 w-16 md:h-14 md:w-20 border-1 rounded-4xl">
                    <img src="./photo.jpg " className="h-full w-full  border-1 rounded-4xl object-cover"/>
                    
                </div>
                <span className="font-secondary">,</span>
     
            </motion.div>
            
            <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{
               ease: [0.25, 0.1, 0.25, 1], 
               duration: 1.2,delay:0.3}} 
        
            className="flex   text-black justify-center items-center gap-2 lg:text-5xl md:text-5xl text-3xl ">
                <div className="font-secondary"> 
             a Fullstack
                </div>
                <div className="h-12 w-16 md:h-14 md:w-20 border-4 rounded-4xl">
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
            className="flex  text-black justify-center items-center gap-2 lg:text-5xl md:text-5xl text-3xl ">
                <div className="font-secondary">
                based in India
                </div>
                <div className="h-12 w-16 md:h-14 md:w-20 border-1 rounded-4xl">
                    <img src="./photo.jpg" className="h-full w-full  border-1 rounded-4xl object-cover"/>
                    
                </div>
               
     
            </motion.div>
    </div>
  
</div>
        <motion.div
        className=" w-full h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="  h-full pt-16  text-black flex flex-col items-center justify-center lg:flex-row lg:justify-around px-2 sm:px-4 md:px-8 lg:px-12 xl:px-12">
          
            <form ref={form} onSubmit={sendEmail} className="right text-black h-full lg:h-full lg:w-[480px]  w-full flex flex-col justify-center  gap-5 p-6 lg:p-8 md:p-6 backdrop-blur-3xl  rounded-xl ">
               

              
            
                
                <div className="text-md">Dear Piyush,</div>
       
           <textarea rows={6}  name="user_message" className=" border-b-2 focus:border-black outline-none transition duration-300"/>

        
                
                <div>
                    My mail address is
                </div>
                <input name="user_email" className="py-1.5   border-b-2 focus:border-black outline-none transition duration-300" type="text"/>
                <div>Regards</div>
                <button className="py-2 rounded-md cursor-pointer bg-[#c0afd1] dark:bg-[#a27fc7] font-medium">Send</button>
                <div>
  {success && <div className="text-green-600">Message send successfully</div>}
  {error && <div className="text-red-600">Failed to send message</div>}
</div>

     
        
            </form>
      

            
        </div>
        </motion.div>
    </div>
    )
}