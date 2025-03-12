

export default function ContactHover(){
    return (
        <div className="h-full  w-full text-black">
                
                           
        <div className="  z-20 pt-24 flex justify-center  items-center gap-4">
        <div className="h-[1px] w-20 bg-gradient-to-r from-gray-300 to-gray-700"></div>
        <div className="font-secondary scale-y-110  font-medium italic md:text-2xl text-lg text-center tracking-tighter text-black">I'm available</div>
        <div className="h-[1px] w-20 bg-gradient-to-r from-gray-700 to-gray-300"></div>
    </div>
    <div className="lg:text-4xl md:text-2xl text-xl font-secondary lg:pt-12 md:pt-8 pt-4 scale-y-120  text-center"><span className="text-black ">Let's</span><span className="text-black italic">{" "}Connect</span> </div>
    <div className="w-full  pt-10 flex justify-center">
    <div className="lg:w-1/3 hidden md:flex w-full md:text-lg text-md font-medium  text-center text-black">Feel free to contact me if having any questions.<br/> I'm available for new projects or just for chatting.</div>
    </div>
  <div className=" flex justify-center pt-8">
    
 
  </div>
  
    </div>
    )
}