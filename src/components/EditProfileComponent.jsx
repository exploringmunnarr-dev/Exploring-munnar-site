import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Camera,
  Globe,
  BriefcaseBusiness,
  PawPrint,
  Music,
  Plus,
} from "lucide-react";
import ProfileFormComponent from "./ProfileFormComponent";
import MyInterestModal from "./MyInterestModal";
import UploadProfileImage from "./UploadProfileImage";

const data = [
  { icon: Globe, label1: "Where I’ve always wanted to go", label: "location" },
  {
    icon: Music,
    label1: "My favourite song in secondary school",
    label: "music",
  },
  {
    icon: BriefcaseBusiness,
    label1: "My work",
    label: "work",
  },
  {
    icon: PawPrint,
    label1: "Pets",
    label: "pets",
  },
];

const EditProfileComponent = () => {
  //   states
  const [isForm, setIsForm] = useState(false);
  const [isMyInterestModal, setIsMyInterestModal] = useState(false);
  const [uploadImgModal, setUploadImgModal] = useState(false);
  const [formlable, setFormLabel] = useState("");

  // deifning rourter
  const router = useRouter();

  //   functions
  const formComponenthanlder = (label) => {
    setFormLabel(label);
    setIsForm(true);
  };
  return (
    <>
      <section className="w-[100%] flex h-[89%] pt-6 overflow-auto ">
        <div className="left-container  w-[30%] sticky top-10 ">
          <div className="name-container relative  w-[200px] h-[200px] m-auto border bg-gray-950 rounded-full flex items-center justify-center">
            <h1 className="text-[56px] text-white">N</h1>
            <button className=" absolute bottom-[-10px] left-[50%] translate-x-[-50%] ">
              <div
                onClick={() => setUploadImgModal(true)}
                className="edit-btn text-md  relative font-semibold text-[#333333] bg-white px-4 py-2 rounded-full shadow-xl flex gap-2 items-center"
              >
                <Camera size={18} /> Edit
              </div>
            </button>
          </div>
        </div>
        <div className="left-container w-[70%] mr-3">
          <div className="main-container  ml-12">
            <header>
              <h1 className="font-semibold text-[32px] text-[#333333]">
                My profile
              </h1>
              <h1 className="description text-gray-600 w-[80%] mt-4 text-lg">
                Hosts and guests can see your profile and it may appear across
                Exploring munnar to help us build trust in our community.{" "}
              </h1>
            </header>
            {/* form trigger container =======================  */}
            <div className="form-data-container grid grid-cols-2 gap-6 mt-6">
              {data.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    onClick={() => formComponenthanlder(item.label)}
                    className="card border-b py-6 w-full border-gray-300 flex items-center gap-4 text-lg cursor-pointer hover:rounded-lg hover:border-none hover:bg-gray-100 px-4 "
                  >
                    <Icon className="text-gray-600 w-8 h-8" />
                    <h1 className="text-gray-600">{item.label1}</h1>
                  </div>
                );
              })}
            </div>
            {/* About me section ========================= */}
            <div className="about-me-container mt-8">
              <header>
                <h1 className="font-semibold text-[32px] text-[#333333]">
                  About me
                </h1>
              </header>
              <div className="content-container mt-2 border border-dashed border-gray-400 p-4 rounded-lg">
                <h1 className="text-gray-600 text-lg">
                  Write something fun and punchy.
                </h1>
                <button
                  onClick={() => formComponenthanlder("aboutMe")}
                  className="font-semibold text-lg underline cursor-pointer"
                >
                  Add intro
                </button>
              </div>
            </div>
            {/* My interests section ========================= */}
            <div className="about-me-container mt-8">
              <header>
                <h1 className="font-semibold text-[32px] text-[#333333]">
                  My interests
                </h1>
                <h1 className="description text-gray-600 w-[80%] mt-4 text-lg">
                  Find common ground with other guests and hosts by adding
                  interests to your profile.{" "}
                </h1>
              </header>
              <div className="content-container flex items-center gap-4  mt-4 ">
                <button
                  onClick={() => setIsMyInterestModal(true)}
                  className="w-[90px] py-2 flex items-center justify-center border border-dashed border-gray-300 rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <Plus />
                </button>
                <button
                  onClick={() => setIsMyInterestModal(true)}
                  className="w-[90px] py-2 flex items-center justify-center border border-dashed border-gray-300 rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <Plus />
                </button>
                <button
                  onClick={() => setIsMyInterestModal(true)}
                  className="w-[90px] py-2 flex items-center justify-center border border-dashed border-gray-300 rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <Plus />
                </button>
              </div>
              <button
                onClick={() => setIsMyInterestModal(true)}
                className="bg-[#eeeeee] px-4 py-3 rounded-lg text-lg font-semibold mt-4 cursor-pointer hover:bg-gray-100"
              >
                Add interests
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-container fixed bottom-0 py-4 w-[80%] m-auto flex justify-end">
        <button
          onClick={() => {
            router.push("/users/profile?editMode=false");
          }}
          className="text-xl font-semibold px-6 cursor-pointer py-2  rounded-lg text-white bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)]"
        >
          Done
        </button>
      </div>
      {isForm && (
        <ProfileFormComponent
          isForm={isForm}
          setIsForm={setIsForm}
          formlable={formlable}
        />
      )}
      {isMyInterestModal && (
        <MyInterestModal
          isMyInterestModal={isMyInterestModal}
          setIsMyInterestModal={setIsMyInterestModal}
        />
      )}
      {uploadImgModal && (
        <UploadProfileImage
          setUploadImgModal={setUploadImgModal}
          uploadImgModal={uploadImgModal}
        />
      )}
    </>
  );
};

export default EditProfileComponent;
