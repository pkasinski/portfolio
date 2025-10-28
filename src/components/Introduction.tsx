import "../App.css";
import "./Introduction.css";
import Typewriter from "./Typewriter";

export default function Introduction() {
  return (
    <section id="introduction" className="introduction">
      <div className="container">
        <Typewriter
          className="heading text-title"
          strings={["Hello, my name is Pawel Kasinski."]}
          loop={false}
          typingSpeed={80}
        ></Typewriter>
        <p className="text-undertitle">
          I am a software developer based in Gothenburg with a master's degree
          in computer science and engineering, and work experience from Volvo
          Group and Toyota Material Handling. My interests range from
          algorithms, data science and backend development to UI/UX design and
          frontend development.
        </p>
      </div>
    </section>
  );
}
