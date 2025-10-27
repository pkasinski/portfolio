import "../App.css";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <p className="heading text-section-title">Contact</p>
        <p className="text-undertitle">
          Are you interested in working with me? Don't hesitate to{" "}
          <a
            href="https://www.linkedin.com/in/pawel-kasinski-bb518b27a"
            target="_blank"
          >
            contact me on LinkedIn.
          </a>
        </p>
      </div>
    </section>
  );
}
