import "../App.css";
import "./Introduction.css";
import Typewriter from "typewriter-effect";

export default function Introduction() {
  return (
    <section className="introduction">
      <div className="container">
        <div className="heading text-title">
          <Typewriter
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello, my name is Pawel Kasinski.")
                .callFunction(() => {
                  typewriter.stop();
                })
                .start();
            }}
          />
        </div>
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
