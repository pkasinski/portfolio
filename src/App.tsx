import "./App.css";
import Introduction from "./components/Introduction";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { scrollToSection } from "./utils";

export default function App() {
  return (
    <>
      <Introduction></Introduction>
      <Background></Background>
      <Projects></Projects>
      <Contact></Contact>
      <footer>
        <div className="container">
          <div className="footer-links">
            <a
              onClick={() => {
                scrollToSection("introduction");
              }}
            >
              Introduction
            </a>
            <a
              onClick={() => {
                scrollToSection("background");
              }}
            >
              Background
            </a>
            <a
              onClick={() => {
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
            <a
              onClick={() => {
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </div>
          <p>
            This website was designed and developed by me. The source code is
            available on{" "}
            <a href="https://github.com/pkasinski/portfolio" target="_blank">
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}
