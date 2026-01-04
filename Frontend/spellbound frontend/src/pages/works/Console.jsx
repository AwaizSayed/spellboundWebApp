import Console1 from "../../assets/images/DesktopViewImage/Work/Console/Console1.png";
import Console2 from "../../assets/images/DesktopViewImage/Work/Console/Console2.png";
import Console3 from "../../assets/images/DesktopViewImage/Work/Console/Console3.png";
import Console4 from "../../assets/images/DesktopViewImage/Work/Console/Console4.png";
import Console5 from "../../assets/images/DesktopViewImage/Work/Console/Console5.png";
import Console6 from "../../assets/images/DesktopViewImage/Work/Console/Console6.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ImagePreview from "../../components/ImagePreview";

function Console() {
  const [showPreview, setShowPreview] = useState(false);
  const [showPreview1, setShowPreview1] = useState(false);
  const [showPreview2, setShowPreview2] = useState(false);
  const [showPreview3, setShowPreview3] = useState(false);
  const [showPreview4, setShowPreview4] = useState(false);
  const [showPreview5, setShowPreview5] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Console</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Console1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview(true)}
          ></img>
          <ImagePreview
            image={Console1}
            stateOfImage={showPreview}
            setStateOfImage={setShowPreview}
          />
          <img
            src={Console2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview1(true)}
          ></img>
          <ImagePreview
            image={Console2}
            stateOfImage={showPreview1}
            setStateOfImage={setShowPreview1}
          />
          <img
            src={Console3}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview2(true)}
          ></img>
          <ImagePreview
            image={Console3}
            stateOfImage={showPreview2}
            setStateOfImage={setShowPreview2}
          />
          <img
            src={Console4}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview3(true)}
          ></img>
          <ImagePreview
            image={Console4}
            stateOfImage={showPreview3}
            setStateOfImage={setShowPreview3}
          />
          <img
            src={Console5}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview4(true)}
          ></img>
          <ImagePreview
            image={Console5}
            stateOfImage={showPreview4}
            setStateOfImage={setShowPreview4}
          />
          <img
            src={Console6}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview5(true)}
          ></img>
          <ImagePreview
            image={Console6}
            stateOfImage={showPreview5}
            setStateOfImage={setShowPreview5}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Console;
