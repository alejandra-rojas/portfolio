import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import styles from "./Projects.module.css";

function Projects() {
  const href = window.location.pathname;
  const svgColor = "#F1EFE9";
  const [showModal, setShowModal] = useState(false);
  const [onTop, setOnTop] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="section--journey--mobile" id="about-mobile">
        <div className={styles.main}>
          <div className={styles.title}>About me</div>
          <div className={styles.timelineItem}></div>

          <div className={styles.timelineItem}>
            <div
              alt="Baby Ale with her first computer"
              className={styles.timelineImg}
            ></div>
            <div className={styles.timelinePhotoTitle}>
              My interest in technology & tennis started at a young age
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>
              2007 Information Design bachelor
            </div>
            <div className={styles.timelineDescription}>
              Graduated from UDLAP, Mexico. <br />
              <br />
              I specialized in editorial design and worked for various clients,
              I also launched my own quarterly newspaper to promote art and
              culture in Puebla, MX.
              <br />
              <br />
              One of the highlights of my studies was going to Amsterdam for my
              internship at GLU magazine. This was my first time in Europe, and
              the design of the city made a big impression on me, which sparked
              an interest in Urban Design.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>2008 Moved to Barcelona</div>
            <div className={styles.timelineDescription}>
              Joined the Master in Arts: Urban Design: Art, City, Society at the
              Universitat de Barcelona. <br />
              <br />
              Through out this time I kept working as a designer, still doing
              mostly editorial, but also some web design.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>
              2010 Started coding webpages
            </div>
            <div className={styles.timelineDescription}>
              Back in Mexico, it became clear that urban renewal was still not
              in the political agenda, and therefore a difficult field to work
              in. <br />
              <br />
              At this time, I taught myself a bit of HTML, CSS and some JS, and
              got a job at Gurú Brand Buro as a web developer.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>2012 Moved to the UK</div>
            <div className={styles.timelineDescription}>
              Still thinking about the design of the cities, and wanting to live
              in Europe, I managed to get government funding (CONACYT) to do a
              Science Masters in Urban Regeneration at Sheffield Hallam
              University. <br />
              <br /> I continued working remotly for Gurú for a little longer,
              until the masters took over all of my time.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>Paid the bills</div>
            <div className={styles.timelineDescription}>
              After graduating from the MSc, I moved to London, but finding a
              job in urban development was difficult. Soon I had to find any job
              to start paying the bills. I did customer support in various
              levels, got a certification to teach tennis, and moderated content
              for TikTok. <br />
              <br /> During this time I worked both in small and big teams, and
              gained valuable and versatile soft skills. By paying close
              attention to detail and maintaining effective communication with a
              diverse range of stakeholders, I successfully resolved numerous
              challenges.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>2022 Moved to Stockholm</div>
            <div className={styles.timelineDescription}>
              I moved to Sweden following my partner & thanks to free education
              in the country, I joined the Frontend Development program at Hyper
              Island to get myself back into coding.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>2023</div>
            <div className={styles.timelineDescription}>
              <span className={styles.boldDescription}>
                I am now looking for an internship to finish my frontend
                developer program and get my foot in the industry.
                <br />
                <br /> I hope to be an intern in a company that offers a
                supportive and nurturing environment. I want to learn from more
                experienced developers, explore new things and solidify my
                knowledge. With my skill set, ambition and ability to learn, I
                hope to be a positive contribution to the team.
              </span>
            </div>
          </div>

          {/*           <div className={styles.timelineItem}>
            <div
              alt="Baby Ale with her first computer"
              className={styles.timelineImg}
            ></div>
            <div className={styles.timelinePhotoTitle}>
              My interest in technology & tennis started at a young age
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>
              2007 Information Design bachelor
            </div>
            <div className={styles.timelineDescription}>
              Graduated from UDLAP, Mexico. <br />
              <br />
              One of the highlights of my studies was going to Amsterdam for my
              internship at GLU magazine. This was my first time in Europe, and
              the design of the city made a big impression on me, this led me to
              change my career path.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>2008 Moved to Barcelona</div>
            <div className={styles.timelineDescription}>
              Joined the MA Urban Design: Art, City, Society at the Universitat
              de Barcelona. <br />
              <br />
              At the same time I was working as a freelance designer, mostly
              editorial, but also some web design.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>
              2010 Started coding webpages
            </div>
            <div className={styles.timelineDescription}>
              Back from Spain, I attempted to get my foot in the planning
              department of the city, however it was hard, partly because of the
              politics of mexican bureocracy, and also because urban renewal was
              still not in the political agenda. <br />
              <br />
              At this time, I started to code with the basics (HTML, CSS and
              JS), and got a job at Gurú Brand Buro as a developer.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>2012 Moved to the UK</div>
            <div className={styles.timelineDescription}>
              Still thinking about the design of the cities, I managed to get
              government funding (CONACYT) to do a Science Masters in Urban
              Regeneration at Sheffield Hallam University. <br />
              <br /> I continued working remotly for Gurú for a little longer,
              until the studies took all of my time.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>2014-2022 Paid the bills</div>
            <div className={styles.timelineDescription}>
              After graduating from the MSc, I moved to London, and finding a
              job in urban development was still hard; Soon I had to find ANY
              job to start paying the bills. I did customer support throught out
              this time, and during the pandemic I moderated content for TikTok.{" "}
              <br />
              <br /> Throughout this time, I gained valuable and transferable
              soft skills.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>2022 Moved to Stockholm</div>
            <div className={styles.timelineDescription}>
              I moved to Sweden following my partner & thanks to free education
              in the country, I joined the Frontend Development program @ Hyper
              Island to get myself back into coding.
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>2023</div>
            <div className={styles.timelineDescription}>
              I am now looking for an internship to finish my frontend developer
              program and to start my professional career.
            </div>
          </div> */}

          <div className={`${styles.timelineItem} ${styles.hiddenItem}`}>
            <div className={styles.timelineTitle}>2023</div>
            <div className={styles.timelineDescription}>
              I am now looking for an internship to finish my frontend developer
              program and to start my professional career.
            </div>
          </div>
        </div>
      </div>

      <div className="snap-container hundredvh">
        <div className="section--project" id="mobile-projects">
          <div className="section--header">
            <div className="header--title">featured projects & excercices</div>
          </div>
          <div className={styles.projectsHeader}></div>

          <div className={styles.projectsGrid}>
            <div className={`${styles.projectCard} ${styles.tooltip}`}>
              <span className={styles.tooltiptext}>Class project</span>
              <div className={styles.projectImg}>
                <img
                  src="../assets/quiz.png"
                  alt="Screenshot of a randomly styled quotes"
                />
              </div>
              <div className={styles.projectData}>
                <div className={styles.projectTitle}>Pub Quiz!</div>
                <div className={styles.projectDescription}>
                  Final project of the JS FUNdamentals course at HyperIsland.
                  The quiz gets all data from an open API, and the project is
                  all about DOM manipulation, and the fundamentals of
                  Javascript, including the use of local storage.
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://hiquizzz.netlify.app/" target="_blank">
                    Deployed website
                  </a>
                  &nbsp;|&nbsp;
                  <a
                    href="https://github.com/alejandra-rojas/QuizTime"
                    target="_blank"
                  >
                    GitHub repo
                  </a>
                </div>
              </div>
              <div className={styles.projectStack}>
                <div className={styles.iconContainer}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <title>JavaScript</title>
                    <path
                      d="M118 0H10A10 10 0 000 10v108a10 10 0 0010 10h108a10 10 0 0010-10V10a10 10 0 00-10-10zM68.39 100.08c0 12.46-7.31 18.13-18 18.13-9.62 0-15.21-5-18-11l9.79-5.92c1.89 3.35 3.61 6.18 7.73 6.18 4 0 6.45-1.55 6.45-7.56V59h12zm28.44 18.13c-11.17 0-18.39-5.33-21.91-12.29l9.79-5.67c2.58 4.21 5.93 7.31 11.86 7.31 5 0 8.16-2.49 8.16-5.93 0-4.13-3.26-5.59-8.76-8l-3-1.29C84.29 88.65 78.53 84 78.53 74.22c0-9 6.87-15.9 17.61-15.9 7.65 0 13.15 2.67 17.1 9.63l-9.36 6c-2.07-3.69-4.3-5.15-7.74-5.15S90.39 71 90.39 74c0 3.61 2.23 5.07 7.38 7.31l3 1.28c10.23 4.39 16 8.85 16 18.91-.01 10.78-8.51 16.71-19.94 16.71z"
                      fill={svgColor}
                    ></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <title>API</title>
                    <path
                      d="M16.11 42.51v43h10.75V74.74H37.6v10.75h10.74v-43zM37.6 64H26.86V53.26H37.6zM69.83 42.51H59.09v43h10.74V74.74h21.49V42.51zM80.57 64H69.83V53.26h10.74zM102.06 42.51h10.74v42.97h-10.74zM77.43 12.97L64.46 0 51.49 12.97H0v21.49h10.74V23.71h45.2l8.52-8.51 8.52 8.51h45.19v10.75h10.75V12.97H77.43zM118.17 93.54v10.75H72.98l-8.52 8.51-8.52-8.51h-45.2V93.54H0v21.49h51.49L64.46 128l12.97-12.97h51.49V93.54h-10.75z"
                      fill={svgColor}
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.topContainer}>
              <Link to="/projects/theplanetisyourcanvas">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  onMouseEnter={() => {
                    setOnTop(!onTop);
                  }}
                  whileInView={{
                    scale: [1, 1.03, 1, 1.03, 1],
                  }}
                  transition={{
                    scale: {
                      duration: 0.7,
                      repeat: Infinity,
                      repeatDelay: 7,
                    },
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  initial={{ rotate: 0 }}
                  // whileTap={{ scale: 1.1 }}
                  // transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div
                    className={`${styles.projectCard} ${styles.tooltip}`}
                    // onClick={() => setShowModal(true)}
                  >
                    <span className={styles.tooltiptext}>
                      Featured project <br /> click for details
                    </span>
                    <div className={styles.projectImg}>
                      <img
                        src="../assets/Planet.png"
                        alt="Screenshot of the Planet is your canvas"
                      />
                    </div>

                    <div className={styles.projectData}>
                      <div className={styles.projectTitle}>
                        The planet is your canvas
                      </div>
                      <div className={styles.projectDescription}>
                        Webpage for the art contest: The planet is your canvas
                        (Latin America and the Caribbean 2022-2023).
                        <br />
                        <br />
                        My first real client project. The webpage was built with
                        React and used Firebase Database & Authentication to
                        register users and their votes during the voting stage
                        of the competition.
                      </div>
                    </div>
                    <div className={styles.projectStack}>
                      <div className={styles.iconContainer}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 144 128"
                        >
                          <title>React</title>
                          <path
                            d="M71.93 51.18A12.82 12.82 0 1084.75 64a12.82 12.82 0 00-12.82-12.82zM36 89.5l-2.83-.72C12.1 83.45 0 74.41 0 64s12.1-19.51 33.18-24.84l2.82-.71.8 2.8A141.38 141.38 0 0045 62.7l.59 1.3-.59 1.26a139.18 139.18 0 00-8.19 21.44zm-4.13-43.79C15.84 50.22 6 57.1 6 64s9.83 13.75 25.86 18.26A149.86 149.86 0 0139 64a148.61 148.61 0 01-7.13-18.29zm76 43.79l-.8-2.81a140.22 140.22 0 00-8.17-21.44L98.27 64l.61-1.27a140.73 140.73 0 008.17-21.45l.8-2.81 2.84.72c21.08 5.33 33.17 14.37 33.17 24.81s-12.09 19.48-33.17 24.81zM104.91 64A149.77 149.77 0 01112 82.23c16-4.51 25.87-11.39 25.87-18.26S128 50.22 112 45.71A148.55 148.55 0 01104.91 64zM31.83 45.68L31 42.89C25.1 22 26.9 7 36 1.79c8.89-5.13 23.16.93 38.11 16.28l2 2.09-2 2.09A141.37 141.37 0 0059.57 40l-.81 1.15-1.41.12A142.66 142.66 0 0034.66 45zM43.2 5.94A8.37 8.37 0 0039 7c-6 3.43-7 15.37-2.91 31.49a151 151 0 0119.38-3 149.94 149.94 0 0112.3-15.25c-9.38-9.13-18.23-14.3-24.57-14.3zM100.67 128c-8.54 0-19.51-6.43-30.89-18.12l-2-2.09 2-2.1A140 140 0 0084.29 87.9l.81-1.15 1.4-.12A141.45 141.45 0 00109.2 83l2.83-.72.81 2.81c5.91 20.88 4.12 35.86-4.94 41.08a14.29 14.29 0 01-7.23 1.83zm-24.55-20.27c9.35 9.11 18.21 14.27 24.55 14.27a8.3 8.3 0 004.22-1c6-3.44 7-15.38 2.91-31.5a149.27 149.27 0 01-19.38 3 148.85 148.85 0 01-12.3 15.23zm35.91-62L109.2 45a141.47 141.47 0 00-22.7-3.66l-1.4-.12-.81-1.22a140 140 0 00-14.51-17.75l-2-2.09 2-2.09C84.73 2.72 99-3.34 107.9 1.79 117 7 118.76 22 112.84 42.88zM88.42 35.46a149.92 149.92 0 0119.38 3c4.11-16.12 3-28.06-2.91-31.49s-17 1.82-28.77 13.23a149.94 149.94 0 0112.3 15.26zM43.2 128a14.17 14.17 0 01-7.2-1.85c-9.1-5.22-10.9-20.15-5-41.08l.79-2.81 2.83.72a142.38 142.38 0 0022.69 3.65l1.41.12.8 1.15a140.9 140.9 0 0014.52 17.79l2 2.1-2 2.09C62.69 121.57 51.73 128 43.2 128zm-7.14-38.53C32 105.59 33 117.53 39 121s17-1.83 28.77-13.24a149.94 149.94 0 01-12.3-15.25 149.27 149.27 0 01-19.41-3.04zm35.87 3.77c-4.93 0-10-.22-15.08-.64l-1.41-.12-.81-1.15q-4.31-6.19-8.09-12.72t-7-13.36L39 64l.6-1.27q3.21-6.83 7-13.36c2.48-4.29 5.21-8.57 8.09-12.72l.81-1.16 1.41-.12a178.8 178.8 0 0130.17 0l1.4.12.81 1.16a179.92 179.92 0 0115.02 26.05l.61 1.27-.61 1.28a178.48 178.48 0 01-15.08 26.08l-.81 1.15-1.42.12c-5.06.4-10.13.64-15.07.64zm-13.17-6.5a175.58 175.58 0 0026.35 0A175.27 175.27 0 0098.27 64 171.21 171.21 0 0085.1 41.21a172.84 172.84 0 00-26.34 0A171.21 171.21 0 0045.59 64a175.34 175.34 0 0013.17 22.74z"
                            fill={svgColor}
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 114 128"
                        >
                          <title>CSS</title>
                          <path
                            d="M0 0l10.67 115.55L56.89 128l46.22-12.45L113.78 0zm90.87 37.45L56.85 52h-.08 32.9l-3.76 43.31-29 8.46-29.23-8.62-1.88-21.8h14.48l.94 11.29 15.5 3.92h.13l16-4.51L74 65.83l-17.14-.06-32-.1L23.76 52l33.09-13.75 1.93-.8H22.51l-1.72-14h71.49z"
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
                  </div>
                </motion.div>
              </Link>
            </div>

            <div className={`${styles.projectCard} ${styles.tooltip}`}>
              <span className={styles.tooltiptext}>Excercise</span>
              <div className={styles.projectImg}>
                <img src="../assets/framer.png" alt="Screenshot of a website" />
              </div>
              <div className={styles.projectData}>
                <div className={styles.projectTitle}>Framer Motion</div>
                <div className={styles.projectDescription}>
                  Experimenting with framer motion to add various animations and
                  transitions to a webpage. Work in progress.
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://framer.netlify.app/" target="_blank">
                    Deployed website
                  </a>
                  {/* &nbsp;|&nbsp; */}
                </div>
              </div>
              <div className={styles.projectStack}>
                <div className={styles.iconContainer}>
                  <svg
                    width="15"
                    height="23"
                    viewBox="0 0 15 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Framer Motion</title>
                    <path
                      d="M0 7.55094H7.41477L15 15.2755H7.41477V23L0 15.2755V7.55094ZM0 0H15V7.55094H7.41477L0 0Z"
                      fill={svgColor}
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 128">
                    <title>React</title>
                    <path
                      d="M71.93 51.18A12.82 12.82 0 1084.75 64a12.82 12.82 0 00-12.82-12.82zM36 89.5l-2.83-.72C12.1 83.45 0 74.41 0 64s12.1-19.51 33.18-24.84l2.82-.71.8 2.8A141.38 141.38 0 0045 62.7l.59 1.3-.59 1.26a139.18 139.18 0 00-8.19 21.44zm-4.13-43.79C15.84 50.22 6 57.1 6 64s9.83 13.75 25.86 18.26A149.86 149.86 0 0139 64a148.61 148.61 0 01-7.13-18.29zm76 43.79l-.8-2.81a140.22 140.22 0 00-8.17-21.44L98.27 64l.61-1.27a140.73 140.73 0 008.17-21.45l.8-2.81 2.84.72c21.08 5.33 33.17 14.37 33.17 24.81s-12.09 19.48-33.17 24.81zM104.91 64A149.77 149.77 0 01112 82.23c16-4.51 25.87-11.39 25.87-18.26S128 50.22 112 45.71A148.55 148.55 0 01104.91 64zM31.83 45.68L31 42.89C25.1 22 26.9 7 36 1.79c8.89-5.13 23.16.93 38.11 16.28l2 2.09-2 2.09A141.37 141.37 0 0059.57 40l-.81 1.15-1.41.12A142.66 142.66 0 0034.66 45zM43.2 5.94A8.37 8.37 0 0039 7c-6 3.43-7 15.37-2.91 31.49a151 151 0 0119.38-3 149.94 149.94 0 0112.3-15.25c-9.38-9.13-18.23-14.3-24.57-14.3zM100.67 128c-8.54 0-19.51-6.43-30.89-18.12l-2-2.09 2-2.1A140 140 0 0084.29 87.9l.81-1.15 1.4-.12A141.45 141.45 0 00109.2 83l2.83-.72.81 2.81c5.91 20.88 4.12 35.86-4.94 41.08a14.29 14.29 0 01-7.23 1.83zm-24.55-20.27c9.35 9.11 18.21 14.27 24.55 14.27a8.3 8.3 0 004.22-1c6-3.44 7-15.38 2.91-31.5a149.27 149.27 0 01-19.38 3 148.85 148.85 0 01-12.3 15.23zm35.91-62L109.2 45a141.47 141.47 0 00-22.7-3.66l-1.4-.12-.81-1.22a140 140 0 00-14.51-17.75l-2-2.09 2-2.09C84.73 2.72 99-3.34 107.9 1.79 117 7 118.76 22 112.84 42.88zM88.42 35.46a149.92 149.92 0 0119.38 3c4.11-16.12 3-28.06-2.91-31.49s-17 1.82-28.77 13.23a149.94 149.94 0 0112.3 15.26zM43.2 128a14.17 14.17 0 01-7.2-1.85c-9.1-5.22-10.9-20.15-5-41.08l.79-2.81 2.83.72a142.38 142.38 0 0022.69 3.65l1.41.12.8 1.15a140.9 140.9 0 0014.52 17.79l2 2.1-2 2.09C62.69 121.57 51.73 128 43.2 128zm-7.14-38.53C32 105.59 33 117.53 39 121s17-1.83 28.77-13.24a149.94 149.94 0 01-12.3-15.25 149.27 149.27 0 01-19.41-3.04zm35.87 3.77c-4.93 0-10-.22-15.08-.64l-1.41-.12-.81-1.15q-4.31-6.19-8.09-12.72t-7-13.36L39 64l.6-1.27q3.21-6.83 7-13.36c2.48-4.29 5.21-8.57 8.09-12.72l.81-1.16 1.41-.12a178.8 178.8 0 0130.17 0l1.4.12.81 1.16a179.92 179.92 0 0115.02 26.05l.61 1.27-.61 1.28a178.48 178.48 0 01-15.08 26.08l-.81 1.15-1.42.12c-5.06.4-10.13.64-15.07.64zm-13.17-6.5a175.58 175.58 0 0026.35 0A175.27 175.27 0 0098.27 64 171.21 171.21 0 0085.1 41.21a172.84 172.84 0 00-26.34 0A171.21 171.21 0 0045.59 64a175.34 175.34 0 0013.17 22.74z"
                      fill={svgColor}
                    ></path>
                  </svg>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 128">
                    <title>CSS</title>
                    <path
                      d="M0 0l10.67 115.55L56.89 128l46.22-12.45L113.78 0zm90.87 37.45L56.85 52h-.08 32.9l-3.76 43.31-29 8.46-29.23-8.62-1.88-21.8h14.48l.94 11.29 15.5 3.92h.13l16-4.51L74 65.83l-17.14-.06-32-.1L23.76 52l33.09-13.75 1.93-.8H22.51l-1.72-14h71.49z"
                      fill={svgColor}
                    ></path>
                  </svg> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && <ProjectModal setShowModal={setShowModal} />}
      </div>
    </>
  );
}

export default Projects;
