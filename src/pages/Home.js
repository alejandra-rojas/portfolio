import { useRef } from "react";
import Header from "../components/Header";
import Hello from "../components/Hello";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ProjectModal from "../components/ProjectModal";
import { Route } from "react-router";

function Home() {
  return (
    <div>
      <Header />
      <Hello />
      <Journey />
      <div id="projects">
        <Projects />
      </div>

      <Contact />
      {/* <ProjectModal /> */}
    </div>
  );
}

export default Home;
