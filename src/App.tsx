import "./App.css";
import Introduction from "./components/Introduction";
import Background from "./components/Background";

export default function App() {
  return (
    <>
      <Introduction></Introduction>
      <Background></Background>
      <section className="projects"></section>
    </>
  );
}
