

import { useRef, useState } from "react";
import Back from "../components/Back";
import emailjs from '@emailjs/browser';
import{motion} from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';

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

      <div className="h-screen flex flex-col md:flex-row   w-screen bg-black/90 ">
        <Back/>

<div className="md:h-full h-96 md:w-1/2  w-full flex flex-col gap-4 justify-center items-center text-white">


    <div>
    <TypeAnimation
      sequence={[
       
        'Say Hello',
        1000, 
       
      
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
    <div>
    <TypeAnimation
      sequence={[
       
        
        'Feel free to  email me ',
        1000,
      
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  
</div>
        <motion.div
        className="md:h-full md:w-1/2 w-full h-1/2"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="  h-full pt-16  text-white flex flex-col items-center justify-center lg:flex-row lg:justify-around px-2 sm:px-4 md:px-8 lg:px-12 xl:px-12">
          
            <form ref={form} onSubmit={sendEmail} className="right h-full lg:h-full lg:w-[480px]  w-full flex flex-col justify-center  gap-5 p-6 lg:p-8 md:p-6 backdrop-blur-3xl text-white rounded-xl ">
               

              
            
                
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