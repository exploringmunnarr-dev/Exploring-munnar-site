import React from 'react'
import logo from "../assets/logo.svg";
import Image from 'next/image';

const ProfileNavbar = () => {
  return (
    <>
        <section className='px-4 md:px-10 py-2 border-b border-gray-200'>
            <div className="left-container">
                <Image src={logo} alt='logo' className=''/>
            </div>
        </section>
    </>
  )
}

export default ProfileNavbar