import "./App.css";
import Introduction from "./components/Introduction";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
