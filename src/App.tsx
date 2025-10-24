import "./App.css";
import Typewriter from "typewriter-effect";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
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
      <section className="background">
        <div className="container">
          <p className="heading text-section-title">Background</p>
          <div className="container-inner">
            <div className="timeline">
              <div className="timeline-left">
                <div className="line bsc-line"></div>
                <div className="line msc-line"></div>
              </div>
              <div className="timeline-right">
                <div className="line toyota-line"></div>
                <div className="line exchange-line"></div>
                <div className="line volvo-summer-line"></div>
                <div className="line volvo-autumn-line"></div>
                <div className="line volvo-thesis-line"></div>
              </div>
            </div>
            <div className="descriptions">
              <Experience
                className="description bsc-description"
                timeSpan="2020 - 2023"
                organization="CHALMERS UNIVERSITY OF TECHNOLOGY"
                role="Software Engineering, BSc"
              >
                In 2020 I moved to Gothenburg to study software engineering at
                Chalmers University of Technology. The duration of the programme
                is five years and it is separated into three years of bachelor's
                studies and two years of master's studies. In the first three
                years, I took a variety of courses, but the main focus was on
                software development and mathematics. Toward the end of these
                three years I carried out a bachelor's thesis project in which
                I, together with my group, developed a system that uses machine
                learning to classify the difficulty of navigating a river based
                on satellite images. During my bachelor's studies I took courses
                such as{" "}
                <span className="typewriter-inline">
                  <Typewriter
                    options={{
                      strings: [
                        "Discrete mathematics, Introduction to computer engineering, Linear algebra.",
                        "Object oriented programming, Design and implementation of graphical interfaces, Communication and professional development.",
                        "Calculus, Technology for a global sustainable society, Physics for engineers.",
                        "Medicine for the engineer, Object-oriented programming and design, Multivariable calculus.",
                        "Introduction to data science and AI, Machine oriented programming, Agile software project management.",
                        "Mathematical statistics and discrete mathematics, Object-oriented programming project, Mathematical modelling and problem solving.",
                        "Software engineering principles for complex systems, Data structures and algorithms, Databases.",
                        "Professional development for engineers and English.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </Experience>
              <Experience
                className="toyota-description"
                timeSpan="June 2023 - September 2023"
                organization="TOYOTA MATERIAL HANDLING"
                role="System Developer (Summer Intern)"
              ></Experience>
              <Experience
                className="exchange-description"
                timeSpan="October 2023 - February 2024"
                organization="WARSAW UNIVERSITY OF TECHNOLOGY"
                role="Exchange Studies"
              ></Experience>
              <Experience
                className="msc-description"
                timeSpan="2023 - 2025"
                organization="CHALMERS UNIVERSITY OF TECHNOLOGY"
                role="Computer Science and Engineering, MSc"
              ></Experience>
              <Experience
                className="volvo-summer-description"
                timeSpan="June 2024 - August 2024"
                organization="VOLVO GROUP"
                role="Software Developer (Summer Worker)"
              ></Experience>
              <Experience
                className="volvo-autumn-description"
                timeSpan="September 2024 - October 2024"
                organization="VOLVO GROUP"
                role="App Developer (Part-Time)"
              ></Experience>
              <Experience
                className="volvo-thesis-description"
                timeSpan="January 2025 - June 2025"
                organization="VOLVO GROUP"
                role="Thesis Student"
              ></Experience>
            </div>
          </div>
        </div>
      </section>
      <section className="projects"></section>
    </>
  );
}
