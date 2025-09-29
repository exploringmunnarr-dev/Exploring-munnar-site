import { X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const data = [
    "Meditaion", "Playing volleyball", "Dancing", "Singing"
]

const MyInterestModal = ({ isMyInterestModal, setIsMyInterestModal }) => {
    // states 
    const [selectedItem, setSelectedItem] = useState([]);

    // ref's 
    const modalRef = useRef(null)

    // useEffect call's 

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsMyInterestModal(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMyInterestModal])

    // functions 

    const handleSelectedItem = (value) => {
        const lists = [...selectedItem];
        if (lists.includes(value)) {
            const filteredList = lists.filter((item, index) => {
                return item != value
            })
            setSelectedItem(filteredList)
        } else {
            setSelectedItem(prev => [...prev, value])
        }
    }

    console.log("selected Items : ", selectedItem)

    return (
        <>
            <section ref={modalRef} className='bg-white fixed top-[50%] left-[50%] translate-y-[-50%] z-10 translate-x-[-50%] w-[400px] h-[420px] py-2 rounded-lg border border-gray-200'>
                <div className="main-container-1 relative">
                    <header className="py-1 border-b border-gray-300 px-2 flex justify-end">
                        <X
                            className="w-8 h-8 cursor-pointer"
                        />
                    </header>
                    <div className="content-container flex flex-wrap gap-3 mt-3 px-4">
                        {data.map((item, index) => {
                            return <div onClick={() => handleSelectedItem(item)} className={`tab w-fit px-4 py-2  cursor-pointer rounded-full border border-gray-300  ${selectedItem.includes(item) ? "btn-green text-white" : "bg-gray-50 text-[#333333]"}`}>
                                <h1 className=''>{item}</h1>
                            </div>
                        })}
                    </div>
                    <div className="footer-container fixed bottom-0 flex justify-end w-[100%] px-4 py-2 ">
                        <button className=' bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] text-white text-xl px-6 cursor-pointer py-2 rounded-xl'>Add</button>
                    </div>
                </div>
            </section>
            <div className="form-tint fixed top-0 right-0 left-0 bottom-0"></div>
        </>
    )
}

export default MyInterestModal
