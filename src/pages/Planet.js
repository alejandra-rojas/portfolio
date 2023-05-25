import { Link, useNavigate } from "react-router-dom";
import styles from "./Project.module.css";

function Planet() {
  const svgColor = "#2a0000";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div className={styles.projectBody}>
      <div className={styles.header}>
        <div className={styles.name}>
          <Link to="/">ALEJANDRA ROJAS</Link>
        </div>

        <div className={styles.name}>PROJECT LEARNINGS</div>
      </div>
      <div>
        <div className={styles.back} onClick={handleClick}>
          BACK TO PROJECTS
        </div>
        <h1>The planet is your canvas</h1>

        <div className={styles.projectData}>
          <div className={styles.projectStack}>
            <div className={styles.iconContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 128">
                <title>CSS</title>
                <path
                  d="M0 0l10.67 115.55L56.89 128l46.22-12.45L113.78 0zm90.87 37.45L56.85 52h-.08 32.9l-3.76 43.31-29 8.46-29.23-8.62-1.88-21.8h14.48l.94 11.29 15.5 3.92h.13l16-4.51L74 65.83l-17.14-.06-32-.1L23.76 52l33.09-13.75 1.93-.8H22.51l-1.72-14h71.49z"
                  fill={svgColor}
                ></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 128">
                <title>React</title>
                <path
                  d="M71.93 51.18A12.82 12.82 0 1084.75 64a12.82 12.82 0 00-12.82-12.82zM36 89.5l-2.83-.72C12.1 83.45 0 74.41 0 64s12.1-19.51 33.18-24.84l2.82-.71.8 2.8A141.38 141.38 0 0045 62.7l.59 1.3-.59 1.26a139.18 139.18 0 00-8.19 21.44zm-4.13-43.79C15.84 50.22 6 57.1 6 64s9.83 13.75 25.86 18.26A149.86 149.86 0 0139 64a148.61 148.61 0 01-7.13-18.29zm76 43.79l-.8-2.81a140.22 140.22 0 00-8.17-21.44L98.27 64l.61-1.27a140.73 140.73 0 008.17-21.45l.8-2.81 2.84.72c21.08 5.33 33.17 14.37 33.17 24.81s-12.09 19.48-33.17 24.81zM104.91 64A149.77 149.77 0 01112 82.23c16-4.51 25.87-11.39 25.87-18.26S128 50.22 112 45.71A148.55 148.55 0 01104.91 64zM31.83 45.68L31 42.89C25.1 22 26.9 7 36 1.79c8.89-5.13 23.16.93 38.11 16.28l2 2.09-2 2.09A141.37 141.37 0 0059.57 40l-.81 1.15-1.41.12A142.66 142.66 0 0034.66 45zM43.2 5.94A8.37 8.37 0 0039 7c-6 3.43-7 15.37-2.91 31.49a151 151 0 0119.38-3 149.94 149.94 0 0112.3-15.25c-9.38-9.13-18.23-14.3-24.57-14.3zM100.67 128c-8.54 0-19.51-6.43-30.89-18.12l-2-2.09 2-2.1A140 140 0 0084.29 87.9l.81-1.15 1.4-.12A141.45 141.45 0 00109.2 83l2.83-.72.81 2.81c5.91 20.88 4.12 35.86-4.94 41.08a14.29 14.29 0 01-7.23 1.83zm-24.55-20.27c9.35 9.11 18.21 14.27 24.55 14.27a8.3 8.3 0 004.22-1c6-3.44 7-15.38 2.91-31.5a149.27 149.27 0 01-19.38 3 148.85 148.85 0 01-12.3 15.23zm35.91-62L109.2 45a141.47 141.47 0 00-22.7-3.66l-1.4-.12-.81-1.22a140 140 0 00-14.51-17.75l-2-2.09 2-2.09C84.73 2.72 99-3.34 107.9 1.79 117 7 118.76 22 112.84 42.88zM88.42 35.46a149.92 149.92 0 0119.38 3c4.11-16.12 3-28.06-2.91-31.49s-17 1.82-28.77 13.23a149.94 149.94 0 0112.3 15.26zM43.2 128a14.17 14.17 0 01-7.2-1.85c-9.1-5.22-10.9-20.15-5-41.08l.79-2.81 2.83.72a142.38 142.38 0 0022.69 3.65l1.41.12.8 1.15a140.9 140.9 0 0014.52 17.79l2 2.1-2 2.09C62.69 121.57 51.73 128 43.2 128zm-7.14-38.53C32 105.59 33 117.53 39 121s17-1.83 28.77-13.24a149.94 149.94 0 01-12.3-15.25 149.27 149.27 0 01-19.41-3.04zm35.87 3.77c-4.93 0-10-.22-15.08-.64l-1.41-.12-.81-1.15q-4.31-6.19-8.09-12.72t-7-13.36L39 64l.6-1.27q3.21-6.83 7-13.36c2.48-4.29 5.21-8.57 8.09-12.72l.81-1.16 1.41-.12a178.8 178.8 0 0130.17 0l1.4.12.81 1.16a179.92 179.92 0 0115.02 26.05l.61 1.27-.61 1.28a178.48 178.48 0 01-15.08 26.08l-.81 1.15-1.42.12c-5.06.4-10.13.64-15.07.64zm-13.17-6.5a175.58 175.58 0 0026.35 0A175.27 175.27 0 0098.27 64 171.21 171.21 0 0085.1 41.21a172.84 172.84 0 00-26.34 0A171.21 171.21 0 0045.59 64a175.34 175.34 0 0013.17 22.74z"
                  fill={svgColor}
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 92.38 127.63"
              >
                <title>Firebase</title>
                <path
                  d="M3.06,83.36L15.63,2.45c.24-1.58,1.72-2.66,3.3-2.42,.9,.14,1.68,.69,2.11,1.49l13.52,25.38L3.06,83.36Zm89.32,19.63l-11.97-74.46c-.27-1.58-1.77-2.63-3.35-2.36-.58,.1-1.12,.38-1.54,.79L0,102.99l41.79,23.55c2.62,1.47,5.82,1.47,8.44,0l42.15-23.55ZM58.42,38.01l-9.68-18.52c-.74-1.41-2.49-1.95-3.89-1.21-.52,.27-.94,.69-1.21,1.21L1.14,95.64,58.42,38.01Z"
                  fill={svgColor}
                />
              </svg>
            </div>
          </div>

          <div className={styles.projectLinks}>
            Nov 2022 - Apr 2023 &nbsp;|&nbsp;
            <a
              href="https://theplanetisyourcanvas.com/"
              target="_blank"
              rel="noreferrer"
            >
              Deployed website
            </a>
            &nbsp;|&nbsp;
            <a
              href="https://github.com/alejandra-rojas/ThePlanetIsYourCanvas"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo
            </a>
          </div>
        </div>

        <h2>
          The objective of the project was to create a website for an art
          contest. First, the webpage provided information and resources, along
          with a form for participants to submit their entries to the contest.
          Later on, the website displayed the finalists and allowed the public
          to register and vote for their favorites to select the winners. My
          learnings and struggles this project are presented here.
        </h2>

        <div className={styles.description}>
          The communication lead of this project, a friend and old university
          classmate, knew I was studying coding, and got me into the project.
          The webpage had two main phases, one mostly informational and another
          in which the public would vote for the finalist artworks to select the
          winner. The second phase was the most challenging, however, the voting
          widget, would need to be implemented 3-4 months after the first phase.
          Although I was just starting my dev studies at this point, the project
          timeframe would allow me to make progress in my course and explore
          solutions for the technical implementation of the voting widget.
          <br />
          <br />
          During the initial phase, the website primarily provided information
          about the contest, including contest details, available resources, and
          a submission form for participants to submit their artwork. The main
          challenge at this stage was to create a responsive webpage within a
          week's time. Although I received a mostly finished desktop design, I
          had to determine the mobile implementation and prepare all the
          necessary icons and images for web implementation. For this phase, I
          used HTML, CSS, and JavaScript to develop the webpage. It was only in
          the second phase that I refactored the code into a React app. <br />
          <br />
          In school, I had a glimpse of Firebase as a convenient data storage
          solution. So, when considering the voting widget, I focused on
          Firebase as it appeared to be a straightforward choice at that point.
          After extensive research and watching numerous tutorial videos, I
          stumbled upon a video that developed a blog-like page with a "like"
          functionality. I adapted this approach to suit the requirements of my
          project. <br />
          <br />
          My solution incorporated Firebase Authentication with email and phone
          to register users. Firebase Database was employed to store the artwork
          details, such as image url, title, and vote. React would then connect
          to the database and dynamically render the artworks on the webpage.
          For the voting functionality, users were assigned a unique ID upon
          registration. When they voted, their ID would be stored in the
          database's votes array, effectively preventing them from voting again
          for the same artwork. Additionally, a click event triggered an
          animation where the thumbs-up icon would move up and change colour, to
          give visual feedback that their vote was submitted. <br />
          <br />
          The second stage of the webpage, the voting stage, would last for 10
          days. The same day it went live, I noticed a significant increase in
          database reads, and it looked like Firebase's free daily limit of 50K
          would be surpassed. Considering the costs associated with exceeding
          the limit, I quickly realised that paying for additional reads was not
          a viable option. Since the communication lead was unresponsive to my
          messages on that Saturday, I decided to disable the widget as the 50K
          daily limit was close. I displayed a maintenance message and
          frantically investigated the cause of the excessive reads and
          potential solutions.
          <img
            src="../images/project-planet/reads.png"
            alt="Reads generated in the first 15 hours of the website went live"
          />
          <div className={styles.caption}>
            Reaching the daily limit within 16 hours of going live
          </div>
          <br />
          <br />I had an idea regarding the root cause since I was utilising the
          onSnapshot() method to receive real-time updates for the vote counter.
          While this implementation appeared seamless, any changes made to the
          database (votes) propagated automatically to all active browsers,
          resulting in additional database reads. <br />
          <br />
          Given the time constraints and the need to resolve the widget issue
          promptly, I dedicated myself to finding a solution to prevent the
          problem from recurring on a daily basis. After extensive online
          research, I refactored the code and replaced onSnapshot() method with
          the getDocs() method. <br />
          <br />
          <div className={styles.doublePics}>
            <div>
              <img
                src="../images/project-planet/onSnapshot.png"
                alt="screenshot of the on snapshot code"
              />
              <div className={styles.caption}>onSnapshot code</div>
            </div>
            <div>
              <img
                src="../images/project-planet/getDocs.png"
                alt="screenshot of the refactored code"
              />
              <div className={styles.caption}>
                Refactored code to reduce database views
              </div>
            </div>
          </div>
          The code refactoring came with a trade-off in the UX, as the user no
          longer received immediate feedback upon submitting their vote, and
          updates to the vote counter could only be seen by refreshing the
          browser. To enhance the user experience, I implemented a success
          notification that informed users their vote had been successfully
          submitted. Furthermore, I provided instructions that refreshing the
          page would display their applied vote. By midday the following day, I
          deployed the refactored code, resulting in a significant decrease in
          database reads. Fortunately, I did not encounter the need to disable
          the widget for the remaining duration of the voting stage.
          <br />
          <br />I was open and transparent regarding the challenges I faced
          while deploying the voting widget. When the client was informed about
          the situation on Monday, they weren’t concerned as all the issues were
          resolved and the disruption was minimal. Overall, the client was very
          satisfied with the project's outcome, and I personally gained
          invaluable learning experiences from the process. Reflecting on this
          experience, I believe that for future projects of a similar nature, I
          will explore the implementation of a different kind of database for
          the solution.
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.back} onClick={handleClick}>
          Back to projects
        </div>
        <div className={styles.name}>
          <Link to="/">ALEJANDRA ROJAS</Link>
        </div>
      </div>
    </div>
  );
}

export default Planet;
