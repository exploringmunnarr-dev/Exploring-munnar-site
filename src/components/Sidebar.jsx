import { Heart, LogOut, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Sidebar = ({ setIsSidebar }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsSidebar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <section
        ref={modalRef}
        className="bg-white shadow-lg shadow-black w-[200px] rounded-lg py-2"
      >
        <div className="navlinks ">
          <button className="w-[90%] m-auto rounded-lg text-left hover:bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:text-white px-4 py-2 cursor-pointer flex items-center gap-2 group">
            <Heart className="text-gray-800 w-5 h-5 group-hover:text-white" />{" "}
            Wishlist
          </button>
          <Link
            href={"/users/profile"}
            className="text-left w-[90%] m-auto rounded-lg px-4 py-2 hover:bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:text-white cursor-pointer flex items-center gap-2 group"
          >
            <User className="text-gray-800 w-5 h-5 group-hover:text-white" />{" "}
            Profile
          </Link>
          <button className="text-left w-[90%] m-auto rounded-lg px-4 py-2 hover:bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:text-white cursor-pointer flex items-center gap-2 group">
            <LogOut className="text-gray-800 w-5 h-5 group-hover:text-white" />{" "}
            Log out
          </button>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
