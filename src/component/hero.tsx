import "../style/hero.css";
import Image from "next/image";
import "../style/hero.css";
function Hero() {
  return (
    <div className="header-container">
      <div className="header-boxes-container">
        <div>
          <img src="/images/ehsan.jpg" alt="profile" className="image" width={200} height={200} />
        </div>
        <div className="hero-right-div">
            <h1 className="hero-title">I'am Ehsan Mahar Front-end Developer</h1>
            <p className="hero-discpript">
            Hi,this is Ehsan Mahar front-end developer from governor sindh it initiative karachi.I am also a good data scientist.
            </p>
            <button className="hero-btn">Hire Me</button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
