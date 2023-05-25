import React, { useEffect, useRef, useState } from "react";

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
  };

  return (
    <div className="section--journey sticky-container" id="about">
      <main>
        <div className="timeline--item"></div>
        <div className="timeline--item">
          <div
            alt="Baby Ale with her first computer"
            className="timeline--img"
          ></div>
          <div className="timeline--photo--title">
            My interest in technology & tennis started at a young age
          </div>
        </div>
        <div className="timeline--item">
          <div className="timeline--title">
            2007 Information Design bachelor
          </div>
          <div className="timeline--description">
            Graduated from UDLAP, Mexico. <br />
            <br />
            One of the highlights of my studies was going to Amsterdam for my
            internship at GLU magazine. This was my first time in Europe, and
            the design of the city made a big impression on me, this led me to
            change my career path.
          </div>
        </div>
        <div className="timeline--item">
          <div className="timeline--title">2008 Moved to Barcelona</div>
          <div className="timeline--description">
            Joined the MA Urban Design: Art, City, Society at the Universitat de
            Barcelona. <br />
            <br />
            At the same time I was working as a freelance designer, mostly
            editorial, but also some web design.
          </div>
        </div>
        <div className="timeline--item">
          <div className="timeline--title">2010 Started coding webpages</div>
          <div className="timeline--description">
            Back from Spain, I attempted to get my foot in the planning
            department of the city, however it was hard, partly because of the
            politics of mexican bureocracy, and also because urban renewal was
            still not in the political agenda. <br />
            <br />
            At this time, I started to code with the basics (HTML, CSS and JS),
            and got a job at Gurú Brand Buro as a developer.
          </div>
        </div>
        <div className="timeline--item">
          <div className="timeline--title">2012 Moved to the UK</div>
          <div className="timeline--description">
            Still thinking about the design of the cities, I managed to get
            government funding (CONACYT) to do a Science Masters in Urban
            Regeneration at Sheffield Hallam University. <br />
            <br /> I continued working remotly for Gurú for a little longer,
            until the studies took all of my time.
          </div>
        </div>
        <div className="timeline--item">
          <div className="timeline--title">2014-2022 Paid the bills</div>
          <div className="timeline--description">
            After graduating from the MSc, I moved to London, and finding a job
            in urban development was still hard; Soon I had to find ANY job to
            start paying the bills. I did customer support throught out this
            time, and during the pandemic I moderated content for TikTok. <br />
            <br /> Throughout this time, I gained valuable and transferable soft
            skills.
          </div>
        </div>
        <div className="timeline--item">
          <div className="timeline--title">2022 Moved to Stockholm</div>
          <div className="timeline--description">
            I moved to Sweden following my partner & thanks to free education in
            the country, I joined the Frontend Development program @ Hyper
            Island to get myself back into coding.
          </div>
        </div>
        <div className="timeline--item">
          <div className="timeline--title">2023</div>
          <div className="timeline--description">
            I am now looking for an internship to finish my studies and to start
            my professional career.
          </div>
        </div>

        <div className="timeline--item hidden--item">
          <div className="timeline--title">2023</div>
          <div className="timeline--description">
            I am now looking for an internship to finish my studies and to start
            my professional career.
          </div>
        </div>
      </main>
      <div className={`${isAboutSectionInView ? "show" : "continue"}`}>
        If you rather just look at my cv,&nbsp;
        <a
          href="/assets/CV-ARojas.pdf"
          download="CV-ARojas.pdf"
          onClick={handleScroll}
        >
          download it here and continue to projects
        </a>
      </div>
    </div>
  );
}

export default Journey;
