

export default function ContactHover(){
    return (
        <div className="h-full  w-full text-black">
                
                           
        <div className="  z-20 pt-24 flex justify-center  items-center gap-4">
        <div className="h-[1px] w-20 bg-gradient-to-r from-gray-300 to-gray-700"></div>
        <div className="font-secondary scale-y-110  font-medium italic md:text-2xl text-lg text-center tracking-tighter text-black">Welcome</div>
        <div className="h-[1px] w-20 bg-gradient-to-r from-gray-700 to-gray-300"></div>
    </div>
    <div className="lg:text-4xl md:text-2xl text-xl font-secondary lg:pt-12 md:pt-8 pt-4 scale-y-120  text-center"><span className="text-black ">WanderLust</span> </div>
    <div className="w-full  pt-10 flex justify-center">
    <div className=" flex flex-wrap  gap-3 w-1/2 justify-center ">
      <button className="bg-black z-50 text-white cursor-pointer   px-2 py-1 rounded-2xl hover:bg-white hover:text-black">React js</button>
      <button className="bg-black z-50 text-white cursor-pointer   px-2 py-1 rounded-2xl hover:bg-white hover:text-black">TypeScript</button>
      <button className="bg-black z-50 text-white cursor-pointer   px-2 py-1 rounded-2xl hover:bg-white hover:text-black">Express</button>
      <button className="bg-black z-50 text-white cursor-pointer   px-2 py-1 rounded-2xl hover:bg-white hover:text-black">MongoDb</button>
      <button className="bg-black z-50 text-white cursor-pointer   px-2 py-1 rounded-2xl hover:bg-white hover:text-black">Mongoose</button>
    </div>
    </div>
  <div className=" flex justify-center pt-8">
    
 
  </div>
  
    </div>
    )
}