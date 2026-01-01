import ArmChair1 from "../../assets/images/DesktopViewImage/Work/ArmChair/ArmChair1.png";
import ArmChair2 from "../../assets/images/DesktopViewImage/Work/ArmChair/ArmChair2.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

function ArmChair() {
  const [showPreview1, setshowPreview1] = useState(false);
  const [showPreview2, setshowPreview2] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Arm Chair</h1>
        <div className="px-5 pb-3 text-center">
          {showPreview1 && (
            <div className="modal fade show d-block" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content bg-dark">
                  <div className="modal-header border-0">
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      onClick={() => setshowPreview1(false)}
                    ></button>
                  </div>

                  <div className="modal-body pb-5">
                    <img
                      src={ArmChair1}
                      alt="Full Preview"
                      style={{
                        width: "100%",
                        height: "90vh",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {showPreview2 && (
            <div className="modal fade show d-block" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content bg-dark">
                  <div className="modal-header border-0">
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      onClick={() => setshowPreview2(false)}
                    ></button>
                  </div>

                  <div className="modal-body pb-5">
                    <img
                      src={ArmChair2}
                      alt="Full Preview"
                      style={{
                        width: "100%",
                        height: "90vh",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <img
            src={ArmChair1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setshowPreview1(true)}
          ></img>
          <img
            src={ArmChair2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setshowPreview2(true)}
          ></img>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArmChair;
