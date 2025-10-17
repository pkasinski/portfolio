import { useState } from "react";
import "./App.css";
import Typewriter from "typewriter-effect";

export default function App() {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <>
      <section className="introduction">
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
        <p className="intro-text">
          I am a software developer based in Gothenburg with a master's degree
          in computer science and engineering, and work experience from Volvo
          Group and Toyota Material Handling. My interests range from
          algorithms, data science and backend development to UI/UX design and
          frontend development.
        </p>
      </section>
      <section className="timeline"></section>
      <section className="projects"></section>
    </>
  );
}
