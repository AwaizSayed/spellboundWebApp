import Balcony1 from "../../assets/images/DesktopViewImage/Work/Balcony/Balcony1.png";
import Balcony2 from "../../assets/images/DesktopViewImage/Work/Balcony/Balcony2.png";
import Balcony3 from "../../assets/images/DesktopViewImage/Work/Balcony/Balcony3.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ImagePreview from "../../components/ImagePreview";

function Balcony() {
  const [showPreview, setShowPreview] = useState(false);
  const [showPreview1, setShowPreview1] = useState(false);
  const [showPreview2, setShowPreview2] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Balcony</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Balcony1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview(true)}
          ></img>
          <ImagePreview
            image={Balcony1}
            stateOfImage={showPreview}
            setStateOfImage={setShowPreview}
          />
          <img
            src={Balcony2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview1(true)}
          ></img>
          <ImagePreview
            image={Balcony2}
            stateOfImage={showPreview1}
            setStateOfImage={setShowPreview1}
          />
          <img
            src={Balcony3}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview2(true)}
          ></img>
          <ImagePreview
            image={Balcony3}
            stateOfImage={showPreview2}
            setStateOfImage={setShowPreview2}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Balcony;
