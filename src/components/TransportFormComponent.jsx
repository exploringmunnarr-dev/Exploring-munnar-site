"use client"
import React, { useState } from 'react'
import CabBookingLayout from './CabBookingLayout';
import SelfDriveLayout from './SelfDriveLayout';
import BikeRentalLayout from './BikeRentalLayout';
import NavbarTabs from './NavbarTabs';

const TransportFormComponent = () => {
    const [activeTab, setActiveTab] = useState("cab");
    return (
        <>
            <div className="flex items-center justify-center md:mx-10 mt-8">
                <div className="bg-[#EEEEEE] rounded-xl  p-4 shadow-lg">
                    <NavbarTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                    {activeTab === "cab" && <CabBookingLayout />}
                    {activeTab === "self" && <SelfDriveLayout />}
                    {activeTab === "bike" && <BikeRentalLayout />}
                </div>
            </div>
        </>
    )
}

export default TransportFormComponent
