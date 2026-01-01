import Card from "./Card";
import BedroomImage from "../assets/images/DesktopViewImage/CompletedProjects/Bedroom/Bedroom.jpg";
import KitchenImage from "../assets/images/DesktopViewImage/CompletedProjects/Kitchen/Kitchen.jpg";
import DrawingRoomImage from "../assets/images/DesktopViewImage/CompletedProjects/DrawingRoom/DrawingRoom.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

{
  /*justify-content-md-center */
}

function HomeSection2() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ backgroundColor: "#EBEBE9" }}>
        <h1 className="text-center pt-2">Completed Projects</h1>
        <div className="px-5 py-4 container">
          <div className=" row justify-content-between ">
            <div class="col d-flex justify-content-center">
              <Card
                image={BedroomImage}
                title={"Bedroom"}
                link={"/Bedroom"}
                description={"Hello world"}
              />
            </div>
            <div class="col d-flex justify-content-center">
              <Card
                image={DrawingRoomImage}
                title={"Living Room"}
                link={"/LivingRoom"}
                description={"Hello world"}
              />
            </div>
            <div class="col d-flex justify-content-center">
              <Card
                image={KitchenImage}
                title={"Dining"}
                link={"/Dining"}
                description={"Hello world"}
              />
            </div>
          </div>
          {/* <Link className="nav-link text-center" to="/">
            <h2 style={{ color: "#000000ff" }}>more....</h2>
          </Link> */}
          <div className="text-center">
            <button
              type="button"
              class="btn btn-outline-dark btn-lg"
              onClick={() => navigate("/Projects")}
            >
              view more completed projects...
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection2;
