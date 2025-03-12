export default function College(){
    return (
        <div className="mt-8 py-16">
        <div className="flex justify-center  items-center gap-4">
            <div className="h-[1px] w-20 bg-gradient-to-r from-gray-300 to-gray-700"></div>
            <div className="font-secondary scale-y-130 italic text-2xl tracking-tighter text-[#948585]">Education!</div>
            <div className="h-[1px] w-20 bg-gradient-to-r from-gray-700 to-gray-300"></div>
        </div>
        <div className="py-12 flex flex-col md:flex-row md:justify-around gap-3 items-start md:px-16 px-4 text-xl font-medium">

<div className="text-gray-600 flex flex-col" >
       B.tech 
       <div className="text-gray-400">(Computer Science Engg.)</div>
</div>
<div className="text-center">
HIET Shahpur
</div>
<div className="text-gray-600">
sept-20 - Jul 23
</div>
    </div>
    <div className="h-1 w-full px-12">
    <div className="h-[1px]   w-full  overflow-x-clip   bg-gray-400"></div>
    </div>

    <div className="py-12 flex flex-col md:flex-row md:justify-around gap-3 items-start md:px-16 px-4 text-xl font-medium">

    <div className="text-gray-600 flex flex-col" >
       Diploma
       <div className="text-gray-400">(Computer Science Engg.)</div>
</div>
<div>
Govt. Poly Chamba
</div>
<div className="text-gray-600">
Aug-17 - Dec 19
</div>
    </div>
    <div className="h-1 w-full px-12">
    <div className="h-[1px]   w-full  overflow-x-clip   bg-gray-400"></div>
    </div>
        </div>
    )
}