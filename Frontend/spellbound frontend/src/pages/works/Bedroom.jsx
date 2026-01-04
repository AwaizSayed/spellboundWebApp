import Bedroom1 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom1.png";
import Bedroom2 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom2.png";
import Bedroom3 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom3.png";
import Bedroom4 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom4.png";
import Bedroom5 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom5.png";
import Bedroom6 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom6.png";
import Bedroom7 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom7.png";
import Bedroom8 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom8.png";
import Bedroom9 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom9.png";
import Bedroom10 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom10.png";
import Bedroom11 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom11.png";
import Bedroom12 from "../../assets/images/DesktopViewImage/Work/Bedroom/Bedroom12.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ImagePreview from "../../components/ImagePreview";

function Bedroom() {
  const [showPreview, setShowPreview] = useState(false);
  const [showPreview1, setShowPreview1] = useState(false);
  const [showPreview2, setShowPreview2] = useState(false);
  const [showPreview3, setShowPreview3] = useState(false);
  const [showPreview4, setShowPreview4] = useState(false);
  const [showPreview5, setShowPreview5] = useState(false);
  const [showPreview6, setShowPreview6] = useState(false);
  const [showPreview7, setShowPreview7] = useState(false);
  const [showPreview8, setShowPreview8] = useState(false);
  const [showPreview9, setShowPreview9] = useState(false);
  const [showPreview10, setShowPreview10] = useState(false);
  const [showPreview11, setShowPreview11] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Bedroom</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Bedroom1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview(true)}
          ></img>
          <ImagePreview
            image={Bedroom1}
            stateOfImage={showPreview}
            setStateOfImage={setShowPreview}
          />
          <img
            src={Bedroom2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview1(true)}
          ></img>
          <ImagePreview
            image={Bedroom2}
            stateOfImage={showPreview1}
            setStateOfImage={setShowPreview1}
          />
          <img
            src={Bedroom3}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview2(true)}
          ></img>
          <ImagePreview
            image={Bedroom3}
            stateOfImage={showPreview2}
            setStateOfImage={setShowPreview2}
          />
          <img
            src={Bedroom4}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview3(true)}
          ></img>
          <ImagePreview
            image={Bedroom4}
            stateOfImage={showPreview3}
            setStateOfImage={setShowPreview3}
          />
          <img
            src={Bedroom5}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview4(true)}
          ></img>
          <ImagePreview
            image={Bedroom5}
            stateOfImage={showPreview4}
            setStateOfImage={setShowPreview4}
          />
          <img
            src={Bedroom6}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview5(true)}
          ></img>
          <ImagePreview
            image={Bedroom6}
            stateOfImage={showPreview5}
            setStateOfImage={setShowPreview5}
          />
          <img
            src={Bedroom7}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview6(true)}
          ></img>
          <ImagePreview
            image={Bedroom7}
            stateOfImage={showPreview6}
            setStateOfImage={setShowPreview6}
          />
          <img
            src={Bedroom8}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview7(true)}
          ></img>
          <ImagePreview
            image={Bedroom8}
            stateOfImage={showPreview7}
            setStateOfImage={setShowPreview7}
          />
          <img
            src={Bedroom9}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview8(true)}
          ></img>
          <ImagePreview
            image={Bedroom9}
            stateOfImage={showPreview8}
            setStateOfImage={setShowPreview8}
          />
          <img
            src={Bedroom10}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview9(true)}
          ></img>
          <ImagePreview
            image={Bedroom10}
            stateOfImage={showPreview9}
            setStateOfImage={setShowPreview9}
          />
          <img
            src={Bedroom11}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview10(true)}
          ></img>
          <ImagePreview
            image={Bedroom11}
            stateOfImage={showPreview10}
            setStateOfImage={setShowPreview10}
          />
          <img
            src={Bedroom12}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview11(true)}
          ></img>
          <ImagePreview
            image={Bedroom12}
            stateOfImage={showPreview11}
            setStateOfImage={setShowPreview11}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bedroom;
