import React from "react";

function Contact() {
  return (
    <div className="header-offset" id="contact">
      <section className="section--contact hundredvh centered  left-right">
        <div className="contact--details">
          <div>
            <div className="contact--type">email</div>
            <div className="contact--detail">
              <a href="mailto:alejandra.rojas@hyperisland.se">
                alejandra.rojas@hyperisland.se
              </a>
            </div>
          </div>
          <div>
            <div className="contact--type">linkedin</div>
            <div className="contact--detail">
              <a href="https://www.linkedin.com/in/alerojasmal/">
                linkedin.com/in/alerojasmal
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
