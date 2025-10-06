import React from 'react'
import logo from "../assets/logo.svg";
import Image from 'next/image';
import Link from 'next/link';

const ProfileNavbar = () => {
  return (
    <>
      <section className='px-4 md:px-10 py-2 border-b border-gray-200 '>
        <div className="left-container w-fit">
          <Link href={"/"} className='w-[100px]'>
            <Image src={logo} alt='logo' className='w-[100px]' />
          </Link>
        </div>
      </section>
    </>
  )
}

export default ProfileNavbar