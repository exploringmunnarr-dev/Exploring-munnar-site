import React from "react";
import transportIcon from "../assets/transport_icon.svg";
import Image from "next/image";
import active_transport from "../assets/active_transport.svg";

const ResponsiveTab = () => {
  return (
    <>
      <section className='w-[100%] bg-[#EEEEEE] px-2 h-[50px] flex items-center gap-2 rounded-t-md z-40" '>
        <div className="tab text-center">
          <h1>Transports</h1>
          <Image src={active_transport} className="w-7 h-7"/>
        </div>
      </section>
    </>
  );
};

export default ResponsiveTab;
