import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaChartBar,
  FaPalette
} from "react-icons/fa";

import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "Web Development",
    description:
      "A responsive personal portfolio website designed to showcase my skills, services, projects and professional experience.",
    image: "/images/portfo.jpg",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Elijah51/elijah-portfolio",
    live: "elijah-portfolio-lac.vercel.app"
  },

  {
    id: 2,
    title: "Business Performance Analysis Dashboard",
    category: "Data Analysis",
    description:
      "An interactive Excel dashboard designed to transform raw business data into useful insights and visual reports.",
    image: "/images/businessPerf.jpg",
    technologies: ["Excel", "Pivot Table", "Charts"],
    live: "#"
  },

  {
    id: 3,
    title: "Student Management Dashboard",
    category: "Data Analysis",
    description:
      "A dashboard interface for presenting student information, performance statistics and useful administrative data.",
    image: "/images/studentDash.jpg",
    technologies: ["Excel", "Pivot Table", "Charts"],
    live: "#"
  },

  {
    id: 4,
    title: "E-Commerce Website",
    category: "Web Development",
    description:
      "A modern e-commerce interface with product presentation, responsive layouts and an intuitive shopping experience.",
    image: "/images/ecom.jpg",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Elijah51",
    live: "#"
  },

  {
    id: 5,
    title: "Business Graphic Design",
    category: "Graphic Design",
    description:
      "A collection of professional visual designs created for business branding and digital marketing.",
    image: "/images/MyFryer.png",
    technologies: ["Corel Draw", "Photoshop"],
    live: "#"
  },

  {
    id: 6,
    title: "NYSC Camp Dashboard",
    category: "Data Analysis",
    description:
      "A dashboard concept designed for organizing and presenting camp-related information and statistics.",
    image: "/images/NYSC_Dashboard.jpg",
    technologies: ["Excel", "Pivot Table", "Charts"],
    live: "https://docs.google.com/spreadsheets/d/1IOAcq88GwN0X9pQG0Xk2mJ2L17Tr_L5D/edit?usp=drivesdk&ouid=101443957823882354688&rtpof=true&sd=true"
  }
];

const categories = [
  "All",
  "Web Development",
  "Data Analysis",
  "Graphic Design"
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="portfolio" id="portfolio">

      <div className="container">

        <div className="portfolio-heading">

          <div>
            <p>MY RECENT WORK</p>

            <h2 className="section-title">
              Featured Projects
            </h2>
          </div>

          <p className="portfolio-intro">
            A selection of projects that demonstrate my
            technical, analytical and creative skills.
          </p>

        </div>

        {/* Filter buttons */}

        <div className="portfolio-filters">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Projects */}

        <div className="projects-grid">

          {filteredProjects.map((project) => (

            <article
              className="project-card"
              key={project.id}
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title}`}
                  >
                    <FaExternalLinkAlt />
                  </a>

                  {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub />
              </a>
)}

                </div>

              </div>

              <div className="project-content">

                <div className="project-category">

                  {project.category === "Data Analysis" ? (
                    <FaChartBar />
                  ) : project.category === "Graphic Design" ? (
                    <FaPalette />
                  ) : (
                    <FaCode />
                  )}

                  <span>{project.category}</span>

                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">

                  {project.technologies.map(
                    (technology, index) => (
                      <span key={index}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

                <div className="project-links">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Project
                    <FaExternalLinkAlt />
                  </a>

                  {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                  <FaGithub />
                </a>
              )}

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="portfolio-cta">

          <div>
            <h3>
              Have a project in mind?
            </h3>

            <p>
              Let's work together and turn your idea
              into a practical digital solution.
            </p>
          </div>

          <a href="#contact">
            Start a Project
            <FaExternalLinkAlt />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Portfolio;