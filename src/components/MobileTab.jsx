import Image from "next/image";
import transportIcon from "../assets/transport_icon.svg";
import active_itneary from "../assets/active_itneary.svg";
import active_transport from "../assets/active_transport.svg";
import active_hotel from "../assets/active_hotel.svg";
import active_activity from "../assets/active_activity.svg";
import active_live_information from "../assets/active_live_information.svg";
import Link from "next/link";
import { Home } from "lucide-react";

function MobileTab() {
  return (
    <>
      <section className="w-full bg-gray-100 shadow-xl flex flex-col items-center justify-center shadow-gray-500 border-t border-gray-200 px-2 h-[60px]">
        <div className="container  grid grid-cols-6 gap-4">
          <Link href={"/"} className="container-1 text-center ">
            <Home className="w-7 h-7 m-auto text-green-800" />
            <h1 className="text-[11px]">Home</h1>
          </Link>
          <Link href={"/transports"} className="container-1 text-center ">
            <Image src={active_transport} className="w-7 h-7 m-auto" />
            <h1 className="text-[11px]">Transports</h1>
          </Link>
          <Link href="/hotels" className="container-1 text-center ">
            <Image src={active_hotel} className="w-7 h-7 m-auto" />
            <h1 className="text-[11px]">Hotels</h1>
          </Link>
          <Link href="/activities" className="container-1 text-center ">
            <Image src={active_activity} className="w-7 h-7 m-auto" />
            <h1 className="text-[11px]">Activities</h1>
          </Link>
          <Link href={"live_information"} className="container-1 text-center ">
            <Image src={active_live_information} className="w-7 h-7 m-auto" />
            <h1 className="text-[11px]">Live Info</h1>
          </Link>
          <Link href="/itneary_planning" className="container-1 text-center ">
            <Image src={active_itneary} className="w-7 h-7 m-auto" />
            <h1 className="text-[11px]">Itneary</h1>
          </Link>
        </div>
      </section>
    </>
  );
}
export default MobileTab;
