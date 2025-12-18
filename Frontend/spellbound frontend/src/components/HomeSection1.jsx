import DesktopViewImage from "../assets/images/DesktopViewImage/HomeSection1Image/HallImage.jpeg";
import HomeSection1CSS from "./HomeSection1.module.css";

function HomeSection1() {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-light slide"
        data-bs-ride="carousel"
        data-bs-pause="hover"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={DesktopViewImage}
              className="d-block"
              alt="..."
              style={{
                height: "88vh",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <div
              className="carousel-caption "
              style={{
                backgroundColor: "#00000089",
              }}
            >
              <h5 className="text-white">Hallway</h5>
              <p className="text-white">
                Astonishing Finish with wooden Flooring
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={DesktopViewImage}
              className="d-block"
              alt="..."
              style={{
                height: "88vh",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <div
              className="carousel-caption"
              style={{
                backgroundColor: "#00000089",
              }}
            >
              <h5 className="text-white">Hallway1</h5>
              <p className="text-white">
                Astonishing Finish with wooden Flooring
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={DesktopViewImage}
              className="d-block"
              alt="..."
              style={{
                height: "88vh",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <div
              className="carousel-caption"
              style={{
                backgroundColor: "#00000089",
              }}
            >
              <h5 className="text-white">Hallway2</h5>
              <p className="text-white">
                Astonishing Finish with wooden Flooring
              </p>
            </div>
          </div>
        </div>

        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
}

export default HomeSection1;
