import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Journey.module.css";

function Journey() {
  const [isAboutSectionInView, setIsAboutSectionInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("main");
      if (aboutSection && aboutSection.getBoundingClientRect().top <= 0) {
        setIsAboutSectionInView(true);
      } else {
        setIsAboutSectionInView(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function setStickyContainersSize() {
      document
        .querySelectorAll(".sticky-container")
        .forEach(function (container) {
          const mainElement = container.querySelector("main");
          if (mainElement) {
            const stikyContainerHeight = mainElement.scrollWidth;
            container.setAttribute(
              "style",
              "height: " + stikyContainerHeight + "px"
            );
          }
        });
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= 0 && rect.bottom > document.documentElement.clientHeight
      );
    }

    function wheelHandler(evt) {
      const containerInViewPort = Array.from(
        document.querySelectorAll(".sticky-container")
      ).filter(function (container) {
        return isElementInViewport(container);
      })[0];

      if (!containerInViewPort) {
        return;
      }

      const isPlaceHolderBelowTop =
        containerInViewPort.offsetTop < document.documentElement.scrollTop;
      const isPlaceHolderBelowBottom =
        containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
        document.documentElement.scrollTop;
      let g_canScrollHorizontally =
        isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

      if (g_canScrollHorizontally) {
        const mainElement = containerInViewPort.querySelector("main");
        if (mainElement) {
          mainElement.scrollLeft += evt.deltaY;
        }
      }
    }

    setStickyContainersSize();
    window.addEventListener("wheel", wheelHandler);

    return () => {
      window.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  const handleScroll = () => {
    const aboutSection = document.getElementById("projects");
    aboutSection.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });

    const link = document.createElement("a");
    link.href = "/assets/CV-ARojas.pdf";
    link.download = "CV-ARojas.pdf";
    link.click();
  };

  return (
    <div className="section--journey sticky-container" id="about">
      <main>
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
            but I also launched my own quarterly newspaper to promote art and
            culture in Puebla, Mexico.
            <br />
            <br />
            One of the highlights of my studies was going to Amsterdam for my
            internship at GLU magazine. This was my first time in Europe, and
            the design of the city made a big impression on me, which led me to
            try and change career paths.
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
            Back from Spain, I attempted to get my foot in the planning
            department of the city, however it was hard, partly because of how
            politics are in Mexico, and also because urban renewal was still not
            in the political agenda. <br />
            <br />
            At this time, I started to code with HTML, CSS and some JS, and got
            a job at Gurú Brand Buro as a web developer.
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
            until the masters took all of my time.
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineTitle}>2014-2022 Paid the bills</div>
          <div className={styles.timelineDescription}>
            After graduating from the MSc, I moved to London, and finding a job
            in urban development was still hard. Soon I had to find any job to
            start paying the bills. I did customer support in various levels,
            got a certification to teach tennis, and moderated content for
            TikTok. <br />
            <br /> During this time, I gained valuable and transferable soft
            skills.
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineTitle}>2022 Moved to Stockholm</div>
          <div className={styles.timelineDescription}>
            I moved to Sweden following my partner & thanks to free education in
            the country, I joined the Frontend Development program @ Hyper
            Island to get myself back into coding.
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineTitle}>2023</div>
          <div className={styles.timelineDescription}>
            I am now looking for an internship to finish my frontend developer
            program and to start my professional career. <br />
            <br /> Ideally, I would like to be an intern in a company that
            offers a supportive and nurturing environment. I want to learn from
            more experienced devs, explore new things, and would also appreciate
            having space to explore my current interests.
          </div>
        </div>
        {/*         <div className={`${styles.timelineItem} ${styles.hiddenItem}`}>
          <div className={styles.timelineTitle}>2023</div>
          <div className={styles.timelineDescription}>
            I am now looking for an internship to finish my studies and to start
            my professional career.
          </div>
        </div> */}
      </main>
      <div
        className={`${isAboutSectionInView ? `${styles.cvNext}` : "continue"}`}
      >
        <a onClick={handleScroll}>
          If you rather just look at my cv, download it here and continue to
          projects
        </a>
      </div>
    </div>
  );
}

export default Journey;
