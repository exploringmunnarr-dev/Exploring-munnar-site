"use client";
import EditProfileComponent from "@/components/EditProfileComponent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileComponent from "@/components/ProfileComponent";
import ProfileNavbar from "@/components/ProfileNavbar";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  // params
  const searchParams = useSearchParams();
  const editMode = searchParams.get("editMode") == "true";
  const name = searchParams.get("name");

  console.log("editMode : ", typeof editMode);
  // defining router
  const router = useRouter();

  return (
    <>
      <section>
        <ProfileNavbar />
        <div className="container-main w-[80%] h-[85vh] m-auto">
          {!editMode ? <ProfileComponent /> : <EditProfileComponent />}
        </div>
      </section>
    </>
  );
};

export default page;
