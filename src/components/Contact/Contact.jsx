import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import "./Contact.css";

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const mailto = `mailto:your-email@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <section className="contact" id="contact">

      <div className="container">

        <div className="contact-heading">

          <p>GET IN TOUCH</p>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <span>
            Have a project, opportunity or question?
            I'd love to hear from you.
          </span>

        </div>

        <div className="contact-wrapper">

          {/* Contact Information */}

          <div className="contact-info">

            <h3>
              Let's start a conversation.
            </h3>

            <p>
              Whether you need a website, data analysis,
              graphic design or a digital solution for your
              business, feel free to contact me.
            </p>

            <div className="contact-details">

              <a href="mailto:elijahsimon820@gmail.com">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <small>Email</small>
                  <span>elijahsimon820@gmail.com</span>
                </div>
              </a>

              <a href="tel:+2347040198658">
                <div className="contact-icon">
                  <FaPhone />
                </div>

                <div>
                  <small>Phone</small>
                  <span>+2347040198658</span>
                </div>
              </a>

              <div className="contact-detail">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <small>Location</small>
                  <span>Nigeria</span>
                </div>
              </div>

            </div>

            <div className="contact-socials">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <form
           
            className="contact-form"
          action="https://formspree.io/f/xqpzawre"
          method="POST"
          >

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>

            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Tell me about your project..."
                required
              ></textarea>

            </div>

            <button type="submit">
              Send Message
              <FaPaperPlane />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;