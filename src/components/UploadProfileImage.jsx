import { User, User2, X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const UploadProfileImage = ({ setUploadImgModal, uploadImgModal }) => {
    // states 
    const [file, setFile] = useState(null);
    const [previewImg, setPreviewImg] = useState(null)

    // ref's 
    const modalRef = useRef(null)

    // useEffect call's 
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setUploadImgModal(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);

        }
    }, [uploadImgModal])

    // functions 
    const handleFileUpload = (e) => {
        setFile(e.target.files[0]);
        const previewUrl = URL.createObjectURL(e.target.files[0])
        setPreviewImg(previewUrl)
    }

    const handleRemove = () => {
        setPreviewImg(null);
        setFile(null)
    }

    return (
        <>
            <section ref={modalRef} className='w-[500px] rounded-lg h-fit bg-white absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10'>
                <div className="container-1 relative">
                    <header className="py-2 px-4 items-center  flex justify-between">
                        <p className='font-semibold text-lg text-[#333333]'>Upload Image</p>
                        <X onClick={() => setUploadImgModal(false)}
                            className="w-8 h-8 cursor-pointer"
                        />
                    </header>
                    <div className="input-container px-4 py-3 mt-3">
                        <div className="container-1 relative text-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                            {file ? <Image src={previewImg} width={100} height={100} className='w-[170px] h-[170px] object-cover m-auto rounded-full' /> : <div>
                                <User2 className='text-gray-400 w-[100px] h-[100px] m-auto' />
                                <h1 className='text-[#777777] mt-2'>Drag and drop the image here.</h1>
                                <button className='bg-[#eeeeee] px-3 py-2 rounded-md mt-2 cursor-pointer hover:bg-gray-200'>Choose File</button>
                                <input onChange={(e) => handleFileUpload(e)} type="file" accept='image/*' className='bg-gray-500  absolute top-0 right-0 left-0 bottom-0 opacity-0' />
                            </div>}
                        </div>

                    </div>
                    {file && <div className="preview-container px-4 ">
                        <div className="img-container bg-[#eeeeee] px-2 py-2 rounded-xl flex items-center justify-between gap-2">
                            <div className='flex gap-3 items-center'>
                                <Image src={previewImg} width={100} height={100} className='w-8 h-8 rounded-full' />
                                <h1>{file.name.slice(0, 14)}</h1>
                            </div>
                            <X onClick={handleRemove} className='text-red-500 hover:text-red-600 cursor-pointer' />
                        </div>
                    </div>}

                    <div className="footer-container w-[100%] flex gap-3 justify-end py-3 px-4">
                        <button onClick={() => setUploadImgModal(false)} className='px-4 py-2 rounded-lg text-black bg-gray-300 cursor-pointer '>Cancel</button>
                        <button className='bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] px-4 py-2 rounded-lg text-white cursor-pointer '>Save</button>
                    </div>
                </div>
            </section>
            <div className="form-tint fixed top-0 right-0 left-0 bottom-0"></div>
        </>
    )
}

export default UploadProfileImage
