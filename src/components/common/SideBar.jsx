import { NavLink } from "react-router-dom";
import React from "react";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserGraduate,
} from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { BsPersonFill, BsFillFileEarmarkTextFill } from "react-icons/bs";

import "../styles/SideBar.scss";

function SideBar() {
  return (
    <header id="header">
      <div>
        <div class="pofile-container">
          <img
            src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
            alt="Profile"
            width="200px"
          />
          <NavLink className="text-light" to="/">
            <p>Parth Sarkar</p>
          </NavLink>
          <div class="social-links">
            <NavLink className="twitter m5" to="/">
              <FaTwitter size={20} />
            </NavLink>
            <NavLink className="facebook m5" to="/">
              <FaFacebook size={20} />
            </NavLink>
            <NavLink className="instagram m5" to="/">
              <FaInstagram size={20} />
            </NavLink>
            <NavLink className="googleplus m5 " to="/">
              <FaGooglePlus size={20} />
            </NavLink>
            <NavLink className="linkedin m5" to="/">
              <FaLinkedin size={20} />
            </NavLink>
          </div>
        </div>

        <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li>
              <NavLink className="nav-link scrollto " to="/">
                <FaHome size={25} title="Home" />
                <span style={{ paddingLeft: "10px" }}>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link scrollto " to="/">
                <BsPersonFill size={25} title="Home" />
                <span style={{ paddingLeft: "10px" }}>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link scrollto " to="/">
                <BsFillFileEarmarkTextFill size={25} title="Home" />
                <span style={{ paddingLeft: "10px" }}>Resume</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link scrollto " to="/">
                <FaUserGraduate size={25} title="Home" />
                <span style={{ paddingLeft: "10px" }}>Students</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link scrollto " to="/">
                <IoMdPhotos size={25} title="Home" />
                <span style={{ paddingLeft: "10px" }}>Gallery</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link scrollto " to="/">
                <AiFillProject size={25} title="Home" />
                <span style={{ paddingLeft: "10px" }}>Projects</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default SideBar;
