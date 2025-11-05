import "../App.css";
import { scrollToSection } from "../utils";
import "./Background.css";
import Experience from "./Experience";
import Typewriter from "./Typewriter";

export default function Background() {
  return (
    <section id="background" className="background">
      <div className="container">
        <p className="heading text-section-title">Background</p>
        <div className="container-inner">
          <div className="timeline">
            <div className="timeline-left">
              <div className="line bsc-line"></div>
              <div className="line pre-msc-line"></div>
              <div className="line msc-line"></div>
            </div>
            <div className="timeline-right">
              <div className="line pre-toyota-line"></div>
              <div className="line toyota-line"></div>
              <div className="line exchange-line"></div>
              <div className="line pre-volvo-summer-line"></div>
              <div className="line volvo-summer-line"></div>
              <div className="line volvo-autumn-line"></div>
              <div className="line pre-volvo-thesis-line"></div>
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
              three years I carried out a bachelor's thesis project in which I,
              together with my group, developed a system that uses machine
              learning to classify the difficulty of navigating a river based on
              satellite images. <br></br>
              <Typewriter
                className="bsc-courses"
                preceedingText="During my bachelor's studies I took courses such
              as "
                strings={[
                  "Discrete Mathematics.",
                  "Introduction to Computer Engineering.",
                  "Linear Algebra.",
                  "Object Oriented Programming.",
                  "Design and Implementation of Graphical Interfaces.",
                  "Communication and Professional Development.",
                  "Calculus.",
                  "Technology for a Global Sustainable Society.",
                  "Physics for Engineers.",
                  "Medicine for the Engineer.",
                  "Object-Oriented Programming and Design.",
                  "Multivariable Calculus.",
                  "Introduction to Data Science and AI.",
                  "Machine Oriented Programming.",
                  "Agile Software Project Management.",
                  "Mathematical Statistics and Discrete Mathematics.",
                  "Object-Oriented Programming Project.",
                  "Mathematical Modelling and Problem Solving.",
                  "Software Engineering Principles for Complex Systems.",
                  "Data Structures and Algorithms.",
                  "Databases.",
                  "Professional Development for Engineers and English.",
                ]}
                loop={true}
                typingSpeed={80}
              ></Typewriter>
            </Experience>
            <Experience
              className="description toyota-description"
              timeSpan="June 2023 - September 2023"
              organization="TOYOTA MATERIAL HANDLING"
              role="System Developer (Summer Intern)"
            >
              In the summer of 2023 I did an internship at Toyota Material
              Handling, where they develop T-ONE, a software for order handling
              and traffic management of AGVs such as driverless forklifts. Since
              T-ONE is built using a service based architecture, I learned about
              microservices during this time and got hands-on experience with
              Docker, RabbitMQ, and Elasticsearch/Kibana. Throughout the
              internship I mostly did backend development in C# to extend the
              functionality of one of the microservices, but also got the
              opportunity to work on the web application by doing frontend
              development using TypeScript and Angular.
            </Experience>
            <Experience
              className="description exchange-description"
              timeSpan="October 2023 - February 2024"
              organization="WARSAW UNIVERSITY OF TECHNOLOGY"
              role="Exchange Studies"
            >
              At the start of my master's studies I decided to go on a student
              exchange, and went to study at Warsaw University of Technology for
              one semester. At that time I got to experience living in the
              capital of Poland, and had the chance to take courses that differ
              from those available at Chalmers. I studied at the Faculty of
              Electronics and Information Science and took the courses{" "}
              <i>Evolutionary Algorithms</i>, <i>Data Mining</i>,{" "}
              <i>Computer Networks</i>, <i>Image and Speech Recognition</i>, and{" "}
              <i>Computer Graphics</i>.
            </Experience>
            <Experience
              className="description msc-description"
              timeSpan="2023 - 2025"
              organization="CHALMERS UNIVERSITY OF TECHNOLOGY"
              role="Computer Science and Engineering, MSc"
            >
              After completing my bachelor's studies I wanted to delve deeper
              into the topic of algorithms as I think it is central to computer
              science, and therefore chose the master's programme{" "}
              <i>Computer science - algorithms, languages and logic</i>. During
              this period of my studies, I got to explore topics such as logic,
              optimization, and computer security, and got a deeper
              understanding of algorithms, machine learning, and the underlying
              principles of programming languages. <br></br>
              <Typewriter
                className="msc-courses"
                preceedingText="After coming back from the student exchange I took courses such
              as "
                strings={[
                  "Computer Security.",
                  "Discrete Optimization.",
                  "Applied Machine Learning.",
                  "Language-Based Security.",
                  "Algorithms.",
                  "Logic in Computer Science.",
                  "The Computer Scientist in Society.",
                  "Algorithms, Advanced Course.",
                ]}
                loop={true}
                typingSpeed={80}
              ></Typewriter>
            </Experience>
            <Experience
              className="description volvo-summer-description"
              timeSpan="June 2024 - August 2024"
              organization="VOLVO GROUP"
              role="Software Developer (Summer Worker)"
            >
              In 2024 I joined Volvo Group as a summer intern, and was tasked to
              create a mobile application for planning and visualizing routes
              with optimal charging stops for electric trucks. Together with
              another summer intern, we brought the idea to life by developing a
              cross-platform app using the framework Flutter and the programming
              language Dart. The app communicated with our backend, written in
              Python, to fetch routes, and upon receiving a route, overlayed it
              on a map. Throughout the project, I worked in a fullstack manner,
              being responsible for the backend, the frontend, and the design of
              the user interface. The project culminated in us running the app
              on truck hardware, and testing the app while driving a truck. More
              details about the app can be found in the{" "}
              <a onClick={() => scrollToSection("projects")}>
                Projects section
              </a>
              .
            </Experience>
            <Experience
              className="description volvo-autumn-description"
              timeSpan="September 2024 - October 2024"
              organization="VOLVO GROUP"
              role="App Developer (Part-Time)"
            >
              After a productive summer at Volvo Group, I was offered to keep
              working there part-time alongside my studies. I accepted the offer
              and continued developing the previously created mobile
              application.
            </Experience>
            <Experience
              className="volvo-thesis-description"
              timeSpan="January 2025 - June 2025"
              organization="VOLVO GROUP"
              role="Thesis Student"
            >
              At the end of my studies I returned to Volvo Group to carry out my
              master's thesis project. During the project, I designed and
              implemented an algorithm for solving a new variant of the vehicle
              routing problem that includes difficult aspects such as split
              pickups and deliveries, and charging of electric vehicles. In
              short, the task was to find routes for a fleet of vehicles
              originating from a depot, such that products are picked up and
              delivered to designated customer locations while minimizing the
              overall cost. In the project, realistic data from a customer of
              Volvo Group was used, and the focus was on designing an algorithm
              that can solve the problem relatively fast. The project tied
              nicely into my education, and the work consisted of reading
              academic papers, writing code in Python, and later on, applying
              the algorithm and writing the thesis.
            </Experience>
          </div>
        </div>
      </div>
    </section>
  );
}
