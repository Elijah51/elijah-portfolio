import {
  FaLaptopCode,
  FaChartBar,
  FaPaintBrush,
  FaHome,
  FaArrowRight
} from "react-icons/fa";

import "./Services.css";

const services = [
  {
    icon: <FaLaptopCode />,
    number: "01",
    title: "Web Development",
    description:
      "I build modern, responsive and user-friendly websites using HTML, CSS, JavaScript and React.",
    tags: ["React", "JavaScript", "HTML5", "CSS"]
  },
  {
    icon: <FaChartBar />,
    number: "02",
    title: "Data Analysis",
    description:
      "I transform raw data into useful information through analysis, reporting, dashboards and visualization.",
    tags: ["Excel"]
  },
  {
    icon: <FaPaintBrush />,
    number: "03",
    title: "Graphic Design",
    description:
      "I create clean and professional visual designs for businesses, brands, social media and digital platforms.",
    tags: ["Corel Draw", "Photoshop"]
  },
  {
    icon: <FaHome />,
    number: "04",
    title: "Real Estate",
    description:
      "I support property marketing and digital presentation while helping clients identify suitable real estate opportunities.",
    tags: ["Property", "Marketing", "Management"]
  }
];

function Services() {
  return (
    <section className="services" id="services">

      <div className="container">

        <div className="services-heading">

          <div>
            <p>WHAT I OFFER</p>

            <h2 className="section-title">
              My Services
            </h2>
          </div>

          <p className="services-intro">
            Combining technology, creativity, data and business
            thinking to provide practical digital solutions.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-top">

                <div className="service-icon">
                  {service.icon}
                </div>

                <span className="service-number">
                  {service.number}
                </span>

              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-tags">

                {service.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>
                    {tag}
                  </span>
                ))}

              </div>

              <a href="#contact" className="service-link">
                Discuss a Project
                <FaArrowRight />
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;