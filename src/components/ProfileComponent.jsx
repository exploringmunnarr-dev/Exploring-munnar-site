import { Briefcase } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ProfileComponent = () => {
  // router
  const router = useRouter();

  //   params
  const searchParams = useSearchParams();
  const editMode = searchParams.get("editMode");
  return (
    <>
      <section className="w-[100%] flex h-[100%]">
        <div className="left-container w-[30%] border-r border-gray-200 h-[100%] flex flex-col pr-12">
          <header className="mt-6">
            <h1 className="font-semibold text-[36px] text-[#333333]">
              Profile
            </h1>
          </header>
          <div className="content-container mt-3">
            <div className="bg-[#ebebeb] cursor-pointer rounded-xl py-3 flex items-center gap-4 px-3 w-[80%]">
              <div className="name-container bg-black  text-white p-2 rounded-full w-9 h-9 flex items-center justify-center text-xl">
                N
              </div>
              <button className="text-lg font-semibold text-[#333333]">
                About me
              </button>
            </div>
            <div className="hover:bg-[#ebebeb] cursor-pointer mt-2 rounded-xl py-3 flex items-center gap-4 px-3 w-[80%]">
              <div className="name-container  text-white p-2 rounded-full w-9 h-9 flex items-center justify-center text-xl">
                <Briefcase size={36} className="text-gray-700 " />
              </div>
              <button className="text-lg font-semibold text-[#333333]">
                Past trips
              </button>
            </div>
          </div>
        </div>
        <div className="right-container w-[70%] pl-30  ">
          <header className="mt-6 flex gap-8 items-center">
            <h1 className="font-semibold text-[32px]">About me</h1>
            <button
              onClick={() => {
                router.push("/users/profile?editMode=true");
              }}
              className="bg-gray-300  w-fit cursor-pointer  px-4 py-1 rounded text-gray-800 hover:scale-110 transition-all duration-100"
            >
              Edit
            </button>
          </header>
          <div className="content-container mt-6 flex gap-6 items-center border-b pb-16 border-gray-300">
            <div className="profile-container w-[60%]">
              <div className="container-1 w-full bg-white shadow-xl shadow-gray-200  rounded-3xl  p-6 border border-gray-200">
                <div className="name-container w-[160px] h-[160px] m-auto border bg-gray-950 rounded-full flex items-center justify-center">
                  <h1 className="text-[56px] text-white">N</h1>
                </div>
                <div className="name-container text-center mt-2">
                  <h1 className="font-semibold text-3xl text-[#333333]">
                    Nishanth
                  </h1>
                  <h1 className="text-gray-500">Guest</h1>
                </div>
              </div>
            </div>
            <div className="container-2 w-[50%] ">
              <h1 className="font-semibold text-xl">Complete your profile</h1>
              <h1 className="text-gray-400 mt-3 text-[18px]">
                Your profile is an important part of every reservation. Create
                yours to help other hosts and guests get to know you.
              </h1>
              <button
                onClick={() => {
                  router.push("/users/profile?editMode=true");
                }}
                className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] mt-3 text-white px-8 py-2 text-lg rounded-xl cursor-pointer "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileComponent;
