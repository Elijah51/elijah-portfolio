import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaArrowDown,
  FaTwitter,
  FaWhatsapp,

} from "react-icons/fa";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-background">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-container">

        {/* LEFT SIDE */}

        <div className="hero-content">

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Elijah
            <span> Simon</span>
          </h1>

          <h2>
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Data Analyst",
                2000,
                "Graphic Designer",
                2000,
                "Realtor",
                2000
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly digital
            experiences while transforming data into meaningful
            insights that help businesses make better decisions.
          </p>

          <div className="hero-buttons">

            <a href="#contact" className="primary-button">
              Hire Me
            </a>

            <a href="#portfolio" className="secondary-button">
              View My Work
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/Elijah51"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/elijah-simon-8b73b3415"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://facebook.com/elijah.simon.96"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com/elijahdominicsimon"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/mazajnr"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaTwitter />
            </a>

          <a
              href="https://wa.me/qr/WKTXACCLGKS5P1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-visual">

          <div className="hero-image-wrapper">

            <div className="image-ring"></div>

           <div className="hero-image">

<img src="/images/cooperate.png"
alt="profile"

/>

</div>


          </div>

          <div className="floating-card card-one">
            <strong>4+</strong>
            <span>Professional Skills</span>
          </div>

          <div className="floating-card card-two">
            <strong>6+</strong>
            <span>Projects & Tasks</span>
          </div>

        </div>

      </div>

      <a href="#about" className="scroll-down">
        <span>Scroll Down</span>
        <FaArrowDown />
      </a>

    </section>
  );
}

export default Hero;