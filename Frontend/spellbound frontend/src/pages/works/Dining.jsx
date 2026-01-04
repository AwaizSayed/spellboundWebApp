import Dining1 from "../../assets/images/DesktopViewImage/Work/Dining/Dining1.png";
import Dining2 from "../../assets/images/DesktopViewImage/Work/Dining/Dining2.png";
import Dining3 from "../../assets/images/DesktopViewImage/Work/Dining/Dining3.png";
import Dining4 from "../../assets/images/DesktopViewImage/Work/Dining/Dining4.png";
import Dining5 from "../../assets/images/DesktopViewImage/Work/Dining/Dining5.png";
import Dining6 from "../../assets/images/DesktopViewImage/Work/Dining/Dining6.png";
import Dining7 from "../../assets/images/DesktopViewImage/Work/Dining/Dining7.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ImagePreview from "../../components/ImagePreview";

function Dining() {
  const [showPreview1, setShowPreview1] = useState(false);
  const [showPreview2, setShowPreview2] = useState(false);
  const [showPreview3, setShowPreview3] = useState(false);
  const [showPreview4, setShowPreview4] = useState(false);
  const [showPreview5, setShowPreview5] = useState(false);
  const [showPreview6, setShowPreview6] = useState(false);
  const [showPreview7, setShowPreview7] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Dining</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Dining1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview1(true)}
          ></img>
          <ImagePreview
            image={Dining1}
            stateOfImage={showPreview1}
            setStateOfImage={setShowPreview1}
          />
          <img
            src={Dining2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview2(true)}
          ></img>
          <ImagePreview
            image={Dining2}
            stateOfImage={showPreview2}
            setStateOfImage={setShowPreview2}
          />
          <img
            src={Dining3}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview3(true)}
          ></img>
          <ImagePreview
            image={Dining3}
            stateOfImage={showPreview3}
            setStateOfImage={setShowPreview3}
          />
          <img
            src={Dining4}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview4(true)}
          ></img>
          <ImagePreview
            image={Dining4}
            stateOfImage={showPreview4}
            setStateOfImage={setShowPreview4}
          />
          <img
            src={Dining5}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview5(true)}
          ></img>
          <ImagePreview
            image={Dining5}
            stateOfImage={showPreview5}
            setStateOfImage={setShowPreview5}
          />
          <img
            src={Dining6}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview6(true)}
          ></img>
          <ImagePreview
            image={Dining6}
            stateOfImage={showPreview6}
            setStateOfImage={setShowPreview6}
          />
          <img
            src={Dining7}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview7(true)}
          ></img>
          <ImagePreview
            image={Dining7}
            stateOfImage={showPreview7}
            setStateOfImage={setShowPreview7}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dining;
