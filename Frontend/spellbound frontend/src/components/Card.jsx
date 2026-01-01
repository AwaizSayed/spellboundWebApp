import { Link } from "react-router-dom";

function Card(prop) {
  return (
    <>
      <Link className="nav-link" to={`${prop.link}`}>
        <div
          className="card text-center bg-light mb-4"
          style={{ width: "18rem" }}
        >
          <img
            src={prop.image}
            className="card-img-top p-2"
            alt="..."
            style={{
              height: "40vh",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className="card-body">
            <h3 className="card-title">{prop.title}</h3>
            {/* <p className="card-text">{prop.description}</p>
          <a href="#" className="btn btn-primary">
            View
          </a> */}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
