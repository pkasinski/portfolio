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
            title="App for Planning and Visualizing Routes"
            techStack="Flutter/Dart, Flutter Maps, Provider, Python, Flask, Git, etc."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
            thumbnailUrl="src/assets/volvo-app/charge-planning-app-1.png"
          ></Project>
          <Project
            title="Solving the Vehicle Routing Problem"
            techStack=""
            description=""
            thumbnailUrl="src/assets/master's-thesis-cover.png"
          ></Project>
          <Project
            title="Typewriter Effect"
            techStack=""
            description=""
            thumbnailUrl="src/assets/typewriter-effect-screenshot.png"
          ></Project>
          <Project
            title="Memory Game"
            techStack=""
            description=""
            thumbnailUrl="src/assets/memory-game-screenshot.png"
          ></Project>
          <Project
            title="Classifying Rivers using Deep Learning"
            techStack=""
            description=""
            thumbnailUrl="src/assets/bachelor's-thesis-cover.png"
          ></Project>
        </div>
      </div>
    </section>
  );
}
