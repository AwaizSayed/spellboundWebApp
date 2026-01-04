import Logo from "../assets/logo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  // console.log(styles.customdropdownitem);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#36454F" }}
      >
        <div className="container-fluid">
          <Link className="nav-link" to="/">
            <img src={Logo} width="195" height="85" style={{}} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <label style={{ fontWeight: "normal", color: "#ffff" }}>
                    Home
                  </label>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Projects">
                  <label style={{ fontWeight: "normal", color: "#ffff" }}>
                    Our Projects
                  </label>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Products">
                  <label style={{ fontWeight: "normal", color: "#ffff" }}>
                    Products
                  </label>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/#about">
                  <label style={{ fontWeight: "normal", color: "#ffff" }}>
                    About us
                  </label>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/#contact">
                  <label style={{ fontWeight: "normal", color: "#ffff" }}>
                    contact us
                  </label>
                </Link>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

function DepricatedNavbar() {
  return (
    <>
      {" "}
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#36454F" }}
      >
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            width="160"
            height="60"
            style={{ paddingLeft: "5px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/*---------------------------------------------Home-------------------------------------------- */}
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home {/* <span className="sr-only">(current)</span> */}
              </a>
            </li>

            {/*--------------------------------------------Our Projects-------------------------------------------- */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Projects
              </a>
            </li>

            {/*--------------------------------------------Products-------------------------------------------- */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </a>
              {/*--------------------------------------------Dropdowns Items-------------------------------------------- */}
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/*--------------------------------------------Sofa-------------------------------------------- */}
                <a className="dropdown-item" href="#">
                  Sofa
                </a>

                {/*--------------------------------------------Curtain-------------------------------------------- */}
                <a className="dropdown-item" href="#">
                  Curtain
                </a>

                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </>
  );
}

function RemovedNavbarFeature() {
  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link  dropdown-toggle text-white"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <label style={{ fontWeight: "normal", color: "#ffff" }}>
            Products
          </label>
        </a>

        <ul
          className="dropdown-menu"
          style={{ backgroundColor: "#36454F", border: "none" }}
        >
          <li>
            <a
              className={`dropdown-item ${styles.customdropdownitem}`}
              href="#"
            >
              {/* <label style={{ fontWeight: "normal", color: "#ffff",  }}> */}
              Sofa
              {/* </label> */}
            </a>
          </li>
          <li>
            <a
              className={`dropdown-item ${styles.customdropdownitem}`}
              href="#"
            >
              {/* <label style={{ fontWeight: "normal", color: "#ffff" }}> */}
              Curtain
              {/* </label> */}
            </a>
          </li>
          <li>{/* <hr className="dropdown-divider" /> */}</li>
          <li>
            <a
              className={`dropdown-item ${styles.customdropdownitem}`}
              href="#"
            >
              {/* <label style={{ fontWeight: "normal", color: "#ffff" }}> */}
              Something else here
              {/* </label> */}
            </a>
          </li>
        </ul>
      </li>
    </>
  );
}
