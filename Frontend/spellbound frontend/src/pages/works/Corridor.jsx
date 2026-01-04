import Corridor1 from "../../assets/images/DesktopViewImage/Work/Corridor/Corridor1.png";
import Corridor2 from "../../assets/images/DesktopViewImage/Work/Corridor/Corridor2.png";
import Corridor3 from "../../assets/images/DesktopViewImage/Work/Corridor/Corridor3.png";
import Corridor4 from "../../assets/images/DesktopViewImage/Work/Corridor/Corridor4.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ImagePreview from "../../components/ImagePreview";

function Corridor() {
  const [showPreview1, setShowPreview1] = useState(false);
  const [showPreview2, setShowPreview2] = useState(false);
  const [showPreview3, setShowPreview3] = useState(false);
  const [showPreview4, setShowPreview4] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Corridor</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Corridor1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview1(true)}
          ></img>
          <ImagePreview
            image={Corridor1}
            stateOfImage={showPreview1}
            setStateOfImage={setShowPreview1}
          />
          <img
            src={Corridor2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview2(true)}
          ></img>
          <ImagePreview
            image={Corridor2}
            stateOfImage={showPreview2}
            setStateOfImage={setShowPreview2}
          />
          <img
            src={Corridor3}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview3(true)}
          ></img>
          <ImagePreview
            image={Corridor3}
            stateOfImage={showPreview3}
            setStateOfImage={setShowPreview3}
          />
          <img
            src={Corridor4}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview4(true)}
          ></img>
          <ImagePreview
            image={Corridor4}
            stateOfImage={showPreview4}
            setStateOfImage={setShowPreview4}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Corridor;
