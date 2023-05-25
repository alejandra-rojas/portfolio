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

        <div className="body--container">
          <p>
            The objective of the project was to create a website for an art
            contest. The communication lead of this UN project, a friend and old
            university classmate, knew I was studying coding, and got me into
            the project. The webpage had two main phases. During the initial
            phase, the website primarily provided information about the contest,
            including contest details, available resources, and a submission
            form for participants to submit their artwork. The main challenge at
            this stage was to create a responsive webpage within a week's time.
            Although I received a mostly finished desktop design, I had to
            determine the mobile implementation and prepare all the necessary
            icons and images for web implementation. For this phase, I used
            HTML, CSS, and JavaScript to develop the webpage. It was only in the
            second phase that I refactored the code into a React app. When I
            joined the project, I was just starting my frontend development
            course but I knew that the most challenging part of the project, the
            voting widget, would need to be implemented 3-4 months after the
            first phase. This timeframe would allow me to make progress in my
            course and explore solutions for the technical implementation of the
            voting widget. During a javascript class, we had a glimpse of
            Firebase as a convenient data storage solution. So, when considering
            the voting widget, I focused on Firebase as it appeared to be a
            straightforward choice at that point. After conducting extensive
            research and watching numerous tutorial videos, I stumbled upon a
            guide for developing a blog-like page with a "like" functionality. I
            adapted this approach to suit the requirements of my project. The
            solution incorporated Firebase Authentication, email and phone
            registration, to register users. Firebase Database was employed to
            store the artwork details, such as image url, title, and vote. React
            would then connect to the database and dynamically render the
            artworks on the webpage. For the voting functionality, users were
            assigned a unique ID upon registration. When they voted, their ID
            would be stored in the database's votes array, effectively
            preventing them from voting again for the same artwork.
            Additionally, a click event triggered an animation where the
            thumbs-up icon would move up and change colour, to give visual
            feedback that their vote was submitted. The second stage of the
            webpage, the voting stage, would last for 10 days. The same day it
            went live, I noticed a significant increase in database reads, and
            it looked like Firebase's free daily limit of 50K would be
            surpassed. Considering the costs associated with exceeding the
            limit, I quickly realised that paying for additional reads was not a
            viable option. Since the communication lead was unresponsive to my
            messages on that Saturday, I decided to disable the widget as the
            50K daily limit was close. I displayed a maintenance message and
            frantically investigated the cause of the excessive reads and
            potential solutions. I had an idea regarding the root cause since I
            was utilising the onSnapshot() method to receive real-time updates
            for the vote counter. While this implementation appeared seamless,
            any changes made to the database (votes) propagated automatically to
            all active browsers, resulting in additional database reads. Given
            the time constraints and the need to resolve the widget issue
            promptly, I dedicated myself to finding a solution to prevent the
            problem from recurring on a daily basis. After extensive online
            research, I decided to refactor the code by replacing the
            problematic onSnapshot() method with an alternative approach.
            However, this change came with a trade-off. The user no longer
            received immediate feedback upon submitting their vote, and updates
            to the vote counter could only be seen by refreshing the browser. To
            enhance the user experience, I implemented a success notification
            that informed users their vote had been successfully submitted.
            Furthermore, I provided instructions that refreshing the page would
            display their applied vote. By midday the following day, I deployed
            the refactored code, resulting in a significant decrease in database
            reads. Fortunately, I did not encounter the need to disable the
            widget for the remaining duration of the voting stage.
          </p>
        </div>
      </div>
      ;
    </>
  );
}

export default ProjectModal;
