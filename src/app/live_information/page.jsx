import Navbar from "@/components/Navbar";
import SubCardNav from "@/components/SubCardNav";
import LiveInformationHero from "@/components/LiveInformationHero";
import Localnews from "@/components/Localnews";
import Footer from "@/components/Footer";
import EmergencyContacts from "@/components/EmergencyContacts";
import { useTheme } from "@emotion/react";

const page = () => {
  // Auth 
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  // states ------------------------------------ 
  // const [data, setData] = useState([])

  // side effects ----------------------------------- 

  // functions ---------------------------------------
  return (
    <>
      <Navbar />
      <header className="mx-4 md:mx-10 mt-4 btn-green px-4 py-10 rounded-lg">
        <SubCardNav />
        <div className="content-container text-white mt-4 ml-3">
          <h1 className="font-medium text-3xl ">
            Stay updated while exploring munnar
          </h1>
          <h1 className="text-sm text-[#EEEEEE] mt-2">
            Realtime weather reports,emergency alerts,,road clousre in one place
          </h1>
        </div>
      </header>
      <div className="main-container mx-4 md:mx-10 mt-4">
        <LiveInformationHero />
        <Localnews />
        {/* <EmergencyContacts /> */}
      </div>
      <Footer />
    </>
  );
};

export default page;
