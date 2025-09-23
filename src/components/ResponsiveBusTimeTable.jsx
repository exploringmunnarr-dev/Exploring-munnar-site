import React from 'react'
const tableData = [
  { route: "Munnar - Coimbatore", depature: "7.30 AM", arraival_time: "7.30 PM", bus_type: { name: "Kerala RTC", category: "AC SLEEPER" }, duration: "Duration 5.30 hours", price: "Price RS 280" },
  { route: "Munnar - Coimbatore", depature: "7.30 AM", arraival_time: "7.30 PM", bus_type: { name: "Kerala RTC", category: "AC SLEEPER" }, duration: "Duration 5.30 hours", price: "Price RS 280" },
  { route: "Munnar - Coimbatore", depature: "7.30 AM", arraival_time: "7.30 PM", bus_type: { name: "Kerala RTC", category: "AC SLEEPER" }, duration: "Duration 5.30 hours", price: "Price RS 280" },
  { route: "Munnar - Coimbatore", depature: "7.30 AM", arraival_time: "7.30 PM", bus_type: { name: "Kerala RTC", category: "AC SLEEPER" }, duration: "Duration 5.30 hours", price: "Price RS 280" },
  { route: "Munnar - Coimbatore", depature: "7.30 AM", arraival_time: "7.30 PM", bus_type: { name: "Kerala RTC", category: "AC SLEEPER" }, duration: "Duration 5.30 hours", price: "Price RS 280" },
]
const ResponsiveBusTimeTable = () => {

  const formatDuration = (text)=>{
    const formatedDuration = text.trim().replace("Duration", "");
    return formatedDuration
    
  }

  return (
    <>
      <section className='mt-4 md:hidden space-y-2'>
        {tableData.map((item, index)=>{
            return <div className='time-table-card bg-gray-100 rounded-lg p-2'>
                <div className="header flex items-center justify-between">
                   <div className="container-1">
                     <h1 className="font-semibold">{item.route}</h1>
                    
                   </div>
                   <button className='btn-green text-white px-2 py-1 text-sm rounded-lg'>{item.bus_type.category}</button>
                    
                </div>
                <div className="body-container flex items-center gap-4 mt-6 mb-2">
                  <h1 className='text-sm  whitespace-nowrap'>{item.depature}</h1>
                  <div className='w-[100%] relative'>
                    <h1 className='absolute bottom-0 left-[50%] translate-x-[-50%] text-gray-600'>{formatDuration(item.duration)}</h1>
                    <div className="dot-container w-2 h-2 bg-black absolute top-[-4px] rounded-full left-[-6px]"></div>
                    <div className='border-b w-[100%] h-[1px] border-gray-400'></div>
                    <div className="dot-container w-2 h-2 bg-black absolute top-[-4px] rounded-full right-[-6px]"></div>
                  </div>
                  <h1 className='text-sm whitespace-nowrap text-[14px]'>{item.arraival_time}</h1>
                </div>
                <div className="footer-container mt-4 flex justify-between ">
                  <h1 className='text-gray-600 '>{item.bus_type.name}</h1>
                  <h1 className="md:text-[#216432] text-[#af4300] text-[16px] font-semibold">{item.price}</h1>
                </div>
            </div>
        })}
      </section>
    </>
  )
}

export default ResponsiveBusTimeTable
