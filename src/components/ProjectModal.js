import { useState } from "react";

function ProjectModal({ setShowModal }) {
  return (
    <>
      <div className="modal">
        <div
          href="#projects"
          className="close--modal"
          onClick={() => setShowModal(false)}
        >
          Back to projects
        </div>
        <button className="close--button">x</button>
      </div>
      ;
    </>
  );
}

export default ProjectModal;
