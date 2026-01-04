import Bathroom1 from "../../assets/images/DesktopViewImage/Work/Bathroom/Bathroom1.png";
import Bathroom2 from "../../assets/images/DesktopViewImage/Work/Bathroom/Bathroom2.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ImagePreview from "../../components/ImagePreview";

function Bathroom() {
  const [showPreview, setShowPreview] = useState(false);
  const [showPreview1, setShowPreview1] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Bathroom</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Bathroom1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview(true)}
          ></img>
          <ImagePreview
            image={Bathroom1}
            stateOfImage={showPreview}
            setStateOfImage={setShowPreview}
          />
          <img
            src={Bathroom2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview1(true)}
          ></img>
          <ImagePreview
            image={Bathroom2}
            stateOfImage={showPreview1}
            setStateOfImage={setShowPreview1}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bathroom;
