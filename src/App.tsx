import { useState } from "react";
import "./App.css";
import Typewriter from "typewriter-effect";

export default function App() {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <>
      <section className="introduction">
        <div className="title">
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
        <p className="text-big">
          I am a software developer based in Gothenburg with a master's degree
          in computer science and engineering, and work experience from Volvo
          Group and Toyota Material Handling. My interests range from
          algorithms, data science and backend development to UI/UX design and
          frontend development.
        </p>
      </section>
      <section className="background">
        <div className="container">
          <p className="heading">Background</p>
          <div className="bsc-container">
            <div className="line"></div>
            <div className="description">
              <p className="heading-small">2020 - 2023</p>
              <p className="heading-small">CHALMERS UNIVERSITY OF TECHNOLOGY</p>
              <p className="text-big"> Software Engineering, BSc</p>
              <p className="text-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="toyota-container">
            <div className="line"></div>
            <div className="description">
              <p className="heading-small">June 2023 - September 2023</p>
              <p className="heading-small">TOYOTA MATERIAL HANDLING</p>
              <p className="text-big">System Developer (Summer Intern)</p>
              <p className="text-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="projects"></section>
    </>
  );
}
