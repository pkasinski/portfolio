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
            thumbnailUrl="src/assets/volvo-app/screenshot-1.png"
            imageUrls={[
              "src/assets/volvo-app/app-recording-2.webm",
              "src/assets/volvo-app/app-recording-3.webm",
              "src/assets/volvo-app/screenshot-1.png",
              "src/assets/volvo-app/screenshot-2.png",
              "src/assets/volvo-app/screenshot-3.png",
              "src/assets/volvo-app/screenshot-4.png",
              "src/assets/volvo-app/screenshot-5.png",
              "src/assets/volvo-app/screenshot-6.png",
              "src/assets/volvo-app/screenshot-7.png",
              "src/assets/volvo-app/screenshot-8.png",
              "src/assets/volvo-app/screenshot-9.png",
              "src/assets/volvo-app/screenshot-10.png",
              "src/assets/volvo-app/screenshot-11.png",
              "src/assets/volvo-app/screenshot-12.png",
              "src/assets/volvo-app/screenshot-13.png",
              "src/assets/volvo-app/screenshot-14.png",
              "src/assets/volvo-app/screenshot-15.png",
              "src/assets/volvo-app/screenshot-16.png",
              "src/assets/volvo-app/screenshot-17.png",
              "src/assets/volvo-app/screenshot-18.png",
              "src/assets/volvo-app/app-recording-1.webm",
            ]}
          ></Project>
          <Project
            title="Solving the Vehicle Routing Problem"
            techStack=""
            description=""
            thumbnailUrl="src/assets/master's-thesis-cover.png"
            imageUrls={[
              "src/assets/master's-thesis-cover.png",
              "src/assets/master's-thesis-abstract.png",
            ]}
          ></Project>
          <Project
            title="Typewriter Effect"
            techStack=""
            description=""
            thumbnailUrl="src/assets/typewriter-effect-screenshot.png"
            imageUrls={["src/assets/typewriter-effect-video.webm"]}
          ></Project>
          <Project
            title="Memory Game"
            techStack=""
            description=""
            thumbnailUrl="src/assets/memory-game-screenshot.png"
            imageUrls={["src/assets/memory-game-video.webm"]}
          ></Project>
          <Project
            title="Classifying Rivers using Deep Learning"
            techStack=""
            description=""
            thumbnailUrl="src/assets/bachelor's-thesis-cover.png"
            imageUrls={[
              "src/assets/bachelor's-thesis-cover.png",
              "src/assets/bachelor's-thesis-abstract.png",
            ]}
          ></Project>
        </div>
      </div>
    </section>
  );
}
