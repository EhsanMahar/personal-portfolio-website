import "../style/hero.css";
import Image from "next/image";
import "../style/hero.css";
import "../style/About.css";

import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function About() {
  return (
    <div className="header-container">
      <div className="header-boxes-container">
        <div>
          <img
            src="/images/ehsan.jpg"
            alt="profile"
            className="image"
            width={200}
            height={200}
          />
          <div className="social-icon">
            <Link href={""}>
              <FaFacebook className="s-icon1" />
            </Link>
            <Link href={""}>
              <FaLinkedin className="s-icon2" />
            </Link>

            <Link href={""}>< FaInstagram className="s-icon3"/></Link>
          </div>
        </div>
        <div className="hero-right-div">
          <h1 className="hero-title">About Me</h1>
          <p className="hero-discpript">
            Hi,this is Ehsan Mahar front-end developer from governor sindh it
            initiative karachi. I am also a good data scientist. <br />
            To Secure an employment opportunity with a progressive organization,
            where i can utiliza my professional skills and knowledge to the
            maximum add value in the growth of the organization.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
