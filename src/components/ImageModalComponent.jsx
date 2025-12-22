import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
const ImageModalComponent = ({ isImageModal, setImageModal, data }) => {
  // states
  const [imageUrls, setImageUrls] = useState([]);

  // side effects

  // disable scrolling
  useEffect(() => {
    if (isImageModal) {
      document.body.style.overflow = "hidden";
    } else {
      a;
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      canvasData;
    };
  }, [isImageModal]);

  // setting image urls
  useEffect(() => {
    const filteredUrl = data?.images?.map((item) => {
      return item.url;
    });
    // console.log("filteredUrl : ", filteredUrl);
    setImageUrls(filteredUrl);
  }, []);
  cls;
  return (
    <>
      <div
        onClick={() => setImageModal(false)}
        className="fixed inset-0 bg-black/70 z-50 "
      ></div>
      <section className="fixed z-60 top-[50%] left-[50%] rounded-xl p-4  translate-x-[-50%] translate-y-[-50%] bg-white w-[90%] md:w-[70%] max-h-[calc(100vh-80px)] overflow-auto grid md:grid-cols-2 gap-4">
        <div className="header md:hidden flex justify-end ">
          <X onClick={() => setImageModal(false)} />
        </div>
        {imageUrls?.map((item) => {
          return (
            <div className="img-contianer h-[240px] mb-4 border border-gray-300 rounded-lg ">
              <Image
                src={item}
                width={1000}
                height={1000}
                alt="hotel_image"
                className="w-[100%] h-[100%] rounded-lg object-cover"
              ></Image>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ImageModalComponent;
