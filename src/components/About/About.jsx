import {
  FaCode,
  FaChartLine,
  FaPalette,
  FaBuilding,
  FaCheckCircle
} from "react-icons/fa";

import "./About.css";

function About() {
  const skills = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      text: "Building responsive and interactive websites using modern web technologies."
    },
    {
      icon: <FaChartLine />,
      title: "Data Analysis",
      text: "Analyzing data with Excel and Python to generate useful business insights."
    },
    {
      icon: <FaPalette />,
      title: "Graphic Design",
      text: "Creating professional visual designs for brands, businesses and digital platforms."
    },
    {
      icon: <FaBuilding />,
      title: "Real Estate",
      text: "Supporting property marketing and helping clients discover suitable real estate opportunities."
    }
  ];

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    
  ];

  return (
    <section className="about" id="about">

      <div className="container">

        <div className="about-heading">
          <p>GET TO KNOW ME</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-main">

          {/* About text */}

          <div className="about-text">

            <h3>
              I create digital solutions that
              <span> make an impact.</span>
            </h3>

            <p>
              I am Elijah Dominic Simon, a Computer Science graduate
              passionate about technology, creativity and business.
              I enjoy solving problems by combining technical skills
              with analytical thinking and creative design.
            </p>

            <p>
              My professional interests span frontend web development,
              data analysis, graphic design and real estate. This
              combination allows me to approach projects from both
              technical and business perspectives.
            </p>

            <div className="about-points">

              <div>
                <FaCheckCircle />
                <span>Responsive Web Development</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Data Analysis & Reporting</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Creative Graphic Design</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Professional Digital Solutions</span>
              </div>

            </div>

            <a href="#contact" className="about-button">
              Let's Work Together
            </a>

          </div>

          {/* Stats */}

          <div className="about-stats">

            <div className="stat-card">
              <strong>4+</strong>
              <span>Professional Areas</span>
            </div>

            <div className="stat-card">
              <strong>9+</strong>
              <span>Technology Skills</span>
            </div>

            <div className="stat-card">
              <strong>10+</strong>
              <span>Projects & Tasks</span>
            </div>

            <div className="stat-card">
              <strong>100%</strong>
              <span>Commitment</span>
            </div>

          </div>

        </div>

        {/* Professional areas */}

        <div className="professional-skills">

          <div className="skills-heading">
            <p>WHAT I DO</p>
            <h3>My Professional Skills</h3>
          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h4>{skill.title}</h4>

                <p>{skill.text}</p>

              </div>
            ))}

          </div>

        </div>

        {/* Technologies */}

        <div className="technology-section">

          <div className="skills-heading">
            <p>MY TOOLKIT</p>
            <h3>Technologies I Work With</h3>
          </div>

          <div className="technology-grid">

            {technologies.map((technology, index) => (
              <div className="technology" key={index}>
                {technology}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;