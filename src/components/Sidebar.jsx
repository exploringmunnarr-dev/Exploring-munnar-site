import React from 'react'

const Sidebar = () => {
    return (
        <>
            <section className='bg-white shadow-lg shadow-black w-[200px] rounded-lg'>
                <div className="navlinks ">
                    <button className='w-full text-left hover:bg-green-800 hover:text-white px-4 py-2 cursor-pointer rounded-t-lg'>Transports</button>
                    <button className='w-full text-left px-4 py-2 hover:bg-green-800 hover:text-white cursor-pointer'>Hotels & stays</button>
                    <button className='w-full text-left px-4 py-2 hover:bg-green-800 hover:text-white cursor-pointer'>Activities </button>
                    <button className='w-full text-left px-4 py-2 hover:bg-green-800 hover:text-white cursor-pointer'>Live information</button>
                    <button className='w-full text-left px-4 py-2 hover:bg-green-800 hover:text-white cursor-pointer rounded-b-lg'>Itneary planning</button>
                </div>
            </section>
        </>
    )
}

export default Sidebar