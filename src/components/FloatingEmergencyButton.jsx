"use client";
import React, { useState } from "react";
import Image from "next/image";
import h1 from "../assets/h1.svg";
import h2 from "../assets/h2.svg";
import h3 from "../assets/h3.svg";
import h4 from "../assets/h4.svg";
import { X } from "lucide-react";
// import phoneIcon from "../assets/phone.svg";

const emergencyContacts = [
    { img: h1, title: "Hill police", phone: "100" },
    { img: h2, title: "Ambulance", phone: "108" },
    { img: h3, title: "Forest Department", phone: "04865-231111" },
    { img: h4, title: "Emergency helpline", phone: "112" },
];

const FloatingEmergencyButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Button - Mobile Only */}
            <div className="md:hidden fixed bottom-16 right-2 z-50">
                {/* Emergency Contacts Dropdown */}
                {isOpen && (
                    <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl p-4 w-64 mb-2 animate-in slide-in-from-bottom-4">
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-300">
                            <h3 className="font-medium text-lg text-[#333333]">
                                Emergency Contacts
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700 text-xl"
                            >
                                <X size={16}/>
                            </button>
                        </div>
                        <div className="space-y-3">
                            {emergencyContacts.map((contact, index) => (
                                <a
                                    key={index}
                                    href={`tel:${contact.phone}`}
                                    className="flex items-center justify-between p-3 bg-[#EEEEEE] rounded-lg hover:bg-[#E0E0E0] transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={contact.img}
                                            alt={contact.title}
                                            width={32}
                                            height={32}
                                            className="w-8 h-8"
                                        />
                                        <div>
                                            <p className="font-semibold text-sm text-[#333333]">
                                                {contact.title}
                                            </p>
                                            <p className="text-xs text-[#777777]">{contact.phone}</p>
                                        </div>
                                    </div>
                                    <button className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </button>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main Floating Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] 
                     text-white rounded-full p-4 shadow-lg flex items-center justify-center
                     transition-all duration-300 transform hover:scale-105"
                    aria-label="Emergency contacts"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                </button>
            </div>
        </>
    );
};

export default FloatingEmergencyButton;