import Header from "./components/Header";
import Hello from "./components/Hello";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectModal from "./components/ProjectModal";

function App() {
  return (
    <div className="container">
      <Header />
      <Hello />
      <Journey />
      <Projects />
      <Contact />
      {/* <ProjectModal /> */}
    </div>
  );
}

export default App;
