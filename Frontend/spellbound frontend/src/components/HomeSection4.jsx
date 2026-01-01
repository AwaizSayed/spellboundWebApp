import StudyTable2 from "../assets/images/DesktopViewImage/Work/StudyTable/StudyTable2.png";
import GardenFurniture from "../assets/images/DesktopViewImage/Work/GardenFurniture/GardenFurniture.png";
import ArmChair1 from "../assets/images/DesktopViewImage/Work/ArmChair/ArmChair1.png";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function HomeSection4() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ backgroundColor: "#fff" }}>
        <h1 className="text-center pt-2">Products</h1>
        <div className="px-5 py-4 container">
          <div className=" row justify-content-between ">
            <div class="col d-flex justify-content-center">
              <Card
                image={StudyTable2}
                title={"Study Table"}
                link={"/StudyTable"}
                description={"Hello world"}
              />
            </div>
            <div class="col d-flex justify-content-center">
              <Card
                image={GardenFurniture}
                title={"Garden Furniture"}
                link={"/GardenFurniture"}
                description={"Hello world"}
              />
            </div>
            <div class="col d-flex justify-content-center">
              <Card
                image={ArmChair1}
                title={"Arm Chair"}
                link={"/ArmChair"}
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
              onClick={() => navigate("/Products")}
            >
              view more Products...
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection4;
