import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { formConfigs } from "../data/profileFormConfig";

const ProfileFormComponent = ({ isForm, setIsForm, formlable }) => {
  console.log("formConfig : ", formConfigs[formlable]);

  //   extracting form data's
  const data = formConfigs[formlable];
  // ref's
  const modelref = useRef(null);

  //   useEffect call's
  useEffect(() => {
    function handleClickOutside(e) {
      if (modelref.current && !modelref.current.contains(e.target)) {
        setIsForm(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isForm]);
  return (
    <>
      <section
        ref={modelref}
        className="bg-white fixed top-[50%] left-[50%] translate-y-[-50%] z-10 translate-x-[-50%] w-[600px] py-2 rounded-lg border border-gray-200"
      >
        <header className="py-1 border-b border-gray-300 px-2 flex justify-end">
          <X
            onClick={() => setIsForm(false)}
            className="w-8 h-8 cursor-pointer"
          />
        </header>
        <div className="content-container px-4 mt-2 py-3 ">
          <h1 className="font-semibold text-[#333333] text-2xl">
            {data.title}
          </h1>
          <h1 className="text-gray-500 text-lg mt-1">{data.description}</h1>
          <input
            type="text"
            placeholder={data.placeholder}
            className="w-[100%] mt-2 border border-gray-500 px-3 rounded-lg py-3 text-lg"
          />
        </div>
        <div className="button-container px-4 flex justify-end">
          <button className=" text-white px-4 py-2 rounded-lg cursor-pointer bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)]">
            Save
          </button>
        </div>
      </section>
      <div className="form-tint fixed top-0 right-0 left-0 bottom-0"></div>
    </>
  );
};

export default ProfileFormComponent;
