import "../App.css";
import Project from "./Project";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="heading text-section-title">Projects</p>
        <div className="container-inner">
          <Project
            projectTitle="App for Planning and Visualizing Routes"
            thumbnailUrl="src/assets/volvo-app/charge-planning-app-1.png"
          ></Project>
          <Project
            projectTitle="Solving the Vehicle Routing Problem"
            thumbnailUrl="src/assets/master's-thesis-cover.png"
          ></Project>
          <Project
            projectTitle="Typewriter Effect"
            thumbnailUrl="src/assets/typewriter-effect-screenshot.png"
          ></Project>
          <Project
            projectTitle="Memory Game"
            thumbnailUrl="src/assets/memory-game-screenshot.png"
          ></Project>
          <Project
            projectTitle="Classifying Rivers using Deep Learning"
            thumbnailUrl="src/assets/bachelor's-thesis-cover.png"
          ></Project>
        </div>
      </div>
    </section>
  );
}
