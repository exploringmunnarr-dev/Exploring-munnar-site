"use client";

import React from "react";
import { Check } from "lucide-react";

const SuccessPopup = ({ onClose, modalTitle = "Your booking has been confirmed." }) => {


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="relative w-full max-w-sm rounded-xl bg-white p-8 text-center shadow-xl">
                {/* Top check circle */}
                <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-green-800">
                    <Check className="h-8 w-8 text-white" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-gray-800">
                    Success
                </h2>

                <p className="mt-3 text-sm text-gray-600">
                    {modalTitle} <br /> We&apos;ll get back to you soon!
                </p>

                <button
                    onClick={onClose}
                    className="mt-6 w-full rounded-md bg-green-800 cursor-pointer py-2 text-sm font-medium text-white hover:bg-green-900 transition-colors"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default SuccessPopup;
