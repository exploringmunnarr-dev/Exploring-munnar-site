"use client"
import Footer from '@/components/Footer'
import ItnearyFaq from '@/components/ItnearyFaq'
import ItnearyFormContainer from '@/components/ItnearyFormContainer'
import ItnearyHeader from '@/components/ItnearyHeader'
import Navbar from '@/components/Navbar'
import { FormDataProvider } from '@/context/FormProvider'
import React from 'react'

const page = () => {

    return (
        <>
            <Navbar />
            <ItnearyHeader />
            <FormDataProvider>
                <ItnearyFormContainer />
            </FormDataProvider>
            <ItnearyFaq />
            <Footer />
        </>
    )
}

export default page
