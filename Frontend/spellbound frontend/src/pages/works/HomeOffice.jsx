import HomeOffice1 from "../../assets/images/DesktopViewImage/Work/HomeOffice/HomeOffice1.png";
// import HomeOffice2 from "../../assets/images/DesktopViewImage/Work/HomeOffice/HomeOffice2.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ImagePreview from "../../components/ImagePreview";

function HomeOffice() {
  const [showPreview1, setShowPreview1] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Home Office</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={HomeOffice1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview1(true)}
          ></img>
          <ImagePreview
            image={HomeOffice1}
            stateOfImage={showPreview1}
            setStateOfImage={setShowPreview1}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeOffice;
