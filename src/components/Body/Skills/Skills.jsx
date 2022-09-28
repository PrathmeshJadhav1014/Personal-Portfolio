import React from 'react'
import "./Skills.css"
import Topbar from "../Topbar";
import Circle from './Circle';

function Skills() {

  return (
    <div className='Skills'>
    <nav >
        <Topbar />
      </nav>
    <div className='portfolio' id='portfolio'>
      <div class="wrapper1">
        <div class="shape-1"></div>
        <div class="shape-2"></div>
        <div class="container">
            <h2>Technical Skills </h2>
            <div class="skills">
                <div class="details">
                    <span>HTML</span>
                    <span>90%</span>
                </div>
                <div class="rod">
                    <div id="html-rod"></div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span>CSS</span>
                    <span>75%</span>
                </div>
                <div class="rod">
                    <div id="css-rod"></div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span>Javascript</span>
                    <span>62%</span>
                </div>
                <div class="rod">
                    <div id="js-rod"></div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span>React JS</span>
                    <span>70%</span>
                </div>
                <div class="rod">
                    <div id="jQuery-rod"></div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span>Node JS & Express JS & MongoDB</span>
                    <span>60%</span>
                </div>
                <div class="rod">
                    <div id="js-rod"></div>
                </div>
            </div>
        </div>
    </div>
    <Circle/>


    </div>
    </div>
  )
}

export default Skills