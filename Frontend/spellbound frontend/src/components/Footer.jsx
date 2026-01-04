import FooterCSS from "./Footer.module.css";
import "./Footer.module.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="mt-auto">
        <div className="container">
          <div className="row">
            <div className=" mb-4 text-center ">
              <img src={Logo} width="220" height="100" style={{}} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 mb-3 text-left">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Projects">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/#about">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/#contact">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-3 text-start">
              <h5>Contacts</h5>
              <ul className="list-unstyled ">
                <li>
                  <a
                    href="tel:+91 91366 35585"
                    className="text-decoration-none text-white"
                  >
                    <i className="bi bi-telephone"></i> &nbsp; +91 91366 35585
                  </a>
                </li>
                <li>
                  <address>
                    <a
                      href="mailto:info@spellbound.com"
                      className="text-decoration-none text-white"
                    >
                      <i className="bi bi-envelope"></i>{" "}
                      &nbsp;info@spellbound.com
                    </a>
                  </address>
                </li>
                {/* <li>
                  <a href="#" className="text-decoration-none text-white">
                    Contact
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col mb-3 text-center">
              <h5>Social Media</h5>
              <ul className={`list-inline ${FooterCSS.socialicons} fs-3`}>
                <li className="list-inline-item">
                  <a href="#" className="text-white">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-white">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-white">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="HTTPS://wa.me/+919136635585"
                    target="newWhatsapp"
                    className="text-white"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mb-4" />
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; 2025 spellbound. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
