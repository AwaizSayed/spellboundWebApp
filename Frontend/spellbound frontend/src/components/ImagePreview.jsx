// import { useState } from "react";

function ImagePreview(prop) {
//   const [showPreview, setshowPreview] = useState(false);
  return (
    <>
      {prop.stateOfImage && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content bg-dark">
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => prop.setStateOfImage(false)}
                ></button>
              </div>

              <div className="modal-body pb-5">
                <img
                  src={prop.image}
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
    </>
  );
}

export default ImagePreview;
