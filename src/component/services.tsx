import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";

function Service() {
  return (
    
    <main className="main">
      <div className="service-container">
        <div className="main-service-div">
            <h2 className="serv-title">My Services</h2>
            <p className="descr-ser">
            To Secure an employment opportunity with a progressive organization, where i can utiliza my professional skills and knowledge to the maximum add value in the growth of the organization.
            </p>
            </div>
            <div className="boxex-con">
            <div className="box">
            <FaLaptopCode className="ser-icon"/>
            <h3>Web Development</h3>
            <span>Blog, E-Commerce</span>
            </div>
            <div className="box">
            <TiSocialYoutube className="ser-icon"/>
            <h3>App Development</h3>
            <span>Social Media Marketing</span>
            </div>
            <div className="box">
            <FaGoogle className="ser-icon"/>
            <h3>Google ads</h3>
            <span>App Development</span>
            </div>
            <div className="box">
            < FaLinkedin  className="ser-icon"/>
            <h3>Social Media Marketing</h3>
            <span>Blog, E-Commerce,</span>
            </div>
            <div className="box">
            <SiFiverr className="ser-icon"/>
            <h3>Freelancing</h3>
            <span>Digial Marketing</span>
            </div>
            <div className="box">
            <BiLogoWhatsappSquare className="ser-icon"/>
            <h3>App Development</h3>
            <span>Social Media Marketing</span>
            </div>
            <div className="box">
            < FaDollarSign className="ser-icon"/>
            <h3>
               Freelancing
            </h3>
            <span> Digital Marketing</span>
            </div>
            <div className="box">
            <IoGameController className="ser-icon"/>
            <h3>Game Development</h3>
            <span>Blog, E-Commerce</span>
            </div>
           
        </div>
      </div>
    </main>
  );
}
export default Service;
