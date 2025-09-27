import Image from "next/image";
import transportIcon from "../assets/transport_icon.svg";
import active_itneary from "../assets/active_itneary.svg";
import active_transport from "../assets/active_transport.svg";
import active_hotel from "../assets/active_hotel.svg";
import active_activity from "../assets/active_activity.svg";
import active_live_information from "../assets/active_live_information.svg";
import Link from "next/link";

function MobileTab() {
  return (
    <>
      <section className="w-full bg-gray-50 shadow-xl flex flex-col items-center justify-center shadow-gray-500 border-t border-gray-200 px-4 h-[60px]">
        <div className="container  grid grid-cols-5 gap-3">
          <div className="container-1 text-center ">
            <Image src={active_transport} className="w-7 h-7 m-auto" />
            <h1 className="text-[12px]">Transports</h1>
          </div>
          <Link href="/hotels" className="container-1 text-center ">
            <Image src={active_hotel} className="w-7 h-7 m-auto" />
            <h1 className="text-[12px]">Hotels</h1>
          </Link>
          <div className="container-1 text-center ">
            <Image src={active_activity} className="w-7 h-7 m-auto" />
            <h1 className="text-[12px]">Activities</h1>
          </div>
          <div className="container-1 text-center ">
            <Image src={active_live_information} className="w-7 h-7 m-auto" />
            <h1 className="text-[12px]">Live Info</h1>
          </div>
          <div className="container-1 text-center ">
            <Image src={active_itneary} className="w-7 h-7 m-auto" />
            <h1 className="text-[12px]">Itneary</h1>
          </div>
        </div>
      </section>
    </>
  );
}
export default MobileTab;
