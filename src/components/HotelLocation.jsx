import Image from 'next/image'
import React from 'react'
import locationImg from '../assets/loc1.svg'
const HotelLocation = () => {
  return (
    <>
        <section className='mt-4 md:mt-10'>
                <header>
                    <h1 className='text-xl font-semibold md:text-3xl'>Location</h1>
                    <div className="img-container mt-4">
                            <Image src={locationImg}/>
                    </div>
                </header>
        </section>
    </>
  )
}

export default HotelLocation