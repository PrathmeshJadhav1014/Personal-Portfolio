import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Intro.css";
import Topbar from "./Topbar";
function Intro() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <div className="hero">
        <nav onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <Topbar />
        </nav>
        <div className="title">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="main_content"
          >
            <span>Hi, My Name Is</span>
            <br />
            <span className="name">
              <img
                src="https://see.fontimg.com/api/renderfont4/mLJ92/eyJyIjoiZnMiLCJoIjo2MCwidyI6MTI1MCwiZnMiOjQ4LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UHJhdGhtZXNoIEphZGhhdg/madrigal.png"
                alt=""
              />
            </span>
            <br />
            <div className="anination">
              <h3>
                <>I'm</>
                <div class="message">
                  <div class="word1">Web Developer</div>
                  <div class="word2">Freelancer</div>
                  <div class="word3">JS Developer</div>
                </div>
              </h3>
            </div>
            <span className="name2">I build things for the web.</span> <br />
            <p>
              I am Pune, Maharashtra based Certified Web developer. Eager to
              tackle web development/design challenges. <br />
              I have a serious passion for UI effects, animations and creating
              intuitive, dynamic user experiences.
              <br />
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
            </p>
          </div>
          <div className="myDIV">
            About Me
            <hr />
          </div>
          <div class="hide">
            <div className="about">
              <span>
                <img
                  src="https://see.fontimg.com/api/renderfont4/mLJ92/eyJyIjoiZnMiLCJoIjo0OSwidyI6MTI1MCwiZnMiOjM5LCJmZ2MiOiIjRkFGNUY1IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QWJvdXQgTWU/madrigal.png"
                  alt=""
                />
              </span>
              <hr />
              <div className="info-text">
                Hello! My name is Prathmesh and I enjoy creating things that
                live on the internet. <br />
                <br /> I am a Pune based Web developer. I Am a certified MERN
                Stack Developer. <br />
                <br /> Eager to tackle web development/design challenges to
                achieve lasting impacts on user experience. <br />
                <br />
                Interested in the entire frontend spectrum and working on
                ambitious projects with positive people.
              </div>
            </div>
          </div>
          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          />
        </div>
        <div className="movingbox">
          <div className="box1"></div>
          <div className="box2"></div>
        </div>
        <div className="contact">
          <ul>
            <li>
              <a href="https://www.instagram.com/prathmesh20_02_/?igshid=YmMyMTA2M2Y%3D" target="blank">
              <img src="https://img.icons8.com/doodle/30/000000/instagram-new.png" alt=""/>
              </a>
            </li>
            <li>
            <a href="https://github.com/PrathmeshJadhav1014" target="blank">
              <img src="https://img.icons8.com/doodle/48/000000/github--v1.png" alt=""  />
              </a>
            </li>
            <li>
              <img src="https://img.icons8.com/doodle/48/000000/facebook-new.png" alt=""/>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Intro;
