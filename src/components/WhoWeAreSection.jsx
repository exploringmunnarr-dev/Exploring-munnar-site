import React from "react";
import Image from "next/image";
import img1 from "../assets/whoWeAreImg1.svg";
import img2 from "../assets/whoWeAreImg2.svg";
import img3 from "../assets/whoWeAreImg3.svg";
const WhoWeAreSection = () => {
  return (
    <>
      <section className="mx-4 mt-4 md:mt-14 md:mx-10 md:flex gap-6 justify-between md:h-[390px] ">
        <div className="container-1 w-[100%] md:w-[50%] ">
          <h1 className="text-xl md:text-3xl font-semibold text-[#333333] ">
            Who we are
          </h1>
          <div className="content-container text-[#777777] mt-2 text-justify w-[98%] md:w-[95%]  ">
            <h1 className="">
              Exploring Munnar is your trusted travel partner for discovering
              the true beauty of Munnar, Kerala. We are a passionate team of
              travel experts and local professionals dedicated to creating
              memorable, hassle-free, and personalized travel experiences. More
              than just a travel service, we are storytellers who help travelers
              experience Munnar beyond sightseeing.
              <br />
              From mist-covered hills and lush tea gardens to serene lakes and
              adventurous trekking trails, we curate every journey with
              precision and care. Our services include custom travel
              itineraries, handpicked accommodations, reliable transportation,
              and authentic local experiences, ensuring every traveler explores
              Munnar comfortably and confidently.
              <br />
              Whether you are a solo traveler, honeymoon couple, family, or
              group, Exploring Munnar ensures a seamless travel experience
              filled with comfort, discovery, and unforgettable memories
            </h1>
          </div>
        </div>
        <div className="container-2 w-[100%] mt-4 md:mt-0 md:w-[50%] h-[94%] md:flex gap-3">
          <div className="img-container-1 h-[100%]  ">
            <Image src={img1} className="h-[100%] object-cover rounded-xl" />
          </div>
          <div className="img-container-2 space-y-2 mt-4 md:mt-0  ">
            <div className="img-1 h-[49%] ">
              <Image src={img2} className="object-cover h-[100%] rounded-xl" />
            </div>
            <div className="img-2 h-[49%] ">
              <Image src={img3} className="object-cover h-[100%] rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAreSection;
