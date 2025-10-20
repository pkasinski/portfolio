import { useState } from "react";
import "./App.css";
import Typewriter from "typewriter-effect";
import Experience from "./components/Experience";

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
        <p className="heading">Background</p>
        <div className="container">
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
              className="bsc-description"
              timeSpan="2020 - 2023"
              organization="CHALMERS UNIVERSITY OF TECHNOLOGY"
              role="Software Engineering, BSc"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Experience>
            <Experience
              className="toyota-description"
              timeSpan="June 2023 - September 2023"
              organization="TOYOTA MATERIAL HANDLING"
              role="System Developer (Summer Intern)"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Experience>
            <Experience
              className="exchange-description"
              timeSpan="October 2023 - February 2024"
              organization="WARSAW UNIVERSITY OF TECHNOLOGY"
              role="Exchange Studies"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Experience>
            <Experience
              className="msc-description"
              timeSpan="2023 - 2025"
              organization="CHALMERS UNIVERSITY OF TECHNOLOGY"
              role="Computer Science and Engineering, MSc"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Experience>
            <Experience
              className="volvo-summer-description"
              timeSpan="June 2024 - August 2024"
              organization="VOLVO GROUP"
              role="Software Developer (Summer Worker)"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Experience>
            <Experience
              className="volvo-autumn-description"
              timeSpan="September 2024 - October 2024"
              organization="VOLVO GROUP"
              role="App Developer (Part-Time)"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Experience>
            <Experience
              className="volvo-thesis-description"
              timeSpan="January 2025 - June 2025"
              organization="VOLVO GROUP"
              role="Thesis Student"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Experience>
          </div>
        </div>
      </section>
      <section className="projects"></section>
    </>
  );
}
